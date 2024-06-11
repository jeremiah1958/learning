//Callback
setTimeout(function() { myFunction("I love You !!!"); }, 3000);
function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
//Promise
let myPromise = new Promise(function(resolve, reject){
});
myPromise.then(function(value){
 document.getElementById("demo").innerHTML = value;


});



