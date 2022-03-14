// do while loop = do {code; increment} while (condition)
let i = 0;

do {
console.log(i);
i++
} while (i > 10);


// break 

for (let i = 0; i < 10; i++) {
    if(i === 5) {
        console.log("Five");
        break;
    }
    console.log(i);
}

// continue

for (let i = 0; i < 10; i++) {
    if(i === 5) {
        console.log("Five");
        continue;
    }
    console.log(i);
}




// Functions
function mySelf(){
    console.log("My name is Abraham.");
}

mySelf();

// Functions with parameters
function stu_Name(names) {
    console.log("My name is ", names);

}

stu_Name("Mensah");


function add (x,y) {
    let sum = x + y;
    console.log(sum);
}
add (3,6);


function multiply (x,y) {
    let ans = x * y;
    console.log(ans);
}
multiply (3,6);

// Functions with return value
function add (x,y) {
    let sum = x + y;
    return sum;
}
let result = add(10,15);
let newResult = result * 2;
console.log(newResult);

// Arrow Function
let v = (a,b) => a / b;
console.log(v(25,5));


// Higher order Function
// Is a function that uses another function as a parameter

let numbers = [0,1,2,3,4,5,6,7,8,9,10];
let squares = numbers.map((numbers) => numbers * numbers);
console.log(squares);

let double = numbers.map((number) => number + number);
console.log(double);

// used to retrive two or more elements of a set
let even = numbers.filter((number) => number % 2 ===0);
console.log(even);

let odd = numbers.filter((number) => number % 2 === 1);
console.log(odd);

// used to retrive just a single element of a set
let five = numbers.find((num) => num === 5);
console.log("five");

// String
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.concat(" every morning"));
console.log(sentence.endsWith("dog"));
console.log(sentence.endsWith("lazy"));
console.log(sentence.endsWith("g"));
console.log(sentence.includes("fox"));
console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));
console.log(sentence.padStart("50"));
console.log(sentence.repeat(2));
console.log(sentence.replace("lazy", "wild"));
console.log(sentence.slice(20,30));
console.log(sentence.substring(20,30));
console.log(sentence.split(" "));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());