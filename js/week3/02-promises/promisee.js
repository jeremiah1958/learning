function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "../../week2/04-To-do/index.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.responseText);
      } else {
        reject("File not Found");
      }
    }
    req.send();
  }
  

  myPromise.then(
   function(value) {myDisplayer(value);},
   function(error) {myDisplayer(error);}

  );
  

  
 
 
 