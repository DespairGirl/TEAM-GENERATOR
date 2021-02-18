const { expect, it } = require('@jest/globals');
const Employee = require('../Lib/manage');

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create object with name,id, email, and role", () => {
            const employee = new Employee("Jimmy", 453, "test@test.com", "A2450");
            expect(employee.name).toEqual("Jimmy")
            expect(employee.id).toEqual(453)
            expect(employee.email).toEqual("test@test.com")
            expect(employee.office).toEqual("A2450")


        });

        it("Should throw exception if no arguements", () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        });

        it("Should throw error if there is no id present", () => {
            const cb = () => new Employee("Jimmy","435", "test@test.com","A2450");
            const err = new Error("Expected parameter id not found");

            expect(cb).toThrowError(err);
        });

        it("Should throw error if there is no email present", () => {
            const cb = () => new Employee("Jimmy", 453, 4564,"A2450");
            const err = new Error("Expected parameter email not found");

            expect(cb).toThrowError(err);
        });

        it("Should throw error if name is not a string", () => {
            const cb = () => new Employee(4, 453, "test@test.com","A2450");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("Should throw error if office name is not a string", () => {
            const cb = () => new Employee("Jimmy", 453, "test@test.com", 54903);
            const err = new Error("Expected parameter  'office' to be a non-empty string");
            
            expect(cb).toThrowError(err);
        });
    });
});