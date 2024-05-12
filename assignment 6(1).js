const prompt=require('prompt-sync')({sigint:true});
let x=parseInt(prompt("enter number 1:"));
let y=parseInt(prompt("enter number 2:"));
function mul(x,y){
  let z=x*y;
 console.log("product of "+x+" and "+y+" is "+z);
}
mul(x,y);