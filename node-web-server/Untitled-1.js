const test = (() => {
  let x = 1;
  return () => ++x;
})();

console.log( test() );
console.log( test() );