// ===============================
// SECTION 1 — Variables & Assignment
// ===============================

// 1 & 2
let name = "Shivani";
let age = 20;
let isStudent = true;
console.log("Name:", name, "Age:", age, "Student:", isStudent);

// 3 Swap without third variable
let a = 5;
let b = 10;
console.log("\nBefore Swap:", a, b);
a = a + b;
b = a - b;
a = a - b;
console.log("After Swap:", a, b);

// 4 Output prediction
let x = 10;
let y = x;
y = 20;
console.log("\nValue of x:", x);

// 5 const usage
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("\nArea:", area);


// ===============================
// SECTION 2 — Operators
// ===============================

// 6 Arithmetic
let n1 = 10;
let n2 = 3;
console.log("\nSum:", n1 + n2);
console.log("Difference:", n1 - n2);
console.log("Product:", n1 * n2);
console.log("Quotient:", n1 / n2);
console.log("Remainder:", n1 % n2);

// 7 Outputs
console.log("\n5 + '5' =", 5 + "5");
console.log("5 - '2' =", 5 - "2");
console.log("true + 1 =", true + 1);

// 8 Compare with 100
let num = 120;
if (num > 100) console.log("\nGreater than 100");
else if (num === 100) console.log("Equal to 100");
else console.log("Less than 100");

// 9 Equality
console.log("\n5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");

// 10 Age eligibility
let personAge = 25;
if (personAge >= 18 && personAge <= 60)
  console.log("\nEligible");
else
  console.log("Not eligible");


// ===============================
// SECTION 3 — Control Statements
// ===============================

// 11 Even or Odd
let number = 7;
if (number % 2 === 0)
  console.log("\nEven");
else
  console.log("\nOdd");

// 12 FizzBuzz
let n = 15;
if (n % 3 === 0 && n % 5 === 0)
  console.log("FizzBuzz");
else if (n % 3 === 0)
  console.log("Fizz");
else if (n % 5 === 0)
  console.log("Buzz");
else
  console.log(n);

// 13 Switch weekday
let day = 3;
console.log("\nDay:");
switch(day){
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid");
}

// 14 For loop
console.log("\n1 to 20:");
for(let i=1;i<=20;i++) console.log(i);

console.log("\nEven numbers:");
for(let i=2;i<=20;i+=2) console.log(i);

// 15 While sum
let N = 5;
let sum = 0;
let i = 1;
while(i <= N){
  sum += i;
  i++;
}
console.log("\nSum 1 to", N, "=", sum);

// 16 Break & Continue
console.log("\nBreak & Continue:");
for(let j=1;j<=10;j++){
  if(j === 5) continue;
  if(j === 8) break;
  console.log(j);
}


// ===============================
// SECTION 4 — Functions
// ===============================

// 17 Function sum
function add(a,b){
  return a+b;
}
console.log("\nFunction Sum:", add(3,4));

// 18 Arrow function
const addArrow = (a,b) => a+b;
console.log("Arrow Sum:", addArrow(5,6));

// 19 Prime check
function isPrime(num){
  if(num < 2) return false;
  for(let k=2;k<num;k++){
    if(num % k === 0) return false;
  }
  return true;
}
console.log("\nIs 7 Prime?", isPrime(7));

// 20 Reverse string
function reverseStr(str){
  return str.split("").reverse().join("");
}
console.log("Reverse:", reverseStr("hello"));

// 21 Return test
function test(){
  return;
  console.log("Hello");
}
console.log("\nTest function output:");
test();

// 22 Largest number
function largest(arr){
  return Math.max(...arr);
}
console.log("\nLargest:", largest([3,7,2,9,5]));


// ===============================
// SECTION 5 — Integrated Challenge
// ===============================

function getGrade(mark){
  if(mark >= 90) return "A";
  else if(mark >= 75) return "B";
  else if(mark >= 50) return "C";
  else return "Fail";
}

let marks = 82;
let grade = getGrade(marks);

console.log("\n===== FINAL RESULT =====");
console.log("Marks:", marks);
console.log("Grade:", grade);
