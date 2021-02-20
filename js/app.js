'use strict';

let result = 0;
let user = '';
let answer = '';
let questionsArray =[
    ['Am I influenced by communism? yes/no','yes'],
 ['Am I an anarchist? yes/no', 'no'],
 ['Do I like reading ? yes/no', 'yes'],
 ['Do I pray ? yes/no', 'yes'],
 ['Do I speak three languages? yes/no', 'no'],
 ['DO I have a fiancee? yes/no', 'yes'],
 ['Do I like a clasic music? yes/no', 'yes'],
];

function getUserName() {
   user = prompt('Enter your name');
  alert('Welcome to my game "' + user +'"');
}

function questions() {
    for (let index = 0; index < questionsArray.length; index++) {
        let question = questionsArray[index][0];
       let tempAnswer = readAnswer(question);
        if (tempAnswer.toLowerCase()==questionsArray[index][1]) {
            alert('You are RIGHT!');
            result++;        
        }
        else{
            alert('WRONG');
        }
    }

}

function readAnswer(question) {
answer = '';
  do{
    answer = prompt(question);
  }while ((answer != 'YES' && answer != 'yes') && (answer != 'NO' && answer != 'no')) 

  return answer;
}

getUserName();
questions();

alert('The result is: ' + result + '/7');


