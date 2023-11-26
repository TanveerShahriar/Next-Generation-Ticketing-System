class Name {
    nameId: number;
    firstName: string;
    lastName: string;
    user: number;

    constructor(nameId: number, firstName: string, lastName: string, user: number) {
        this.nameId = nameId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.user = user;
    }
}

export default Name;