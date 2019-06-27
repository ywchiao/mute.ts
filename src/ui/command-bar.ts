/**
 *  @file       command-bar.ts
 *  @brief      The CommandBar module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/22/2019 created.
 *  @date       06/25/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The CommandBar module of the UI subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { Button } from "./button"

let commandBar: UIElement = new UIElement("div");

commandBar
  .setStyle(`
    display: flex;
    flex: 0 1 auto;
    justify-content: center;
    background-color: #ffff00ff;
  `)
  .appendNode((new Button("arrow_forward")).node)
  .appendNode((new Button("arrow_downward")).node)
  .appendNode((new Button("arrow_upward")).node)
  .appendNode((new Button("arrow_back")).node);

export { commandBar }

// ui/command-bar.ts
