// Task 1
function task1() {
  const input = prompt("Enter array elements separated by commas:");
  const arr = input.split(",");
  alert("Last element is: " + arr[arr.length - 1]);
}

// Task 2
function task2() {
  let input = prompt("Enter a 10-digit number:");
  if (/^\d{10}$/.test(input)) {
    alert("Valid 10-digit number: " + input);
  } else {
    alert("Invalid! Please enter exactly 10 digits.");
  }
}

// Task 3
function task3() {
  const arr = prompt("Enter array elements separated by commas:").split(",");
  const word = prompt("Enter word to search:");
  const index = arr.indexOf(word);
  const repeated = arr.filter((item, idx) => arr.indexOf(item) !== idx);
  alert(`Word found at index: ${index}\nRepeated characters: ${[...new Set(repeated)].join(", ")}`);
}

// Task 4
function task4() {
  const input = prompt("Enter characters (no commas):");
  const vowels = input.match(/[aeiou]/gi);
  alert("Number of vowels: " + (vowels ? vowels.length : 0));
}

// Task 5
function task5() {
  const input = prompt("Enter a sentence:");
  const words = input.split(" ");
  const longest = words.reduce((a, b) => (a.length > b.length ? a : b));
  alert("Longest word: " + longest);
}

// Task 6
function task6() {
  const input = prompt("Enter text:");
  let result = "";
  for (let char of input) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  alert("Converted: " + result);
}

// Task 7
function task7() {
  const str = prompt("Enter a sentence:");
  const word = prompt("Enter word to find:");
  const index = str.indexOf(word);
  if (index !== -1) {
    alert(`'${word}' found at position: ${index}`);
  } else {
    alert("Word not found.");
  }
}

// Task 8
function task8() {
  let arr = prompt("Enter array elements separated by commas:").split(",");
  const action = prompt("Choose action: delete, insert, replace");

  if (action === "delete") {
    const index = parseInt(prompt("Enter index to delete:"));
    arr.splice(index, 1);
    alert("After delete: " + arr.join(", "));
  } else if (action === "insert") {
    const index = parseInt(prompt("Enter index to insert at:"));
    const value = prompt("Enter value to insert:");
    arr.splice(index, 0, value);
    alert("After insert: " + arr.join(", "));
  } else if (action === "replace") {
    const index = parseInt(prompt("Enter index to replace:"));
    const value = prompt("Enter new value:");
    arr.splice(index, 1, value);
    alert("After replace: " + arr.join(", "));
  } else {
    alert("Invalid action.");
  }
}

// Task 9
function task9() {
  const str = prompt("Enter text:");
  const words = str.trim().split(/\s+/).length;
  const chars = str.length;
  const spaces = (str.match(/\s/g) || []).length;
  const specials = (str.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;

  alert(`Words: ${words}\nCharacters: ${chars}\nSpaces: ${spaces}\nSpecial symbols: ${specials}`);
}

// Task 10
function task10() {
  const a = prompt("Enter first value:");
  const b = prompt("Enter second value:");
  const op = prompt("Enter operation (+, -, *, /):");

  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  if (!isNaN(num1) && !isNaN(num2)) {
    let result;
    switch (op) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operation";
    }
    alert("Result: " + result);
  } else {
    if (op === "+") {
      alert("Result (string concatenation): " + a + b);
    } else {
      alert("Invalid operation for strings. Only + allowed.");
    }
  }
}
