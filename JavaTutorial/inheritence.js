// class parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class child extends parent{
    
// }
// let obj=new  child();

// class Animal{
//     sound(){
//         console.log("animal make sound");
//     }
// }
// class Dog extends Animal{

// }
// let obj= new Dog();


// class person{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("work nothing");
//     }
// }

// class Engineer extends person{
//     work(){
//         console.log("solve problems , build somthing");
//     }
// }

// class Doctor extends person{
//     work(){
//         console.log("treat patient");
//     }
// }
// // object
// let obj = new Engineer();
// let obj1 = new Doctor();


// class person{
//     constructor(){

//         this.species="homo sapiens";
//         this.name= this.name;
//     }
//     eat(){
//         console.log("eat");
//     }
    
// }

// class Engineer extends person{
//     constructor(name){
//         super(name); // invoke parent class constructor
        

//     }
//     work(){
//         super.eat();
//         console.log("chemical engineer");
//     }
// }


// object
// let obj = new Engineer("mushfequa");

//Q-1 You are creating a website for your college . Create a class User with 2 properties , name & email . it also has  amethod called viewData() that allows user to view website data.

// let data="secret information";
// class User{
//     constructor(name,email){
//         this.name= name;
//         this.email= email;

        


//     }
//    viewData() {
//    console.log(" data=",data)
//     }
// }
// //object
// let student1= new User("mushfeka","mush@123");
// let student2= new User("saniya","mush@123");
// let teacher1= new User("maniya","mush@123");
// let teacher2= new User("aniya","mush@123");



//Q-2 Create a new class called Admin which inherits from User .Add a new method called editData to admin that allows it edit website dat.


let data="secret information";
class User{
    constructor(name,email){
        this.name= name;
        this.email= email;

        


    }
   viewData() {
   console.log(" data=",data)
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);

    }
    editData(){
        data="some new value";
       

    }
}
//object
let student1= new User("mushfeka","mush@123");
let student2= new User("saniya","mush@123");
let teacher1= new User("maniya","mush@123");
let teacher2= new User("aniya","mush@123");

let admin1= new Admin("haniya","mush@123");