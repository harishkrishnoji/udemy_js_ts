
const numbers = [1, 2, 3, 4]; 

const output = move(numbers, 1, 3);

console.log(output); 

function move(array, index, offset) { 
  const position = index + offset;  
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return; 
  }
  
  // clone of original array using spread operator
  const output = [...array];
  // get the element out of the array using slice method
  // store the value of the removed element into const
  const element = output.splice(index, 1)[0];
  // add it back to the array, specific position
  output.splice(position, 0, element);
  return output;
}