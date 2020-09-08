let name = {
  firstName: "Anuj",
  lastName: "Soni",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

let name1 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

// Function borrowing

printFullName.call(name, "Meham", "Haryana");
printFullName.apply(name, ["Meham", "Haryana"]);

let printMyName = printFullName.bind(name1, "Mumbai", "Maharashtra");
console.log(printMyName);
