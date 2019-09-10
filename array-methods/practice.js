// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];

1.

var out=pizzas.map(function (value) {
  return value.length;
});
console.log(out);

2.

cuts.forEach(function(value,index) {
  console.log(value,index);
})

3.

var out=numbers.filter(function(value) {
  return value>100;
})
console.log(out);

4.

cuts.splice(2,2);
console.log(cuts);
