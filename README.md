# Docker Jupyter

We love jupyter lab, and the desktop version is amazing. However, we normally customize our libraries using docker images. So, We have created JupyterDock, an Electron APP for launching Jupyter lab instances as a desktop app running under docker containers.

All you need to have is a docker image with your dependencies installed (don't forget Jupyter Lab). Then, just use the GUI to generate a Jupyter Lab APP.

For the moment we have JupyterDock <strong> only available for MAC OS </strong>

## Usage

see documentation <a href="https://umayuxlabs.github.io/JupyterDock/">here</a>

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
