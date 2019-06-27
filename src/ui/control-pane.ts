/**
 *  @file       control-pane.ts
 *  @brief      The ControlPane module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       06/25/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The ControlPane module of the UI subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { commandBar } from "./command-bar";
import { inputArea } from "./input-area";

let controlPane: UIElement = new UIElement("section");

controlPane
  .setStyle(`
    backgroundcolor: white;
    display: flex;
    flex-flow: column;
    flex: 0 1 auto;
    width: 100%;
  `)
  .appendNode(commandBar.node)
  .appendNode(inputArea.node);

export { controlPane }

// ui/control-pane.ts
