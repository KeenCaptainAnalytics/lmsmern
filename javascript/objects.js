// create an array in which you will store 3 objects
// of person typw and then sort them on the basis of 
// their current age
// [pers1, pers2, pers3]
// [age wise sorted result]

// car objects 

// constructor
function Person(name, age, marks){
    // this(reference) = 
    this.name = name
    this.age =age
    this.marks = marks

    this.read=function(age){
        console.log("this person can read")
        this.age= this.age+age
    }
}

let obj1 = new Person("reena", 12, 456)
let obj2 = new Person("pooja", 34, 545)
let obj3 = new Person("arun", 15, 675)

let arr = [obj1, obj2, obj3, new Person("rita", 45, 675)]

arr.sort(function(o1, o2){
    if(o1.age<o2.age){
        return -1;
    }
    else if(o2.age< o1.age){
        return 1;
    }
    else{
        return 0;
    }

})

arr.forEach(function(o){
    console.log(o.name,o.age, o.marks)
})


// let obj1 = new Person("reena", 34, 564);
// let obj2= new Person("pooja", 20, 456)
// obj1.age = 12;
// obj1.read(4);
// obj2.read(5)
// console.log(obj2)
// obj1 = 12354
// object get space in heap
// 
// obj1 , obj2 = reference(addr) 
// obj1 = 1234



// // singleton 
// let obj = {
//     name:"pooja",
//     rollno:45,
//     marks:[34,45,43,42,12],
//     phone:"124234234"
// }


// let num =80;
// let num2 = num

// num2= 20;

// console.log(num, num2)

// num = 80
// num2= 80


// payal=mango shake  venkatesh = mango shake 

// payal = notebook
// nisha

// let obj = {
//     name:"pooja",
//     rollno:45,
//     marks:[34,45,43,42,12],
//     phone:"124234234"
// }

// let obj2 = obj

// obj2.name ="tina"

// console.log(obj.name, obj2.name)




// console.log(obj.name)
// stack , heap
//primitive values (stack) => number , string, 
// boolean , Symbol, undefined, bigint

// object => heap => ref => return  

// references

// console.log(obj)