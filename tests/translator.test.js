const { translateTime } = require('../src/translator.js')

describe('translateTime', () => {
  test('it formats one second', () => {
    const output = translateTime(1)
    const expected = "1 second"
    expect(output).toBe(expected)
  })

  test('it formats two seconds', () => {
    const output = translateTime(2)
    const expected = "2 seconds"
    expect(output).toBe(expected)
  })

  test('it formats 30 seconds', () => {
    const output = translateTime(30)
    const expected = "30 seconds"
    expect(output).toBe(expected)
  })

  test('it formats a minute', () => {
    const output = translateTime(60)
    const expected = "1 minute"
    expect(output).toBe(expected)
  })

  test.skip('it formats over a minute', () => {
    const output = translateTime(62)
    const expected = "1 minute and 2 seconds"
    expect(output).toBe(expected)
  })

  test.skip('it formats many minutes', () => {
    const output = translateTime(2701)
    const expected = "45 minutes and 1 second"
    expect(output).toBe(expected)
  })

  test.skip('it formats over an hour', () => {
    const output = translateTime(3601)
    const expected = "1 hour and 1 second"
    expect(output).toBe(expected)
  })

  test.skip('it formats many hours', () => {
    const output = translateTime(32475)
    const expected = "9 hours, 1 minute and 15 seconds"
    expect(output).toBe(expected)
  })

  test.skip('it formats hours, minutes and seconds', () => {
    const output = translateTime(33135)
    const expected = "9 hours, 12 minutes and 15 seconds"
    expect(output).toBe(expected)
  })

  test.only('it formats day, hours, minutes, and seconds', () => {
    const output = translateTime(266770)
    const expected = "3 days, 2 hours, 6 minutes and 10 seconds"
    expect(output).toBe(expected)
  })

  test.skip('it formats years, days, hours, minutes, and seconds', () => {
    const output = translateTime(94874770)
    const expected = "3 years, 3 days, 2 hours, 6 minutes and 10 seconds"
    expect(output).toBe(expected)
  })

  test.skip('it correctly formats round times #1', () => {
    const output = translateTime(259200)
    const expected = "3 days"
    expect(output).toBe(expected)
  })

  test.skip('it correctly formats round times #2', () => {
    const output = translateTime(94608000)
    const expected = "3 years"
    expect(output).toBe(expected)
  })

  test.skip('it correctly formats mixed times #1', () => {
    const output = translateTime(259500)
    const expected = "3 days and 5 minutes"
    expect(output).toBe(expected)
  })

  test.skip('it correctly formats mixed times #2', () => {
    const output = translateTime(94611601)
    const expected = "3 years, 1 hour and 1 second"
    expect(output).toBe(expected)
  })

  test.skip('it correctly formats mixed times #3', () => {
    const output = translateTime(4320120)
    const expected = "50 days and 2 minutes"
    expect(output).toBe(expected)
  })

  test.skip('it correctly formats 0', () => {
    const output = translateTime(0)
    const expected = "now"
    expect(output).toBe(expected)
  })

  test.skip('it correctly formats the past', () => {
    const output = translateTime(-4320120)
    const expected = "50 days and 2 minutes ago"
    expect(output).toBe(expected)
  })

  test.skip('it correctly formats the past #2', () => {
    const output = translateTime(-94874770)
    const expected = "3 years, 3 days, 2 hours, 6 minutes and 10 seconds ago"
    expect(output).toBe(expected)
  })
})
