let counter = 0;

const print = () => {
  console.log("Debounce running ... ", counter++);
};

const debounce = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
};

const doSomeMagic = debounce(print, 1000);
