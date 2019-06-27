/**
 *  @file       mute.ts
 *  @brief      The entry module of the Mute.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       06/27/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The entry module of the Mute.
 */
"use strict";

import { remote } from "electron";
import { HTML } from "../dom/html";
import { app } from "../app/app";
import { loadFonts} from "../font/font";
import { http } from "../net/http";

window.addEventListener("load", () => {
  http.fetch("http://127.0.0.1:8080/view/inn")
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
    });

  loadFonts();

  document.body = app.node;
});

// mute.ts
