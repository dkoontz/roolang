import * as R from 'ramda';
import * as Parser from '../src/parser';

const expectedOutputForGivenInput = [
  {
    name: 'typeSignature parses concrete types',
    input: 'Type -> OtherType',
    output: ['', [['Type', ' ']], [['', '->', ' ', [['OtherType', '']]]]]
  },
  {
    name: 'typeSignature parses parameterized types',
    input: 'a -> b c -> SomeType',
    output: ['', [['a', ' ']], [['', '->', ' ', [['b', ' '], ['c', ' ']]], ['', '->', ' ', [['SomeType', '']]]]]
  }
];

R.forEach(
  t => {
    test(t.name, () => {
      expect(Parser.fn.parse(t.input))
        .toEqual({status: true, value: t.output})
    });
  }
  , expectedOutputForGivenInput
);
