export declare class User {
    private firstName;
    private lastName;
    private address;
    private age;
    private attUUID;
    constructor(firstName: string, lastName: string, address: string, age: number, attUUID: string);
    getFullName(): string;
}
