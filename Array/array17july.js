//concat = joined the array

// let arrone=[1,2,3,4]

// let arrTwo=[3,4,5,6]
// let ys=arrone.concat(arrTwo)
// //console.log(ys)
// //console.log(arrone)
// console.log(arrTwo.concat(arrone))

//Sort String = sort the elements alphabitically
//let names=["mahesh","sayali","sarika","akash","sidhu","tanvi"]

// names.sort() 
// console.log(names)


//reverse = reverse the array elements

// names.reverse()
// console.log(names)


//fill = add the new elements in provided index  value and delete old elements
//         0 1 2 3 4 5 6   7  8  9  10 11 12
// let arr = [1,2,3,4,5,6,77,88,77,77,77,77,99]
// // arr.fill(88,1,6)
// // console.log(arr)
// arr.fill(44,2,4)
// console.log(arr)

//splice = remove the element of provided index and and new element
//  let d =['mahesh',"akash","sayali","ganesh","rahul"]
// d.splice(1,4,"shri","pankaj","vishal")
// console.log(d)

//obj = obj stores the value by index

// let person=["mahesh","aher",30,24]
// console.log(person[1])

// let info={
//     firstName: "mahesh",
//     lastName: "aher",
//     Age:23,
//     id: 432
// }
//dot notation
// console.log(info.firstName)

//braket notation
// console.log(info["lastName"])


let Studinfo = [{
    firstName: "mahesh",
    lastName: "aher",
    Age: 23,
    id: 432
},
{
    firstName: "ganesh",
    lastName: "ambre",
    Age: 53,
    id: 562
},
{
    firstName: "sarika",
    lastName: "kachare",
    Age: 32,
    id: 342
}]


//findindex = return the index of  elements in the array
// let g= Studinfo.findIndex(function(el,index,arr){
//     return el.lastName=="kachare"
// })
// console.log(g)

// let g= Studinfo.findIndex(function(el,index,arr){
//     return el.id==432
// })
// console.log(g)

//includes = search the string and returns the o/p true or flase
// console.log("mahesh".includes ('es'))
// console.log("ganesh".includes('mh'))


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

// join = joined the elements of the array
// let fullname=["mahesh","aher"]
// console.log(fullname.join(" "))


//flat= separates the all arrays element and stored into one array 
//flatmap = perform the action on all elements of the array 
let e=[[1,2,3],[22,33,44],[55,66,77]]
// let gg=e.flat()
// let add=gg.flatMap(function(el,index,arr){
//     return el+10
// })
// console.log(gg)
// console.log(add)
let friends =[['mahesh',"aher"],["sayali","aher"],["ganesh","ambre"]]

let names=friends.flatMap(function(el){
    return el.join(" ")
})
console.log(names)












