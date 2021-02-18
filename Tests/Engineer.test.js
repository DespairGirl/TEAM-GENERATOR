const { expect, it } = require('@jest/globals');
const Employee = require('../Lib/engin');

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create object with name,id, email, and role", () => {
            const employee = new Employee("Jimmy", 453, "test@test.com","despairgirl");
            expect(employee.name).toEqual("Jimmy")
            expect(employee.id).toEqual(453)
            expect(employee.email).toEqual("test@test.com")
            expect(employee.github).toEqual("despairgirl")

        });

        it("Should throw exception if no arguements", () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        });

        it("Should throw error if there is no id present", () => {
            const cb = () => new Employee("Jimmy","453","test@test.com","despairgirl");
            const err = new Error("Expected parameter id not found");

            expect(cb).toThrowError(err);
        });

        it("Should throw error if there is no email present", () => {
            const cb = () => new Employee("Jimmy", 453,45234,"despairgirl");
            const err = new Error("Expected parameter email not found");

            expect(cb).toThrowError(err);
        });

        it("Should throw error if name is not a string", () => {
            const cb = () => new Employee(4, 453, "test@test.com","despairgirl");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
        it("Should throw error if github not included", ()=>{
            const cb= () => new Employee("Jimmy",453,"test@test.com");
            const err= new Error("Expected parameter 'github'to be non-empty string");
            expect(cb).toThrowError(err);
        });
    });
});