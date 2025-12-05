#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { greetUser } from '../src/cli.js'

greetUser()

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const gameLogic = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let countCorrect = 0
  const totalQuestions = 3

  const getAnswer = number => (number % 2 === 0 ? 'yes' : 'no')

  const gameNext = () => {
    const number = getRandomNumber()
    const correctAnswer = getAnswer(number)
    const question = `Question: ${number}`
    const userAnswer = readlineSync.question(`${question}\nYour answer: `).toLowerCase()

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again!`)
      return false
    }

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again!`)
      return false
    }
    else {
      console.log('Correct!')
      return true
    }
  }

  while (countCorrect < totalQuestions) {
    if (gameNext()) {
      countCorrect += 1
    }
    else {
      return
    }
  }

  console.log('Congratulations!')
}

gameLogic()
