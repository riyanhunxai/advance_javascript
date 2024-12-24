let number = prompt("Enter the gained numbers");

switch (true) {
    case (number >= 80 && number <= 100):
        console.log("A+");
        break;
    case (number >= 70 && number <= 79):
        console.log("B+");
        break;
    case (number >= 60 && number <= 69):
        console.log("C+");
        break;
    case (number >= 50 && number <= 59):
        console.log("Mar mar ka pass");
        break;
    case (number >= 1 && number <= 49):
        console.log("Fail");
        break;
    default:
        console.log("You have entered the wrong number??");
}
