function getUniqueValue(inputArray) {
    const uniqueArray = [];
  
    for (let i = 0; i < inputArray.length; i++) {
      const currentElement = inputArray[i];
  
      // Check if the element is not already in the uniqueArray
      if (uniqueArray.indexOf(currentElement) === -1) {
        uniqueArray.push(currentElement);
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 2, 5, 6, 1];
  const resultArray = getUniqueValue(inputArray);
  
  console.log(resultArray);