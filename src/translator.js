const translateTime = (startingSeconds) => {
  
  if (startingSeconds === 0) {
    return 'now';
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
    
    if (unit !== 'seconds') {
      let secondsLeftOver = remainingSeconds - (timeData[unit] * conversions[unit]);
      
      let nextUnit = Object.keys(conversions)[Object.keys(conversions).indexOf(unit) + 1];
    
      calcTime(secondsLeftOver, nextUnit);
    }
  }

  calcTime(Math.abs(startingSeconds), 'years');

  return `${formatString(condenseTime(timeData))}${startingSeconds < 0 ? ' ago' : ''}`;
}

const checkPlural = (num, unit) => {
  return `${num} ${num === 1 ? unit.slice(0, -1) : unit}` 
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