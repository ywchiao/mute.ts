/**
 *  @file       message.ts
 *  @brief      The Message module of the Event subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/03/2019 created.
 *  @date       07/05/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Message module of the Event subsystem.
 */
"use strict";

enum MessageType {
  User = 1,
  Chat,
  Cmd,
  Combat,
}

interface Message {
  type: MessageType;
  text: Array<string>;
}

export { Message, MessageType };

// event/message.ts
