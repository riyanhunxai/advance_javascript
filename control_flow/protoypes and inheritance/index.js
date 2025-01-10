let admin ={
    name:"riyan",
    lastName:"ahmed",
    fullDetail(){
        return `my name is ${this.name} and last name is ${this.lastName}`
    }
};
let admin2=Object.create(admin);
admin2.name="hamza";
admin2.lastName="khan";
admin2.details =function() {
    return `${this.fullDetail()}`
};

console.log(admin2.details());
