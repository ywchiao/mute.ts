/**
 *  @file       room-tab.ts
 *  @brief      The RoomTab module of the InfoTabs subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/27/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The RoomTab module of the InfoTabs subsystem.
 */
"use strict";

import { UIElement } from "../dom/ui-element";

import { roomView } from "../view/room-view";

class RoomTab extends UIElement {
  constructor() {
    super("wired-tab");

    this
      .setAttribute("name", "room")
      .appendNode(roomView.node);
  }
}

let roomTab = new RoomTab();

export { roomTab }

// info-tabs/room-tab.ts
