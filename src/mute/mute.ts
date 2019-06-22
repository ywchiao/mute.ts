/**
 *  @file       mute.ts
 *  @brief      The entry module of the Mute.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       06/21/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The entry module of the Mute.
 */

import { remote } from "electron";
import { HTML } from "../dom/html";
import { app } from "../app/app";

window.addEventListener("load", () => {
  document.body = app.node;
});

// mute.ts
