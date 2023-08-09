function cubeNumber(number) {
  result = number;
  if(result = number * number * number){
    return result;
  }
  else{
    return "Your input is not number. Please input any type number";
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
      return "Your input value is not srting. Please input string...";
  }

  for (let i = 0; i < string1.length; i++) {
      for (let j = i + 1; j <= string1.length; j++) {
          if (string1.substring(i, j) === string2) {
              return true;
          }
      }
  }

  return false;
}

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

function findAddress(Obj) {
    const street = Obj.street || "__";
    const house = Obj.house || "__";
    const society = Obj.society || "__";
  
    return `${street},${house},${society}`;
  }


  function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Your arry value is emty. Please input number in your arry.";
    }
  
    const totalChange = changeArray.reduce((acc, curr) => acc + curr, 0);
  
    if (totalChange >= totalDue) {
        return true;
    }
  
    return false;
  }