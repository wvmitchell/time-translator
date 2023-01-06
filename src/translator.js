const timeTracker = {
  second: 0,
  minute: 0,
  hour: 0,
  day: 0,
  year: 0,
}

const translateTime = (num) => {
  if(num === 0) {
    return "now";
  }
  if (num < 0) {
    getSeconds(num * -1);
    return `${timeTrackerReader()} ago`
  }
  console.log('before', timeTracker)
  getSeconds(num);
  return timeTrackerReader();
}

const getSeconds = (num) => {
  if(num/60 >= 1) {
    getMinutes(num);
  } else {
    timeTracker.second = num;
  }
}

const getMinutes = (num) => {
  if(num/3600 >= 1) {
    getHours(num);
  } else {
    timeTracker.minute = Math.floor(num/60)
    const leftOver = num % 60
    if(leftOver > 0) { getSeconds(leftOver) }
  }
}

const getHours = (num) => {
  if(num/86_400 >= 1) {
    getDays(num);
  } else {
    timeTracker.hour = Math.floor(num / 3600)
    const leftOver = num % 3600
    if (leftOver > 0) { getMinutes(leftOver) }
  }
}

const getDays = (num) => {
  if(num/31_536_000 >= 1) {
    getYears(num);
  } else {
    timeTracker.day = Math.floor(num / 86_400)
    const leftOver = num % 86_400
    if (leftOver > 0) { getHours(leftOver) }
  }
}

const getYears = (num) => {
  timeTracker.year = Math.floor(num / 31_536_000)
  const leftOver = num % 31_536_000
  if (leftOver > 0) { getDays(leftOver) }
}

const timeTrackerReader = () => {
  const items = collectItems();
  const stringInfo = items.map((set) => {
    return `${set[1]} ${set[0]}` + checkPlurals(set[1]);
  }).reverse();
  if(stringInfo.length === 1) {
    return stringInfo[0]
  } 
  const endOfString = stringInfo.splice(-2).join(' and ');
  stringInfo.push(endOfString);
  
  return stringInfo.join(', ');
}

const collectItems = () => {
  const items = Object.keys(timeTracker).reduce((accum, measure) => {
    if (timeTracker[measure] > 0){
      accum.push([measure, timeTracker[measure]])
    } 
    return accum;
  }, []);
  return items;
}

const checkPlurals = (num) => {
  return num > 1 ? `s` : ``;
}

exports.translateTime = translateTime;

// const output = translateTime(259200)
// console.log('output', output)