import * as R from 'ramda';
import * as Parser from '../src/parser';

const expectedOutputForGivenInput = [
  {
    name: 'typeDeclaration parses a constant type',
    input: 'x : a',
    output: ['', 'x', ' ', ':', ' ', [[['a', '']], []]]
  },
  {
    name: 'typeDeclaration parses a function',
    input: 'x : a -> b',
    output: ['', 'x', ' ', ':', ' ', [[['a', ' ']], [['', '->', ' ', [['b', '']]]]]]
  },
  {
    name: 'typeDeclaration parses a higher order type',
    input: 'x : Type -> (b -> c) -> m d',
    output: ['', 'x', ' ', ':', ' ', [[['Type', ' ']], [['', '->', ' ', ['', '(', '', ['', [['b', ' ']], [['', '->', ' ', [['c', '']]]]], '', ')']], [' ', '->', ' ', [['m', ' '], ['d', '']]]]]]
  }
];

R.forEach(
  t => {
    test(t.name, () => {
      expect(Parser.typeDeclaration.parse(t.input))
        .toEqual({status: true, value: t.output})
    });
  }
  , expectedOutputForGivenInput
);
