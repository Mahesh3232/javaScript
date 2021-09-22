// let person=["mahesh","aher",34,15]
// console.log(person[0])
// console.log(person.length)

// let info={
//     fstname:"mahesh",
//     lstname:"Aher",
//     rollno:23,
//     age:34
// }
// //dot notation(object.propertyname) 
// console.log(info.lstname)
// //braket notation = object['property name']
// console.log(info['fstname'])

// //fetching the value from object
// console.log(info.rollno)
// console.log(info['age'])

// //updating the value from an object
// info.fstname="sonu"
// info.age=23
// console.log(info)

// //adding property to object 
// info.language="marathi"
// info.fvgame="cricket"
// console.log(info)

//Array
// let A = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < A.length; i++) {
//     console.log(i)
//     console.log("")
//     console.log(A[i])
// }

// let person = {
//     fstname: 'sonu',
//     lstname: 'Aher',
//     rollno: 23,
//     age: 23,
//     language: 'marathi',
//     fvgame: 'cricket',
//     height: 34,
//     colour:"fair"
// }

// //braket notation
// console.log(person['age'])
// //dotnotation
// console.log(person.fvgame)

// for(let key in person){
//     console.log(key,person[key])
// }

// //delete is used to delete some property
// delete person.age
// console.log(person)

//function

// let x=10
// function printx(y){
//     y=30
//     console.log(y)
//     console.log(x)
// }
// printx(x)
// console.log(x)

// let person1={
//     name1:"mahesh",
//     Age:23

// }

// function printobj(obj2){
//     obj2.name1="mahe"
//     console.log(obj2)
// }

// console.log(person1)
// printobj(person1)
// // console.log(person1)

// let objectA = {
//     'Age': 23,
//     'Name': "Mahesh",
//     'rollno': 34
// }

// //Bracket notation 
// console.log(objectA['Age'])
// console.log(objectA['Name'])
// console.log(objectA['rollno'])

// //dot notations
// console.log(objectA.Age)
// console.log(objectA.Name)
// console.log(objectA.rollno)

//properties and methods 
//ex- human have properties height,weight,colour,name,age
//methods - walk(),talk(),eat()
//function inside object method 

//function declaretion 
// function add() {
//     console.log(2 + 4)
// }
// add()

// //function expresion 
// let add1 = function () {
//     console.log(3 + 4)
// }
// add1()

// //arrow function 
// let add=()=>{
//     console.log(90-30)
// }
// add()



// let Mahesh={
//    FullName:'Mahesh Aher',
//    Age:23,
//    Weight:68,
//    Walk:function(){
//        console.log('Welcome' +this.FullName)
//    }
// }
// console.log(Mahesh.Walk())

// let Shri={
//     FullName:'Shrikant Patil',
//    Age:28,
//    Weight:87,
//    Walk:function(){
//        console.log('Welcome' + this.FullName)
//    }
// }
// Shri.Walk()
// Mahesh.Walk()

let a=10
function add(){
     a=70
     console.log(a)
     a=90
     console.log(a)
}
add()
console.log(a)












