import * as R from 'ramda';
import * as Parser from '../src/parser';

const expectedOutputForGivenInput = [
  {
    name: 'typeNameOrFunction parses non-function types',
    input: 'Type',
    output: [['Type', '']]
  },
  {
    name: 'typeNameOrFunction parses parameterized non-function types',
    input: 'Type a b',
    output: [['Type', ' '], ['a', ' '], ['b', '']]
  },
  {
    name: 'typeNameOrFunction parses function types',
    input: '(Type -> SomeType)',
    output: ["", "(", "", ["", [["Type", " "]], [["", "->", " ", [["SomeType", ""]]]]], "", ")"]
  },
  {
    name: 'typeNameOrFunction parses parameterized function types',
    input: '(Type a -> SomeType b)',
    output: ['', '(', '', ['', [['Type', ' '], ['a', ' ']], [['', '->', ' ', [['SomeType', ' '], ['b', '']]]]], '', ')']
  },
];

R.forEach(
  t => {
    test(t.name, () => {
      expect(Parser.typeNameOrFunction.parse(t.input))
        .toEqual({status: true, value: t.output})
    });
  }
  , expectedOutputForGivenInput
);
