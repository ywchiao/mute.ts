/**
 *  @file       bag-tab.ts
 *  @brief      The BagTab module of the InfoTabs subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/27/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The BagTab module of the InfoTabs subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

class BagTab extends UIElement {
  constructor() {
    super("wired-tab");

    this
      .setAttribute("name", "行囊")
      .setStyle(`
        background-color: green;
        height: 100%;
      `);
  }
}

let bagTab = new BagTab();

export { bagTab }

// info-tabs/bag-tab.ts
