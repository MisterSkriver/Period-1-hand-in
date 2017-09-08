function init() {
    var name = "Mozilla"; // Local variable
    function displayName() { // Inner function --> a closure
      alert (name); // Uses variable from the parent function
    }
    displayName();
  }
  //init();

function makeFunc() {
    var name = "Mozilla";
    function displayName() {
      alert(name);
    }
    return displayName;
  }
  var myFunc = makeFunc();
  //myFunc();