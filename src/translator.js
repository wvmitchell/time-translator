const translateTime = (startingSeconds) => {
  const conversions = {
    years: 31536000,
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  } 

  let finalTime = {};

  const calcTime = (remainingSeconds, unit) => {
    
    finalTime[unit] = Math.floor(remainingSeconds / conversions[unit]);
    
    if (unit === 'seconds') {
      console.log(finalTime);
      return;
    }

    let secondsLeftOver = (remainingSeconds - (finalTime[unit] * conversions[unit]));
    
    let nextUnit = Object.keys(conversions)[Object.keys(conversions).indexOf(unit) + 1];
  
    calcTime(secondsLeftOver, nextUnit);
  }

  calcTime(startingSeconds, 'years');

  console.log(condenseTime(finalTime))
}

const checkPlural = (num, unit) => {
  if (num === 1) {
    return `${num} ${unit.slice(0, -1)}`
  } else {
    return `${num} ${unit}`
  }
}

const condenseTime = (timeData) => {
  let timeList = [];

  Object.keys(timeData).forEach(time => {
    if(timeData[time] !== 0) {
      timeList.push(checkPlural(timeData[time], time));
    }
  })

  return timeList;
}

module.exports = { translateTime };