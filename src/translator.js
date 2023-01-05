const translateTime = (startingSeconds) => {
  const units = {
    years: 31536000,
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  } 

  let finalTime = {};

  const calcTime = (remainingSeconds, unit) => {
    
    finalTime[unit] = Math.floor(remainingSeconds / units[unit]);
    
    if (unit === 'seconds') {
      console.log(finalTime);
      return;
    }

    let secondsLeftOver = (remainingSeconds - (finalTime[unit] * units[unit]));
    
    let nextUnit = Object.keys(units)[Object.keys(units).indexOf(unit) + 1];
  
    calcTime(secondsLeftOver, nextUnit);
  }

  calcTime(startingSeconds, 'years');

  // return checkPlural(finalTime.seconds, 'second');
}



const checkPlural = (num, unit) => {
  if (num === 1) {
    return `${num} ${unit}`
  } else {
    return `${num} ${unit}s`
  }
}

module.exports = { translateTime };