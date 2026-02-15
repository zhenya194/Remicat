const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 2000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true 
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
