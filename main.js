const ipc = require('electron').ipcRenderer

// Tell main process to show the menu when demo button is clicked
//const contextMenuBtn = document.getElementById('context-menu')

//contextMenuBtn.addEventListener('click', function () {
//document.ready()
  ipc.send('toggle-window')
//})
