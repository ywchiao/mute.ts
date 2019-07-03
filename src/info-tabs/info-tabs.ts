/**
 *  @file       info-tabs.ts
 *  @brief      The InfoTabs module of the InfoTabs subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/25/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The InfoTabs module of the InfoTabs subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { bagTab } from "./bag-tab";
import { roomTab } from "./room-tab";
import { todoTab } from "./todo-tab";

class InfoTabs extends UIElement {
  constructor() {
    super("wired-tabs");

    this.setStyle(`
      --wired-item-selected-bg: #535761ff;
      --wired-item-selected-color: white;
      background-color: #131937ff;
      color: white;
      flex: 1 0 auto;
      max-height: 50%;
      width: 100%;
    `);

    this
      .appendNode(roomTab.node)
      .appendNode(todoTab.node)
      .appendNode(bagTab.node);
  }
}

let infoTabs = new InfoTabs();

export { infoTabs }

// info-tabs/info-tabs.ts
