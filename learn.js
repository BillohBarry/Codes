console.log("hey");
var myName = "Billoh";
var myStr = "My name is " + myName + " and I am doing okay ";
console.log(myStr);

//appending variable to string
var someAdjectives = " stressful am going with my pace.";
var myStr = "Learning to code is ";
myStr += someAdjectives;
console.log(myStr);

//World Blank
function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "I " + myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;
  return result;
}
console.log(worldBlanks("love", "coding", "javascript", "quickely."));
console.log(worldBlanks("am", "a", "fullstack", "developer."));

// Template literals(Backticks-quoted)
console.log(`half of 100 is ${100 / 2}`);

// Unary operations
console.log(3 > 2);
console.log(typeof 4.5);
console.log(typeof "B");
console.log("Boy" != "Mane");
console.log("7" + 7);
console.log(true == 1);

let billohDebt = 100;
billohDebt = billohDebt - 35;
console.log(billohDebt);
