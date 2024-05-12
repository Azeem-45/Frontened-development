const prompt=require('prompt-sync')({sigint:true});
let a = parseInt(prompt("Enter number:"));
if(a>0){
    console.log(a+" is a positive number");
}
else if(a<0) {
 console.log(a+" is negative number");
}
else{
    console.log("zero");
}
