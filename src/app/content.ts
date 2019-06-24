/**
 *  @file       content.ts
 *  @brief      The content module of the App subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       06/21/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The content module of the App subsystem.
 */
"use strict";

import { HTML } from "../dom/html";
import { UIElement } from "../dom/ui-element";

import { ControlBar } from "../ui/control-bar";

let bar = new ControlBar();

let content: UIElement = HTML.element("article")
  .setClass("site-content")
// .setCSSProperty("backgroundColor", "#fffaf0")
  .appendNode(HTML.h4("this is我的 a test").setClass("mute-font").node)
  .appendNode(bar.node);

 export { content };

// app/content.ts
