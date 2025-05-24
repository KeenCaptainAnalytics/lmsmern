function add(num1 , num2){
    // console.log(num1+num2)
    return num1+num2
}


function bankAdd(balance, amount, fn ){
    console.log(fn)
    // balance = balance+amount
    let result = fn(balance, amount)
    console.log(result)
    function print (){
        console.log("print some info")
    }

    return print;
}

let result = bankAdd(1000, 500, add)

result()
// console.log(result)


// let wish = name =>  "happy birthday "+name

// let result =  wish("pooja")
// console.log(result)

// let wish = name => console.log("happy birthday "+name)

// wish("pooja")
// wish("tina")



// let wish = ()=> console.log("hello world")

// wish()

// let wish = (num, rank)=>{
//     console.log("hello world")
//     console.log("its raining ")
//     console.log(num, rank)

// }

// wish(100, 1)

// let wish = num=>{
//     console.log("hello world")
//     console.log("its raining ")
//     console.log(num)
// }

// wish(100)

// let wish = ()=>{
//     console.log("hello world")
//     console.log("its raining ")
// }

// wish()



// arrow function 

// let wish = (name , age)=>{
//     console.log(name,age)
//     console.log("happy birthday")
//     return 1000
// }

// let result = wish("reena", 23)

// console.log(result)
// // function expresiion
// let wish = function (name, age){
    
//     temp = name + " is "+ age +" years old";
//     // console.log(temp)
//     return temp;
// }

// let result = wish("ram", 90);
// console.log(result)

// let a =2*3+4/4;
// right hand side of assignment operator is solved firsy

// function wish(name, age){
    
//     temp = name + " is "+ age +" years old";
//     // console.log("hello "+ name)
//     // console.log("happy birthday "+name )
//     // console.log(age)
//     return temp;
// }

// // arg and parameter
// // arg 
// let result  = wish("reena", 29, 123)

// console.log(result)

// result  = wish("reena", 39)

// console.log(result)

// result  = wish("Meena", 39)

// console.log(result)
// wish("tina")
// wish("rahul")
// wish("ram")
// wish()
