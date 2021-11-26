// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { exec } = require('child_process');
const { BrowserWindow } = require('electron').remote;
const app = require('electron').remote.app
var basepath = app.getAppPath();

const path = require('path')

function createMenuWindow (port, name) {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 900,
        height: 900,
        webPreferences: {
        webviewTag: true,
        nativeWindowOpen: false,
        nodeIntegration: false,
        contextIsolation: false
        }
    })

    mainWindow.loadURL('http://127.0.0.1:' + port + '/').then(() => {});
  
    mainWindow.webContents.on('did-fail-load', (childWindow) => {
        mainWindow.loadURL('http://127.0.0.1:' + port + '/');
    })

    mainWindow.on('close', () => {

        if (confirm('Click OK to stop the container?')) {
            exec(`docker stop ${name}`, (error, stdout, stderr) => {
                if (error) {
                    alert(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    // alert(`stderr: ${stderr}`);
                    return;
                }
            });
        } 
        
    })
}

const button = document.querySelector('#connect');
button.addEventListener('click', updateButton);
function updateButton() {

    const image = document.querySelector('#image').value;
    const volume = document.querySelector('#volume').value;
    const port = document.querySelector('#port').value;
    const name = document.querySelector('#name').value;
    const password = document.querySelector('#password').value;

    createMenuWindow(port, name);

    exec(`sh ${basepath}/server/session.sh ${volume} ${port} ${image} ${basepath} ${name} ${password}`, (error, stdout, stderr) => {
        
        if (error) {
            alert(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            alert(`stderr: ${stderr}`);
            return;
        }
            console.log(`stdout: ${stdout}`);

    });

    
}
