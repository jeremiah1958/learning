function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "../../week2/04-To-do/index.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(req.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  getFile(myDisplayer);
  

  
 
 
 