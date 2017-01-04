const {dialog, ipcMain}=require('electron');

ipcMain.on('open-file-dialog', (ev) => {
    dialog.showOpenDialog({
        properties: ['openFile', 'openDirectory']
    }, (files) => {
        if (files) {
            ev.sender.send('selected-directory', files);
        }
    })
});