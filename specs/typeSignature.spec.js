import * as R from 'ramda';
import * as Parser from '../src/parser';

const expectedOutputForGivenInput = [
  {
    name: 'typeSignature parses types without a function argument',
    input: 'a b -> a',
    output: [
      [['a', ' '], ['b', ' ']],
      [
        ['', '->', ' ', [['a', '']]]
      ]
    ]
  },
  {
    name: 'typeSignature parses types with a function argument',
    input: 'a b -> (SomeType a -> b -> c) -> OtherType',
    output: [
      [['a', ' '], ['b', ' ']],
      [
        ['', '->', ' ', ['', '(', '', ['', [['SomeType', ' '], ['a', ' ']], [['', '->', ' ', [['b', ' ']]], ['', '->', ' ', [['c', '']]]]], '', ')']],
        [' ', '->', ' ', [['OtherType', '']]]
      ]
    ]
  },
];

R.forEach(
  t => {
    test(t.name, () => {
      expect(Parser.typeSignature.parse(t.input))
        .toEqual({status: true, value: t.output})
    });
  }
  , expectedOutputForGivenInput
);
