var d = new Date();

var dd = d.getDay();
if (dd < 10) {dd = "0" + dd};

var mm = d.getMonth() + 1;
if (mm < 10) {mm = "0" + mm};

var yyyy = d.getFullYear();

var theDate = dd +"/"+ mm + "/" + yyyy;

document.getElementById("cn").innerHTML =  theDate; 
