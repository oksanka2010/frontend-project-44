#!/usr/bin/env node
import startGame, { getRandomNumber } from '../../src/index.js'

const condition = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber()
  const secondNumber = getRandomNumber()
  const question = `${firstNumber} ${secondNumber}`
  const correctAnswer = gcd(firstNumber, secondNumber).toString()
  return [question, correctAnswer]
}

startGame(getQuestionAndAnswer, condition)
