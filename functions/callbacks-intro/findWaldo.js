const findWaldo = function(names, found) {
  names.forEach((name, index,) => {
    let person = name;
    let position = index;
    if (person === "Waldo") {
      found(position);
    };
  });;
};

const actionWhenFound = function(position) {
  console.log(`Found Waldo at index ${position}`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});