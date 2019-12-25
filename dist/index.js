"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = __importDefault(require("./Config"));
var es6 = __importStar(require("es6-promise"));
es6.polyfill();
require("isomorphic-fetch");
function schedule(task) {
    return fetch(Config_1.default.NOTIFY_URL_DEV, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task),
    }).then(function (r) { return r.json(); });
}
exports.schedule = schedule;
//# sourceMappingURL=index.js.map