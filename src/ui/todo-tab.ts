/**
 *  @file       todo-tab.ts
 *  @brief      The TodoTab module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       06/25/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The TodoTab module of the UI subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

let todoTab: UIElement = new UIElement("wired-tab");

todoTab
  .setAttribute("name", "todo")
  .setStyle(`
    background-color: green;
    height: 100%;
  `);

export { todoTab }

// ui/todo-tab.ts
