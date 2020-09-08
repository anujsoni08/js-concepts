let name = {
  firstName: "Anuj",
  lastName: "Soni",
};

let printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

let printMyName = printName.bind(this);

Function.prototype.mybind = function () {
  return function () {};
};

let printMyName2 = printName.mybind(name);
printMyName2();
