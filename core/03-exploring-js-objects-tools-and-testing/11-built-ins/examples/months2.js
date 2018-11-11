// months2.js
//
// Checking if an item exists using .has()

const months = new Set(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

// Check if we have all of the holiday months for the holiday season.
if (months.has('Oct') && months.has('Nov') && months.has('Dec')) {
  console.log('Ready for the Holiday season!');
} else {
  console.log('Not ready for the Holiday season!');
}

