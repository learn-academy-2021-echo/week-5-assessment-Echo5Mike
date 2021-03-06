// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//describe("addGranola", () => {
//    let groceryList = 
//    let result = 
//    it("adds granola to the end of an array", () => {
//      expect(addGranola(groceryList)).toEqual(result)
//    })
//})

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.
describe("cryptex", () => {

    const secretCodeWord1 = "Lackadaisical"
    let output1= "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    let output2= "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    let output3= "3cc3ntr1c"

    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
      expect(cryptex(secretCodeWord1)).toEqual(output1)
      expect(cryptex(secretCodeWord2)).toEqual(output2)
      expect(cryptex(secretCodeWord3)).toEqual(output3)
    })
})
//ReferenceError: cryptex is not defined
// b) Create the function that makes the test pass.
//function cryptex takes in a STRING
// iterate over string by convrting to array or maybe a forloop
// make aeio into variables
//          something about replace
const cryptex = string =>{
    let stringThatWaz = string.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0)
    return stringThatWaz
}


//******if I have time******
// function replacer(match, p1, p2, p3, offset, string) {
//     // p1 is nondigits, p2 digits, and p3 non-alphanumerics
//     return [p1, p2, p3].join(' - ');
//   }
//   let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
//   console.log(newString);  // abc - 12345 - #$*%
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace























// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]



// b) Create the function that makes the test pass.
describe("finder", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    let output1 = ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    let output2 = ["Cherry", "Blueberry", "Peach"]

   it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
     expect(finder(arrayOfWords1, letterA)).toEqual(output1)
     expect(finder(arrayOfWords2, letterE)).toEqual(output2)
   })
})
// ReferenceError: finder is not defined
//my function will take two arguments (arrayOfWords1, letterA)
/// my function will need to itterate over the array of words
//// looking for letterA    maybe .contain 
///// might have to break up the array into strings.
const finder = (array, letter) =>{
    temp = []
    array.filter(value=>{
        if (value.includes(letter) || value.includes(letter.toUpperCase()))
    //maybe the I can just check the value with conditonals
        temp.push(value)
    })
    return temp
}




















// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a ???full house???. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("slightOfHand", () => {
    
    const hand1 = [5, 5, 5, 3, 3]
    let output1 = true
    const hand2 = [5, 5, 3, 3, 4]
    let output2 = false
    const hand3 = [5, 5, 5, 5, 4]
    let output3 = false

   it("takes in an array of 5 numbers and determines whether or not the array is a ???full house???. A full house is exactly one pair and one three of a kind", () => {
     expect(slightOfHand(hand1)).toEqual(output1)
     expect(slightOfHand(hand2)).toEqual(output2)
     expect(slightOfHand(hand3)).toEqual(output3)
   })
})


//ReferenceError: slightOfHand is not defined
// b) Create the function that makes the test pass.
//() =>
    // needs to take in an array slightOfHand
    // the array must be compared against win conditonals
            // if array value at index 012 are equals AND 34 are the same you win
            // or array value at index 01 are equals AND 234 are the same you win
            // will have to sort them from hightes to lowest
// maybe use a for loop or maybe .map

const slightOfHand = array =>{
    for (let i = 0; i < array.sort().length; i++) {
    win =  (((array[0] === array[2])&&(array[3] === array[4])) || ((array[0] === array[1])&&(array[2] === array[4])))
    return win
    }
}