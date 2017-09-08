var arr = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];

var arrr = arr.map(function(name){
    return name.toUpperCase();
    
}
);

console.log(arrr);

var arr2 = arr.map(
    function(name){
        return '<li>'+name+'</li>';

});

var result = '<ul>'+arr2+'</ul>';

console.log(arr2);
console.log(result);

//document.getElementById('container').innerHTML = result;

