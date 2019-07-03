/**
 *  @file       mute.ts
 *  @brief      The entry module of the Mute.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       07/02/2019 last modified.
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
import { loadFonts} from "../font/font";
import { view } from "../view/view";

import { roomUpdater } from "../control/room-updater";

import { content } from "./content";
import { footer } from "./footer";
import { header } from "./header";

window.addEventListener("load", () => {
  loadFonts();

  view.setHeader(header)
    .setContent(content)
    .setFooter(footer);

  roomUpdater.update();

  document.body = view.node;
});

// mute.ts
