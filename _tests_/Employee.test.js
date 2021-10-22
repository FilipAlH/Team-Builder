const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object with no values when called with the 'new' keyword" , () => {
            const obj = new Employee();

            expect(obj.name).toEqual(undefined);
            expect(obj.id).toEqual(undefined);
            expect(obj.email).toEqual(undefined);
        });

        it("should set a 'name', 'id' and 'email' when created", () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';

            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
    });

    describe("getName", () => {
        it("should return the name of the employee that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';

            const obj = new Employee(name, id, email);

            expect(obj.getName()).toEqual('Filip');
        });
    });

    describe("getId", () => {
        it("should return the id of the employee that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';

            const obj = new Employee(name, id, email);

            expect(obj.getId()).toEqual(101);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the employee that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';

            const obj = new Employee(name, id, email);

            expect(obj.getEmail()).toEqual('filip.a.11@hotmail.com');
        });
    });

    describe("getRole", () => {
        it("should return the role of the employee that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';

            const obj = new Employee(name, id, email);

            expect(obj.getRole()).toEqual('Employee');
        });
    });
})