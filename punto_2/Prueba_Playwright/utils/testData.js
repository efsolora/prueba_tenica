
const { faker } = require('@faker-js/faker');


const random = Math.floor(Math.random() * 100000);

export const newUser = {
  firstName: faker.person.firstName("male"),
  lastName: faker.person.lastName("male"),
  email: `efra${random}@test.com`,
  phone: "123456",
  password: "1234",
  address1: faker.location.streetAddress(),
  city: faker.location.city(),
  postcode: faker.location.zipCode(),
};

    
