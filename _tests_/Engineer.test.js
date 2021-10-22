const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object with no values when called with the 'new' keyword" , () => {
            const obj = new Engineer();

            expect(obj.name).toEqual(undefined);
            expect(obj.id).toEqual(undefined);
            expect(obj.email).toEqual(undefined);
            expect(obj.github).toEqual(undefined);
        });

        it("should set a 'name', 'id', 'email', and 'github' when created", () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const github = 'FilipAlH';

            const obj = new Engineer(name, id, email, github);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
        });
    });

    describe("getName", () => {
        it("should return the name of the engineer that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const github = 'FilipAlH';

            const obj = new Engineer(name, id, email, github);

            expect(obj.getName()).toEqual('Filip');
        });
    });

    describe("getId", () => {
        it("should return the id of the engineer that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const github = 'FilipAlH';

            const obj = new Engineer(name, id, email, github);

            expect(obj.getId()).toEqual(101);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the engineer that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const github = 'FilipAlH';

            const obj = new Engineer(name, id, email, github);

            expect(obj.getEmail()).toEqual('filip.a.11@hotmail.com');
        });
    });

    describe("getRole", () => {
        it("should return the role of the engineer that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const github = 'FilipAlH';

            const obj = new Engineer(name, id, email, github);

            expect(obj.getRole()).toEqual('Engineer');
        });
    });

    describe("getGitHub", () => {
        it("should return the role of the engineer that the object belongs to" , () => {
            const name = 'Filip';
            const id = 101;
            const email = 'filip.a.11@hotmail.com';
            const github = 'FilipAlH';

            const obj = new Engineer(name, id, email, github);

            expect(obj.getGitHub()).toEqual(obj.github);
        });
    });
})