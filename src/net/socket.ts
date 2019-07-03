/**
 *  @file       socket.ts
 *  @brief      The Socket module of the Net subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/03/2019 created.
 *  @date       07/03/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Socket module of the Net subsystem.
 */
"use strict";

import { Message } from "../event/message";

class Socket {
  private _socket: WebSocket;
  private _buffer: Array<Message> = [];

  constructor() {
  }

  connect(host: string, port: string): Socket {
    this._socket = new WebSocket(`ws://${host}:${port}`);

    this._socket.onclose = this.onClose;
    this._socket.onmessage = this.onMessage;
    this._socket.onopen = this.onOpen;

    return this;
  }

  onClose(): void {
  }

  onMessage(e: Event): void {
    this._buffer.append(JSON.parse(e.data));
  }

  onOpen(e: Event): void {
  }

  send(msg: Message): void {
    this._socket.send(JSON.stringify(msg));
  }
}

let socket = new Socket();

export { socket };

// net/socket.ts
