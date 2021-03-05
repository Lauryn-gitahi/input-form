// function Book(title,author,pages,status){
// //     this.title=title;
// //     this.author=author;
// //     this.pages=pages;
// //     this.status=status;
// //     this.info= ()=>{
// //         console.log(`The book ${this.title} by ${this.author}, has ${this.pages} pages, and has ${this.status}`);
// //     }

// //     Book.prototype.print= ()=>{
// //         console.log(this.title);
// //     }
// // }

// // let newBook= new Book("see no evil", "allison brenan",235,"not yet been read");
// // newBook.info();
// // newBook.print();


// // class Dog{
// //     constructor(name,age){
// //         this.name=name;
// //         this.age=age;
// //         // this.legs=legs;
// //     }
// //     bark(){
// //         return 'woof!';
// //     }
// // }

// // class chihuahua extends Dog{
// //     constructor(name,age,legs){
// //         super(name,age);
// //         this.legs=legs;
// //     }

// //     smallBark(){
// //         return "hua hua";
// //     }
// // }
// // // let dog1= new chihuahua("max",4,4);
// // let dog2=Object.create(Dog);
// // // console.log(dog2.bark());
// // console.log(dog2.name)

// // const person ={
// // name:"Julie",
// // age:23
// // }

// // let newPerson = Object.create(person);
// // console.log(newPerson);

// // class Dog{
// //     constructor(name,age){
// //         this.name=name;
// //         this.age=age;
// //     }
// // }

// // let newDog= Object.create(Dog);
// // console.log(newDog)

// let cat ={
//     init:function(sound){//acts as a constructor
//         this.sound=sound
//         return this
//     },
//     makeSound:function(){
//         console.log(this.sound);
//     }

// }

// // function ObjectCreate(proto){
// //     let obj={}
// //     Object.setPrototypeOf(obj,proto)
// //     return obj;
// // }

// let happy= Object.create(cat)
// happy.sound="Meow!"
// happy.makeSound();  

// let harry=Object.create(cat)
// harry.sound="Mooh!"
// harry.makeSound();