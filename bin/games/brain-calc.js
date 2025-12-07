#!/usr/bin/env node
import startGame, { getRandomNumber } from '../../src/index.js'

const condition = 'What is the result of the expression?'

const operators = ['+', '-', '*']

const calc = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator`)
  }
}

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber()
  const secondNumber = getRandomNumber()
  const operator = operators[Math.floor(Math.random() * operators.length)]
  const question = `${firstNumber} ${operator} ${secondNumber}`
  const correctAnswer = calc(firstNumber, secondNumber, operator).toString()
  return [question, correctAnswer]
}

startGame(getQuestionAndAnswer, condition)
