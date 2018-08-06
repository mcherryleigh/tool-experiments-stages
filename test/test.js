import test from 'ava';
import MyClass from '../src/MyClass'

/** @test {MyClass.sum} */
test('1+1=2', async t => {
  let calc  = new MyClass()
  let sum = calc.sum(1,1)
  t.is(sum, 2);
});