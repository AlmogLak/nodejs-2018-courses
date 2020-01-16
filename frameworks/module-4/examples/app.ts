import { MongoClient, ObjectID } from 'mongodb';

// const objId = new ObjectID();
// console.log(objId.getTimestamp());

async function foo() {
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
    // const docs = await db.collection('people').find<Employee | Director>({}).toArray();
    // console.log('docs', docs);

    // Update
    // const updatedResponse = await db.collection('people').updateMany({"name": "Almog"}, { $set: {"bribes": 50} });
    // console.log(updatedResponse);
    // const result = await db.collection(COLLECTION_NAME).update({ _id: user._id }, user, {upsert: true});

    // Delete:
    // const deleteResponse = await db.collection('people').deleteMany({"name": "Almog"});
    // console.log(deleteResponse);
}

foo().then(() => console.log("DONE!"));


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