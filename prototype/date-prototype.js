/**
 * Playing with Date.prototype object.
 * We use Date.prototype to define function that partially supported by brower
 */

//Find the time for the next "n" day
//Eg: console.log(new Date().addDays(5));
//Result:  Date {Sun Jan 10 2016 21:22:04 GMT-0800 (PST)}
Date.prototype.addDays = function (numDay) {
    var time = this.getTime(),
        changedDate = new Date(time + (numDay * 24 * 60 * 60 * 1000)); //change it to milisecond
    this.setTime(changedDate.getTime());
    return this; //this will return full timestamp
};


//Find next date
//Eg: console.log(new Date().nextDay());
//Result: Date {Wed Jan 06 2016 21:23:00 GMT-0800 (PST)}
Date.prototype.nextDay = function() {
    var currentDate = this.getDate();
    return new Date(this.setDate(currentDate +1));
};
