var Name = prompt("Please, enter your Name");
var gender = prompt("Enter your gender");

if (gender == "Male" || gender =="MALE" || gender =="male" || gender =="female" || gender =="Female" || gender =="FEMALE"){
    }else{gender = prompt("Please, Enter your gender correctly")
};

var age = prompt("Enter your age");

if (age <= "0"){alert("Sorry, the age is incorrect")};

var msg = confirm ("Do you want to skip the welcoming message?");
if (msg == false){
    if(gender=="Male" || gender=="MALE" || gender=="male"){
        alert("welcome Mr "+Name);}
        else if(gender == "female" || gender=="Female" || gender=="FEMALE"){
            alert("welcome Ms "+Name)
        }else{
            alert("welcome "+Name)
        };
    };

function getUserAnswer(question) {
  const userInput = prompt(question);
  return userInput.trim().toLowerCase(); 
}

function validateAnswer(answer) {
  return answer === 'yes' || answer === 'no' ? answer : 'invalid';
}

function askThreeQuestions() {
  const answers = [];
  const questionNum = ["Are you a student at Luminus College?", "Are you studying Python software development?", "Are you over 30 years old?"];
  for (let i = 0; i <= 2; i++) {
      const question = questionNum[i];
      const userAnswer = getUserAnswer(question);
      const validatedAnswer = validateAnswer(userAnswer);
      answers.push(validatedAnswer);
  }
  return answers;
}

function printArrayItems(array) {
      console.log("Question 1:", array[0]);
      console.log("Question 2:", array[1]);
      console.log("Question 3:", array[2]);

  };


function main() {
  const userAnswers = askThreeQuestions();
  printArrayItems(userAnswers);
}

main();

