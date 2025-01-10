function name() {
    let numbers = [1,2,3,4,5,6,6]
    return function(){
        return numbers.filter(items => items === 6)
    }
}

let result = name()
console.log(result());
