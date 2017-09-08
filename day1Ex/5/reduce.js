var all= ["Lars", "Peter", "Jan", "Bo"];

var commaSep = all.join(',');

var spaceSep = all.join(' ');

var numbSep = all.join('#');
console.log(commaSep);
console.log(spaceSep);
console.log(numbSep);

var members = [
{name : "Peter", age : 18},
{name : "Jan", age : 35},
{name : "Janne", age : 25},
{name : "Martin", age : 22}
];

var reducer = function(accumulator,member,index,array){
    var temp = accumulator + member.age;

    if(index === array.length-1){
        return temp / array.length;
    }

    return temp;
};

var initialValue = 0;
var result = members.reduce(reducer, initialValue);
console.log(result);