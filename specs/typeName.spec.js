import * as R from 'ramda';
import * as Parser from '../src/parser';

const expectedOutputForGivenInput = [
  {
    name: 'typeName parses single concrete type',
    input: 'SomeType',
    output: [['SomeType', '']]
  },
  {
    name: 'typeName parses single polymorphic type',
    input: 'someType',
    output: [['someType', '']]
  },
  {
    name: 'typeName parses parameterized types',
    input: 'SomeType TypeParam',
    output: [['SomeType', ' '], ['TypeParam', '']]
  },
  {
    name: 'typeName parses parameterized types (2)',
    input: 'SomeType someType',
    output: [['SomeType', ' '], ['someType', '']]
  },
  {
    name: 'typeName parses parameterized types (3)',
    input: 'SomeType TypeParam1 TypeParam2',
    output: [['SomeType', ' '], ['TypeParam1', ' '], ['TypeParam2', '']]
  },
  {
    name: 'typeName parses parameterized types (4)',
    input: 'SomeType a b c d',
    output: [['SomeType', ' '], ['a', ' '], ['b', ' '], ['c', ' '], ['d', '']]
  },
];

R.forEach(
  t => {
    test(t.name, () => {
      expect(Parser.typeName.parse(t.input))
        .toEqual({status: true, value: t.output})
    });
  }
  , expectedOutputForGivenInput
);
