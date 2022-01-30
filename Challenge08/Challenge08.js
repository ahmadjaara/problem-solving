// "use strict";

// // -------------------------------------------------------------------------------------------------------
// // Challenge 01

// // Important:
// // To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.value, Object.entries )

// // Resources:
// // for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// // for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of


// // You given an object that contain name
// // and age of some customers as below :

// // {
// //     "Romio Joliat": 35,
// //     "Mario Ristrova": 39,
// //     "Sofia firnando": 50,
// // }

// // You have to return an array of strings that follow the below syntax
// //
// // the string format is "Customer Name :*** *** , Age :**"
// // ['Customer Name :Romio Joliat , Age :35', 'Customer Name :Mario Ristrova , Age :39', ... ]

// // -------------------------------------------------------------------------------------------------------

// // const customerAndAge = (obj) => {
// //   // write your code here
// // };

// // -------------------------------------------------------------------------------------------------------
// // Challenge 02

// // Write a function called getRecipeKey that take recipe info object and return an array of recipe info as strings
// // as in the example

// You given an object that contain name
// and age of some customers as below :
let names =
{
    "Romio Joliat": 35,
    "Mario Ristrova": 39,
    "Sofia firnando": 50,
}


// // Ex:-
// // Input:
// let recipeInfo = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
// //
// // Output:
// // ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
// //
// // Note:
// // You can solve this challenge by using Object.entries

// // -------------------------------------------------------------------------------------------------------


// const getEntries = (obj) => {
//   // write your code here
//   let k =""
//   Object.keys(obj);
//   for(let i=0;i<obj.ingredients.length;i++){
//     if(i==obj.ingredients.length-1){
//         k=k +obj.ingredients[i];
//     }  
//    else{ k=k +obj.ingredients[i]+","
// }

//   };
//   let arr =[Object.keys(obj)[0]+": "+obj.name,Object.keys(obj)[1] +": "+ k,Object.keys(obj)[2]+": "+obj.cookTime,Object.keys(obj)[3]+": "+obj.price];
//    return arr;
// };

// // -------------------------------------------------------------------------------------------------------
// // Challenge 03

// // Write a function named getCourseName that returns object of 2 new arrays
// // first one is containing the names of all of the courses in the data set.
// // second one is containing the names of all the students
// // -------------------------------------------------------------------------------------------------------

// const courses = [

const customerAndAge = (obj) => {
  // write your code here
let x= Object.keys(obj); 
let y =Object.values(obj);
let z =[]
for(let i=0;i<x.length;i++){
z[i]="Customer Name :"+x[i]+" , "+"Age :"+y[i];
}

return z;
};
// customerAndAge(customer);

// -------------------------------------------------------------------------------------------------------
// Challenge 02

// Write a function called getRecipeKey that take recipe info object and return an array of recipe info as strings
// as in the example

// Ex:-
// Input:
let recipeInfo = {
  name: "pizza",
  ingredients: ["bread", "tomato", "chicken", "mayo"],
  cookTime: "twoHours",
  price: "25$",
};
//
// Output:
// ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
//
// Note:
// You can solve this challenge by using Object.entries

// -------------------------------------------------------------------------------------------------------

let getEntries= (obj)=>{
// write your code here
//   let k =""
//   for(let i=0;i<obj.ingredients.length;i++){
//     if(i==obj.ingredients.length-1){
//         k=k +obj.ingredients[i];
//     }  
//    else{ k=k +obj.ingredients[i]+","
// }

//   };
  
//   let arr =[Object.keys(obj)[0]+": "+obj.name, Object.keys(obj)[1]+": " + k,Object.keys(obj)[2]+": "+obj.cookTime,Object.keys(obj)[3]+": "+obj.price];
//    return arr;
// };
// console.log(getEntries(recipeInfo));
let b=[];
let i =0;
for (const [key, value] of Object.entries(obj)) {
b[i]=`${key}: ${value}`;
i++;
}
return b ;
};
// getEntries(recipeInfo);


// -------------------------------------------------------------------------------------------------------
// Challenge 03

// Write a function named getCourseName that returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students
// -------------------------------------------------------------------------------------------------------

const courses = [
  {
    course: 'Java',
    Instructor: 'David',
    Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
    GroupName: 'Stars',
  },
  {
    course: 'JavaScript',
    Instructor: 'Van',
    Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
    GroupName: 'Nerd-ware',
  },
  {
    course: 'Python',
    Instructor: 'Delaney',
    Students: ['Barney', 'Kalé', 'Alisha'],
    GroupName: 'Whats-Up',
  },
  {
    course: 'DotNet',
    Instructor: 'Keanna',
    Students: ['Oli', 'Gisselle', 'Pru'],
    GroupName: 'Lol',
  },
];

const getInfo = (arr) => {
  let coursesName = [];
  let studentsName = [];
  let dnew =[];
  // write your code here
  for (let i=0;i<arr.length;i++){
    let d =Object.values(arr[i]);
    coursesName[i]=d[0];
    studentsName=studentsName.concat(d[2]);
    // for (let j=0;j<d.Students.length){
    //   studentsName[i]=d[2];
    //}
  
  }

  return { coursesName, studentsName };
};
// console.log(getInfo(courses));

//  ------------------------------------------------------------------------------------------------------
// Challenge 04

// The Head manager wants to get a more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below syntax
//
// Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// 
// Output: 
// [

//   {
//     course: 'Java',
//     Instructor: 'David',
//     Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
//     GroupName: 'Stars',
//   },
//   {
//     course: 'JavaScript',
//     Instructor: 'Van',
//     Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
//     GroupName: 'Nerd-ware',
//   },
//   {
//     course: 'Python',
//     Instructor: 'Delaney',
//     Students: ['Barney', 'Kalé', 'Alisha'],
//     GroupName: 'Whats-Up',
//   },
//   {
//     course: 'DotNet',
//     Instructor: 'Keanna',
//     Students: ['Oli', 'Gisselle', 'Pru'],
//     GroupName: 'Lol',
//   },
// ];


// const getInfo = (arr) => {
//   let coursesName = [];
//   let studentsName = [];
//   // write your code here

//   return { coursesName, studentsName };
// };

// //  ------------------------------------------------------------------------------------------------------
// // Challenge 04

// // The Head manager wants to get a more organized info about some students, he wants you to find the students from the courses dataset
// // and return their info following the below syntax
// //
// // Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// // Output: 
// // [
// //   {
// //     Student: 'Kalé',
// //     course: 'Python'
// //   },
// //   ...
// // ]

// //  ------------------------------------------------------------------------------------------------------

// const getStudents = (arr) => {
//   // write your code here

// };

// // module.exports = {
// //   customerAndAge,
// //   getEntries,
// //   courses,
// //   getInfo,
// //   getStudents,
// // };
let g = {k:"a0"};
if (g.k=="a0"){
  let h=g;
  h.k="la";
  console.log(h,g);
}
console.log(g);
console.log(h);

//  ------------------------------------------------------------------------------------------------------
 let arr=['Kalé', 'Alisha', 'Alphonso', 'Briana'];
 let g =['Daley', 'Pru'];
const getStudents = (arr) => {
  // write your code here
  let coursesname1=[];
  let output=[];
  for (let i=0;i<courses.length;i++){
    let d =Object.values(courses[i]);
    
    let namesarr =d[2];
    for(let j=0;j<arr.length;j++){
      for (let k=0;k<namesarr.length;k++){
        if (arr[j]==namesarr[k]){
          coursesname1=d[0];
          output[j]={Student: arr[j] ,course:coursesname1};
          
        }
      }
    }
   
    // course: 'DotNet',
    // Instructor: 'Keanna',
    // Students: ['Oli', 'Gisselle', 'Pru'],
    // GroupName: 'Lol',
    //['DotNet','Keanna',['Oli', 'Gisselle', 'Pru'],'Lol']

}
return output;
};

// console.log(getStudents(arr));
// console.log(getStudents(g));

module.exports = {
  customerAndAge,
  getEntries,
  courses,
  getInfo,
  getStudents,
};

