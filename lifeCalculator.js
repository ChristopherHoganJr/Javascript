var usersLifeYears = /* Input Age */;
var usersRemainingLifeYears = (90 - usersLifeYears);
var usersRemainingLifeMonths = (usersRemainingLifeYears * 12);
var usersRemainingLifeWeeks = (usersRemainingLifeYears * 52);
var usersRemainingLifeDays = (usersRemainingLifeYears * 365);

console.log('You have about ' +usersRemainingLifeDays + ' Days, ' + usersRemainingLifeWeeks + ' weeks, ' + usersRemainingLifeMonths + ' months or '+ usersRemainingLifeYears + ' left.');