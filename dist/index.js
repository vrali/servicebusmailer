"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt");
const azure_1 = require("azure");
let serviceBusSvc = azure_1.createServiceBusService("Endpoint=sb://mailqueue.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=Hy+0qslxQpUIjIcD4YiSrp9ghXdAbILNn39WHkWd3Ik=");
//
// Start the prompt
//
prompt.start();
for (let index = 1; index < 10; index++) {
    serviceBusSvc.sendQueueMessage("mailQueue", {
        body: `message ${index} `
    }, function (error) {
        if (!error) {
            // message sent
            console.log("message sent");
        }
    });
}
prompt.get(["email"], function (err, result) { });
