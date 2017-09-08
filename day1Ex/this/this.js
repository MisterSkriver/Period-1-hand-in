function add(c, d) {
    return this.a + this.b + c + d;
  }
  
  var o = {a: 1, b: 3};
  
  // The first parameter is the object to use as
  // 'this', subsequent parameters are passed as 
  // arguments in the function call
  add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16
  
  // The first parameter is the object to use as
  // 'this', the second is an array whose
  // members are used as the arguments in the function call
  add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

  console.log(add);

  function showThis(){
    return this;
  }

  var showThis2 = showThis.bind({});

  console.log(showThis2);