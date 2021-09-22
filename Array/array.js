// let names=["sanchita","komal","shivani","sarika","sayali"]
//push
//console.log(names)
// let push=names.push("ovi")
// console.log(names)

//pop
// let pop=[names.pop()]
// console.log(names)
// console.log(pop)

//slice
// let slice= names.slice(1,3)
// console.log(names)
// console.log(slice)


//shift
// let shift=[names.shift()]
// console.log(shift)
// console.log(names)


//unshift
// let unshift=[names.unshift("tanvi")]
// console.log(unshift)
// console.log(names)

//let Year=[1987,1989,1978,2004,2002,1999,1996,2005]
//filter
// let gtr2000= Year.filter(function(el,index,arr){
//     return el < 2000
// })
// console.log(gtr2000)


//push
// let gtr200=[]
// for (let i = 0;i < Year.length ; i++){
//         gtr200.push(2021-Year[i])
//     }
// console.log(gtr200)

//reduce

// let sum=Year.reduce(function(acc,el,imdex,arr){
// return el+acc
// })
// console.log(sum)

//map

// let currentage=Year.map(function(el,index,arr){
//     return 2021-el
// })
// console.log(currentage)


//flat
// let flat=Year.flat()
// console.log(flat)

// //indexOf
// let i=Year.indexOf(2004)
// console.log(i)

//foreach

// let foreach=Year.forEach(function(el,index,arr){
//  return console.log(`Age = ${el}`)
// })
// console.log(foreach)


//prompt

// let fruits=["mango","banana","apple","graps","chiku"]
// let userinput =prompt('which fruit you want to buy ?')
// if (fruits.indexOf(userinput)>=0){
//     console.log('fruits are available')
// }else{
//     console.log('fruit are not available')
// }

let Age = Number(prompt('please enter your age?'))
if (Age > 10) {
    console.log('You can learn Driving')
}
else if (Age > 5 && Age <= 10) {
    console.log('Swiming')
}
else {
    console.log('Stay home')
}


