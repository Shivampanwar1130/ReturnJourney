const car1 = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
  };
  
const car2 = {
    model: 'Corolla',
    color: 'Blue',
  };
  
  // Function to merge two car objects
  function mergeCars(carA, carB) {
    return { ...carA, ...carB };
  }
  const mergedCar = mergeCars(car1, car2);
  
  console.log(mergedCar);
  