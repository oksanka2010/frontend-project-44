#!/usr/bin/env node
import startGame, { getRandomNumber } from '../../src/index.js'

const condition = 'Answer "yes" if the number is even, otherwise answer "no".'

const getQuestionAndAnswer = () => {
  const question = getRandomNumber()
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no'
  return [question, correctAnswer]
}

startGame(getQuestionAndAnswer, condition)
