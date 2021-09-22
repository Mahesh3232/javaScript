// //uppercase = action= uppercase,return = string
// //function declation ,arrow function ,function expresion 
// //String + String = String 

// //Problem 1//revesed the String 

// let FstNme = "i tried so hard and got so far but in the end it doesn't even matter "
// let reverse = " "
// for (let i = FstNme.length; i >= 0; i--) {
//     reverse = (reverse + FstNme[i])
// }
// console.log(reverse)
// console.log("********************************vovels count*******************************************")

// // //Proble 2//count of vowels in String 
// let count = 0
// for (let i = 0; i < FstNme.length - 1; i++) {
//     if (FstNme[i] == "a" || FstNme[i] == "e" || FstNme[i] == "i" || FstNme[i] == "o" || FstNme[i] == "u") {
//         count = count + 1
//     }
// }
// console.log(count)

// console.log("***************************************************************************")

// //Problem 3 = Reversing the string element 
// let string1 = "i am new to javascript";
// let splitedString1 = string1.split(" ")
// console.log(splitedString1)
// let newString1 = [];

// function revString(stringi) {
//     revStr = "";
//     for (let i = 0; i < stringi.length; i++) {
//         revStr = stringi[i] + revStr;
//     }
//     return revStr;
// }
// for (i = 0; i < splitedString1.length; i++) {
//     newString1.push(revString(splitedString1[i]));
// }
// console.log(newString1.join(" "))

// console.log("***************************************************************************")

// let string2 = "my Name Is Mahesh Aher"
// let splitString = string2.split(" ").reverse().join(" ")
// //let revstr=splitString.reverse().join(" ")
// console.log(splitString)

// console.log("***************************************************************************")

// //Problem 4 = Fetcing highest and lowest no in array 
// let age = [22, 44, 66, 33, 11, 85, 97, -45, 64, -32, 54]
// let highest = 0
// let lowest = age[0]
// for (i = 0; i < age.length; i++) {
//     if (age[i] > highest) {
//         highest = age[i]
//     } else if (age[i] < lowest) {
//         lowest = age[i]
//     }
// }
// console.log(highest)
// console.log(lowest)

// console.log("***************************************************************************")

// //Problem 5 = Reversing the string 
// let names = "mahesh,karan,sayali,sarika,kalyani"
// let str2 = " "
// for (let i = names.length - 1; i >= 0; i--) {
//     str2 += names[i]
// }
// console.log(str2)

// let op = str2.split(",").reverse()
// console.log(op)

// console.log("***************************************************************************")

// //Problem 6 = python.py extract py
// let lang = "python.py"
// let sep = lang.split(".")
// console.log(sep[1])
// //console.log(sep[sep.length-1])

// //or

// let str3 = "python.py"
// let op1 = " "
// for (let i = 0; i < str3.length; i++) {
//     if (i == str3.length - 1 || i == str3.length - 2) {
//         op1 = op1 + str3[i]
//     }
// }
// console.log(op1)

// console.log("***************************************************************************")

// //Problem 7 =delete the first and last element of the string
// let actor = "SsalmanN"
// let op3 = ""
// for (let i = 0; i < actor.length; i++) {
//     if (i != 0 && i != actor.length - 1) {
//         op3 = op3 + actor[i]
//     }
// }
// console.log(op3)

// console.log("***************************************************************************")

// //problem 8------>
// let arr1 = [
//     [1, 2, 3],
//     [4, 5, -7],
//     [100, -300, 200]
// ]
// let blnkarr = []
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//         blnkarr.push(arr1[i][j])
//     }
// }
// console.log(blnkarr)

// let highvalue = 0
// let lowvalue = blnkarr[0]
// for (let k = 0; k < blnkarr.length; k++) {
//     if (blnkarr[k] > highvalue) {
//         highvalue = blnkarr[k]
//     } else if (blnkarr[k] < lowvalue) {
//         lowvalue = blnkarr[k]
//     }
// }
// console.log(highvalue)
// console.log(lowvalue)

// console.log("***************************************************************************")


// //Problem 9 = find the count of word in given string 

// let statement1 = "I am new to javascript and wish to learn a every concept of javascript. javascript is great"
// let separate = statement1.split(" ")
// console.log(separate)
// let wCount = 0
// for (i = 0; i < separate.length; i++) {
//     if (separate[i].includes("javascript")) {
//         wCount++
//     }
// }
// console.log(wCount)

// console.log("***************************************************************************")


// //Problem 10= count of the vowels in the given string
// let song = "i tried so hard and got so far but in the end it doesn't even matter "
// let count3 = 0
// for (let i = 0; i < song.length; i++) {
//     if (
//         song[i] == "a" ||
//         song[i] == "e" ||
//         song[i] == "i" ||
//         song[i] == "o" ||
//         song[i] == "u"
//     ) {
//         count3++
//     }
// }
// console.log(count3)

// console.log("***************************************************************************")


// // problem 11 = separate the uppercase character
// let string= "QFGZHhghjgjhghjgQFdghfhjgjgj"
// regex = /[A-Z\s]/ //works in ur perticularcase
// let yy1= string.split('')
// console.log(yy1)

// let kmk= string.split('') .filter(function(el){
//     if(regex.test(el)){
//         return true
//     }
    
// })
// console.log(kmk)

// //OR

let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"
let small=[]
let C  =(/[A-Z]/g)
let bb = str.split("").filter(function(el){
   if(C.test(el)){
       return true
    }else {
        small.push(el)
    }
})
console.log(small)
console.log(bb) //or
let Ca  = str.match(/[A-Z]/g)//.join("")
let L = str.match(/[a-z]/g)//.join("")

console.log(`Original string = ${str}`)
console.log(`Capital Letters = ${Ca}`)
console.log(`Lower Letters = ${L}`)


