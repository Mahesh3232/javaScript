// let Names = ["Mahesh", "Sayali", "Sarika", "Akash", "Sidhu", "Sahil"]

// let StudName=["samir","pranav","kunal","shubham","kiran","tanmay"]

// let sortArr =[StudName.slice(2,5)]
// console.log(sortArr)

// let Newarr =StudName.push("rohit")
// console.log (StudName)

// let NewArry =[StudName.pop()]
// console.log(NewArry)
// console.log(StudName)


// let Newarr = [StudName.shift()]
// console.log(Newarr)
// console.log(StudName)
// console.log("********************************")
// let NewArry =[StudName.unshift("rushi")]
// console.log(NewArry)
// console.log(StudName)

// Slice
// let NewArr = [Names.slice(3,5)]
// console.log (NewArr)


//Push
// let Mpush= Names.push("Manoj")
// console.log(Mpush)
// console.log(Names)


// // Pop
// let MPop = [Names.pop()]
// console.log (MPop)
// console.log (Names)

// Shift
// let Mshift = [Names.shift()]
// console.log (Mshift)
// console.log (Names)


//Unshift

// let MUnshift = [Names.unshift("Rushi")]
// console.log (MUnshift)
// console.log (Names)

// let YearOfBirth = [1987, 1976, 1956, 1967, 2003, 2004, 1998]
// //push
// let Age = []
//for (let i = 0;i < YearOfBirth.length ; i++){
//     //console.log (2021 - YearOfBirth[i])
//    Age.push(2021-YearOfBirth[i])
// }
// console.log (Age)


// let Age = []
// for (let i=0; i<YearOfBirth.length ;i++){
//    Age.push(2021 - YearOfBirth[i])
// }
// console.log(Age)
// console.log("*****************************************************")

// let Age1 = YearOfBirth.map(function(el,index,arr){
// return 2021-el
// })
// console.log(Age1)

//Map
// let Age=YearOfBirth.map(function(el,lndex,arr){
//     return 2021 - el
// })

// console.log(Age)

//Filter

// let Age = [22, 44, 65, 76, 34, 52, 89, 45, 23, 65, 75, 33, 99]

// let AgeGrFifty = []
// for (let i = 0; i < Age.length; i++) {
//     if (Age[i] > 50) {
//         AgeGrFifty.push(Age[i])
//     }
// }
// console.log(AgeGrFifty)

// let AgeGrFifty=[]
// for (let i = 0; i < Age.length;i++){
//     if (Age[i]>50){
//         AgeGrFifty.push(Age[i])
//     }
// }
// console.log(AgeGrFifty)

// let r= Age.filter(function(el,index,arr){
//     return el > 50
// })
// console.log(r)

// let r = Age.filter(function(el,lndex,arr){
//     return el > 50
// })
// console.log(r)

//Reduce

// let sum=0
// for (let i = 0; i < Age.length; i++) {
//     sum = sum+Age[i]
// }
// console.log(sum)

// let sum=0
// for (let i = 0; i<Age.length;i++){
//     sum = sum +Age[i]
// }
// console.log(sum)

// let t = Age.reduce(function(acc,el,index,arr){
//     return acc + el
// })
// console.log(t)

// let t= Age.reduce(function(acc,el,index,arr){
//     return acc+el
// })
// console.log(t)

//for each 
// let students=["mahesh","sayali","ganesh","sahil"]
// let tt=students.forEach(function(el,index,arr) {
//     console.log(`welcome ${el}`)

// })
// console.log(tt)



let names = ["mahesh", "sidhu", "gana", "ram", "sham", "shree"]
// let fourletter = []
// for (let i = 0; i < names.length; i++){
//     if (names[i].length == 5) {
//         fourletter.push(names[i])
//     }
// }
// console.log(fourletter)


// using filter function

// let fourletter =
//     names.filter(function (cv, index, arr) {
//         return cv.length == 4
//     })
// console.log(fourletter)


// let marks=[[78,98,67],[76,89,56],[34,76,32]]
// let y= marks.map(function(cv,index,arr){
//     return cv.reduce(function(acc,cv,index,arr){
//         return acc+cv
//     })

// })

// let sum=y.filter(function(cv,index,arr){
//     return cv >200
// })
// console.log(y)
// console.log(sum)


//Bank Transactions
let trasaction = [111, 435, 866, -342, -765, 653, -432]
// Withdraw
// let withdraw = trasaction.filter(function (el) {
//     return el < 0
// })
// console.log(withdraw)

// let withdrawSum=withdraw.reduce(function(acc,el){
//     return acc+el
// })
// console.log(withdrawSum)

// Deposite
// let Deposite=trasaction.filter(function(el){
//     return el > 0
// })
// console.log(Deposite)

// let DepositeSum=Deposite.reduce(function(acc,el){
//     return acc+el
// })
// console.log(DepositeSum)

//let totaltransaction=null
let totaltransaction=trasaction.reduce(function(acc,el){
    return acc+Math.abs(el)
})
console.log(totaltransaction)
