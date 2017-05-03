const path = require('path');
const glob = require('glob');
const electron = require('electron');
const autoUpdater = require('./auto-updater');

const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

const debug = /--debug/.test(process.argv[2]);

if (process.mas) app.setName('MutualTalk-Tutor');

let mainWindow = null;

function initialize() {
    let shouldQuit = makeSingleInstance();
    if (shouldQuit) return app.quit();

    loadMainProcess();

    function createWindow() {
        let windowOptions = {
            width: 800,
            height: 600,
            title: app.getName(),
            center: true,//窗口显示在屏幕中央
            backgroundColor: '#c2185b',
            // titleBarStyle:'hidden-inset'
        };

        if (process.platform === 'linux') {
            windowOptions.icon = path.join(__dirname, '/assets/app-icon/png/512.png')
        }

        mainWindow = new BrowserWindow(windowOptions);
        mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));

        // Launch fullscreen with DevTools open, usage: npm run debug
        if (debug) {
            mainWindow.webContents.openDevTools();
            mainWindow.maximize();
            require('devtron').install()
        }

        mainWindow.on('closed', function () {
            mainWindow = null
        })
    }

    app.on('ready', function () {
        createWindow();
        autoUpdater.initialize()
    });

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });

    app.on('activate', function () {
        if (mainWindow === null) {
            createWindow()
        }
    })
}

// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance() {
    if (process.mas) return false;

    return app.makeSingleInstance(() => {
        if (mainWindow) {
            mainWindow.isMinimized() && mainWindow.restore();
            mainWindow.focus()
        }
    })
}

//加载main-process目录下的文件
function loadMainProcess() {
    let files = glob.sync(path.join(__dirname, 'main-process/**/*.js'));
    files.forEach(file => {
        require(file);
    });
    autoUpdater.updateMenu()
}

// Handle Squirrel on Windows startup events
switch (process.argv[1]) {
    case '--squirrel-install':
        autoUpdater.createShortcut(function () {
            app.quit()
        });
        break;
    case '--squirrel-uninstall':
        autoUpdater.removeShortcut(function () {
            app.quit()
        });
        break;
    case '--squirrel-obsolete':
    case '--squirrel-updated':
        app.quit();
        break;
    default:
        initialize();
}
