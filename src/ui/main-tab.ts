/**
 *  @file       main-tab.ts
 *  @brief      The MainTab module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/27/2019 created.
 *  @date       06/28/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The MainTab module of the UI subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

class MainTab extends UIElement {
  constructor() {
    super("wired-tab");

    this
      .setAttribute("name", "main")
      .setStyle(`
        background-color: green;
        height: 100%;
      `);
  } // constructor

  update(content: string): UIElement {

    return this;
  } // update
} // MainTab

let mainTab = new MainTab();

export { mainTab }

// ui/main-tab.ts
