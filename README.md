# FooBarQix Kata

Write a program that prints numbers from 1 to 100, one number per line. For each printed number, use the following rules:

- If the number is divisible by 3 or contains 3, print "Foo"
- If the number is divisible by 5 or contains 5, print "Bar"
- If the number is divisible by 7 or contains 7, print "Qix"

## Examples
| Expected Output | Description|
|---|---|
|`1 => 1`| Not divisible by and does not contain 3, 5, or 7 |
|`3 => FooFoo`| Divisible by 3 and contains 3|
|`7 => QixQix`| Divisible by 7 and contains 7|
|`13 => Foo`| Contains 3|
|`15 => FooBarBar`| Divisible by 3 and 5 and contains 5|

## Practice Test-Driven Development

Test-Driven Development (TDD) is an approach to writing code where the writing of tests guides the development. There are three steps to TDD:

- RED: Write a test for some functionality you will implement
- GREEN: Write code to make the test pass
- REFACTOR: Refactor code so it is well structured

Work through this kata by first writing a test for the simplest case and implementing the code to make that test pass. Then iterate on the solution following the RED, GREEN, REFACTOR steps as you write tests for the remaining requirements.

## Getting Started

This kata is written in Javascript and you will need to have [Node.js](https://nodejs.org/en/) installed in order to run the tests.

After installing Node.js, run `npm install` in the root directory to install dependencies.

Then run `npm test` to run the tests.

The branches of this repository illustrate example steps using TDD to arrive at the solution.

