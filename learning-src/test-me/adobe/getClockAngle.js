function getAngle(time) { // 3:45
	const splitData = time.split(':');
	const hour = parseInt(splitData[0], 10);
	const minute = parseInt(splitData[1], 10);
	// console.log(hour, minute); 
	// 1, 2, 3, 4, 5, 6, 6, 8, 9, 10, 11, 12
	const minuteAngle = minute * 6;
	const hourAngle = (hour * 30) - (minute * 0.5);
	const angle = Math.abs(hourAngle - minuteAngle);
	return Math.min(angle, 360 - angle);
}
    
console.log(getAngle('3:45'));
console.log(getAngle('8:15'));
console.log(getAngle('9:15'));
