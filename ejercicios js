//Ejercicio 1
function ensure(value) {
    if(value === undefined){
      throw new error();
    } else {
      return value;
    }
}

// Ejercicio 2

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    var arrDate = userDate.split("/");
    if (arrDate[1] < 10){
      arrDate[1]= 0 + arrDate[1];
    }
    if (arrDate[0] <10){
      arrDate[0] = 0 + arrDate[0];
    }
    return arrDate[2] + arrDate[0] + arrDate[1];
  }
  
  console.log(formatDate("12/12/2014"));

  // Ejercicio 3

  function removeProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)){
      delete obj[prop];
      return true;
    }else {
      return false;
    }
     return null;
   }

   // Ejercicio 4

   function registerHandlers() {
    var as = document.getElementsByTagName('a');
    for (let i = 0; i < as.length; i++) {
      as[i].onclick = function() {
        alert(i);
        return false;
      }
    }
  }
  
  /* HTML code for testing purposes (do not submit uncommented):
  <body>
    In my life, I used the following web search engines:<br/>
    <a href="//www.yahoo.com">Yahoo!</a><br/>
    <a href="//www.altavista.com">AltaVista</a><br/>
    <a href="//www.google.com">Google</a><br/>
  </body>
  */
