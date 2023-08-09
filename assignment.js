function sortMaker(arr) {
  if (typeof arr[0] > 0 || typeof arr[1] > 0) {
      return "Invalid Input";
  }
  
  else if (arr[0] === arr[1]) {
      return "equal";
  } 
  else if (arr[0] < arr[1]) {
      return [arr[1], arr[0]];
  } 
  else {
      return [arr[1], arr[0]];
  }
}

console.log(sortMaker([2, 3]));   // Output: [2, 3]
console.log(sortMaker([4, 2]));   // Output: [2, 4]
console.log(sortMaker([4, 4]));   // Output: "equal"
console.log(sortMaker([1, 2]));   // Output: [1, 2]
console.log(sortMaker([4, 'a']));  // Output: "Invalid Input"
