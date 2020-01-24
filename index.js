const { app, BrowserWindow } = require("electron");
const url = require("url");

function newApp() {
	const win = new BrowserWindow();
	win.loadURL(
		url.format(`file://${__dirname}/index.html`)
	);
}

app.on("ready", newApp);
