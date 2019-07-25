/**
 *  @file       channel.ts
 *  @brief      The Channel module of the Net subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/05/2019 created.
 *  @date       07/24/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Channel module of the Net subsystem.
 */
"use strict";

import { Message, MessageType } from "../event/message";

import { messageHandler } from "../control/message-handler";

class Channel {
  private _socket: WebSocket;

  constructor(host: string, port: string) {
    this._socket = new WebSocket(`ws://${host}:${port}/mute`);

    this._socket.onmessage = (e: MessageEvent): void => {
      console.log(e.data);
      messageHandler.handle(JSON.parse(e.data));
    }
  }

  send(text: string) {
    this._socket.send(
      JSON.stringify({
        "type": MessageType.User,
        "text": text.split(" "),
      })
    )
  }
}

//let channel = new Channel("localhost", "4004");
let channel = new Channel("120.101.58.19", "4004");

export { channel };

// net/channel.ts
