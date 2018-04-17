import * as path from "path";
var prompt = require("prompt");

import {
  ServiceBusService,
  createServiceBusService,
  createQueueService,
  QueueService
} from "azure";

let serviceBusSvc = createServiceBusService(
  "Endpoint=sb://mailqueue.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=Hy+0qslxQpUIjIcD4YiSrp9ghXdAbILNn39WHkWd3Ik="
) as any;
//
// Start the prompt
//
prompt.start();

for (let index = 1; index < 10; index++) {
  serviceBusSvc.sendQueueMessage(
    "mailQueue",
    {
      body: `message ${index} `
    },
    function(error: any) {
      if (!error) {
        // message sent
        console.log("message sent");
      }
    }
  );
}

prompt.get(["email"], function(err: any, result: any) {});
