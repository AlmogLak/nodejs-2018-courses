const fullName = (name: string, last: string) => `${name} ${last}`;

const nameWithAge = (name: string, last: string, age: number) => `${fullName(name, last)} (${age})`;

const printDetailes = (name: string, last: string, age: number) => {
    const result = nameWithAge(name, last, age);
    console.log(result);
}

printDetailes("Almog", "Laktivi", 30);
