/**
 *  @file       room-updater.js
 *  @brief      The RoomUpdater module of the Control subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/02/2019 created.
 *  @date       07/02/2019 last modified.
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
      .fetch("http://127.0.0.1:8080/view/inn")
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
