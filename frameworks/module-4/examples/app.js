"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
// const objId = new ObjectID();
// console.log(objId.getTimestamp());
function foo() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('start');
        const connection = yield mongodb_1.MongoClient.connect('mongodb://nodejs_user:Aa123456@ds161148.mlab.com:61148/nodejs-course-2018');
        const db = connection.db('nodejs-course-2018');
        console.log('connected');
        const docs = yield db.collection('people').find({}).toArray();
        console.log('test', docs);
        const insertResponse = yield db.collection('people').insertOne(new Director({
            name: 'Asaf',
            bribes: 5,
        }));
        console.log(insertResponse.insertedId);
        // const dir = new Director({});
        // if(dir.name){
        //     dir.name.substr(0);
        // }
    });
}
foo();
class Person {
}
class Employee extends Person {
}
class Director extends Person {
    constructor(director) {
        super();
        Object.assign(this, director);
    }
}
var PersonType;
(function (PersonType) {
    PersonType["Emplyee"] = "EMPLOYEE";
    PersonType["Director"] = "DIRECTOR";
})(PersonType || (PersonType = {}));
//# sourceMappingURL=app.js.map