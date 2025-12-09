#!/usr/bin/env node
import startGame, { getRandomNumber } from '../../src/index.js'

const condition = 'Find the greatest common divisor of given numbers.'

const minLength = 5
const maxLength = 10

const generateProgression = (start, step, length, hiddenElement) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    if (i === hiddenElement) {
      progression.push('..')
    }
    else {
      progression.push(start + i * step)
    }
  }
  return progression
}

const getQuestionAndAnswer = () => {
  const start = getRandomNumber()
  const step = getRandomNumber()
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength
  const hiddenElement = Math.floor(Math.random() * length)
  const question = generateProgression(start, step, length, hiddenElement).join(' ')
  const correctAnswer = (start + hiddenElement * step).toString()
  return [question, correctAnswer]
}

startGame(getQuestionAndAnswer, condition)
