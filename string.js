// //String
// let FullName = "Mahesh"
// console.log(typeof FullName)

// //String stores the value by index
// console.log(FullName[0])
// console.log(FullName[4])
// console.log(FullName.length)
// console.log(FullName[FullName.length-1])

// //print the String by for loop 
// for (let i = 0; i < FullName.length; i++) {
//     // console.log(i)
//     console.log(FullName[i])
// }

// console.log('***********************************************')

// //print the string in reverse order

// for (let i=FullName.length-1;i>=0;i--){
//     console.log(FullName[i])
// }

// let Firstname="Mahesh"


// //Concatination
// console.log('My  first Name is'+""+Firstname)

// //String iterpolation

// console.log(`My First name is ${Firstname}`)

// conversion

// let Firstname = "Mahesh"
// let Age = 23
// let RollNumbre = 40
// console.log(Firstname + Age + RollNumbre)
// console.log(Age + RollNumbre + Firstname)
// console.log(Age + Firstname + RollNumbre)

// //Methods

// //uppercase = all elements of string in uppercase

// let Language = "Marathi"
// let upper = Language.toLocaleUpperCase()
// console.log(upper)

// //lowercase = all elements of string in lowercase

// let lower = Language.toLocaleLowerCase()
// console.log(lower)

// let b = Language.toLocaleUpperCase().toLocaleLowerCase().length
// console.log(b)

// //Startwith and Endwith(aslo work with substring)

// //starswith = returns the condition is true or false 

// let Lastname = "deshmukh"
// console.log(Lastname.startsWith('de'))//True
// console.log(Lastname.startsWith('h')) // False


// //endwith = returns the condition is true or false 
// console.log(Lastname.endsWith('kh'))//True
// console.log(Lastname.endsWith('d'))//False

// //inciude = Returns true if searchString appears as a substring of the result otherwise False

// let bestFrnd = "sayali"
// console.log(bestFrnd.includes('ya'))


// // Searching the fruit

// let Fruits = "mango banana graps apple chiku gauva"
// let userinput = "mango"
// if (Fruits.includes(userinput)) {
//     console.log('fruit is avalable')
// } else {
//     console.log('fruit is not avalable')
// }

// //slice
// //Starting position should be before end position

// let month = "chinmay"
// let result = console.log(month.slice(4, 7))
// //console.log(month[-1])
// console.log(month.slice(-1, -6)) //blank
// console.log(month.slice(-5, -1)) //inma
// console.log(month.slice(-6, -2)) //hinm
// console.log(month.slice(-3)) //may

// //substring =

// let homeAdd="ganesh society"
// //let substring= console.log(homeAdd.substring(6))//society
// let substring= homeAdd.substring(7,-1)
// console.log(substring)


// //substr = get the substring from specified location
// let gga = ["mahesh", "sayali", "sarika", "akash"]
// let No = gga.filter(function (el) {
//     return el.length < 6
// })
// console.log(No)

// //using for loop

// let Ba = ["mahesh:9881966732", "sayali:9309181402", "sarika:9011604032"]
// let mob = []
// for (let i = 0; i < Ba.length; i++) {
//     mob.push(Ba[i].substr(-11))
// }
// console.log(mob)

// //using map 
// let aa = Ba.map(function (el) {
//     return el.substr(-10)
// })
// console.log(aa)

// //trim = removes the space from start and end

// let myFstnme = " mahesh Aher "
// let trimmed = myFstnme.trim()
// console.log(trimmed)


// //replace = replace the text in string 

// // let city =["i live in Pune city"]
// // let cityName = city.replace("Pune","nagpur")
// // console.log(cityName)

// let city = ["i live in Pune city | i live in Bombay",
//     "i live in Pune city | i live in Nagpur"]
// let UpdateCity = []

// for (let i = 0; i < city.length; i++) {
//     if (city[i].includes('Bombay')) {
//         UpdateCity.push(city[i].replace("Bombay", "Mumbai"))
//     } 
//     else if (city[i].includes('Nagpur')){
//         UpdateCity.push(city[i].replace("Nagpur", "Wardha"))
//     }
// }
// console.log(UpdateCity)

// //CharAt = returns the character of specified value
// let name1="mahesh"
// let j=name1.charAt(3)
// console.log(j)


// //CharCodeAt = shows the unicode values of character
// let bbb="Mahesh"
// let cc=bbb.charCodeAt(4)
// console.log(cc)

// //Split = Split the string in substring and returns the values in array

// let village= "ganore rajapur virgaon rahimpur jaorve"
// let separate = village.split(" ")
// console.log(separate)

// let Info="mahesh:9011604032,akash:9881966732,sayali:9309181402"
// let Mno=Info.split(",")
// console.log(Mno)

let FullNameSplit="mahesh aher"
console.log(`welcome ${FullNameSplit.split(" ")[0]}!`)

//padstart = add the string in the starting of the string
console.log("9881966732".padStart(14,"+91 "))

//padend= = add the string in the starting of the string
console.log("9881966732".padEnd(14," +91"))
