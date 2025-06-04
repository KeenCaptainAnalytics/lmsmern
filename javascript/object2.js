
let poojaObj = {
    name :"pooja",
    money:10000
}

let obj2 = Object.create(poojaObj);
obj2.name = "tina"
obj2.account = 7
// console.log(obj2.money)


let obj3 = Object.create(obj2)
obj3.name ="rahul"

console.log(obj3.money)





// class Person{
//     constructor(age, name, phone){
//         this.name = name
//         this.age = age
//         this.phone = phone
//     }

//     getInfo() {
//         console.log(this.name+ "  "+ this.age+"  "+this.phone)
//     }

//     getName = ()=>{
//         console.log(this.name)
//     }

// }

// class Student extends Person{
//     constructor(name , age, phone, marks){
//         super(age, name, phone);
//         this.marks = marks
//         // this.age = age
//         // this.name = name
//         // this.phone = phone

//     }
// }

// let obj1 = new Student("tina", 67, 986645, 890);
// console.log(obj1)






// let obj1 = new Person(12, "reena", 898989)
// console.log(obj1)


// // capital letter 
// function Person(name, age , phone){
//     // attributes
//     this.name= name
//     this.age = age
//     this.phone = phone

//     this.getInfo = function (){
//                         console.log(this.name+" -- "+this.age+" -- "+this.phone);
//                     }
//     this.getName = ()=>{
//                         console.log(this.name)
//                     }


// }




// let obj1 = new Person("reena", 23, 242342423);

// obj1.getInfo();
// obj1.getName()



