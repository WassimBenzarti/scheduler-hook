import { schedule } from './../src'
import { expect } from 'chai'
import fetch from 'node-fetch';
import moment = require('moment');

describe('Schedule', () => {
    it('Should schedule successfully', async () => {
        const body = await schedule(
            {
                url: "http://localhost:3000/api/schedule",
                method: "get",
                executionTimeISO: moment().add(10, "seconds").toISOString(),
                query: {
                    hello: "world"
                }
            }
        );
        console.log(body);
        return true;
    })
})