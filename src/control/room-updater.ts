/**
 *  @file       room-updater.js
 *  @brief      The RoomUpdater module of the Control subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/02/2019 created.
 *  @date       07/23/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The RoomUpdater module of the Control subsystem.
 */
"use strict";

import { http } from "../net/http";
import { roomView } from "../view/room-view";

class RoomUpdater {
  constructor() {
  }

  update(): RoomUpdater {
    http
      .fetch("http://120.101.58.19:4004/view/inn")
      .then(res => {
        console.log(JSON.stringify(res, null, 2));

        roomView.update(res["description"]);
      });

    return this;
  }
};

let roomUpdater = new RoomUpdater();

export { roomUpdater };

// control/room-updater.js
