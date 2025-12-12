import startGame from '../index.js'
import getRandomNumber from '../random.js'

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

export default () => startGame(getQuestionAndAnswer, condition)
