const { app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win;


function createWindow() {

    win = new BrowserWindow({
        width:500,
        height: 550
    })
    win.webContents.openDevTools();
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, '/index.html'),
            protocol: 'file:',
            slashes:true
        })
    )

    win.on('closed', ()=> {
        win = null;
    })
}




app.on('ready', createWindow)

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
  
  // initialize the app's main window
  app.on("activate", () => {
    if (win === null) {
      createWindow();
    }
  });

