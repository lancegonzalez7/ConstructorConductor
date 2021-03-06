/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw) {
    this.name = name;
    this.email = email;
    this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = []; //code here


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var lenny = new User('Lenny', 'Lenny@theLenster.com', 'iLoveLentilSoup');

users.push(tyler); //code here
users.push(cahlan);
users.push(lenny);

console.log('Tyler\'s information is ');
console.log('Name: ' + tyler.name);
console.log('Email: ' + tyler.email);
console.log('Password: ' + tyler.pw);//Console.log all of Tylers information

//code here

console.log('Lenny\'s information is ');
console.log('Name: ' + lenny.name);
console.log('Email: ' + lenny.email);
console.log('Password: ' + lenny.pw);
//Now console.log all of Lennys information

//code here


//Now create another instance of User using your own information and then add that to your users array.
var lance = new User('Lance', 'lance.gonzalez7@gmail.com', 'newbSauce7');
users.push(lance);
//code here

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.
for (var i = 0; i < users.length; i++) {
    console.log(users[i].name);
}
//code here
