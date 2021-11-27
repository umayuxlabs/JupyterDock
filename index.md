## JupyterDock

We love jupyter lab, and the desktop version is amazing. However, we normally customize our libraries using docker images. So, We have created JupyterDock, an Electron APP for launching Jupyter lab instances as a desktop app running under docker containers giving you a lot of freedom!

All you need to have is a docker image with your dependencies installed (don't forget Jupyter Lab). Then, just use the GUI to generate a Jupyter Lab APP.

For the moment we have JupyterDock only available for MAC OS

## Requirements
* Make sure to have installed docker in your computer.
* Make sure to have installed jupyter lab in your docker image. 

By default an image with several data science tools and jupyter lab installed is available. 

## Launch JupyterDock
1. Before you start a jupyter instance, you need to select the image from docker hub with your customized environment.
2. You need to setup the directory where jupyter lab will be run (the root directory). 
3. Set the docker container name and the exposed port (if you are running multiple containers you need to setup a different port)
4. Define a password for your jupyter lab instance. 

![img](./session.png)

### Your jupyter lab is alive
![img](./jlab.png)
