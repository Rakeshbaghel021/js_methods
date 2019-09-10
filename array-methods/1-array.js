// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods


// Find largest number in numbers

console.log(Math.max(...numbers));


// Find longest string in strings

var longestWord = " ";
for (i = 0; i < strings.length; i++) {
  if (strings[i].length > longestWord.length ) {
    longestWord = strings[i];
  }
}
return longestWord;

// Find all the even numbers

var even = function (num) {
return num % 2 === 0;
};
var myEvenArray = numbers.every(even);


// Find all the odd numbers

var odd =function (num) {
	return num %2 !==0;
}
var myOddArray = numbers.filter(odd)

// Find all the words that contain 'is' use string method 'includes'

strings.filter(string => string.includes("is"));


// Find all the words that contain 'is' use string method 'indexOf'

strings.filter(string => string.indexOf("is") >= 0);

// Check if all the numbers in numbers array are divisible by three use array method (every)

var byThree = function (num) {
return num % 3 === 0;
};
var mynewArray = numbers.filter(byThree);


//  Sort Array from smallest to largest

numbers.sort((a, b) => a - b);




// Remove the last word in strings

var lastWord=strings.pop();
console.log("poped word -" + lastWord);

// Add a new word in the array

var newWord= strings.push("baghel");
console.log("pushed word " + strings);

// Remove the first word in the array

var firstWord=strings.shift();
console.log("removed first word " + firstWord)

// Place a new word at the start of the array use (upshift)

var newfirstWord=strings.unshift("rakesh");
console.log("new array " + newfirstWord)

// Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3,-4))



// Make a subset of strings array ['a','collection']
console.log(strings.slice(2,-2))

// Replace 12 & 18 with 1221 and 1881

numbers[1]= 1221;
numbers[3]=1881;
// Replace words with string in strings array

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

customers.filter(item =>{
  return item.firstname.indexOf("J") == 0}) 

// Create new array with firstname and lastname
customers.map(item => {
  return { name : item.firstname + " " + item.lastname}});


// Sort the array created above alphabetically

function sortByName(item1, item2) {
  if(item1.name < item2.name){
      return - 1;
  } else if (item1.name > item2.name){
      return 1;
  } else {
      return ;
  }
}
customers.sort(sortByName);
