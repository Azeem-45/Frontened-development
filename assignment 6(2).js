const prompt=require('prompt-sync')({sigint:true});
let x=parseInt(prompt("Enter number:"));
function fact(x){
    if(x==0){
        return 1;
    }
    else{
        return x*fact(x-1);
    }
}
console.log("Factorial of  "+x+":"+fact(x));
