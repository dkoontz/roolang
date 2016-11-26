/* @flow */

import * as P from 'parsimmon';
import * as R from 'ramda';

export const identifier = P.regex(/\w(?:\w|\d|_|)*/);
export const optionalWhitespace = P.regex(/(?:\s|\n|\r)*/);

// Int, a, Foo a, Foo a b c
export const typeName = P.seq(
  identifier,
  optionalWhitespace
).atLeast(1);

// Int -> Int, a -> b -> c
export const fn = P.seq(
  optionalWhitespace,
  typeName,
  P.seq(
    optionalWhitespace,
    P.string('->'),
    optionalWhitespace,
    typeName,
  ).atLeast(1)
);

// Int, a, f a b c, (Int -> a),
export const typeNameOrFunction = P.seq(
  optionalWhitespace,
  P.string('('),
  optionalWhitespace,
  fn,
  optionalWhitespace,
  P.string(')')
)
.or(typeName);

// Int -> (a -> b) -> f c d e
export const typeSignature = P.seq(
  typeNameOrFunction,
  P.seq(
    optionalWhitespace,
    P.string('->'),
    optionalWhitespace,
    typeNameOrFunction
  ).many()
);

// x : a, y : Type -> a, z : a -> (b -> m a) -> Type d
export const typeDeclaration = P.seq(
  optionalWhitespace,
  identifier,
  optionalWhitespace,
  P.string(':'),
  optionalWhitespace,
  typeSignature
);
