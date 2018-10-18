
import * as supertest from 'supertest';
import { app } from '../../express';

describe('item.controller', () => {
    // it('should return 200 for items request', (done) => {
    //     const _app = app;
    //     supertest(app)
    //         .get('/api/items')
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .end(()=>{
    //             done();
    //         });
    // });
    it('should return an error 401 if put was send without auth header', (done) => {
        supertest(app)
            .post('/api/items')
            .expect(401)
            .end(()=>{
                done();
            });
    });
});