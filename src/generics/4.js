"use strict";
function createOrUpdateUser(initialValues) {
    console.log('User updated with values:', initialValues);
}
createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123',
    name: 'John',
    surname: 'Doe'
});
