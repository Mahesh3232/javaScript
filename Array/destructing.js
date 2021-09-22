// let nummbers = [1, 2, 33, 44, 55]
// console.log(nummbers)

// nummbers[99] = 22 // get the 94 empty items 
// console.log(nummbers.length)
// console.log(nummbers)

//destructing 

//fst method old js 
let Fstnames = ["mahesh", "ganesh", "amol", "rahul", "sandesh", "vishal"]
// let Student1 = Fstnames[0]
// let Student2 = Fstnames[1]
// let Student3 = Fstnames[2]
// let Student4 = Fstnames[3]
// let Student5 = Fstnames[4]

// console.log(Student1)
// console.log(Student2)
// console.log(Student3)
// console.log(Student4)
// console.log(Student5)

//secd method es6 

// let [Student1,Student2,Student3,Student4,Student5,Student6]= Fstnames
// console.log(Student1)
// console.log(Student2)
// console.log(Student3)
// console.log(Student4)
// console.log(Student5)
// console.log(Student6)

// let City = ["nagpur","Akole","Sangamaner","nashik","Pune","mumbai"]
// let [city1,city2,city3,city4,city5,city6]=City
// console.log(`welcome to ${city1}`)
// console.log(`welcome to ${city2}`)
// console.log(`welcome to ${city3}`)
// console.log(`welcome to ${city4}`)
// console.log(`welcome to ${city5}`)
// console.log(`welcome to ${city6}`)


// let body = {
//     student: [
//         {
//             student1: "Mahesh",
//             age: 34
//         },
//         {
//             student1: "Sayali",
//             age: 23
//         },
//         {
//             student1: "Sandesh",
//             age: 22
//         },
//         {
//             student1: "Kiran",
//             age: 32
//         },
//         {
//             student1: "Vishal",
//             age: 12
//         },
//         {
//             student1: "Ram",
//             age: 25
//         },
//         {
//             student1: "Shrikant",
//             age: 26
//         }

//     ]
// }

// let [StudentOne, StudentTwo, StudentThree, StudentFour, StudentFive, StudentSix, StudentSeven] = body.student
// console.log(StudentOne)
// console.log(StudentTwo)
// console.log(StudentThree)
// console.log(StudentFour)
// console.log(StudentFive)
// console.log(StudentSix)
// console.log(StudentSeven)

// let Age = body.student.forEach(function (el) {
//     console.log(el.student1)
//     console.log(el.age)
// })

let Student = {
    Fstname: "mahesh",
    age: 34,
    lanuage: ["marathi", "hindi"]
}

// let {Fstname:a,age:b,lanuage:c}=Student
// console.log(a,b,c)

// let Studentname=Student['Fstname']
// let StudentAge=Student['age']
// let StudentLang=Student['lanuage']
// console.log(Studentname)
// console.log(StudentLang)
// console.log(StudentAge)


//Spread opretor

let numbers = [10, 20, 30, 40, 55, 344, 242, 34, 23]
// function add(a,b,c){
//     console.log(a+b+c)
// }
// add(...numbers)

// rest opretor
function add(...a) {
    return a.reduce(function (el, acc) {
        return acc + el
    })
}
let sum =add(10,20,30,40,50,60,)
console.log(sum)



