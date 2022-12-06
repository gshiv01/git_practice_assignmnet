
function checkprime(number){
let factor=0
for (let i=1; i<=number; i++){
if (number%i==0){
  factors++;
  }
if (factor==2){

return true;
}
return false;
}


let answer=checkprime(13);

if(answer==true){
     console.log("prime number");
} else {
   console.log("not a prime number");
}