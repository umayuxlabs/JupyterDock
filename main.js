// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const { exec } = require('child_process');

app.commandLine.appendSwitch ("disable-http-cache");

function fixPath() {
	if (process.platform === 'win32') {
		return;
	}

	process.env.PATH = [
		'./node_modules/.bin',
		'/.nodebrew/current/bin',
		'/usr/local/bin',
		process.env.PATH,
	].join(':');
}

fixPath()

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true,
      nativeWindowOpen: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })
  
  // and load the index.html of the app.
  // mainWindow.loadURL('http://127.0.0.1:2541/');
  mainWindow.loadFile('index.html');
  
  mainWindow.webContents.on('did-create-window', (childWindow) => {
    // For example...
    // childWindow.webContents.on('will-navigate', (e) => {
    //   e.preventDefault()
    // })
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// const menu = Menu.buildFromTemplate(template)
// Menu.setApplicationMenu(menu)

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
