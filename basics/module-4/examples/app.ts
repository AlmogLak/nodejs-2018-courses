import { MongoClient } from 'mongodb';

async function foo() {
    console.log('start');
    const connection =
        await MongoClient.connect('mongodb://nodejs_user:Aa123456@ds161148.mlab.com:61148/nodejs-course-2018');
    const db = connection.db('nodejs-course-2018');
    console.log('connected');
    const docs = await db.collection('people').find<Employee | Director>({}).toArray();
    console.log('test', docs);

    const insertResponse = await db.collection('people').insertOne(new Director({
        name: 'Shomi',
        bribes: 0,
    }));

    console.log(insertResponse.insertedId,);


    // const dir = new Director({});

    // if(dir.name){
    //     dir.name.substr(0);
    // }
    
}

foo();


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