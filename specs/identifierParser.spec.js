import * as R from 'ramda';
import * as Parser from '../src/parser';

const expectedOutputForGivenInput = [
  {
    name: 'identifier parses a single character',
    input: 'x',
    output: 'x'
  },
  {
    name: 'identifier parses multiple characters',
    input: 'helloWorld',
    output: 'helloWorld'
  },
  {
    name: 'identifier parses numbers',
    input: 'h1e2l3l4o',
    output: 'h1e2l3l4o'
  },
  {
    name: 'identifier parses underscores',
    input: 'h1e2l_3l4o',
    output: 'h1e2l_3l4o'
  }
];

R.forEach(
  t => {
    test(t.name, () => {
      expect(Parser.identifier.parse(t.input))
        .toEqual({status: true, value: t.output})
    });
  }
  , expectedOutputForGivenInput
);
