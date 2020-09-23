import { MongoClient, ObjectID } from 'mongodb';

// const objId = new ObjectID();
// const objId = new ObjectID("5aa3c9f48b142702fb2d2e32");
// console.log(objId.getTimestamp());

async function mongoExample() {
    console.log('start');
    const connection =
        await MongoClient.connect('mongodb://nodejs_user:Aa123456@ds117200.mlab.com:17200/course-2018');
    const db = connection.db('course-2018');
    console.log('connected');
    
    // Create
    // const insertResponse = await db.collection('people').insertOne(new Director({
    //     name: 'Almog',
    //     bribes: 12
    // }));
    // console.log(insertResponse);
    
    // Read:
    const docs = await db.collection('people').find<Employee | Director>({}).toArray();
    console.log('docs', docs);

    // Update
    // const updatedResponse = await db.collection('people').updateMany({"name": "Almog"}, { $set: {"bribes": 50} });
    // const updatedResponse = await db.collection('people').updateOne({"name": "Almog"}, { $set: {"bribes": 500} });
    // console.log(updatedResponse);
    // const updatedResponse = await db.collection('people').updateMany({"name": "Amjed"}, { $set: {"bribes": 0}}, {upsert: true});
    // console.log(updatedResponse);
    
    // Delete:
    // const deleteResponse = await db.collection('people').deleteMany({"name": "Almog"});
    // console.log(deleteResponse);
}

mongoExample().then(() => console.log("DONE!"));


class Person {
    name: string;
    type: PersonType
}

class Employee extends Person {
    salary: number;
}

class Director extends Person {
    bribes: number;

    constructor(director: Partial<Director>){
        super();
        Object.assign(this, director);
    }
}

enum PersonType{
    Emplyee = 'EMPLOYEE',
    Director = 'DIRECTOR'
}