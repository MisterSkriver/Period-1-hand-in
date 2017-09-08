var people = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function myFilter(array, callback){
        var filteredArray = [];
        array.forEach(function(person) {
            if(callback(person)){
                filteredArray.push(person);
            }
         
        });
        return filteredArray;
    }
    
    console.log("Using myFilter!: " + myFilter(people, (person) => person.length <= 3));