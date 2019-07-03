/**
 *  @file       todo-tab.ts
 *  @brief      The TodoTab module of the InfoTabs subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The TodoTab module of the InfoTabs subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

class TodoTab extends UIElement {
  constructor() {
    super("wired-tab");

    this
      .setAttribute("name", "todo")
      .setStyle(`
        background-color: green;
        height: 100%;
      `);
  }
}

let todoTab = new TodoTab();

export { todoTab }

// info-tabs/todo-tab.ts
