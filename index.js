const batteryBatches1 = [4, 5, 3, 4, 4, 6, 5];

// Learning how the reduce() method works
const products = [
  { name: 'Shampoo', price: 4.99 },
  { name: 'Donuts', price: 7.99 },
  { name: 'Cookies', price: 6.49 },
  { name: 'Bath Gel', price: 13.99 }
];

function getTotalAmountForProducts(products) {
  return products.reduce((totalPrice, product) => totalPrice + product.price, 0);
}

console.log(getTotalAmountForProducts(products)); // LOG: 33.46

// Demonstrating the usage of reduce() with a primitive return value
const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 }
];

console.log(couponLocations.reduce((totalAmount, location) => totalAmount + location.amount, 0)); // LOG: 15

// Demonstrating the usage of reduce() with an object as the return value
const studentSorter = {
  showcaseAssign: function(studentName) {
    // This is a dummy function, replace it with your actual function
    // The function should return the appropriate showcase based on studentName
    return "Dance";
  }
};

const incomingStudents = ["John", "Sally", "Bob"]; // Put your actual student names here

const allShowcases = incomingStudents.reduce((showcases, student) => {
  const showcase = studentSorter.showcaseAssign(student);
  if (!showcases[showcase]) {
    showcases[showcase] = [];
  }
  showcases[showcase].push(student);
  return showcases;
}, { "Dance": [], "Visual": [], "Music": [], "Theater": [], "Writing": [] });

console.log(allShowcases);

// Lab assignment
const batteryBatches2 = [10, 5, 20, 8]; // Put your actual values here

const totalBatteries = batteryBatches2.reduce((total, numBatteries) => total + numBatteries, 0);

console.log(totalBatteries);
