const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object with no values when called with the 'new' keyword" , () => {
            const obj = new Intern();

            expect(obj.name).toEqual(undefined);
            expect(obj.id).toEqual(undefined);
            expect(obj.email).toEqual(undefined);
            expect(obj.school).toEqual(undefined);
        });

        it("should set a 'name', 'id', 'email' and 'school' when created", () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const school = 'school of hard knocks';

            const obj = new Intern(name, id, email, school);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        });
    });

    describe("getName", () => {
        it("should return the name of the intern that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const school = 'school of hard knocks';

            const obj = new Intern(name, id, email, school);

            expect(obj.getName()).toEqual('Filip');
        });
    });

    describe("getId", () => {
        it("should return the id of the intern that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const school = 'school of hard knocks';

            const obj = new Intern(name, id, email, school);

            expect(obj.getId()).toEqual(101);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the intern that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const school = 'school of hard knocks';

            const obj = new Intern(name, id, email, school);

            expect(obj.getEmail()).toEqual('filip.a.11@hotmail.com');
        });
    });

    describe("getRole", () => {
        it("should return the role of the intern that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const school = 'school of hard knocks';

            const obj = new Intern(name, id, email, school);

            expect(obj.getRole()).toEqual('Intern');
        });
    });

    describe("getSchool", () => {
        it("should return the role of the intern that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const school = 'school of hard knocks';

            const obj = new Intern(name, id, email, school);

            expect(obj.getSchool()).toEqual(obj.school);
        });
    });
})