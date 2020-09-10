document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  true
); // 3rd argument useCaptureflag, by default false

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  true
); // 3rd argument useCaptureflag, by default false

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child clicked");
    e.stopPropagation();
  },
  true
); // 3rd argument useCaptureflag, by default false

// first capturing happens then bubbling happens
