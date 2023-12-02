// function func() {
//   console.log("common function");
// }

// module.exports = func;

function func() {
  console.log("ECMA script function 1");
}

export { func };

function func2() {
  console.log("ECMA script function 2");
  let num = 7346;
  return num;
}

export { func2 };
