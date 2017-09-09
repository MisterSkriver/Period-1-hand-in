// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.png';

// function component() {
//     var element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');

//     // Add the image to our existing div.
//     var myIcon = new Image();
//     myIcon.src = Icon;

//     element.appendChild(myIcon);
// const name = 'Lars';
//     setTimeout(() => alert(`Hello there from ${name}`), 1000);
//     return element;
    
//   }
  
//   document.body.appendChild(component());

import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

// You must implement the makeTable(..) function, used below:
function Person(fn,ln,s){
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = s;
  }
  function Car(make,ln,s,col){
    this.make = make;
    this.lastName = ln;
    this.favoriteSport = s;
    this.colour = col;
  }
  const persons = [
    new Person("Kurt", "Wonnegut","Socker"),
    new Person("Jan", "Peterson","Hockey"),
    new Person("Jane", "Peterson","Skating"),
    new Person("John", "Hansen","Socker"),
  ]  
  const cars = [
    new Car("Porche", "Wonnegut","Socker", "Black"),
  ]

const table = makeTable(persons);
document.getElementById('my-table').innerHTML = table;

function makeTable(myArray){
    var header = "<thead>";
      for(var prop in myArray[0]){
        header += "<th>" + prop + "</th>";
      }
    header += "</thead>";

    var body = "<body>";

    myArray.forEach(function(myObject) {
      body+= "<tr>";
      for(var key in myObject){
        body += "<td>" + myObject[key] + "</td>";
      }
      body += "</tr>";
    }, this);

    body += "</body>"

    return header + body;
}