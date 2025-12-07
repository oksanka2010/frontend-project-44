import readlineSync from 'readline-sync'

export const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const roundCount = 3

const startGame = (getQuestionAndAnswer, condition) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(condition)

  for (let i = roundCount; i > 0; i -= 1) {
    const [question, correctAnswer] = getQuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again!`)
      return false
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default startGame
