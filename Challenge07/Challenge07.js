"use strict";

// 1) ---------------------
//
//  using the (objLat) function; return the formatted text based on the provided object as the example:
//  let obj = {
//      firstName: 'jaber',
//      lastName: 'saleh',
//      age: 67,
//      hobby: 'Gaming and Sleeping'
//  }
//   ===>
//   'my name is Jaber Saleh I am 67 YO, and I love Gaming and Sleeping.'

//  Note that:
//  1- The text template is 'my name is ** ** I am ** YO, and I love **.'
//  2- The first letters of the firstName and lastName should be capital letter

// ------------------------

const objLat = (obj) => {
    // write your code here
    let uppercase1 = obj.firstName.charAt (0).toUpperCase() + obj.firstName.slice(1);
    let uppercase2 = obj.lastName.charAt (0).toUpperCase () + obj.lastName.slice(1);

  let c= "my name is "+ uppercase1 +" "+ uppercase2+" I am "+ obj.age +" YO,"+" and I love "+obj.hobby+".";
 return c;
};





// 2) ---------------------
//
//  Rekey is receiving info about applicants for his startup company (as array of objects), containing first name,
//  last name, age and technology they know.
//  Rekey only cares about the full name and the technology if the applicant have more than one year of Experience
//
//  Reformat the array of objects that you are receiving by returning a new array of objects that contain only
//  fullName and tech if the applicant has more than one year of Experience

// EX:
// let cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 7,
//         tech: "Java"
//     }
// ]
//
//   ===>

//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     },
//     {
//         fullName: "Shira",
//         tech: ".Net"
//     },
//     {
//         fullName: "Isabella",
//         tech: "Java"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

// ------------------------
const cvFormatter = (arr) => {
    
    // write your code here
    let modElem={};

    for(let i=0;i<arr.length;i++){
        if (arr[i].LastName==null){
            arr[i].LastName="";
        }
        else if(arr[i].firstName==null){
            arr[i].firstName="";

        };

        if(arr[i].yearsOfExperience>1){
        //    if()
            arr[i] ={
                fullName: arr[i].firstName+" "+arr[i].LastName,
                tech:arr[i].tech
            }
        }
        else {
            arr.splice(i, 1);
            i--;

            }
        }

    return arr;
};


// 3) ---------------------
//
//  Rekey wants to get statistic about the applicants
//  using the array of object you will be getting, return an object that has the following properties
//
// let result = {
//     python_Devs: 0,
//     javaScript_Devs: 0,
//     dotNet_Devs: 0,
//     java_Devs: 0,
//     totalApplicants: 0,
//     rejectedApplicants: 0,
// }
//
// and fill it up based on the results

//  Note that:
//  1- rejectedApplicants are applications that has both the names empty or null and whoever have less than one year of Experience

// ------------------------
const applicationsStatics = (arr) => {
    //write your code here
    let pythNo=0;
    let jsNo=0;
    let dotnNo=0;
    let javaNo=0;
    let rejNo=0;
    
    for(let i=0;i<arr.length;i++){
        
        if(arr[i].yearsOfExperience>1){
            if(arr[i].firstName!=null || arr[i].LastName!=null){
            
                switch(true){
                
                case(arr[i].tech=="Python"):
                pythNo +=1;
                break;
               
                case(arr[i].tech=="JS"):
                jsNo +=1
                break;
                
                case(arr[i].tech== ".Net"):
                dotnNo +=1
                break;
               
                case(arr[i].tech=="Java"):
                javaNo +=1
                break;

            }

        }
    }
    
    else{
            rejNo+=1;
        }
    }
    let result = {
    python_Devs: pythNo,
    javaScript_Devs: jsNo,
    dotNet_Devs: dotnNo,
    java_Devs: javaNo,
    totalApplicants: arr.length ,
    rejectedApplicants: rejNo,
}
return result;
};



// 4) ---------------------
//
//  A Certain School principal wants to calculate the average score of each class in each grade in the school
//  so he requested a programmer to solve this issue for him instead of doing it again every time
//
//  given the school data, calculate the average score of the students of each class in each grade
//  then change the avg value for the class
//  EX:

// let data = {
//     SchoolName: "David Academy",
//     Capacity: 1000,
//     grades: [
//         {
//             grade: "First",
//             numberOFClasses: 3,
//             classes: [
//                 {
//                     avg: 0,
//                     classNumber: "01",
//                     classScores: [
//                         89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49
//                     ]
//                 },
//                 {
//                     avg: 0,
//                     classNumber: "02",
//                     classScores: [
//                         87, 54, 95, 45, 41, 51, 25, 63, 58, 47, 64, 51, 98, 100
//                     ]
//                 },
//                 {
//                     avg: 0,
//                     classNumber: "03",
//                     classScores: [
//                         74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70
//                     ]
//                 },
//             ]
//         },
//         {
//             grade: "Second",
//             numberOFClasses: 2,
//             classes: [
//                 {
//                     avg: 0,
//                     classNumber: "01",
//                     classScores: [
//                         71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60,
//                     ]
//                 },
//                 {
//                     avg: 0,
//                     classNumber: "02",
//                     classScores: [
//                         86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70
//                     ]
//                 },
//             ]
//         },
//         {
//             grade: "Third",
//             numberOFClasses: 2,
//             classes: [
//                 {
//                     avg: 0,
//                     classNumber: "01",
//                     classScores: [
//                         11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58
//                     ]
//                 },
//                 {
//                     avg: 0,
//                     classNumber: "02",
//                     classScores: [
//                         62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42
//                     ]
//                 },
//             ]
//         },
//         {
//             grade: "Forth",
//             numberOFClasses: 4,
//             classes: [
//                 {
//                     avg: 0,
//                     classNumber: "01",
//                     classScores: [
//                         63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52
//                     ]
//                 },
//                 {
//                     avg: 0,
//                     classNumber: "02",
//                     classScores: [
//                         100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49
//                     ]
//                 },
//                 {
//                     avg: 0,
//                     classNumber: "03",
//                     classScores: [
//                         97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87
//                     ]
//                 },
//                 {
//                     avg: 0,
//                     classNumber: "04",
//                     classScores: [
//                         64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72
//                     ]
//                 },
//             ]
//         },
//     ],
// };

//  Note that:
//  1- This is not the exact data you will be getting every time and the solution should be dynamic
//  2- You need to round the average to the nearest lower number 

const classesAvg = (data) => {
    // write your code here
    
    for(let i=0;i<data.grades.length;i++){
        
        let sum=0;

        for(let j=0;j<data.grades[i].numberOFClasses;j++){
           
            for(let k=0;k<data.grades[i].classes[j].classScores.length;k++){
                sum +=data.grades[i].classes[j].classScores[k];
               
                if(k==data.grades[i].classes[j].classScores.length-1){ 
                    data.grades[i].classes[j].avg = Math.round(sum/data.grades[i].classes[j].classScores.length);
                    //console.log(((data.grades[i]).classes[j]).avg);
                
                 }
                 
                  
            }
        }  
        

    }
    return data;
    
 };


    


module.exports = { objLat, cvFormatter, applicationsStatics, classesAvg };