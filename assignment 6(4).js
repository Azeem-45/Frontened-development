const prompt=require('prompt-sync')({sigint:true});
let x= prompt("enter day:");
switch(x){
 case "Monday":
 case "Tuesday":
 case "Wednesday":
 case "Thursday":
 case "Friday":console.log("it's is weekday(Monday-Friday)");
               break;
 case "Saturday":
 case "Sunday":console.log("its a weekend");
              break;
  default:console.log("it is not a week day");
           break;
}