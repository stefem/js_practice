// Don;t use for / inm where index order is importnant - more a construction for goping through a set in order and then presumably carrying out various functions on each element in that set

function myFunction() {
    var person = {
        fname:"John", 
        lname:"Doe", 
        age:25
    }; 
    
    var text = "";

    var x;
    for (x in person) {
        text += person[x] + " ";
        
    }
    document.getElementById("demo").innerHTML = text;
  
}