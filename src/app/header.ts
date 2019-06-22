/**
 *  @file       header.ts
 *  @brief      The Header module of the App subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/21/2019 created.
 *  @date       06/21/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Header module of the App subsystem.
 */
"use strict";

import { HTML } from "../dom/html";
import { UIElement } from "../dom/ui-element";

let header: UIElement = HTML.element("header")
  .setClass("site-header");

export { header }

// app/header.ts
