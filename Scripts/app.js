/* main JavaScript file */



// IIFE - Immediately Invoked Function Expression
//var app = {};

/**
 * 
 * @description Object oriented javascript
 */

(function () {
  "use strict";
  var xhr;

  // we can use a named function instead of anoyomous
  function readData() {
      // 4 - data loaded           // everthing is ok
    if ((xhr.readyState === 4) && (xhr.status === 200)) {
      var addressbook = JSON.parse(xhr.responseText);
     var contacts = addressbook.contacts;

     contacts.forEach(element => {
          console.log(element);
     },this);
    }
  }

  function init() {
        xhr = new XMLHttpRequest(); // step 1 -  create object
         /* get data*/ xhr.open("GET", "Scripts/addressbook.json", true); // step 2 - open request
         /* send data */ xhr.send(null); // step 3
        xhr.addEventListener("readystatechange" , readData);// step 4 - wait for the file to load
  }



  // call init when window finshing loading
  window.addEventListener("load", init);
})();