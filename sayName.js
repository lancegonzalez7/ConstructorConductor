//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  var Person = function(name, age) {
    this.name = name,
    this.age = age
  }//code here


//Now create three instances of Person with data you make up

  var katelyn = new Person('Katelyn',21);
  var lance = new Person('Lance',27);
  var trent = new Person('Trent',28);
  //code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  Person.prototype.sayName = function() {
    alert(this.name);
  }//code here
