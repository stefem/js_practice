// // 1. Work out number of days in year
// var year = new Date().getFullYear();
// var days;

// x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// (x) ? days = 366 : days = 365;

// // 2. work out current day number



// // 3. subtract second from first


Date.prototype.isLeapYear = function() {
    var year = this.getFullYear();
    if((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
};

// Get Day of Year
Date.prototype.getDOY = function() {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = this.getMonth();
    var dn = this.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && this.isLeapYear()) dayOfYear++;
    return dayOfYear;
};

var dayOfYear = new Date().getDOY();
alert(dayOfYear);





