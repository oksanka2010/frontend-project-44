#!/usr/bin/env node
import startGame, { getRandomNumber } from '../../src/index.js'

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getPrimeNumber = (number) => {
  if (number < 2) {
    return false
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

const getQuestionAndAnswer = () => {
  const question = getRandomNumber()
  const correctAnswer = getPrimeNumber(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

startGame(getQuestionAndAnswer, condition)
