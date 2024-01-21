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

    // Function to get user input for a Yes/No question
function getUserAnswer(question) {
  const userInput = prompt(question);
  return userInput.trim().toLowerCase();  // Convert to lowercase and remove leading/trailing whitespaces
}

// Function to validate user input
function validateAnswer(answer) {
  return answer === 'yes' || answer === 'no' ? answer : 'invalid';
}

// Function to ask three Yes/No questions and store answers in an array
function askThreeQuestions() {
  const answers = [];
  for (let i = 1; i <= 3; i++) {
      const question = `Question ${i}: Enter Yes/No`;
      const userAnswer = getUserAnswer(question);
      const validatedAnswer = validateAnswer(userAnswer);
      answers.push(validatedAnswer);
  }
  return answers;
}

// Function to print array items on the console
function printArrayItems(array) {
  array.forEach((item, index) => {
      console.log(`Answer ${index + 1}: ${item}`);
  });
}

// Main function to execute the program
function main() {
  const userAnswers = askThreeQuestions();
  printArrayItems(userAnswers);
}

// Run the program
main();
