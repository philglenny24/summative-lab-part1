// Calculator

const calculationHistory = [];

// Validates that inputs are numbers
function isValidNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

// Saves calculation to history

function saveCalculation(a, b, operator, result) {
  calculationHistory.push({
    operands: [a, b],
    operator,
    result
  });
}

// Addition
 
function add(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    console.error("Invalid input: add() requires two numbers.");
    return null;
  }

  const result = a + b;
  saveCalculation(a, b, "+", result);
  return result;
}

// Subtraction
 
function subtract(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    console.error("Invalid input: subtract() requires two numbers.");
    return null;
  }

  const result = a - b;
  saveCalculation(a, b, "-", result);
  return result;
}

// Multiplication

function multiply(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    console.error("Invalid input: multiply() requires two numbers.");
    return null;
  }

  const result = a * b;
  saveCalculation(a, b, "*", result);
  return result;
}

// Division
function divide(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    console.error("Invalid input: divide() requires two numbers.");
    return null;
  }

  if (b === 0) {
    console.error("Error: Division by zero is not allowed.");
    return null;
  }

  const result = a / b;
  saveCalculation(a, b, "/", result);
  return result;
}

// Display calculation history

function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log("No calculations have been performed yet.");
    return;
  }

  console.log("\n=== Calculation History ===");

  calculationHistory.forEach((entry, index) => {
    const [a, b] = entry.operands;
    console.log(`${index + 1}. ${a} ${entry.operator} ${b} = ${entry.result}`);
  });
}

// TESTING DIFFERENT CASES

console.log("Running tests...\n");

// Normal operations
console.log("Add:", add(5, 3));
console.log("Subtract:", subtract(10, 4));
console.log("Multiply:", multiply(6, 2));
console.log("Divide:", divide(20, 5));

// Edge cases
console.log("Divide by zero:", divide(10, 0));    
console.log("Invalid input:", add("5", 3));         
console.log("Negative numbers:", multiply(-4, 2));  
console.log("Decimals:", divide(7, 2));             

// Display history
displayHistory();