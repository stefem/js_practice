for (i = 2014; i <= 2050; i++){
    var theDate = new Date(i, 0, 1);
    var day = theDate.getDay();
    var year = theDate.getFullYear();

    if (day == 0) {
        console.log("January 1st in " + year + " will be a Sunday." )
    } else {
        console.log("January 1st in " + year + " will NOT be a Sunday. Lament and quail." )
    }
}


/*
elegantyer and pithier

console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('--------------------');
*/







