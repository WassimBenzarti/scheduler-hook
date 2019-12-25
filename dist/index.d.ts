import "isomorphic-fetch";
interface Task {
    url: string;
    method?: string;
    body?: object;
    query?: object;
    headers?: object;
    executionTimeISO: string;
}
export declare function schedule(task: Task): any;
export {};
