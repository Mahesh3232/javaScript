// let names=["mahesh","sarika","sayali","tanmay","sidhu","akash"]
// //console.log(names[3])
// for(let i=0; i<names.length;i++){
//     console.log(names[i])
// }


// let person={
//     firstname:"mahesh",
//     lastname:"aher",
//     age:23,
//     id:432
// }

// let empInfo={
//     fstName:"mahesh",
//     LastNmae:"aher",
//     Age:23,
//     Idno:453,
//     Skilss:["java","c++","php","python","c"],
//     family:{
//         father:"sunil aher",
//         mother:"sunita aher",
//         sister:["sayali aher","sarika aher"],
//         city:"ganore",
//         pin:422605
//     }
// }
// console.log(empInfo.Age)
// console.log(empInfo["Age"])
// console.log(empInfo.family["father"])
// console.log(empInfo.family.sister[1])
// console.log(empInfo.Skilss[2])
// for(let key in empInfo){
//     console.log(key,empInfo [key])
// }


// // updating the value of object
// empInfo.fstName=["ganesh"]
// for(let key in empInfo){
//         console.log(key,empInfo [key])
//     }


// //dot notation
// //(objname.property---->value)
// console.log(person.firstname)
// console.log(person.id)
// console.log(person.lastname)
// console.log(person.age)

// console.log("****************************************************")
// //braket notation
// //objname[propertyName]
//  console.log(person['age'])
// console.log(person['firstname'])
// console.log(person['id'])
// console.log(person['lastname'])


// let friend={
//     firstName:"ganesh",
//     LastName:"Ambre",
//     Age:28,
//     idno:476,

//     run:function(){
//         console.log("hello")
//     }
// }
// console.log(friend.LastName)
// console.log(friend["firstName"])
// friend.run()

// let student={
//     firstName:"rahul",
//     LastName:"shelke",
//     Age:28,
//     idno:46,
//     skills:["java","python","javascript","c++"],
//     isadult: false,
//     family:{
//         father:"somnath shelke",
//         mother:"rajashri shelke",
//         brother:"mahesh aher",
//         sister:"sarika aher",
//         flat:["flat1","flat2","flat3","flat4"]
//     }
// }

// let skill=student['skills']
// console.log(skill)
// let skill2=student.skills
// console.log(skill2)
// console.log(skill[2])
//console.log(student['skills'][2])
// console.log(student.skills[1])
// console.log(student.family["mother"])
// console.log(student.family.flat[2])
//console.log(student.skills[2])
//console.log(student['Age'])


// let teacher={
//     sub:"history",
//     class:"nine",
//     add:"ganore",
//     student:34
// }

//updating the value of property
// teacher.sub=["math"]
// console.log(teacher["sub"])

// teacher.add=["sangamaner"]
// console.log(teacher["add"])

// teacher.class=["four"]
// console.log(teacher["class"])

//inserting the value

// teacher.hometown="nagar"
// console.log(teacher)

// for (let key in teacher){
//     console.log(key,teacher[key])
// }


// let person={
//     name1:"mahesh aher",
//     age:34,

// }
// for (let key in person){
//     console.log(key,person[key])
// }

let strr= ["QfngrueifTHCEgkrgkgmkmfldYRBD"]
let regex1=/{ "[a-z]"}/
let regex2=/{ "[A-Z]"}/
let yy=strr.filter(function(el){
    return regex2.el
})
console.log(yy)