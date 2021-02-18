const Employee= require("./employ")

class Engineer extends Employee {
    constructor(name,id,email,github){
        if(typeof github!=="string"){
            throw new Error ("Expected parameter 'github'to be non-empty string");

        };
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          };
        if(typeof id !== "number"){
            throw new Error("Expected parameter id not found")
        };
        if(typeof email !=="string"){
            throw new Error("Expected parameter email not found")
        };
    super(name,id,email)
    this.github=github;
    this.role="Engineer"};

    getGit(){
        return this.github;

    };

    getRole(){
        return this.role;
    }
};

module.exports=Engineer