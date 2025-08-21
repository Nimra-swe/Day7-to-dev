// 1: String methods
let str = "JavaScript is amazing!";
let print = str.length;
console.log(print);

let str1 = "JavaScript is amazing!";
let print1 = str1.charAt();
console.log(print1);

let str2 = "JavaScript is amazing!";
let print2 = str2[3];
console.log(print2);

let str3 = "JavaScript is amazing!";
let print3 = str3.charCodeAt();
console.log(print3);

// 2:Given
let fruit = "Apple, Banana, Kiwi";
let part = fruit.slice(7 , 13);
console.log(part);

let str4 = "Apple, Banana, Kiwi";
let part4= str4.substring(9, 13);
console.log(part4);

let str5 = "Apple, Banana, Kiwi";
let part5 = str5.substr(12, 6);
console.log(part5);

// 3:Convert this text into UPPERCASE and lowercase:
let text = "Hello World!";
let ptr = text.toUpperCase();
console.log(ptr);

let text0 = "Hello World!";
let ptr0 = text0.toLowerCase();
console.log(ptr0);

// 4:Trim the extrapaces:
let messy = "     Coding is fun!     ";
let scr = messy.trim();
console.log(scr);

let mess = "     Coding is fun!     ";
let spr = mess.trimStart();
console.log(spr);

let restore = "     Coding is fun!     ";
let blp = restore.trimEnd();
console.log(blp);

// 5:Use .concat() to join the strings
let first = "Good";
let second = "Morning";
// let result = first.concat(" " , second);
console.log("Good" + " " + "Morning");

// 6:Use .padStart() and .padEnd() to turn "7" into:
let text1 = "7";
let padded = text.padStart(4,"0");
console.log(padded);

let text2 = "7";
let padded0 = text2.padEnd(4,"0");
console.log(padded0);

// 7:Repeat the string "Hi!" 3 times using .repeat().
let text8 = "Hello world!";
let result = text8.repeat(3);
console.log(result);

// 8:Replace "Microsoft" with "Google" in this text:
let sentence = "Please visit Microsoft!";
let result0 = sentence.replace("please visit Google");
console.log(result0);

// 9:Split the sentence below into an array of words:
let line = "I am learning JavaScript";
let effect = line.split(",");
console.log(effect);

// Part 2: Logical Operators
let username = "";
let nickname = "CoderGirl";
console.log(username || nickname ||  "Anonymous");

////////////
console.log( !!"JavaScript" );  
console.log( !!null );  

// Check if both conditions are true:
let hour = 10;
let minute = 0;
if (hour == 10 && minute == 0) {
console.log( "It's 10:00 now" );
}

// Part 3: Conditions if
if (hour < 18) {
  greeting = "Good day";
}
console.log(greeting);

// Write an if…else statement:
// If the time is less than 18, print "Good day". Otherwise, print "Good evening".
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

// else if statement
if (24 < 10) {
  greeting = "Good morning";
} else if (24 < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

// Switch statement Use a switch statement to print the current day of the week (Sunday → Saturday)
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);