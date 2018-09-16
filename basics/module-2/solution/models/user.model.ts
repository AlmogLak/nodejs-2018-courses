export class User{
    constructor(private firstName: string,
        private lastName: string, 
        private address: string, 
        private age: number, 
        private attUUID: string) {}

    public getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}