import * as R from 'ramda';
import * as Parser from '../src/parser';

const expectedOutputForGivenInput = [
  {
    name: 'optionalWhitespace parses zero whitespace',
    input: '',
    output: ''
  },
  {
    name: 'optionalWhitespace parses spaces',
    input: '  ',
    output: '  '
  },
  {
    name: 'optionalWhitespace parses newlines',
    input: ' \n ',
    output: ' \n '
  },
  {
    name: 'optionalWhitespace parses multiple lines',
    input: ' \n \n\n \n\n\n\n\n ',
    output: ' \n \n\n \n\n\n\n\n '
  },

  {
    name: 'optionalWhitespace parses CR',
    input: ' \n\r ',
    output: ' \n\r '
  },
  {
    name: 'optionalWhitespace parses CR (2)',
    input: ' \r\n ',
    output: ' \r\n '
  }
];

R.forEach(
  t => {
    test(t.name, () => {
      expect(Parser.optionalWhitespace.parse(t.input))
        .toEqual({status: true, value: t.output})
    });
  }
  , expectedOutputForGivenInput
);
