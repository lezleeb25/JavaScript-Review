var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //code here

var bff = callFriend();
console.log(bff('435-215-9248'));

/*

Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/

var callOnce = function(cb, n) {
  //console.log(n);

  x = true; 
  return function() {
    if(x) {
      cb();
      x = false;
    }
    n++;
    if(n === 3){
      //console.log('2nd function: ' + n);
      console.log('STAHHP');
    }
    
  };
};

var limitedFunc = callOnce(function() {alert('hi')}, 2 );
limitedFunc(); //'hi'
limitedFunc(); //'hi'
limitedFunc(); //'STAHHP'
limitedFunc(); //'STAHHP'



// Another example
function outer(func, n) {
  var num = 0;
  return function() {
    if(num < n) {
        func();
        console.log('N', n, 'num', num);
        num++;
    }
  };
}
function ran() {
    console.log('ran');
}
var inner = outer(ran, 4);
inner();


// Another closure
var showName = function(firstName, lastName) {
  var nameIntro = 'Your name is ';
  function makeFullName() {
    return nameIntro + firstName + ' ' + lastName;
  }
  return makeFullName();
}

showName('Michael', 'Jackson');






