var year = 1900;

 if ( year % 4 == 0  ){
     if( year % 100 == 0 ){
        if (year % 400 == 0){
            console.log("It is a leap year! How fine a thing is that!!!!????")
        } else {
            console.log("Tragically, it is not a leap year. Let us lament our ill fortune.")
        }
     } else {
        console.log("It is a leap year! Huzzah!")
     }
 } else {
     console.log("It is not a leap year. How sad.")
 }


 /*
 Alternative (and pithier) solution:

year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
alert(x);

 */







