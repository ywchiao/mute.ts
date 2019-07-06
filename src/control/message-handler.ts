/**
 *  @file       message-handler.js
 *  @brief      The MessageHandler module of the Control subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/05/2019 created.
 *  @date       07/05/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The MessageHandler module of the Control subsystem.
 */
"use strict";

import { http } from "../net/http";
import { Message, MessageType } from "../event/message";

import { roomView } from "../view/room-view";
import { chatting } from "../view/chatting";

class MessageHandler {
  constructor() {
  }

  handle(message: Message): void {
    switch (message.type) {
      case MessageType.User:
         chatting.update(message.text.join(" "));

         break;

      default:
        console.log(`MessageHandler.handle(): ${message}`);
    }
  }
};

let messageHandler = new MessageHandler();

export { messageHandler };

// control/message-handler.js
