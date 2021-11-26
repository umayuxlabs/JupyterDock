// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

window.addEventListener("load", (event) => {

    let params = (new URL(document.location)).searchParams;
    let url = params.get("JupyterURL");
    let title = params.get("JupyterTitle");
    let project = params.get('Project');

    const webview = window.document.querySelector('webview')
    webview.src = url
    webview.style.top = '0px'
    document.title = project + ' | ' + title

}, false );

