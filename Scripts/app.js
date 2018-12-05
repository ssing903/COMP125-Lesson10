// core module - IIFE
(function() {
  // App variables
  let XHR;


  /**
   * This function is used for Intialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-weight: bold; font-size: 20px;"
    );
    XHR = new XMLHttpRequest();
    Main();
  }

  /**
   * This function is the where the main functionality for our
   * web app is happening
   */
  function Main() {
    console.log(`%c App Started...`, "font-weight: bold; font-size: 20px;");
    XHR.addEventListener("readystatechange",function(){

    })
  }

  window.addEventListener("load", Start);
})();