//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

  //code here

  string.prototype.reverse = function (str) {
  var x = '';
  for (var i = str.length - 1; i >= 0; i--)
    x += str[i];
  return x;
}
