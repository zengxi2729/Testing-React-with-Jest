export function sum(a, b) {
  return a + b;
}



export function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('Division by zero.');
  }
  return dividend / divisor;
}

