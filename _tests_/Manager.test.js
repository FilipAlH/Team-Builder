const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object with no values when called with the 'new' keyword" , () => {
            const obj = new Manager();

            expect(obj.name).toEqual(undefined);
            expect(obj.id).toEqual(undefined);
            expect(obj.email).toEqual(undefined);
            expect(obj.office_number).toEqual(undefined);
        });

        it("should set a 'name', 'id' and 'email' when created", () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const office_number = 80085;

            const obj = new Manager(name, id, email, office_number);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.office_number).toEqual(office_number);
        });
    });

    describe("getName", () => {
        it("should return the name of the manager that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const office_number = 80085;

            const obj = new Manager(name, id, email, office_number);

            expect(obj.getName()).toEqual('Filip');
        });
    });

    describe("getId", () => {
        it("should return the id of the manager that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const office_number = 80085;

            const obj = new Manager(name, id, email, office_number);

            expect(obj.getId()).toEqual(101);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the manager that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const office_number = 80085;

            const obj = new Manager(name, id, email, office_number);

            expect(obj.getEmail()).toEqual('filip.a.11@hotmail.com');
        });
    });

    describe("getRole", () => {
        it("should return the role of the manager that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const office_number = 80085;

            const obj = new Manager(name, id, email, office_number);

            expect(obj.getRole()).toEqual('Manager');
        });
    });
})