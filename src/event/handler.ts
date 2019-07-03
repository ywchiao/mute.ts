/**
 *  @file       handler.ts
 *  @brief      The Handler module of the Event subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/02/2019 created.
 *  @date       07/02/2019 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2019 Yiwei Chiao
 *  @details
 *
 *  The Handler module of the Event subsystem.
 */
"use strict";

interface Handler {
  (e: Event): void;
}

export { Handler };

// event/handler.ts
