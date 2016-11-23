/* @flow */

function babelTest(a: string, b: number): string {
  return a + b.toString()
}

var x: number = 99;
var y = babelTest("Hi: ", x);
