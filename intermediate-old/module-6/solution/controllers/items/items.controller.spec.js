"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supertest = require("supertest");
const express_1 = require("../../express");
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
        supertest(express_1.app)
            .post('/api/items')
            .expect(401)
            .end(() => {
            done();
        });
    });
});
//# sourceMappingURL=items.controller.spec.js.map