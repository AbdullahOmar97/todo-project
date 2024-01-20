function askYesNoQuestion(question) {
    let answer = prompt(question + " (yes or no)");
    if (answer.toLowerCase() === "yes") {
      return true;
    } else if (answer.toLowerCase() === "no") {
      return false;
    } else {
      // If the user enters an invalid response, prompt again
      alert("Please enter 'yes' or 'no'");
      return askYesNoQuestion(question);
    }
  }

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