/* Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.

*/

"use strict"

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills= [22, 295, 176, 440, 37, 105, 10, 1100, 86,  52];
const tips =[];
const totals =[];



for(let i=0 ; i<= bills.length-1 ;i++){
     tips[i]=calcTip(bills[i]) 
     totals.push(bills[i] + tips[i] )   
}

console.log(tips);
console.log(totals);