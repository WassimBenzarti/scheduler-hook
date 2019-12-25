"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = __importDefault(require("./Config"));
require("isomorphic-fetch");
fetch(Config_1.default.NOTIFY_URL_DEV, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
}).then(function (r) { return r.json(); }).then(console.log);
function schedule(task) {
    return fetch(Config_1.default.NOTIFY_URL_DEV, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    }).then(function (r) { return r.json(); });
}
exports.schedule = schedule;
//# sourceMappingURL=index.js.map