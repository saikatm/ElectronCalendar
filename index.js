const electron = require("electron")
const app = electron.app
const BrowserWindow = electron.BrowserWindow
var mainWindow = null

app.on('ready', function(){
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    icon: __dirname + '/assets/google calendar ico.ico'
  })
mainWindow.loadURL('http://calendar.google.com');
})
