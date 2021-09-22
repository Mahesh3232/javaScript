class person {
    age = null
    rollno = null
    firstname = null
    constructor(a, r, f) {
        this.age = a
        this.rollno = r
        this.firstname = f
    }
    setAge(a) {
        this.age = a
    }
    setRollno(r) {
        this.rollno = r
    }
    setfirstname(f) {
        this.firstname = f
    }
}
//using construtor
let mahesh = new person(23, 55, 'mahesh')
console.log(mahesh)

//using set and get function 
let ganesh = new person
ganesh.setAge(34)
ganesh.setRollno(65)
ganesh.setfirstname('ganesh')
console.log(ganesh)

//outside the class
let rahul = new person()
let sudesh = new person()
rahul.firstname = ('rahul')
rahul.rollno = 55
rahul.age = 35
sudesh.age = 45
sudesh.rollno = 64
sudesh.firstname = ('sudesh')
console.log(rahul)
console.log(sudesh)

class Bank {
    constructor(name, accno, bal) {
        this.fullname = name
        this.accountno = accno
        this.transactions = []
        this.bal = bal
    }
    deposite(amount) {
        this.transactions.push(amount)
        this.bal = this.bal + amount
        console.log(`the amount of ${amount} added to your account`)
        console.log(`your current account balance is ${this.bal}`)
        return this.bal
    }
    withdraw(amount) {
        if (amount < this.bal) {
            this.transactions.push(-amount)
            this.bal = this.bal - amount
            console.log(`the amount of ${amount} deducted from your account`)
            console.log(`your total is ${this.bal}`)
            return this.bal
        }
        else {
            console.log(`in sufficient balance to withdraw`)
        }
    }
    totalTranssaction(arr) {
        let tt = arr.reduce(function (acc, el,) {
            return acc + Math.abs(el)
        }, 0);
        return tt
    }

    lastFiveTransactions(arr) {
        let lft = arr.slice(-5)
        console.log(lft)
    }

    totalDeposite(arr) {
        let td = arr.filter(function (el) {
            return el > 0
        }).reduce(function (acc, el) {
            return acc + el
        }, 0)
        return td
    }
    totelWithdraw(arr) {
        let tw = arr.filter(function (el) {
            return el < 0
        }).reduce(function (acc, el) {
            return acc + Math.abs(el)
        }, 0)
        return tw
    }
}
let mahesh1 = new Bank("mahesh", 132, 100)
mahesh1.deposite(1000)
mahesh1.withdraw(200)
mahesh1.deposite(400)
mahesh1.deposite(4000)
mahesh1.withdraw(1000)
mahesh1.deposite(2000)
mahesh1.deposite(200)
mahesh1.deposite(900)
mahesh1.deposite(70)
mahesh1.deposite(300)
console.log(mahesh1)

console.log('**********totalTransactions************')
let tt2 = mahesh1.totalTranssaction(mahesh1.transactions);
console.log(tt2);

console.log('**********lastFiveTransactions************')
let tt3 = mahesh1.lastFiveTransactions(mahesh1.transactions);
console.log(tt3);

console.log('**********totalDeposite************')
let tt4 = mahesh1.totalDeposite(mahesh1.transactions);
console.log(tt4);

console.log('**********totelWithdraw************')
let tt5 = mahesh1.totelWithdraw(mahesh1.transactions);
console.log(tt5);

