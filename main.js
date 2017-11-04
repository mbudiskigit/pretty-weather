const electron = require('electron')
const url = require('url')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

let janela

function createWindow () {
  
  janela = new BrowserWindow({width: 800, height: 600, resizable: false, center: true, maximizable: false})
  janela.setMenu(null);

  janela.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file'
  }));

  janela.on('closed', function () {
    janela = null
  });

  //janela.webContents.openDevTools();

}

app.on('ready', createWindow)