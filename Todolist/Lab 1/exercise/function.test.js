import { divide, sum } from '../functions';


it('adds 1 + 2 to equal 3', () => {
	const result = sum(1,2);
	expect(result).toBe(3);

});



it('divides down to the nearest integer.', () => {
  const result = divide(5, 2);
  expect(result).toBe(2.5);
});



//test the function throws an error
test('the divide function fails with an error', () => {
	function testDivide(){
		result = divide(5, 0);
	}
	expect(testDivide).toThrowError('Division by zero.');
});