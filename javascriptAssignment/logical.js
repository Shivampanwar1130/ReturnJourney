function findCommonElements(arr1, arr2) {
    const commonElements = [];
  
    for (let i = 0; i < arr1.length; i++) {
      const currentElement = arr1[i];
  
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] === currentElement) {
          commonElements.push(currentElement);
          break;
        }
      }
    }
  
    return commonElements;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  
  const commonElementsArray = findCommonElements(array1, array2);
  
  console.log(commonElementsArray); 