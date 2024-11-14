// //  javascript scope 
// var number = 20 // global variable 

// // block starts
// if(true) {
//     var z = 80 // var works as global variable 
//     let m = 90 // block variable 
//     const n = 3 // block variable 
// }
// // let or const makes it local or block scops 
// // es6 er update asar sathe sathe let and const asece, 
// // ai dui ta jhamela kore




// // block ends
// document.write(z) 
// document.write(m) 

// function abc () {
//     var y = 10 // local or functional scope 
// }
// document.write(y) 


// // task
// var tasknumber = 20 

// if(true) {
//     document.write(tasknumber)
//     console.log(tasknumber);
// }

// function taskabc() {
//     var number_f = 80
//     document.write(number_f)
//     console.log(number_f);
// }
// taskabc()

// document.write(number_f) 




// abc()
// // Hoiting 
// function zdfs() {
//     document.write("zdfsdf");
// }

// function abc() {
//     document.write("Javascript Hoisting");
// }


// "use strict" 
// x = 20 
// document.write(x) 
 
// var x 
// let x // limitation ase - assign hoyna
// const x // aro vip se uporeo nite pare na.


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
    

}


// const str = '          abcd'
// document.write(str); 
// document.write(str.trim()); 
// console.log(str);