# Calculator Application

## Description
A simple JavaScript calculator that performs basic arithmetic operations and keeps a history of all calculations.

## Features
- Addition, Subtraction, Multiplication, Division
- Input validation
- Division-by-zero handling
- Calculation history tracking
- History display function

## Functions

### add(a, b)
Returns the sum of two numbers.

### subtract(a, b)
Returns the difference between two numbers.

### multiply(a, b)
Returns the product of two numbers.

### divide(a, b)
Returns the quotient of two numbers. Prevents division by zero.

### displayHistory()
Displays all previous calculations.

## Data Structure
Each calculation is stored as:

{
  operands: [a, b],
  operator: "+",
  result: 8
}

## Usage
Run the functions (node index.js) in a JavaScript environment.

add(5, 3);
multiply(4, 2);
displayHistory();

## Author
PHILIP SIMIYU.
