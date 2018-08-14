export const shuffleArray = (inputNumber) => Array.from(Array(inputNumber * inputNumber).keys()).sort(() => 0.5 - Math.random()).map((v) => v + 1)
