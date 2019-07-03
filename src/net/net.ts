/**
 *  @file       net.ts
 *  @brief      The Net module of the Net subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/02/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Net module of the Net subsystem.
 */
"use strict";

import { Handler } from "../event/handler"

class Net {
  private _worker: Worker;

  constructor() {
    this._worker = new Worker("socket.js");

    this._worker.onmessage = self._on ;
  }

  _on(e: Event): void {
    console.log(`data sent to worker: ${e.data}`);
  }
}

export { Net };

// net/net.ts
