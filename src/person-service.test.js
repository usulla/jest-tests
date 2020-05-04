const PersonService = require('./person-service.js');

// test('PersonService should be with blank array', () => {
//     const personService = new PersonService();
//     expect(personService.person.length).toBe(0);
// })

// test('PersonService should save person', () => {
//     const personService = new PersonService();
//     personService.save({name:'Maria', age:29});
//     expect(personService.getAll()).toEqual([{name:'Maria', age:29}]);
// });
 
test('PersonService should search like name', () => {
    const personService = new PersonService();
    personService.save({name:'Maria', age:29});
    expect(personService.getByName('Maria')).not.toBeNull();
});
test('PersonService delete by name', () => {
    const personService = new PersonService();
    personService.save({name:'Maria', age:29});
    personService.deleteByName('Maria');
    expect(personService.getAll().length).toBe(0);
});

// test('PersonService should save person', () => {
//     const personService = new PersonService();
//     personService.save({name:'Maria', age:29});
//     expect(personService.getAll().length).toBe(1);
// })
// test('save person if not exist', () => {
//     const personService = new PersonService();
//     personService.save('Maria');
//     expect(personService.person).toContain('Maria');
// })

// test('update person if exist', () => {
//     const personService = new PersonService('Mila', 29);
//     personService.save('Mila', 30);
//     expect(personService.person).toContain('Maria');
// })