// // const number = 0
// // const number = 20 

// // let num = 24
// // let num = 45 

// // var number2 = 20  
// // var number2 = 45
// // var Number2 = 34 // case sensitive 


// // const str = `abcd is a dummy text for understanding +
// // dfdsfdf sffsdfs dsfsdfdi sdfdsf dfs
// // dfsdfs dsfsdfi dfsdf dfsd 
// // sdfdfdsf sdfsdfdf`
// // const str1 = 40  
// // const strlen = str.length

// // const shortstr = str.slice(0, 10)
// // // document.write(strlen)
// // document.write(shortstr + "<br>")  
// // document.write(shortstr.toUpperCase())


// // const str = "Hello, world!"
// // document.write(str.includes("check") + "<br>")
// // document.write(str.includes("world"))

// // celcius to farhenhite 
// function ctof (c) {
//     f = c * (9/5) + 32
//     return f.toFixed(2)
// }

// // n1 = parseInt(prompt("Enter a number: "))

// result = ctof(80)
// // document.write("result of c to f is: ",  result)


// // farhenhite to celcius 
// function ftoc (f) {
//     // c = f * (5/9) + 32
//     c = (f - 32) * (5/9)
//     return c.toFixed(2)
// }

// // n2 = parseInt(prompt("Enter a number: "))
// result2 = ftoc(result)
// // document.write("result of f to c is: ", result2)

// document.getElementById("c2f").innerHTML = result
// document.querySelector("#f2c").innerHTML = result2

// // dom - document object model 

 
// JS Array 
// const arr = ['tamima', 'mim', 'urmi', 'anika']
// const result = arr[3]
// console.log(result)


// const newarray = []
// newarray[0] = 'a'
// newarray[1] = 'b'
// newarray[2] = 'c'
// newarray[3] = 'd'
// newarray[4] = 'e'

// // console.log(newarray)


// const fruits = ["banana", "orange", 'apple', 'mango']
// // this is a object in javascript 
// console.log(fruits.toString())
// console.log(fruits.length)

// // pop, push , 
// let position = fruits.indexOf("orange") + 1
// console.log(position)

// console.log(fruits.sort())
// console.log(fruits.reverse())


// const number = 50
// if (number < 50) {
//     console.log("yes")
// } else if(number <= 70) {
//     console.log("yes 70")
// }   
// else {
//     console.log("no")
// }


// const grade = 63
// if(grade>=80) {
//     console.log("A+")
// } 
// else if(grade>=70) {
//     console.log("A")
// } 
// else if(grade>=60) {
//     console.log("A-")
// } 
// else if(grade>=50) {
//     console.log("B")
// } 
// else if(grade>=40) {
//     console.log("C")
// } 
// else if(grade>=33) {
//     console.log("D")
// } 
// else {
//     console.log("fail")
// }



const studentName = "tamima"
switch(studentName) {
    case "tamima":
        console.log("your name is tamima yeasmin")
        break
    case "mim": 
        console.log("your name is mim akter")
        break
    default:
        console.log("this is default case")
}