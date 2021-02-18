const { getDiffieHellman } = require("crypto");
const { classes } = require("istanbul-lib-coverage");

class Employee{
    constructor(name,id,email){
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