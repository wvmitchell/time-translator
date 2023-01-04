const timeSets = {
  "year": 31536000,
  "day": 86400,
  "hour": 3600,
  "minute": 60,
  "second": 1
};

function translateTime(seconds) {
  if (seconds === 0) return "now";

  let timeInfo = Object.entries(timeSets).reduce((timeInfo, currTimeSet) => {
    // if timeRemaining > current current timeSet number, then calculate the time and
    // subtract from the remaining time
    if (timeInfo.remainingTime >= currTimeSet[1]) {
      let timeAmount = Math.floor(timeInfo.remainingTime / currTimeSet[1]);
      let timeString = `${timeAmount} ${pluralize(timeAmount, currTimeSet[0])}`;
      timeInfo.timeStrings.push(timeString)
      timeInfo.remainingTime -= timeAmount * currTimeSet[1];
    }
    return timeInfo;
  }, {remainingTime: Math.abs(seconds), timeStrings: []})

  let joinedStrings = timeInfo.timeStrings.join(", ");

  if (seconds < 0) {
    joinedStrings += " ago";
  }

  if (joinedStrings.includes(",")) {
    // Replace the last comma with "and" - probably a shorter regex version
    return joinedStrings.substring(0, joinedStrings.lastIndexOf(',')) + " and" + joinedStrings.substring(joinedStrings.lastIndexOf(',') + 1);
  } else {
    return joinedStrings;
  }
}

function pluralize(count, word) {
  return count > 1 ? `${word}s` : word;
}

module.exports = { translateTime };


// I made a mess trying to do something recursive.
// So far this doesn't work well for mixed times in terms of
// deciding if there should be a comma or "and"

// function translateTime(inputSeconds) {
//   const seconds = Math.abs(inputSeconds);
//   if (seconds >= 31536000) {
//     // Calculate years and call again with remainder
//     let numYears = Math.floor(seconds / 31536000);
//     let yearString = pluralize(numYears, 'year');
//     return `${numYears} ${yearString}${isTimeRemaining(seconds % 31536000, 86400)}`;
//   } else if (seconds >= 86400) {
//     // Days
//     let numDays = Math.floor(seconds / 86400);
//     let dayString = pluralize(numDays, 'day');
//     return `${numDays} ${dayString}${isTimeRemaining(seconds % 86400, 3600)}`;
//   } else if (seconds >= 3600) {
//     // Hours
//     let numHours = Math.floor(seconds / 3600);
//     let hourString = pluralize(numHours, 'hour');
//     return `${numHours} ${hourString}${isTimeRemaining(seconds % 3600, 60)}`;
//   } else if (seconds >= 60) {
//     // Minutes
//     let numMinutes = Math.floor(seconds / 60);
//     let minuteString = pluralize(numMinutes, 'minute');
//     return `${numMinutes} ${minuteString}${isTimeRemaining(seconds % 60, 60)}`;
//   } else if (seconds > 0) {
//     // Seconds
//     let secondString = pluralize(seconds, 'second');
//     return `${seconds} ${secondString}`;
//   } else if (seconds === 0) {
//     return "now";
//   } else {

//     return inputSeconds < 0 ? " ago" : "";
//   }
// }

// function isTimeRemaining(seconds, divider) {
//   // If there is more time left, and if this will NOT be the last call
//   if (seconds > 0 && seconds > divider) {
//     return `, ${translateTime(seconds)}`;
//   } else if (seconds > 0) {
//     return ` and ${translateTime(seconds)}`;
//   } else {
//     return "";
//   }
// }