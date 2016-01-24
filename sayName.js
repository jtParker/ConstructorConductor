//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Users = function(name, age) {
  this.name = name;
  this.age = age;
};

//Now create three instances of Person with data you make up

  //code here
var user1 = new Users('JT', 30);
var user2 = new Users('Shay', 7);
var user3 = new Users('Bear', 3);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Users.prototype.sayName = function (user) {
  alert(user.name);
};
