import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowUp, Menu, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Button from '../components/ui/button';
import { Code } from 'lucide-react';
import './ph.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const sections = [
    {
        id: 'introduction',
        title: 'Introduction ',
        content: `
        <section id="introduction">
        
      </section>
    `
    },
    {
        id: 'variables',
        title: 'Variables',
        content: `
          <section id="variables">
            <h2>Variables in PHP</h2>
      
            <h3>Introduction</h3>
            <p>Variables in PHP are used to store data that can be manipulated and retrieved throughout the script. PHP is a loosely typed language, which means you do not need to declare the data type of a variable. Instead, the type is determined by the value assigned to the variable. Variables in PHP are identified by a dollar sign (<code>$</code>) followed by the variable name.</p>
      
            <h3>Why Use Variables?</h3>
            <ul>
              <li><strong>Data Storage:</strong> Store data that can be used and manipulated later in the script.</li>
              <li><strong>Code Reusability:</strong> Reuse the same value in multiple places without hardcoding it.</li>
              <li><strong>Maintainability:</strong> Make it easier to update values used in multiple places by changing the variable's value once.</li>
              <li><strong>Readability:</strong> Make code more readable by using meaningful variable names.</li>
            </ul>
      
            <h3>Declaring Variables</h3>
            <p>In PHP, a variable is declared using the <code>$</code> sign followed by the variable name. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            $name = "John Doe";   // String variable
            $age = 30;            // Integer variable
            $is_student = true;   // Boolean variable
            $height = 1.75;       // Float variable
            ?>
            </code></pre>
      
            <h3>Variable Naming Rules</h3>
            <ul>
              <li>Variable names must start with a letter or an underscore (<code>_</code>).</li>
              <li>Variable names cannot start with a number.</li>
              <li>Variable names can contain letters, numbers, and underscores.</li>
              <li>Variable names are case-sensitive (<code>$name</code> and <code>$Name</code> are different variables).</li>
            </ul>
      
            <h3>Variable Types</h3>
            <p>PHP supports several data types, including:</p>
            <ul>
              <li><strong>String:</strong> A sequence of characters, enclosed in quotes.</li>
              <li><strong>Integer:</strong> A non-decimal number.</li>
              <li><strong>Float:</strong> A number with a decimal point.</li>
              <li><strong>Boolean:</strong> A value that can be either <code>true</code> or <code>false</code>.</li>
              <li><strong>Array:</strong> A collection of values.</li>
              <li><strong>Object:</strong> An instance of a class.</li>
              <li><strong>NULL:</strong> A variable with no value assigned.</li>
            </ul>
      
            <h3>String Variables</h3>
            <p>Strings can be created using single or double quotes. Double quotes allow variable interpolation, whereas single quotes do not. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            $greeting = 'Hello, World!';       // Using single quotes
            $name = "John Doe";                // Using double quotes
      
            // Double quotes allow variable interpolation
            echo "Hello, $name!";              // Output: Hello, John Doe!
            echo 'Hello, $name!';              // Output: Hello, $name!
            ?>
            </code></pre>
      
            <h3>Integer and Float Variables</h3>
            <p>Examples of integer and float variables:</p>
            <pre><code class="language-php">
            <?php
            $integer = 42;            // Integer variable
            $float = 3.14159;         // Float variable
      
            echo $integer;            // Output: 42
            echo $float;              // Output: 3.14159
            ?>
            </code></pre>
      
            <h3>Boolean Variables</h3>
            <p>Examples of boolean variables:</p>
            <pre><code class="language-php">
            <?php
            $is_admin = true;         // Boolean variable
            $is_guest = false;        // Boolean variable
      
            echo $is_admin;           // Output: 1 (true is displayed as 1)
            echo $is_guest;           // Output: (false is displayed as empty)
            ?>
            </code></pre>
      
            <h3>Array Variables</h3>
            <p>Arrays in PHP can be indexed or associative. Indexed arrays use numeric keys, while associative arrays use named keys. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            // Indexed array
            $colors = array("red", "green", "blue");
            echo $colors[0];           // Output: red
      
            // Associative array
            $person = array("name" => "John", "age" => 30);
            echo $person["name"];      // Output: John
            ?>
            </code></pre>
      
            <h3>NULL Variables</h3>
            <p>NULL is a special data type in PHP that represents a variable with no value assigned. A variable can be explicitly set to NULL, or it can be set to NULL by unsetting it.</p>
            <pre><code class="language-php">
            <?php
            $var = NULL;                // NULL variable
            echo $var;                  // Output: (nothing is displayed)
      
            $var = "Some value";
            unset($var);                // Unset the variable
            echo $var;                  // Output: (nothing is displayed)
            ?>
            </code></pre>
      
            <h3>Assignment 1: Basic Variables</h3>
            <p>Create a PHP script that declares variables of different types and prints their values.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $name = "Alice";
            $age = 25;
            $height = 1.65;
            $is_student = false;
      
            echo "Name: $name\n";
            echo "Age: $age\n";
            echo "Height: $height\n";
            echo "Is Student: $is_student\n";
            ?>
            </code></pre>
      
            <h3>Assignment 2: Working with Arrays</h3>
            <p>Create a PHP script that declares an indexed array and an associative array, and prints their values.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $fruits = array("apple", "banana", "cherry");
            $person = array("name" => "Bob", "age" => 28);
      
            echo "First fruit: " . $fruits[0] . "\n";
            echo "Person's name: " . $person["name"] . "\n";
            ?>
            </code></pre>
      
            <h3>Assignment 3: Using Boolean Variables</h3>
            <p>Create a PHP script that declares boolean variables and prints their values.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $is_logged_in = true;
            $has_access = false;
      
            echo "Is logged in: $is_logged_in\n";   // Output: 1
            echo "Has access: $has_access\n";       // Output: (nothing is displayed)
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Variables in PHP are a fundamental aspect of the language, enabling developers to store, manipulate, and retrieve data efficiently. Understanding how to declare and use variables correctly is crucial for effective PHP programming. Practice using different variable types and familiarize yourself with their behaviors to become proficient in PHP.</p>
          </section>
        `
      },
      
      {
        id: 'datatypes',
        title: 'Data Types',
        content: `
          <section id="datatypes">
            <h2>Data Types in PHP</h2>
      
            <h3>Introduction</h3>
            <p>Data types in PHP define the kind of data a variable can hold. PHP is a dynamically typed language, meaning that variables can change their type based on the assigned value. Understanding PHP data types is crucial for writing robust and error-free code.</p>
      
            <h3>Why Use Data Types?</h3>
            <ul>
              <li><strong>Data Validation:</strong> Ensure the correct type of data is being processed.</li>
              <li><strong>Memory Management:</strong> Efficiently manage memory usage by understanding data types.</li>
              <li><strong>Functionality:</strong> Use appropriate functions and operations for different data types.</li>
              <li><strong>Readability:</strong> Make code more readable and maintainable by using clear and appropriate data types.</li>
            </ul>
      
            <h3>PHP Data Types</h3>
            <p>PHP supports several data types, including:</p>
            <ul>
              <li><strong>String:</strong> A sequence of characters enclosed in quotes.</li>
              <li><strong>Integer:</strong> A non-decimal number.</li>
              <li><strong>Float:</strong> A number with a decimal point.</li>
              <li><strong>Boolean:</strong> A value that can be either <code>true</code> or <code>false</code>.</li>
              <li><strong>Array:</strong> A collection of values, which can be indexed or associative.</li>
              <li><strong>Object:</strong> An instance of a class containing data and functions.</li>
              <li><strong>NULL:</strong> A variable with no value assigned.</li>
              <li><strong>Resource:</strong> A reference to an external resource, such as a database connection.</li>
            </ul>
      
            <h3>String</h3>
            <p>Strings can be created using single or double quotes. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            $single_quote_string = 'Hello, World!';
            $double_quote_string = "Hello, World!";
            
            // Using double quotes for variable interpolation
            $name = "John";
            $greeting = "Hello, $name!";
            
            echo $single_quote_string;  // Output: Hello, World!
            echo $double_quote_string;  // Output: Hello, World!
            echo $greeting;             // Output: Hello, John!
            ?>
            </code></pre>
      
            <h3>Integer</h3>
            <p>Integers are whole numbers without a decimal point. Examples of integers include:</p>
            <pre><code class="language-php">
            <?php
            $positive_int = 42;
            $negative_int = -42;
            $zero = 0;
      
            echo $positive_int;  // Output: 42
            echo $negative_int;  // Output: -42
            echo $zero;          // Output: 0
            ?>
            </code></pre>
      
            <h3>Float</h3>
            <p>Floats, also known as doubles, are numbers with a decimal point. Examples of floats include:</p>
            <pre><code class="language-php">
            <?php
            $positive_float = 3.14;
            $negative_float = -3.14;
            $scientific_notation = 2.1e3;  // Equivalent to 2100
      
            echo $positive_float;        // Output: 3.14
            echo $negative_float;        // Output: -3.14
            echo $scientific_notation;   // Output: 2100
            ?>
            </code></pre>
      
            <h3>Boolean</h3>
            <p>Boolean values represent truth values and can be either <code>true</code> or <code>false</code>. Examples of booleans include:</p>
            <pre><code class="language-php">
            <?php
            $is_true = true;
            $is_false = false;
      
            echo $is_true;   // Output: 1 (true is displayed as 1)
            echo $is_false;  // Output: (false is displayed as empty)
            ?>
            </code></pre>
      
            <h3>Array</h3>
            <p>Arrays are collections of values and can be indexed or associative. Examples of arrays include:</p>
            <pre><code class="language-php">
            <?php
            // Indexed array
            $colors = array("red", "green", "blue");
      
            // Associative array
            $person = array("name" => "John", "age" => 30);
      
            echo $colors[0];           // Output: red
            echo $person["name"];      // Output: John
            ?>
            </code></pre>
      
            <h3>Object</h3>
            <p>Objects are instances of classes containing data and functions. Here's an example:</p>
            <pre><code class="language-php">
            <?php
            class Car {
                public $make;
                public $model;
      
                public function __construct($make, $model) {
                    $this->make = $make;
                    $this->model = $model;
                }
      
                public function display() {
                    return "This car is a $this->make $this->model.";
                }
            }
      
            $car = new Car("Toyota", "Corolla");
            echo $car->display();  // Output: This car is a Toyota Corolla.
            ?>
            </code></pre>
      
            <h3>NULL</h3>
            <p>NULL is a special data type that represents a variable with no value assigned. Examples of NULL variables include:</p>
            <pre><code class="language-php">
            <?php
            $var = NULL;                // NULL variable
            echo $var;                  // Output: (nothing is displayed)
      
            $var = "Some value";
            unset($var);                // Unset the variable
            echo $var;                  // Output: (nothing is displayed)
            ?>
            </code></pre>
      
            <h3>Resource</h3>
            <p>Resources are special variables that hold references to external resources. An example of a resource is a database connection:</p>
            <pre><code class="language-php">
            <?php
            $connection = mysqli_connect("localhost", "username", "password", "database");
      
            if ($connection) {
                echo "Connection successful!";
            } else {
                echo "Connection failed: " . mysqli_connect_error();
            }
            ?>
            </code></pre>
      
            <h3>Assignment 1: Basic Data Types</h3>
            <p>Create a PHP script that declares variables of different data types and prints their values.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $name = "Alice";
            $age = 25;
            $height = 1.65;
            $is_student = false;
            $favorite_colors = array("red", "green", "blue");
      
            echo "Name: $name\n";
            echo "Age: $age\n";
            echo "Height: $height\n";
            echo "Is Student: $is_student\n";
            echo "Favorite Colors: " . implode(", ", $favorite_colors) . "\n";
            ?>
            </code></pre>
      
            <h3>Assignment 2: Working with Arrays</h3>
            <p>Create a PHP script that declares an indexed array and an associative array, and prints their values.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $fruits = array("apple", "banana", "cherry");
            $person = array("name" => "Bob", "age" => 28);
      
            echo "First fruit: " . $fruits[0] . "\n";
            echo "Person's name: " . $person["name"] . "\n";
            ?>
            </code></pre>
      
            <h3>Assignment 3: Using Objects</h3>
            <p>Create a PHP class representing a book with properties for title and author, and a method to display the book details. Instantiate an object of the class and display its details.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            class Book {
                public $title;
                public $author;
      
                public function __construct($title, $author) {
                    $this->title = $title;
                    $this->author = $author;
                }
      
                public function display() {
                    return "Book: $this->title, Author: $this->author";
                }
            }
      
            $book = new Book("1984", "George Orwell");
            echo $book->display();  // Output: Book: 1984, Author: George Orwell
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Understanding and utilizing PHP data types is essential for effective programming. Each data type serves a specific purpose and helps in writing clear, maintainable, and efficient code. Practice using different data types and familiarize yourself with their behaviors to become proficient in PHP.</p>
          </section>
        `
      },
      
      {
        id: 'operators',
        title: 'Operators',
        content: `
          <section id="operators">
            <h2>Operators in PHP</h2>
      
            <h3>Introduction</h3>
            <p>Operators in PHP are special symbols or keywords used to perform operations on variables and values. Operators can manipulate individual data items and return a result. PHP supports various types of operators, including arithmetic, assignment, comparison, logical, and more.</p>
      
            <h3>Why Use Operators?</h3>
            <ul>
              <li><strong>Perform Calculations:</strong> Arithmetic operators allow you to perform mathematical calculations.</li>
              <li><strong>Assign Values:</strong> Assignment operators enable you to assign values to variables.</li>
              <li><strong>Compare Values:</strong> Comparison operators help you compare values and make decisions based on conditions.</li>
              <li><strong>Logical Operations:</strong> Logical operators allow you to combine multiple conditions.</li>
            </ul>
      
            <h3>Types of Operators</h3>
            <p>PHP supports several types of operators, including:</p>
            <ul>
              <li><strong>Arithmetic Operators:</strong> Perform basic arithmetic operations.</li>
              <li><strong>Assignment Operators:</strong> Assign values to variables.</li>
              <li><strong>Comparison Operators:</strong> Compare values and return a boolean result.</li>
              <li><strong>Logical Operators:</strong> Combine multiple conditions.</li>
              <li><strong>Increment/Decrement Operators:</strong> Increment or decrement a variable's value.</li>
              <li><strong>String Operators:</strong> Concatenate strings.</li>
              <li><strong>Array Operators:</strong> Compare arrays.</li>
            </ul>
      
            <h3>Arithmetic Operators</h3>
            <p>Arithmetic operators are used to perform mathematical calculations. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            $a = 10;
            $b = 5;
      
            $sum = $a + $b;        // Addition
            $difference = $a - $b; // Subtraction
            $product = $a * $b;    // Multiplication
            $quotient = $a / $b;   // Division
            $remainder = $a % $b;  // Modulus
      
            echo "Sum: $sum\\n";               // Output: Sum: 15
            echo "Difference: $difference\\n"; // Output: Difference: 5
            echo "Product: $product\\n";       // Output: Product: 50
            echo "Quotient: $quotient\\n";     // Output: Quotient: 2
            echo "Remainder: $remainder\\n";   // Output: Remainder: 0
            ?>
            </code></pre>
      
            <h3>Assignment Operators</h3>
            <p>Assignment operators are used to assign values to variables. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            $a = 10;  // Assign value 10 to variable $a
      
            $a += 5;  // Equivalent to $a = $a + 5; $a is now 15
            $a -= 3;  // Equivalent to $a = $a - 3; $a is now 12
            $a *= 2;  // Equivalent to $a = $a * 2; $a is now 24
            $a /= 4;  // Equivalent to $a = $a / 4; $a is now 6
            $a %= 3;  // Equivalent to $a = $a % 3; $a is now 0
      
            echo "Final value of a: $a\\n";  // Output: Final value of a: 0
            ?>
            </code></pre>
      
            <h3>Comparison Operators</h3>
            <p>Comparison operators are used to compare values and return a boolean result. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            $a = 10;
            $b = 5;
            $c = 10;
      
            var_dump($a == $b);  // Equal; Output: bool(false)
            var_dump($a != $b);  // Not equal; Output: bool(true)
            var_dump($a > $b);   // Greater than; Output: bool(true)
            var_dump($a < $b);   // Less than; Output: bool(false)
            var_dump($a >= $c);  // Greater than or equal to; Output: bool(true)
            var_dump($a <= $c);  // Less than or equal to; Output: bool(true)
            var_dump($a === $c); // Identical (equal and same type); Output: bool(true)
            var_dump($a !== $b); // Not identical; Output: bool(true)
            ?>
            </code></pre>
      
            <h3>Logical Operators</h3>
            <p>Logical operators are used to combine multiple conditions. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            $a = true;
            $b = false;
      
            var_dump($a && $b);  // AND; Output: bool(false)
            var_dump($a || $b);  // OR; Output: bool(true)
            var_dump(!$a);       // NOT; Output: bool(false)
            var_dump($a xor $b); // XOR; Output: bool(true)
            ?>
            </code></pre>
      
            <h3>Increment/Decrement Operators</h3>
            <p>Increment and decrement operators are used to increase or decrease a variable's value by one. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            $a = 10;
      
            echo ++$a;  // Pre-increment; Output: 11
            echo $a++;  // Post-increment; Output: 11 (then $a becomes 12)
            echo --$a;  // Pre-decrement; Output: 11 (then $a becomes 11)
            echo $a--;  // Post-decrement; Output: 11 (then $a becomes 10)
            ?>
            </code></pre>
      
            <h3>String Operators</h3>
            <p>String operators are used to concatenate strings. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            $a = "Hello";
            $b = "World";
      
            $concatenated = $a . " " . $b;  // Concatenation
            $a .= " PHP";                   // Concatenation assignment
      
            echo $concatenated;  // Output: Hello World
            echo $a;             // Output: Hello PHP
            ?>
            </code></pre>
      
            <h3>Array Operators</h3>
            <p>Array operators are used to compare arrays. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            $array1 = array("a" => "apple", "b" => "banana");
            $array2 = array("a" => "apple", "b" => "banana");
            $array3 = array("a" => "apple", "b" => "banana", "c" => "cherry");
      
            var_dump($array1 == $array2);  // Equal; Output: bool(true)
            var_dump($array1 != $array3);  // Not equal; Output: bool(true)
            var_dump($array1 === $array2); // Identical; Output: bool(true)
            var_dump($array1 !== $array3); // Not identical; Output: bool(true)
            ?>
            </code></pre>
      
            <h3>Assignment 1: Basic Arithmetic Operations</h3>
            <p>Create a PHP script that performs basic arithmetic operations and prints the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $a = 15;
            $b = 7;
      
            $sum = $a + $b;
            $difference = $a - $b;
            $product = $a * $b;
            $quotient = $a / $b;
            $remainder = $a % $b;
      
            echo "Sum: $sum\\n";               // Output: Sum: 22
            echo "Difference: $difference\\n"; // Output: Difference: 8
            echo "Product: $product\\n";       // Output: Product: 105
            echo "Quotient: $quotient\\n";     // Output: Quotient: 2.1428571428571
            echo "Remainder: $remainder\\n";   // Output: Remainder: 1
            ?>
            </code></pre>
      
            <h3>Assignment 2: Using Comparison Operators</h3>
            <p>Create a PHP script that uses comparison operators to compare two values and prints the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $a = 10;
            $b = 20;
      
            echo "Is $a equal to $b? " . var_export($a == $b, true) . "\\n";  // Output: Is 10 equal to 20? false
            echo "Is $a not equal to $b? " . var_export($a != $b, true) . "\\n";  // Output: Is 10 not equal to 20? true
            echo "Is $a greater than $b? " . var_export($a > $b, true) . "\\n";  // Output: Is 10 greater than 20? false
            echo "Is $a less than $b? " . var_export($a < $b, true) . "\\n";  // Output: Is 10 less than 20? true
            ?>
            </code></pre>
      
            <h3>Assignment 3: Logical Operations</h3>
            <p>Create a PHP script that uses logical operators to combine multiple conditions and prints the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $a = true;
            $b = false;
      
            echo "Is \\$a AND \\$b? " . var_export($a && $b, true) . "\\n";  // Output: Is $a AND $b? false
            echo "Is \\$a OR \\$b? " . var_export($a || $b, true) . "\\n";   // Output: Is $a OR $b? true
            echo "Is NOT \\$a? " . var_export(!$a, true) . "\\n";           // Output: Is NOT $a? false
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Understanding and utilizing operators in PHP is essential for effective programming. Each type of operator serves a specific purpose and helps in writing clear, maintainable, and efficient code. Practice using different operators and familiarize yourself with their behaviors to become proficient in PHP.</p>
          </section>
        `
      },
      
      {
        id: 'control-structures',
        title: 'Control Structures',
        content: `
          <section id="control-structures">
            <h2>Control Structures in PHP</h2>
      
            <h3>Introduction</h3>
            <p>Control structures in PHP are used to control the flow of execution in a script. They enable you to execute code conditionally, iterate over data, and manage the program's execution flow. PHP supports various control structures, including conditionals, loops, and switches.</p>
      
            <h3>Why Use Control Structures?</h3>
            <ul>
              <li><strong>Conditional Execution:</strong> Execute code blocks based on specific conditions.</li>
              <li><strong>Iteration:</strong> Repeat code blocks for a specified number of times or until a condition is met.</li>
              <li><strong>Decision Making:</strong> Choose between different code paths based on conditions.</li>
            </ul>
      
            <h3>Types of Control Structures</h3>
            <p>PHP supports several types of control structures, including:</p>
            <ul>
              <li><strong>Conditional Statements:</strong> Execute code based on conditions.</li>
              <li><strong>Looping Statements:</strong> Repeat code blocks.</li>
              <li><strong>Switch Statements:</strong> Select one of many blocks of code to execute.</li>
            </ul>
      
            <h3>Conditional Statements</h3>
            <p>Conditional statements are used to perform different actions based on different conditions. Here are some examples:</p>
            <pre><code class="language-php">
            <?php
            $a = 10;
            $b = 20;
      
            // if statement
            if ($a > $b) {
                echo "a is greater than b\\n";
            }
      
            // if-else statement
            if ($a > $b) {
                echo "a is greater than b\\n";
            } else {
                echo "a is not greater than b\\n"; // Output: a is not greater than b
            }
      
            // if-elseif-else statement
            if ($a > $b) {
                echo "a is greater than b\\n";
            } elseif ($a < $b) {
                echo "a is less than b\\n"; // Output: a is less than b
            } else {
                echo "a is equal to b\\n";
            }
            ?>
            </code></pre>
      
            <h3>Looping Statements</h3>
            <p>Looping statements are used to repeat a block of code a specified number of times or while a condition is true. Here are some examples:</p>
      
            <h4>While Loop</h4>
            <p>The <code>while</code> loop executes a block of code as long as the specified condition is true. The condition is evaluated before executing the loop's body.</p>
            <pre><code class="language-php">
            <?php
            $i = 1;
            while ($i <= 5) {
                echo "The value of i is $i\\n";
                $i++;
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Initialization:</strong> <code>$i</code> is initialized to 1.</li>
              <li><strong>Condition:</strong> The loop continues as long as <code>$i</code> is less than or equal to 5.</li>
              <li><strong>Increment:</strong> <code>$i</code> is incremented by 1 in each iteration.</li>
              <li><strong>Output:</strong> The loop prints the values 1 through 5.</li>
            </ul>
      
            <h4>Do-While Loop</h4>
            <p>The <code>do-while</code> loop executes a block of code at least once, and then repeats the execution as long as the specified condition is true. The condition is evaluated after executing the loop's body.</p>
            <pre><code class="language-php">
            <?php
            $i = 1;
            do {
                echo "The value of i is $i\\n";
                $i++;
            } while ($i <= 5);
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Initialization:</strong> <code>$i</code> is initialized to 1.</li>
              <li><strong>Execution:</strong> The loop body executes at least once.</li>
              <li><strong>Condition:</strong> The loop continues as long as <code>$i</code> is less than or equal to 5.</li>
              <li><strong>Increment:</strong> <code>$i</code> is incremented by 1 in each iteration.</li>
              <li><strong>Output:</strong> The loop prints the values 1 through 5.</li>
            </ul>
      
            <h4>For Loop</h4>
            <p>The <code>for</code> loop is used when you know in advance how many times the script should run. It consists of three parts: initialization, condition, and increment/decrement.</p>
            <pre><code class="language-php">
            <?php
            for ($i = 1; $i <= 5; $i++) {
                echo "The value of i is $i\\n";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Initialization:</strong> <code>$i</code> is initialized to 1.</li>
              <li><strong>Condition:</strong> The loop continues as long as <code>$i</code> is less than or equal to 5.</li>
              <li><strong>Increment:</strong> <code>$i</code> is incremented by 1 in each iteration.</li>
              <li><strong>Output:</strong> The loop prints the values 1 through 5.</li>
            </ul>
      
            <h4>Foreach Loop</h4>
            <p>The <code>foreach</code> loop is used to iterate over arrays. For each element in the array, the loop executes the code block.</p>
            <pre><code class="language-php">
            <?php
            $colors = array("red", "green", "blue");
            foreach ($colors as $color) {
                echo "The color is $color\\n";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Array:</strong> <code>$colors</code> is an array containing three elements.</li>
              <li><strong>Iteration:</strong> The loop iterates over each element in the array.</li>
              <li><strong>Output:</strong> The loop prints each color in the array.</li>
            </ul>
      
            <h3>Switch Statements</h3>
            <p>Switch statements are used to select one of many blocks of code to be executed. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            $day = "Tuesday";
      
            switch ($day) {
                case "Monday":
                    echo "Today is Monday\\n";
                    break;
                case "Tuesday":
                    echo "Today is Tuesday\\n"; // Output: Today is Tuesday
                    break;
                case "Wednesday":
                    echo "Today is Wednesday\\n";
                    break;
                default:
                    echo "Today is not Monday, Tuesday, or Wednesday\n";
            }
            ?>
            </code></pre>
      
            <h3>Assignment 1: Conditional Statements</h3>
            <p>Create a PHP script that uses conditional statements to check if a number is positive, negative, or zero, and prints the result.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $number = -5;
      
            if ($number > 0) {
                echo "The number is positive\\n"; // Output: The number is positive
            } elseif ($number < 0) {
                echo "The number is negative\\n"; // Output: The number is negative
            } else {
                echo "The number is zero\\n";
            }
            ?>
            </code></pre>
      
            <h3>Assignment 2: Looping Statements</h3>
            <p>Create a PHP script that uses a loop to print the numbers 1 to 10.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            for ($i = 1; $i <= 10; $i++) {
                echo "The number is $i\\n"; // Output: The number is 1, The number is 2, ..., The number is 10
            }
            ?>
            </code></pre>
      
            <h3>Assignment 3: Switch Statements</h3>
            <p>Create a PHP script that uses a switch statement to print the name of a day based on a variable's value.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $day = 3;
      
            switch ($day) {
                case 1:
                    echo "Today is Monday\\n";
                    break;
                case 2:
                    echo "Today is Tuesday\\n";
                    break;
                case 3:
                    echo "Today is Wednesday\\n"; // Output: Today is Wednesday
                    break;
                case 4:
                    echo "Today is Thursday\\n";
                    break;
                case 5:
                    echo "Today is Friday\\n";
                    break;
                case 6:
                    echo "Today is Saturday\\n";
                    break;
                case 7:
                    echo "Today is Sunday\\n";
                    break;
                default:
                    echo "Invalid day\\n";
            }
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Control structures are a fundamental aspect of PHP programming, enabling you to control the flow of execution in your scripts. By mastering conditional statements, looping statements, and switch statements, you can write more efficient, readable, and maintainable code. Practice using these control structures to become proficient in PHP.</p>
          </section>
        `
      },
      
      
      {
        id: 'functions',
        title: 'Functions',
        content: `
          <section id="functions">
            <h2>Functions in PHP</h2>
      
            <h3>Introduction</h3>
            <p>Functions in PHP are reusable blocks of code that perform specific tasks. Functions help organize code, make it more readable, and reduce redundancy by allowing code reuse. PHP has many built-in functions, and you can also define your own custom functions.</p>
      
            <h3>Why Use Functions?</h3>
            <ul>
              <li><strong>Code Reusability:</strong> Write a block of code once and reuse it multiple times.</li>
              <li><strong>Modularity:</strong> Break down complex problems into smaller, manageable pieces.</li>
              <li><strong>Maintainability:</strong> Make code easier to maintain and update.</li>
              <li><strong>Readability:</strong> Improve code readability by organizing it into logical sections.</li>
            </ul>
      
            <h3>Defining Functions</h3>
            <p>In PHP, you define a function using the <code>function</code> keyword, followed by the function name, parentheses, and a block of code. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            function greet() {
                echo "Hello, World!";
            }
      
            // Call the function
            greet();  // Output: Hello, World!
            ?>
            </code></pre>
      
            <h3>Function Parameters</h3>
            <p>Functions can accept parameters, which are variables passed to the function to perform operations on. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            function greet($name) {
                echo "Hello, $name!";
            }
      
            // Call the function with an argument
            greet("Alice");  // Output: Hello, Alice!
            ?>
            </code></pre>
      
            <h3>Default Parameters</h3>
            <p>You can provide default values for parameters, which are used if no arguments are passed when calling the function. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            function greet($name = "Guest") {
                echo "Hello, $name!";
            }
      
            // Call the function without an argument
            greet();  // Output: Hello, Guest!
      
            // Call the function with an argument
            greet("Alice");  // Output: Hello, Alice!
            ?>
            </code></pre>
      
            <h3>Returning Values</h3>
            <p>Functions can return values using the <code>return</code> statement. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            function add($a, $b) {
                return $a + $b;
            }
      
            // Call the function and store the result
            $result = add(3, 4);
            echo $result;  // Output: 7
            ?>
            </code></pre>
      
            <h3>Variable Scope</h3>
            <p>Variables defined inside a function have local scope, meaning they are only accessible within that function. Variables defined outside a function have global scope. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            $x = 10;  // Global scope
      
            function test() {
                $x = 5;  // Local scope
                echo "Local x: $x\\n";  // Output: Local x: 5
            }
      
            test();
            echo "Global x: $x\\n";  // Output: Global x: 10
            ?>
            </code></pre>
      
            <h3>Global Keyword</h3>
            <p>To access a global variable inside a function, use the <code>global</code> keyword. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            $x = 10;
      
            function test() {
                global $x;
                $x = 5;
            }
      
            test();
            echo $x;  // Output: 5
            ?>
            </code></pre>
      
            <h3>Static Variables</h3>
            <p>Static variables retain their value between function calls. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            function counter() {
                static $count = 0;
                $count++;
                echo $count;
            }
      
            counter();  // Output: 1
            counter();  // Output: 2
            counter();  // Output: 3
            ?>
            </code></pre>
      
            <h3>Assignment 1: Basic Function</h3>
            <p>Create a PHP function that takes two numbers as parameters, multiplies them, and returns the result. Call the function and print the result.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            function multiply($a, $b) {
                return $a * $b;
            }
      
            $result = multiply(3, 4);
            echo $result;  // Output: 12
            ?>
            </code></pre>
      
            <h3>Assignment 2: Default Parameters</h3>
            <p>Create a PHP function that takes a string parameter and prints it. If no argument is passed, the function should print "Hello, World!".</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            function printMessage($message = "Hello, World!") {
                echo $message;
            }
      
            printMessage();  // Output: Hello, World!
            printMessage("Hi there!");  // Output: Hi there!
            ?>
            </code></pre>
      
            <h3>Assignment 3: Returning Values</h3>
            <p>Create a PHP function that takes a number as a parameter and returns its square. Call the function and print the result.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            function square($number) {
                return $number * $number;
            }
      
            $result = square(5);
            echo $result;  // Output: 25
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Functions are a crucial part of PHP programming, enabling code reuse, modularity, and improved readability. By mastering function definitions, parameters, return values, and variable scope, you can write more efficient, maintainable, and readable code. Practice using functions to become proficient in PHP.</p>
          </section>
        `
      },
      
      {
        id: 'arrays',
        title: 'Arrays',
        content: `
          <section id="arrays">
            <h2>Arrays in PHP</h2>
      
            <h3>Introduction</h3>
            <p>Arrays in PHP are used to store multiple values in a single variable. They are a versatile data structure that allows you to manage and manipulate collections of data. Arrays can hold values of different types, including numbers, strings, and objects.</p>
      
            <h3>Why Use Arrays?</h3>
            <ul>
              <li><strong>Efficient Data Storage:</strong> Store and manage multiple values in a single variable.</li>
              <li><strong>Ease of Access:</strong> Easily access and manipulate data using indexes or keys.</li>
              <li><strong>Flexibility:</strong> Store values of different types within the same array.</li>
              <li><strong>Organized Data Management:</strong> Keep related data together for better organization and readability.</li>
            </ul>
      
            <h3>Types of Arrays</h3>
            <p>PHP supports three main types of arrays:</p>
            <ul>
              <li><strong>Indexed Arrays:</strong> Arrays with a numeric index.</li>
              <li><strong>Associative Arrays:</strong> Arrays with named keys.</li>
              <li><strong>Multidimensional Arrays:</strong> Arrays containing one or more arrays.</li>
            </ul>
      
            <h3>Indexed Arrays</h3>
            <p>Indexed arrays use numeric indexes to access their values. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            $colors = array("red", "green", "blue");
            echo $colors[0];  // Output: red
            echo $colors[1];  // Output: green
            echo $colors[2];  // Output: blue
      
            // Adding values to an indexed array
            $colors[] = "yellow";
            echo $colors[3];  // Output: yellow
            ?>
            </code></pre>
      
            <h3>Associative Arrays</h3>
            <p>Associative arrays use named keys to access their values. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            $person = array(
                "name" => "John",
                "age" => 30,
                "city" => "New York"
            );
            echo $person["name"];  // Output: John
            echo $person["age"];   // Output: 30
            echo $person["city"];  // Output: New York
      
            // Adding values to an associative array
            $person["email"] = "john@example.com";
            echo $person["email"];  // Output: john@example.com
            ?>
            </code></pre>
      
            <h3>Multidimensional Arrays</h3>
            <p>Multidimensional arrays contain one or more arrays. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            $people = array(
                array(
                    "name" => "John",
                    "age" => 30,
                    "city" => "New York"
                ),
                array(
                    "name" => "Jane",
                    "age" => 25,
                    "city" => "London"
                ),
                array(
                    "name" => "Peter",
                    "age" => 35,
                    "city" => "Berlin"
                )
            );
            echo $people[0]["name"];  // Output: John
            echo $people[1]["city"];  // Output: London
            echo $people[2]["age"];   // Output: 35
      
            // Adding values to a multidimensional array
            $people[0]["email"] = "john@example.com";
            echo $people[0]["email"];  // Output: john@example.com
            ?>
            </code></pre>
      
            <h3>Array Functions</h3>
            <p>PHP provides a wide range of built-in functions to work with arrays. Here are some examples:</p>
      
            <h4>Count</h4>
            <p>The <code>count()</code> function returns the number of elements in an array.</p>
            <pre><code class="language-php">
            <?php
            $colors = array("red", "green", "blue");
            echo count($colors);  // Output: 3
            ?>
            </code></pre>
      
            <h4>Array Merge</h4>
            <p>The <code>array_merge()</code> function merges one or more arrays into one.</p>
            <pre><code class="language-php">
            <?php
            $array1 = array("red", "green");
            $array2 = array("blue", "yellow");
            $mergedArray = array_merge($array1, $array2);
            print_r($mergedArray);  // Output: Array ( [0] => red [1] => green [2] => blue [3] => yellow )
            ?>
            </code></pre>
      
            <h4>Array Push</h4>
            <p>The <code>array_push()</code> function adds one or more elements to the end of an array.</p>
            <pre><code class="language-php">
            <?php
            $colors = array("red", "green");
            array_push($colors, "blue", "yellow");
            print_r($colors);  // Output: Array ( [0] => red [1] => green [2] => blue [3] => yellow )
            ?>
            </code></pre>
      
            <h4>Array Pop</h4>
            <p>The <code>array_pop()</code> function removes the last element of an array.</p>
            <pre><code class="language-php">
            <?php
            $colors = array("red", "green", "blue");
            array_pop($colors);
            print_r($colors);  // Output: Array ( [0] => red [1] => green )
            ?>
            </code></pre>
      
            <h3>Assignment 1: Indexed Arrays</h3>
            <p>Create a PHP script that declares an indexed array of your favorite fruits and prints each fruit.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $fruits = array("apple", "banana", "cherry");
      
            foreach ($fruits as $fruit) {
                echo $fruit . "\\n";  // Output: apple, banana, cherry
            }
            ?>
            </code></pre>
      
            <h3>Assignment 2: Associative Arrays</h3>
            <p>Create a PHP script that declares an associative array of a person's details (name, age, and city) and prints each detail.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $person = array(
                "name" => "Alice",
                "age" => 28,
                "city" => "Paris"
            );
      
            foreach ($person as $key => $value) {
                echo "$key: $value\\n";  // Output: name: Alice, age: 28, city: Paris
            }
            ?>
            </code></pre>
      
            <h3>Assignment 3: Multidimensional Arrays</h3>
            <p>Create a PHP script that declares a multidimensional array of three people's details (name, age, and city) and prints each person's details.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $people = array(
                array(
                    "name" => "John",
                    "age" => 30,
                    "city" => "New York"
                ),
                array(
                    "name" => "Jane",
                    "age" => 25,
                    "city" => "London"
                ),
                array(
                    "name" => "Peter",
                    "age" => 35,
                    "city" => "Berlin"
                )
            );
      
            foreach ($people as $person) {
                foreach ($person as $key => $value) {
                    echo "$key: $value\\n";
                }
                echo "\\n";
            }
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Arrays are a fundamental part of PHP programming, enabling you to store, manage, and manipulate collections of data efficiently. By mastering the different types of arrays and the various array functions, you can write more flexible and efficient code. Practice using arrays to become proficient in PHP.</p>
          </section>
        `
      },
      
      {
        id: 'object',
        title: 'Object-Oriented Programming',
        content: `
          <section id="object">
            <h2>Object-Oriented Programming in PHP</h2>
      
            <h3>Introduction</h3>
            <p>Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code that manipulates that data. OOP in PHP allows for better organization of code, making it more modular, reusable, and easier to maintain.</p>
      
            <h3>Why Use OOP?</h3>
            <ul>
              <li><strong>Modularity:</strong> Break down complex problems into smaller, manageable pieces.</li>
              <li><strong>Reusability:</strong> Reuse code through inheritance and polymorphism.</li>
              <li><strong>Maintainability:</strong> Easier to update and maintain code.</li>
              <li><strong>Encapsulation:</strong> Hide the internal state and require all interactions to be performed through an object's methods.</li>
            </ul>
      
            <h3>Basic Concepts of OOP</h3>
            <p>OOP in PHP is built around several key concepts:</p>
            <ul>
              <li><strong>Classes and Objects:</strong> Classes are blueprints for creating objects (instances).</li>
              <li><strong>Properties and Methods:</strong> Properties are variables within a class, and methods are functions within a class.</li>
              <li><strong>Inheritance:</strong> Allows a class to inherit properties and methods from another class.</li>
              <li><strong>Encapsulation:</strong> Bundling the data (properties) and the code (methods) that manipulates the data.</li>
              <li><strong>Polymorphism:</strong> Allows objects of different classes to be treated as objects of a common super class.</li>
            </ul>
      
            <h3>Defining a Class</h3>
            <p>In PHP, a class is defined using the <code>class</code> keyword, followed by the class name and a block of code. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            class Car {
                // Properties
                public $make;
                public $model;
      
                // Constructor
                public function __construct($make, $model) {
                    $this->make = $make;
                    $this->model = $model;
                }
      
                // Method
                public function display() {
                    return "This car is a $this->make $this->model.";
                }
            }
      
            // Creating an object
            $car = new Car("Toyota", "Corolla");
            echo $car->display();  // Output: This car is a Toyota Corolla.
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Class Definition:</strong> The <code>Car</code> class is defined with two properties: <code>$make</code> and <code>$model</code>.</li>
              <li><strong>Constructor:</strong> The constructor method <code>__construct()</code> is called automatically when a new object is created, initializing the <code>$make</code> and <code>$model</code> properties.</li>
              <li><strong>Method:</strong> The <code>display()</code> method returns a string describing the car.</li>
              <li><strong>Object Creation:</strong> An object of the <code>Car</code> class is created with the make "Toyota" and model "Corolla". The <code>display()</code> method is called to output the description.</li>
            </ul>
      
            <h3>Properties and Methods</h3>
            <p>Properties are variables that belong to a class, and methods are functions that belong to a class. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            class Person {
                // Properties
                public $name;
                public $age;
      
                // Method
                public function set_name($name) {
                    $this->name = $name;
                }
      
                // Method
                public function get_name() {
                    return $this->name;
                }
            }
      
            // Creating an object
            $person = new Person();
            $person->set_name("Alice");
            echo $person->get_name();  // Output: Alice
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Class Definition:</strong> The <code>Person</code> class is defined with two properties: <code>$name</code> and <code>$age</code>.</li>
              <li><strong>Methods:</strong> The <code>set_name()</code> method sets the <code>$name</code> property, and the <code>get_name()</code> method returns the value of the <code>$name</code> property.</li>
              <li><strong>Object Creation:</strong> An object of the <code>Person</code> class is created. The <code>set_name()</code> method is called to set the name to "Alice", and the <code>get_name()</code> method is called to output the name.</li>
            </ul>
      
            <h3>Inheritance</h3>
            <p>Inheritance allows a class to inherit properties and methods from another class. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            // Parent class
            class Animal {
                public $name;
                public $color;
      
                public function describe() {
                    return "This animal is a $this->color $this->name.";
                }
            }
      
            // Child class
            class Dog extends Animal {
                public function sound() {
                    return "Woof!";
                }
            }
      
            // Creating an object of the child class
            $dog = new Dog();
            $dog->name = "dog";
            $dog->color = "brown";
            echo $dog->describe();  // Output: This animal is a brown dog.
            echo $dog->sound();     // Output: Woof!
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Parent Class:</strong> The <code>Animal</code> class is defined with properties <code>$name</code> and <code>$color</code>, and a method <code>describe()</code>.</li>
              <li><strong>Child Class:</strong> The <code>Dog</code> class extends the <code>Animal</code> class, inheriting its properties and methods. It also defines an additional method <code>sound()</code>.</li>
              <li><strong>Object Creation:</strong> An object of the <code>Dog</code> class is created. The inherited <code>name</code> and <code>color</code> properties are set, and the inherited <code>describe()</code> method and the <code>sound()</code> method are called to output the description and sound of the dog.</li>
            </ul>
      
            <h3>Encapsulation</h3>
            <p>Encapsulation is the bundling of data and methods that operate on that data within a single unit, or class. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            class BankAccount {
                // Private properties
                private $balance;
      
                // Constructor
                public function __construct($initial_balance) {
                    $this->balance = $initial_balance;
                }
      
                // Public method to deposit money
                public function deposit($amount) {
                    if ($amount > 0) {
                        $this->balance += $amount;
                    }
                }
      
                // Public method to get the balance
                public function get_balance() {
                    return $this->balance;
                }
            }
      
            // Creating an object
            $account = new BankAccount(100);
            $account->deposit(50);
            echo $account->get_balance();  // Output: 150
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Class Definition:</strong> The <code>BankAccount</code> class is defined with a private property <code>$balance</code> to store the account balance.</li>
              <li><strong>Constructor:</strong> The constructor method <code>__construct()</code> initializes the <code>$balance</code> property with an initial balance.</li>
              <li><strong>Public Methods:</strong> The <code>deposit()</code> method allows depositing money into the account, and the <code>get_balance()</code> method returns the current balance.</li>
              <li><strong>Object Creation:</strong> An object of the <code>BankAccount</code> class is created with an initial balance of 100. The <code>deposit()</code> method is called to add 50 to the balance, and the <code>get_balance()</code> method is called to output the current balance of 150.</li>
            </ul>
      
            <h3>Polymorphism</h3>
            <p>Polymorphism allows objects of different classes to be treated as objects of a common superclass. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            // Parent class
            class Shape {
                public function draw() {
                    return "Drawing a shape";
                }
            }
      
            // Child class
            class Circle extends Shape {
                public function draw() {
                    return "Drawing a circle";
                }
            }
      
            // Child class
            class Square extends Shape {
                public function draw() {
                    return "Drawing a square";
                }
            }
      
            // Creating objects
            $shapes = array(new Shape(), new Circle(), new Square());
      
            foreach ($shapes as $shape) {
                echo $shape->draw() . "\\n";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Parent Class:</strong> The <code>Shape</code> class defines a method <code>draw()</code> that returns a string indicating a generic shape.</li>
              <li><strong>Child Classes:</strong> The <code>Circle</code> and <code>Square</code> classes extend the <code>Shape</code> class and override the <code>draw()</code> method to return strings indicating specific shapes.</li>
              <li><strong>Object Creation:</strong> An array of <code>Shape</code> objects is created, containing objects of the <code>Shape</code>, <code>Circle</code>, and <code>Square</code> classes. The <code>draw()</code> method is called on each object in the array, demonstrating polymorphism.</li>
            </ul>
      
            <h3>Assignment 1: Basic Class</h3>
            <p>Create a PHP class called <code>Book</code> with properties for title, author, and price, and methods to set and get these properties. Instantiate an object of the class and print the book details.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            class Book {
                public $title;
                public $author;
                public $price;
      
                public function set_title($title) {
                    $this->title = $title;
                }
      
                public function get_title() {
                    return $this->title;
                }
      
                public function set_author($author) {
                    $this->author = $author;
                }
      
                public function get_author() {
                    return $this->author;
                }
      
                public function set_price($price) {
                    $this->price = $price;
                }
      
                public function get_price() {
                    return $this->price;
                }
            }
      
            // Creating an object
            $book = new Book();
            $book->set_title("To Kill a Mockingbird");
            $book->set_author("Harper Lee");
            $book->set_price(18.99);
            
            echo "Title: " . $book->get_title() . "\\n";
            echo "Author: " . $book->get_author() . "\\n";
            echo "Price: $" . $book->get_price() . "\\n";
            ?>
            </code></pre>
      
            <h3>Assignment 2: Inheritance</h3>
            <p>Create a parent class called <code>Employee</code> with properties for name and salary, and a method to display employee details. Create a child class called <code>Manager</code> that inherits from <code>Employee</code> and adds a property for department. Instantiate an object of the <code>Manager</code> class and print the manager's details.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            class Employee {
                public $name;
                public $salary;
      
                public function display() {
                    return "Employee Name: $this->name, Salary: $this->salary";
                }
            }
      
            class Manager extends Employee {
                public $department;
      
                public function display() {
                    return parent::display() . ", Department: $this->department";
                }
            }
      
            // Creating an object
            $manager = new Manager();
            $manager->name = "Alice";
            $manager->salary = 75000;
            $manager->department = "HR";
            
            echo $manager->display();
            ?>
            </code></pre>
      
            <h3>Assignment 3: Polymorphism</h3>
            <p>Create a parent class called <code>Animal</code> with a method <code>makeSound()</code>. Create two child classes called <code>Cat</code> and <code>Dog</code> that override the <code>makeSound()</code> method. Instantiate objects of both child classes and call the <code>makeSound()</code> method on each object.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            class Animal {
                public function makeSound() {
                    return "Some sound";
                }
            }
      
            class Cat extends Animal {
                public function makeSound() {
                    return "Meow";
                }
            }
      
            class Dog extends Animal {
                public function makeSound() {
                    return "Woof";
                }
            }
      
            // Creating objects
            $cat = new Cat();
            $dog = new Dog();
            
            echo $cat->makeSound() . "\\n";  // Output: Meow
            echo $dog->makeSound() . "\\n";  // Output: Woof
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Object-Oriented Programming (OOP) is a powerful paradigm that helps in organizing code into modular, reusable, and maintainable structures. By understanding and applying the concepts of classes, objects, inheritance, encapsulation, and polymorphism, you can write more efficient and effective PHP code. Practice using OOP principles to become proficient in PHP.</p>
          </section>
        `
      },
      
      {
        id: 'exception',
        title: 'Exception Handling',
        content: `
          <section id="exception">
            <h2>Exception Handling in PHP</h2>
      
            <h3>Introduction</h3>
            <p>Exception handling in PHP is a powerful mechanism for managing errors and exceptional conditions in your code. It allows you to handle errors gracefully, providing a way to catch and respond to different types of exceptions without stopping the execution of the script.</p>
      
            <h3>Why Use Exception Handling?</h3>
            <ul>
              <li><strong>Error Management:</strong> Handle errors and exceptional conditions gracefully.</li>
              <li><strong>Code Clarity:</strong> Separate error handling logic from the main code flow.</li>
              <li><strong>Debugging:</strong> Provide detailed error information for debugging purposes.</li>
              <li><strong>Maintainability:</strong> Make code easier to maintain by centralizing error handling logic.</li>
            </ul>
      
            <h3>Basic Concepts of Exception Handling</h3>
            <p>PHP provides several key concepts for exception handling:</p>
            <ul>
              <li><strong>Try:</strong> Block of code to be tested for errors while it is being executed.</li>
              <li><strong>Catch:</strong> Block of code that will be executed if an exception is thrown.</li>
              <li><strong>Throw:</strong> Keyword used to throw an exception.</li>
              <li><strong>Finally:</strong> Block of code that will be executed regardless of whether an exception is thrown or not.</li>
            </ul>
      
            <h3>Basic Exception Handling</h3>
            <p>Here is an example of basic exception handling in PHP:</p>
            <pre><code class="language-php">
            <?php
            try {
                // Code that may throw an exception
                if (!file_exists("example.txt")) {
                    throw new Exception("File not found.");
                }
            } catch (Exception $e) {
                // Code to handle the exception
                echo "Error: " . $e->getMessage();
            } finally {
                // Code that will always be executed
                echo " This is the finally block.";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Try Block:</strong> The <code>try</code> block contains code that may throw an exception.</li>
              <li><strong>Throw Statement:</strong> The <code>throw</code> statement is used to throw an exception if the file does not exist.</li>
              <li><strong>Catch Block:</strong> The <code>catch</code> block catches the exception and handles it by printing the error message.</li>
              <li><strong>Finally Block:</strong> The <code>finally</code> block contains code that will always be executed, regardless of whether an exception was thrown or not.</li>
            </ul>
      
            <h3>Custom Exception Handling</h3>
            <p>You can create custom exception classes by extending the base <code>Exception</code> class. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            class CustomException extends Exception {
                public function errorMessage() {
                    return "Custom error: " . $this->getMessage();
                }
            }
      
            try {
                // Code that may throw an exception
                $value = 0;
                if ($value === 0) {
                    throw new CustomException("Value cannot be zero.");
                }
            } catch (CustomException $e) {
                // Code to handle the custom exception
                echo $e->errorMessage();
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Custom Exception Class:</strong> The <code>CustomException</code> class extends the base <code>Exception</code> class and defines a custom error message method.</li>
              <li><strong>Throw Statement:</strong> The <code>throw</code> statement is used to throw a <code>CustomException</code> if the value is zero.</li>
              <li><strong>Catch Block:</strong> The <code>catch</code> block catches the custom exception and handles it by printing the custom error message.</li>
            </ul>
      
            <h3>Multiple Catch Blocks</h3>
            <p>PHP allows you to use multiple catch blocks to handle different types of exceptions. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            class DivideByZeroException extends Exception {}
            class InvalidValueException extends Exception {}
      
            function divide($a, $b) {
                if ($b === 0) {
                    throw new DivideByZeroException("Cannot divide by zero.");
                }
                if ($a < 0 || $b < 0) {
                    throw new InvalidValueException("Values must be positive.");
                }
                return $a / $b;
            }
      
            try {
                echo divide(10, 0);
            } catch (DivideByZeroException $e) {
                echo "DivideByZeroException: " . $e->getMessage();
            } catch (InvalidValueException $e) {
                echo "InvalidValueException: " . $e->getMessage();
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Custom Exceptions:</strong> Two custom exception classes <code>DivideByZeroException</code> and <code>InvalidValueException</code> are defined.</li>
              <li><strong>Throw Statements:</strong> The <code>throw</code> statements are used to throw specific exceptions based on the conditions.</li>
              <li><strong>Multiple Catch Blocks:</strong> Multiple <code>catch</code> blocks are used to handle different types of exceptions separately.</li>
            </ul>
      
            <h3>Assignment 1: Basic Exception Handling</h3>
            <p>Create a PHP script that attempts to open a file and reads its contents. If the file does not exist, throw an exception and handle it by printing an error message.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            try {
                $file = "nonexistent.txt";
                if (!file_exists($file)) {
                    throw new Exception("File not found.");
                }
                $contents = file_get_contents($file);
                echo $contents;
            } catch (Exception $e) {
                echo "Error: " . $e->getMessage();
            }
            ?>
            </code></pre>
      
            <h3>Assignment 2: Custom Exception</h3>
            <p>Create a custom exception class called <code>NegativeValueException</code>. Write a function that takes a number as an argument and throws a <code>NegativeValueException</code> if the number is negative. Handle the exception and print a custom error message.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            class NegativeValueException extends Exception {
                public function errorMessage() {
                    return "Error: " . $this->getMessage();
                }
            }
      
            function checkPositive($number) {
                if ($number < 0) {
                    throw new NegativeValueException("Negative value: $number");
                }
                return $number;
            }
      
            try {
                echo checkPositive(-5);
            } catch (NegativeValueException $e) {
                echo $e->errorMessage();
            }
            ?>
            </code></pre>
      
            <h3>Assignment 3: Multiple Exceptions</h3>
            <p>Write a function that takes two numbers and divides them. Throw a <code>DivideByZeroException</code> if the second number is zero, and an <code>InvalidValueException</code> if any of the numbers is negative. Handle both exceptions separately.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            class DivideByZeroException extends Exception {}
            class InvalidValueException extends Exception {}
      
            function divide($a, $b) {
                if ($b === 0) {
                    throw new DivideByZeroException("Cannot divide by zero.");
                }
                if ($a < 0 || $b < 0) {
                    throw new InvalidValueException("Values must be positive.");
                }
                return $a / $b;
            }
      
            try {
                echo divide(10, -2);
            } catch (DivideByZeroException $e) {
                echo "DivideByZeroException: " . $e->getMessage();
            } catch (InvalidValueException $e) {
                echo "InvalidValueException: " . $e->getMessage();
            }
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Exception handling is a crucial aspect of PHP programming, allowing you to manage errors and exceptional conditions gracefully. By mastering the concepts of try, catch, throw, and finally, as well as creating custom exceptions, you can write more robust and maintainable code. Practice using exception handling to become proficient in PHP.</p>
          </section>
        `
      },
      
      {
        id: 'file',
        title: 'File Handling',
        content: `
          <section id="file">
            <h2>File Handling in PHP</h2>
      
            <h3>Introduction</h3>
            <p>File handling in PHP is an essential skill that allows you to create, read, write, and manage files on the server. This functionality is useful for a variety of tasks, such as saving user data, logging information, and processing file uploads.</p>
      
            <h3>Why Use File Handling?</h3>
            <ul>
              <li><strong>Data Storage:</strong> Save and retrieve data to and from files.</li>
              <li><strong>Logging:</strong> Keep logs of application activities.</li>
              <li><strong>Configuration:</strong> Store configuration settings.</li>
              <li><strong>Content Management:</strong> Manage content dynamically, such as user-generated content.</li>
            </ul>
      
            <h3>Basic File Operations</h3>
            <p>PHP provides several functions for basic file operations, including creating, reading, writing, and deleting files.</p>
      
            <h3>Opening a File</h3>
            <p>The <code>fopen()</code> function is used to open a file. It takes two arguments: the file path and the mode in which to open the file. Common modes include:</p>
            <ul>
              <li><code>'r'</code> - Read only. Starts at the beginning of the file.</li>
              <li><code>'w'</code> - Write only. Opens and truncates the file or creates a new file if it doesn't exist.</li>
              <li><code>'a'</code> - Write only. Opens and writes to the end of the file or creates a new file if it doesn't exist.</li>
              <li><code>'r+'</code> - Read and write. Starts at the beginning of the file.</li>
              <li><code>'w+'</code> - Read and write. Opens and truncates the file or creates a new file if it doesn't exist.</li>
              <li><code>'a+'</code> - Read and write. Opens and writes to the end of the file or creates a new file if it doesn't exist.</li>
            </ul>
            <pre><code class="language-php">
            <?php
            // Opening a file for reading
            $file = fopen("example.txt", "r");
      
            if ($file) {
                echo "File opened successfully.";
                fclose($file);
            } else {
                echo "Error opening file.";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>fopen()</strong>: Opens the file "example.txt" in read mode.</li>
              <li><strong>fclose()</strong>: Closes the opened file.</li>
              <li><strong>Check:</strong> Checks if the file was successfully opened.</li>
            </ul>
      
            <h3>Reading from a File</h3>
            <p>The <code>fread()</code> function is used to read data from a file. It takes two arguments: the file handle and the number of bytes to read.</p>
            <pre><code class="language-php">
            <?php
            $file = fopen("example.txt", "r");
      
            if ($file) {
                $contents = fread($file, filesize("example.txt"));
                echo $contents;
                fclose($file);
            } else {
                echo "Error opening file.";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>fread()</strong>: Reads the entire contents of "example.txt".</li>
              <li><strong>filesize()</strong>: Gets the size of the file to read the entire file content.</li>
              <li><strong>Output:</strong> Displays the contents of the file.</li>
            </ul>
      
            <h3>Writing to a File</h3>
            <p>The <code>fwrite()</code> function is used to write data to a file. It takes two arguments: the file handle and the string to write.</p>
            <pre><code class="language-php">
            <?php
            $file = fopen("example.txt", "w");
      
            if ($file) {
                fwrite($file, "Hello, World!");
                fclose($file);
                echo "Data written to file.";
            } else {
                echo "Error opening file.";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>fwrite()</strong>: Writes the string "Hello, World!" to "example.txt".</li>
              <li><strong>Output:</strong> Confirms that data has been written to the file.</li>
            </ul>
      
            <h3>Appending to a File</h3>
            <p>The <code>fwrite()</code> function can also be used to append data to a file by opening the file in append mode (<code>'a'</code>).</p>
            <pre><code class="language-php">
            <?php
            $file = fopen("example.txt", "a");
      
            if ($file) {
                fwrite($file, " This is additional data.");
                fclose($file);
                echo "Data appended to file.";
            } else {
                echo "Error opening file.";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>fwrite()</strong>: Appends the string " This is additional data." to "example.txt".</li>
              <li><strong>Output:</strong> Confirms that data has been appended to the file.</li>
            </ul>
      
            <h3>Deleting a File</h3>
            <p>The <code>unlink()</code> function is used to delete a file.</p>
            <pre><code class="language-php">
            <?php
            if (unlink("example.txt")) {
                echo "File deleted successfully.";
            } else {
                echo "Error deleting file.";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>unlink()</strong>: Deletes the file "example.txt".</li>
              <li><strong>Output:</strong> Confirms that the file has been deleted.</li>
            </ul>
      
            <h3>Assignment 1: Reading a File</h3>
            <p>Create a PHP script that reads the contents of a file named "data.txt" and prints the contents to the screen. Handle any errors appropriately.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $file = fopen("data.txt", "r");
      
            if ($file) {
                $contents = fread($file, filesize("data.txt"));
                echo $contents;
                fclose($file);
            } else {
                echo "Error opening file.";
            }
            ?>
            </code></pre>
      
            <h3>Assignment 2: Writing to a File</h3>
            <p>Create a PHP script that writes the string "PHP File Handling Example" to a file named "example.txt". Handle any errors appropriately.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $file = fopen("example.txt", "w");
      
            if ($file) {
                fwrite($file, "PHP File Handling Example");
                fclose($file);
                echo "Data written to file.";
            } else {
                echo "Error opening file.";
            }
            ?>
            </code></pre>
      
            <h3>Assignment 3: Appending to a File</h3>
            <p>Create a PHP script that appends the string "Appending new data" to a file named "example.txt". Handle any errors appropriately.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $file = fopen("example.txt", "a");
      
            if ($file) {
                fwrite($file, "Appending new data");
                fclose($file);
                echo "Data appended to file.";
            } else {
                echo "Error opening file.";
            }
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>File handling is an essential aspect of PHP programming, allowing you to manage files on the server efficiently. By mastering the concepts of opening, reading, writing, appending, and deleting files, you can write more robust and flexible PHP applications. Practice using file handling functions to become proficient in PHP.</p>
          </section>
        `
      },
      
      {
        id: 'sessions',
        title: 'Sessions and Cookies',
        content: `
          <section id="sessions">
            <h2>Sessions and Cookies in PHP</h2>
      
            <h3>Introduction</h3>
            <p>Sessions and cookies are mechanisms for persisting data across multiple requests in a web application. They are essential for implementing features such as user authentication, shopping carts, and user preferences.</p>
      
            <h3>Why Use Sessions and Cookies?</h3>
            <ul>
              <li><strong>State Management:</strong> Maintain state information across multiple page requests.</li>
              <li><strong>User Authentication:</strong> Implement login and logout functionality.</li>
              <li><strong>Shopping Carts:</strong> Store shopping cart data between requests.</li>
              <li><strong>Personalization:</strong> Save user preferences and settings.</li>
            </ul>
      
            <h3>Sessions</h3>
            <p>Sessions store data on the server and use a session ID to identify users. This ID is usually stored in a cookie on the client's browser.</p>
      
            <h3>Starting a Session</h3>
            <p>Use the <code>session_start()</code> function to start a session or resume an existing one. This function must be called before any output is sent to the browser.</p>
            <pre><code class="language-php">
            <?php
            session_start();
            ?>
            </code></pre>
      
            <h3>Storing Session Data</h3>
            <p>Store data in the <code>$_SESSION</code> superglobal array.</p>
            <pre><code class="language-php">
            <?php
            session_start();
            $_SESSION["username"] = "john_doe";
            echo "Session data stored.";
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>session_start()</strong>: Starts a new session or resumes an existing one.</li>
              <li><strong>$_SESSION</strong>: Superglobal array used to store session data.</li>
              <li><strong>Data Storage:</strong> Stores the username "john_doe" in the session.</li>
            </ul>
      
            <h3>Retrieving Session Data</h3>
            <p>Retrieve data from the <code>$_SESSION</code> superglobal array.</p>
            <pre><code class="language-php">
            <?php
            session_start();
            if (isset($_SESSION["username"])) {
                echo "Username: " . $_SESSION["username"];
            } else {
                echo "No session data found.";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>session_start()</strong>: Starts a new session or resumes an existing one.</li>
              <li><strong>isset()</strong>: Checks if the "username" key exists in the session.</li>
              <li><strong>Data Retrieval:</strong> Retrieves and displays the username stored in the session.</li>
            </ul>
      
            <h3>Destroying a Session</h3>
            <p>Use the <code>session_destroy()</code> function to destroy a session and delete all session data.</p>
            <pre><code class="language-php">
            <?php
            session_start();
            session_destroy();
            echo "Session destroyed.";
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>session_start()</strong>: Starts a new session or resumes an existing one.</li>
              <li><strong>session_destroy()</strong>: Destroys the session and deletes all session data.</li>
            </ul>
      
            <h3>Cookies</h3>
            <p>Cookies store data on the client's browser and are sent to the server with each request. Cookies are useful for storing data that needs to persist across sessions.</p>
      
            <h3>Setting a Cookie</h3>
            <p>Use the <code>setcookie()</code> function to set a cookie. This function must be called before any output is sent to the browser.</p>
            <pre><code class="language-php">
            <?php
            setcookie("user", "john_doe", time() + (86400 * 30), "/"); // 86400 = 1 day
            echo "Cookie set.";
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>setcookie()</strong>: Sets a cookie named "user" with the value "john_doe" that expires in 30 days.</li>
              <li><strong>time()</strong>: Gets the current time.</li>
              <li><strong>Expiration:</strong> Sets the cookie to expire in 30 days.</li>
            </ul>
      
            <h3>Retrieving a Cookie</h3>
            <p>Retrieve data from the <code>$_COOKIE</code> superglobal array.</p>
            <pre><code class="language-php">
            <?php
            if (isset($_COOKIE["user"])) {
                echo "User: " . $_COOKIE["user"];
            } else {
                echo "No cookie found.";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>isset()</strong>: Checks if the "user" cookie exists.</li>
              <li><strong>Data Retrieval:</strong> Retrieves and displays the value of the "user" cookie.</li>
            </ul>
      
            <h3>Deleting a Cookie</h3>
            <p>Set the cookie's expiration date to a past time to delete it.</p>
            <pre><code class="language-php">
            <?php
            setcookie("user", "", time() - 3600, "/");
            echo "Cookie deleted.";
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>setcookie()</strong>: Sets the "user" cookie with an expiration date in the past, effectively deleting it.</li>
              <li><strong>Expiration:</strong> Sets the cookie to expire one hour ago.</li>
            </ul>
      
            <h3>Assignment 1: Using Sessions</h3>
            <p>Create a PHP script that starts a session, stores the user's favorite color in the session, and retrieves and displays it on another page.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
      // page1.php
            <?php
            session_start();
            $_SESSION["favorite_color"] = "blue";
            echo "Favorite color stored in session.";
            ?>
            </code></pre>
            <pre><code class="language-php">
      // page2.php
            <?php
            session_start();
            if (isset($_SESSION["favorite_color"])) {
                echo "Favorite color: " . $_SESSION["favorite_color"];
            } else {
                echo "No favorite color found.";
            }
            ?>
            </code></pre>
      
            <h3>Assignment 2: Using Cookies</h3>
            <p>Create a PHP script that sets a cookie for the user's favorite movie and retrieves and displays it on another page.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
      // set_cookie.php
            <?php
            setcookie("favorite_movie", "Inception", time() + (86400 * 30), "/");
            echo "Favorite movie cookie set.";
            ?>
            </code></pre>
            <pre><code class="language-php">
      // get_cookie.php
            <?php
            if (isset($_COOKIE["favorite_movie"])) {
                echo "Favorite movie: " . $_COOKIE["favorite_movie"];
            } else {
                echo "No favorite movie found.";
            }
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Sessions and cookies are essential for maintaining state information across multiple requests in a web application. By mastering the concepts of starting, storing, retrieving, and destroying sessions and cookies, you can implement features such as user authentication, shopping carts, and personalization in your PHP applications. Practice using sessions and cookies to become proficient in PHP.</p>
          </section>
        `
      },
      
      {
        id: 'security',
        title: 'Security',
        content: `
          <section id="security">
            <h2>Security in PHP</h2>
      
            <h3>Introduction</h3>
            <p>Security is a critical aspect of web development. PHP applications are often targeted by attackers due to their widespread use. Implementing robust security measures is essential to protect your application and user data from various types of attacks.</p>
      
            <h3>Why Focus on Security?</h3>
            <ul>
              <li><strong>Data Protection:</strong> Safeguard user data from unauthorized access.</li>
              <li><strong>Trust:</strong> Maintain the trust of your users by ensuring their data is secure.</li>
              <li><strong>Compliance:</strong> Adhere to legal and regulatory requirements for data protection.</li>
              <li><strong>Business Continuity:</strong> Prevent security breaches that could disrupt business operations.</li>
            </ul>
      
            <h3>Common Security Threats</h3>
            <p>Some common security threats to PHP applications include:</p>
            <ul>
              <li><strong>SQL Injection:</strong> Injection of malicious SQL code into queries.</li>
              <li><strong>Cross-Site Scripting (XSS):</strong> Injection of malicious scripts into web pages.</li>
              <li><strong>Cross-Site Request Forgery (CSRF):</strong> Forcing a user to perform unwanted actions on a web application.</li>
              <li><strong>Remote Code Execution (RCE):</strong> Execution of arbitrary code on the server.</li>
              <li><strong>Session Hijacking:</strong> Stealing or manipulating a user's session.</li>
            </ul>
      
            <h3>SQL Injection</h3>
            <p>SQL injection occurs when an attacker injects malicious SQL code into a query. To prevent SQL injection, use prepared statements and parameterized queries.</p>
            <pre><code class="language-php">
            <?php
            // Using PDO for secure database queries
            $pdo = new PDO('mysql:host=localhost;dbname=testdb', 'username', 'password');
            $stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username');
            $stmt->execute(['username' => $_POST['username']]);
            $user = $stmt->fetch();
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>PDO:</strong> PHP Data Objects (PDO) is a secure way to access databases.</li>
              <li><strong>Prepared Statements:</strong> Use prepared statements to safely include user input in queries.</li>
              <li><strong>Parameterized Queries:</strong> Bind parameters to the query to prevent SQL injection.</li>
            </ul>
      
            <h3>Cross-Site Scripting (XSS)</h3>
            <p>XSS occurs when an attacker injects malicious scripts into web pages viewed by other users. To prevent XSS, escape user input before outputting it to the browser.</p>
            <pre><code class="language-php">
            <?php
            // Escape output to prevent XSS
            $username = htmlspecialchars($_POST['username'], ENT_QUOTES, 'UTF-8');
            echo "Hello, $username!";
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>htmlspecialchars():</strong> Escapes special characters to prevent XSS.</li>
              <li><strong>ENT_QUOTES:</strong> Converts both double and single quotes.</li>
              <li><strong>UTF-8:</strong> Ensures proper encoding to prevent XSS.</li>
            </ul>
      
            <h3>Cross-Site Request Forgery (CSRF)</h3>
            <p>CSRF occurs when an attacker tricks a user into performing actions on a web application without their consent. To prevent CSRF, use tokens to verify requests.</p>
            <pre><code class="language-php">
            <?php
            // Generate a CSRF token
            session_start();
            if (empty($_SESSION['csrf_token'])) {
                $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
            }
            $csrf_token = $_SESSION['csrf_token'];
            ?>
            <form method="POST" action="submit.php">
                <input type="hidden" name="csrf_token" value="<?php echo $csrf_token; ?>">
                <input type="text" name="username">
                <input type="submit" value="Submit">
            </form>
            </code></pre>
            <pre><code class="language-php">
      // submit.php
            <?php
            session_start();
            if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
                die('Invalid CSRF token');
            }
            // Process the form data
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>CSRF Token:</strong> A unique token generated for each session to verify requests.</li>
              <li><strong>bin2hex() and random_bytes():</strong> Secure functions to generate a random token.</li>
              <li><strong>Verification:</strong> Check the token in the form submission to prevent CSRF.</li>
            </ul>
      
            <h3>Remote Code Execution (RCE)</h3>
            <p>RCE occurs when an attacker can execute arbitrary code on the server. To prevent RCE, avoid using functions like <code>eval()</code> and <code>exec()</code> with user input.</p>
            <pre><code class="language-php">
            <?php
            // Avoid using dangerous functions with user input
            $input = escapeshellarg($_POST['input']);
            system("ls $input");
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>escapeshellarg():</strong> Escapes a string to make it safe for shell commands.</li>
              <li><strong>system():</strong> Executes an external program, here shown with escaping for safety.</li>
            </ul>
      
            <h3>Session Hijacking</h3>
            <p>Session hijacking involves stealing or manipulating a user's session. To prevent session hijacking, use secure session handling techniques.</p>
            <pre><code class="language-php">
            <?php
            // Secure session handling
            session_start();
            session_regenerate_id(true); // Regenerate session ID to prevent fixation
            $_SESSION['user_id'] = $user_id; // Store user ID in session
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>session_regenerate_id():</strong> Regenerates the session ID to prevent session fixation attacks.</li>
              <li><strong>Session Storage:</strong> Store user-related information securely in the session.</li>
            </ul>
      
            <h3>Assignment 1: Preventing SQL Injection</h3>
            <p>Create a PHP script that securely queries a database using prepared statements to prevent SQL injection. Assume a table named "users" with columns "username" and "password".</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $pdo = new PDO('mysql:host=localhost;dbname=testdb', 'username', 'password');
            $stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username AND password = :password');
            $stmt->execute([
                'username' => $_POST['username'],
                'password' => $_POST['password']
            ]);
            $user = $stmt->fetch();
            if ($user) {
                echo "Login successful!";
            } else {
                echo "Invalid username or password.";
            }
            ?>
            </code></pre>
      
            <h3>Assignment 2: Preventing XSS</h3>
            <p>Create a PHP script that displays user input on a webpage, ensuring that the input is properly escaped to prevent XSS.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $input = htmlspecialchars($_POST['input'], ENT_QUOTES, 'UTF-8');
            echo "User input: $input";
            ?>
            </code></pre>
      
            <h3>Assignment 3: Implementing CSRF Protection</h3>
            <p>Create a PHP form that includes a CSRF token. Write the server-side code to validate the token upon form submission.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            session_start();
            if (empty($_SESSION['csrf_token'])) {
                $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
            }
            $csrf_token = $_SESSION['csrf_token'];
            ?>
            <form method="POST" action="submit.php">
                <input type="hidden" name="csrf_token" value="<?php echo $csrf_token; ?>">
                <input type="text" name="username">
                <input type="submit" value="Submit">
            </form>
            </code></pre>
            <pre><code class="language-php">
      // submit.php
            <?php
            session_start();
            if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
                die('Invalid CSRF token');
            }
            // Process the form data
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Implementing robust security measures is essential to protect your PHP applications from various types of attacks. By understanding and mitigating common security threats such as SQL injection, XSS, CSRF, RCE, and session hijacking, you can create more secure and reliable web applications. Practice using these security techniques to become proficient in PHP security.</p>
          </section>
        `
      },
      
      {
        id: 'laravel',
        title: 'Laravel Framework',
        content: `
          <section id="laravel">
            <h2>Laravel Framework</h2>
      
            <h3>Introduction</h3>
            <p>Laravel is a popular PHP framework designed for web application development. It provides an elegant syntax, robust features, and a rich set of tools that help developers build modern, scalable, and maintainable applications.</p>
      
            <h3>Why Use Laravel?</h3>
            <ul>
              <li><strong>Elegant Syntax:</strong> Laravel's syntax is clean and expressive, making development more enjoyable and productive.</li>
              <li><strong>Comprehensive Documentation:</strong> Extensive documentation and community support make learning and troubleshooting easier.</li>
              <li><strong>Built-in Features:</strong> Laravel includes features like authentication, routing, sessions, and caching out of the box.</li>
              <li><strong>Modular Structure:</strong> Laravel's modular architecture allows for the easy integration of additional functionalities.</li>
              <li><strong>Strong Community:</strong> A large and active community provides plugins, packages, and resources for developers.</li>
            </ul>
      
            <h3>Installing Laravel</h3>
            <p>To install Laravel, you need to have Composer, a dependency manager for PHP, installed on your system. Use the following command to install Laravel:</p>
            <pre><code class="language-php">
            composer create-project --prefer-dist laravel/laravel myapp
            </code></pre>
      
            <h3>Creating a New Laravel Project</h3>
            <p>Once Laravel is installed, you can create a new project using the <code>laravel new</code> command:</p>
            <pre><code class="language-php">
            laravel new myapp
            </code></pre>
      
            <h3>Directory Structure</h3>
            <p>Laravel's directory structure is organized to help you build applications more efficiently. Here are some important directories:</p>
            <ul>
              <li><strong>app/:</strong> Contains the core code of your application.</li>
              <li><strong>config/:</strong> Contains configuration files.</li>
              <li><strong>database/:</strong> Contains database migrations, factories, and seeds.</li>
              <li><strong>public/:</strong> The entry point for all requests to your application.</li>
              <li><strong>resources/:</strong> Contains views, raw assets (CSS, JS), and language files.</li>
              <li><strong>routes/:</strong> Contains all route definitions for your application.</li>
              <li><strong>storage/:</strong> Contains compiled Blade templates, file-based sessions, file caches, and other files generated by the framework.</li>
              <li><strong>tests/:</strong> Contains your automated tests.</li>
              <li><strong>vendor/:</strong> Contains the Composer dependencies.</li>
            </ul>
      
            <h3>Routing</h3>
            <p>Routing in Laravel allows you to define application routes in a concise and expressive manner. Routes are defined in the <code>routes/web.php</code> file.</p>
            <pre><code class="language-php">
            <?php
      
            use Illuminate\\Support\\Facades\\Route;
      
            Route::get('/', function () {
                return view('welcome');
            });
      
            Route::get('/about', function () {
                return 'This is the about page.';
            });
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Route::get()</strong>: Defines a GET route for the application.</li>
              <li><strong>view('welcome')</strong>: Returns the <code>welcome</code> view.</li>
              <li><strong>Route::get('/about')</strong>: Defines a GET route for the <code>/about</code> URL.</li>
              <li><strong>Callback Function</strong>: Returns a string for the <code>/about</code> URL.</li>
            </ul>
      
            <h3>Controllers</h3>
            <p>Controllers in Laravel are used to group related request handling logic into a single class. You can create a controller using the Artisan command:</p>
            <pre><code class="language-php">
            php artisan make:controller PageController
            </code></pre>
            <p>Here is an example of a basic controller:</p>
            <pre><code class="language-php">
            <?php
      
            namespace App\\Http\\Controllers;
      
            use Illuminate\\Http\\Request;
      
            class PageController extends Controller
            {
                public function home()
                {
                    return view('home');
                }
      
                public function about()
                {
                    return view('about');
                }
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>namespace App\\Http\\Controllers;</strong>: Declares the namespace of the controller.</li>
              <li><strong>use Illuminate\\Http\\Request;</strong>: Imports the Request class.</li>
              <li><strong>class PageController extends Controller</strong>: Defines the controller class.</li>
              <li><strong>home()</strong>: Method to handle the home page request.</li>
              <li><strong>about()</strong>: Method to handle the about page request.</li>
              <li><strong>return view('home')</strong>: Returns the <code>home</code> view.</li>
              <li><strong>return view('about')</strong>: Returns the <code>about</code> view.</li>
            </ul>
      
            <h3>Views</h3>
            <p>Views in Laravel are stored in the <code>resources/views</code> directory and use the Blade templating engine. Here is an example of a simple Blade view:</p>
            <pre><code class="language-php">
            <!-- resources/views/home.blade.php -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Laravel application.</p>
            </body>
            </html>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Blade Syntax:</strong> Blade is Laravel's templating engine, which provides a clean and simple syntax for defining views.</li>
              <li><strong>HTML Structure:</strong> Standard HTML structure used in Blade templates.</li>
            </ul>
      
            <h3>Database</h3>
            <p>Laravel provides an elegant ORM called Eloquent, which makes database interactions simple and intuitive. Here is an example of defining a model and performing basic CRUD operations:</p>
            <pre><code class="language-php">
            php artisan make:model Post -m
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>php artisan make:model Post -m</strong>: Creates a new model named <code>Post</code> along with a migration file.</li>
            </ul>
            <pre><code class="language-php">
            <?php
      
            namespace App\\Models;
      
            use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
            use Illuminate\\Database\\Eloquent\\Model;
      
            class Post extends Model
            {
                use HasFactory;
      
                protected $fillable = ['title', 'body'];
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>namespace App\\Models;</strong>: Declares the namespace of the model.</li>
              <li><strong>use Illuminate\\Database
              \\Eloquent\\Factories
              \\HasFactory;</strong>: Imports the HasFactory trait.</li>
              <li><strong>class Post extends Model</strong>: Defines the Post model class.</li>
              <li><strong>protected $fillable</strong>: Specifies the attributes that are mass assignable.</li>
            </ul>
            <pre><code class="language-php">
            <?php
            use App\\Models\\Post;
      
            // Creating a new post
            $post = Post::create([
                'title' => 'First Post',
                'body' => 'This is the body of the first post.'
            ]);
      
            // Retrieving a post
            $post = Post::find(1);
      
            // Updating a post
            $post->update([
                'title' => 'Updated Title',
                'body' => 'Updated body of the post.'
            ]);
      
            // Deleting a post
            $post->delete();
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Post::create()</strong>: Creates a new post with the specified title and body.</li>
              <li><strong>Post::find(1)</strong>: Retrieves the post with ID 1.</li>
              <li><strong>$post->update()</strong>: Updates the post with the specified title and body.</li>
              <li><strong>$post->delete()</strong>: Deletes the post.</li>
            </ul>
      
            <h3>Assignment 1: Creating a Laravel Project</h3>
            <p>Create a new Laravel project, define routes for a home page and an about page, and create corresponding views.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            laravel new myapp
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // routes/web.php
      
            use Illuminate\\Support\\Facades\\Route;
      
            Route::get('/', function () {
                return view('home');
            });
      
            Route::get('/about', function () {
                return view('about');
            });
            ?>
            </code></pre>
            <pre><code class="language-php">
            <!-- resources/views/home.blade.php -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Laravel application.</p>
            </body>
            </html>
            </code></pre>
            <pre><code class="language-php">
            <!-- resources/views/about.blade.php -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>About Page</title>
            </head>
            <body>
                <h1>About Us</h1>
                <p>This is the about page.</p>
            </body>
            </html>
            </code></pre>
      
            <h3>Assignment 2: Creating a Controller</h3>
            <p>Create a controller named PageController with methods for handling the home page and about page requests. Update the routes to use the controller methods.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            php artisan make:controller PageController
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // app/Http/Controllers/PageController.php
      
            namespace App\\Http\\Controllers;
      
            use Illuminate\\Http\\Request;
      
            class PageController extends Controller
            {
                public function home()
                {
                    return view('home');
                }
      
                public function about()
                {
                    return view('about');
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // routes/web.php
      
            use Illuminate\\Support\\Facades\\Route;
            use App\\Http\\Controllers\\PageController;
      
            Route::get('/', [PageController::class, 'home']);
            Route::get('/about', [PageController::class, 'about']);
            ?>
            </code></pre>
      
            <h3>Assignment 3: Creating a Model and Performing CRUD Operations</h3>
            <p>Create a model named Post with title and body attributes. Perform basic CRUD operations on the Post model.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            php artisan make:model Post -m
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // app/Models/Post.php
      
            namespace App\\Models;
      
            use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
            use Illuminate\\Database\\Eloquent\\Model;
      
            class Post extends Model
            {
                use HasFactory;
      
                protected $fillable = ['title', 'body'];
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // Using the Post model
      
            use App\\Models\\Post;
      
            // Creating a new post
            $post = Post::create([
                'title' => 'First Post',
                'body' => 'This is the body of the first post.'
            ]);
      
            // Retrieving a post
            $post = Post::find(1);
      
            // Updating a post
            $post->update([
                'title' => 'Updated Title',
                'body' => 'Updated body of the post.'
            ]);
      
            // Deleting a post
            $post->delete();
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Laravel is a powerful PHP framework that simplifies web application development with its elegant syntax, built-in features, and strong community support. By mastering the basics of routing, controllers, views, and Eloquent ORM, you can build robust and scalable applications. Practice using Laravel to become proficient in PHP web development.</p>
          </section>
        `
      },
      {
        id: 'symphony',
        title: 'Symfony Framework',
        content: `
          <section id="symphony">
            <h2>Symfony Framework</h2>
      
            <h3>Introduction</h3>
            <p>Symfony is a powerful PHP framework used for building web applications. It provides a set of reusable PHP components and a web application framework that helps in speeding up the creation and maintenance of web applications. Symfony is known for its flexibility, scalability, and ease of use.</p>
      
            <h3>Why Use Symfony?</h3>
            <ul>
              <li><strong>Modular Components:</strong> Reusable components that can be used independently or as part of the Symfony framework.</li>
              <li><strong>Flexibility:</strong> Highly customizable and adaptable to different project needs.</li>
              <li><strong>Performance:</strong> Optimized for performance with built-in tools for profiling and debugging.</li>
              <li><strong>Strong Community:</strong> A large and active community provides support, plugins, and resources.</li>
              <li><strong>Comprehensive Documentation:</strong> Extensive documentation and tutorials available for developers.</li>
            </ul>
      
            <h3>Installing Symfony</h3>
            <p>To install Symfony, you need to have Composer installed on your system. Use the following command to create a new Symfony project:</p>
            <pre><code class="language-php">
            composer create-project symfony/website-skeleton myapp
            </code></pre>
      
            <h3>Creating a New Symfony Project</h3>
            <p>Once Symfony is installed, you can create a new project using the Symfony CLI:</p>
            <pre><code class="language-php">
            symfony new myapp --full
            </code></pre>
      
            <h3>Directory Structure</h3>
            <p>Symfony's directory structure is organized to help you build applications more efficiently. Here are some important directories:</p>
            <ul>
              <li><strong>src/:</strong> Contains the core code of your application.</li>
              <li><strong>config/:</strong> Contains configuration files.</li>
              <li><strong>public/:</strong> The entry point for all requests to your application.</li>
              <li><strong>templates/:</strong> Contains Twig templates for your views.</li>
              <li><strong>var/:</strong> Contains logs, cache, and other temporary files.</li>
              <li><strong>vendor/:</strong> Contains the Composer dependencies.</li>
              <li><strong>tests/:</strong> Contains your automated tests.</li>
            </ul>
      
            <h3>Routing</h3>
            <p>Routing in Symfony allows you to define application routes in a concise and expressive manner. Routes are defined in the <code>config/routes.yaml</code> file or using annotations in controller classes.</p>
            <pre><code class="language-php">
            # config/routes.yaml
            index:
                path: /
                controller: App\\Controller\\DefaultController::index
      
            about:
                path: /about
                controller: App\\Controller\\DefaultController::about
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>index:</strong> Defines the route for the homepage.</li>
              <li><strong>path:</strong> Specifies the URL path for the route.</li>
              <li><strong>controller:</strong> Specifies the controller and method to handle the route.</li>
              <li><strong>about:</strong> Defines the route for the about page.</li>
            </ul>
      
            <h3>Controllers</h3>
            <p>Controllers in Symfony are used to group related request handling logic into a single class. You can create a controller using the Symfony CLI:</p>
            <pre><code class="language-php">
            php bin/console make:controller DefaultController
            </code></pre>
            <p>Here is an example of a basic controller:</p>
            <pre><code class="language-php">
            <?php
      
            namespace App\\Controller;
      
            use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
            use Symfony\\Component\\HttpFoundation\\Response;
            use Symfony\\Component\\Routing\\Annotation\\Route;
      
            class DefaultController extends AbstractController
            {
                /**
                 * @Route("/", name="index")
                 */
                public function index(): Response
                {
                    return $this->render('index.html.twig');
                }
      
                /**
                 * @Route("/about", name="about")
                 */
                public function about(): Response
                {
                    return new Response('This is the about page.');
                }
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>namespace App\\Controller;</strong>: Declares the namespace of the controller.</li>
              <li><strong>use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;</strong>: Imports the base controller class.</li>
              <li><strong>use Symfony\\Component\\HttpFoundation\\Response;</strong>: Imports the Response class.</li>
              <li><strong>use Symfony\\Component\\Routing\\Annotation\\Route;</strong>: Imports the Route annotation.</li>
              <li><strong>class DefaultController extends AbstractController</strong>: Defines the controller class.</li>
              <li><strong>@Route("/", name="index")</strong>: Annotation defining the route for the homepage.</li>
              <li><strong>index()</strong>: Method to handle the homepage request.</li>
              <li><strong>@Route("/about", name="about")</strong>: Annotation defining the route for the about page.</li>
              <li><strong>about()</strong>: Method to handle the about page request.</li>
              <li><strong>return $this->render('index.html.twig')</strong>: Renders the Twig template for the homepage.</li>
              <li><strong>return new Response('This is the about page.')</strong>: Returns a plain text response for the about page.</li>
            </ul>
      
            <h3>Views</h3>
            <p>Views in Symfony are stored in the <code>templates</code> directory and use the Twig templating engine. Here is an example of a simple Twig view:</p>
            <pre><code class="language-php">
            {# templates/index.html.twig #}
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Symfony application.</p>
            </body>
            </html>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Twig Syntax:</strong> Twig is Symfony's templating engine, providing a clean and simple syntax for defining views.</li>
              <li><strong>HTML Structure:</strong> Standard HTML structure used in Twig templates.</li>
            </ul>
      
            <h3>Database</h3>
            <p>Symfony uses Doctrine as its default ORM, making database interactions simple and intuitive. Here is an example of defining an entity and performing basic CRUD operations:</p>
            <pre><code class="language-php">
            php bin/console make:entity Post
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>php bin/console make:entity Post</strong>: Creates a new entity named <code>Post</code>.</li>
            </ul>
            <pre><code class="language-php">
            <?php
      
            namespace App\\Entity;
      
            use Doctrine\\ORM\\Mapping as ORM;
      
            /**
             * @ORM\\Entity(repositoryClass="App\\Repository\\PostRepository")
             */
            class Post
            {
                /**
                 * @ORM\\Id
                 * @ORM\\GeneratedValue
                 * @ORM\\Column(type="integer")
                 */
                private $id;
      
                /**
                 * @ORM\\Column(type="string", length=255)
                 */
                private $title;
      
                /**
                 * @ORM\\Column(type="text")
                 */
                private $body;
      
                // Getters and Setters
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>namespace App\\Entity;</strong>: Declares the namespace of the entity.</li>
              <li><strong>use Doctrine\\ORM\\Mapping as ORM;</strong>: Imports the ORM mapping class.</li>
              <li><strong>@ORM\\Entity</strong>: Annotation defining the entity class.</li>
              <li><strong>@ORM\\Id</strong>: Annotation defining the primary key field.</li>
              <li><strong>@ORM\\GeneratedValue</strong>: Annotation indicating that the value is generated automatically.</li>
              <li><strong>@ORM\\Column</strong>: Annotation defining the properties of the entity's columns.</li>
            </ul>
            <pre><code class="language-php">
            <?php
            // Using the Post entity
      
            use App\\Entity\\Post;
            use Doctrine\\ORM\\EntityManagerInterface;
      
            // Creating a new post
            $post = new Post();
            $post->setTitle('First Post');
            $post->setBody('This is the body of the first post.');
      
            // Persisting the post
            $entityManager->persist($post);
            $entityManager->flush();
      
            // Retrieving a post
            $post = $entityManager->getRepository(Post::class)->find(1);
      
            // Updating a post
            $post->setTitle('Updated Title');
            $entityManager->flush();
      
            // Deleting a post
            $entityManager->remove($post);
            $entityManager->flush();
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>EntityManagerInterface:</strong> Interface for managing entities.</li>
              <li><strong>$entityManager->persist($post)</strong>: Persists the post entity.</li>
              <li><strong>$entityManager->flush()</strong>: Flushes the changes to the database.</li>
              <li><strong>getRepository(Post::class)->find(1)</strong>: Retrieves the post with ID 1.</li>
              <li><strong>$post->setTitle('Updated Title')</strong>: Updates the title of the post.</li>
              <li><strong>$entityManager->remove($post)</strong>: Removes the post entity.</li>
            </ul>
      
            <h3>Assignment 1: Creating a Symfony Project</h3>
            <p>Create a new Symfony project, define routes for a home page and an about page, and create corresponding views.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            symfony new myapp --full
            </code></pre>
            <pre><code class="language-php">
            # config/routes.yaml
            index:
                path: /
                controller: App\\Controller\\DefaultController::index
      
            about:
                path: /about
                controller: App\\Controller\\DefaultController::about
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // src/Controller/DefaultController.php
      
            namespace App\\Controller;
      
            use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
            use Symfony\\Component\\HttpFoundation\\Response;
            use Symfony\\Component\\Routing\\Annotation\\Route;
      
            class DefaultController extends AbstractController
            {
                /**
                 * @Route("/", name="index")
                 */
                public function index(): Response
                {
                    return $this->render('index.html.twig');
                }
      
                /**
                 * @Route("/about", name="about")
                 */
                public function about(): Response
                {
                    return new Response('This is the about page.');
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            {# templates/index.html.twig #}
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Symfony application.</p>
            </body>
            </html>
            </code></pre>
            <pre><code class="language-php">
            {# templates/about.html.twig #}
            <!DOCTYPE html>
            <html>
            <head>
                <title>About Page</title>
            </head>
            <body>
                <h1>About Us</h1>
                <p>This is the about page.</p>
            </body>
            </html>
            </code></pre>
      
            <h3>Assignment 2: Creating a Controller</h3>
            <p>Create a controller named PageController with methods for handling the home page and about page requests. Update the routes to use the controller methods.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            php bin/console make:controller PageController
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // src/Controller/PageController.php
      
            namespace App\\Controller;
      
            use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;
            use Symfony\\Component\\HttpFoundation\\Response;
            use Symfony\\Component\\Routing\\Annotation\\Route;
      
            class PageController extends AbstractController
            {
                /**
                 * @Route("/", name="home")
                 */
                public function home(): Response
                {
                    return $this->render('home.html.twig');
                }
      
                /**
                 * @Route("/about", name="about")
                 */
                public function about(): Response
                {
                    return $this->render('about.html.twig');
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            # config/routes.yaml
      
            home:
                path: /
                controller: App\\Controller\\PageController::home
      
            about:
                path: /about
                controller: App\\Controller\\PageController::about
            </code></pre>
      
            <h3>Assignment 3: Creating an Entity and Performing CRUD Operations</h3>
            <p>Create an entity named Post with title and body attributes. Perform basic CRUD operations on the Post entity.</p>
            <h4>Solution:</h4>
            <pre><code class="language-bash">
            php bin/console make:entity Post
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // src/Entity/Post.php
      
            namespace App\\Entity;
      
            use Doctrine\\ORM\\Mapping as ORM;
      
            /**
             * @ORM\\Entity(repositoryClass="App\\Repository\\PostRepository")
             */
            class Post
            {
                /**
                 * @ORM\\Id
                 * @ORM\\GeneratedValue
                 * @ORM\\Column(type="integer")
                 */
                private $id;
      
                /**
                 * @ORM\\Column(type="string", length=255)
                 */
                private $title;
      
                /**
                 * @ORM\\Column(type="text")
                 */
                private $body;
      
                // Getters and Setters
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // Using the Post entity
      
            use App\\Entity\\Post;
            use Doctrine\\ORM\\EntityManagerInterface;
      
            // Creating a new post
            $post = new Post();
            $post->setTitle('First Post');
            $post->setBody('This is the body of the first post.');
      
            // Persisting the post
            $entityManager->persist($post);
            $entityManager->flush();
      
            // Retrieving a post
            $post = $entityManager->getRepository(Post::class)->find(1);
      
            // Updating a post
            $post->setTitle('Updated Title');
            $entityManager->flush();
      
            // Deleting a post
            $entityManager->remove($post);
            $entityManager->flush();
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Symfony is a powerful PHP framework that simplifies web application development with its modular components, flexibility, and strong community support. By mastering the basics of routing, controllers, views, and Doctrine ORM, you can build robust and scalable applications. Practice using Symfony to become proficient in PHP web development.</p>
          </section>
        `
      },
      
      {
        id: 'code',
        title: 'CodeIgniter Framework',
        content: `
          <section id="code">
            <h2>CodeIgniter Framework</h2>
      
            <h3>Introduction</h3>
            <p>CodeIgniter is a powerful PHP framework that is widely used for building dynamic web applications. It is known for its simplicity, speed, and performance. CodeIgniter follows the Model-View-Controller (MVC) pattern and provides a rich set of libraries for common tasks, making it a popular choice among developers.</p>
      
            <h3>Why Use CodeIgniter?</h3>
            <ul>
              <li><strong>Simplicity:</strong> Easy to learn and use, with a straightforward setup process.</li>
              <li><strong>Performance:</strong> Lightweight and fast, ideal for high-performance applications.</li>
              <li><strong>MVC Architecture:</strong> Follows the MVC pattern, promoting organized and maintainable code.</li>
              <li><strong>Comprehensive Documentation:</strong> Extensive documentation and tutorials available.</li>
              <li><strong>Active Community:</strong> A large community providing support, plugins, and resources.</li>
            </ul>
      
            <h3>Installing CodeIgniter</h3>
            <p>To install CodeIgniter, you can download it from the official website or use Composer. Here is the command to install CodeIgniter using Composer:</p>
            <pre><code class="language-php">
            composer create-project codeigniter4/appstarter myapp
            </code></pre>
      
            <h3>Directory Structure</h3>
            <p>CodeIgniter's directory structure is organized to help you build applications efficiently. Here are some important directories:</p>
            <ul>
              <li><strong>app/:</strong> Contains the core code of your application.</li>
              <li><strong>public/:</strong> The entry point for all requests to your application.</li>
              <li><strong>system/:</strong> Contains the CodeIgniter core framework files.</li>
              <li><strong>vendor/:</strong> Contains the Composer dependencies.</li>
              <li><strong>writable/:</strong> Contains writable files such as logs and cache.</li>
            </ul>
      
            <h3>Routing</h3>
            <p>Routing in CodeIgniter allows you to define application routes in a concise and expressive manner. Routes are defined in the <code>app/Config/Routes.php</code> file.</p>
            <pre><code class="language-php">
            <?php
      
            namespace Config;
      
            use CodeIgniter\\Router\\RouterCollection;
      
            $routes = Services::routes();
      
            $routes->get('/', 'Home::index');
            $routes->get('/about', 'Pages::about');
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$routes->get()</strong>: Defines a GET route for the application.</li>
              <li><strong>'Home::index'</strong>: Specifies the controller and method to handle the route.</li>
              <li><strong>'Pages::about'</strong>: Defines the route for the about page.</li>
            </ul>
      
            <h3>Controllers</h3>
            <p>Controllers in CodeIgniter are used to group related request handling logic into a single class. You can create a controller manually or using the CLI:</p>
            <pre><code class="language-php">
            php spark make:controller Pages
            </code></pre>
            <p>Here is an example of a basic controller:</p>
            <pre><code class="language-php">
            <?php
      
            namespace App\\Controllers;
      
            use CodeIgniter\\Controller;
      
            class Pages extends Controller
            {
                public function index()
                {
                    return view('welcome_message');
                }
      
                public function about()
                {
                    return 'This is the about page.';
                }
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>namespace App\\Controllers;</strong>: Declares the namespace of the controller.</li>
              <li><strong>use CodeIgniter\\Controller;</strong>: Imports the base controller class.</li>
              <li><strong>class Pages extends Controller</strong>: Defines the controller class.</li>
              <li><strong>index()</strong>: Method to handle the homepage request.</li>
              <li><strong>about()</strong>: Method to handle the about page request.</li>
              <li><strong>return view('welcome_message')</strong>: Returns the welcome message view.</li>
              <li><strong>return 'This is the about page.'</strong>: Returns a plain text response for the about page.</li>
            </ul>
      
            <h3>Views</h3>
            <p>Views in CodeIgniter are stored in the <code>app/Views</code> directory. Here is an example of a simple view:</p>
            <pre><code class="language-php">
            <!-- app/Views/welcome_message.php -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple CodeIgniter application.</p>
            </body>
            </html>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>HTML Structure:</strong> Standard HTML structure used in CodeIgniter views.</li>
            </ul>
      
            <h3>Database</h3>
            <p>CodeIgniter provides an easy-to-use database abstraction layer. Here is an example of defining a model and performing basic CRUD operations:</p>
            <pre><code class="language-php">
            php spark make:model Post
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>php spark make:model Post</strong>: Creates a new model named <code>Post</code>.</li>
            </ul>
            <pre><code class="language-php">
            <?php
      
            namespace App\\Models;
      
            use CodeIgniter\\Model;
      
            class Post extends Model
            {
                protected $table = 'posts';
                protected $allowedFields = ['title', 'body'];
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>namespace App\\Models;</strong>: Declares the namespace of the model.</li>
              <li><strong>use CodeIgniter\\Model;</strong>: Imports the base model class.</li>
              <li><strong>class Post extends Model</strong>: Defines the Post model class.</li>
              <li><strong>protected $table</strong>: Specifies the table associated with the model.</li>
              <li><strong>protected $allowedFields</strong>: Specifies the attributes that are mass assignable.</li>
            </ul>
            <pre><code class="language-php">
            <?php
            use App\\Models\\Post;
      
            // Creating a new post
            $postModel = new Post();
            $postModel->save([
                'title' => 'First Post',
                'body' => 'This is the body of the first post.'
            ]);
      
            // Retrieving a post
            $post = $postModel->find(1);
      
            // Updating a post
            $postModel->update(1, [
                'title' => 'Updated Title',
                'body' => 'Updated body of the post.'
            ]);
      
            // Deleting a post
            $postModel->delete(1);
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$postModel->save()</strong>: Creates a new post with the specified title and body.</li>
              <li><strong>$postModel->find(1)</strong>: Retrieves the post with ID 1.</li>
              <li><strong>$postModel->update(1, [...])</strong>: Updates the post with ID 1.</li>
              <li><strong>$postModel->delete(1)</strong>: Deletes the post with ID 1.</li>
            </ul>
      
            <h3>Assignment 1: Creating a CodeIgniter Project</h3>
            <p>Create a new CodeIgniter project, define routes for a home page and an about page, and create corresponding views.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            composer create-project codeigniter4/appstarter myapp
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // app/Config/Routes.php
      
            namespace Config;
      
            use CodeIgniter\\Router\\RouterCollection;
      
            $routes = Services::routes();
      
            $routes->get('/', 'Home::index');
            $routes->get('/about', 'Pages::about');
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // app/Controllers/Pages.php
      
            namespace App\\Controllers;
      
            use CodeIgniter\\Controller;
      
            class Pages extends Controller
            {
                public function index()
                {
                    return view('welcome_message');
                }
      
                public function about()
                {
                    return 'This is the about page.';
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <!-- app/Views/welcome_message.php -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple CodeIgniter application.</p>
            </body>
            </html>
            </code></pre>
            <pre><code class="language-php">
            <!-- app/Views/about.php -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>About Page</title>
            </head>
            <body>
                <h1>About Us</h1>
                <p>This is the about page.</p>
            </body>
            </html>
            </code></pre>
      
            <h3>Assignment 2: Creating a Controller</h3>
            <p>Create a controller named PageController with methods for handling the home page and about page requests. Update the routes to use the controller methods.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            php spark make:controller PageController
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // app/Controllers/PageController.php
      
            namespace App\\Controllers;
      
            use CodeIgniter\\Controller;
      
            class PageController extends Controller
            {
                public function home()
                {
                    return view('home');
                }
      
                public function about()
                {
                    return view('about');
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // app/Config/Routes.php
      
            $routes->get('/', 'PageController::home');
            $routes->get('/about', 'PageController::about');
            ?>
            </code></pre>
      
            <h3>Assignment 3: Creating a Model and Performing CRUD Operations</h3>
            <p>Create a model named Post with title and body attributes. Perform basic CRUD operations on the Post model.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            php spark make:model Post
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // app/Models/Post.php
      
            namespace App\\Models;
      
            use CodeIgniter\\Model;
      
            class Post extends Model
            {
                protected $table = 'posts';
                protected $allowedFields = ['title', 'body'];
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // Using the Post model
      
            use App\\Models\\Post;
      
            // Creating a new post
            $postModel = new Post();
            $postModel->save([
                'title' => 'First Post',
                'body' => 'This is the body of the first post.'
            ]);
      
            // Retrieving a post
            $post = $postModel->find(1);
      
            // Updating a post
            $postModel->update(1, [
                'title' => 'Updated Title',
                'body' => 'Updated body of the post.'
            ]);
      
            // Deleting a post
            $postModel->delete(1);
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>CodeIgniter is a powerful PHP framework that simplifies web application development with its simplicity, performance, and MVC architecture. By mastering the basics of routing, controllers, views, and database interactions, you can build robust and scalable applications. Practice using CodeIgniter to become proficient in PHP web development.</p>
          </section>
        `
      },
      
      {
        id: 'yii',
        title: 'Yii Framework',
        content: `
          <section id="yii">
            <h2>Yii Framework</h2>
      
            <h3>Introduction</h3>
            <p>Yii is a high-performance PHP framework best for developing web applications. It is fast, secure, and efficient, providing a rich set of features and tools for developers to build robust and scalable applications.</p>
      
            <h3>Why Use Yii?</h3>
            <ul>
              <li><strong>Performance:</strong> Yii is known for its high performance and efficiency.</li>
              <li><strong>Security:</strong> Built-in security features such as input validation, output filtering, SQL injection prevention, and more.</li>
              <li><strong>Extensibility:</strong> Highly extensible, allowing developers to customize and extend the framework to meet their needs.</li>
              <li><strong>MVC Architecture:</strong> Follows the Model-View-Controller (MVC) pattern, promoting organized and maintainable code.</li>
              <li><strong>Comprehensive Documentation:</strong> Extensive documentation and tutorials available.</li>
              <li><strong>Active Community:</strong> A large community providing support, plugins, and resources.</li>
            </ul>
      
            <h3>Installing Yii</h3>
            <p>To install Yii, you can use Composer. Here is the command to create a new Yii project:</p>
            <pre><code class="language-php">
            composer create-project --prefer-dist yiisoft/yii2-app-basic myapp
            </code></pre>
      
            <h3>Directory Structure</h3>
            <p>Yii's directory structure is organized to help you build applications efficiently. Here are some important directories:</p>
            <ul>
              <li><strong>assets/:</strong> Contains assets such as CSS, JavaScript, and images.</li>
              <li><strong>commands/:</strong> Contains console commands.</li>
              <li><strong>config/:</strong> Contains configuration files.</li>
              <li><strong>controllers/:</strong> Contains controller classes.</li>
              <li><strong>models/:</strong> Contains model classes.</li>
              <li><strong>runtime/:</strong> Contains temporary files generated during runtime.</li>
              <li><strong>views/:</strong> Contains view files.</li>
              <li><strong>web/:</strong> The entry point for all requests to your application.</li>
            </ul>
      
            <h3>Routing</h3>
            <p>Routing in Yii allows you to define application routes in a concise and expressive manner. Routes are defined in the <code>config/web.php</code> file or using annotations in controller classes.</p>
            <pre><code class="language-php">
            <?php
      
            return [
                'id' => 'basic',
                'basePath' => dirname(__DIR__),
                'bootstrap' => ['log'],
                'components' => [
                    'request' => [
                        'cookieValidationKey' => 'your-secret-key',
                    ],
                    'urlManager' => [
                        'enablePrettyUrl' => true,
                        'showScriptName' => false,
                        'rules' => [
                            '' => 'site/index',
                            'about' => 'site/about',
                        ],
                    ],
                ],
            ];
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>'urlManager':</strong> Component for managing URLs in the application.</li>
              <li><strong>'enablePrettyUrl':</strong> Enables user-friendly URLs without the <code>index.php</code> part.</li>
              <li><strong>'showScriptName':</strong> Hides the <code>index.php</code> part in URLs.</li>
              <li><strong>'rules':</strong> Defines URL rules for routing.</li>
              <li><strong>'' => 'site/index':</strong> Defines the route for the homepage.</li>
              <li><strong>'about' => 'site/about':</strong> Defines the route for the about page.</li>
            </ul>
      
            <h3>Controllers</h3>
            <p>Controllers in Yii are used to group related request handling logic into a single class. You can create a controller manually or using the Yii CLI:</p>
            <pre><code class="language-php">
            php yii gii/controller --controllerClass=app\\controllers\\SiteController
            </code></pre>
            <p>Here is an example of a basic controller:</p>
            <pre><code class="language-php">
            <?php
      
            namespace app\\controllers;
      
            use yii\\web\\Controller;
      
            class SiteController extends Controller
            {
                public function actionIndex()
                {
                    return $this->render('index');
                }
      
                public function actionAbout()
                {
                    return $this->render('about');
                }
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>namespace app\\controllers;</strong>: Declares the namespace of the controller.</li>
              <li><strong>use yii\\web\\Controller;</strong>: Imports the base controller class.</li>
              <li><strong>class SiteController extends Controller</strong>: Defines the controller class.</li>
              <li><strong>actionIndex()</strong>: Method to handle the homepage request.</li>
              <li><strong>actionAbout()</strong>: Method to handle the about page request.</li>
              <li><strong>return $this->render('index')</strong>: Renders the <code>index</code> view.</li>
              <li><strong>return $this->render('about')</strong>: Renders the <code>about</code> view.</li>
            </ul>
      
            <h3>Views</h3>
            <p>Views in Yii are stored in the <code>views</code> directory. Here is an example of a simple view:</p>
            <pre><code class="language-php">
            <!-- views/site/index.php -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Yii application.</p>
            </body>
            </html>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>HTML Structure:</strong> Standard HTML structure used in Yii views.</li>
            </ul>
      
            <h3>Database</h3>
            <p>Yii provides an easy-to-use Active Record implementation for interacting with the database. Here is an example of defining a model and performing basic CRUD operations:</p>
            <pre><code class="language-php">
            php yii gii/model --tableName=post --modelClass=Post
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>php yii gii/model</strong>: Command to generate a new model.</li>
              <li><strong>--tableName=post</strong>: Specifies the table name.</li>
              <li><strong>--modelClass=Post</strong>: Specifies the model class name.</li>
            </ul>
            <pre><code class="language-php">
            <?php
      
            namespace app\\models;
      
            use yii\\db\\ActiveRecord;
      
            class Post extends ActiveRecord
            {
                public static function tableName()
                {
                    return 'post';
                }
      
                public function rules()
                {
                    return [
                        [['title', 'body'], 'required'],
                    ];
                }
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>namespace app\\models;</strong>: Declares the namespace of the model.</li>
              <li><strong>use yii\\db\\ActiveRecord;</strong>: Imports the base ActiveRecord class.</li>
              <li><strong>class Post extends ActiveRecord</strong>: Defines the Post model class.</li>
              <li><strong>tableName()</strong>: Specifies the table associated with the model.</li>
              <li><strong>rules()</strong>: Defines validation rules for the model attributes.</li>
            </ul>
            <pre><code class="language-php">
            <?php
            use app\\models\\Post;
      
            // Creating a new post
            $post = new Post();
            $post->title = 'First Post';
            $post->body = 'This is the body of the first post.';
            $post->save();
      
            // Retrieving a post
            $post = Post::findOne(1);
      
            // Updating a post
            $post->title = 'Updated Title';
            $post->save();
      
            // Deleting a post
            $post->delete();
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>new Post()</strong>: Creates a new post object.</li>
              <li><strong>$post->save()</strong>: Saves the post to the database.</li>
              <li><strong>Post::findOne(1)</strong>: Retrieves the post with ID 1.</li>
              <li><strong>$post->delete()</strong>: Deletes the post.</li>
            </ul>
      
            <h3>Assignment 1: Creating a Yii Project</h3>
            <p>Create a new Yii project, define routes for a home page and an about page, and create corresponding views.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            composer create-project --prefer-dist yiisoft/yii2-app-basic myapp
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // config/web.php
      
            return [
                'id' => 'basic',
                'basePath' => dirname(__DIR__),
                'bootstrap' => ['log'],
                'components' => [
                    'request' => [
                        'cookieValidationKey' => 'your-secret-key',
                    ],
                    'urlManager' => [
                        'enablePrettyUrl' => true,
                        'showScriptName' => false,
                        'rules' => [
                            '' => 'site/index',
                            'about' => 'site/about',
                        ],
                    ],
                ],
            ];
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // controllers/SiteController.php
      
            namespace app\\controllers;
      
            use yii\\web\\Controller;
      
            class SiteController extends Controller
            {
                public function actionIndex()
                {
                    return $this->render('index');
                }
      
                public function actionAbout()
                {
                    return $this->render('about');
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <!-- views/site/index.php -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Yii application.</p>
            </body>
            </html>
            </code></pre>
            <pre><code class="language-php">
            <!-- views/site/about.php -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>About Page</title>
            </head>
            <body>
                <h1>About Us</h1>
                <p>This is the about page.</p>
            </body>
            </html>
            </code></pre>
      
            <h3>Assignment 2: Creating a Controller</h3>
            <p>Create a controller named PageController with methods for handling the home page and about page requests. Update the routes to use the controller methods.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            php yii gii/controller --controllerClass=app\\controllers\\PageController
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // controllers/PageController.php
      
            namespace app\\controllers;
      
            use yii\\web\\Controller;
      
            class PageController extends Controller
            {
                public function actionHome()
                {
                    return $this->render('home');
                }
      
                public function actionAbout()
                {
                    return $this->render('about');
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // config/web.php
      
            return [
                'id' => 'basic',
                'basePath' => dirname(__DIR__),
                'bootstrap' => ['log'],
                'components' => [
                    'request' => [
                        'cookieValidationKey' => 'your-secret-key',
                    ],
                    'urlManager' => [
                        'enablePrettyUrl' => true,
                        'showScriptName' => false,
                        'rules' => [
                            '' => 'page/home',
                            'about' => 'page/about',
                        ],
                    ],
                ],
            ];
            ?>
            </code></pre>
      
            <h3>Assignment 3: Creating a Model and Performing CRUD Operations</h3>
            <p>Create a model named Post with title and body attributes. Perform basic CRUD operations on the Post model.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            php yii gii/model --tableName=post --modelClass=Post
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // models/Post.php
      
            namespace app\\models;
      
            use yii\\db\\ActiveRecord;
      
            class Post extends ActiveRecord
            {
                public static function tableName()
                {
                    return 'post';
                }
      
                public function rules()
                {
                    return [
                        [['title', 'body'], 'required'],
                    ];
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // Using the Post model
      
            use app\\models\\Post;
      
            // Creating a new post
            $post = new Post();
            $post->title = 'First Post';
            $post->body = 'This is the body of the first post.';
            $post->save();
      
            // Retrieving a post
            $post = Post::findOne(1);
      
            // Updating a post
            $post->title = 'Updated Title';
            $post->save();
      
            // Deleting a post
            $post->delete();
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Yii is a powerful PHP framework that simplifies web application development with its high performance, security, and extensibility. By mastering the basics of routing, controllers, views, and database interactions, you can build robust and scalable applications. Practice using Yii to become proficient in PHP web development.</p>
          </section>
        `
      },
      {
        id: 'zend',
        title: 'Zend Framework',
        content: `
          <section id="zend">
            <h2>Zend Framework</h2>
      
            <h3>Introduction</h3>
            <p>Zend Framework is a collection of professional PHP packages with more than 570 million installations. It can be used to develop web applications and services using PHP 7.3+. Zend Framework provides 100% object-oriented code using a broad spectrum of language features. The framework is highly customizable and can be used for developing modern web applications.</p>
      
            <h3>Why Use Zend Framework?</h3>
            <ul>
              <li><strong>Modular Architecture:</strong> The modular approach allows for building and maintaining applications with reusable components.</li>
              <li><strong>Performance:</strong> Optimized for high performance with efficient memory usage.</li>
              <li><strong>Security:</strong> Built-in security features such as input filtering, data encryption, and more.</li>
              <li><strong>Extensible:</strong> Easily extendable with a wide range of available packages and plugins.</li>
              <li><strong>Comprehensive Documentation:</strong> Extensive documentation and tutorials available.</li>
              <li><strong>Active Community:</strong> A large community providing support, plugins, and resources.</li>
            </ul>
      
            <h3>Installing Zend Framework</h3>
            <p>To install Zend Framework, you can use Composer. Here is the command to create a new Zend Framework project:</p>
            <pre><code class="language-php">
            composer create-project zendframework/skeleton-application myapp
            </code></pre>
      
            <h3>Directory Structure</h3>
            <p>Zend Framework's directory structure is organized to help you build applications efficiently. Here are some important directories:</p>
            <ul>
              <li><strong>config/:</strong> Contains configuration files.</li>
              <li><strong>module/:</strong> Contains application modules.</li>
              <li><strong>public/:</strong> The entry point for all requests to your application.</li>
              <li><strong>data/:</strong> Contains application data such as logs and cache.</li>
              <li><strong>vendor/:</strong> Contains the Composer dependencies.</li>
            </ul>
      
            <h3>Routing</h3>
            <p>Routing in Zend Framework allows you to define application routes in a concise and expressive manner. Routes are defined in the <code>config/routes.config.php</code> file.</p>
            <pre><code class="language-php">
            <?php
      
            return [
                'router' => [
                    'routes' => [
                        'home' => [
                            'type' => 'Literal',
                            'options' => [
                                'route' => '/',
                                'defaults' => [
                                    'controller' => Application\\Controller\\IndexController::class,
                                    'action' => 'index',
                                ],
                            ],
                        ],
                        'about' => [
                            'type' => 'Literal',
                            'options' => [
                                'route' => '/about',
                                'defaults' => [
                                    'controller' => Application\\Controller\\IndexController::class,
                                    'action' => 'about',
                                ],
                            ],
                        ],
                    ],
                ],
            ];
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>'router':</strong> The router configuration section.</li>
              <li><strong>'routes':</strong> Defines the application routes.</li>
              <li><strong>'home':</strong> Defines the route for the homepage.</li>
              <li><strong>'type':</strong> The type of route (e.g., Literal).</li>
              <li><strong>'options':</strong> Configuration options for the route.</li>
              <li><strong>'route':</strong> The URL pattern for the route.</li>
              <li><strong>'defaults':</strong> Default values for the route, including the controller and action.</li>
              <li><strong>'about':</strong> Defines the route for the about page.</li>
            </ul>
      
            <h3>Controllers</h3>
            <p>Controllers in Zend Framework are used to group related request handling logic into a single class. You can create a controller manually or using the Zend CLI:</p>
            <pre><code class="language-php">
            php bin/console zendframework:create-controller Index
            </code></pre>
            <p>Here is an example of a basic controller:</p>
            <pre><code class="language-php">
            <?php
      
            namespace Application\\Controller;
      
            use Zend\\Mvc\\Controller\\AbstractActionController;
            use Zend\\View\\Model\\ViewModel;
      
            class IndexController extends AbstractActionController
            {
                public function indexAction()
                {
                    return new ViewModel();
                }
      
                public function aboutAction()
                {
                    return new ViewModel();
                }
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>namespace Application\\Controller;</strong>: Declares the namespace of the controller.</li>
              <li><strong>use Zend\\Mvc\\Controller\\AbstractActionController;</strong>: Imports the base controller class.</li>
              <li><strong>use Zend\\View\\Model\\ViewModel;</strong>: Imports the ViewModel class.</li>
              <li><strong>class IndexController extends AbstractActionController</strong>: Defines the controller class.</li>
              <li><strong>indexAction()</strong>: Method to handle the homepage request.</li>
              <li><strong>aboutAction()</strong>: Method to handle the about page request.</li>
              <li><strong>return new ViewModel()</strong>: Returns a ViewModel instance for rendering the view.</li>
            </ul>
      
            <h3>Views</h3>
            <p>Views in Zend Framework are stored in the <code>module/Application/view</code> directory. Here is an example of a simple view:</p>
            <pre><code class="language-php">
            <!-- module/Application/view/application/index/index.phtml -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Zend Framework application.</p>
            </body>
            </html>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>HTML Structure:</strong> Standard HTML structure used in Zend Framework views.</li>
            </ul>
      
            <h3>Database</h3>
            <p>Zend Framework provides an easy-to-use database abstraction layer. Here is an example of defining a model and performing basic CRUD operations:</p>
            <pre><code class="language-php">
            <?php
      
            namespace Application\\Model;
      
            use Zend\\Db\\TableGateway\\TableGatewayInterface;
      
            class PostTable
            {
                protected $tableGateway;
      
                public function __construct(TableGatewayInterface $tableGateway)
                {
                    $this->tableGateway = $tableGateway;
                }
      
                public function fetchAll()
                {
                    return $this->tableGateway->select();
                }
      
                public function getPost($id)
                {
                    return $this->tableGateway->select(['id' => (int) $id])->current();
                }
      
                public function savePost(Post $post)
                {
                    $data = [
                        'title' => $post->title,
                        'body' => $post->body,
                    ];
      
                    if ($post->id) {
                        $this->tableGateway->update($data, ['id' => (int) $post->id]);
                    } else {
                        $this->tableGateway->insert($data);
                    }
                }
      
                public function deletePost($id)
                {
                    $this->tableGateway->delete(['id' => (int) $id]);
                }
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>namespace Application\\Model;</strong>: Declares the namespace of the model.</li>
              <li><strong>use Zend\\Db\\TableGateway\\TableGatewayInterface;</strong>: Imports the TableGateway interface.</li>
              <li><strong>class PostTable</strong>: Defines the PostTable model class.</li>
              <li><strong>__construct(TableGatewayInterface $tableGateway)</strong>: Constructor that initializes the table gateway.</li>
              <li><strong>fetchAll()</strong>: Retrieves all posts.</li>
              <li><strong>getPost($id)</strong>: Retrieves a single post by ID.</li>
              <li><strong>savePost(Post $post)</strong>: Saves a new or existing post.</li>
              <li><strong>deletePost($id)</strong>: Deletes a post by ID.</li>
            </ul>
      
            <h3>Assignment 1: Creating a Zend Framework Project</h3>
            <p>Create a new Zend Framework project, define routes for a home page and an about page, and create corresponding views.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            composer create-project zendframework/skeleton-application myapp
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // config/routes.config.php
      
            return [
                'router' => [
                    'routes' => [
                        'home' => [
                            'type' => 'Literal',
                            'options' => [
                                'route' => '/',
                                'defaults' => [
                                    'controller' => Application\\Controller\\IndexController::class,
                                    'action' => 'index',
                                ],
                            ],
                        ],
                        'about' => [
                            'type' => 'Literal',
                            'options' => [
                                'route' => '/about',
                                'defaults' => [
                                    'controller' => Application\\Controller\\IndexController::class,
                                    'action' => 'about',
                                ],
                            ],
                        ],
                    ],
                ],
            ];
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // module/Application/src/Controller/IndexController.php
      
            namespace Application\\Controller;
      
            use Zend\\Mvc\\Controller\\AbstractActionController;
            use Zend\\View\\Model\\ViewModel;
      
            class IndexController extends AbstractActionController
            {
                public function indexAction()
                {
                    return new ViewModel();
                }
      
                public function aboutAction()
                {
                    return new ViewModel();
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <!-- module/Application/view/application/index/index.phtml -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Zend Framework application.</p>
            </body>
            </html>
            </code></pre>
            <pre><code class="language-php">
            <!-- module/Application/view/application/index/about.phtml -->
            <!DOCTYPE html>
            <html>
            <head>
                <title>About Page</title>
            </head>
            <body>
                <h1>About Us</h1>
                <p>This is the about page.</p>
            </body>
            </html>
            </code></pre>
      
            <h3>Assignment 2: Creating a Controller</h3>
            <p>Create a controller named PageController with methods for handling the home page and about page requests. Update the routes to use the controller methods.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            php bin/console zendframework:create-controller Page
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // module/Application/src/Controller/PageController.php
      
            namespace Application\\Controller;
      
            use Zend\\Mvc\\Controller\\AbstractActionController;
            use Zend\\View\\Model\\ViewModel;
      
            class PageController extends AbstractActionController
            {
                public function homeAction()
                {
                    return new ViewModel();
                }
      
                public function aboutAction()
                {
                    return new ViewModel();
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // config/routes.config.php
      
            return [
                'router' => [
                    'routes' => [
                        'home' => [
                            'type' => 'Literal',
                            'options' => [
                                'route' => '/',
                                'defaults' => [
                                    'controller' => Application\\Controller\\PageController::class,
                                    'action' => 'home',
                                ],
                            ],
                        ],
                        'about' => [
                            'type' => 'Literal',
                            'options' => [
                                'route' => '/about',
                                'defaults' => [
                                    'controller' => Application\\Controller\\PageController::class,
                                    'action' => 'about',
                                ],
                            ],
                        ],
                    ],
                ],
            ];
            ?>
            </code></pre>
      
            <h3>Assignment 3: Creating a Model and Performing CRUD Operations</h3>
            <p>Create a model named Post with title and body attributes. Perform basic CRUD operations on the Post model.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
      
            // module/Application/src/Model/PostTable.php
      
            namespace Application\\Model;
      
            use Zend\\Db\\TableGateway\\TableGatewayInterface;
      
            class PostTable
            {
                protected $tableGateway;
      
                public function __construct(TableGatewayInterface $tableGateway)
                {
                    $this->tableGateway = $tableGateway;
                }
      
                public function fetchAll()
                {
                    return $this->tableGateway->select();
                }
      
                public function getPost($id)
                {
                    return $this->tableGateway->select(['id' => (int) $id])->current();
                }
      
                public function savePost(Post $post)
                {
                    $data = [
                        'title' => $post->title,
                        'body' => $post->body,
                    ];
      
                    if ($post->id) {
                        $this->tableGateway->update($data, ['id' => (int) $post->id]);
                    } else {
                        $this->tableGateway->insert($data);
                    }
                }
      
                public function deletePost($id)
                {
                    $this->tableGateway->delete(['id' => (int) $id]);
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
      
            // Using the Post model
      
            use Application\\Model\\PostTable;
            use Application\\Model\\Post;
      
            // Creating a new post
            $post = new Post();
            $post->title = 'First Post';
            $post->body = 'This is the body of the first post.';
            $postTable->savePost($post);
      
            // Retrieving a post
            $post = $postTable->getPost(1);
      
            // Updating a post
            $post->title = 'Updated Title';
            $postTable->savePost($post);
      
            // Deleting a post
            $postTable->deletePost(1);
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Zend Framework is a powerful PHP framework that simplifies web application development with its modular architecture, performance optimization, and extensibility. By mastering the basics of routing, controllers, views, and database interactions, you can build robust and scalable applications. Practice using Zend Framework to become proficient in PHP web development.</p>
          </section>
        `
      },
      
      
      {
        id: 'library',
        title: 'PHP Standard Library',
        content: `
          <section id="library">
            <h2>PHP Standard Library</h2>
      
            <h3>Introduction</h3>
            <p>The PHP Standard Library (SPL) is a collection of interfaces and classes that are meant to solve common problems. It provides a standard set of tools that can be used to implement common data structures (such as linked lists, stacks, and queues), iterators, and other utility classes and interfaces.</p>
      
            <h3>Why Use the PHP Standard Library?</h3>
            <ul>
              <li><strong>Standardization:</strong> Provides a consistent set of tools and interfaces for solving common problems.</li>
              <li><strong>Efficiency:</strong> Many SPL classes and interfaces are implemented in C, providing high performance.</li>
              <li><strong>Convenience:</strong> Reduces the need to implement common data structures and patterns from scratch.</li>
              <li><strong>Extensibility:</strong> Can be easily extended to fit specific needs.</li>
            </ul>
      
            <h3>SPL Data Structures</h3>
            <p>The SPL provides several standard data structures, such as stacks, queues, and linked lists. Here are some examples:</p>
      
            <h4>SplStack</h4>
            <p>The <code>SplStack</code> class provides the main functionalities of a stack (LIFO - Last In, First Out). Here is an example of how to use it:</p>
            <pre><code class="language-php">
            <?php
            $stack = new SplStack();
            $stack->push('A');
            $stack->push('B');
            $stack->push('C');
      
            echo $stack->pop(); // C
            echo $stack->pop(); // B
            echo $stack->pop(); // A
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$stack = new SplStack();</strong> Creates a new stack.</li>
              <li><strong>$stack->push('A');</strong> Pushes 'A' onto the stack.</li>
              <li><strong>$stack->push('B');</strong> Pushes 'B' onto the stack.</li>
              <li><strong>$stack->push('C');</strong> Pushes 'C' onto the stack.</li>
              <li><strong>$stack->pop();</strong> Pops the top element ('C') off the stack.</li>
            </ul>
      
            <h4>SplQueue</h4>
            <p>The <code>SplQueue</code> class provides the main functionalities of a queue (FIFO - First In, First Out). Here is an example of how to use it:</p>
            <pre><code class="language-php">
            <?php
            $queue = new SplQueue();
            $queue->enqueue('A');
            $queue->enqueue('B');
            $queue->enqueue('C');
      
            echo $queue->dequeue(); // A
            echo $queue->dequeue(); // B
            echo $queue->dequeue(); // C
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$queue = new SplQueue();</strong> Creates a new queue.</li>
              <li><strong>$queue->enqueue('A');</strong> Enqueues 'A' into the queue.</li>
              <li><strong>$queue->enqueue('B');</strong> Enqueues 'B' into the queue.</li>
              <li><strong>$queue->enqueue('C');</strong> Enqueues 'C' into the queue.</li>
              <li><strong>$queue->dequeue();</strong> Dequeues the front element ('A') from the queue.</li>
            </ul>
      
            <h4>SplDoublyLinkedList</h4>
            <p>The <code>SplDoublyLinkedList</code> class provides the main functionalities of a doubly linked list. Here is an example of how to use it:</p>
            <pre><code class="language-php">
            <?php
            $dll = new SplDoublyLinkedList();
            $dll->push('A');
            $dll->push('B');
            $dll->push('C');
      
            echo $dll->pop(); // C
            echo $dll->shift(); // A
            echo $dll->pop(); // B
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$dll = new SplDoublyLinkedList();</strong> Creates a new doubly linked list.</li>
              <li><strong>$dll->push('A');</strong> Adds 'A' to the end of the list.</li>
              <li><strong>$dll->push('B');</strong> Adds 'B' to the end of the list.</li>
              <li><strong>$dll->push('C');</strong> Adds 'C' to the end of the list.</li>
              <li><strong>$dll->pop();</strong> Removes and returns the last element ('C').</li>
              <li><strong>$dll->shift();</strong> Removes and returns the first element ('A').</li>
            </ul>
      
            <h3>SPL Iterators</h3>
            <p>The SPL provides several standard iterators that can be used to traverse different data structures. Here are some examples:</p>
      
            <h4>ArrayIterator</h4>
            <p>The <code>ArrayIterator</code> class provides an iterator for arrays and objects. Here is an example of how to use it:</p>
            <pre><code class="language-php">
            <?php
            $array = ['A', 'B', 'C'];
            $iterator = new ArrayIterator($array);
      
            foreach ($iterator as $key => $value) {
                echo "$key => $value\n";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$array = ['A', 'B', 'C'];</strong> Creates an array.</li>
              <li><strong>$iterator = new ArrayIterator($array);</strong> Creates an iterator for the array.</li>
              <li><strong>foreach ($iterator as $key => $value)</strong>: Iterates over the array using the iterator.</li>
            </ul>
      
            <h4>DirectoryIterator</h4>
            <p>The <code>DirectoryIterator</code> class provides an iterator for directories. Here is an example of how to use it:</p>
            <pre><code class="language-php">
            <?php
            $dir = new DirectoryIterator('/path/to/directory');
      
            foreach ($dir as $fileinfo) {
                if (!$fileinfo->isDot()) {
                    echo $fileinfo->getFilename() . "\n";
                }
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$dir = new DirectoryIterator('/path/to/directory');</strong> Creates an iterator for the specified directory.</li>
              <li><strong>foreach ($dir as $fileinfo)</strong>: Iterates over the directory entries.</li>
              <li><strong>if (!$fileinfo->isDot())</strong>: Skips the '.' and '..' entries.</li>
              <li><strong>$fileinfo->getFilename()</strong>: Gets the name of the current file.</li>
            </ul>
      
            <h3>Assignment 1: Using SplStack</h3>
            <p>Create a PHP script that uses the <code>SplStack</code> class to implement a stack of integers. Push integers 1, 2, and 3 onto the stack and then pop them off, displaying each value.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $stack = new SplStack();
            $stack->push(1);
            $stack->push(2);
            $stack->push(3);
      
            while (!$stack->isEmpty()) {
                echo $stack->pop() . "\n";
            }
            ?>
            </code></pre>
      
            <h3>Assignment 2: Using ArrayIterator</h3>
            <p>Create a PHP script that uses the <code>ArrayIterator</code> class to iterate over an array of strings and display each string.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            $array = ['foo', 'bar', 'baz'];
            $iterator = new ArrayIterator($array);
      
            foreach ($iterator as $value) {
                echo $value . "\n";
            }
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>The PHP Standard Library provides a set of standard tools and data structures that can be used to solve common problems efficiently. By mastering the use of SPL classes and interfaces, you can write more efficient and maintainable PHP code. Practice using SPL to become proficient in PHP development.</p>
          </section>
        `
      },
      
      {
        id: 'api',
        title: 'RESTful APIs',
        content: `
          <section id="api">
            <h2>RESTful APIs</h2>
      
            <h3>Introduction</h3>
            <p>REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server, cacheable communication protocol -- the HTTP. RESTful APIs are web services that adhere to the REST architecture principles and use HTTP requests to access and manipulate data.</p>
      
            <h3>Why Use RESTful APIs?</h3>
            <ul>
              <li><strong>Scalability:</strong> Statelessness helps in scaling applications easily.</li>
              <li><strong>Performance:</strong> Efficient caching improves performance.</li>
              <li><strong>Flexibility:</strong> Allows for multiple data formats (JSON, XML, etc.).</li>
              <li><strong>Interoperability:</strong> Can be consumed by different clients (web, mobile, etc.).</li>
            </ul>
      
            <h3>Key Principles of REST</h3>
            <ul>
              <li><strong>Statelessness:</strong> Each request from a client to server must contain all the information needed to understand and process the request.</li>
              <li><strong>Client-Server Architecture:</strong> Separates the user interface concerns from the data storage concerns.</li>
              <li><strong>Cacheability:</strong> Responses must define themselves as cacheable or not to improve client-side performance.</li>
              <li><strong>Layered System:</strong> A client cannot ordinarily tell whether it is connected directly to the end server or to an intermediary along the way.</li>
              <li><strong>Uniform Interface:</strong> Simplifies and decouples the architecture, which enables each part to evolve independently.</li>
            </ul>
      
            <h3>HTTP Methods</h3>
            <p>RESTful APIs commonly use the following HTTP methods:</p>
            <ul>
              <li><strong>GET:</strong> Retrieve data from the server.</li>
              <li><strong>POST:</strong> Send data to the server to create a resource.</li>
              <li><strong>PUT:</strong> Update an existing resource on the server.</li>
              <li><strong>DELETE:</strong> Delete a resource from the server.</li>
            </ul>
      
            <h3>Creating a RESTful API with PHP</h3>
            <p>Let's create a simple RESTful API using PHP and the Slim framework, a lightweight framework for building APIs.</p>
      
            <h4>Installing Slim Framework</h4>
            <pre><code class="language-php">
            composer require slim/slim:"^4.0"
            composer require slim/psr7
            </code></pre>
      
            <h4>Setting Up the Project</h4>
            <p>Create a file named <code>index.php</code> and add the following code:</p>
            <pre><code class="language-php">
            <?php
            require 'vendor/autoload.php';
      
            use Psr\\Http\\Message\\ServerRequestInterface as Request;
            use Psr\\Http\\Message\\ResponseInterface as Response;
            use Slim\\Factory\\AppFactory;
      
            $app = AppFactory::create();
      
            // Define a simple route
            $app->get('/api/hello', function (Request $request, Response $response, $args) {
                $data = ['message' => 'Hello, World!'];
                $response->getBody()->write(json_encode($data));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Run the application
            $app->run();
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>require 'vendor/autoload.php';</strong> Loads the Composer autoloader.</li>
              <li><strong>use Psr\\Http\\Message\\ServerRequestInterface as Request;</strong> Imports the Request interface.</li>
              <li><strong>use Psr\\Http\\Message\\ResponseInterface as Response;</strong> Imports the Response interface.</li>
              <li><strong>use Slim\\Factory\\AppFactory;</strong> Imports the Slim AppFactory.</li>
              <li><strong>$app = AppFactory::create();</strong> Creates a new Slim application.</li>
              <li><strong>$app->get('/api/hello', ...);</strong> Defines a GET route for the /api/hello endpoint.</li>
              <li><strong>$response->getBody()->write(json_encode($data));</strong> Writes a JSON response.</li>
              <li><strong>$app->run();</strong> Runs the Slim application.</li>
            </ul>
      
            <h4>Defining CRUD Operations</h4>
            <p>Let's define a few more routes for CRUD operations:</p>
            <pre><code class="language-php">
            <?php
            // Fetch all items
            $app->get('/api/items', function (Request $request, Response $response, $args) {
                $items = [
                    ['id' => 1, 'name' => 'Item 1'],
                    ['id' => 2, 'name' => 'Item 2'],
                ];
                $response->getBody()->write(json_encode($items));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Fetch a single item
            $app->get('/api/items/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $item = ['id' => $id, 'name' => "Item $id"];
                $response->getBody()->write(json_encode($item));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Create a new item
            $app->post('/api/items', function (Request $request, Response $response, $args) {
                $data = $request->getParsedBody();
                $item = ['id' => rand(1, 1000), 'name' => $data['name']];
                $response->getBody()->write(json_encode($item));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(201);
            });
      
            // Update an item
            $app->put('/api/items/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $data = $request->getParsedBody();
                $item = ['id' => $id, 'name' => $data['name']];
                $response->getBody()->write(json_encode($item));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Delete an item
            $app->delete('/api/items/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $response->getBody()->write(json_encode(['message' => "Item $id deleted"]));
                return $response->withHeader('Content-Type', 'application/json');
            });
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>GET /api/items:</strong> Fetches all items.</li>
              <li><strong>GET /api/items/{id}:</strong> Fetches a single item by ID.</li>
              <li><strong>POST /api/items:</strong> Creates a new item.</li>
              <li><strong>PUT /api/items/{id}:</strong> Updates an existing item by ID.</li>
              <li><strong>DELETE /api/items/{id}:</strong> Deletes an item by ID.</li>
            </ul>
      
            <h3>Assignment 1: Creating a RESTful API</h3>
            <p>Create a RESTful API for managing a list of books. The API should support the following operations:</p>
            <ul>
              <li><strong>GET /api/books:</strong> Fetch all books.</li>
              <li><strong>GET /api/books/{id}:</strong> Fetch a single book by ID.</li>
              <li><strong>POST /api/books:</strong> Create a new book.</li>
              <li><strong>PUT /api/books/{id}:</strong> Update an existing book by ID.</li>
              <li><strong>DELETE /api/books/{id}:</strong> Delete a book by ID.</li>
            </ul>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            require 'vendor/autoload.php';
      
            use Psr\\Http\\Message\\ServerRequestInterface as Request;
            use Psr\\Http\\Message\\ResponseInterface as Response;
            use Slim\\Factory\\AppFactory;
      
            $app = AppFactory::create();
      
            // Fetch all books
            $app->get('/api/books', function (Request $request, Response $response, $args) {
                $books = [
                    ['id' => 1, 'title' => 'Book 1'],
                    ['id' => 2, 'title' => 'Book 2'],
                ];
                $response->getBody()->write(json_encode($books));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Fetch a single book
            $app->get('/api/books/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $book = ['id' => $id, 'title' => "Book $id"];
                $response->getBody()->write(json_encode($book));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Create a new book
            $app->post('/api/books', function (Request $request, Response $response, $args) {
                $data = $request->getParsedBody();
                $book = ['id' => rand(1, 1000), 'title' => $data['title']];
                $response->getBody()->write(json_encode($book));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(201);
            });
      
            // Update a book
            $app->put('/api/books/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $data = $request->getParsedBody();
                $book = ['id' => $id, 'title' => $data['title']];
                $response->getBody()->write(json_encode($book));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Delete a book
            $app->delete('/api/books/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $response->getBody()->write(json_encode(['message' => "Book $id deleted"]));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Run the application
            $app->run();
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>RESTful APIs provide a standardized way to build and consume web services. By following REST principles and using HTTP methods effectively, you can create scalable and maintainable APIs. Practice creating RESTful APIs to become proficient in building web services.</p>
          </section>
        `
      },
      
      {
        id: 'unit',
        title: 'Testing with PHPUnit',
        content: `
          <section id="unit">
            <h2>Testing with PHPUnit</h2>
      
            <h3>Introduction</h3>
            <p>PHPUnit is a programmer-oriented testing framework for PHP. It is an instance of the xUnit architecture for unit testing frameworks. PHPUnit is used to write and run repeatable tests to ensure the correctness of your PHP code.</p>
      
            <h3>Why Use PHPUnit?</h3>
            <ul>
              <li><strong>Automation:</strong> Automates the process of running tests and checking results.</li>
              <li><strong>Reliability:</strong> Ensures code behaves as expected, improving reliability.</li>
              <li><strong>Regression Testing:</strong> Helps detect new bugs introduced by code changes.</li>
              <li><strong>Documentation:</strong> Provides documentation of code behavior through tests.</li>
            </ul>
      
            <h3>Installing PHPUnit</h3>
            <p>To install PHPUnit, you can use Composer. Here is the command to install PHPUnit:</p>
            <pre><code class="language-php">
            composer require --dev phpunit/phpunit ^9
            </code></pre>
      
            <h3>Writing a Test Case</h3>
            <p>Let's write a simple test case. Create a directory named <code>tests</code> in your project root and create a file named <code>CalculatorTest.php</code>:</p>
            <pre><code class="language-php">
            <?php
            use PHPUnit\\Framework\\TestCase;
      
            class CalculatorTest extends TestCase
            {
                public function testAdd()
                {
                    $calculator = new Calculator();
                    $result = $calculator->add(2, 3);
                    $this->assertEquals(5, $result);
                }
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>use PHPUnit\\Framework\\TestCase;</strong> Imports the base TestCase class.</li>
              <li><strong>class CalculatorTest extends TestCase</strong> Defines the test case class extending TestCase.</li>
              <li><strong>testAdd()</strong> Defines a test method for the add function.</li>
              <li><strong>$calculator = new Calculator();</strong> Creates an instance of the Calculator class.</li>
              <li><strong>$result = $calculator->add(2, 3);</strong> Calls the add method with arguments 2 and 3.</li>
              <li><strong>$this->assertEquals(5, $result);</strong> Asserts that the result is 5.</li>
            </ul>
      
            <h3>Running Tests</h3>
            <p>To run the tests, use the following command:</p>
            <pre><code class="language-bash">
            ./vendor/bin/phpunit tests
            </code></pre>
      
            <h3>Example: Testing a Calculator Class</h3>
            <p>Let's create a Calculator class and write tests for its methods. Create a file named <code>Calculator.php</code> in the <code>src</code> directory:</p>
            <pre><code class="language-php">
            <?php
            class Calculator
            {
                public function add($a, $b)
                {
                    return $a + $b;
                }
      
                public function subtract($a, $b)
                {
                    return $a - $b;
                }
      
                public function multiply($a, $b)
                {
                    return $a * $b;
                }
      
                public function divide($a, $b)
                {
                    if ($b == 0) {
                        throw new InvalidArgumentException('Division by zero');
                    }
                    return $a / $b;
                }
            }
            ?>
            </code></pre>
      
            <h3>Writing Tests for Calculator Class</h3>
            <p>Update the <code>CalculatorTest.php</code> file to include tests for all methods:</p>
            <pre><code class="language-php">
            <?php
            use PHPUnit\\Framework\\TestCase;
      
            class CalculatorTest extends TestCase
            {
                protected $calculator;
      
                protected function setUp(): void
                {
                    $this->calculator = new Calculator();
                }
      
                public function testAdd()
                {
                    $result = $this->calculator->add(2, 3);
                    $this->assertEquals(5, $result);
                }
      
                public function testSubtract()
                {
                    $result = $this->calculator->subtract(5, 3);
                    $this->assertEquals(2, $result);
                }
      
                public function testMultiply()
                {
                    $result = $this->calculator->multiply(2, 3);
                    $this->assertEquals(6, $result);
                }
      
                public function testDivide()
                {
                    $result = $this->calculator->divide(6, 3);
                    $this->assertEquals(2, $result);
                }
      
                public function testDivideByZero()
                {
                    $this->expectException(InvalidArgumentException::class);
                    $this->calculator->divide(6, 0);
                }
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>setUp(): void</strong> A setup method to initialize the calculator before each test.</li>
              <li><strong>testAdd()</strong> Tests the add method.</li>
              <li><strong>testSubtract()</strong> Tests the subtract method.</li>
              <li><strong>testMultiply()</strong> Tests the multiply method.</li>
              <li><strong>testDivide()</strong> Tests the divide method.</li>
              <li><strong>testDivideByZero()</strong> Tests division by zero, expecting an exception.</li>
            </ul>
      
            <h3>Assignment 1: Writing Tests</h3>
            <p>Create a new class named <code>StringManipulator</code> with the following methods:</p>
            <ul>
              <li><strong>reverse($string):</strong> Reverses the given string.</li>
              <li><strong>toUpperCase($string):</strong> Converts the string to uppercase.</li>
              <li><strong>toLowerCase($string):</strong> Converts the string to lowercase.</li>
            </ul>
            <p>Write tests for each method to ensure they work correctly.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            class StringManipulator
            {
                public function reverse($string)
                {
                    return strrev($string);
                }
      
                public function toUpperCase($string)
                {
                    return strtoupper($string);
                }
      
                public function toLowerCase($string)
                {
                    return strtolower($string);
                }
            }
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
            use PHPUnit\\Framework\\TestCase;
      
            class StringManipulatorTest extends TestCase
            {
                protected $stringManipulator;
      
                protected function setUp(): void
                {
                    $this->stringManipulator = new StringManipulator();
                }
      
                public function testReverse()
                {
                    $result = $this->stringManipulator->reverse('hello');
                    $this->assertEquals('olleh', $result);
                }
      
                public function testToUpperCase()
                {
                    $result = $this->stringManipulator->toUpperCase('hello');
                    $this->assertEquals('HELLO', $result);
                }
      
                public function testToLowerCase()
                {
                    $result = $this->stringManipulator->toLowerCase('HELLO');
                    $this->assertEquals('hello', $result);
                }
            }
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Unit testing with PHPUnit ensures that your code is reliable, maintainable, and less prone to bugs. By writing and running automated tests, you can confidently make changes to your codebase and verify that everything still works as expected. Practice using PHPUnit to become proficient in writing unit tests for your PHP applications.</p>
          </section>
        `
      },
      
      {
        id: 'mysql',
        title: 'PHP and MySQL',
        content: `
          <section id="mysql">
            <h2>PHP and MySQL</h2>
      
            <h3>Introduction</h3>
            <p>MySQL is a popular relational database management system used with PHP to create dynamic and database-driven web applications. PHP provides several ways to interact with MySQL, including the MySQLi extension and PDO (PHP Data Objects).</p>
      
            <h3>Why Use MySQL with PHP?</h3>
            <ul>
              <li><strong>Widely Used:</strong> MySQL is one of the most widely used database systems, making it a standard choice for many web applications.</li>
              <li><strong>Integration:</strong> PHP has built-in support for MySQL, providing easy integration and efficient database interaction.</li>
              <li><strong>Scalability:</strong> MySQL can handle large amounts of data and concurrent users, making it suitable for both small and large applications.</li>
              <li><strong>Security:</strong> MySQL provides robust security features to protect your data.</li>
            </ul>
      
            <h3>Connecting to MySQL</h3>
            <p>Let's start by connecting to a MySQL database using PHP. We will use the MySQLi extension for this example.</p>
            <pre><code class="language-php">
            <?php
            $servername = "localhost";
            $username = "username";
            $password = "password";
            $dbname = "database";
      
            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);
      
            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            echo "Connected successfully";
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$servername, $username, $password, $dbname:</strong> Define the connection parameters.</li>
              <li><strong>new mysqli(...):</strong> Creates a new MySQLi connection object.</li>
              <li><strong>$conn->connect_error:</strong> Checks if there was a connection error.</li>
              <li><strong>die("Connection failed: ..."):</strong> Ends the script and outputs an error message if the connection fails.</li>
              <li><strong>echo "Connected successfully";:</strong> Outputs a success message if the connection is successful.</li>
            </ul>
      
            <h3>Creating a Database Table</h3>
            <p>Once connected, you can create a table in your MySQL database. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            $sql = "CREATE TABLE Users (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                firstname VARCHAR(30) NOT NULL,
                lastname VARCHAR(30) NOT NULL,
                email VARCHAR(50),
                reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )";
      
            if ($conn->query($sql) === TRUE) {
                echo "Table Users created successfully";
            } else {
                echo "Error creating table: " . $conn->error;
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$sql:</strong> Defines the SQL statement for creating a table.</li>
              <li><strong>$conn->query($sql):</strong> Executes the SQL statement.</li>
              <li><strong>$conn->error:</strong> Retrieves the last error message.</li>
            </ul>
      
            <h3>Inserting Data into a Table</h3>
            <p>You can insert data into a MySQL table using an SQL INSERT statement. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            $sql = "INSERT INTO Users (firstname, lastname, email)
            VALUES ('John', 'Doe', 'john@example.com')";
      
            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$sql:</strong> Defines the SQL statement for inserting data.</li>
              <li><strong>$conn->query($sql):</strong> Executes the SQL statement.</li>
              <li><strong>$conn->error:</strong> Retrieves the last error message.</li>
            </ul>
      
            <h3>Retrieving Data from a Table</h3>
            <p>You can retrieve data from a MySQL table using an SQL SELECT statement. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            $sql = "SELECT id, firstname, lastname, email FROM Users";
            $result = $conn->query($sql);
      
            if ($result->num_rows > 0) {
                // Output data of each row
                while($row = $result->fetch_assoc()) {
                    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. " - Email: " . $row["email"]. "<br>";
                }
            } else {
                echo "0 results";
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$sql:</strong> Defines the SQL statement for selecting data.</li>
              <li><strong>$result:</strong> Stores the result of the query.</li>
              <li><strong>$result->num_rows:</strong> Checks the number of rows in the result set.</li>
              <li><strong>$result->fetch_assoc():</strong> Fetches a result row as an associative array.</li>
            </ul>
      
            <h3>Updating Data in a Table</h3>
            <p>You can update data in a MySQL table using an SQL UPDATE statement. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            $sql = "UPDATE Users SET lastname='Smith' WHERE id=1";
      
            if ($conn->query($sql) === TRUE) {
                echo "Record updated successfully";
            } else {
                echo "Error updating record: " . $conn->error;
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$sql:</strong> Defines the SQL statement for updating data.</li>
              <li><strong>$conn->query($sql):</strong> Executes the SQL statement.</li>
              <li><strong>$conn->error:</strong> Retrieves the last error message.</li>
            </ul>
      
            <h3>Deleting Data from a Table</h3>
            <p>You can delete data from a MySQL table using an SQL DELETE statement. Here is an example:</p>
            <pre><code class="language-php">
            <?php
            $sql = "DELETE FROM Users WHERE id=1";
      
            if ($conn->query($sql) === TRUE) {
                echo "Record deleted successfully";
            } else {
                echo "Error deleting record: " . $conn->error;
            }
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>$sql:</strong> Defines the SQL statement for deleting data.</li>
              <li><strong>$conn->query($sql):</strong> Executes the SQL statement.</li>
              <li><strong>$conn->error:</strong> Retrieves the last error message.</li>
            </ul>
      
            <h3>Assignment 1: Creating and Manipulating a Database</h3>
            <p>Create a database named <code>testdb</code> and a table named <code>Products</code> with the following columns:</p>
            <ul>
              <li><strong>id:</strong> INT, primary key, auto-increment</li>
              <li><strong>name:</strong> VARCHAR(50)</li>
              <li><strong>price:</strong> DECIMAL(10, 2)</li>
            </ul>
            <p>Write PHP scripts to perform the following operations:</p>
            <ul>
              <li>Insert a new product</li>
              <li>Retrieve and display all products</li>
              <li>Update the price of a product</li>
              <li>Delete a product</li>
            </ul>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            // Create connection
            $conn = new mysqli("localhost", "username", "password", "testdb");
      
            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
      
            // Create table
            $sql = "CREATE TABLE Products (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                price DECIMAL(10, 2) NOT NULL
            )";
      
            if ($conn->query($sql) === TRUE) {
                echo "Table Products created successfully";
            } else {
                echo "Error creating table: " . $conn->error;
            }
      
            // Insert a new product
            $sql = "INSERT INTO Products (name, price) VALUES ('Product1', 10.50)";
            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
      
            // Retrieve and display all products
            $sql = "SELECT id, name, price FROM Products";
            $result = $conn->query($sql);
      
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Price: " . $row["price"]. "<br>";
                }
            } else {
                echo "0 results";
            }
      
            // Update the price of a product
            $sql = "UPDATE Products SET price=12.50 WHERE id=1";
            if ($conn->query($sql) === TRUE) {
                echo "Record updated successfully";
            } else {
                echo "Error updating record: " . $conn->error;
            }
      
            // Delete a product
            $sql = "DELETE FROM Products WHERE id=1";
            if ($conn->query($sql) === TRUE) {
                echo "Record deleted successfully";
            } else {
                echo "Error deleting record: " . $conn->error;
            }
      
            $conn->close();
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Using PHP with MySQL allows you to create dynamic and database-driven web applications. By mastering the basic operations of connecting to a database, creating tables, and performing CRUD operations, you can build robust and scalable applications. Practice using PHP and MySQL to become proficient in developing web applications.</p>
          </section>
        `
      },
      
      {
        id: 'web',
        title: 'Web Services',
        content: `
          <section id="web">
            <h2>Web Services</h2>
      
            <h3>Introduction</h3>
            <p>Web services allow different applications to communicate and exchange data over the internet. They are a key component in building distributed systems and enabling interoperability between different platforms and languages. Common types of web services include SOAP (Simple Object Access Protocol) and REST (Representational State Transfer).</p>
      
            <h3>Why Use Web Services?</h3>
            <ul>
              <li><strong>Interoperability:</strong> Enables communication between different applications and platforms.</li>
              <li><strong>Scalability:</strong> Can handle a large number of requests and users.</li>
              <li><strong>Flexibility:</strong> Allows for multiple data formats (JSON, XML, etc.).</li>
              <li><strong>Reusability:</strong> Services can be reused across different applications.</li>
            </ul>
      
            <h3>Types of Web Services</h3>
            <p>There are two main types of web services:</p>
            <ul>
              <li><strong>SOAP:</strong> A protocol for exchanging structured information in the implementation of web services. Uses XML as the message format and relies on other application layer protocols, such as HTTP and SMTP.</li>
              <li><strong>REST:</strong> An architectural style for building web services that use HTTP requests to access and manipulate data. It is lightweight and uses standard HTTP methods (GET, POST, PUT, DELETE).</li>
            </ul>
      
            <h3>Creating a RESTful Web Service with PHP</h3>
            <p>Let's create a simple RESTful web service using PHP and the Slim framework.</p>
      
            <h4>Installing Slim Framework</h4>
            <pre><code class="language-php">
            composer require slim/slim:"^4.0"
            composer require slim/psr7
            </code></pre>
      
            <h4>Setting Up the Project</h4>
            <p>Create a file named <code>index.php</code> and add the following code:</p>
            <pre><code class="language-php">
            <?php
            require 'vendor/autoload.php';
      
            use Psr\\Http\\Message\\ServerRequestInterface as Request;
            use Psr\\Http\\Message\\ResponseInterface as Response;
            use Slim\\Factory\\AppFactory;
      
            $app = AppFactory::create();
      
            // Define a simple route
            $app->get('/api/hello', function (Request $request, Response $response, $args) {
                $data = ['message' => 'Hello, World!'];
                $response->getBody()->write(json_encode($data));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Run the application
            $app->run();
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>require 'vendor/autoload.php';</strong> Loads the Composer autoloader.</li>
              <li><strong>use Psr\\Http\\Message\\ServerRequestInterface as Request;</strong> Imports the Request interface.</li>
              <li><strong>use Psr\\Http\\Message\\ResponseInterface as Response;</strong> Imports the Response interface.</li>
              <li><strong>use Slim\\Factory\\AppFactory;</strong> Imports the Slim AppFactory.</li>
              <li><strong>$app = AppFactory::create();</strong> Creates a new Slim application.</li>
              <li><strong>$app->get('/api/hello', ...);</strong> Defines a GET route for the /api/hello endpoint.</li>
              <li><strong>$response->getBody()->write(json_encode($data));</strong> Writes a JSON response.</li>
              <li><strong>$app->run();</strong> Runs the Slim application.</li>
            </ul>
      
            <h4>Defining CRUD Operations</h4>
            <p>Let's define a few more routes for CRUD operations:</p>
            <pre><code class="language-php">
            <?php
            // Fetch all items
            $app->get('/api/items', function (Request $request, Response $response, $args) {
                $items = [
                    ['id' => 1, 'name' => 'Item 1'],
                    ['id' => 2, 'name' => 'Item 2'],
                ];
                $response->getBody()->write(json_encode($items));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Fetch a single item
            $app->get('/api/items/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $item = ['id' => $id, 'name' => "Item $id"];
                $response->getBody()->write(json_encode($item));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Create a new item
            $app->post('/api/items', function (Request $request, Response $response, $args) {
                $data = $request->getParsedBody();
                $item = ['id' => rand(1, 1000), 'name' => $data['name']];
                $response->getBody()->write(json_encode($item));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(201);
            });
      
            // Update an item
            $app->put('/api/items/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $data = $request->getParsedBody();
                $item = ['id' => $id, 'name' => $data['name']];
                $response->getBody()->write(json_encode($item));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Delete an item
            $app->delete('/api/items/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $response->getBody()->write(json_encode(['message' => "Item $id deleted"]));
                return $response->withHeader('Content-Type', 'application/json');
            });
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>GET /api/items:</strong> Fetches all items.</li>
              <li><strong>GET /api/items/{id}:</strong> Fetches a single item by ID.</li>
              <li><strong>POST /api/items:</strong> Creates a new item.</li>
              <li><strong>PUT /api/items/{id}:</strong> Updates an existing item by ID.</li>
              <li><strong>DELETE /api/items/{id}:</strong> Deletes an item by ID.</li>
            </ul>
      
            <h3>SOAP Web Services</h3>
            <p>SOAP (Simple Object Access Protocol) is a protocol for exchanging structured information in the implementation of web services. SOAP uses XML as its message format and relies on other application layer protocols, such as HTTP and SMTP, for message negotiation and transmission.</p>
      
            <h4>Creating a SOAP Web Service with PHP</h4>
            <p>Let's create a simple SOAP web service using PHP.</p>
            <pre><code class="language-php">
            <?php
            class Calculator
            {
                public function add($a, $b)
                {
                    return $a + $b;
                }
      
                public function subtract($a, $b)
                {
                    return $a - $b;
                }
            }
      
            $server = new SoapServer(null, ['uri' => "http://localhost/"]);
            $server->setClass('Calculator');
            $server->handle();
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>class Calculator:</strong> Defines a Calculator class with add and subtract methods.</li>
              <li><strong>new SoapServer(null, ['uri' => "http://localhost/"]):</strong> Creates a new SOAP server.</li>
              <li><strong>$server->setClass('Calculator'):</strong> Sets the Calculator class for the SOAP server.</li>
              <li><strong>$server->handle():</strong> Handles SOAP requests.</li>
            </ul>
      
            <h4>Creating a SOAP Client</h4>
            <p>Now, let's create a SOAP client to consume the SOAP web service:</p>
            <pre><code class="language-php">
            <?php
            $client = new SoapClient(null, ['location' => "http://localhost/server.php", 'uri' => "http://localhost/"]);
      
            echo $client->add(5, 3); // 8
            echo $client->subtract(5, 3); // 2
            ?>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>new SoapClient(null, ['location' => "http://localhost/server.php", 'uri' => "http://localhost/"]):</strong> Creates a new SOAP client.</li>
              <li><strong>$client->add(5, 3):</strong> Calls the add method of the Calculator service.</li>
              <li><strong>$client->subtract(5, 3):</strong> Calls the subtract method of the Calculator service.</li>
            </ul>
      
            <h3>Assignment 1: Creating a RESTful Web Service</h3>
            <p>Create a RESTful web service for managing a list of tasks. The service should support the following operations:</p>
            <ul>
              <li><strong>GET /api/tasks:</strong> Fetch all tasks.</li>
              <li><strong>GET /api/tasks/{id}:</strong> Fetch a single task by ID.</li>
              <li><strong>POST /api/tasks:</strong> Create a new task.</li>
              <li><strong>PUT /api/tasks/{id}:</strong> Update an existing task by ID.</li>
              <li><strong>DELETE /api/tasks/{id}:</strong> Delete a task by ID.</li>
            </ul>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            require 'vendor/autoload.php';
      
            use Psr\\Http\\Message\\ServerRequestInterface as Request;
            use Psr\\Http\\Message\\ResponseInterface as Response;
            use Slim\\Factory\\AppFactory;
      
            $app = AppFactory::create();
      
            // Fetch all tasks
            $app->get('/api/tasks', function (Request $request, Response $response, $args) {
                $tasks = [
                    ['id' => 1, 'name' => 'Task 1'],
                    ['id' => 2, 'name' => 'Task 2'],
                ];
                $response->getBody()->write(json_encode($tasks));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Fetch a single task
            $app->get('/api/tasks/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $task = ['id' => $id, 'name' => "Task $id"];
                $response->getBody()->write(json_encode($task));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Create a new task
            $app->post('/api/tasks', function (Request $request, Response $response, $args) {
                $data = $request->getParsedBody();
                $task = ['id' => rand(1, 1000), 'name' => $data['name']];
                $response->getBody()->write(json_encode($task));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(201);
            });
      
            // Update a task
            $app->put('/api/tasks/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $data = $request->getParsedBody();
                $task = ['id' => $id, 'name' => $data['name']];
                $response->getBody()->write(json_encode($task));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Delete a task
            $app->delete('/api/tasks/{id}', function (Request $request, Response $response, $args) {
                $id = $args['id'];
                $response->getBody()->write(json_encode(['message' => "Task $id deleted"]));
                return $response->withHeader('Content-Type', 'application/json');
            });
      
            // Run the application
            $app->run();
            ?>
            </code></pre>
      
            <h3>Assignment 2: Creating a SOAP Web Service</h3>
            <p>Create a SOAP web service for a simple calculator with add and subtract methods. Write a client to consume the web service.</p>
            <h4>Solution:</h4>
            <pre><code class="language-php">
            <?php
            // server.php
            class Calculator
            {
                public function add($a, $b)
                {
                    return $a + $b;
                }
      
                public function subtract($a, $b)
                {
                    return $a - $b;
                }
            }
      
            $server = new SoapServer(null, ['uri' => "http://localhost/"]);
            $server->setClass('Calculator');
            $server->handle();
            ?>
            </code></pre>
            <pre><code class="language-php">
            <?php
            // client.php
            $client = new SoapClient(null, ['location' => "http://localhost/server.php", 'uri' => "http://localhost/"]);
      
            echo $client->add(5, 3); // 8
            echo $client->subtract(5, 3); // 2
            ?>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Web services enable communication and data exchange between different applications and platforms. By understanding and implementing both RESTful and SOAP web services, you can build scalable, interoperable, and reusable web applications. Practice creating web services to become proficient in building distributed systems.</p>
          </section>
        `
      },
      
    
];

const PhpCourse = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeTab, setActiveTab] = useState('setup');
    const [activeIdeTab, setActiveIdeTab] = useState('android-studio');
    const [showCode, setShowCode] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.pageYOffset > 300);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    
    const renderSectionContent = (section) => {
        if (section.id === activeSection) {
          const contentParts = section.content.split(/(<pre><code class="language-php">[\s\S]*?<\/code><\/pre>)/g);
    
          return (
            <div key={section.id}>
              {contentParts.map((part, index) => {
                if (part.startsWith('<pre><code class="language-php">')) {
                  const codeContent = part.match(/<code class="language-php">([\s\S]*?)<\/code>/)[1];
                  return (
                    <SyntaxHighlighter key={index} language="php" style={darcula}>
                      {codeContent}
                    </SyntaxHighlighter>
                  );
                } else {
                  return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
                }
              })}
            </div>
          );
        }
    
        if (section.subSections) {
          return section.subSections.map(subSection => (
            activeSection === subSection.id && (
              <div key={subSection.id}>
                {subSection.content.split(/(<pre><code class="language-php">[\s\S]*?<\/code><\/pre>)/g).map((part, index) => {
                  if (part.startsWith('<pre><code class="language-php">')) {
                    const codeContent = part.match(/<code class="language-php">([\s\S]*?)<\/code>/)[1];
                    return (
                      <SyntaxHighlighter key={index} language="php" style={darcula}>
                        {codeContent}
                      </SyntaxHighlighter>
                    );
                  } else {
                    return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
                  }
                })}
              </div>
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
  
    const renderInteractiveContent = () => {
      if (activeSection !== 'introduction') return null;
  
      return (
        <div className="php-introduction">
          <h2 className="text-3xl font-bold mb-6">Introduction to PHP</h2>
          <p className="mb-4">PHP (Hypertext Preprocessor) is a popular server-side scripting language designed for web development. It's embedded in HTML and widely used for creating dynamic web pages and applications.</p>
          
          <h3 className="text-2xl font-semibold mb-4">Key Features of PHP:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Server-side scripting</li>
            <li>Cross-platform compatibility</li>
            <li>Large ecosystem and community support</li>
            <li>Easy database integration</li>
            <li>Support for both procedural and object-oriented programming</li>
            <li>Extensive built-in functions and libraries</li>
          </ul>
      
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="setup">Environment Setup</TabsTrigger>
              <TabsTrigger value="usage">Using IDEs</TabsTrigger>
              <TabsTrigger value="hello-world">Hello World</TabsTrigger>
            </TabsList>
            
            <TabsContent value="setup">
              <h3 className="text-2xl font-semibold mb-4">Setting Up Your PHP Development Environment</h3>
              <p className="mb-4">To start developing with PHP, you'll need a web server with PHP installed. Here are some popular options:</p>
              
              <Tabs value={activeIdeTab} onValueChange={setActiveIdeTab}>
                <TabsList>
                  <TabsTrigger value="xampp">XAMPP</TabsTrigger>
                  <TabsTrigger value="wamp">WAMP</TabsTrigger>
                  <TabsTrigger value="mamp">MAMP</TabsTrigger>
                </TabsList>
                
                <TabsContent value="xampp">
                  <h4 className="text-xl font-semibold mt-4">XAMPP</h4>
                  <p className="mb-4">XAMPP is a free and open-source cross-platform web server solution stack package.</p>
                  <ol className="list-decimal list-inside ml-4 space-y-2">
                    <li>Visit the <a href="https://www.apachefriends.org/index.html" className="text-blue-600 hover:underline">XAMPP download page</a>.</li>
                    <li>Download the appropriate version for your operating system.</li>
                    <li>Run the installer and follow the installation wizard.</li>
                    <li>Start the Apache and MySQL modules from the XAMPP Control Panel.</li>
                  </ol>
                </TabsContent>
    
                <TabsContent value="wamp">
                  <h4 className="text-xl font-semibold mt-4">WAMP</h4>
                  <p className="mb-4">WAMP (Windows, Apache, MySQL, PHP) is a Windows web development environment.</p>
                  <ol className="list-decimal list-inside ml-4 space-y-2">
                    <li>Go to the <a href="https://www.wampserver.com/en/" className="text-blue-600 hover:underline">WampServer download page</a>.</li>
                    <li>Download the latest version for your Windows system (32 or 64 bit).</li>
                    <li>Run the installer and follow the setup instructions.</li>
                    <li>Launch WampServer and wait for all services to start.</li>
                  </ol>
                </TabsContent>
    
                <TabsContent value="mamp">
                  <h4 className="text-xl font-semibold mt-4">MAMP</h4>
                  <p className="mb-4">MAMP (Mac, Apache, MySQL, PHP) is a solution stack for macOS.</p>
                  <ol className="list-decimal list-inside ml-4 space-y-2">
                    <li>Visit the <a href="https://www.mamp.info/en/downloads/" className="text-blue-600 hover:underline">MAMP download page</a>.</li>
                    <li>Download the version for macOS.</li>
                    <li>Install MAMP by dragging it to your Applications folder.</li>
                    <li>Launch MAMP and start the servers from the MAMP window.</li>
                  </ol>
                </TabsContent>
              </Tabs>
            </TabsContent>
            
            <TabsContent value="usage">
              <h3 className="text-2xl font-semibold mb-4">Using IDEs for PHP Development</h3>
              <p className="mb-4">While you can write PHP code in any text editor, using an IDE can greatly enhance your productivity. Here are some popular IDEs for PHP development:</p>
              
              <h4 className="text-xl font-semibold mt-4">PhpStorm:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                <li>Download and install PhpStorm from the <a href="https://www.jetbrains.com/phpstorm/download/" className="text-blue-600 hover:underline">JetBrains website</a>.</li>
                <li>Launch PhpStorm and create a new PHP project.</li>
                <li>Configure your PHP interpreter in PhpStorm settings.</li>
              </ul>
    
              <h4 className="text-xl font-semibold mt-4">Visual Studio Code:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Download and install VS Code from the <a href="https://code.visualstudio.com/download" className="text-blue-600 hover:underline">official website</a>.</li>
                <li>Install the PHP extension from the VS Code marketplace.</li>
                <li>Open a folder containing your PHP project in VS Code.</li>
                <li>Start coding in PHP!</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="hello-world">
              <h3 className="text-2xl font-semibold mb-4">Your First PHP Program: Hello World</h3>
              <p className="mb-4">Let's write a simple "Hello World" program in PHP:</p>
              
              <Button 
                onClick={() => setShowCode(!showCode)}
                className="mb-4"
              >
                <Code className="mr-2 h-4 w-4" /> {showCode ? "Hide" : "Show"} Code
              </Button>
              
              {showCode && (
                <SyntaxHighlighter language="php" style={darcula}>
                  {`<?php
                    echo "Hello, PHP World!";
                  ?>`}
                </SyntaxHighlighter>
              )}
              
              <h4 className="text-xl font-semibold mt-6">Understanding the Code:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><code>&lt;?php</code>: Opening PHP tag to start PHP code.</li>
                <li><code>echo</code>: Command to output text.</li>
                <li><code>?&gt;</code>: Closing PHP tag (optional if the file only contains PHP).</li>
              </ul>
              
              <p className="mt-4">This simple program demonstrates several key features of PHP:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>PHP code is embedded within HTML using special tags.</li>
                <li>Statements in PHP end with a semicolon.</li>
                <li>The <code>echo</code> statement is used to output text.</li>
                <li>PHP is loosely typed, so we didn't need to declare variable types.</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      );
    };
    return (
      <HelmetProvider>
      <div className="kotlin-course">
        <Helmet>
        <title>Master PHP Programming - Web Development and Server-Side Scripting | U-Learn Tech</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Learn PHP from basics to advanced concepts. Build dynamic websites, RESTful APIs, and robust web applications with our comprehensive PHP course at U-Learn Tech." />
      <meta name="keywords" content="PHP, Web Development, Server-Side Scripting, MySQL, Laravel, WordPress, RESTful APIs, U-Learn Tech" />
      <meta name="author" content="U-Learn Tech" />
      
     
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.u-learntech.com/courses/php-programming" />
      <meta name="twitter:title" content="Master PHP Programming - Web Development and Server-Side Scripting | U-Learn Tech" />
      <meta name="twitter:description" content="Learn PHP from basics to advanced concepts. Build dynamic websites, RESTful APIs, and robust web applications with our comprehensive PHP course at U-Learn Tech." />
      <meta name="twitter:image" content="https://www.u-learntech.com/images/php-course-twitter.jpg" />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Course",
          "name": "Master PHP Programming - Web Development and Server-Side Scripting",
          "description": "Learn PHP from basics to advanced concepts. Build dynamic websites, RESTful APIs, and robust web applications with our comprehensive PHP course.",
          "provider": {
            "@type": "Organization",
            "name": "U-Learn Tech",
            "sameAs": "https://www.u-learntech.com"
          },
          "url": "https://www.u-learntech.com/courses/php-programming",
          "courseCode": "PHP101",
          "educationalLevel": "Beginner to Advanced",
          "programmingLanguage": "PHP",
          "teaches": [
            "PHP Fundamentals",
            "Object-Oriented Programming in PHP",
            "MySQL Database Integration",
            "PHP Data Objects (PDO)",
            "PHP Security Best Practices",
            "RESTful API Development with PHP",
            "Laravel Framework Basics",
            "WordPress Theme and Plugin Development",
            "PHP Performance Optimization",
            "Modern PHP Features and Standards"
          ],
          "occupationalCategory": "Web Developer, Backend Developer, Full Stack Developer"
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
                </li>
              ))}
            </ul>
          </nav>
          <div className="main-content">
            {renderInteractiveContent()}
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
  
  export default PhpCourse;