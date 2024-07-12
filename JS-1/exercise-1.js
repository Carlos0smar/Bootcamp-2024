const smallerNumber = [12, 6, 10, 2, 45, 10].reduce((previous, current,) =>
{
   let minNumber; 
   if(previous <= current){
     minNumber = previous;
   } else {
    minNumber = current;
   }
   return minNumber;
})


console.log(smallerNumber);