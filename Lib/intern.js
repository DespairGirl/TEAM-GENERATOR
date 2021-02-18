const Employee= require("./employ")

class Intern extends Employee{
    constructor(name,id,email,school){
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
        if(typeof id !== "number"){
            throw new Error("Expected parameter id not found")
        }
        if(typeof email !=="string"){
            throw new Error("Expected parameter email not found")
        }
        if(typeof school!=="string"){
            throw new Error("Expected parameter 'school' to be a non-empty string")
        }
        super(name,id,email)
        this.school=school;
        this.role="Intern";
    };

    getSchool(){
        return this.school;
    };

    getRole(){
        return this.role;
    }
};

module.exports=Intern