"use strict";
const path = require('path');
const electron = require('electron');
const {app, Menu, Tray}=require('electron');
const ipc = electron.ipcMain;

let appIcon = null;

ipc.on('put-in-tray', (ev) => {
    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
    const iconPath = path.join(__dirname, iconName);
    appIcon = new Tray(iconPath);
    const contextMenu = Menu.buildFromTemplate([{
        label: 'quit',
        click: function () {
            ev.sender.send('tray-removed');
        }
    }]);
    appIcon.setToolTip('MutualTalk-Tutor');
    appIcon.setContextMenu(contextMenu);
});

ipc.on('remove-tray', () => {
    appIcon.destroy();
});

app.on('window-all-closed', () => {
    appIcon && appIcon.destroy();
});