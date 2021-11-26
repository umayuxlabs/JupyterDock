# Docker Jupyter

We love jupyter lab, and the desktop version is amazing. However, we normally customize our libraries using docker images. So, We have created Docker Jupyter, an Electron APP for launching Jupyter lab instances as a desktop app.

All you need to have is an image with your dependencies and Jupyter Lab installed. Then, just use the GUI to generate a Jupyter Lab APP.

For the moment we have JupyterDock <strong> only available on MAC </strong>

## Build the app

```bash
npm install --save-dev -g electron-packager
npm install

# MAC OS
electron-packager . --overwrite --platform=darwin --arch=x64  --prune=true --out=release-builds --icon Curse.icns

# Windows
electron-packager . electron-tutorial-app --overwrite --asar --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Session Manager"

# Linux
electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds
```
