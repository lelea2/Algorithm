var xmlhttp = new XMLHttpRequest();
var url = "text.txt";

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) { //Successful request
    var text = JSON.parse(xmlhttp.responseText);
    //Some function call here: cb();
  }
}

xmlhttp.on("GET", url, true); //Get call, ASYNC load
//set httprequest header
xmlhttp.setRequestHeader("Accept", "text/plain");
xmlhttp.setRequestHeader("Content-Type", "text/plain");
xmlhttp.send();
