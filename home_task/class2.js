//strings are mutable and arrays are immutable
let marks=[56,67,34,98];
console.log(marks);
console.log(marks.length);
let heroes = ["batman","spider","honors","kitten", "human"];
console.log(typeof heroes);
//array indices
let arrays = ["riyan", "sameer", "rahim", "uzair"];
arrays[3]="shapper";
console.log(arrays);//answe=uzair
//looping over an array
for (let i=0; i<arrays.length; i++){
    console.log(arrays[i]);
}
let januz=["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"];
console.log(januz);
for (let i=0; i>=januz.length; i++){
    console.log(januz[i]);
}