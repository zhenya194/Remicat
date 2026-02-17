const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 770,
    height: 800,
    webPreferences: {
      nodeIntegration: true 
    }
  });

  win.loadFile('pages/index.html');
}

app.whenReady().then(createWindow);
