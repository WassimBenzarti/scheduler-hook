import Config from "./Config";
import * as es6 from "es6-promise";
es6.polyfill();
import "isomorphic-fetch"

declare const fetch: any;

interface Task {
    url: string,
    method?: string,
    body?: object,
    query?: object,
    headers?: object,

    executionTimeISO: string,
}



export function schedule(task: Task) {
    return fetch(Config.NOTIFY_URL_DEV, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task),
    }).then(r => r.json());
}