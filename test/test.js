import express from 'express';
import request from 'supertest';

const app = express();

app.get('/hello-world', (req, res) => {
    res.status(200).send({
        status: "Success",
        data: [],
        message: "Hello mr Gsus",
    });
});

describe('Get /hello-world', () => {
    it('Response ', (done) => {
        request(app)
            .get('/hello-world')
            .expect(200, {
                status: "Success",
                data: [],
                message: "Hello mr Gsus",
            }, done);
    });
});
