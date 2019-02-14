var moment = require('moment')
var date = moment();
var createdAt = 1234;
var dateMoment =  moment(createdAt).valueOf();
date.add(9,'y').subtract(9,'M');
console.log(dateMoment);
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));

// Jan 1st 1970 00:00:00 AM

// var date = new Date();
//
// console.log(date.getMonth());
