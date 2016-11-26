// import * as R from 'ramda';
// import * as Parser from '../src/parser';
//
// const expectedOutputForGivenInput = [
//   {
//     name: 'typeSignature parses',
//     input: 'Type -> OtherType',
//     output: [['', [['Type', ' ']], '->'], [' ', [['OtherType', '']], '']]
//   },
//   {
//     name: 'typeSignature parses',
//     input: 'a -> List b -> SomeType',
//     output: [
//       ['', [['a', ' ']], '->'],
//       [' ', [['List', ' '], ['b', ' ']], '->'],
//       [' ', [['SomeType', '']], '']
//     ]
//   },
// ];
//
// R.forEach(
//   t => {
//     test(t.name, () => {
//       expect(Parser.typeSignature.parse(t.input))
//         .toEqual({status: true, value: t.output})
//     });
//   }
//   , expectedOutputForGivenInput
// );
