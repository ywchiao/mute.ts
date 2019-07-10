/**
 *  @file       description.js
 *  @brief      The Description module of the Model subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/09/2019 created.
 *  @date       07/09/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Description module of the Model subsystem.
 */
"use strict";

import * as fs from "fs";

import { roomView } from "../view/room-view";

class Description {
  private _cache: Map<string, Array<string>>;

  constructor() {
    fs.readFile("./assets/json/description.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      }

      this._cache = JSON.parse(<string>data);

      console.log(this.getText("c109e34ae42c4d9baf003a4a63025b3d"));
      roomView.update(this.getText("c109e34ae42c4d9baf003a4a63025b3d"));
    })
  }

  getText(entity: string): string {
    return this._cache[entity].join();
  }
};

let description = new Description();

export { description };

// model/description.js
