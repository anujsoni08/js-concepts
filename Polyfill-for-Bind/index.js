let name = {
  firstName: "Anuj",
  lastName: "Soni",
};

let printName = function (city, state, country) {
  console.log(
    this.firstName +
      "  " +
      this.lastName +
      "  " +
      city +
      "  " +
      state +
      "  " +
      country
  );
};

let printMyName = printName.bind(name);

// printMyName();

Function.prototype.myBind = function (...args) {
  let obj = this;
  console.log(args);
  let params = args.slice(1);
  return function (...params1) {
    obj.apply(args[0], [...params, ...params1]);
  };
};

let printMyName2 = printName.myBind(name, "Meham", "Haryana");
printMyName2('India');
