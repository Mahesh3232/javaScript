// // // two ways to use regular expresion 
// // const regEx= new RegExp('abc')
//  //const h = /pune/ // pattern
// // //prog 1
// let names = ["Mahesh-pune","Shrikant-pune","Ganesh-Sangamaner","Sanchita-Nashik"]
// // const h = /pune/ // pattern
// // console.log(h.test(names[1]))
// // let PuneS=names.filter(function(el){
// //     return h.test(el)
// // })
// // console.log(PuneS)

// //prog 2
// // const h=/^S/ // pattern
// // let yy=names.filter(function(el){
// //     return h.test(el)
// // })
// // console.log(yy)

// //prob3
// //let StudNames= ["Mahesh","Ganesh","Amit","Akansha","Arun","Sanchita","Sahil","Sandesh"]
// const b=/^A/
// let SName= StudNames.filter(function(el){
//     return b.test(el)
// })
// console.log(SName)

// const ba=/^....$/
// let AName= StudNames.filter(function(el){
//     return ba.test(el)
// })
// console.log(AName)

// //prob 4 

// const r1 = /^[A][mr]/
// let StsA=StudNames.filter(function(el){
//     return r1.test(el)
// })
// console.log(StsA)

// let StudNames = ["Mahesh", "Ganesh", "Amit", "Akansha", "Arun", "Sanchita", "Sahil", "Sandesh"]

// // let r2 = /^[S][a][n]/

// // let StsS=StudNames.filter(function(el){
// //     return r2.test(el)
// // })
// // console.log(StsS)

// // // \w is for the any charter between a to z or A to Z 
// // // \W is for the any special character
// let r3 = /^[\w][k]/
// let Sts1 = StudNames.filter(function (el) {
//     return r3.test(el)
// })
// console.log(Sts1)

// let Num1= [9881320576,9075173626,7350828424,755879829356]
// let me = /^[\d][0-9].{8}$/
// let he = Num1.filter(function(el){
//     return me.test(el)
// })
// console.log(he)

// // \d =Match a digit character
// // \D =Match a non-digit character

// let aa= ["9011604032",'mahesh',"@!$#%^","ganesh","@rahul"]
// let r4=/^\d/  // digit character
// let cc= aa.filter(function(el){
//     return r4.test(el)
// })
// console.log(cc)


// let r5=/^[\D][\w]/  // non digit character
// let ccc= aa.filter(function(el){
//     return r5.test(el)
// })
// console.log(ccc)

// \w = Match any alphanumeric character (including underscore)
// \W =Match any non-word character

// let z = ['rahul', 'mahesh', 'suraj', 'rushikesh', 'abdul', '@tushar', '#sandesh']
// r6 = /^[\w][au]/  // any alphabate
// let da = z.filter(function (el) {
//     return r6.test(el)
// })
// console.log(da)

// r7 = /^[\W][ts]/  // any nonalphabate(@#$%&*)
// let cs = z.filter(function (el) {
//     return r7.test(el)
// })
// console.log(cs)


//TASK

//print all capital letters"QFGZHhghjgjhghjgQFdghfhjgjgj"

// /[A-Z\s]/

let string = "QFGZHhghjgjhghjgQFdghfhjgjgj"

regex = /[A-Z\s]/ //works in ur perticularcase
let yy1 = string.split('')
console.log(yy1)
let sm = []
let kmk = string.split('').filter(function (el) {
    if (regex.test(el)) {
        return true
    } else {
        sm.push(el)
    }

})
console.log(kmk)
console.log(sm)
