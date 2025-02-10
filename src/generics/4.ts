type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: User): void {
  console.log('User updated with values:', initialValues);
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123',
  name: 'John',
  surname: 'Doe'
});
