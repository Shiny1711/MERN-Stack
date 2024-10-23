// var wt = 60;
// var ht = 1.55;
// var bmi = Math.floor(((wt / (ht*ht))*10)) /10;
// bmi = bmi.toFixed(1);
// if(bmi<18.5){
//     console.log(bmi+" underweight");
// }
// else if(bmi>=18.5 && bmi<=24.9){
//     console.log(bmi+"normal weight");
// }
// else if(bmi>=25 && bmi<=29.9){
//     console.log(bmi+" overweight");
// }
// else if(bmi>=30){
//     console.log(bmi+" obese");
// }


// var num1=24;
// var num2=45;
// var num3=57;

// if(num1>num2 && num1>num3){
//     console.log("the greatest no is "+num1);
// }
// else if(num2>num1 && num2>num3){
//     console.log("the greatest no is "+num2);
// }
// else{
//     console.log("the greatest no is "+num3);
// }


// var num = "vhjgkghjki";
// // var str = num.toString();
// var n = num.length;
// if(n!=10  || isNaN(num)){
//     console.log("enter valid num");
// }
// else{
//     console.log("correct num");
// }

var a = [12,3,56,34,90];
console.log("ascending "+a.sort((a,b) => a-b));
console.log("descending "+a.sort((a,b) => b-a));

var fruits = ['apples','pineapple','tomato','banana'];
