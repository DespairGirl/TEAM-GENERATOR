

const Employee = require('../Lib/employ');

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create object with name,id, email, and role", () => {
            const employee = new Employee("Jimmy", 453, "test@test.com");
            expect(employee.name).toEqual("Jimmy")
            expect(employee.id).toEqual(453)
            expect(employee.email).toEqual("test@test.com")

        });

        it("Should throw exception if no arguements", () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        });

        it("Should throw error if there is no id present", () => {
            const cb = () => new Employee("Jimmy","test@test.com");
            const err = new Error("Expected parameter id not found");

            expect(cb).toThrowError(err);
        });

        it("Should throw error if there is no email present", () => {
            const cb = () => new Employee("Jimmy", 453,4564);
            const err = new Error("Expected parameter email not found");

            expect(cb).toThrowError(err);
        });

        it("Should throw error if name is not a string", () => {
            const cb = () => new Employee(4, 453, "test@test.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });
   
});