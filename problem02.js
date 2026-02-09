function operation(a, b){
   const subtraction = a - b;
   const multiplication =a * b;
   const divide = a / b;
   return {
    subtractions: subtraction,
    multiplications: multiplication,
    divition: divide
   };
}
const output = operation(50, 5);
console.log(output);