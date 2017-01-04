const electron = require('electron');
const {app, dialog, globalShortcut}=require('electron');

app.on('ready', () => {
    globalShortcut.register('CommandOrControl+Alt+K', () => {
        dialog.showMessageBox({
            type: 'info',
            message: 'Success!',
            detail: '你使用了快捷键Command+Alt+K',
            button: ['确认', '取消']
        });
    });
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});