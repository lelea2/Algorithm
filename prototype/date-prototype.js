/**
 * Playing with Date.prototype object.
 * We use Date.prototype to define function that partially supported by brower
 */

//Find the time for the next "n" day
Date.prototype.addDays = function (numDay) {
    var time = this.getTime(),
        changedDate = new Date(time + (numDay * 24 * 60 * 60 * 1000)); //change it to milisecond
    this.setTime(changedDate.getTime());
    return this;
};
