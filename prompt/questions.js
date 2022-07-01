export const questions = [
  {
    type: "input",
    name: "projectName",
    message: "what is the name of your project",
    choices:"jim",
    validate(value){
        const check = new RegExp()
        console.log("my name is jim")
        if(value ===""){
            return "you must enter a project name"
        }
        return true
    }
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter(val) {
      return val.toLowerCase();
    },
  },
];
