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
        const connection = yield mongodb_1.MongoClient.connect('mongodb://nodejs_user:Aa123456@ds117200.mlab.com:17200/course-2018');
        const db = connection.db('course-2018');
        console.log('connected');
        // Create
        // const insertResponse = await db.collection('people').insertOne(new Director({
        //     name: 'Almog',
        //     bribes: 12
        // }));
        // console.log(insertResponse);
        // Read:
        // const docs = await db.collection('people').find<Employee | Director>({}).toArray();
        // console.log('docs', docs);
        // Update
        // const updatedResponse = await db.collection('people').updateMany({"name": "Almog"}, { $set: {"bribes": 50} });
        // console.log(updatedResponse);
        // Delete:
        // const deleteResponse = await db.collection('people').deleteMany({"name": "Almog"});
        // console.log(deleteResponse);
    });
}
foo().then(() => console.log("DONE!"));
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