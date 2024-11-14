function myfunction() {
    const x = document.querySelector('.demo').value

    const msg = document.querySelector('.error')
    msg.innerHTML = ''


    try {
        if(x.trim() == '') throw "empty" 
        if(isNaN(x)) throw 'not a number' 
    } catch(er) {
        msg.innerHTML = er 
    }
    
    finally {
        const x = document.querySelector('.demo').value = ''
    }

}



const person = {
    firstName: 'John',
    secondName: 'Doe',
    age: 23,

    fullName () {
        return this.firstName + ' ' + this.secondName
    }
}

console.log(person.fullName());
// this -> refer to a Object


// normal function vs arrow function 
// es6 e arrow function -- esma script v6
function number(a, b) {
    console.log(a+b)
}
number(10, 10)

let myarrowfunction = (a, b) => a * b;
console.log(myarrowfunction(50, 50));


