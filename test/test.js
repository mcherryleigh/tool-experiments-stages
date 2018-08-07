import test from 'ava';
import MyClass from '../src/MyClass';

/** @test {MyClass.sum} */
test('1+1=2', async (t) => {
  const calc = new MyClass();
  const sum = calc.sum(1, 1);
  t.is(sum, 2);
});
