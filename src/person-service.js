class PersonService {
    constructor() {
        this.persons = [];
    }

    getByName(name) {
        const filterName = this.persons.filter(person => person.name === name);
        return filterName.length !== 0 ? filterName : undefined;
    }

    getAll() {
        return this.persons;
    }

    deleteByName(name) {
        const deletePerson = this.persons.filter(person => person.name !== name)
        this.persons = deletePerson;
    }

    save(persons) {
        // TODO: find if exists
        // TODO: update if exist
        // TODO: insert if exist
        if (Array.isArray(persons)) {
            for (let person of persons) {
                this.persons.push(person);
            }
        }
        else {
            this.persons.push(persons);
        }

    }
}

const person = new PersonService();
person.save({ name: 'Maria', age: 29 });
person.deleteByName('Maria');
console.log(person.getAll())

module.exports = PersonService;


