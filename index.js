//Array helper methods in ES6
 
// forEach
const array = [5,10,15,20,25,]
const items = (item) => { console.log(item) }
array.forEach(items)



// Map
const arr = [{name:"Pasha",age:22}, {name:"Salman",age:24}]
const person_names = arr.map(person => person.name);
console.log(person_names);



// filter
const item = [
 {name:"banana",type:"fruit"},
 {name:"Onion",type:"vegetable"},
 {name:"orange",type:"Fruit"},
 {name:"brinjal",type:"vegetable"},
]
const filteredItem = item.filter(item => item.type === "vegetable");
console.log(filteredItem)



// find
let x = [
   {name:"Romeo",age:35},
   {name:"Juliet",age:30}
]
console.log(x.find(obj => obj.name === "Romeo"))



// reduce
let numbers4=[5,1,2,4,3 ];
let multiplication=0;
multiplication= numbers4.reduce(function(multiplication,number){
 return multiplication*number;
},1);
console.log(multiplication);



//for of loop (Arrays)
let names=["Rahul","john","Naman"];

for(let value of names){
   console.log(value)
};


//for in loop (Objects)
let company={
   id:2,
   name:'Pasha',
   designation:'Software-Engineer'
};
for (let detail in company){
   console.log(detail +': ' +company[detail])
};


//Splice method
//to add elements to middle of an array
let numericals=[1,4,5,6,8];
numericals.splice(2,0,3,9);

console.log(numericals);


//to delete elements from middle of an array
let numerical=[1,4,5,6,8];
let deleted=numerical.splice(3,2);

console.log(numerical);
console.log(deleted);


//join method 
let brothers=["Salman","Baba","Saddu"];
let new_brothers=brothers.join(" and ")
console.log(new_brothers);


//split method
let str="Hi guys let's learn Javascript";
let newstr=str.split(" ");
console.log(newstr);


//person object

let person={
   name:'Pasha',
   age:'22',
   city:'Bangalore',
   village:'Ullal',
   zipcode:'560110'
};
function showAddress(address){
   for (let key in address)
   console.log(key,address[key]);
}
showAddress(person);