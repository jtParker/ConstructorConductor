//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here
  var QuizUser = function(name, email, password, totalScore) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.totalScore = totalScore;
  }


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here
var QuestionConst = function(title, answersArray, rightAnswer, difficulty) {
  this.title = title;
  this.answersArray = answersArray;
  this.rightAnswer = rightAnswer;
  this. difficulty = difficulty;
}

//Create a quizUsers Array which is going to hold all of our users.

  //code here
var quizUsers = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here
QuizUser('Shay', 'heyShay@outlook.com', 'letsplay', '0');
QuizUser('Bear', 'bubbyBear@outlook.com', 'raar', '0');
QuizUser('JT', 'jtp311@msn.com', '311311', '0');


//Create a questions Array which is going to hold all of our questions

  //code here
var questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here
var quest1 =  QuestionConst('T/F: Inheritance is achieved in Javascript through Prototypes?', 'T', 'True', 'Easy');
var quest2 =  QuestionConst('T/F: JavaScript is just a scripting version of Java', 'F', 'False', 'Easy');
var quest3 =  QuestionConst("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", 'T', 'True', 'Medium');


//Now push all of your instances of Question into the questions Array

  //code here
  questions.push(quest1);
  questions.push(quest2);
  questions.push(quest3);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.
for (var key in quizUsers) {
  console.log(key);
}

  //code here
