const Employee= require("./employ")

class Engineer extends Employee {
    constructor(name,id,email,github){
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