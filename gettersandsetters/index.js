const person = {
    firstName: 'Mosh',
    lastName: 'Hademani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
    };

    person.fullName = 'Damaris Saavedra';

    // getters => access properties
    // setters => change (mutate) them
    console.log(person);
