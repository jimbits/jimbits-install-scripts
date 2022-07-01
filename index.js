// import shell from 'shelljs';
// import inquirer from 'inquirer';
// import chalk from 'chalk'
// import {questions} from './prompt/questions.js' 
// const repo = 'https://github.com/jimbits/jimbits.git'
// console.log(chalk.blue("Good Day  What Sort of Web project do you want  to try"))




// inquirer.prompt(questions).then((answers) => {
//     console.log('\nOrder receipt:');
//     console.log(JSON.stringify(answers, null, '  '));
//   });

const text = `
Apples
bananas
peaches
This should also match anything with a line of thex

e



e


e
`

const tester = new RegExp('^.*')
console.log(tester.exec(text))