// let names = ["mahesh", "sayali", "rohit", "sanket", "darshan"]
// console.log("*********push**************")

// //push= add the elelment at the end of the array and return the length of new array
// let push = names.push("radhy")
// console.log(push)
// console.log(names)

// console.log("*********pop**************")

// //pop = delete the last element of array and returns it 
// let pop = names.pop()
// console.log(pop)

// console.log("*********shift**************")

// //shift= remove the first element of an array and returns it
// let shift = names.shift()
// console.log(shift)

// console.log("*********unshift**************")

// //unshift = add the new element in the start of the array
// let unshift = names.unshift("sidhu")
// console.log(unshift)
// console.log(names)

// console.log("*********for each**************")

// //foreach= perform the action on the each element of array 
// let foreach = names.forEach(function (el, index, arr) {
//     console.log(`welcome to the classroom ${el}`)
// })
// console.log(foreach)


// let YearOfBirth = [1998, 1999, 2003, 1978, 1989, 1983, 2005, 2007]

// console.log("*****************map************")

// //map= perform opretion on each element and returns the result in new array
// let age = YearOfBirth.map(function (el, index, arr) {
//     return 2021 - el
// })
// console.log(age)


// console.log("*****************filter************")

// //filter= performs the opretion on each element of an array and return the o/p in new array
// let agegtr20 = age.filter(function (el, index, arr) {
//     return el > 20
// })
// console.log(agegtr20)

// console.log("*****************slice************")

// //slice=return the specific array depend on user input
// let slice = YearOfBirth.slice(1, 5)
// console.log(slice)

// console.log("*****************reduce************")

// //reduce=execute a reducer function for each element in the array and returns the singal value
// let addition = age.reduce(function (acc, el, index, arr) {
//     return acc + el
// })
// console.log(addition)

// console.log("*****************flat************")

// //flat= all sub-array elements concanated in one array return one new array 
// let Studname = ["ganesh", "rohit", "mahesh", "sayali", ["sarika", "ovi", "manasi", "nikita"]]
// let flat = Studname.flat()
// console.log(flat)

// console.log("*****************indexof************")

// //indexof= returns the index of element of array and return a singal valuse
// let indexof = flat.indexOf("mahesh")
// console.log(indexof)

// console.log("************prompt*****************")

// //prompt= to get a singal input from user
// let Age2 = Number(prompt('please enter your age ?'))
// if (Age2 > 10){
//     console.log('you can learn driving')
// }
// else if(Age2 > 5 && Age2 <= 10) {
// console.log('learn swiming')
// }
// else{
// console.log('stay home')
// }

// console.log("************concat*****************")

// //concat = joined the array
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let joined = arr1.concat(arr2)
// console.log(joined)

// console.log("************sort*****************")

// //sort= to sort the elements alphabitically
// let friends = ["sanket", "samir", "satyam", "sandesh", "khilari"]
// friends.sort()
// console.log(friends)

// console.log("************reverse*****************")

// //reverse= to reverse the array elements
// let z = ["gana", "ram", "shyam", "sita"]
// //z.reverse()
// console.log(z)

// console.log("************fill*****************")

// //fill= add the new elements in the provided index value and delete old value
// let agesD = [22, 44, 33, 23, 75, 34, 88, 88, 88, 88, 88]
// agesD.fill(55, 6, 8)
// console.log(agesD)

// console.log("************splice*****************")

// //splice= remove the provided index elements and add new elements
// z.splice(1,2,"ramesh")
// console.log(z)

// console.log("************join*****************")

// //join= joined the array elements
// let s=[['mahesh',"aher"]]
// //s.join("")
// console.log(s.join(""))

// console.log("************flat*****************")

// //flat=separate the all elements and stored into one array
// let v=[[1,2,3,],[4,5,6],[7,8,9]]
// let va=v.flat()
// console.log(va)

// console.log("************flatmap*****************")

// //flatmap= perform the actions on the all elements on the array 
// let va1=v.flat()
// let vx=va1.flatMap(function(el,index,arr){
//   return el+10
// })
// console.log(vx)

//every = check all elements of the array and return statement is true or false
// let agesA=[23,78,54,34,23,45]
// let X= agesA.every(function(el,index,arr){
//     return el > 10
// })
// console.log(X)

//some= check the statment if applied on any element of an array then return the value true or false
// let agesB=[3,4,5,6,6,7]
// let Y=agesB.some(function(el,index,arr){
//     return el>5
// })
// console.log(Y)

    
//includes = search the string and returns the o/p true or flase
// console.log("mahesh".includes ('es'))
// console.log("ganesh".includes('mh'))


