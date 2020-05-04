const Person = require('./person.js');

test('person age is 18', () => {
   const newPerson = new Person(18, "John");
   expect(newPerson.age).toBe(18)
})
test('person name is John', () => {
    const newPerson = new Person(18, "John");
    expect(newPerson.name).toBe("John")
})
test('person age is 22', () => {
    const newPerson = new Person(22);
    expect(newPerson.age).toBe(22)
})
test('person name is Mariia', () => {
    const newPerson = new Person(null, 'Mariia');
    expect(newPerson.name).toBe('Mariia')
})
test('person birthday increments age', () => {
    const newPerson = new Person(28);
    newPerson.birthDay();
    expect(newPerson.age).toBe(29)
})