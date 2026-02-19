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

function showAbout() {
    document.getElementById("about").style.display = "block"
    document.getElementById("config").style.display = "none"
}

function showConfig() {
    document.getElementById("about").style.display = "none"
    document.getElementById("config").style.display = "block"
}
