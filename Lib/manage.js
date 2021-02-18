const Employee= require("./employ");

class Manager extends Employee{
    constructor(name,id,email,office){
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }
        if(typeof id !== "number"){
            throw new Error("Expected parameter id not found")
        }
        if(typeof email !=="string"){
            throw new Error("Expected parameter email not found")
        }
        if(typeof office !="string"){
            throw new Error("Expected parameter  'office' to be a non-empty string")
        }
        super(name,id,email)
        this.office=office;
        this.role="Manager";
    };

    getOffice(){
        return this.office;
    };

    getRole(){
        return this.role;
    }
};

module.exports=Manager