const {app, BrowserWindow} = require('electron');
const url = require("url");
const path = require("path");

let mainWindow,
loadingScreen,
windowParams = {
    width: 1000,
    height: 700,
    show: false
};

//image icon 
const nativeImage = require('electron').nativeImage;
var image = nativeImage.createFromPath(__dirname + './dist/assets/icon.png'); 
 // where public folder on the root dir

    image.setTemplateImage(true);


/*
{
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
      }*/ 

   function createWindow() {
     
    mainWindow = new BrowserWindow({show: false,icon: image})
    mainWindow.maximize();
    mainWindow.show();
      
      //worked for unpacked Folder -->
      //  mainWindow.loadFile('../../../index.html');
//__dirname+'/src
     // mainWindow.loadFile('../../../index.html');
     mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname,'./dist/index.html'),
          protocol: "file:",
          slashes: true
        })
      );
      
     /* mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show();

        if (loadingScreen) {
            let loadingScreenBounds = loadingScreen.getBounds();
            mainWindow.setBounds(loadingScreenBounds);
            loadingScreen.close();
        }
    });
*/
      // Open the DevTools.
      //mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

   /*function createLoadingScreen() {
    loadingScreen = new BrowserWindow(Object.assign(windowParams, {parent: mainWindow}));
    loadingScreen.loadURL('file://' + __dirname + './loading.html');
    loadingScreen.on('closed', () => loadingScreen = null);
    loadingScreen.webContents.on('did-finish-load', () => {
        loadingScreen.show();
    });
}
*/

app.on('ready', () => {
  //createLoadingScreen();
  createWindow();
});

//   app.on('ready',  createWindow);

    
    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })