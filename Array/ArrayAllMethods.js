//1= push = adds new element at end of the array and return the lenght of array
let students = ['ganesh', 'mahesh', 'sidhu', 'ramesh']
updateStudent = students.push('sahil')
console.log(updateStudent)
console.log(students)

//2= pop=delete the last element from the array and returns it
updateStudent = students.pop()
console.log(updateStudent)
console.log(students)

//3= shift = delete the first element of the array and returnd it
shift = students.shift()
console.log(shift)
console.log(students)

//4= unshift = add new element to the start position of the array and returns length of the array
unshift = students.unshift('sandesh')
console.log(unshift)
console.log(students)

//5=indexof = inturns the index of the element 
indexof = students.indexOf('sidhu')
console.log(indexof)

//6=foreach = perform the specified action on each element of the array
let students = ['ganesh', 'mahesh', 'sidhu', 'ramu', 'ram']
let foreach = students.forEach(function (el, index, arr) {
    console.log(`welcome ${el}`)
})
console.log(foreach)

//7=map=perform the action on each element of an array, and returns an array that contains the results.
let map = students.map(function (el, index, arr) {
    return `welcome ${el}`
})
console.log(map)

//8=filter= filter the each element of the array and returns the output in array 
let filter = students.filter(function (el, index, arr) {
    return el.length < 6
})
console.log(filter)

//9=reduce= perfrom the addition of all elements of the array and returns the one value
let salary = [1000, 2000, 3000, 800, 400]
let Total = salary.reduce(function (el, acc, index, arr) {
    return acc + el
}, 0)
console.log(Total)

//10 = every = Determines whether all the members of an array satisfy the specified test and return the boolean value
let students = ['ganesh', 'mahesh', 'sidhu', 'ramu', 'ram']
let every = students.every(function (el, index, arr) {
    return el.length > 5
})
console.log(every)

//11= some = Determines whether all the members of an array satisfy the specified test and return the boolean value
let some = students.some(function (el, index, arr) {
    return el.length > 5
})
console.log(some)

//12 = find = Returns the value of the first element in the array where specified test  is true
let student = [
    {
        firsname: "mahesh",
        age: 23
    },
    {
        firsname: "mahesh2",
        age: 33
    }

]
let find = student.find(function (el, index, arr) {
    return el.age == 33
})
console.log(find)

//13= findlndex = return the index of the element

let findindex = student.findIndex(function (el, index, arr) {
    return el.age == 23
})
console.log(findindex)

//Associavity of operation 
let twoD = [[1, 2, 3], [4, 5, 6]]
console.log(twoD[0][0])
console.log(twoD[1][twoD[1].length - 1])

//14 = flat = Returns a new array with all sub-array elements concatenated into one array 
let a = [[1, 2, 3], [4, 5, 6]]
let G = a.flat()
console.log(G)

//15 = sort = sorts the element of the array 
let marks = ["mahesh", "aher", "ganesh", "rahul"]
marks.sort()
console.log(marks)

//16 = splice = delete the elements from array on index which provided by user and aslo inserts the new element on the index 
let names = ["ganesh", "mahesh", "rahul", "darshan", "radhy", "manasi"]
let splice = names.splice(2, 3, "sidhu", "rajesh")
console.log(splice)
console.log(names)

//17= fill =Returns array after filling the element identified by start and end with value 
let r = [1, 2, 3, 4, 5, 6, 7]
console.log(r.length)
r.fill('b', 2, 4)
console.log(r)

//18=concat = combines the two or more array and returns one array 
let y = [1, 2, 3]
let z = [4, 5, 6]
let concat = y.concat(z)
console.log(concat)
let concat2 = z.concat(y)
console.log(concat2)

//19 = includees = Determines whether an array includes a certain element, returning the boolean values
let city = ["nagpur", "sangamaner", "pune", "mumbai", "kalyan"]
console.log(city.includes("nashik"))
console.log(city.includes("pune"))

//20 = join = Adds all the elements of an array into a string, separated by the specified separator string provided by the user
let myname = ["mahesh", "aher"]
let fullname = myname.join(" ")
console.log(fullname)

//21= reverse = reverse the elements of the array 
let z1 = ["gana", "ram", "shyam", "sita"]
let rever1 = z1.reverse()
console.log(rever1)

//22= flatmap = perform the actions on the all elements on the array 
let v = [[1, 2, 3,], [4, 5, 6], [7, 8, 9]]
let va = v.flat()
let vx = va.flatMap(function (el, index, arr) {
    return el + 10
})
console.log(vx)

//23= 

