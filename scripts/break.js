const { appBreak, BrowserWindowBreak } = require('electron');

function createWindowBreak() {
  const winBreak = new BrowserWindowBreak({
    width: 2000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true 
    }
  });

  winBreak.loadFile('../pages/break.html');
}

appBreak.whenReady().then(createWindowBreak);
