/**
 *  @file       main.ts
 *  @brief      The entry module of the Mute.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/20/2019 created.
 *  @date       07/03/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The entry module of the Mute.
 */
"use strict";

import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile(path.join(__dirname, "../index.html"));

    mainWindow.webContents.openDevTools();

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow()
    }
})

// main.ts
