let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false; // true if the runner registered early
let runnersAge = 18; // set the runner's age

// If registeredEarly is true, add 1000 to the race number
if (registeredEarly === true && runnersAge >= 18) {
  raceNumber += 1000;
}

// Find the runners race time based on age and registered time
if (registeredEarly === true && runnersAge > 18) {
  console.log(`Your race number is ${raceNumber} and you will race at 9:30 am.`)
} else if (registeredEarly === false && runnersAge > 18) {
  console.log(`Your race number is ${raceNumber} and you will race at 11:00 am.`)
} else if (runnersAge < 18) {
  console.log(`Your race number is ${raceNumber} and you will race at 12:30 pm.`)
} else {console.log('See the registration desk.')} // If the runner is exactly 18, they will need to see the registration desk.
