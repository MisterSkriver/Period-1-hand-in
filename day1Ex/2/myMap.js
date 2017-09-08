var numbers = [1,2,3,4];
var people = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
/* var  times10 = numbers.map(function(num){
return num * 10;
}); */

function map(arr, callback){
    var temp = [];

    for(var i = 0; i < arr.length; i++){
        temp[i] = callback(arr[i]);
    }

    return temp;
}
var times10 = map(numbers,(numb) => numb *10);
var loudPeople = map(people,(person) => person.toUpperCase());
console.log(loudPeople);
console.log(times10);