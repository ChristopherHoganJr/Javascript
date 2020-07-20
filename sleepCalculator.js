const getSleepHours = (day) => {
  day = day.toLowerCase()
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 10;
      break;
    default:
      return 'Not a valid day of the week.'
  }
};

// Adding the sleep for each day together to get real sleep time
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// Ideal hours of sleep a night multiplied by 7 for each day of the week
const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  // Change values by changing return value of day
  const actualSleepHours = getActualSleepHours();
  // Pass argument for ideal # of hours of sleep for 1 night
  const idealSleepHours = getIdealSleepHours(8);
  // Initiate sleep counter
  var sleep = 0;
  console.log(`You slept ${actualSleepHours} many hours this week.`);
  console.log(`You need to get a target of ${idealSleepHours} of sleep a week.`);
  console.log('--- SLEEP RESULTS ---')
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed.')
    sleep = (actualSleepHours - idealSleepHours)
    console.log(`You got ${sleep} more hours than neeeded.`);
  } else {
    console.log('You need more sleep.')
    sleep = (idealSleepHours - actualSleepHours)
    console.log(`You need ${sleep} more hours of sleep.`)
  }
}

calculateSleepDebt()
