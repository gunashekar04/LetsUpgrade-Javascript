//Day-2 Assignment

  
// Q1.Program to search for a particular character in a string
let string = "Javascript Assignment";
console.log(string.search('a'));
console.log(string.search('s'));
console.log("\n");

// Q2.Program to convert minutes to seconds
let min = 100;
let sec = min*60;
console.log(`${min} minutes is equal to ${sec} seconds`);
console.log("\n");

// Q3.Program to search for a element in a array of strings
let arr = ["Apple","Banana","Mango","Pineapple","Guava"];
let pos = arr.indexOf("Mango")
console.log(`${arr[pos]} is found at index position: ${pos}`);
console.log("\n");


// Q4.Program to display only elements containing 'a' in them from a array
let sports = ["Football","Basketball","Cricket","Baseball"];
for(let i=0;i<sports.length;i++)
{
    if (sports[i].includes('a'))
        console.log(sports[i]);
    else
        continue;
}
console.log("\n");

// Q5.Print an array in reverse order 
let letters = ["a","b","c","d","e"];
console.log(letters.reverse())