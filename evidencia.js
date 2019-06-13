function ensure(value) {
if(value === undefined){
   throw new Error("Whoops!");
}
  else{
    return value;
  }
}
/*********************************/
function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  var u = userDate.split('/', 3);
  var date;
  if(u[0].length ==1){

   date = u[2]+"0"+u[0]+u[1];
  }else if(u[1].length ==1){

 	date = u[2]+u[0]+"0"+u[1];
  }else{

  	date = u[2]+u[0]+u[1];
}
  	console.log(userDate);
  	return date;
}
/*********************************/
function removeProperty(obj, prop) {
  if(obj.hasOwnProperty(prop)){
    delete obj[prop];
    return true;
  }
  else{
  	return false;
  }
  
}
/*********************************/
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
