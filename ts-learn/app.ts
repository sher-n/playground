enum Role { ADMIN = 'ADMIN', READONLY = 'READONLY', AUTHOR = 'AUTHOR'};


const person = {
    name: 'John',
    age : 30,
    hobbies: ['debug', 'edit'],
    role : Role.ADMIN 
};

for (const hobby of person.hobbies) {
    console.log(hobby)
}
console.log(person.role)