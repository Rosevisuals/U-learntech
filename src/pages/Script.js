import React, { useState , useEffect} from 'react';
import Header from '../components/Header';
import { ArrowUp,Menu, X } from 'lucide-react';
import './Script.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction to JavaScript',
    content: `
      <section id="introduction">
        <h2>Introduction to JavaScript</h2>
        <p>JavaScript is a versatile programming language that allows you to create dynamic and interactive web content. It is an essential skill for web developers and can be used for both front-end and back-end development.</p>
        <h3>What You Need to Get Started</h3>
        <p>To start learning JavaScript, you will need the following:</p>
        <ul>
          <li><strong>A Text Editor:</strong> You can use any text editor to write JavaScript code. Popular choices include Visual Studio Code, Sublime Text, and Atom.</li>
          <li><strong>A Web Browser:</strong> Modern web browsers like Google Chrome, Firefox, and Safari have built-in JavaScript engines that allow you to run JavaScript code.</li>
          <li><strong>Basic HTML and CSS Knowledge:</strong> Understanding the basics of HTML and CSS will help you understand how JavaScript interacts with web pages.</li>
        </ul>
        <h3>Syntax and Example</h3>
        <p>JavaScript syntax is the set of rules for how JavaScript programs are constructed:</p>
        <pre><code>// Example: Hello World
console.log('Hello, World!');
        </code></pre>
        <p>Explanation: The <code>console.log()</code> method outputs a message to the web console, which is useful for debugging and testing purposes.</p>
        <h3>Real-Life Example</h3>
        <p>Use JavaScript to display a welcome message on a webpage:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;JavaScript Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        alert('Welcome to JavaScript!');
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 1</h3>
        <p>Create a simple HTML page and use JavaScript to display a greeting message in the console and an alert box.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Greeting Message&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        console.log('Hello, Developer!');
        alert('Welcome to JavaScript!');
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 2</h3>
        <p>Create a JavaScript program that changes the text content of an HTML element using JavaScript.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Change Text Content&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1 id="heading"&gt;Original Text&lt;/h1&gt;
    &lt;button onclick="changeText()"&gt;Change Text&lt;/button&gt;
    &lt;script&gt;
        function changeText() {
            document.getElementById('heading').textContent = 'New Text';
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'variables',
    title: 'Variables and Data Types',
    content: `
      <section id="variables">
        <h2>Variables and Data Types</h2>
        <p>Variables are used to store data values. JavaScript uses the <code>var</code>, <code>let</code>, and <code>const</code> keywords to declare variables. Data types specify the type of data that can be stored and manipulated within a program.</p>
        <h3>Variable Declaration</h3>
        <p>Example:</p>
        <pre><code>// Declaring variables
var name = 'John';
let age = 30;
const isStudent = true;

console.log(name, age, isStudent);
        </code></pre>
        <p>Explanation: <code>var</code> declares a variable that can be re-assigned, <code>let</code> declares a block-scoped variable, and <code>const</code> declares a constant variable that cannot be changed.</p>
        <h3>Data Types</h3>
        <p>In programming, data types is an important concept.</p>
        <p>To be able to operate on variables, it is important to know something about the type.</p>
        <p>JavaScript supports different types of data:</p>
        <ul>
          <li><strong>String:</strong> Represents text. Example: <code>'Hello'</code></li>
          <li><strong>Number:</strong> Represents numbers. Example: <code>100</code>, <code>3.14</code></li>
          <li><strong>Boolean:</strong> Represents true or false. Example: <code>true</code>, <code>false</code></li>
          <li><strong>Array:</strong> Represents a collection of items. Example: <code>[1, 2, 3]</code></li>
          <li><strong>Object:</strong> Represents a collection of key-value pairs. Example: <code>{ name: 'John', age: 30 }</code></li>
          <li><strong>Null:</strong> Represents the intentional absence of a value. Example: <code>null</code></li>
          <li><strong>Undefined:</strong> Represents a variable that has been declared but not assigned a value. Example: <code>undefined</code></li>
        </ul>
        <h3>Real-Life Example</h3>
        <p>Use variables to store user input and display it:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;JavaScript Variables&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let name = prompt('Enter your name:');
        alert('Hello, ' + name);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 1</h3>
        <p>Create a JavaScript program that asks the user for their name and age, then displays a message including both.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;User Input&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let name = prompt('Enter your name:');
        let age = prompt('Enter your age:');
        alert('Hello ' + name + ', you are ' + age + ' years old.');
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 2</h3>
        <p>Create a JavaScript program that declares an array of fruits and displays the first fruit in the array.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Array Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let fruits = ['Apple', 'Banana', 'Cherry'];
        alert('The first fruit is: ' + fruits[0]);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'operators',
    title: 'Operators and Expressions',
    content: `
      <section id="operators">
        <h2>Operators and Expressions</h2>
        <p>Operators are used to perform operations on variables and values. JavaScript includes arithmetic, assignment, comparison, logical, and more operators. Expressions are combinations of values, variables, and operators that evaluate to a value.</p>
        <h3>Arithmetic Operators</h3>
        <p>Example:</p>
        <pre><code>// Arithmetic operators
let a = 5;
let b = 2;
let sum = a + b;
let difference = a - b;

console.log(sum, difference);
        </code></pre>
        <p>Explanation: The arithmetic operators perform calculations such as addition (<code>+</code>), subtraction (<code>-</code>), multiplication (<code>*</code>), and division (<code>/</code>).</p>
        <h3>Assignment Operators</h3>
        <p>Example:</p>
        <pre><code>// Assignment operators
let c = 10;
c += 5; // c = c + 5
c -= 3; // c = c - 3

console.log(c);
        </code></pre>
        <p>Explanation: Assignment operators assign values to variables. Examples include <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, and <code>/=</code>.</p>
        <h3>Comparison Operators</h3>
        <p>Example:</p>
        <pre><code>// Comparison operators
let isEqual = (a == b);
let isIdentical = (a === b);
let isGreater = (a > b);

console.log(isEqual, isIdentical, isGreater);
        </code></pre>
        <p>Explanation: Comparison operators compare values and return a boolean result. Examples include equality (<code>==</code>), strict equality (<code>===</code>), and greater than (<code>></code>).</p>
        <h3>Logical Operators</h3>
        <p>Example:</p>
        <pre><code>// Logical operators
let andOperator = (a > 1 && b < 3);
let orOperator = (a > 1 || b < 1);
let notOperator = !(a > 1);

console.log(andOperator, orOperator, notOperator);
        </code></pre>
        <p>Explanation: Logical operators combine multiple conditions. Examples include AND (<code>&&</code>), OR (<code>||</code>), and NOT (<code>!</code>).</p>
        <h3>Expressions</h3>
        <p>Expressions are combinations of values, variables, and operators that evaluate to a value:</p>
        <pre><code>// Expression example
let result = (a + b) * c;
console.log(result);
        </code></pre>
        <p>Explanation: The expression <code>(a + b) * c</code> evaluates to a value by first performing the addition and then multiplying the result.</p>
        <h3>Real-Life Example</h3>
        <p>Use operators and expressions to create a simple calculator:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;JavaScript Calculator&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let num1 = parseInt(prompt('Enter first number:'));
        let num2 = parseInt(prompt('Enter second number:'));
        let sum = num1 + num2;
        let product = num1 * num2;
        alert('The sum is: ' + sum + ' and the product is: ' + product);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 1</h3>
        <p>Create a JavaScript program that takes two numbers from the user and performs addition, subtraction, multiplication, and division.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Simple Calculator&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let num1 = parseInt(prompt('Enter first number:'));
        let num2 = parseInt(prompt('Enter second number:'));
        let sum = num1 + num2;
        let difference = num1 - num2;
        let product = num1 * num2;
        let quotient = num1 / num2;
        alert('Sum: ' + sum + ', Difference: ' + difference + ', Product: ' + product + ', Quotient: ' + quotient);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 2</h3>
        <p>Create a JavaScript program that evaluates a complex expression involving multiple operators and displays the result.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Expression Evaluator&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let a = parseInt(prompt('Enter value for a:'));
        let b = parseInt(prompt('Enter value for b:'));
        let c = parseInt(prompt('Enter value for c:'));
        let result = (a + b) * c / (a - b);
        alert('The result of the expression is: ' + result);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'arrays',
    title: 'Arrays',
    content: `
    <section id="arrays">
        <h2>Arrays in JavaScript</h2>
        <p>Arrays are used to store multiple values in a single variable. They are a type of object, but they are optimized for storing and managing ordered data.</p>
        
        <h3>Creating Arrays</h3>
        <p>You can create arrays in JavaScript using array literals or the <code>Array</code> constructor.</p>
        <pre><code>// Example: Array literal
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);

// Example: Array constructor
let cars = new Array('Ford', 'Toyota', 'Honda');
console.log(cars);
        </code></pre>
        
        <h3>Accessing Array Elements</h3>
        <p>You can access elements in an array using their index. The first element has an index of 0.</p>
        <pre><code>// Example: Accessing array elements
let firstFruit = fruits[0];
console.log(firstFruit); // Output: Apple
        </code></pre>
        
        <h3>Modifying Array Elements</h3>
        <p>You can change the value of an array element by accessing it using its index and assigning a new value.</p>
        <pre><code>// Example: Modifying array elements
fruits[1] = 'Blueberry';
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']
        </code></pre>
        
        <h3>Array Properties and Methods</h3>
        <p>JavaScript arrays have various properties and methods that allow you to manipulate and interact with them.</p>
        <ul>
            <li><code>length</code>: Returns the number of elements in the array.</li>
            <li><code>push()</code>: Adds one or more elements to the end of the array.</li>
            <li><code>pop()</code>: Removes the last element from the array.</li>
            <li><code>shift()</code>: Removes the first element from the array.</li>
            <li><code>unshift()</code>: Adds one or more elements to the beginning of the array.</li>
            <li><code>concat()</code>: Merges two or more arrays.</li>
            <li><code>slice()</code>: Returns a portion of an array as a new array.</li>
            <li><code>splice()</code>: Adds or removes elements from an array.</li>
            <li><code>forEach()</code>: Executes a provided function once for each array element.</li>
            <li><code>map()</code>: Creates a new array with the results of calling a provided function on every element in the array.</li>
            <li><code>filter()</code>: Creates a new array with all elements that pass the test implemented by the provided function.</li>
            <li><code>reduce()</code>: Applies a function against an accumulator and each element in the array to reduce it to a single value.</li>
        </ul>
        <pre><code>// Example: Array methods
console.log(fruits.length); // Output: 3

fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Date']

fruits.pop();
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']

fruits.shift();
console.log(fruits); // Output: ['Blueberry', 'Cherry']

fruits.unshift('Apricot');
console.log(fruits); // Output: ['Apricot', 'Blueberry', 'Cherry']

let citrus = ['Orange', 'Lemon'];
let allFruits = fruits.concat(citrus);
console.log(allFruits); // Output: ['Apricot', 'Blueberry', 'Cherry', 'Orange', 'Lemon']

let someFruits = allFruits.slice(1, 3);
console.log(someFruits); // Output: ['Blueberry', 'Cherry']

allFruits.splice(2, 1, 'Strawberry');
console.log(allFruits); // Output: ['Apricot', 'Blueberry', 'Strawberry', 'Orange', 'Lemon']
        </code></pre>
        
        <h3>Iterating Over Arrays</h3>
        <p>You can iterate over arrays using various methods such as <code>for</code> loops, <code>forEach</code>, <code>map</code>, and more.</p>
        <pre><code>// Example: for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Example: forEach
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Example: map
let fruitLengths = fruits.map(function(fruit) {
    return fruit.length;
});
console.log(fruitLengths); // Output: [7, 9, 10]
        </code></pre>
        
        <h3>Real-Life Example</h3>
        <p>Let's create a simple program that manages a shopping list. Users can add items, remove items, and view the current list.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Shopping List&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Shopping List&lt;/h1&gt;
    &lt;input type="text" id="itemInput" placeholder="Enter an item"&gt;
    &lt;button id="addItemButton"&gt;Add Item&lt;/button&gt;
    &lt;ul id="shoppingList"&gt;&lt;/ul&gt;
    
    &lt;script&gt;
        let shoppingList = [];
        
        document.getElementById('addItemButton').addEventListener('click', function() {
            let itemInput = document.getElementById('itemInput');
            let itemText = itemInput.value;
            if (itemText !== '') {
                shoppingList.push(itemText);
                displayList();
                itemInput.value = '';
            }
        });
        
        function displayList() {
            let listElement = document.getElementById('shoppingList');
            listElement.innerHTML = '';
            shoppingList.forEach(function(item, index) {
                let listItem = document.createElement('li');
                listItem.textContent = item;
                let removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', function() {
                    shoppingList.splice(index, 1);
                    displayList();
                });
                listItem.appendChild(removeButton);
                listElement.appendChild(listItem);
            });
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        
        <h3>Assignment 1</h3>
        <p>Create a JavaScript program that merges two arrays of numbers and sorts the resulting array in ascending order.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Merge and Sort Arrays&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let array1 = [5, 12, 8, 21];
        let array2 = [13, 2, 19, 7];
        
        let mergedArray = array1.concat(array2);
        mergedArray.sort(function(a, b) {
            return a - b;
        });
        
        console.log(mergedArray); // Output: [2, 5, 7, 8, 12, 13, 19, 21]
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        
        <h3>Assignment 2</h3>
        <p>Create a JavaScript program that filters an array of numbers to only include even numbers and calculates the sum of the filtered numbers.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Filter and Sum Even Numbers&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let numbers = [10, 15, 20, 25, 30, 35, 40];
        
        let evenNumbers = numbers.filter(function(number) {
            return number % 2 === 0;
        });
        
        let sum = evenNumbers.reduce(function(total, number) {
            return total + number;
        }, 0);
        
        console.log(evenNumbers); // Output: [10, 20, 30, 40]
        console.log(sum); // Output: 100
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
    </section>`
},
{
    id: 'conditional-statements',
    title: 'Conditional Statements ',
    content: `
    <section id="conditional-statements">
        <h2>Conditional Statements in JavaScript</h2>
        <p>Conditional statements are used to perform different actions based on different conditions. JavaScript supports various conditional statements, including if-else, if-else if, switch, and loops like for loop.</p>
        
        <h3>If-Else Statement</h3>
        <p>The if-else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed using the else statement.</p>
        <pre><code>// Example: If-Else statement
let age = 18;

if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are a minor.');
}
        </code></pre>
        
        <h3>If-Else If Statement</h3>
        <p>The if-else if statement allows you to specify multiple conditions. If one of the conditions is true, the corresponding block of code is executed.</p>
        <pre><code>// Example: If-Else If statement
let score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C');
} else if (score >= 60) {
    console.log('Grade: D');
} else {
    console.log('Grade: F');
}
        </code></pre>
        
        <h3>Switch Statement</h3>
        <p>The switch statement evaluates an expression and executes the code corresponding to the matching case label. If no case matches, the default code block is executed.</p>
        <pre><code>// Example: Switch statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName); // Output: Wednesday
        </code></pre>
        
        <h3>For Loop</h3>
        <p>The for loop is used to repeat a block of code a certain number of times. It consists of three parts: initialization, condition, and increment/decrement.</p>
        <pre><code>// Example: For loop
for (let i = 1; i <= 5; i++) {
    console.log('Iteration ' + i);
}
        </code></pre>
        
        <h3>Real-Life Example</h3>
        <p>Let's create a program that assigns letter grades based on a numeric score using all three types of conditional statements.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Grade Assignment&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Grade Assignment&lt;/h1&gt;
    &lt;input type="number" id="scoreInput" placeholder="Enter score"&gt;
    &lt;button id="assignGradeButton"&gt;Assign Grade&lt;/button&gt;
    &lt;p id="gradeOutput"&gt;&lt;/p&gt;

    &lt;script&gt;
        document.getElementById('assignGradeButton').addEventListener('click', function() {
            let score = parseInt(document.getElementById('scoreInput').value);
            let grade;
            
            // Using if-else if statement
            if (score >= 90) {
                grade = 'A';
            } else if (score >= 80) {
                grade = 'B';
            } else if (score >= 70) {
                grade = 'C';
            } else if (score >= 60) {
                grade = 'D';
            } else {
                grade = 'F';
            }
            
            document.getElementById('gradeOutput').textContent = 'Grade: ' + grade;
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        
        <h3>Assignment 1: If-Else Statement</h3>
        <p>Create a JavaScript program that determines if a given number is positive, negative, or zero using an if-else statement.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Positive, Negative, or Zero&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let number = parseInt(prompt('Enter a number:'));
        
        if (number > 0) {
            console.log('The number is positive.');
        } else if (number < 0) {
            console.log('The number is negative.');
        } else {
            console.log('The number is zero.');
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        
        <h3>Assignment 2: Switch Statement</h3>
        <p>Create a JavaScript program that takes a number between 1 and 12 and prints the corresponding month name using a switch statement.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Month Name&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let monthNumber = parseInt(prompt('Enter a number between 1 and 12:'));
        let monthName;

        switch (monthNumber) {
            case 1:
                monthName = 'January';
                break;
            case 2:
                monthName = 'February';
                break;
            case 3:
                monthName = 'March';
                break;
            case 4:
                monthName = 'April';
                break;
            case 5:
                monthName = 'May';
                break;
            case 6:
                monthName = 'June';
                break;
            case 7:
                monthName = 'July';
                break;
            case 8:
                monthName = 'August';
                break;
            case 9:
                monthName = 'September';
                break;
            case 10:
                monthName = 'October';
                break;
            case 11:
                monthName = 'November';
                break;
            case 12:
                monthName = 'December';
                break;
            default:
                monthName = 'Invalid month';
        }

        console.log('Month: ' + monthName);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        
        <h3>Assignment 3: For Loop</h3>
        <p>Create a JavaScript program that prints the multiplication table for a given number using a for loop.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Multiplication Table&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let number = parseInt(prompt('Enter a number for the multiplication table:'));

        for (let i = 1; i <= 10; i++) {
            console.log(number + ' x ' + i + ' = ' + (number * i));
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
    </section>`
},

  {
    id: 'functions',
    title: 'Functions and Scope',
    content: `<section id="functions">
    <h2>Functions and Scope</h2>
    <p>Functions are blocks of code designed to perform a particular task. Scope determines the accessibility of variables. Functions can be reused, making your code more modular and maintainable.</p>
    <h3>Function Definition</h3>
    <p>A function definition consists of the function keyword, followed by the name of the function, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.</p>
    <pre><code>// Function definition
function greet(name) {
    return 'Hello, ' + name;
}

console.log(greet('Alice'));
    </code></pre>
    <p>Explanation: A function definition defines a function with the specified parameters.</p>
    <h3>Function Expression</h3>
    <p>A function expression defines a function and assigns it to a variable. Function expressions can be anonymous.</p>
    <pre><code>// Function expression
const add = function(a, b) {
    return a + b;
};

console.log(add(3, 4));
    </code></pre>
    <p>Explanation: A function expression defines a function and assigns it to a variable.</p>
    <h3>Arrow Function</h3>
    <p>Arrow functions provide a shorter syntax for writing function expressions and do not have their own 'this' context.</p>
    <pre><code>// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));
    </code></pre>
    <p>Explanation: Arrow functions provide a shorter syntax for writing function expressions.</p>
    <h3>Parameters</h3>
    <p>Parameters are variables listed as a part of the function definition. Arguments are the values passed to the function when it is invoked.</p>
    <pre><code>// Function with parameters
function introduce(name, age) {
    return \`Hello, my name is \${name} and I am \${age} years old.\`;
}

console.log(introduce('Alice', 25));
    </code></pre>
    <h3>Function Invocation</h3>
    <p>Function invocation is the process of calling a function and providing it with arguments.</p>
    <pre><code>// Function invocation
introduce('Alice', 25);
    </code></pre>
    <h3>Function Methods: call(), apply(), and bind()</h3>
    <p>The <code>call()</code> and <code>apply()</code> methods allow you to call a function with a specified <code>this</code> value and arguments.</p>
    <pre><code>// Using call()
function greet() {
    return 'Hello, ' + this.name;
}

const person = { name: 'Alice' };
console.log(greet.call(person));

// Using apply()
const args = [10, 20];
function sum(a, b) {
    return a + b;
}
console.log(sum.apply(null, args));
    </code></pre>
    <p>The <code>bind()</code> method creates a new function that, when called, has its <code>this</code> keyword set to the provided value.</p>
    <pre><code>// Using bind()
const person = { name: 'Alice' };
const boundGreet = greet.bind(person);
console.log(boundGreet());
    </code></pre>
    <h3>Closures</h3>
    <p>A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.</p>
    <pre><code>function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');
    </code></pre>
    <p>Explanation: The inner function has access to the outer function's variables even after the outer function has executed.</p>
    <h3>Scope</h3>
    <p>Scope determines the visibility of variables:</p>
    <pre><code>// Global scope
let globalVar = 'I am a global variable';

function checkScope() {
    // Local scope
    let localVar = 'I am a local variable';
    console.log(globalVar);
    console.log(localVar);
}

checkScope();
console.log(globalVar);
// console.log(localVar); // This will cause an error
    </code></pre>
    <p>Explanation: Variables declared outside of functions are in the global scope, while variables declared inside functions are in the local scope.</p>
    <h3>Real-Life Example</h3>
    <p>Use a function to calculate the area of a rectangle:</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;JavaScript Functions&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        function calculateArea(width, height) {
            return width * height;
        }
        
        let width = parseFloat(prompt('Enter width:'));
        let height = parseFloat(prompt('Enter height:'));
        let area = calculateArea(width, height);
        alert('The area is: ' + area);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <h3>Assignment 1</h3>
    <p>Create a JavaScript program that defines a function to calculate the circumference of a circle given its radius.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Calculate Circumference&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        function calculateCircumference(radius) {
            return 2 * Math.PI * radius;
        }
        
        let radius = parseFloat(prompt('Enter radius:'));
        let circumference = calculateCircumference(radius);
        alert('The circumference is: ' + circumference);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    <h3>Assignment 2</h3>
    <p>Create a JavaScript program that defines a function to check if a number is even or odd and displays the result.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Even or Odd&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        function isEven(number) {
            return number % 2 === 0;
        }
        
        let number = parseInt(prompt('Enter a number:'));
        if (isEven(number)) {
            alert(number + ' is even.');
        } else {
            alert(number + ' is odd.');
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
</section>
`
     
  },
  {
    id: 'objects',
    title: 'Objects ',
    content: `
    <section id="objects">
        <h2>Objects in JavaScript</h2>
        <p>Objects are used to store collections of data and more complex entities. They are a fundamental part of JavaScript and allow you to group related data and functionality together.</p>
        
        <h3>Creating Objects</h3>
        <p>There are several ways to create objects in JavaScript, including using object literals, the <code>Object</code> constructor, and the <code>new</code> keyword.</p>
        <pre><code>// Example: Object literal
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    greet: function() {
        return 'Hello, ' + this.firstName;
    }
};
console.log(person);

// Example: Object constructor
let car = new Object();
car.make = 'Toyota';
car.model = 'Corolla';
car.year = 2020;
console.log(car);

// Example: Using new keyword with constructor function
function Animal(type, name) {
    this.type = type;
    this.name = name;
}
let dog = new Animal('Dog', 'Buddy');
console.log(dog);
        </code></pre>
        
        <h3>Accessing Object Properties</h3>
        <p>You can access object properties using dot notation or bracket notation.</p>
        <pre><code>// Example: Accessing properties
console.log(person.firstName); // Dot notation
console.log(person['lastName']); // Bracket notation
        </code></pre>
        
        <h3>Modifying Object Properties</h3>
        <p>You can add, change, or delete properties of an object.</p>
        <pre><code>// Example: Modifying properties
person.age = 35; // Changing a property
person.gender = 'male'; // Adding a new property
delete person.lastName; // Deleting a property
console.log(person);
        </code></pre>
        
        <h3>Methods</h3>
        <p>Methods are functions that are properties of an object. They allow objects to perform actions.</p>
        <pre><code>// Example: Object method
person.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};
console.log(person.fullName());
        </code></pre>
        
        <h3>Iterating Over Object Properties</h3>
        <p>You can use a <code>for...in</code> loop to iterate over the properties of an object.</p>
        <pre><code>// Example: Iterating over properties
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ': ' + person[key]);
    }
}
        </code></pre>
        
        <h3>Object Destructuring</h3>
        <p>Destructuring assignment allows you to unpack values from objects into distinct variables.</p>
        <pre><code>// Example: Object destructuring
let { firstName, age } = person;
console.log(firstName, age);
        </code></pre>
        
        <h3>Real-Life Example</h3>
        <p>Let's create a simple inventory management system for a store. We'll use objects to represent items in the inventory and provide methods to add, update, and delete items.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Inventory Management&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Inventory Management&lt;/h1&gt;
    &lt;input type="text" id="itemNameInput" placeholder="Item Name"&gt;
    &lt;input type="number" id="itemQuantityInput" placeholder="Quantity"&gt;
    &lt;button id="addItemButton"&gt;Add Item&lt;/button&gt;
    &lt;ul id="inventoryList"&gt;&lt;/ul&gt;
    
    &lt;script&gt;
        let inventory = {};

        document.getElementById('addItemButton').addEventListener('click', function() {
            let itemName = document.getElementById('itemNameInput').value;
            let itemQuantity = parseInt(document.getElementById('itemQuantityInput').value);
            if (itemName !== '' && !isNaN(itemQuantity)) {
                addOrUpdateItem(itemName, itemQuantity);
                displayInventory();
                document.getElementById('itemNameInput').value = '';
                document.getElementById('itemQuantityInput').value = '';
            }
        });

        function addOrUpdateItem(name, quantity) {
            if (inventory[name]) {
                inventory[name].quantity += quantity;
            } else {
                inventory[name] = { name: name, quantity: quantity };
            }
        }

        function displayInventory() {
            let listElement = document.getElementById('inventoryList');
            listElement.innerHTML = '';
            for (let key in inventory) {
                if (inventory.hasOwnProperty(key)) {
                    let listItem = document.createElement('li');
                    listItem.textContent = inventory[key].name + ': ' + inventory[key].quantity;
                    listElement.appendChild(listItem);
                }
            }
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        
        <h3>Assignment 1</h3>
        <p>Create a JavaScript program that defines an object to represent a book with properties like title, author, and pages. Add methods to update the number of pages and display the book's details.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Book Object&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let book = {
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            pages: 176,
            updatePages: function(newPages) {
                this.pages = newPages;
            },
            getDetails: function() {
                return this.title + ' by ' + this.author + ', ' + this.pages + ' pages';
            }
        };

        book.updatePages(200);
        console.log(book.getDetails()); // Output: JavaScript: The Good Parts by Douglas Crockford, 200 pages
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        
        <h3>Assignment 2</h3>
        <p>Create a JavaScript program that defines an object to represent a student with properties like name, age, and grades (an array of numbers). Add methods to add a grade, calculate the average grade, and display the student's details.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Student Object&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        let student = {
            name: 'Alice',
            age: 20,
            grades: [85, 90, 78],
            addGrade: function(grade) {
                this.grades.push(grade);
            },
            getAverageGrade: function() {
                let sum = this.grades.reduce(function(total, grade) {
                    return total + grade;
                }, 0);
                return sum / this.grades.length;
            },
            getDetails: function() {
                return this.name + ', ' + this.age + ' years old, Average grade: ' + this.getAverageGrade();
            }
        };

        student.addGrade(92);
        console.log(student.getDetails()); // Output: Alice, 20 years old, Average grade: 86.25
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
    </section>`
},

  {
    id: 'manipulation',
    title: 'Events and DOM Manipulation',
    content: `
    <section id="manipulation">
        <h2>Events and DOM Manipulation</h2>
        <p>The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. Events are actions that occur when the user interacts with the webpage, and JavaScript allows you to manipulate the DOM based on these events.</p>
        
        <h3>Introduction to the DOM</h3>
        <p>The DOM represents a document with a tree structure. Each node is an object representing a part of the document. The DOM allows JavaScript to access and manipulate the HTML and CSS of a webpage.</p>
        
        <h3>DOM Methods</h3>
        <p>Some common DOM methods include:</p>
        <ul>
            <li><code>document.getElementById(id)</code>: Selects an element by its ID.</li>
            <li><code>document.getElementsByClassName(class)</code>: Selects elements by their class name.</li>
            <li><code>document.getElementsByTagName(tag)</code>: Selects elements by their tag name.</li>
            <li><code>document.querySelector(selector)</code>: Selects the first element that matches a CSS selector.</li>
            <li><code>document.querySelectorAll(selector)</code>: Selects all elements that match a CSS selector.</li>
        </ul>
        <pre><code>// Example: Selecting an element by ID
let element = document.getElementById('myElement');
console.log(element);
        </code></pre>
        
        <h3>Manipulating HTML Content</h3>
        <p>You can change the content of HTML elements using properties like <code>innerHTML</code>, <code>textContent</code>, and <code>innerText</code>.</p>
        <pre><code>// Example: Changing HTML content
let element = document.getElementById('myElement');
element.innerHTML = 'New Content';
        </code></pre>
        
        <h3>Manipulating CSS Styles</h3>
        <p>You can change the CSS styles of elements using the <code>style</code> property.</p>
        <pre><code>// Example: Changing CSS styles
let element = document.getElementById('myElement');
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
        </code></pre>
        
        <h3>Working with Forms</h3>
        <p>Forms allow users to input data. You can access form elements and their values using the DOM.</p>
        <pre><code>// Example: Accessing form values
let form = document.forms['myForm'];
let name = form['name'].value;
console.log(name);
        </code></pre>
        
        <h3>Creating and Removing Elements</h3>
        <p>You can create new HTML elements and add them to the DOM, as well as remove existing elements.</p>
        <pre><code>// Example: Creating and adding a new element
let newElement = document.createElement('div');
newElement.innerHTML = 'New Element';
document.body.appendChild(newElement);

// Example: Removing an element
let element = document.getElementById('myElement');
element.remove();
        </code></pre>
        
        <h3>Event Handling</h3>
        <p>Event handling is the process of capturing and responding to user actions. Common events include clicks, key presses, and form submissions.</p>
        <pre><code>// Example: Adding an event listener
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button was clicked!');
});
        </code></pre>
        
        <h3>Animation with JavaScript</h3>
        <p>You can create animations using JavaScript by changing CSS properties over time.</p>
        <pre><code>// Example: Simple animation
let element = document.getElementById('myElement');
let position = 0;

function animate() {
    position += 1;
    element.style.left = position + 'px';
    if (position < 100) {
        requestAnimationFrame(animate);
    }
}

animate();
        </code></pre>
        
        <h3>Navigating the DOM</h3>
        <p>You can navigate the DOM tree using properties like <code>parentNode</code>, <code>childNodes</code>, <code>firstChild</code>, <code>lastChild</code>, <code>nextSibling</code>, and <code>previousSibling</code>.</p>
        <pre><code>// Example: Navigating the DOM
let parent = document.getElementById('myElement').parentNode;
console.log(parent);
        </code></pre>
        
        <h3>Node Collections and Node Lists</h3>
        <p>Methods like <code>getElementsByClassName</code> and <code>getElementsByTagName</code> return live collections of nodes, while <code>querySelectorAll</code> returns a static NodeList.</p>
        <pre><code>// Example: NodeList vs HTMLCollection
let nodeList = document.querySelectorAll('p');
let htmlCollection = document.getElementsByTagName('p');

console.log(nodeList); // Static NodeList
console.log(htmlCollection); // Live HTMLCollection
        </code></pre>
        
        <h3>JavaScript Events</h3>
        <p>JavaScript can handle various events such as mouse events, keyboard events, form events, and window events.</p>
        <pre><code>// Example: Handling different events
// Mouse event
document.getElementById('myElement').addEventListener('click', function() {
    console.log('Element clicked');
});

// Keyboard event
document.addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
});

// Form event
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
});

// Window event
window.addEventListener('resize', function() {
    console.log('Window resized');
});
        </code></pre>
        
        <h3>Real-Life Example</h3>
        <p>Let's create a simple to-do list application that allows users to add, complete, and remove tasks.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;To-Do List&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;To-Do List&lt;/h1&gt;
    &lt;input type="text" id="taskInput" placeholder="Enter a task"&gt;
    &lt;button id="addTaskButton"&gt;Add Task&lt;/button&gt;
    &lt;ul id="taskList"&gt;&lt;/ul&gt;
    
    &lt;script&gt;
        document.getElementById('addTaskButton').addEventListener('click', function() {
            let taskInput = document.getElementById('taskInput');
            let taskText = taskInput.value;
            if (taskText !== '') {
                let newTask = document.createElement('li');
                newTask.textContent = taskText;
                newTask.addEventListener('click', function() {
                    newTask.style.textDecoration = 'line-through';
                });
                let removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', function() {
                    newTask.remove();
                });
                newTask.appendChild(removeButton);
                document.getElementById('taskList').appendChild(newTask);
                taskInput.value = '';
            }
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        
        <h3>Assignment 1</h3>
        <p>Create a JavaScript program that creates a counter with increment and decrement buttons. Display the current count on the page.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Counter&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Counter: &lt;span id="counter"&gt;0&lt;/span&gt;&lt;/h1&gt;
    &lt;button id="incrementButton"&gt;Increment&lt;/button&gt;
    &lt;button id="decrementButton"&gt;Decrement&lt;/button&gt;
    
    &lt;script&gt;
        let count = 0;
        
        document.getElementById('incrementButton').addEventListener('click', function() {
            count++;
            document.getElementById('counter').textContent = count;
        });
        
        document.getElementById('decrementButton').addEventListener('click', function() {
            count--;
            document.getElementById('counter').textContent = count;
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        
        <h3>Assignment 2</h3>
        <p>Create a JavaScript program that changes the background color of a webpage based on user input. Provide an input field to enter a color and a button to apply the color.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Change Background Color&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;input type="text" id="colorInput" placeholder="Enter a color"&gt;
    &lt;button id="changeColorButton"&gt;Change Color&lt;/button&gt;
    
    &lt;script&gt;
        document.getElementById('changeColorButton').addEventListener('click', function() {
            let color = document.getElementById('colorInput').value;
            document.body.style.backgroundColor = color;
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
    </section>`
},

  {
    id: 'asynchronous',
    title: 'Asynchronous JavaScript',
    content: `
      <section id="asynchronous">
        <h2>Asynchronous JavaScript</h2>
        <p>Asynchronous JavaScript allows you to perform tasks such as fetching data from a server without blocking the execution of other code.</p>
        <h3>setTimeout and setInterval</h3>
        <p>Example:</p>
        <pre><code>// Using setTimeout
setTimeout(function() {
    console.log('This message is shown after 2 seconds');
}, 2000);

// Using setInterval
setInterval(function() {
    console.log('This message is shown every 3 seconds');
}, 3000);
        </code></pre>
        <p>Explanation: The <code>setTimeout</code> function executes code after a specified delay, and the <code>setInterval</code> function executes code repeatedly at specified intervals.</p>
        <h3>Real-Life Example</h3>
        <p>Use asynchronous JavaScript to fetch data from an API:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Asynchronous JavaScript&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;button id="fetchButton"&gt;Fetch Data&lt;/button&gt;
    &lt;pre id="data"&gt;&lt;/pre&gt;
    &lt;script&gt;
        document.getElementById('fetchButton').addEventListener('click', function() {
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('data').textContent = JSON.stringify(data, null, 2);
                });
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 1</h3>
        <p>Create a JavaScript program that uses <code>setTimeout</code> to display a message after 3 seconds.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;setTimeout Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        setTimeout(function() {
            alert('This message is shown after 3 seconds');
        }, 3000);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 2</h3>
        <p>Create a JavaScript program that uses <code>setInterval</code> to update the current time on the webpage every second.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;setInterval Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;p id="time"&gt;&lt;/p&gt;
    &lt;script&gt;
        setInterval(function() {
            let currentTime = new Date().toLocaleTimeString();
            document.getElementById('time').textContent = 'Current Time: ' + currentTime;
        }, 1000);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'promises',
    title: 'Promises and Async/Await',
    content: `
      <section id="promises">
        <h2>Promises and Async/Await</h2>
        <p>Promises are used to handle asynchronous operations in JavaScript. The <code>async</code> and <code>await</code> keywords provide a cleaner syntax to work with promises.</p>
        <h3>Using Promises</h3>
        <p>Example:</p>
        <pre><code>// Using Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    });
}

fetchData().then(data => console.log(data));
        </code></pre>
        <p>Explanation: Promises represent a value that may be available now, or in the future, or never. The <code>then</code> method is used to handle the resolved value of the promise.</p>
        <h3>Using async/await</h3>
        <p>Example:</p>
        <pre><code>// Using async/await
async function fetchAsyncData() {
    let data = await fetchData();
    console.log(data);
}

fetchAsyncData();
        </code></pre>
        <p>Explanation: The <code>async</code> function and <code>await</code> keyword allow you to write asynchronous code that looks synchronous.</p>
        <h3>Real-Life Example</h3>
        <p>Use async/await to fetch data from an API:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Async/Await Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;button id="fetchButton"&gt;Fetch Data&lt;/button&gt;
    &lt;pre id="data"&gt;&lt;/pre&gt;
    &lt;script&gt;
        document.getElementById('fetchButton').addEventListener('click', async function() {
            let response = await fetch('https://api.example.com/data');
            let data = await response.json();
            document.getElementById('data').textContent = JSON.stringify(data, null, 2);
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 1</h3>
        <p>Create a JavaScript program that uses a promise to simulate fetching data from a server and displays the result.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Promise Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        function fetchData() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Data fetched');
                }, 2000);
            });
        }

        fetchData().then(data => alert(data));
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 2</h3>
        <p>Create a JavaScript program that uses async/await to fetch data from a public API and displays it on the webpage.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Async/Await Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;button id="fetchButton"&gt;Fetch Data&lt;/button&gt;
    &lt;pre id="data"&gt;&lt;/pre&gt;
    &lt;script&gt;
        document.getElementById('fetchButton').addEventListener('click', async function() {
            let response = await fetch('https://api.publicapis.org/entries');
            let data = await response.json();
            document.getElementById('data').textContent = JSON.stringify(data.entries, null, 2);
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'fetch',
    title: 'APIs and Fetch',
    content: `
      <section id="fetch">
        <h2>APIs and Fetch</h2>
        <p>APIs (Application Programming Interfaces) allow you to interact with other software programs. The Fetch API provides a simple interface for fetching resources asynchronously.</p>
        <h3>Fetching Data</h3>
        <p>Example:</p>
        <pre><code>// Fetching data from an API
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Using async/await with Fetch
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
        </code></pre>
        <p>Explanation: The Fetch API allows you to make network requests similar to XMLHttpRequest (XHR). It returns a promise that resolves to the response of the request.</p>
        <h3>Real-Life Example</h3>
        <p>Use the Fetch API to get data from a public API and display it on the webpage:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Fetch API Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;button id="fetchButton"&gt;Fetch Data&lt;/button&gt;
    &lt;pre id="data"&gt;&lt;/pre&gt;
    &lt;script&gt;
        document.getElementById('fetchButton').addEventListener('click', function() {
            fetch('https://api.publicapis.org/entries')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('data').textContent = JSON.stringify(data.entries, null, 2);
                });
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 1</h3>
        <p>Create a JavaScript program that uses the Fetch API to retrieve data from a public API and displays it on the webpage.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Fetch API Assignment&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;button id="fetchButton"&gt;Fetch Data&lt;/button&gt;
    &lt;pre id="data"&gt;&lt;/pre&gt;
    &lt;script&gt;
        document.getElementById('fetchButton').addEventListener('click', function() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('data').textContent = JSON.stringify(data, null, 2);
                });
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 2</h3>
        <p>Create a JavaScript program that uses the Fetch API to post data to a server and displays the response.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Fetch API Post Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;button id="postButton"&gt;Post Data&lt;/button&gt;
    &lt;pre id="response"&gt;&lt;/pre&gt;
    &lt;script&gt;
        document.getElementById('postButton').addEventListener('click', function() {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('response').textContent = JSON.stringify(data, null, 2);
            });
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'error',
    title: 'Error Handling',
    content: `
      <section id="error">
        <h2>Error Handling</h2>
        <p>Error handling in JavaScript allows you to catch and handle runtime errors. The <code>try</code>, <code>catch</code>, and <code>finally</code> statements are used for error handling.</p>
        <h3>try, catch, and finally</h3>
        <p>Example:</p>
        <pre><code>// Using try, catch, and finally
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error('Error:', error.message);
} finally {
    console.log('This runs regardless of the result');
}

// Throwing custom errors
function riskyOperation() {
    throw new Error('Something went wrong!');
}
        </code></pre>
        <p>Explanation: The <code>try</code> block contains code that may throw an error, the <code>catch</code> block handles the error, and the <code>finally</code> block contains code that runs regardless of whether an error occurred.</p>
        <h3>Real-Life Example</h3>
        <p>Use error handling to manage potential issues in a form submission:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Error Handling Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;form id="myForm"&gt;
        &lt;input type="text" id="name" placeholder="Enter your name" required&gt;
        &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
    &lt;script&gt;
        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault();
            try {
                let name = document.getElementById('name').value;
                if (!name) {
                    throw new Error('Name is required');
                }
                alert('Form submitted successfully');
            } catch (error) {
                alert('Error: ' + error.message);
            } finally {
                document.getElementById('name').value = '';
            }
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 1</h3>
        <p>Create a JavaScript program that includes a form with error handling to ensure all required fields are filled out before submission.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Form Validation&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;form id="myForm"&gt;
        &lt;input type="text" id="name" placeholder="Enter your name" required&gt;
        &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
    &lt;script&gt;
        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault();
            try {
                let name = document.getElementById('name').value;
                if (!name) {
                    throw new Error('Name is required');
                }
                alert('Form submitted successfully');
            } catch (error) {
                alert
                ('Error: ' + error.message);
            } finally {
                document.getElementById('name').value = '';
            }
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment 2</h3>
        <p>Create a JavaScript program that handles errors during an API fetch request and displays an appropriate error message to the user.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;API Error Handling&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;button id="fetchButton"&gt;Fetch Data&lt;/button&gt;
    &lt;pre id="data"&gt;&lt;/pre&gt;
    &lt;script&gt;
        document.getElementById('fetchButton').addEventListener('click', function() {
            fetch('https://api.invalidurl.com/data')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    document.getElementById('data').textContent = JSON.stringify(data, null, 2);
                })
                .catch(error => {
                    document.getElementById('data').textContent = 'Error: ' + error.message;
                });
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'advanced',
    title: 'Advanced Topics',
    content: `
      <section id="advanced">
        <h2>Advanced Topics</h2>
        <p>This section covers advanced JavaScript topics such as closures, the event loop, and ES6 features.</p>
        <h3>Closures</h3>
        <p>A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.</p>
        <pre><code>function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');
        </code></pre>
        <h3>Event Loop</h3>
        <p>The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.</p>
        <pre><code>console.log('Start');

setTimeout(function() {
    console.log('Timeout');
}, 0);

Promise.resolve().then(function() {
    console.log('Promise');
});

console.log('End');
        </code></pre>
        <h3>ES6 Features</h3>
        <p>ES6 introduced several new features including let and const, arrow functions, template literals, and classes.</p>
        <h3>Example of Closure</h3>
        <pre><code>function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');
        </code></pre>
        <h3>Example of Event Loop</h3>
        <pre><code>console.log('Start');

setTimeout(function() {
    console.log('Timeout');
}, 0);

Promise.resolve().then(function() {
    console.log('Promise');
});

console.log('End');
        </code></pre>
        <h3>Example of ES6 Features</h3>
        <pre><code>// let and const
let x = 10;
const y = 20;

// Arrow functions
const add = (a, b) => a + b;

// Template literals
const greeting = \`Hello, \${name}!\`;

// Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(\`Hello, my name is \${this.name}\`);
    }
}
        </code></pre>
        <h3>Assignment 1</h3>
        <p>Research and implement a project that uses closures, the event loop, and ES6 features to build a small JavaScript application.</p>
        <h3>Assignment 2</h3>
        <p>Create a JavaScript program that demonstrates the use of closures, the event loop, and ES6 features.</p>
      </section>`
  },
  {
    id: 'frameworks',
    title: 'JavaScript Frameworks',
    content: `
    <section id="frameworks">
        <h2>JavaScript Frameworks</h2>
        <p>JavaScript frameworks are tools that make it easier to build complex, interactive web applications. They provide structure and reusable components, allowing developers to focus on building functionality rather than dealing with repetitive tasks.</p>
        
        <h3>Overview of Popular JavaScript Frameworks</h3>
        
        <h4>React</h4>
        <p>React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components and manage the state of their applications efficiently.</p>
        <ul>
            <li><strong>Key Features:</strong> Component-based architecture, Virtual DOM, Unidirectional data flow</li>
            <li><strong>Getting Started:</strong></li>
        </ul>
        <pre><code>// Example: React Component
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        &lt;div&gt;
            &lt;h1&gt;Hello, React!&lt;/h1&gt;
        &lt;/div&gt;
    );
}

ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));
        </code></pre>
        <p>To get started with React, you'll need to set up a development environment using tools like Create React App or Next.js.</p>
        
        <h4>Angular</h4>
        <p>Angular is a platform for building mobile and desktop web applications, developed by Google. It uses TypeScript and provides a comprehensive framework for building scalable applications.</p>
        <ul>
            <li><strong>Key Features:</strong> Two-way data binding, Dependency injection, Component-based architecture</li>
            <li><strong>Getting Started:</strong></li>
        </ul>
        <pre><code>// Example: Angular Component
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '&lt;h1&gt;Hello, Angular!&lt;/h1&gt;',
})
export class AppComponent {}
        </code></pre>
        <p>To get started with Angular, you'll need to set up a development environment using Angular CLI.</p>
        
        <h4>Vue</h4>
        <p>Vue is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable and focuses on the view layer.</p>
        <ul>
            <li><strong>Key Features:</strong> Reactive data binding, Component-based architecture, Simple and flexible API</li>
            <li><strong>Getting Started:</strong></li>
        </ul>
        <pre><code>// Example: Vue Component
import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue!'
    },
    template: '&lt;div&gt;&lt;h1&gt;{{ message }}&lt;/h1&gt;&lt;/div&gt;'
});
        </code></pre>
        <p>To get started with Vue, you'll need to set up a development environment using Vue CLI.</p>
        
        <h4>Svelte</h4>
        <p>Svelte is a radical new approach to building user interfaces. It shifts the work from the browser to the build step, resulting in highly optimized JavaScript code.</p>
        <ul>
            <li><strong>Key Features:</strong> Compile-time optimizations, No virtual DOM, Highly efficient</li>
            <li><strong>Getting Started:</strong></li>
        </ul>
        <pre><code>// Example: Svelte Component
&lt;script&gt;
    let message = 'Hello, Svelte!';
&lt;/script&gt;

&lt;h1&gt;{message}&lt;/h1&gt;
        </code></pre>
        <p>To get started with Svelte, you'll need to set up a development environment using SvelteKit or another build tool like Rollup or Webpack.</p>
        
        <h3>Assignment 1: Getting Started with React</h3>
        <p>Create a simple React application that displays a list of items. Allow users to add and remove items from the list.</p>
        <pre><code>// Solution: React Application
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        setItems([...items, newItem]);
        setNewItem('');
    };

    const removeItem = (index) => {
        const newItems = items.filter((item, i) => i !== index);
        setItems(newItems);
    };

    return (
        &lt;div&gt;
            &lt;h1&gt;Item List&lt;/h1&gt;
            &lt;input 
                type="text" 
                value={newItem} 
                onChange={(e) => setNewItem(e.target.value)} 
            /&gt;
            &lt;button onClick={addItem}&gt;Add Item&lt;/button&gt;
            &lt;ul&gt;
                {items.map((item, index) => (
                    &lt;li key={index}&gt;
                        {item} &lt;button onClick={() => removeItem(index)}&gt;Remove&lt;/button&gt;
                    &lt;/li&gt;
                ))}
            &lt;/ul&gt;
        &lt;/div&gt;
    );
}

ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));
        </code></pre>
        
        <h3>Assignment 2: Getting Started with Vue</h3>
        <p>Create a simple Vue application that displays a counter. Allow users to increment and decrement the counter.</p>
        <pre><code>// Solution: Vue Application
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Vue Counter&lt;/title&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/vue@2"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="app"&gt;
        &lt;h1&gt;Counter: {{ counter }}&lt;/h1&gt;
        &lt;button @click="increment"&gt;Increment&lt;/button&gt;
        &lt;button @click="decrement"&gt;Decrement&lt;/button&gt;
    &lt;/div&gt;

    &lt;script&gt;
        new Vue({
            el: '#app',
            data: {
                counter: 0
            },
            methods: {
                increment() {
                    this.counter++;
                },
                decrement() {
                    this.counter--;
                }
            }
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
    </section>`
},
{
    id: 'intro-to-react',
    title: 'Introduction to React',
    content: `
    <section id="intro-to-react">
        <h2>Introduction to React</h2>
        <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React allows developers to create large web applications that can update and render efficiently in response to data changes.</p>
        
        <h3>Why React?</h3>
        <p>React is popular for several reasons:</p>
        <ul>
            <li><strong>Component-Based:</strong> React encourages the use of reusable components, making your code more modular and easier to maintain.</li>
            <li><strong>Virtual DOM:</strong> React uses a virtual DOM to improve performance by minimizing the number of DOM manipulations.</li>
            <li><strong>Declarative:</strong> React's declarative nature makes it easier to reason about your application and debug issues.</li>
            <li><strong>Community and Ecosystem:</strong> React has a large community and a rich ecosystem of tools and libraries.</li>
        </ul>
        
        <h3>Setting Up React</h3>
        <p>You can set up a React project using Create React App, which is a comfortable environment for learning React and building a new single-page application.</p>
        <pre><code>// Install Create React App globally
npm install -g create-react-app

// Create a new React project
create-react-app my-react-app

// Navigate into the project directory
cd my-react-app

// Start the development server
npm start
        </code></pre>
        
        <h3>Basic React Concepts</h3>
        
        <h4>Components</h4>
        <p>Components are the building blocks of a React application. They are JavaScript functions or classes that optionally accept inputs (props) and return React elements that describe what should appear on the screen.</p>
        <pre><code>// Example: Functional Component
import React from 'react';

function Greeting(props) {
    return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

export default Greeting;

// Example: Class Component
import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        return &lt;h1&gt;Hello, {this.props.name}!&lt;/h1&gt;;
    }
}

export default Greeting;
        </code></pre>
        
        <h4>JSX</h4>
        <p>JSX is a syntax extension for JavaScript that looks similar to HTML. It is used with React to describe what the UI should look like. Babel compiles JSX down to React.createElement() calls.</p>
        <pre><code>// Example: JSX
import React from 'react';

function App() {
    return (
        &lt;div&gt;
            &lt;h1&gt;Welcome to React&lt;/h1&gt;
            &lt;p&gt;This is a simple React application.&lt;/p&gt;
        &lt;/div&gt;
    );
}

export default App;
        </code></pre>
        
        <h4>Props</h4>
        <p>Props (short for properties) are read-only attributes used to pass data from one component to another. They are passed to the component in a manner similar to HTML attributes.</p>
        <pre><code>// Example: Using Props
import React from 'react';

function Greeting(props) {
    return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

function App() {
    return &lt;Greeting name="Alice" /&gt;;
}

export default App;
        </code></pre>
        
        <h4>State</h4>
        <p>State is a built-in object that allows components to create and manage their own data. State is used to store information that can change over the lifetime of a component.</p>
        <pre><code>// Example: Using State
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        &lt;div&gt;
            &lt;p&gt;Count: {count}&lt;/p&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
        &lt;/div&gt;
    );
}

export default Counter;
        </code></pre>
        
        <h3>Real-Life Example</h3>
        <p>Let's create a simple React application that displays a list of tasks. Users can add new tasks and mark tasks as completed.</p>
        <pre><code>// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        &lt;div className="App"&gt;
            &lt;h1&gt;Task List&lt;/h1&gt;
            &lt;input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            /&gt;
            &lt;button onClick={addTask}&gt;Add Task&lt;/button&gt;
            &lt;ul&gt;
                {tasks.map((task, index) => (
                    &lt;li
                        key={index}
                        onClick={() => toggleTask(index)}
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    &gt;
                        {task.text}
                    &lt;/li&gt;
                ))}
            &lt;/ul&gt;
        &lt;/div&gt;
    );
}

export default App;

// src/App.css
.App {
    text-align: center;
}

input {
    margin-right: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    cursor: pointer;
    margin: 5px 0;
}
        </code></pre>
        
        <h3>Assignment 1: Getting Started with React</h3>
        <p>Create a simple React application that displays a greeting message. The user should be able to enter their name, and the greeting message should update accordingly.</p>
        <pre><code>// src/App.js
import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');

    return (
        &lt;div className="App"&gt;
            &lt;h1&gt;Greeting&lt;/h1&gt;
            &lt;input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            /&gt;
            &lt;p&gt;Hello, {name}!&lt;/p&gt;
        &lt;/div&gt;
    );
}

export default App;
        </code></pre>
        
        <h3>Assignment 2: Creating a Counter</h3>
        <p>Create a simple React application that displays a counter. The user should be able to increment and decrement the counter using buttons.</p>
        <pre><code>// src/App.js
import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        &lt;div className="App"&gt;
            &lt;h1&gt;Counter&lt;/h1&gt;
            &lt;p&gt;Count: {count}&lt;/p&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
            &lt;button onClick={() => setCount(count - 1)}&gt;Decrement&lt;/button&gt;
        &lt;/div&gt;
    );
}

export default App;
        </code></pre>
    </section>`
},
{
    id: 'components-and-state',
    title: 'React Components and State',
    content: `
    <section id="components-and-state">
        <h2>React Components and State</h2>
        <p>In React, components are the building blocks of the user interface. State is a built-in object that allows components to create and manage their own data. Understanding components and state is essential for building dynamic and interactive React applications.</p>
        
        <h3>React Components</h3>
        <p>Components in React can be either functional or class-based. They allow you to split the UI into independent, reusable pieces.</p>
        
        <h4>Functional Components</h4>
        <p>Functional components are simple JavaScript functions that accept props as arguments and return React elements.</p>
        <pre><code>// Example: Functional Component
import React from 'react';

function Greeting(props) {
    return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

export default Greeting;
        </code></pre>
        
        <h4>Class Components</h4>
        <p>Class components are ES6 classes that extend the <code>React.Component</code> class. They have a render method that returns React elements.</p>
        <pre><code>// Example: Class Component
import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        return &lt;h1&gt;Hello, {this.props.name}!&lt;/h1&gt;;
    }
}

export default Greeting;
        </code></pre>
        
        <h4>Props</h4>
        <p>Props (short for properties) are read-only attributes used to pass data from one component to another. They are passed to the component in a manner similar to HTML attributes.</p>
        <pre><code>// Example: Using Props
import React from 'react';

function Greeting(props) {
    return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

function App() {
    return &lt;Greeting name="Alice" /&gt;;
}

export default App;
        </code></pre>
        
        <h3>State</h3>
        <p>State is a built-in object that allows components to create and manage their own data. State is used to store information that can change over the lifetime of a component.</p>
        
        <h4>Using State in Functional Components</h4>
        <p>Functional components use the <code>useState</code> hook to manage state.</p>
        <pre><code>// Example: Using State in Functional Component
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        &lt;div&gt;
            &lt;p&gt;Count: {count}&lt;/p&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
        &lt;/div&gt;
    );
}

export default Counter;
        </code></pre>
        
        <h4>Using State in Class Components</h4>
        <p>Class components manage state using the <code>this.state</code> object and the <code>setState</code> method.</p>
        <pre><code>// Example: Using State in Class Component
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            &lt;div&gt;
                &lt;p&gt;Count: {this.state.count}&lt;/p&gt;
                &lt;button onClick={this.increment}&gt;Increment&lt;/button&gt;
            &lt;/div&gt;
        );
    }
}

export default Counter;
        </code></pre>
        
        <h3>Real-Life Example</h3>
        <p>Let's create a simple React application that manages a list of tasks. Users can add new tasks and mark tasks as completed. We'll use state to manage the tasks and their completion status.</p>
        <pre><code>// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        &lt;div className="App"&gt;
            &lt;h1&gt;Task List&lt;/h1&gt;
            &lt;input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task"
            /&gt;
            &lt;button onClick={addTask}&gt;Add Task&lt;/button&gt;
            &lt;ul&gt;
                {tasks.map((task, index) => (
                    &lt;li
                        key={index}
                        onClick={() => toggleTask(index)}
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    &gt;
                        {task.text}
                    &lt;/li&gt;
                ))}
            &lt;/ul&gt;
        &lt;/div&gt;
    );
}

export default App;

// src/App.css
.App {
    text-align: center;
}

input {
    margin-right: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    cursor: pointer;
    margin: 5px 0;
}
        </code></pre>
        
        <h3>Assignment 1: Creating a Greeting Component</h3>
        <p>Create a simple React application that displays a greeting message. The user should be able to enter their name, and the greeting message should update accordingly.</p>
        <pre><code>// src/App.js
import React, { useState } from 'react';

function Greeting(props) {
    return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

function App() {
    const [name, setName] = useState('');

    return (
        &lt;div className="App"&gt;
            &lt;input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            /&gt;
            &lt;Greeting name={name} /&gt;
        &lt;/div&gt;
    );
}

export default App;
        </code></pre>
        
        <h3>Assignment 2: Creating a Counter Component</h3>
        <p>Create a simple React application that displays a counter. The user should be able to increment and decrement the counter using buttons.</p>
        <pre><code>// src/App.js
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        &lt;div className="App"&gt;
            &lt;p&gt;Count: {count}&lt;/p&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
            &lt;button onClick={() => setCount(count - 1)}&gt;Decrement&lt;/button&gt;
        &lt;/div&gt;
    );
}

export default Counter;
        </code></pre>
    </section>`
},
{
    id: 'react-hooks',
    title: 'React Hooks',
    content: `
    <section id="react-hooks">
        <h2>React Hooks</h2>
        <p>React Hooks are functions that let you use state and other React features in functional components. </p>
        <p>Hooks were introduced in React 16.8 and have become a fundamental part of modern React development.</p>
        
        <h3>Basic Hooks</h3>
        
        <h4>useState</h4>
        <p>The <code>useState</code> hook lets you add state to functional components.</p> 
        <p>It returns an array with two elements: the current state value and a function to update it.</p>
        <pre><code>// Example: useState
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        &lt;div&gt;
            &lt;p&gt;Count: {count}&lt;/p&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
        &lt;/div&gt;
    );
}

export default Counter;
        </code></pre>
        
        <h4>useEffect</h4>
        <p>The <code>useEffect</code> hook lets you perform side effects in functional components,
        such as fetching data, updating the DOM, and setting up subscriptions. 
        <p>It runs after every render by default.</p>
        <pre><code>// Example: useEffect
import React, { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        &lt;div&gt;
            &lt;p&gt;Timer: {count}&lt;/p&gt;
        &lt;/div&gt;
    );
}

export default Timer;
        </code></pre>
        
        <h4>useContext</h4>
        <p>The <code>useContext</code> hook lets you access the value of a context directly in a functional component. </p>
        <p>It allows you to share state and functions across components without passing props down manually.</p>
        <pre><code>// Example: useContext
import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();

function ThemedComponent() {
    const theme = useContext(ThemeContext);
    return &lt;div style={{ background: theme.background, color: theme.color }}&gt;Themed Component&lt;/div&gt;;
}

function App() {
    const [theme, setTheme] = useState({ background: 'black', color: 'white' });

    return (
        &lt;ThemeContext.Provider value={theme}&gt;
            &lt;ThemedComponent /&gt;
        &lt;/ThemeContext.Provider&gt;
    );
}

export default App;
        </code></pre>
        
        <h3>Advanced Hooks</h3>
        
        <h4>useReducer</h4>
        <p>The <code>useReducer</code> hook is an alternative to <code>useState</code> for managing complex state logic. </p>
        <p>It is particularly useful when the state depends on previous state values.</p>
        <pre><code>// Example: useReducer
import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        &lt;div&gt;
            &lt;p&gt;Count: {state.count}&lt;/p&gt;
            &lt;button onClick={() => dispatch({ type: 'increment' })}&gt;Increment&lt;/button&gt;
            &lt;button onClick={() => dispatch({ type: 'decrement' })}&gt;Decrement&lt;/button&gt;
        &lt;/div&gt;
    );
}

export default Counter;
        </code></pre>
        
        <h4>useRef</h4>
        <p>The <code>useRef</code> hook lets you persist values across renders without causing a re-render.</p>
        <p> It is often used to access and interact with DOM elements directly.</p>
        <pre><code>// Example: useRef
import React, { useRef } from 'react';

function TextInput() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        &lt;div&gt;
            &lt;input ref={inputRef} type="text" /&gt;
            &lt;button onClick={focusInput}&gt;Focus Input&lt;/button&gt;
        &lt;/div&gt;
    );
}

export default TextInput;
        </code></pre>
        
        <h4>useMemo</h4>
        <p>The <code>useMemo</code> hook lets you memoize expensive calculations, so they are only re-calculated when one of the dependencies changes.</p>
        <pre><code>// Example: useMemo
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ number }) {
    const compute = (num) => {
        console.log('Computing...');
        return num * 2;
    };

    const result = useMemo(() => compute(number), [number]);

    return &lt;div&gt;Result: {result}&lt;/div&gt;;
}

function App() {
    const [number, setNumber] = useState(1);

    return (
        &lt;div&gt;
            &lt;input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            /&gt;
            &lt;ExpensiveCalculation number={number} /&gt;
        &lt;/div&gt;
    );
}

export default App;
        </code></pre>
        
        <h4>useCallback</h4>
        <p>The <code>useCallback</code> hook lets you memoize functions, so they are only re-created when one of the dependencies changes.</p>
        <p> This is useful for optimizing performance in certain scenarios.</p>
        <pre><code>// Example: useCallback
import React, { useState, useCallback } from 'react';

function List({ getItems }) {
    const items = getItems();

    return (
        &lt;ul&gt;
            {items.map((item, index) => (
                &lt;li key={index}&gt;{item}&lt;/li&gt;
            ))}
        &lt;/ul&gt;
    );
}

function App() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    };

    return (
        &lt;div style={theme}&gt;
            &lt;input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            /&gt;
            &lt;button onClick={() => setDark(prevDark => !prevDark)}&gt;Toggle Theme&lt;/button&gt;
            &lt;List getItems={getItems} /&gt;
        &lt;/div&gt;
    );
}

export default App;
        </code></pre>
        
        <h3>Real-Life Example</h3>
        <p>Let's create a simple React application that fetches and displays a list of users from an API using hooks.</p>
        <pre><code>// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    return (
        &lt;div className="App"&gt;
            &lt;h1&gt;User List&lt;/h1&gt;
            {loading ? (
                &lt;p&gt;Loading...&lt;/p&gt;
            ) : (
                &lt;ul&gt;
                    {users.map(user => (
                        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
                    ))}
                &lt;/ul&gt;
            )}
        &lt;/div&gt;
    );
}

export default App;

// src/App.css
.App {
    text-align: center;
}

ul {
    list-style-type: none;
    padding: 0;
}
        </code></pre>
        
        <h3>Assignment 1: Using useState and useEffect</h3>
        <p>Create a simple React application that displays a list of posts from an API. </p>
        <p>Allow users to refresh the list of posts using a button.</p>
        <pre><code>// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        &lt;div className="App"&gt;
            &lt;h1&gt;Post List&lt;/h1&gt;
            &lt;button onClick={fetchPosts}&gt;Refresh Posts&lt;/button&gt;
            {loading ? (
                &lt;p&gt;Loading...&lt;/p&gt;
            ) : (
                &lt;ul&gt;
                    {posts.map(post => (
                        &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
                    ))}
                &lt;/ul&gt;
            )}
        &lt;/div&gt;
    );
}

export default App;
        </code></pre>
        
        <h3>Assignment 2: Using useContext</h3>
        <p>Create a simple React application that uses the Context API to manage and display a theme (light or dark).
        <p> Allow users to toggle the theme using a button.</p>
        <pre><code>// src/App.js
import React, { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        &lt;button style={{ background: theme.background, color: theme.color }}&gt;Themed Button&lt;/button&gt;
    );
}

function App() {
    const [dark, setDark] = useState(false);

    const theme = {
        background: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    };

    return (
        &lt;ThemeContext.Provider value={theme}&gt;
            &lt;div style={{ background: theme.background, color: theme.color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}&gt;
                &lt;h1&gt;Context API Theme&lt;/h1&gt;
                &lt;button onClick={() => setDark(prevDark => !prevDark)}&gt;Toggle Theme&lt;/button&gt;
                &lt;ThemedButton /&gt;
            &lt;/div&gt;
        &lt;/ThemeContext.Provider&gt;
    );
}

export default App;
        </code></pre>
    </section>`
},

{
    id: 'state-management-redux',
    title: 'State Management with Redux ',
    content: `
    <section id="state-management-redux">
        <h2>State Management with Redux in JavaScript</h2>
        <p>Redux is a popular state management library for JavaScript applications, especially when using frameworks like React. It helps manage the state of your application in a predictable way.</p>
        
        <h3>Basic Concepts of Redux</h3>
        <ul>
            <li><strong>Store:</strong> The single source of truth that holds the state of your application.</li>
            <li><strong>Actions:</strong> Plain JavaScript objects that describe what happened in your application. Actions have a type property and may have a payload.</li>
            <li><strong>Reducers:</strong> Functions that determine how the state changes in response to actions. Reducers are pure functions that take the current state and an action as arguments and return a new state.</li>
            <li><strong>Dispatch:</strong> A method that allows you to send actions to the Redux store.</li>
            <li><strong>Selectors:</strong> Functions that select and derive data from the store.</li>
        </ul>
        
        <h3>Setting Up Redux</h3>
        <p>To get started with Redux, you need to install the Redux and React-Redux packages.</p>
        <pre><code>// Install Redux and React-Redux
npm install redux react-redux
        </code></pre>
        
        <h3>Creating Actions</h3>
        <p>Actions are plain JavaScript objects that represent a change in the state. They have a type property and may have a payload.</p>
        <pre><code>// src/actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});
        </code></pre>
        
        <h3>Creating Reducers</h3>
        <p>Reducers are functions that determine how the state changes in response to actions. They are pure functions that take the current state and an action as arguments and return a new state.</p>
        <pre><code>// src/reducers.js
import { INCREMENT, DECREMENT } from './actions';

const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default counterReducer;
        </code></pre>
        
        <h3>Creating the Store</h3>
        <p>The store is the single source of truth for your application's state. You create a store by passing a reducer to the createStore function.</p>
        <pre><code>// src/store.js
import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default store;
        </code></pre>
        
        <h3>Connecting React to Redux</h3>
        <p>To connect React to Redux, you need to use the Provider component from React-Redux to pass the store to your React components.</p>
        <pre><code>// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
    &lt;Provider store={store}&gt;
        &lt;App /&gt;
    &lt;/Provider&gt;,
    document.getElementById('root')
);
        </code></pre>
        
        <h3>Using Redux State and Dispatching Actions</h3>
        <p>You can use the useSelector hook to access the Redux state and the useDispatch hook to dispatch actions from your React components.</p>
        <pre><code>// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        &lt;div&gt;
            &lt;h1&gt;Count: {count}&lt;/h1&gt;
            &lt;button onClick={() => dispatch(increment())}&gt;Increment&lt;/button&gt;
            &lt;button onClick={() => dispatch(decrement())}&gt;Decrement&lt;/button&gt;
        &lt;/div&gt;
    );
}

export default App;
        </code></pre>
        
        <h3>Real-Life Example</h3>
        <p>Let's create a simple counter application with Redux. The application will have two buttons to increment and decrement the counter.</p>
        <pre><code>// src/actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

// src/reducers.js
import { INCREMENT, DECREMENT } from './actions';

const initialState = {
    count: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default counterReducer;

// src/store.js
import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default store;

// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        &lt;div&gt;
            &lt;h1&gt;Count: {count}&lt;/h1&gt;
            &lt;button onClick={() => dispatch(increment())}&gt;Increment&lt;/button&gt;
            &lt;button onClick={() => dispatch(decrement())}&gt;Decrement&lt;/button&gt;
        &lt;/div&gt;
    );
}

export default App;

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
    &lt;Provider store={store}&gt;
        &lt;App /&gt;
    &lt;/Provider&gt;,
    document.getElementById('root')
);
        </code></pre>
        
        <h3>Assignment 1: Creating a Todo App with Redux</h3>
        <p>Create a simple Todo application using Redux. The application should have the following features:</p>
        <ul>
            <li>Add a new Todo item</li>
            <li>Toggle the completion status of a Todo item</li>
            <li>Delete a Todo item</li>
        </ul>
        <p>Use actions, reducers, and the Redux store to manage the state of the Todo application. Use React components to display the Todo items and provide user interactions.</p>
    </section>`
},



];

const JavaScriptCourse = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.pageYOffset > 300);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const renderSectionContent = (section) => {
      if (section.id === activeSection) {
        return (
          <div key={section.id} dangerouslySetInnerHTML={{ __html: section.content }} />
        );
      }
      if (section.subSections) {
        return section.subSections.map(subSection => (
          activeSection === subSection.id && (
            <div key={subSection.id} dangerouslySetInnerHTML={{ __html: subSection.content }} />
          )
        ));
      }
      return null;
    };
  
    const handleSectionChange = (sectionId) => {
      setActiveSection(sectionId);
      setIsSidebarOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
        <HelmetProvider>
      <div className="javascript-course">
        <Helmet>
        <title>Master JavaScript - From Basics to Advanced Web Development | U-Learn Tech</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Learn JavaScript from fundamentals to advanced concepts. Build interactive, dynamic web applications with our comprehensive JavaScript course at U-Learn Tech." />
      <meta name="keywords" content="JavaScript, ES6+, DOM Manipulation, Asynchronous JavaScript, React, Node.js, U-Learn Tech" />
      <meta name="author" content="U-Learn Tech" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ulearntech.com/courses/javascript-programming" />
      <meta property="og:title" content="Master JavaScript - From Basics to Advanced Web Development | U-Learn Tech" />
      <meta property="og:description" content="Learn JavaScript from fundamentals to advanced concepts. Build interactive, dynamic web applications with our comprehensive JavaScript course at U-Learn Tech." />
      <meta property="og:image" content="https://www.ulearntech.com/images/javascript-course-og.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.ulearntech.com/courses/javascript-programming" />
      <meta name="twitter:title" content="Master JavaScript - From Basics to Advanced Web Development | U-Learn Tech" />
      <meta name="twitter:description" content="Learn JavaScript from fundamentals to advanced concepts. Build interactive, dynamic web applications with our comprehensive JavaScript course at U-Learn Tech." />
      <meta name="twitter:image" content="https://www.ulearntech.com/images/javascript-course-twitter.jpg" />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Course",
          "name": "Master JavaScript - From Basics to Advanced Web Development",
          "description": "Learn JavaScript from fundamentals to advanced concepts. Build interactive, dynamic web applications with our comprehensive JavaScript course.",
          "provider": {
            "@type": "Organization",
            "name": "U-Learn Tech",
            "sameAs": "https://www.u-learntech.com"
          },
          "url": "https://www.u-learntech.com/courses/javascript-programming",
          "courseCode": "JS101",
          "educationalLevel": "Beginner to Advanced",
          "programmingLanguage": "JavaScript",
          "teaches": [
            "JavaScript Fundamentals",
            "ES6+ Features",
            "DOM Manipulation",
            "Asynchronous JavaScript",
            "AJAX and Fetch API",
            "Object-Oriented JavaScript",
            "Functional Programming",
            "React Basics",
            "Node.js Introduction"
          ],
          "occupationalCategory": "Web Developer"
        })}
      </script>
        </Helmet>
        <Header />
        <button 
          className="sidebar-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="content-container">
          <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <h2>Contents</h2>
            <ul>
              {sections.map(section => (
                <li key={section.id}>
                  <button onClick={() => handleSectionChange(section.id)}>{section.title}</button>
                  {section.subSections && (
                    <ul>
                      {section.subSections.map(subSection => (
                        <li key={subSection.id}>
                          <button onClick={() => handleSectionChange(subSection.id)}>{subSection.title}</button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
  
          <div className="main-content">
            {sections.map(section => renderSectionContent(section))}
          </div>
        </div>
        {showScrollTop && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            <ArrowUp />
          </button>
        )}
      </div>
    </HelmetProvider>
    );
  };
  
  export default JavaScriptCourse;