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
