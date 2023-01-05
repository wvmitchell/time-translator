const translateTime = (startingSeconds) => {
  let past = false;

  if (startingSeconds === 0) {
    return 'now';
  }

  if (startingSeconds < 0) {
    startingSeconds = Math.abs(startingSeconds);
    past = true;
  }

  const conversions = {
    years: 31536000,
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  } 

  let timeData = {};

  const calcTime = (remainingSeconds, unit) => {
    
    timeData[unit] = Math.floor(remainingSeconds / conversions[unit]);
    
    if (unit === 'seconds') {
      return;
    }

    let secondsLeftOver = (remainingSeconds - (timeData[unit] * conversions[unit]));
    
    let nextUnit = Object.keys(conversions)[Object.keys(conversions).indexOf(unit) + 1];
  
    calcTime(secondsLeftOver, nextUnit);
  }

  calcTime(startingSeconds, 'years');

  return `${formatString(condenseTime(timeData))}${past ? ' ago' : ''}`;
}

const checkPlural = (num, unit) => {
  if (num === 1) {
    return `${num} ${unit.slice(0, -1)}`;
  } else {
    return `${num} ${unit}`;
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

const formatString = (list) => {
  let finalPhrase = '';
  
  list.forEach(timePhrase => {
    console.log(list.indexOf(timePhrase))
    if (list.indexOf(timePhrase) === (list.length - 1)) {
      finalPhrase += timePhrase;
    } else if (list.indexOf(timePhrase) === list.length - 2) {
      finalPhrase += `${timePhrase} and `;
    } else {
      finalPhrase += `${timePhrase}, `
    }
  });

  return finalPhrase;
}

module.exports = { translateTime };