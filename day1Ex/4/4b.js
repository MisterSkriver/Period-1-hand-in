var names = [];

if(document.getElementById('limit').value == 100){

    setMax();

}

function setMax(){
    names = [{name:"Lars", phone:"1234567"}, {name: "Peter", phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

    var max = document.getElementById('limit').value;

var rows = names.filter(function(person){


    return person.name.length <= max;

}).map(function(person){

    return "<tr><td>" + person.name + "</td><td>" + person.phone + "</td></tr>";

})

var tableData = "<table>" + rows + "</table>";

document.getElementById('names').innerHTML = tableData;


}


















// var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];
// var maxx = document.getElementById('limit').value;

// var rows = names.filter( function(person) {
//     if(person.name.length <= maxx){
//         console.log(maxx);
//         console.log(person.name.length); 
//          return '<tr><td>'+person.name+'</td>'+'<td>'+person.phone+'</td></tr>';
//     }
        
// })

// var str = '<table><tr><th>Name</th><th>Phone</th></tr>'+rows.join('')+'</table>';

// if(maxx==100){
//     SetMax();
// }

// // var rows = names.map(
// //     function(name) {
// //         if(name.name.length <= maxx){
// //             return '<tr><td>'+name.name+'</td>'+'<td>'+name.phone+'</td></tr>';
// //         }
// //     }
// // );





// function SetMax(){
//     console.log("in setmax")
//     maxx = document.getElementById('limit').value;
//     console.log(maxx);

//     document.getElementById('names').innerHTML = str;
// }

