# Time Translator

## Description

Your task in order to complete this challenge is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

```
* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
```

For the purpose of this challenge, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

## Using the tests

Some example tests have already been created for you. You only need make them
pass. You can get started by running the following commands:

1) Clone the repo: `git clone git@github.com:wvmitchell/time-translator.git`
2) Move in and install dependencies: `cd time-translator && npm i`
3) Run the tests: `npm test`
4) Alternatively, run the tests in watch mode: `npm run test:watch`
5) Make the first test pass, then move on to the first skipped test

## Important notes
1) Other than unskipping tests, you do not need to alter the test file.

## Submitting your solution
* Open up a pull request to this repo using a forked copy of the repo to your
  own Github account. Once you've done that, drop a message in the #frontend
  channel linking us to your PR.
