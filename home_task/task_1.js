/*
let weather=prompt("enter the weather");
if(weather==="rainy"){
    console.log("take an umbrella with you")
}else if(weather==="snowy"){
    console.log("wear a jacket to stay warm")
}else(console.log("enjoy your day"));
*/


var velocity= +prompt("enter velocity")
if(velocity < 0){
    console.log("Invalid velocity.... try again");
}else if(velocity < 10 && velocity >= 0){
    console.log("Stationary");
}else if(velocity >= 10 && velocity <= 30){
    console.log("max speed driving");
}else if(velocity > 30 && velocity <= 60){
    console.log("slow driving");
}else if(velocity > 60 && velocity <= 100){
    console.log("fast driving");
}else if(velocity > 100 && velocity <= 200){
    console.log("maximum velocity");
}else{
    console.log("invalid answer.... try again");
}
