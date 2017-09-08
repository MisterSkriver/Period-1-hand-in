var names = [
    {name:"Lars",phone:"1234567"}, 
    {name: "Peter",phone: "675843"}, 
    {name: "Jan", phone: "98547"}, 
    {name: "Bo", phone: "79345"}
];
var rows = names.map(function(el){
    return "<tr><td>" + el.name + "</td>" + "<td>" + el.phone + "</td>" + "</tr>" ;
});

var tables = "<table><th>Name</th><th>Phone</th>" + rows.join(" ") + "</table>"

console.log(tables);

function toHtml1(table){
    return table;
}
document.body.innerHTML = toHtml1(tables);