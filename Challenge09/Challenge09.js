'use strict';

// Important Note:
// Kindly use forEach loop instead of for in all of your solutions

// Resource:
// forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// 1) ---------------------
// 
//  using the (arrInc) function; increase the provided array values by 10
//  
//  EX:
//  [20, 54, 89, 41] ==> [30, 64, 99, 51]
//  
// ------------------------
//let arr =[20, 54, 89, 41];
const arrInc = (arr) => {
    let result = [];
    // write your code here
    arr.forEach(function(item,index,array){
        result[index]=item+10;
    })
 return result;
};

// console.log(arrInc(arr));

// 2) ---------------------
// 
//  using the (roundDecimals) function; given an array of decimals round every value to the closest value
//  
//  EX:
//  [5.4, 5.5 ,6.7, 6.8] ==> [5, 6, 7, 7]
// 
// ------------------------
// let arr=[5.4, 5.5 ,6.7, 6.8];
const roundDecimals = (arr) => {
    // write your code here
    let result =[];
arr.forEach(function(item,index,array){
result[index]=Math.round(item);
})
return result;
}
// console.log(roundDecimals(arr));
// 3) ---------------------
// 
//  An owner of a factory want to give bounce 100$ for the employee of production department who worked *More than* 8 hours
//  and 50$ for those who worked less, given their data increase their salary and return the data back again 
//  
//  EX:
// let data = [
//     {
//         name: "Robert",
//         section: "Transport",
//         workHours: 8,
//         salary: "3000$"
//     },
//     {
//         name: "Richard",
//         section: "HR",
//         workHours: 6,
//         salary: "4000$"
//     },
//     {
//         name: "Christopher",
//         section: "Production",
//         workHours: 10,
//         salary: "4500$"
//     },
//     {
//         name: "Andrew",
//         section: "HouseKeeping",
//         workHours: 9,
//         salary: "3200$"
//     }
// ]
// 
//  ==>
//
// [
//     {
//         name: "Robert",
//         section: "Transport",
//         workHours: 8,
//         salary: "3050$"
//     },
//     {
//         name: "Richard",
//         section: "HR",
//         workHours: 6,
//         salary: "4050$"
//     },
//     {
//         name: "Christopher",
//         section: "Production",
//         workHours: 10
//         salary: "4600$"
//     },
//     {
//         name: "Andrew",
//         section: "HouseKeeping",
//         workHours: 9,
//         salary: "3300$"
//     }
// ]
//

// ------------------------
const employeesBonus = (data) => {
    // write your code here
    let result =[];
    let z=0;
    data.forEach(function(item,index,array){
        if(item.workHours>8){
           z= parseFloat(item.salary);
            z+=100;
            item.salary=z+"$";
        }
        else{
            z= parseFloat(item.salary);
            z+=50;
            item.salary=z+"$"
        }
    })
    return data;
}
// console.log(employeesBonus(data));

// 4) ---------------------
// 
// Harry wants to buy a new mouse and keyboard for his new setup
// He wants to choose one mouse and one keyboard from the list of prices and take the most expensive combination
// but his budget is limited, help him by finding the most expensive *price* for a combination to buy with his budget
// 
// EX:
//
// let budget = 150;
// let mouseArray = [35, 15, 75];
// let keyBoardArray = [5, 150, 100];
// 
// ==> 200
// ------------------------
const mostExpensive = (budget, mouseArray, keyBoardArray) => {
    // write your code here
   let result=[];
   let final=[];
   let i =mouseArray.length;
   let j =keyBoardArray.length;
   
   if(i>j){
    keyBoardArray.forEach(function(item,index,array){
    //   result.push(item+mouseArray[0]);
    mouseArray.forEach(function(item1,index1){
        result.push(item+item1)
    })

    });
}
else if(j>i){
    mouseArray.forEach(function(item,index,array){
    //   result.push(item+mouseArray[0]);
    keyBoardArray.forEach(function(item1,index1){
        result.push(item+item1)
    })

    });

}
else{
    mouseArray.forEach(function(item,index,array){
        //   result.push(item+mouseArray[0]);
        keyBoardArray.forEach(function(item1,index1){
            result.push(item+item1)
        })
    
        });

}

    // keyBoardArray.forEach(function(item,index,array){
    //     result.push(item+mouseArray[1]);
    //   });
    //   keyBoardArray.forEach(function(item,index,array){
    //     result.push(item+mouseArray[2]);
    //   });
    //   keyBoardArray.forEach(function(item,index,array){
    //     result.push(item+mouseArray[3]);
    //   });
    //   keyBoardArray.forEach(function(item,index,array){
    //     result.push(item+mouseArray[4]);
    //   });
    //   keyBoardArray.forEach(function(item,index,array){
    //     result.push(item+mouseArray[5]);
    //   });
    //   keyBoardArray.forEach(function(item,index,array){
    //     result.push(item+mouseArray[6]);
    //   })
      result.sort(function(first,last){return last-first});
     
      result.slice(0).forEach(function(item2){
        let g=result;  
        if(item2>budget){
           result.splice(result.indexOf(item2), 1);
          }
      })
return result[0];
};

//console.log(mostExpensive(budget, mouseArray, keyBoardArray))

module.exports = { arrInc, roundDecimals, employeesBonus, mostExpensive };