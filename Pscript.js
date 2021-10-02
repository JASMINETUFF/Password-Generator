// start declaring variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
//Declare password variables
//Special Characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//Numerical  Characters
number = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
// Lowercase Characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// converts to uppercase
space = [];
//Choices declared outside the if statement so they can be concated upon a certain condition
var choices; 
//converts to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
  }; 
  //creates a variable for uppercase conversion
  alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Write password to the #password input
function generatePassword() {
  enter = parseInt(prompt("How many characters would you like to have 🧐? You can choose between 8 and 128."));
  //add a if statement for if they choose enter without entering a number
  if (!enter) {
    alert("You didnt choose a number 👁🕳👁 ahhhhh!!!")
 //add an else statement if the user chose a number less than 8 and more than 128 and gives them a chance to enter new number
  } else if (enter < 8 || enter > 128) {
    //validates selection
    //starts user input prompts
    enter = parseInt(prompt("The 🗝 here is choosing a number BETWEEN 8 and 128 👁👄👁"));
  //add prompts after they choose a number so they can confirm if they want charecters, numbers, lowercase or uppercase.
  }else {
    //continues if inputs are valid
    confirmNumber = confirm("Will this contain numbers? 🤭");
    confirmCharacter = confirm("How about some special charecters? 🧶🕳🧶");
    confirmUppercase = confirm("Any Uppercase letters? 🧐");
    confirmLowercase = confirm("What about Lowercase letters? 🤔");
  };

  //else if statement for if all of the prompts are returned as negative & vice versa.
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You gotta work with me here... I need some type of criteria 😬");
  }
 else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
 choices = character.concat (number, alpha, alpha2);
}
  //else if statement for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  // Else if for two positive options chosen from prompt
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);

} else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);
} else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
}

  // Else if for two positive options chosen from prompt
else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = alpha;
}
else if (confirmUppercase) {
    choices = space.concat(alpha2);
};
//Password Variable used as an array holder for the generated amount of length
var password = [];

//random selection for variables

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
//copies password to clipboard
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});


function UserInput(ps) {
    document.getElementById("password").textContent = ps;
  
  }
  function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}


