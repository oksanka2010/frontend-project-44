import startGame from '../index.js'
import getRandomNumber from '../random.js'

const condition = 'Answer "yes" if the number is even, otherwise answer "no".'

const getQuestionAndAnswer = () => {
  const question = getRandomNumber()
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default () => startGame(getQuestionAndAnswer, condition)
