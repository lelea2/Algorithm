/**
 * Convert user date to specific string
 */
function formatDate(userDate) {
    var returnDate = new Date(userDate);

    var y = returnDate.getFullYear();
    var m = returnDate.getMonth() + 1;
    var d = returnDate.getDay();

    y = y.toString(); //convert to string
    m = m.toString(); //convert to string
    d = d.toString(); //convert to string
    if (m.length == 1) {
        m = '0' + m;
    }
    if (d.length == 1) {
        d = '0' + d;
    }
    returnDate = y + m + d;
    return returnDate;
}


/**
 * Get date in month (caching version)
 */

var daysInMonth = (function() {
    var cache = {};
    return function(month, year) {
        var entry = year + '-' + month;

        if (cache[entry]) return cache[entry];

        return cache[entry] = new Date(year, month, 0).getDate();
    }
})();


//Checking is leap year to get number of days in years
function daysInYear(year) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        // Leap year
        return 366;
    } else {
        // Not a leap year
        return 365;
    }
}
