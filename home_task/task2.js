class Family {
  constructor(name, lname) {
    this.name = name;
    this.lname = lname;
  }

  introduction() {
    return `My name is ${this.name} and last name is ${this.lname}`;
  }
}

class ExtendedFamily extends Family {
  constructor(name, lname, age) {
    super(name, lname);//parent class ka constru ko pass krny ka lya
    this.age = age;
  }

  getDetail() {
    return `${this.introduction()} - Age: ${this.age}`;
  }
}

let family1 = new Family("Saima", "Akhtar");  //details pass kiya ha
let family2 = new ExtendedFamily("Riyan", "Hunxai", 20);
let family3 = new ExtendedFamily("sameer", "sha", 25);

console.log(family1.introduction());
console.log(family2.getDetail());
console.log(family3.getDetail()); 




/*object ke properties  ko inetialize keta ha*/
