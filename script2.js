// Data types and conditions

// string methods
// String Length

let text = "ABDEbfdhuFVWXYZ";
let length = text.length;
console.log(length);

//  String charAt()
let num = "HELLO WORLD";
let char = num.charAt(0);
console.log(char);

// String charCodeAt()
let sum = "HELLO WORLD";
let sum1 = sum.charCodeAt(0);
console.log(sum1);

// codePointAt()
let sum2 = "HELLO WORLD";
let code = sum2.codePointAt(0);
console.log(code);

//  String at()
const name = "W3Schools";
let letter = name[2];
console.log(letter);

// Property Access [ ]
let sum3 = "HELLO WORLD";
let re = sum3[0];
console.log(re);

// String concat()
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text1 + text2);

// String slice()
let part = "Apple, Banana, Kiwi";
let part1 = part.slice(7, 13);
console.log(part1);

// String substring()
let str = "Apple, Banana, Kiwi";
let part2 = str.substring(7, 13);
console.log(part2);

// String substr()
let str9 = "Apple, Banana, Kiwi";
let part9 = str9.substr(7, 6);
console.log(part9);

// String toUpperCase()/
let text4 = "Hello World!";
let text5 = text4.toUpperCase();
console.log(text5);

// String toLowerCase()
let text6 = "Hello World!";     
let text7 = text6.toLowerCase();
console.log(text7);

//  String isWellFormed()
let text8 = "Hello world!";
let result = text8.isWellFormed();
console.log(result);

let text9 = "Hello World \uD800";
let resu = text9.isWellFormed();
console.log(resu);

// String trim()
let text10 = "      Hello World!      ";
let text11 = text10.trim();
console.log(text11);

//  String trimStart()
let text12 = "     Hello World!     ";
let text13 = text12.trimStart();
console.log(text13);

// String trimEnd()
let text14 = "     Hello World!     ";
let text15 = text14.trimEnd();
console.log(text15);

// String padStart()
let text16 = "5";
let padded = text16.padStart(4,"0");
console.log(padded);

//  String padEnd()
let text17 = "5";
let padded1 = text17.padEnd(4,"0");
console.log(padded1);

//  String repeat()
let text18 = "Hello world!";
let resul = text18.repeat(2);
console.log(resul);

//  String Content
let text0 = "Please visit Microsoft!";
let newText = text0.replace("Microsoft", "W3Schools");
console.log(newText);

// String ReplaceAll()
text19 = ("Cats","Dogs");
result = text19.replaceAll("cats","dogs");
console.log(result);

// String split()
let text_0 = "Hello world I am learning JS";
let words = text_0.split(" ");
console.log(words);


// Logical operators
// || (OR)
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log( firstName || lastName || nickName || "Anonymous");

// && (AND)
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}

// ! (NOT)
console.log( !!"non-empty string" );
console.log( !!null );

// Conditions
// if statement
if (hour < 18) {
  greeting = "Good day";
}
console.log(greeting);

// else statement
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

// else if statement
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

// Switch statement
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