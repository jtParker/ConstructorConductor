/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order


  //code here

var user1 = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
users.push(user1);

var user2 = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
users.push(user2);

var user3 = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');
users.push(user3);

for (var key in users[0]) {
console.log('Tyler\'s information is ' + users[0][key]);
};
//Console.log all of Tylers information

  //code here
for (var key in users[2]) {
console.log('Lenny\'s information is ' + users[2][key]);
};
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

  //code here
var user4 = new User('JT', 'jtp311@msn.com', 'iLove311');

//Now loop through your users Array and console.log every users name.
for (var key in users) {
  console.log('All my users names are ' + users[key])
};
  //code here
