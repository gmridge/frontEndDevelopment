//// Using the Moment.js library, try to solve the below problems (Use console.log() to check results. Run node script.js to test your code)
document.addEventListener('DOMContentLoaded', function() {
// 1. Calculate the number of days between your birth-date and the current date
var currentDate = dayjs();
var formattedDate = currentDate.format('MMM D, YYYY h:mm:ss A');
document.querySelector('.nowDate').innerText  = formattedDate;

const birthday = dayjs('1997-02-14');
var daysDifferent = currentDate.diff(birthday, 'days');
document.querySelector('#Q1').innerText = daysDifferent + ' days';

// 2. Display the number of years, months, and days between your birthdate and current date
// 	Example: 24 years, 8 months, and 26 days
var passedTime = currentDate.add(7, 'days').format('MMM D, YYYY h:mm:ss A');
document.querySelector('#Q2').innerText = passedTime;

// 3. Given two dates, display the date closest to the current date
var date1 = dayjs('2021-01-22')
var date2 = dayjs('2022-06-19')
var diff1 = Math.abs(currentDate.diff(date1, 'days'));
var diff2 = Math.abs(currentDate.diff(date2, 'days'));
var closestDate;

if (diff1 < diff2) {
    closestDate = date1;
} else {
    closestDate = date2;
}
document.querySelector('#Q3').innerText = closestDate;

// 4. Given two dates, display whether the first date is before or after the second date
var before = date1.before(date2);
var after = date1.after(date2);
var comparisonResult;

if (before) {
    comparisonResult = 'Date 1 is before Date 2.';
} else if (after) {
    comparisonResult = 'Date 1 is after Date 2.';
} else {
    comparisonResult = 'Date 1 is the same as Date 2.';
}

document.querySelector('#Q4').innerText = comparisonResult;

// 5. Display the current time in London
var londonTime = dayjs().tz('Europe/London').format('MMM D, YYYY h:mm:ss A');
document.querySelector('#Q5').innerText = londonTime;
});