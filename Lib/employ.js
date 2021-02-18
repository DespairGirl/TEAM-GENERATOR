const { getDiffieHellman } = require("crypto");
const { classes } = require("istanbul-lib-coverage");

class Employee{
    constructor(name,id,email){
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
        if(typeof id !== "number"){
            throw new Error("Expected parameter id not found")
        }
        if(typeof email !=="string"){
            throw new Error("Expected parameter email not found")
        }
        this.name=name;
        this.id=id;
        this.email=email;
        this.role="Employee"
        
    };



getName(){
    return this.name;
};

getiD(){
    return this.id;

};

getEmail(){
    return this.email;
};

getRole(){
    return this.role;
};

};

module.exports=Employee;