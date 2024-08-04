import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowUp, Menu, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Button from '../components/ui/button';
import { Helmet } from 'react-helmet';
import { Code } from 'lucide-react';
import './sharp.css';

const sections =[
    {
        id:'introduction',
        title:'Introduction',
        content:`<section id="introduction">
        </section>`
    },
    {
        id: 'variables',
        title: 'Variables',
        content: `
          <section id="variables">
            <h2>Variables in C#</h2>
      
            <h3>Introduction</h3>
            <p>In C#, a variable is a storage location in memory with a specific type that determines what kind of data it can hold. Variables are used to store data that can be manipulated and retrieved during the execution of a program.</p>
      
            <h3>Declaring Variables</h3>
            <p>To declare a variable in C#, you need to specify the type of the variable followed by its name. Here is the basic syntax:</p>
            <pre><code class="language-csharp">
            type variableName;
            </code></pre>
            <p>For example:</p>
            <pre><code class="language-csharp">
            int age;
            string name;
            double salary;
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>int age;</strong>: Declares a variable named <code>age</code> of type <code>int</code> (integer).</li>
              <li><strong>string name;</strong>: Declares a variable named <code>name</code> of type <code>string</code> (text).</li>
              <li><strong>double salary;</strong>: Declares a variable named <code>salary</code> of type <code>double</code> (floating-point number).</li>
            </ul>
      
            <h3>Initializing Variables</h3>
            <p>You can initialize a variable at the time of declaration by assigning it a value:</p>
            <pre><code class="language-csharp">
            int age = 25;
            string name = "John";
            double salary = 50000.50;
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>int age = 25;</strong>: Declares and initializes an integer variable <code>age</code> with the value 25.</li>
              <li><strong>string name = "John";</strong>: Declares and initializes a string variable <code>name</code> with the value "John".</li>
              <li><strong>double salary = 50000.50;</strong>: Declares and initializes a double variable <code>salary</code> with the value 50000.50.</li>
            </ul>
      
            <h3>Variable Types</h3>
            <p>C# supports various types of variables, including:</p>
            <ul>
              <li><strong>int:</strong> Represents a 32-bit integer. Example: <code>int count = 10;</code></li>
              <li><strong>double:</strong> Represents a double-precision floating-point number. Example: <code>double distance = 12.5;</code></li>
              <li><strong>char:</strong> Represents a single Unicode character. Example: <code>char letter = 'A';</code></li>
              <li><strong>string:</strong> Represents a sequence of characters. Example: <code>string message = "Hello, World!";</code></li>
              <li><strong>bool:</strong> Represents a boolean value (true or false). Example: <code>bool isActive = true;</code></li>
            </ul>
      
            <h3>Using Variables</h3>
            <p>Once declared and initialized, you can use variables in expressions and statements. Here are some examples:</p>
            <pre><code class="language-csharp">
            int a = 5;
            int b = 10;
            int sum = a + b; // sum is 15
      
            string firstName = "Jane";
            string lastName = "Doe";
            string fullName = firstName + " " + lastName; // fullName is "Jane Doe"
      
            bool isEven = (sum % 2 == 0); // isEven is true because 15 is not even
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>int sum = a + b;</strong>: Adds the values of <code>a</code> and <code>b</code> and assigns the result to <code>sum</code>.</li>
              <li><strong>string fullName = firstName + " " + lastName;</strong>: Concatenates <code>firstName</code> and <code>lastName</code> with a space and assigns the result to <code>fullName</code>.</li>
              <li><strong>bool isEven = (sum % 2 == 0);</strong>: Checks if <code>sum</code> is even and assigns the result (true or false) to <code>isEven</code>.</li>
            </ul>
      
            <h3>Constants</h3>
            <p>Constants are variables whose value cannot be changed once assigned. You declare a constant using the <code>const</code> keyword:</p>
            <pre><code class="language-csharp">
            const double PI = 3.14159;
            const int DAYS_IN_WEEK = 7;
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>const double PI = 3.14159;</strong>: Declares a constant <code>PI</code> of type <code>double</code> with the value 3.14159.</li>
              <li><strong>const int DAYS_IN_WEEK = 7;</strong>: Declares a constant <code>DAYS_IN_WEEK</code> of type <code>int</code> with the value 7.</li>
            </ul>
      
            <h3>Assignment 1: Declaring and Initializing Variables</h3>
            <p>Write a C# program that declares and initializes the following variables:</p>
            <ul>
              <li>An integer variable <code>age</code> with the value 30</li>
              <li>A string variable <code>city</code> with the value "New York"</li>
              <li>A double variable <code>temperature</code> with the value 22.5</li>
              <li>A boolean variable <code>isRaining</code> with the value false</li>
            </ul>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
            using System;
      
            namespace VariableAssignment
            {
                class Program
                {
                    static void Main(string[] args)
                    {
                        int age = 30;
                        string city = "New York";
                        double temperature = 22.5;
                        bool isRaining = false;
      
                        Console.WriteLine("Age: " + age);
                        Console.WriteLine("City: " + city);
                        Console.WriteLine("Temperature: " + temperature);
                        Console.WriteLine("Is it raining? " + isRaining);
                    }
                }
            }
            </code></pre>
      
            <h3>Assignment 2: Performing Operations with Variables</h3>
            <p>Write a C# program that declares and initializes two integer variables, <code>x</code> and <code>y</code>, with values 8 and 3, respectively. Perform the following operations and display the results:</p>
            <ul>
              <li>Add <code>x</code> and <code>y</code></li>
              <li>Subtract <code>y</code> from <code>x</code></li>
              <li>Multiply <code>x</code> and <code>y</code></li>
              <li>Divide <code>x</code> by <code>y</code></li>
              <li>Find the remainder of the division of <code>x</code> by <code>y</code></li>
            </ul>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
            using System;
      
            namespace VariableOperations
            {
                class Program
                {
                    static void Main(string[] args)
                    {
                        int x = 8;
                        int y = 3;
      
                        int sum = x + y;
                        int difference = x - y;
                        int product = x * y;
                        double quotient = (double)x / y;
                        int remainder = x % y;
      
                        Console.WriteLine("Sum: " + sum);
                        Console.WriteLine("Difference: " + difference);
                        Console.WriteLine("Product: " + product);
                        Console.WriteLine("Quotient: " + quotient);
                        Console.WriteLine("Remainder: " + remainder);
                    }
                }
            }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Variables are fundamental to programming in C#, allowing you to store and manipulate data. By understanding how to declare, initialize, and use variables, you can create more complex and dynamic programs. Practice using variables and constants to become proficient in C# programming.</p>
          </section>
        `
      },
      
      {
        id: 'datatypes',
        title: 'Datatypes',
        content: `
          <section id="datatypes">
            <h2>Datatypes in C#</h2>
      
            <h3>Introduction</h3>
            <p>In C#, a datatype specifies the type of data that a variable can hold. C# is a strongly-typed language, meaning that every variable and constant must have a data type. Understanding data types is fundamental to programming in C# as it helps ensure that data is used correctly and efficiently.</p>
      
            <h3>Primitive Datatypes</h3>
            <p>C# provides several built-in data types, known as primitive data types. Here are some of the most commonly used primitive data types:</p>
      
            <h4>Integer Types</h4>
            <ul>
              <li><strong>int:</strong> Represents a 32-bit signed integer. It can hold values from -2,147,483,648 to 2,147,483,647. Example:
                <pre><code class="language-csharp">
      int count = 100;
      Console.WriteLine(count); // Output: 100
                </code></pre>
              </li>
              <li><strong>long:</strong> Represents a 64-bit signed integer. It can hold values from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. Example:
                <pre><code class="language-csharp">
      long population = 7000000000L;
      Console.WriteLine(population); // Output: 7000000000
                </code></pre>
              </li>
              <li><strong>short:</strong> Represents a 16-bit signed integer. It can hold values from -32,768 to 32,767. Example:
                <pre><code class="language-csharp">
      short temperature = -20;
      Console.WriteLine(temperature); // Output: -20
                </code></pre>
              </li>
              <li><strong>byte:</strong> Represents an 8-bit unsigned integer. It can hold values from 0 to 255. Example:
                <pre><code class="language-csharp">
      byte age = 25;
      Console.WriteLine(age); // Output: 25
                </code></pre>
              </li>
            </ul>
      
            <h4>Floating-Point Types</h4>
            <ul>
              <li><strong>float:</strong> Represents a single-precision floating-point number. It can hold values from approximately 1.5 x 10^−45 to 3.4 x 10^38, with 7 digits of precision. Example:
                <pre><code class="language-csharp">
      float pi = 3.14F;
      Console.WriteLine(pi); // Output: 3.14
                </code></pre>
              </li>
              <li><strong>double:</strong> Represents a double-precision floating-point number. It can hold values from approximately 5.0 × 10^−324 to 1.7 × 10^308, with 15-16 digits of precision. Example:
                <pre><code class="language-csharp">
      double e = 2.71828;
      Console.WriteLine(e); // Output: 2.71828
                </code></pre>
              </li>
            </ul>
      
            <h4>Other Primitive Types</h4>
            <ul>
              <li><strong>char:</strong> Represents a single Unicode character. Example:
                <pre><code class="language-csharp">
      char grade = 'A';
      Console.WriteLine(grade); // Output: A
                </code></pre>
              </li>
              <li><strong>bool:</strong> Represents a boolean value (true or false). Example:
                <pre><code class="language-csharp">
      bool isActive = true;
      Console.WriteLine(isActive); // Output: True
                </code></pre>
              </li>
            </ul>
      
            <h4>String Type</h4>
            <ul>
              <li><strong>string:</strong> Represents a sequence of characters. Example:
                <pre><code class="language-csharp">
      string name = "John";
      Console.WriteLine(name); // Output: John
                </code></pre>
              </li>
            </ul>
      
            <h3>Non-Primitive Datatypes</h3>
            <p>In addition to primitive data types, C# also supports non-primitive data types such as arrays, enums, structs, and classes.</p>
      
            <h4>Array</h4>
            <p>An array is a collection of elements of the same type. Example:</p>
            <pre><code class="language-csharp">
      int[] numbers = { 1, 2, 3, 4, 5 };
      string[] names = { "Alice", "Bob", "Charlie" };
      Console.WriteLine(string.Join(", ", numbers)); // Output: 1, 2, 3, 4, 5
      Console.WriteLine(string.Join(", ", names)); // Output: Alice, Bob, Charlie
            </code></pre>
      
            <h4>Enum</h4>
            <p>An enum is a distinct type that consists of a set of named constants. Example:</p>
            <pre><code class="language-csharp">
      enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
      Days today = Days.Wednesday;
      Console.WriteLine(today); // Output: Wednesday
            </code></pre>
      
            <h4>Struct</h4>
            <p>A struct is a value type that can encapsulate data and related functionality. Example:</p>
            <pre><code class="language-csharp">
      struct Point
      {
          public int X;
          public int Y;
      
          public Point(int x, int y)
          {
              X = x;
              Y = y;
          }
      }
      
      Point p = new Point(10, 20);
      Console.WriteLine($"Point: ({p.X}, {p.Y})"); // Output: Point: (10, 20)
            </code></pre>
      
            <h4>Class</h4>
            <p>A class is a reference type that can encapsulate data and related functionality. Example:</p>
            <pre><code class="language-csharp">
      class Person
      {
          public string Name { get; set; }
          public int Age { get; set; }
      
          public Person(string name, int age)
          {
              Name = name;
              Age = age;
          }
      }
      
      Person person = new Person("Alice", 30);
      Console.WriteLine($"Person: {person.Name}, Age: {person.Age}"); // Output: Person: Alice, Age: 30
            </code></pre>
      
            <h3>Assignment 1: Declaring and Initializing Variables of Different Types</h3>
            <p>Write a C# program that declares and initializes variables of the following types:</p>
            <ul>
              <li>An integer variable <code>age</code> with the value 25</li>
              <li>A double variable <code>salary</code> with the value 50000.50</li>
              <li>A char variable <code>grade</code> with the value 'A'</li>
              <li>A boolean variable <code>isMarried</code> with the value true</li>
              <li>A string variable <code>name</code> with the value "John Doe"</li>
            </ul>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      namespace DataTypeAssignment
      {
          class Program
          {
              static void Main(string[] args)
              {
                  int age = 25;
                  double salary = 50000.50;
                  char grade = 'A';
                  bool isMarried = true;
                  string name = "John Doe";
      
                  Console.WriteLine("Age: " + age);
                  Console.WriteLine("Salary: " + salary);
                  Console.WriteLine("Grade: " + grade);
                  Console.WriteLine("Is Married: " + isMarried);
                  Console.WriteLine("Name: " + name);
              }
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Using Non-Primitive Datatypes</h3>
            <p>Write a C# program that:</p>
            <ul>
              <li>Declares and initializes an array of five integers</li>
              <li>Declares and initializes an enum for the days of the week, then assigns a value to a variable of that enum type</li>
              <li>Declares and initializes a struct with two fields, then creates an instance of the struct and assigns values to its fields</li>
              <li>Declares and initializes a class with two properties, then creates an instance of the class and assigns values to its properties</li>
            </ul>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      namespace NonPrimitiveDataTypes
      {
          class Program
          {
              enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
      
              struct Point
              {
                  public int X;
                  public int Y;
      
                  public Point(int x, int y)
                  {
                      X = x;
                      Y = y;
                  }
              }
      
              class Person
              {
                  public string Name { get; set; }
                  public int Age { get; set; }
      
                  public Person(string name, int age)
                  {
                      Name = name;
                      Age = age;
                  }
              }
      
              static void Main(string[] args)
              {
                  // Array of integers
                  int[] numbers = { 1, 2, 3, 4, 5 };
                  Console.WriteLine("Array of numbers: " + string.Join(", ", numbers));
      
                  // Enum for days of the week
                  Days today = Days.Wednesday;
                  Console.WriteLine("Today is: " + today);
      
                  // Struct for a point
                  Point p = new Point(10, 20);
                  Console.WriteLine($"Point: ({p.X}, {p.Y})");
      
                  // Class for a person
                  Person person = new Person("Alice", 30);
                  Console.WriteLine($"Person: {person.Name}, Age: {person.Age}");
              }
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Understanding data types is fundamental to programming in C#. By knowing the different types available and how to use them, you can write more efficient and effective code. Practice declaring and using both primitive and non-primitive data types to become proficient in C# programming.</p>
          </section>
        `
      },
      
      {
        id: 'operators',
        title: 'Operators',
        content: `
          <section id="operators">
            <h2>Operators in C#</h2>
      
            <h3>Introduction</h3>
            <p>Operators in C# are special symbols or keywords used to perform operations on operands. They can manipulate data, variables, and values to produce results. Understanding operators is fundamental to programming as they are used in almost every aspect of code, from simple calculations to complex logic.</p>
      
            <h3>Arithmetic Operators</h3>
            <p>Arithmetic operators are used to perform basic mathematical operations. Here are the common arithmetic operators in C#:</p>
            <ul>
              <li><strong>Addition (+):</strong> Adds two operands. Example:
                <pre><code class="language-csharp">
      int a = 5;
      int b = 3;
      int sum = a + b; // sum is 8
      Console.WriteLine(sum); // Output: 8
                </code></pre>
              </li>
              <li><strong>Subtraction (-):</strong> Subtracts the second operand from the first. Example:
                <pre><code class="language-csharp">
      int diff = a - b; // diff is 2
      Console.WriteLine(diff); // Output: 2
                </code></pre>
              </li>
              <li><strong>Multiplication (*):</strong> Multiplies two operands. Example:
                <pre><code class="language-csharp">
      int product = a * b; // product is 15
      Console.WriteLine(product); // Output: 15
                </code></pre>
              </li>
              <li><strong>Division (/):</strong> Divides the first operand by the second. Example:
                <pre><code class="language-csharp">
      int quotient = a / b; // quotient is 1
      Console.WriteLine(quotient); // Output: 1
                </code></pre>
              </li>
              <li><strong>Modulus (%):</strong> Returns the remainder of the division. Example:
                <pre><code class="language-csharp">
      int remainder = a % b; // remainder is 2
      Console.WriteLine(remainder); // Output: 2
                </code></pre>
              </li>
            </ul>
      
            <h3>Comparison Operators</h3>
            <p>Comparison operators are used to compare two values or operands. Here are the common comparison operators in C#:</p>
            <ul>
              <li><strong>Equal to (==):</strong> Checks if two operands are equal. Example:
                <pre><code class="language-csharp">
      bool isEqual = (a == b); // isEqual is false
      Console.WriteLine(isEqual); // Output: False
                </code></pre>
              </li>
              <li><strong>Not equal to (!=):</strong> Checks if two operands are not equal. Example:
                <pre><code class="language-csharp">
      bool isNotEqual = (a != b); // isNotEqual is true
      Console.WriteLine(isNotEqual); // Output: True
                </code></pre>
              </li>
              <li><strong>Greater than (>):</strong> Checks if the first operand is greater than the second. Example:
                <pre><code class="language-csharp">
      bool isGreater = (a > b); // isGreater is true
      Console.WriteLine(isGreater); // Output: True
                </code></pre>
              </li>
              <li><strong>Less than (<):</strong> Checks if the first operand is less than the second. Example:
                <pre><code class="language-csharp">
      bool isLess = (a < b); // isLess is false
      Console.WriteLine(isLess); // Output: False
                </code></pre>
              </li>
              <li><strong>Greater than or equal to (>=):</strong> Checks if the first operand is greater than or equal to the second. Example:
                <pre><code class="language-csharp">
      bool isGreaterOrEqual = (a >= b); // isGreaterOrEqual is true
      Console.WriteLine(isGreaterOrEqual); // Output: True
                </code></pre>
              </li>
              <li><strong>Less than or equal to (<=):</strong> Checks if the first operand is less than or equal to the second. Example:
                <pre><code class="language-csharp">
      bool isLessOrEqual = (a <= b); // isLessOrEqual is false
      Console.WriteLine(isLessOrEqual); // Output: False
                </code></pre>
              </li>
            </ul>
      
            <h3>Logical Operators</h3>
            <p>Logical operators are used to combine multiple boolean expressions or conditions. Here are the common logical operators in C#:</p>
            <ul>
              <li><strong>Logical AND (&&):</strong> Returns true if both operands are true. Example:
                <pre><code class="language-csharp">
      bool result = (a > b && b > 0); // result is true
      Console.WriteLine(result); // Output: True
                </code></pre>
              </li>
              <li><strong>Logical OR (||):</strong> Returns true if at least one of the operands is true. Example:
                <pre><code class="language-csharp">
      result = (a > b || b < 0); // result is true
      Console.WriteLine(result); // Output: True
                </code></pre>
              </li>
              <li><strong>Logical NOT (!):</strong> Returns true if the operand is false. Example:
                <pre><code class="language-csharp">
      result = !(a > b); // result is false
      Console.WriteLine(result); // Output: False
                </code></pre>
              </li>
            </ul>
      
            <h3>Assignment Operators</h3>
            <p>Assignment operators are used to assign values to variables. Here are the common assignment operators in C#:</p>
            <ul>
              <li><strong>Assignment (=):</strong> Assigns the right operand to the left operand. Example:
                <pre><code class="language-csharp">
      int c = 10;
      Console.WriteLine(c); // Output: 10
                </code></pre>
              </li>
              <li><strong>Addition assignment (+=):</strong> Adds the right operand to the left operand and assigns the result to the left operand. Example:
                <pre><code class="language-csharp">
      c += 5; // c is now 15
      Console.WriteLine(c); // Output: 15
                </code></pre>
              </li>
              <li><strong>Subtraction assignment (-=):</strong> Subtracts the right operand from the left operand and assigns the result to the left operand. Example:
                <pre><code class="language-csharp">
      c -= 3; // c is now 12
      Console.WriteLine(c); // Output: 12
                </code></pre>
              </li>
              <li><strong>Multiplication assignment (*=):</strong> Multiplies the left operand by the right operand and assigns the result to the left operand. Example:
                <pre><code class="language-csharp">
      c *= 2; // c is now 24
      Console.WriteLine(c); // Output: 24
                </code></pre>
              </li>
              <li><strong>Division assignment (/=):</strong> Divides the left operand by the right operand and assigns the result to the left operand. Example:
                <pre><code class="language-csharp">
      c /= 4; // c is now 6
      Console.WriteLine(c); // Output: 6
                </code></pre>
              </li>
              <li><strong>Modulus assignment (%=):</strong> Takes the modulus using two operands and assigns the result to the left operand. Example:
                <pre><code class="language-csharp">
      c %= 5; // c is now 1
      Console.WriteLine(c); // Output: 1
                </code></pre>
              </li>
            </ul>
      
            <h3>Bitwise Operators</h3>
            <p>Bitwise operators are used to perform bit-level operations on operands. Here are the common bitwise operators in C#:</p>
            <ul>
              <li><strong>Bitwise AND (&):</strong> Performs a bitwise AND operation. Example:
                <pre><code class="language-csharp">
      int x = 5; // Binary: 0101
      int y = 3; // Binary: 0011
      int result = x & y; // Binary: 0001, result is 1
      Console.WriteLine(result); // Output: 1
                </code></pre>
              </li>
              <li><strong>Bitwise OR (|):</strong> Performs a bitwise OR operation. Example:
                <pre><code class="language-csharp">
      result = x | y; // Binary: 0111, result is 7
      Console.WriteLine(result); // Output: 7
                </code></pre>
              </li>
              <li><strong>Bitwise XOR (^):</strong> Performs a bitwise XOR operation. Example:
                <pre><code class="language-csharp">
      result = x ^ y; // Binary: 0110, result is 6
      Console.WriteLine(result); // Output: 6
                </code></pre>
              </li>
              <li><strong>Bitwise NOT (~):</strong> Performs a bitwise NOT operation. Example:
                <pre><code class="language-csharp">
      result = ~x; // Binary: 1010 (in 32-bit representation: 11111111111111111111111111111010), result is -6
      Console.WriteLine(result); // Output: -6
                </code></pre>
              </li>
              <li><strong>Left shift (<<):</strong> Shifts bits to the left. Example:
                <pre><code class="language-csharp">
      result = x << 1; // Binary: 1010, result is 10
      Console.WriteLine(result); // Output: 10
                </code></pre>
              </li>
              <li><strong>Right shift (>>):</strong> Shifts bits to the right. Example:
                <pre><code class="language-csharp">
      result = x >> 1; // Binary: 0010, result is 2
      Console.WriteLine(result); // Output: 2
                </code></pre>
              </li>
            </ul>
      
            <h3>Assignment 1: Basic Arithmetic Operations</h3>
            <p>Write a C# program that declares two integer variables, <code>x</code> and <code>y</code>, with values 8 and 3, respectively. Perform the following operations and display the results:</p>
            <ul>
              <li>Add <code>x</code> and <code>y</code></li>
              <li>Subtract <code>y</code> from <code>x</code></li>
              <li>Multiply <code>x</code> and <code>y</code></li>
              <li>Divide <code>x</code> by <code>y</code></li>
              <li>Find the remainder of the division of <code>x</code> by <code>y</code></li>
            </ul>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      namespace BasicArithmeticOperations
      {
          class Program
          {
              static void Main(string[] args)
              {
                  int x = 8;
                  int y = 3;
      
                  int sum = x + y;
                  int difference = x - y;
                  int product = x * y;
                  double quotient = (double)x / y;
                  int remainder = x % y;
      
                  Console.WriteLine("Sum: " + sum); // Output: Sum: 11
                  Console.WriteLine("Difference: " + difference); // Output: Difference: 5
                  Console.WriteLine("Product: " + product); // Output: Product: 24
                  Console.WriteLine("Quotient: " + quotient); // Output: Quotient: 2.6666666666666665
                  Console.WriteLine("Remainder: " + remainder); // Output: Remainder: 2
              }
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Comparison and Logical Operations</h3>
            <p>Write a C# program that declares three integer variables, <code>a</code>, <code>b</code>, and <code>c</code>, with values 5, 10, and 5, respectively. Perform the following operations and display the results:</p>
            <ul>
              <li>Check if <code>a</code> is equal to <code>c</code></li>
              <li>Check if <code>a</code> is not equal to <code>b</code></li>
              <li>Check if <code>b</code> is greater than <code>a</code></li>
              <li>Check if <code>a</code> is less than or equal to <code>c</code></li>
              <li>Check if both <code>a</code> is equal to <code>c</code> and <code>b</code> is greater than <code>a</code></li>
              <li>Check if either <code>a</code> is equal to <code>b</code> or <code>b</code> is greater than <code>c</code></li>
            </ul>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      namespace ComparisonAndLogicalOperations
      {
          class Program
          {
              static void Main(string[] args)
              {
                  int a = 5;
                  int b = 10;
                  int c = 5;
      
                  bool isEqual = (a == c);
                  bool isNotEqual = (a != b);
                  bool isGreater = (b > a);
                  bool isLessOrEqual = (a <= c);
                  bool bothConditions = (a == c && b > a);
                  bool eitherCondition = (a == b || b > c);
      
                  Console.WriteLine("a == c: " + isEqual); // Output: a == c: True
                  Console.WriteLine("a != b: " + isNotEqual); // Output: a != b: True
                  Console.WriteLine("b > a: " + isGreater); // Output: b > a: True
                  Console.WriteLine("a <= c: " + isLessOrEqual); // Output: a <= c: True
                  Console.WriteLine("a == c && b > a: " + bothConditions); // Output: a == c && b > a: True
                  Console.WriteLine("a == b || b > c: " + eitherCondition); // Output: a == b || b > c: True
              }
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Operators are essential in C# for performing a wide range of operations on variables and values. By understanding and using different types of operators, such as arithmetic, comparison, logical, assignment, and bitwise operators, you can write more powerful and efficient code. Practice using these operators to become proficient in C# programming.</p>
          </section>
        `
      },
      
      {
        id: 'userinput',
        title: 'User Input',
        content: `
          <section id="userinput">
            <h2>User Input in C#</h2>
      
            <h3>Introduction</h3>
            <p>In many applications, it's essential to get input from the user to perform various operations. In C#, user input is typically read from </p>
            <p>the console using the <code>Console.ReadLine()</code> method. Understanding how to handle user input is crucial for creating interactive programs.</p>
      
            <h3>Reading User Input</h3>
            <p>The <code>Console.ReadLine()</code> method reads a line of text from the console. The input is returned as a string, which can be processed or converted </p>
            <p>to other data types as needed. Here is a basic example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Enter your name:");
              string name = Console.ReadLine();
              Console.WriteLine("Hello, " + name + "!");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Console.WriteLine("Enter your name:");</strong> Prompts the user to enter their name.</li>
              <li><strong>string name = Console.ReadLine();</strong> Reads the user's input and stores it in the <code>name</code> variable.</li>
              <li><strong>Console.WriteLine("Hello, " + name + "!");</strong> Displays a greeting message with the user's name.</li>
            </ul>
      
            <h3>Converting User Input</h3>
            <p>Since <code>Console.ReadLine()</code> returns a string, you may need to convert the input to other data types. Here are some common conversions:</p>
            <ul>
              <li><strong>int.Parse(string):</strong> Converts a string to an integer. Example:
                <pre><code class="language-csharp">
      Console.WriteLine("Enter your age:");
      string ageInput = Console.ReadLine();
      int age = int.Parse(ageInput);
      Console.WriteLine("You are " + age + " years old.");
                </code></pre>
              </li>
              <li><strong>double.Parse(string):</strong> Converts a string to a double. Example:
                <pre><code class="language-csharp">
      Console.WriteLine("Enter your height in meters:");
      string heightInput = Console.ReadLine();
      double height = double.Parse(heightInput);
      Console.WriteLine("Your height is " + height + " meters.");
                </code></pre>
              </li>
              <li><strong>bool.Parse(string):</strong> Converts a string to a boolean. Example:
                <pre><code class="language-csharp">
      Console.WriteLine("Are you a student? (true/false):");
      string isStudentInput = Console.ReadLine();
      bool isStudent = bool.Parse(isStudentInput);
      Console.WriteLine("Student status: " + isStudent);
                </code></pre>
              </li>
            </ul>
      
            <h3>Handling Conversion Errors</h3>
            <p>When converting user input, it's essential to handle possible errors. Using <code>TryParse</code> methods can prevent runtime exceptions by checking if the </p>
            <p>conversion was successful:</p>
            <pre><code class="language-csharp">
      Console.WriteLine("Enter your age:");
      string ageInput = Console.ReadLine();
      if (int.TryParse(ageInput, out int age))
      {
          Console.WriteLine("You are " + age + " years old.");
      }
      else
      {
          Console.WriteLine("Invalid input. Please enter a valid number.");
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>int.TryParse(ageInput, out int age):</strong> Tries to convert <code>ageInput</code> to an integer. If successful, stores the result in <code>age</code> and</li>
              <p>returns true; otherwise, returns false.</p>
              <li><strong>if (int.TryParse(ageInput, out int age))</strong>: Checks if the conversion was successful and handles the result accordingly.</li>
            </ul>
      
            <h3>Assignment 1: Basic User Input</h3>
            <p>Write a C# program that prompts the user to enter their name, age, and favorite number. The program should then display a message </p>
            <p>including the entered information.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Enter your name:");
              string name = Console.ReadLine();
      
              Console.WriteLine("Enter your age:");
              string ageInput = Console.ReadLine();
              int age = int.Parse(ageInput);
      
              Console.WriteLine("Enter your favorite number:");
              string favoriteNumberInput = Console.ReadLine();
              int favoriteNumber = int.Parse(favoriteNumberInput);
      
              Console.WriteLine("Hello, " + name + "! You are " + age + " years old, 
              and your favorite number is " + favoriteNumber + ".");
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Handling Invalid Input</h3>
            <p>Write a C# program that prompts the user to enter their height in meters. Use <code>double.TryParse</code> to ensure the input is a valid number. If the input is invalid, display an error message; otherwise, display the entered height.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Enter your height in meters:");
              string heightInput = Console.ReadLine();
      
              if (double.TryParse(heightInput, out double height))
              {
                  Console.WriteLine("Your height is " + height + " meters.");
              }
              else
              {
                  Console.WriteLine("Invalid input. Please enter a valid number.");
              }
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Handling user input is a critical part of creating interactive applications in C#. By using methods like <code>Console.ReadLine()</code> and handling conversions properly, you can ensure your program gets the correct data from the user. Practice these techniques to become proficient in managing user input in your C# programs.</p>
          </section>
        `
      },
      
      {
        id: 'output',
        title: 'Output',
        content: `
          <section id="output">
            <h2>Output in C#</h2>
      
            <h3>Introduction</h3>
            <p>In C#, output refers to the process of displaying information to the user or other systems. The most common way to produce output in C# is using the <code>Console.WriteLine()</code> and <code>Console.Write()</code> methods. These methods allow you to print text, variables, and formatted strings to the console.</p>
      
            <h3>Using Console.WriteLine()</h3>
            <p>The <code>Console.WriteLine()</code> method prints a line of text to the console and then moves the cursor to the next line. Here is a basic example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Hello, World!");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Console.WriteLine("Hello, World!");</strong> Prints the text "Hello, World!" to the console and moves to the next line.</li>
            </ul>
      
            <h3>Using Console.Write()</h3>
            <p>The <code>Console.Write()</code> method prints text to the console without moving to the next line. Here is a basic example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.Write("Hello, ");
              Console.Write("World!");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Console.Write("Hello, ");</strong> Prints the text "Hello, " to the console without moving to the next line.</li>
              <li><strong>Console.Write("World!");</strong> Prints the text "World!" immediately after "Hello, ".</li>
            </ul>
      
            <h3>Formatting Output</h3>
            <p>C# provides several ways to format output, allowing you to create well-structured and readable output. Here are some common techniques:</p>
            <ul>
              <li><strong>String Interpolation:</strong> Allows you to embed expressions within string literals using curly braces (<code>{}</code>). Example:
                <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              string name = "John";
              int age = 30;
              Console.WriteLine($"Name: {name}, Age: {age}");
          }
      }
                </code></pre>
                <p>Explanation:</p>
                <ul>
                  <li><strong>$"Name: {name}, Age: {age}"</strong>: Embeds the values of <code>name</code> and <code>age</code> within the string.</li>
                </ul>
              </li>
              <li><strong>Composite Formatting:</strong> Uses placeholders (<code>{0}, {1}, ...</code>) to insert values into a string. Example:
                <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              string name = "John";
              int age = 30;
              Console.WriteLine("Name: {0}, Age: {1}", name, age);
          }
      }
                </code></pre>
                <p>Explanation:</p>
                <ul>
                  <li><strong>"Name: {0}, Age: {1}"</strong>: Uses placeholders <code>{0}</code> and <code>{1}</code> for the values of <code>name</code> and <code>age</code>, respectively.</li>
                  <li><strong>name, age</strong>: Specifies the values to be inserted into the placeholders.</li>
                </ul>
              </li>
            </ul>
      
            <h3>Combining Strings</h3>
            <p>In C#, you can combine (concatenate) strings using the <code>+</code> operator or the <code>String.Concat()</code> method. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              string firstName = "John";
              string lastName = "Doe";
              string fullName = firstName + " " + lastName;
              Console.WriteLine(fullName); // Output: John Doe
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>firstName + " " + lastName</strong>: Combines the values of <code>firstName</code> and <code>lastName</code> with a space in between.</li>
            </ul>
      
            <h3>Assignment 1: Displaying User Information</h3>
            <p>Write a C# program that prompts the user to enter their name, age, and favorite color. The program should then display a message including the entered information using both <code>Console.WriteLine()</code> and string interpolation.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Enter your name:");
              string name = Console.ReadLine();
      
              Console.WriteLine("Enter your age:");
              string ageInput = Console.ReadLine();
              int age = int.Parse(ageInput);
      
              Console.WriteLine("Enter your favorite color:");
              string favoriteColor = Console.ReadLine();
      
              Console.WriteLine($"Name: {name}, Age: {age}, Favorite Color: {favoriteColor}");
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Formatting Output</h3>
            <p>Write a C# program that declares three variables: <code>product</code> (string), <code>quantity</code> (int), and <code>price</code> (double). The program should display the product information using composite formatting.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              string product = "Laptop";
              int quantity = 5;
              double price = 799.99;
      
              Console.WriteLine("Product: {0}, Quantity: {1}, Price: {2:C}", product, quantity, price);
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Outputting information is a fundamental part of any program. By using methods like <code>Console.WriteLine()</code> and <code>Console.Write()</code>, and understanding how to format strings, you can create clear and readable output in your C# applications. Practice these techniques to become proficient in managing output in your programs.</p>
          </section>
        `
      },
      
      {
        id: 'control-structures',
        title: 'Control Structures',
        content: `
          <section id="control-structures">
            <h2>Control Structures in C#</h2>
      
            <h3>Introduction</h3>
            <p>Control structures are fundamental constructs in programming that allow you to control the flow of execution in your code. In C#, control structures include decision-making statements (if, else, switch), loops (for, while, do-while), and branching statements (break, continue, return).</p>
      
            <h3>Decision-Making Statements</h3>
      
            <h4>if Statement</h4>
            <p>The <code>if</code> statement executes a block of code if a specified condition is true. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int number = 10;
      
              if (number > 0)
              {
                  Console.WriteLine("The number is positive.");
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>if (number > 0)</strong>: Checks if the condition <code>number > 0</code> is true.</li>
              <li><strong>Console.WriteLine("The number is positive.");</strong>: Executes this statement if the condition is true.</li>
            </ul>
      
            <h4>if-else Statement</h4>
            <p>The <code>if-else</code> statement executes one block of code if a condition is true, and another block if the condition is false. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int number = -5;
      
              if (number > 0)
              {
                  Console.WriteLine("The number is positive.");
              }
              else
              {
                  Console.WriteLine("The number is not positive.");
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>else</strong>: Executes the code block inside the <code>else</code> statement if the <code>if</code> condition is false.</li>
            </ul>
      
            <h4>else if Statement</h4>
            <p>The <code>else if</code> statement allows you to check multiple conditions. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int number = 0;
      
              if (number > 0)
              {
                  Console.WriteLine("The number is positive.");
              }
              else if (number < 0)
              {
                  Console.WriteLine("The number is negative.");
              }
              else
              {
                  Console.WriteLine("The number is zero.");
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>else if</strong>: Checks another condition if the previous <code>if</code> condition is false.</li>
              <li><strong>else</strong>: Executes the code block inside the <code>else</code> statement if all previous conditions are false.</li>
            </ul>
      
            <h4>switch Statement</h4>
            <p>The <code>switch</code> statement selects one of many code blocks to execute based on the value of an expression. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int day = 3;
      
              switch (day)
              {
                  case 1:
                      Console.WriteLine("Monday");
                      break;
                  case 2:
                      Console.WriteLine("Tuesday");
                      break;
                  case 3:
                      Console.WriteLine("Wednesday");
                      break;
                  default:
                      Console.WriteLine("Other day");
                      break;
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>case 1:</strong> Executes the code block following the case label if <code>day</code> equals 1.</li>
              <li><strong>break;</strong>: Exits the switch statement.</li>
              <li><strong>default:</strong>: Executes if no other case matches.</li>
            </ul>
      
            <h3>Loops</h3>
            <p>Loops are used to execute a block of code repeatedly as long as a specified condition is true.</p>
      
            <h4>for Loop</h4>
            <p>The <code>for</code> loop repeats a block of code a specified number of times. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              for (int i = 1; i <= 5; i++)
              {
                  Console.WriteLine("Iteration " + i);
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>for (int i = 1; i <= 5; i++)</strong>: Initializes <code>i</code> to 1, checks if <code>i</code> is less than or equal to 5, and increments <code>i</code> after each iteration.</li>
              <li><strong>Console.WriteLine("Iteration " + i);</strong>: Executes this statement for each iteration of the loop.</li>
            </ul>
      
            <h4>while Loop</h4>
            <p>The <code>while</code> loop repeats a block of code as long as a specified condition is true. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int i = 1;
      
              while (i <= 5)
              {
                  Console.WriteLine("Iteration " + i);
                  i++;
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>while (i <= 5)</strong>: Checks if <code>i</code> is less than or equal to 5 before each iteration.</li>
              <li><strong>i++</strong>: Increments <code>i</code> after each iteration.</li>
            </ul>
      
            <h4>do-while Loop</h4>
            <p>The <code>do-while</code> loop repeats a block of code at least once, and then continues as long as a specified condition is true. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int i = 1;
      
              do
              {
                  Console.WriteLine("Iteration " + i);
                  i++;
              }
              while (i <= 5);
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>do { ... } while (i <= 5);</strong>: Executes the code block at least once and then repeats as long as <code>i <= 5</code> is true.</li>
            </ul>
      
            <h3>Branching Statements</h3>
      
            <h4>break Statement</h4>
            <p>The <code>break</code> statement terminates the nearest enclosing loop or switch statement. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              for (int i = 1; i <= 10; i++)
              {
                  if (i == 5)
                  {
                      break;
                  }
                  Console.WriteLine("Iteration " + i);
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>if (i == 5) { break; }</strong>: Exits the for loop when <code>i</code> equals 5.</li>
            </ul>
      
            <h4>continue Statement</h4>
            <p>The <code>continue</code> statement skips the remaining code in the current iteration and moves to the next iteration of the loop. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              for (int i = 1; i <= 5; i++)
              {
                  if (i == 3)
                  {
                      continue;
                  }
                  Console.WriteLine("Iteration " + i);
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>if (i == 3) { continue; }</strong>: Skips the current iteration when <code>i</code> equals 3 and continues with the next iteration.</li>
            </ul>
      
            <h4>return Statement</h4>
            <p>The <code>return</code> statement exits a method and optionally returns a value. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int result = Add(3, 5);
              Console.WriteLine("Result: " + result);
          }
      
          static int Add(int a, int b)
          {
              return a + b;
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>return a + b;</strong>: Exits the <code>Add</code> method and returns the sum of <code>a</code> and <code>b</code>.</li>
            </ul>
      
            <h3>Assignment 1: Decision Making</h3>
            <p>Write a C# program that prompts the user to enter a number and checks whether it is positive, negative, or zero using if-else statements. Display an appropriate message based on the input.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Enter a number:");
              int number = int.Parse(Console.ReadLine());
      
              if (number > 0)
              {
                  Console.WriteLine("The number is positive.");
              }
              else if (number < 0)
              {
                  Console.WriteLine("The number is negative.");
              }
              else
              {
                  Console.WriteLine("The number is zero.");
              }
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Looping</h3>
            <p>Write a C# program that prompts the user to enter a positive integer and prints the factorial of that number using a for loop. If the user enters a non-positive number, display an error message.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Enter a positive integer:");
              int number = int.Parse(Console.ReadLine());
      
              if (number <= 0)
              {
                  Console.WriteLine("Error: The number must be positive.");
              }
              else
              {
                  int factorial = 1;
                  for (int i = 1; i <= number; i++)
                  {
                      factorial *= i;
                  }
                  Console.WriteLine("The factorial of " + number + " is " + factorial);
              }
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Control structures are essential for directing the flow of execution in your programs. By understanding and using decision-making statements, loops, and branching statements, you can create more complex and functional applications. Practice using these control structures to become proficient in C# programming.</p>
          </section>
        `
      },
      
      {
        id: 'methods',
        title: 'Methods',
        content: `
          <section id="methods">
            <h2>Methods in C#</h2>
      
            <h3>Introduction</h3>
            <p>Methods are blocks of code that perform specific tasks and can be called from other parts of a program. They help organize code, make it more readable, and promote reusability. In C#, methods are defined within classes and can take parameters, return values, or simply execute code.</p>
      
            <h3>Defining Methods</h3>
            <p>A method definition includes a return type, a method name, and a body. The return type specifies what type of value the method returns, or <code>void</code> if it does not return a value. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              SayHello();
          }
      
          static void SayHello()
          {
              Console.WriteLine("Hello, World!");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>static void SayHello()</strong>: Defines a method named <code>SayHello</code> that does not return a value.</li>
              <li><strong>Console.WriteLine("Hello, World!");</strong>: Executes this statement when the <code>SayHello</code> method is called.</li>
            </ul>
      
            <h3>Calling Methods</h3>
            <p>To call a method, you use its name followed by parentheses. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              SayHello();
          }
      
          static void SayHello()
          {
              Console.WriteLine("Hello, World!");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>SayHello();</strong>: Calls the <code>SayHello</code> method, which prints "Hello, World!" to the console.</li>
            </ul>
      
            <h3>Method Parameters</h3>
            <p>Methods can take parameters, which are values passed to the method when it is called. Parameters allow methods to perform tasks with varying input. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Greet("Alice");
          }
      
          static void Greet(string name)
          {
              Console.WriteLine("Hello, " + name + "!");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>static void Greet(string name)</strong>: Defines a method named <code>Greet</code> that takes a string parameter <code>name</code>.</li>
              <li><strong>Console.WriteLine("Hello, " + name + "!");</strong>: Prints a greeting message that includes the value of <code>name</code>.</li>
              <li><strong>Greet("Alice");</strong>: Calls the <code>Greet</code> method with the argument "Alice".</li>
            </ul>
      
            <h3>Returning Values from Methods</h3>
            <p>Methods can return values using the <code>return</code> statement. The return type of the method must match the type of the value being returned. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int result = Add(3, 5);
              Console.WriteLine("Result: " + result);
          }
      
          static int Add(int a, int b)
          {
              return a + b;
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>static int Add(int a, int b)</strong>: Defines a method named <code>Add</code> that takes two integer parameters and returns an integer.</li>
              <li><strong>return a + b;</strong>: Returns the sum of <code>a</code> and <code>b</code>.</li>
              <li><strong>int result = Add(3, 5);</strong>: Calls the <code>Add</code> method with the arguments 3 and 5, and stores the returned value in the variable <code>result</code>.</li>
            </ul>
      
            <h3>Method Overloading</h3>
            <p>Method overloading allows you to define multiple methods with the same name but different parameters. The correct method is called based on the arguments provided. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.WriteLine(Add(2, 3)); // Calls the first Add method
              Console.WriteLine(Add(1.5, 2.5)); // Calls the second Add method
          }
      
          static int Add(int a, int b)
          {
              return a + b;
          }
      
          static double Add(double a, double b)
          {
              return a + b;
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>static int Add(int a, int b)</strong>: Defines an <code>Add</code> method that takes two integers and returns an integer.</li>
              <li><strong>static double Add(double a, double b)</strong>: Defines an <code>Add</code> method that takes two doubles and returns a double.</li>
              <li><strong>Add(2, 3)</strong>: Calls the integer <code>Add</code> method.</li>
              <li><strong>Add(1.5, 2.5)</strong>: Calls the double <code>Add</code> method.</li>
            </ul>
      
            <h3>Assignment 1: Basic Method</h3>
            <p>Write a C# program that defines a method named <code>Multiply</code> which takes two integers as parameters and returns their product. Call this method from the <code>Main</code> method and display the result.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int result = Multiply(4, 5);
              Console.WriteLine("Result: " + result);
          }
      
          static int Multiply(int a, int b)
          {
              return a * b;
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Method Overloading</h3>
            <p>Write a C# program that defines two overloaded methods named <code>Subtract</code>. The first method takes two integers and returns their difference. The second method takes two doubles and returns their difference. Call both methods from the <code>Main</code> method and display the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Subtracting integers: " + Subtract(10, 4));
              Console.WriteLine("Subtracting doubles: " + Subtract(10.5, 4.2));
          }
      
          static int Subtract(int a, int b)
          {
              return a - b;
          }
      
          static double Subtract(double a, double b)
          {
              return a - b;
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Methods are a core component of programming in C#, enabling you to encapsulate and reuse code efficiently. By understanding how to define, call, and overload methods, you can write more organized and maintainable programs. Practice creating and using methods to become proficient in C# programming.</p>
          </section>
        `
      },
      
      {
        id: 'arrays',
        title: 'Arrays',
        content: `
          <section id="arrays">
            <h2>Arrays in C#</h2>
      
            <h3>Introduction</h3>
            <p>An array is a collection of elements of the same type stored in a contiguous memory location. Arrays allow you to store multiple values in a single variable, making it easier to manage and manipulate collections of data.</p>
      
            <h3>Declaring and Initializing Arrays</h3>
            <p>To declare an array, you specify the type of its elements followed by square brackets. You can also initialize the array with values. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              // Declaration and initialization
              int[] numbers = { 1, 2, 3, 4, 5 };
      
              // Accessing array elements
              Console.WriteLine("First element: " + numbers[0]); // Output: 1
              Console.WriteLine("Second element: " + numbers[1]); // Output: 2
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>int[] numbers = { 1, 2, 3, 4, 5 };</strong>: Declares and initializes an array of integers with five elements.</li>
              <li><strong>numbers[0]</strong>: Accesses the first element of the array.</li>
              <li><strong>numbers[1]</strong>: Accesses the second element of the array.</li>
            </ul>
      
            <h3>Accessing and Modifying Array Elements</h3>
            <p>You can access and modify elements of an array using their index. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int[] numbers = { 1, 2, 3, 4, 5 };
      
              // Modifying array elements
              numbers[0] = 10;
              numbers[4] = 50;
      
              // Accessing modified elements
              Console.WriteLine("First element: " + numbers[0]); // Output: 10
              Console.WriteLine("Last element: " + numbers[4]); // Output: 50
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>numbers[0] = 10;</strong>: Modifies the first element of the array.</li>
              <li><strong>numbers[4] = 50;</strong>: Modifies the last element of the array.</li>
            </ul>
      
            <h3>Array Length</h3>
            <p>The <code>Length</code> property of an array returns the number of elements in the array. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int[] numbers = { 1, 2, 3, 4, 5 };
              Console.WriteLine("Array length: " + numbers.Length); // Output: 5
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>numbers.Length</strong>: Returns the number of elements in the array <code>numbers</code>.</li>
            </ul>
      
            <h3>Iterating Through Arrays</h3>
            <p>You can use loops to iterate through the elements of an array. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int[] numbers = { 1, 2, 3, 4, 5 };
      
              // Using a for loop to iterate through the array
              for (int i = 0; i < numbers.Length; i++)
              {
                  Console.WriteLine("Element at index " + i + ": " + numbers[i]);
              }
      
              // Using a foreach loop to iterate through the array
              foreach (int number in numbers)
              {
                  Console.WriteLine("Element: " + number);
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>for (int i = 0; i < numbers.Length; i++)</strong>: Iterates through the array using a for loop.</li>
              <li><strong>foreach (int number in numbers)</strong>: Iterates through the array using a foreach loop.</li>
            </ul>
      
            <h3>Multidimensional Arrays</h3>
            <p>C# supports multidimensional arrays, including rectangular arrays and jagged arrays. Here is an example of a rectangular array:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              // Declaring and initializing a 2D array
              int[,] matrix = {
                  { 1, 2, 3 },
                  { 4, 5, 6 },
                  { 7, 8, 9 }
              };
      
              // Accessing elements in a 2D array
              Console.WriteLine("Element at (0, 0): " + matrix[0, 0]); // Output: 1
              Console.WriteLine("Element at (1, 2): " + matrix[1, 2]); // Output: 6
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>int[,] matrix</strong>: Declares a 2D array of integers.</li>
              <li><strong>matrix[0, 0]</strong>: Accesses the element in the first row and first column of the array.</li>
              <li><strong>matrix[1, 2]</strong>: Accesses the element in the second row and third column of the array.</li>
            </ul>
      
            <h3>Assignment 1: Basic Array Operations</h3>
            <p>Write a C# program that declares an array of five integers, initializes it with values, and then prints the sum of all elements in the array.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int[] numbers = { 1, 2, 3, 4, 5 };
              int sum = 0;
      
              for (int i = 0; i < numbers.Length; i++)
              {
                  sum += numbers[i];
              }
      
              Console.WriteLine("Sum of array elements: " + sum); // Output: 15
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Multidimensional Array</h3>
            <p>Write a C# program that declares a 2D array representing a 3x3 matrix, initializes it with values, and then prints the diagonal elements of the matrix.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              int[,] matrix = {
                  { 1, 2, 3 },
                  { 4, 5, 6 },
                  { 7, 8, 9 }
              };
      
              Console.WriteLine("Diagonal elements:");
              for (int i = 0; i < 3; i++)
              {
                  Console.WriteLine(matrix[i, i]);
              }
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Arrays are a fundamental data structure in C# that allow you to store and manage collections of data. By understanding how to declare, initialize, and manipulate arrays, you can effectively work with multiple values in your programs. Practice using arrays to become proficient in C# programming.</p>
          </section>
        `
      },
      
      {
        id: 'object',
        title: 'Object-Oriented Programming',
        content: `
          <section id="object">
            <h2>Object-Oriented Programming in C#</h2>
      
            <h3>Introduction</h3>
            <p>Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects," which can contain data and code to manipulate that data. OOP principles include encapsulation, inheritance, and polymorphism, which help create modular, reusable, and maintainable code.</p>
      
            <h3>Classes and Objects</h3>
            <p>In C#, a class is a blueprint for creating objects. A class defines properties and methods that the objects created from the class can use. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Person
      {
          // Fields
          public string Name;
          public int Age;
      
          // Method
          public void Introduce()
          {
              Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");
          }
      }
      
      class Program
      {
          static void Main()
          {
              // Creating an object
              Person person = new Person();
              person.Name = "Alice";
              person.Age = 30;
              person.Introduce();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>class Person</strong>: Defines a class named <code>Person</code> with fields <code>Name</code> and <code>Age</code>, and a method <code>Introduce</code>.</li>
              <li><strong>Person person = new Person();</strong>: Creates an object of the <code>Person</code> class.</li>
              <li><strong>person.Name = "Alice";</strong>: Sets the <code>Name</code> field of the <code>person</code> object.</li>
              <li><strong>person.Introduce();</strong>: Calls the <code>Introduce</code> method on the <code>person</code> object.</li>
            </ul>
      
            <h3>Encapsulation</h3>
            <p>Encapsulation is the principle of hiding the internal state and behavior of an object and only exposing a public interface. This can be achieved using access modifiers like <code>private</code>, <code>public</code>, and <code>protected</code>. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Person
      {
          // Private fields
          private string name;
          private int age;
      
          // Public properties
          public string Name
          {
              get { return name; }
              set { name = value; }
          }
      
          public int Age
          {
              get { return age; }
              set { age = value; }
          }
      
          // Method
          public void Introduce()
          {
              Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");
          }
      }
      
      class Program
      {
          static void Main()
          {
              Person person = new Person();
              person.Name = "Bob";
              person.Age = 25;
              person.Introduce();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>private string name; private int age;</strong>: Declares private fields <code>name</code> and <code>age</code>.</li>
              <li><strong>public string Name { get; set; }</strong>: Defines a public property <code>Name</code> with getter and setter.</li>
              <li><strong>public int Age { get; set; }</strong>: Defines a public property <code>Age</code> with getter and setter.</li>
            </ul>
      
            <h3>Inheritance</h3>
            <p>Inheritance allows a class to inherit fields and methods from another class. The class that inherits is called the derived class, and the class being inherited from is called the base class. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Person
      {
          public string Name { get; set; }
          public int Age { get; set; }
      
          public void Introduce()
          {
              Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");
          }
      }
      
      class Student : Person
      {
          public string School { get; set; }
      
          public void Study()
          {
              Console.WriteLine($"{Name} is studying at {School}.");
          }
      }
      
      class Program
      {
          static void Main()
          {
              Student student = new Student();
              student.Name = "Charlie";
              student.Age = 20;
              student.School = "XYZ University";
              student.Introduce();
              student.Study();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>class Student : Person</strong>: Defines a class <code>Student</code> that inherits from the <code>Person</code> class.</li>
              <li><strong>public string School { get; set; }</strong>: Adds a property <code>School</code> to the <code>Student</code> class.</li>
              <li><strong>public void Study()</strong>: Adds a method <code>Study</code> to the <code>Student</code> class.</li>
            </ul>
      
            <h3>Polymorphism</h3>
            <p>Polymorphism allows methods to be used interchangeably by different objects. It can be achieved through method overriding and interfaces. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Person
      {
          public string Name { get; set; }
      
          public virtual void Introduce()
          {
              Console.WriteLine($"Hello, my name is {Name}.");
          }
      }
      
      class Student : Person
      {
          public string School { get; set; }
      
          public override void Introduce()
          {
              Console.WriteLine($"Hello, my name is {Name} and I study at {School}.");
          }
      }
      
      class Program
      {
          static void Main()
          {
              Person person = new Person { Name = "Dave" };
              person.Introduce();
      
              Person student = new Student { Name = "Eve", School = "XYZ University" };
              student.Introduce();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>public virtual void Introduce()</strong>: Defines a virtual method <code>Introduce</code> in the base class <code>Person</code>.</li>
              <li><strong>public override void Introduce()</strong>: Overrides the <code>Introduce</code> method in the derived class <code>Student</code>.</li>
              <li><strong>Person student = new Student()</strong>: Demonstrates polymorphism by using a <code>Person</code> reference to point to a <code>Student</code> object.</li>
            </ul>
      
            <h3>Assignment 1: Creating a Class</h3>
            <p>Write a C# program that defines a class named <code>Car</code> with properties <code>Make</code>, <code>Model</code>, and <code>Year</code>. Create a method named <code>DisplayInfo</code> that prints the car's details. Instantiate the class and call the method.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Car
      {
          public string Make { get; set; }
          public string Model { get; set; }
          public int Year { get; set; }
      
          public void DisplayInfo()
          {
              Console.WriteLine($"Make: {Make}, Model: {Model}, Year: {Year}");
          }
      }
      
      class Program
      {
          static void Main()
          {
              Car car = new Car
              {
                  Make = "Toyota",
                  Model = "Corolla",
                  Year = 2020
              };
              car.DisplayInfo();
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Inheritance and Polymorphism</h3>
            <p>Write a C# program that defines a base class named <code>Animal</code> with a property <code>Name</code> and a method <code>Speak</code>. Create a derived class named <code>Dog</code> that overrides the <code>Speak</code> method. Demonstrate polymorphism by calling the <code>Speak</code> method on instances of both classes.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Animal
      {
          public string Name { get; set; }
      
          public virtual void Speak()
          {
              Console.WriteLine("The animal makes a sound.");
          }
      }
      
      class Dog : Animal
      {
          public override void Speak()
          {
              Console.WriteLine("The dog barks.");
          }
      }
      
      class Program
      {
          static void Main()
          {
              Animal animal = new Animal { Name = "Generic Animal" };
              animal.Speak();
      
              Animal dog = new Dog { Name = "Buddy" };
              dog.Speak();
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Object-oriented programming in C# provides powerful features for organizing and managing code through classes, objects, encapsulation, inheritance, and polymorphism. By understanding these concepts, you can create more modular, reusable, and maintainable code. Practice using these principles to become proficient in OOP with C#.</p>
          </section>
        `
      },
      
      {
        id: 'classes',
        title: 'Classes',
        content: `
          <section id="classes">
            <h2>Classes in C#</h2>
      
            <h3>Introduction</h3>
            <p>Classes are the building blocks of object-oriented programming (OOP) in C#. A class is a blueprint for creating objects, providing initial values for state (member variables or fields), and implementations of behavior (member functions or methods).</p>
      
            <h3>Defining a Class</h3>
            <p>A class is defined using the <code>class</code> keyword followed by the class name. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Car
      {
          // Fields
          public string Make;
          public string Model;
          public int Year;
      
          // Method
          public void DisplayInfo()
          {
              Console.WriteLine($"Make: {Make}, Model: {Model}, Year: {Year}");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>public string Make;</strong>: Defines a public field <code>Make</code> of type string.</li>
              <li><strong>public string Model;</strong>: Defines a public field <code>Model</code> of type string.</li>
              <li><strong>public int Year;</strong>: Defines a public field <code>Year</code> of type int.</li>
              <li><strong>public void DisplayInfo()</strong>: Defines a method <code>DisplayInfo</code> that prints the car's details.</li>
            </ul>
      
            <h3>Creating an Object</h3>
            <p>An object is an instance of a class. You create an object using the <code>new</code> keyword followed by the class name. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              // Creating an object of the Car class
              Car myCar = new Car();
              myCar.Make = "Toyota";
              myCar.Model = "Corolla";
              myCar.Year = 2020;
      
              // Calling a method on the object
              myCar.DisplayInfo();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Car myCar = new Car();</strong>: Creates an object of the <code>Car</code> class.</li>
              <li><strong>myCar.Make = "Toyota";</strong>: Sets the <code>Make</code> field of the <code>myCar</code> object.</li>
              <li><strong>myCar.Model = "Corolla";</strong>: Sets the <code>Model</code> field of the <code>myCar</code> object.</li>
              <li><strong>myCar.Year = 2020;</strong>: Sets the <code>Year</code> field of the <code>myCar</code> object.</li>
              <li><strong>myCar.DisplayInfo();</strong>: Calls the <code>DisplayInfo</code> method on the <code>myCar</code> object.</li>
            </ul>
      
            <h3>Constructors</h3>
            <p>A constructor is a special method that is called when an object is instantiated. It is used to initialize the object's fields. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Car
      {
          // Fields
          public string Make;
          public string Model;
          public int Year;
      
          // Constructor
          public Car(string make, string model, int year)
          {
              Make = make;
              Model = model;
              Year = year;
          }
      
          // Method
          public void DisplayInfo()
          {
              Console.WriteLine($"Make: {Make}, Model: {Model}, Year: {Year}");
          }
      }
      
      class Program
      {
          static void Main()
          {
              // Creating an object using the constructor
              Car myCar = new Car("Toyota", "Corolla", 2020);
              myCar.DisplayInfo();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>public Car(string make, string model, int year)</strong>: Defines a constructor that initializes the fields <code>Make</code>, <code>Model</code>, and <code>Year</code>.</li>
              <li><strong>Car myCar = new Car("Toyota", "Corolla", 2020);</strong>: Creates an object of the <code>Car</code> class using the constructor.</li>
            </ul>
      
            <h3>Properties</h3>
            <p>Properties provide a flexible mechanism to read, write, or compute the values of private fields. They are defined using the <code>get</code> and <code>set</code> accessors. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Car
      {
          // Private fields
          private string make;
          private string model;
          private int year;
      
          // Properties
          public string Make
          {
              get { return make; }
              set { make = value; }
          }
      
          public string Model
          {
              get { return model; }
              set { model = value; }
          }
      
          public int Year
          {
              get { return year; }
              set { year = value; }
          }
      
          // Method
          public void DisplayInfo()
          {
              Console.WriteLine($"Make: {Make}, Model: {Model}, Year: {Year}");
          }
      }
      
      class Program
      {
          static void Main()
          {
              // Creating an object
              Car myCar = new Car();
              myCar.Make = "Toyota";
              myCar.Model = "Corolla";
              myCar.Year = 2020;
      
              // Calling a method on the object
              myCar.DisplayInfo();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>private string make;</strong>: Defines a private field <code>make</code>.</li>
              <li><strong>public string Make { get; set; }</strong>: Defines a property <code>Make</code> with <code>get</code> and <code>set</code> accessors.</li>
            </ul>
      
            <h3>Methods</h3>
            <p>Methods define the behavior of a class. They are functions defined inside a class. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Car
      {
          // Fields
          public string Make;
          public string Model;
          public int Year;
      
          // Method
          public void Start()
          {
              Console.WriteLine($"{Make} {Model} is starting.");
          }
      
          public void Drive()
          {
              Console.WriteLine($"{Make} {Model} is driving.");
          }
      }
      
      class Program
      {
          static void Main()
          {
              Car myCar = new Car();
              myCar.Make = "Toyota";
              myCar.Model = "Corolla";
              myCar.Year = 2020;
      
              myCar.Start();
              myCar.Drive();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>public void Start()</strong>: Defines a method <code>Start</code> that prints a message.</li>
              <li><strong>public void Drive()</strong>: Defines a method <code>Drive</code> that prints a message.</li>
            </ul>
      
            <h3>Assignment 1: Define and Use a Class</h3>
            <p>Write a C# program that defines a class named <code>Book</code> with properties <code>Title</code>, <code>Author</code>, and <code>ISBN</code>. Create a method named <code>DisplayInfo</code> that prints the book's details. Instantiate the class and call the method.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Book
      {
          // Properties
          public string Title { get; set; }
          public string Author { get; set; }
          public string ISBN { get; set; }
      
          // Method
          public void DisplayInfo()
          {
              Console.WriteLine($"Title: {Title}, Author: {Author}, ISBN: {ISBN}");
          }
      }
      
      class Program
      {
          static void Main()
          {
              Book book = new Book
              {
                  Title = "1984",
                  Author = "George Orwell",
                  ISBN = "978-0451524935"
              };
              book.DisplayInfo();
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Constructor and Methods</h3>
            <p>Write a C# program that defines a class named <code>Rectangle</code> with properties <code>Width</code> and <code>Height</code>. Create a constructor to initialize these properties and methods named <code>CalculateArea</code> and <code>CalculatePerimeter</code> to calculate and return the area and perimeter of the rectangle. Instantiate the class and call these methods, displaying the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Rectangle
      {
          // Properties
          public double Width { get; set; }
          public double Height { get; set; }
      
          // Constructor
          public Rectangle(double width, double height)
          {
              Width = width;
              Height = height;
          }
      
          // Methods
          public double CalculateArea()
          {
              return Width * Height;
          }
      
          public double CalculatePerimeter()
          {
              return 2 * (Width + Height);
          }
      }
      
      class Program
      {
          static void Main()
          {
              Rectangle rect = new Rectangle(5.0, 3.0);
              Console.WriteLine($"Area: {rect.CalculateArea()}");
              Console.WriteLine($"Perimeter: {rect.CalculatePerimeter()}");
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Classes are fundamental to understanding object-oriented programming in C#. They provide a blueprint for creating objects, encapsulating data, and defining behavior through methods. By mastering the use of classes, constructors, properties, and methods, you can create robust and reusable code. Practice defining and using classes to become proficient in C# programming.</p>
          </section>
        `
      },
      
      {
        id: 'exception',
        title: 'Exception Handling',
        content: `
          <section id="exception">
            <h2>Exception Handling in C#</h2>
      
            <h3>Introduction</h3>
            <p>Exception handling is a crucial part of robust software development. It allows a program to handle runtime errors gracefully, preventing crashes and providing meaningful error messages to users or logs for developers. C# provides structured exception handling using <code>try</code>, <code>catch</code>, <code>finally</code>, and <code>throw</code> keywords.</p>
      
            <h3>Basic Exception Handling</h3>
            <p>The <code>try</code> block contains the code that may cause an exception. The <code>catch</code> block contains the code that handles the exception. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              try
              {
                  int[] numbers = { 1, 2, 3 };
                  Console.WriteLine(numbers[5]); // This will throw an IndexOutOfRangeException
              }
              catch (IndexOutOfRangeException ex)
              {
                  Console.WriteLine("An error occurred: " + ex.Message);
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>try</strong>: Contains the code that may throw an exception.</li>
              <li><strong>catch (IndexOutOfRangeException ex)</strong>: Catches the <code>IndexOutOfRangeException</code> and handles it by printing an error message.</li>
            </ul>
      
            <h3>Multiple Catch Blocks</h3>
            <p>You can have multiple <code>catch</code> blocks to handle different types of exceptions. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              try
              {
                  int number = int.Parse("ABC"); // This will throw a FormatException
              }
              catch (FormatException ex)
              {
                  Console.WriteLine("Format error: " + ex.Message);
              }
              catch (Exception ex)
              {
                  Console.WriteLine("An unexpected error occurred: " + ex.Message);
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>catch (FormatException ex)</strong>: Catches and handles <code>FormatException</code>.</li>
              <li><strong>catch (Exception ex)</strong>: Catches and handles any other exceptions that are not caught by the previous <code>catch</code> blocks.</li>
            </ul>
      
            <h3>Finally Block</h3>
            <p>The <code>finally</code> block contains code that will run regardless of whether an exception is thrown or not. It is typically used for cleanup code. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using System.IO;
      
      class Program
      {
          static void Main()
          {
              StreamReader reader = null;
              try
              {
                  reader = new StreamReader("file.txt");
                  Console.WriteLine(reader.ReadToEnd());
              }
              catch (FileNotFoundException ex)
              {
                  Console.WriteLine("File not found: " + ex.Message);
              }
              finally
              {
                  if (reader != null)
                  {
                      reader.Close();
                      Console.WriteLine("File stream closed.");
                  }
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>finally</strong>: Ensures that the <code>StreamReader</code> is closed whether an exception occurs or not.</li>
            </ul>
      
            <h3>Throwing Exceptions</h3>
            <p>You can throw exceptions using the <code>throw</code> keyword. This is useful for custom error handling. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              try
              {
                  ValidateAge(-5);
              }
              catch (ArgumentException ex)
              {
                  Console.WriteLine("Error: " + ex.Message);
              }
          }
      
          static void ValidateAge(int age)
          {
              if (age < 0)
              {
                  throw new ArgumentException("Age cannot be negative.");
              }
              Console.WriteLine("Age is valid.");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>throw new ArgumentException("Age cannot be negative.");</strong>: Throws an <code>ArgumentException</code> if the age is negative.</li>
            </ul>
      
            <h3>Custom Exceptions</h3>
            <p>You can define custom exceptions by creating a new class that inherits from <code>Exception</code>. Example:</p>
            <pre><code class="language-csharp">
      using System;
      
      class InvalidAgeException : Exception
      {
          public InvalidAgeException(string message) : base(message) { }
      }
      
      class Program
      {
          static void Main()
          {
              try
              {
                  ValidateAge(-5);
              }
              catch (InvalidAgeException ex)
              {
                  Console.WriteLine("Error: " + ex.Message);
              }
          }
      
          static void ValidateAge(int age)
          {
              if (age < 0)
              {
                  throw new InvalidAgeException("Age cannot be negative.");
              }
              Console.WriteLine("Age is valid.");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>class InvalidAgeException : Exception</strong>: Defines a custom exception class.</li>
              <li><strong>throw new InvalidAgeException("Age cannot be negative.");</strong>: Throws the custom exception.</li>
            </ul>
      
            <h3>Assignment 1: Basic Exception Handling</h3>
            <p>Write a C# program that prompts the user to enter a number. If the user enters a non-numeric value, catch the <code>FormatException</code> and display an error message.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Enter a number:");
              try
              {
                  int number = int.Parse(Console.ReadLine());
                  Console.WriteLine("You entered: " + number);
              }
              catch (FormatException ex)
              {
                  Console.WriteLine("Invalid input. Please enter a valid number.");
              }
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Custom Exception</h3>
            <p>Write a C# program that defines a custom exception named <code>InvalidTemperatureException</code>. Create a method that validates a temperature value. If the temperature is below -273.15 (absolute zero), throw the custom exception. Catch and handle the exception in the <code>Main</code> method.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      
      class InvalidTemperatureException : Exception
      {
          public InvalidTemperatureException(string message) : base(message) { }
      }
      
      class Program
      {
          static void Main()
          {
              try
              {
                  ValidateTemperature(-300);
              }
              catch (InvalidTemperatureException ex)
              {
                  Console.WriteLine("Error: " + ex.Message);
              }
          }
      
          static void ValidateTemperature(double temperature)
          {
              if (temperature < -273.15)
              {
                  throw new InvalidTemperatureException("Temperature cannot be below absolute zero.");
              }
              Console.WriteLine("Temperature is valid.");
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Exception handling is essential for creating robust and user-friendly applications. By using <code>try</code>, <code>catch</code>, <code>finally</code>, and <code>throw</code>, you can manage runtime errors gracefully. Custom exceptions allow for more specific error handling tailored to your application's needs. Practice these concepts to become proficient in exception handling in C#.</p>
          </section>
        `
      },
      
      {
        id: 'file',
        title: 'File Handling',
        content: `
          <section id="file">
            <h2>File Handling in C#</h2>
      
            <h3>Introduction</h3>
            <p>File handling in C# is essential for reading from and writing to files. The .NET Framework provides various classes in the <code>System.IO</code> namespace to work with files. This includes classes like <code>File</code>, <code>StreamReader</code>, <code>StreamWriter</code>, <code>FileStream</code>, and more.</p>
      
            <h3>Reading from a File</h3>
            <p>To read text from a file, you can use the <code>StreamReader</code> class. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using System.IO;
      
      class Program
      {
          static void Main()
          {
              try
              {
                  using (StreamReader reader = new StreamReader("example.txt"))
                  {
                      string line;
                      while ((line = reader.ReadLine()) != null)
                      {
                          Console.WriteLine(line);
                      }
                  }
              }
              catch (FileNotFoundException ex)
              {
                  Console.WriteLine("File not found: " + ex.Message);
              }
              catch (Exception ex)
              {
                  Console.WriteLine("An error occurred: " + ex.Message);
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>using (StreamReader reader = new StreamReader("example.txt"))</strong>: Opens the file <code>example.txt</code> for reading.</li>
              <li><strong>while ((line = reader.ReadLine()) != null)</strong>: Reads each line from the file until the end.</li>
              <li><strong>Console.WriteLine(line);</strong>: Prints each line to the console.</li>
            </ul>
      
            <h3>Writing to a File</h3>
            <p>To write text to a file, you can use the <code>StreamWriter</code> class. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using System.IO;
      
      class Program
      {
          static void Main()
          {
              try
              {
                  using (StreamWriter writer = new StreamWriter("example.txt"))
                  {
                      writer.WriteLine("Hello, World!");
                      writer.WriteLine("This is a test.");
                  }
                  Console.WriteLine("Data written to file successfully.");
              }
              catch (Exception ex)
              {
                  Console.WriteLine("An error occurred: " + ex.Message);
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>using (StreamWriter writer = new StreamWriter("example.txt"))</strong>: Opens the file <code>example.txt</code> for writing. If the file does not exist, it is created.</li>
              <li><strong>writer.WriteLine("Hello, World!");</strong>: Writes a line of text to the file.</li>
            </ul>
      
            <h3>Appending to a File</h3>
            <p>To append text to an existing file, you can use the <code>StreamWriter</code> class with the append parameter set to <code>true</code>. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using System.IO;
      
      class Program
      {
          static void Main()
          {
              try
              {
                  using (StreamWriter writer = new StreamWriter("example.txt", true))
                  {
                      writer.WriteLine("This is an appended line.");
                  }
                  Console.WriteLine("Data appended to file successfully.");
              }
              catch (Exception ex)
              {
                  Console.WriteLine("An error occurred: " + ex.Message);
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>using (StreamWriter writer = new StreamWriter("example.txt", true))</strong>: Opens the file <code>example.txt</code> for appending. If the file does not exist, it is created.</li>
              <li><strong>writer.WriteLine("This is an appended line.");</strong>: Writes a line of text to the end of the file.</li>
            </ul>
      
            <h3>File Information</h3>
            <p>The <code>FileInfo</code> class provides methods and properties for working with files and retrieving file information. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using System.IO;
      
      class Program
      {
          static void Main()
          {
              try
              {
                  FileInfo fileInfo = new FileInfo("example.txt");
                  if (fileInfo.Exists)
                  {
                      Console.WriteLine("File Name: " + fileInfo.Name);
                      Console.WriteLine("File Size: " + fileInfo.Length + " bytes");
                      Console.WriteLine("Creation Time: " + fileInfo.CreationTime);
                      Console.WriteLine("Last Access Time: " + fileInfo.LastAccessTime);
                  }
                  else
                  {
                      Console.WriteLine("File not found.");
                  }
              }
              catch (Exception ex)
              {
                  Console.WriteLine("An error occurred: " + ex.Message);
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>FileInfo fileInfo = new FileInfo("example.txt");</strong>: Creates a <code>FileInfo</code> object for the specified file.</li>
              <li><strong>fileInfo.Exists</strong>: Checks if the file exists.</li>
              <li><strong>fileInfo.Name</strong>: Gets the name of the file.</li>
              <li><strong>fileInfo.Length</strong>: Gets the size of the file in bytes.</li>
              <li><strong>fileInfo.CreationTime</strong>: Gets the creation time of the file.</li>
              <li><strong>fileInfo.LastAccessTime</strong>: Gets the last access time of the file.</li>
            </ul>
      
            <h3>Assignment 1: Reading from a File</h3>
            <p>Write a C# program that reads from a file named <code>input.txt</code> and prints its content to the console. Handle any potential exceptions that may occur.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      using System.IO;
      
      class Program
      {
          static void Main()
          {
              try
              {
                  using (StreamReader reader = new StreamReader("input.txt"))
                  {
                      string line;
                      while ((line = reader.ReadLine()) != null)
                      {
                          Console.WriteLine(line);
                      }
                  }
              }
              catch (FileNotFoundException ex)
              {
                  Console.WriteLine("File not found: " + ex.Message);
              }
              catch (Exception ex)
              {
                  Console.WriteLine("An error occurred: " + ex.Message);
              }
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Writing to a File</h3>
            <p>Write a C# program that prompts the user to enter text and writes the input to a file named <code>output.txt</code>. Handle any potential exceptions that may occur.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      using System.IO;
      
      class Program
      {
          static void Main()
          {
              try
              {
                  Console.WriteLine("Enter text to write to the file:");
                  string input = Console.ReadLine();
      
                  using (StreamWriter writer = new StreamWriter("output.txt"))
                  {
                      writer.WriteLine(input);
                  }
                  Console.WriteLine("Data written to file successfully.");
              }
              catch (Exception ex)
              {
                  Console.WriteLine("An error occurred: " + ex.Message);
              }
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>File handling is an essential skill in C# programming. By using classes like <code>StreamReader</code>, <code>StreamWriter</code>, and <code>FileInfo</code>, you can effectively read from, write to, and gather information about files. Practice these concepts to become proficient in file handling in C#.</p>
          </section>
        `
      },
    
      {
        id: 'linq',
        title: 'LINQ (Language Integrated Query)',
        content: `
          <section id="linq">
            <h2>LINQ (Language Integrated Query) in C#</h2>
      
            <h3>Introduction</h3>
            <p>LINQ (Language Integrated Query) is a powerful feature in C# that provides a consistent query syntax to retrieve and manipulate data from different data </p>
            <p> sources,such as collections, databases, XML, and more. LINQ allows you to write queries directly within your C# code using a familiar and intuitive syntax.</p>
      
            <h3>Basic LINQ Query</h3>
            <p>A basic LINQ query consists of three parts: data source, query definition, and query execution. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using System.Linq;
      using System.Collections.Generic;
      
      class Program
      {
          static void Main()
          {
              // Data source
              List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
      
              // Query definition
              var evenNumbers = from num in numbers
                                where num % 2 == 0
                                select num;
      
              // Query execution
              foreach (var num in evenNumbers)
              {
                  Console.WriteLine(num); // Output: 2 4
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>from num in numbers</strong>: Specifies the data source.</li>
              <li><strong>where num % 2 == 0</strong>: Defines the query condition.</li>
              <li><strong>select num</strong>: Specifies the data to retrieve.</li>
              <li><strong>foreach (var num in evenNumbers)</strong>: Executes the query and prints the result.</li>
            </ul>
      
            <h3>LINQ Query Syntax and Method Syntax</h3>
            <p>LINQ provides two syntaxes for writing queries: query syntax and method syntax. Both syntaxes produce the same results but differ in style.</p>
            
            <h4>Query Syntax</h4>
            <pre><code class="language-csharp">
      using System;
      using System.Linq;
      using System.Collections.Generic;
      
      class Program
      {
          static void Main()
          {
              List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
      
              var evenNumbers = from num in numbers
                                where num % 2 == 0
                                select num;
      
              foreach (var num in evenNumbers)
              {
                  Console.WriteLine(num); // Output: 2 4
              }
          }
      }
            </code></pre>
      
            <h4>Method Syntax</h4>
            <pre><code class="language-csharp">
      using System;
      using System.Linq;
      using System.Collections.Generic;
      
      class Program
      {
          static void Main()
          {
              List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
      
              var evenNumbers = numbers.Where(num => num % 2 == 0);
      
              foreach (var num in evenNumbers)
              {
                  Console.WriteLine(num); // Output: 2 4
              }
          }
      }
            </code></pre>
      
            <h3>LINQ with Collections</h3>
            <p>LINQ can be used with various types of collections, such as arrays, lists, dictionaries, and more. Example with a list of strings:</p>
            <pre><code class="language-csharp">
      using System;
      using System.Linq;
      using System.Collections.Generic;
      
      class Program
      {
          static void Main()
          {
              List<string> names = new List<string> { "Alice", "Bob", "Charlie", "David" };
      
              var filteredNames = from name in names
                                  where name.Contains("a") || name.Contains("A")
                                  select name;
      
              foreach (var name in filteredNames)
              {
                  Console.WriteLine(name); // Output: Alice Charlie David
              }
          }
      }
            </code></pre>
      
            <h3>LINQ with Complex Types</h3>
            <p>LINQ can be used to query collections of complex types, such as objects. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using System.Linq;
      using System.Collections.Generic;
      
      class Person
      {
          public string Name { get; set; }
          public int Age { get; set; }
      }
      
      class Program
      {
          static void Main()
          {
              List<Person> people = new List<Person>
              {
                  new Person { Name = "Alice", Age = 25 },
                  new Person { Name = "Bob", Age = 30 },
                  new Person { Name = "Charlie", Age = 35 }
              };
      
              var adults = from person in people
                           where person.Age >= 30
                           select person;
      
              foreach (var person in adults)
              {
                  Console.WriteLine(person.Name); // Output: Bob Charlie
              }
          }
      }
            </code></pre>
      
            <h3>LINQ Methods</h3>
            <p>LINQ provides many methods for querying and manipulating data, such as <code>Where</code>, <code>Select</code>, <code>OrderBy</code>, <code>GroupBy</code>, and more. Example using <code>OrderBy</code> and <code>GroupBy</code>:</p>
            <pre><code class="language-csharp">
      using System;
      using System.Linq;
      using System.Collections.Generic;
      
      class Program
      {
          static void Main()
          {
              List<string> names = new List<string> { "Alice", "Bob", "Charlie", "David" };
      
              var orderedNames = names.OrderBy(name => name);
              var groupedNames = names.GroupBy(name => name[0]);
      
              Console.WriteLine("Ordered Names:");
              foreach (var name in orderedNames)
              {
                  Console.WriteLine(name); // Output: Alice Bob Charlie David
              }
      
              Console.WriteLine("Grouped Names:");
              foreach (var group in groupedNames)
              {
                  Console.WriteLine("Group: " + group.Key);
                  foreach (var name in group)
                  {
                      Console.WriteLine(name); // Output: Group: A Alice, Group: B Bob, 
                      Group: C Charlie, Group: D David
                  }
              }
          }
      }
            </code></pre>
      
            <h3>Assignment 1: Filtering and Ordering</h3>
            <p>Write a C# program that uses LINQ to filter a list of integers to only include numbers greater than 10 and then order the results in descending order.</p>
            <p> Display the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      using System.Linq;
      using System.Collections.Generic;
      
      class Program
      {
          static void Main()
          {
              List<int> numbers = new List<int> { 5, 15, 25, 10, 20 };
      
              var filteredNumbers = numbers.Where(num => num > 10).OrderByDescending(num => num);
      
              foreach (var num in filteredNumbers)
              {
                  Console.WriteLine(num); // Output: 25 20 15
              }
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Querying Complex Types</h3>
            <p>Write a C# program that defines a class named <code>Student</code> with properties <code>Name</code> and <code>Grade</code>. Create a list of students and use LINQ to select students with</p>
            <p> a grade greater than 75. Display the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      using System.Linq;
      using System.Collections.Generic;
      
      class Student
      {
          public string Name { get; set; }
          public int Grade { get; set; }
      }
      
      class Program
      {
          static void Main()
          {
              List<Student> students = new List<Student>
              {
                  new Student { Name = "Alice", Grade = 85 },
                  new Student { Name = "Bob", Grade = 70 },
                  new Student { Name = "Charlie", Grade = 90 }
              };
      
              var highGrades = from student in students
                               where student.Grade > 75
                               select student;
      
              foreach (var student in highGrades)
              {
                  Console.WriteLine(student.Name + ": " + student.Grade); // Output: Alice: 85 Charlie: 90
              }
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>LINQ is a powerful tool in C# for querying and manipulating data from various sources. It provides a unified syntax and many useful methods for filtering,</p>
            <p> ordering, grouping, and transforming data. By mastering LINQ, you can write more efficient and readable code for data manipulation tasks.</p>
            <p> Practice using LINQ to become proficient in querying data in C#.</p>
          </section>
        `
      },
      
      {
        id: 'asynchronous',
        title: 'Asynchronous Programming',
        content: `
          <section id="asynchronous">
            <h2>Asynchronous Programming in C#</h2>
      
            <h3>Introduction</h3>
            <p>Asynchronous programming allows you to perform tasks without blocking the main thread, improving the responsiveness of your application. In C#, asynchronous programming is achieved using the <code>async</code> and <code>await</code> keywords. These keywords make it easier to work with asynchronous code, making it more readable and maintainable.</p>
      
            <h3>Understanding async and await</h3>
            <p>The <code>async</code> keyword is used to declare a method as asynchronous. The <code>await</code> keyword is used to pause the execution of the method until the awaited task completes. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using System.Threading.Tasks;
      
      class Program
      {
          static async Task Main()
          {
              await DisplayMessageAsync();
          }
      
          static async Task DisplayMessageAsync()
          {
              Console.WriteLine("Before delay");
              await Task.Delay(2000); // Simulates a 2-second delay
              Console.WriteLine("After delay");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>async Task Main()</strong>: Declares the <code>Main</code> method as asynchronous.</li>
              <li><strong>await DisplayMessageAsync();</strong>: Waits for the <code>DisplayMessageAsync</code> method to complete.</li>
              <li><strong>async Task DisplayMessageAsync()</strong>: Declares the <code>DisplayMessageAsync</code> method as asynchronous.</li>
              <li><strong>await Task.Delay(2000);</strong>: Pauses the method for 2 seconds without blocking the main thread.</li>
            </ul>
      
            <h3>Asynchronous Methods</h3>
            <p>Asynchronous methods return a <code>Task</code> or <code>Task&lt;T&gt;</code>. The <code>Task</code> class represents an asynchronous operation. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using System.Threading.Tasks;
      
      class Program
      {
          static async Task Main()
          {
              int result = await CalculateSumAsync(5, 10);
              Console.WriteLine("Sum: " + result);
          }
      
          static async Task<int> CalculateSumAsync(int a, int b)
          {
              await Task.Delay(1000); // Simulates a delay
              return a + b;
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>async Task&lt;int&gt; CalculateSumAsync(int a, int b)</strong>: Declares an asynchronous method that returns a <code>Task&lt;int&gt;</code>.</li>
              <li><strong>await Task.Delay(1000);</strong>: Pauses the method for 1 second without blocking the main thread.</li>
              <li><strong>return a + b;</strong>: Returns the sum of <code>a</code> and <code>b</code>.</li>
              <li><strong>int result = await CalculateSumAsync(5, 10);</strong>: Waits for the <code>CalculateSumAsync</code> method to complete and retrieves the result.</li>
            </ul>
      
            <h3>Handling Exceptions in Asynchronous Methods</h3>
            <p>Exceptions in asynchronous methods can be caught using a <code>try</code>-<code>catch</code> block. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using System.Threading.Tasks;
      
      class Program
      {
          static async Task Main()
          {
              try
              {
                  await ThrowExceptionAsync();
              }
              catch (Exception ex)
              {
                  Console.WriteLine("Caught exception: " + ex.Message);
              }
          }
      
          static async Task ThrowExceptionAsync()
          {
              await Task.Delay(1000);
              throw new InvalidOperationException("An error occurred.");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>try { await ThrowExceptionAsync(); }</strong>: Attempts to await the <code>ThrowExceptionAsync</code> method.</li>
              <li><strong>catch (Exception ex)</strong>: Catches any exceptions thrown by the asynchronous method.</li>
              <li><strong>throw new InvalidOperationException("An error occurred.");</strong>: Throws an exception in the asynchronous method.</li>
            </ul>
      
            <h3>Combining Asynchronous Operations</h3>
            <p>You can combine multiple asynchronous operations using <code>Task.WhenAll</code> or <code>Task.WhenAny</code>. Example using <code>Task.WhenAll</code>:</p>
            <pre><code class="language-csharp">
      using System;
      using System.Threading.Tasks;
      
      class Program
      {
          static async Task Main()
          {
              await PerformMultipleTasksAsync();
          }
      
          static async Task PerformMultipleTasksAsync()
          {
              Task task1 = Task.Delay(1000);
              Task task2 = Task.Delay(2000);
      
              await Task.WhenAll(task1, task2);
      
              Console.WriteLine("Both tasks completed.");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Task task1 = Task.Delay(1000);</strong>: Starts the first asynchronous task.</li>
              <li><strong>Task task2 = Task.Delay(2000);</strong>: Starts the second asynchronous task.</li>
              <li><strong>await Task.WhenAll(task1, task2);</strong>: Waits for both tasks to complete.</li>
            </ul>
      
            <h3>Assignment 1: Basic Asynchronous Method</h3>
            <p>Write a C# program that defines an asynchronous method named <code>FetchDataAsync</code>. This method should simulate fetching data by waiting for 3 seconds and then returning a string "Data fetched". Call this method from the <code>Main</code> method and display the result.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      using System.Threading.Tasks;
      
      class Program
      {
          static async Task Main()
          {
              string result = await FetchDataAsync();
              Console.WriteLine(result);
          }
      
          static async Task<string> FetchDataAsync()
          {
              await Task.Delay(3000); // Simulates a delay
              return "Data fetched";
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Combining Asynchronous Operations</h3>
            <p>Write a C# program that defines two asynchronous methods named <code>TaskOneAsync</code> and <code>TaskTwoAsync</code>. Each method should simulate a delay of 2 seconds and 4 seconds, respectively. Use <code>Task.WhenAll</code> to wait for both tasks to complete and display a message "All tasks completed" once both tasks are done.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      using System.Threading.Tasks;
      
      class Program
      {
          static async Task Main()
          {
              await PerformMultipleTasksAsync();
          }
      
          static async Task PerformMultipleTasksAsync()
          {
              Task task1 = TaskOneAsync();
              Task task2 = TaskTwoAsync();
      
              await Task.WhenAll(task1, task2);
      
              Console.WriteLine("All tasks completed.");
          }
      
          static async Task TaskOneAsync()
          {
              await Task.Delay(2000); // Simulates a 2-second delay
          }
      
          static async Task TaskTwoAsync()
          {
              await Task.Delay(4000); // Simulates a 4-second delay
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Asynchronous programming is a powerful technique in C# for improving the responsiveness of your applications. By using <code>async</code> and <code>await</code> keywords, you can write asynchronous code that is easy to read and maintain. Practice using asynchronous methods to become proficient in handling asynchronous operations in C#.</p>
          </section>
        `
      },
      
      {
        id: 'net',
        title: '.NET Framework',
        content: `
          <section id="net">
            <h2>.NET Framework</h2>
      
            <h3>Introduction</h3>
            <p>The .NET Framework is a software development platform developed by Microsoft. It provides a comprehensive and consistent programming model for building applications that have visually stunning user experiences and seamless and secure communication. The .NET Framework is composed of the Common Language Runtime (CLR) and the .NET Framework Class Library (FCL).</p>
      
            <h3>Common Language Runtime (CLR)</h3>
            <p>The CLR is the execution engine for .NET applications. It provides services such as memory management, thread management, security, and exception handling. The CLR also includes the Just-In-Time (JIT) compiler, which compiles Intermediate Language (IL) code to native machine code at runtime.</p>
            <pre><code class="language-csharp">
      // Example of a simple .NET program
      using System;
      
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Hello, .NET Framework!");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>using System;</strong>: Imports the System namespace, which contains fundamental classes for basic operations.</li>
              <li><strong>class Program</strong>: Defines a class named Program.</li>
              <li><strong>static void Main()</strong>: The entry point of the program.</li>
              <li><strong>Console.WriteLine("Hello, .NET Framework!");</strong>: Prints a message to the console.</li>
            </ul>
      
            <h3>.NET Framework Class Library (FCL)</h3>
            <p>The FCL provides a comprehensive collection of reusable classes, interfaces, and value types. It includes classes for handling I/O, accessing data, performing arithmetic operations, manipulating strings, and more.</p>
            <pre><code class="language-csharp">
      // Example of using the .NET Framework Class Library
      using System;
      using System.IO;
      
      class Program
      {
          static void Main()
          {
              string path = "example.txt";
              File.WriteAllText(path, "Hello, .NET Framework!");
              string content = File.ReadAllText(path);
              Console.WriteLine(content);
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>using System.IO;</strong>: Imports the System.IO namespace, which contains classes for working with files and data streams.</li>
              <li><strong>File.WriteAllText(path, "Hello, .NET Framework!");</strong>: Writes the specified text to a file.</li>
              <li><strong>File.ReadAllText(path);</strong>: Reads the text from the specified file.</li>
              <li><strong>Console.WriteLine(content);</strong>: Prints the content of the file to the console.</li>
            </ul>
      
            <h3>Assemblies</h3>
            <p>Assemblies are the building blocks of .NET applications. They contain compiled code and resources and are used for deployment, versioning, and security. Assemblies can be either executable (.exe) or library (.dll).</p>
            <pre><code class="language-csharp">
      // Example of creating and using a class library
      // Library.cs
      using System;
      
      public class Library
      {
          public string GetMessage()
          {
              return "Hello from the library!";
          }
      }
      
      // Program.cs
      using System;
      
      class Program
      {
          static void Main()
          {
              Library library = new Library();
              Console.WriteLine(library.GetMessage());
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>public class Library</strong>: Defines a public class named Library.</li>
              <li><strong>public string GetMessage()</strong>: Defines a public method that returns a message.</li>
              <li><strong>Library library = new Library();</strong>: Creates an instance of the Library class.</li>
              <li><strong>Console.WriteLine(library.GetMessage());</strong>: Calls the GetMessage method and prints the returned message.</li>
            </ul>
      
            <h3>Namespaces</h3>
            <p>Namespaces are used to organize classes and other types in the .NET Framework. They provide a way to group related types and avoid naming conflicts. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using MyNamespace;
      
      namespace MyNamespace
      {
          public class MyClass
          {
              public void MyMethod()
              {
                  Console.WriteLine("Hello from MyNamespace!");
              }
          }
      }
      
      class Program
      {
          static void Main()
          {
              MyClass myClass = new MyClass();
              myClass.MyMethod();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>namespace MyNamespace</strong>: Defines a namespace named MyNamespace.</li>
              <li><strong>public class MyClass</strong>: Defines a public class named MyClass within the MyNamespace namespace.</li>
              <li><strong>myClass.MyMethod();</strong>: Calls the MyMethod method from the MyClass instance.</li>
            </ul>
      
            <h3>Assignment 1: Basic .NET Application</h3>
            <p>Write a C# program that creates a file named <code>data.txt</code> and writes "Hello, World!" to it. Then read the content of the file and display it on the console. Handle any potential exceptions that may occur.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      using System.IO;
      
      class Program
      {
          static void Main()
          {
              try
              {
                  string path = "data.txt";
                  File.WriteAllText(path, "Hello, World!");
                  string content = File.ReadAllText(path);
                  Console.WriteLine(content);
              }
              catch (Exception ex)
              {
                  Console.WriteLine("An error occurred: " + ex.Message);
              }
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Class Library and Namespace</h3>
            <p>Write a C# program that defines a class library with a class named <code>Greeting</code> in a namespace named <code>Utilities</code>. The class should have a method named <code>GetGreeting</code> that returns a greeting message. Use this class in your main program to display the greeting message.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // Greeting.cs
      using System;
      
      namespace Utilities
      {
          public class Greeting
          {
              public string GetGreeting()
              {
                  return "Hello from the Utilities namespace!";
              }
          }
      }
      
      // Program.cs
      using System;
      using Utilities;
      
      class Program
      {
          static void Main()
          {
              Greeting greeting = new Greeting();
              Console.WriteLine(greeting.GetGreeting());
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>The .NET Framework provides a rich and versatile platform for developing a wide range of applications. Understanding the basics of the CLR, FCL, assemblies, and namespaces will help you build robust and maintainable applications. Practice using these concepts to become proficient in .NET development.</p>
          </section>
        `
      },
      
      {
        id: 'asp',
        title: 'ASP.NET',
        content: `
          <section id="asp">
            <h2>ASP.NET</h2>
      
            <h3>Introduction</h3>
            <p>ASP.NET is a web application framework developed by Microsoft that allows developers to build dynamic web applications, websites, and services. It is part of the .NET Framework and provides a robust, scalable, and high-performance platform for web development. ASP.NET supports multiple programming models, including ASP.NET Web Forms, ASP.NET MVC, and ASP.NET Web API.</p>
      
            <h3>Getting Started with ASP.NET Core</h3>
            <p>ASP.NET Core is the modern, open-source, and cross-platform version of ASP.NET. It allows you to build web applications that can run on Windows, macOS, and Linux. To get started with ASP.NET Core, you need to install the .NET SDK.</p>
            <p>Here is a simple example of an ASP.NET Core application:</p>
            <pre><code class="language-csharp">
      // Program.cs
      using Microsoft.AspNetCore.Hosting;
      using Microsoft.Extensions.Hosting;
      
      public class Program
      {
          public static void Main(string[] args)
          {
              CreateHostBuilder(args).Build().Run();
          }
      
          public static IHostBuilder CreateHostBuilder(string[] args) =>
              Host.CreateDefaultBuilder(args)
                  .ConfigureWebHostDefaults(webBuilder =>
                  {
                      webBuilder.UseStartup<Startup>();
                  });
      }
      
      // Startup.cs
      using Microsoft.AspNetCore.Builder;
      using Microsoft.AspNetCore.Hosting;
      using Microsoft.Extensions.DependencyInjection;
      using Microsoft.Extensions.Hosting;
      
      public class Startup
      {
          public void ConfigureServices(IServiceCollection services)
          {
              services.AddControllersWithViews();
          }
      
          public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
          {
              if (env.IsDevelopment())
              {
                  app.UseDeveloperExceptionPage();
              }
              else
              {
                  app.UseExceptionHandler("/Home/Error");
                  app.UseHsts();
              }
      
              app.UseHttpsRedirection();
              app.UseStaticFiles();
      
              app.UseRouting();
      
              app.UseAuthorization();
      
              app.UseEndpoints(endpoints =>
              {
                  endpoints.MapControllerRoute(
                      name: "default",
                      pattern: "{controller=Home}/{action=Index}/{id?}");
              });
          }
      }
      
      // HomeController.cs
      using Microsoft.AspNetCore.Mvc;
      
      public class HomeController : Controller
      {
          public IActionResult Index()
          {
              return View();
          }
      }
      
      // Views/Home/Index.cshtml
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Home Page</title>
      </head>
      <body>
          <h1>Welcome to ASP.NET Core!</h1>
      </body>
      </html>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Program.cs</strong>: Entry point of the application that sets up the web host.</li>
              <li><strong>Startup.cs</strong>: Configures services and the request pipeline.</li>
              <li><strong>HomeController.cs</strong>: Handles incoming requests and returns views.</li>
              <li><strong>Index.cshtml</strong>: Razor view file that renders HTML for the home page.</li>
            </ul>
      
            <h3>ASP.NET MVC</h3>
            <p>ASP.NET MVC is a framework for building web applications using the Model-View-Controller pattern. It promotes a clean separation of concerns and testability. Here is a simple example of an ASP.NET MVC application:</p>
            <pre><code class="language-csharp">
      // Models/Product.cs
      public class Product
      {
          public int Id { get; set; }
          public string Name { get; set; }
          public decimal Price { get; set; }
      }
      
      // Controllers/ProductController.cs
      using Microsoft.AspNetCore.Mvc;
      using System.Collections.Generic;
      
      public class ProductController : Controller
      {
          public IActionResult Index()
          {
              var products = new List<Product>
              {
                  new Product { Id = 1, Name = "Product 1", Price = 10.0m },
                  new Product { Id = 2, Name = "Product 2", Price = 20.0m }
              };
              return View(products);
          }
      }
      
      // Views/Product/Index.cshtml
      @model IEnumerable<Product>
      
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Products</title>
      </head>
      <body>
          <h1>Products</h1>
          <ul>
              @foreach (var product in Model)
              {
                  <li>@product.Name - @product.Price</li>
              }
          </ul>
      </body>
      </html>
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Product.cs</strong>: Defines a model class representing a product.</li>
              <li><strong>ProductController.cs</strong>: Defines a controller that handles requests related to products.</li>
              <li><strong>Index.cshtml</strong>: Razor view file that displays a list of products.</li>
            </ul>
      
            <h3>ASP.NET Web API</h3>
            <p>ASP.NET Web API is a framework for building HTTP services that can be consumed by various clients, including browsers, mobile devices, and other applications. Here is a simple example of an ASP.NET Web API application:</p>
            <pre><code class="language-csharp">
      // Models/Product.cs
      public class Product
      {
          public int Id { get; set; }
          public string Name { get; set; }
          public decimal Price { get; set; }
      }
      
      // Controllers/ProductController.cs
      using Microsoft.AspNetCore.Mvc;
      using System.Collections.Generic;
      
      [ApiController]
      [Route("api/[controller]")]
      public class ProductController : ControllerBase
      {
          [HttpGet]
          public ActionResult<IEnumerable<Product>> Get()
          {
              var products = new List<Product>
              {
                  new Product { Id = 1, Name = "Product 1", Price = 10.0m },
                  new Product { Id = 2, Name = "Product 2", Price = 20.0m }
              };
              return products;
          }
      
          [HttpGet("{id}")]
          public ActionResult<Product> Get(int id)
          {
              var product = new Product { Id = id, Name = "Product " + id, Price = 10.0m * id };
              return product;
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Product.cs</strong>: Defines a model class representing a product.</li>
              <li><strong>ProductController.cs</strong>: Defines a Web API controller that handles HTTP requests related to products.</li>
              <li><strong>[ApiController]</strong>: Indicates that the controller responds to web API requests.</li>
              <li><strong>[Route("api/[controller]")]</strong>: Specifies the route template for the controller.</li>
              <li><strong>[HttpGet]</strong>: Indicates that the method responds to HTTP GET requests.</li>
            </ul>
      
            <h3>Assignment 1: ASP.NET Core MVC Application</h3>
            <p>Write an ASP.NET Core MVC application that manages a list of books. The application should have a <code>Book</code> model with properties <code>Id</code>, <code>Title</code>, and <code>Author</code>. Create a <code>BookController</code> that returns a view displaying the list of books.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // Models/Book.cs
      public class Book
      {
          public int Id { get; set; }
          public string Title { get; set; }
          public string Author { get; set; }
      }
      
      // Controllers/BookController.cs
      using Microsoft.AspNetCore.Mvc;
      using System.Collections.Generic;
      
      public class BookController : Controller
      {
          public IActionResult Index()
          {
              var books = new List<Book>
              {
                  new Book { Id = 1, Title = "Book 1", Author = "Author 1" },
                  new Book { Id = 2, Title = "Book 2", Author = "Author 2" }
              };
              return View(books);
          }
      }
      
      // Views/Book/Index.cshtml
      @model IEnumerable<Book>
      
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Books</title>
      </head>
      <body>
          <h1>Books</h1>
          <ul>
              @foreach (var book in Model)
              {
                  <li>@book.Title by @book.Author</li>
              }
          </ul>
      </body>
      </html>
            </code></pre>
      
            <h3>Assignment 2: ASP.NET Web API</h3>
            <p>Write an ASP.NET Web API application that manages a list of movies. The application should have a <code>Movie</code> model with properties <code>Id</code>, <code>Title</code>, and <code>Director</code>. Create a <code>MovieController</code> that handles HTTP GET requests to retrieve the list of movies and a specific movie by ID.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // Models/Movie.cs
      public class Movie
      {
          public int Id { get; set; }
          public string Title { get; set; }
          public string Director { get; set; }
      }
      
      // Controllers/MovieController.cs
      using Microsoft.AspNetCore.Mvc;
      using System.Collections.Generic;
      
      [ApiController]
      [Route("api/[controller]")]
      public class MovieController : ControllerBase
      {
          [HttpGet]
          public ActionResult<IEnumerable<Movie>> Get()
          {
              var movies = new List<Movie>
              {
                  new Movie { Id = 1, Title = "Movie 1", Director = "Director 1" },
                  new Movie { Id = 2, Title = "Movie 2", Director = "Director 2" }
              };
              return movies;
          }
      
          [HttpGet("{id}")]
          public ActionResult<Movie> Get(int id)
          {
              var movie = new Movie { Id = id, Title = "Movie " + id, Director = "Director " + id };
              return movie;
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>ASP.NET is a powerful framework for building dynamic web applications and services. By understanding the basics of ASP.NET Core, ASP.NET MVC, and ASP.NET Web API, you can create robust and scalable web applications. Practice using these concepts to become proficient in ASP.NET development.</p>
          </section>
        `
      },
      
      {
        id: 'entity',
        title: 'Entity Framework',
        content: `
          <section id="entity">
            <h2>Entity Framework</h2>
      
            <h3>Introduction</h3>
            <p>Entity Framework (EF) is an open-source object-relational mapper (ORM) for .NET applications. It enables developers to work with a database using .NET objects, eliminating the need for most of the data-access code. EF supports LINQ queries, change tracking, updates, and schema migrations.</p>
      
            <h3>Getting Started with Entity Framework Core</h3>
            <p>Entity Framework Core (EF Core) is a lightweight, extensible, and cross-platform version of Entity Framework. To get started with EF Core, you need to install the necessary NuGet packages.</p>
            <pre><code class="language-csharp">
      Install-Package Microsoft.EntityFrameworkCore
      Install-Package Microsoft.EntityFrameworkCore.SqlServer
      Install-Package Microsoft.EntityFrameworkCore.Tools
            </code></pre>
      
            <h3>Defining a Model</h3>
            <p>To use EF Core, you define a model that represents the shape of your data and the relationships between your data. Example:</p>
            <pre><code class="language-csharp">
      // Models/Book.cs
      using System.ComponentModel.DataAnnotations;
      
      public class Book
      {
          public int Id { get; set; }
          [Required]
          public string Title { get; set; }
          public string Author { get; set; }
      }
      
      // Data/ApplicationDbContext.cs
      using Microsoft.EntityFrameworkCore;
      
      public class ApplicationDbContext : DbContext
      {
          public DbSet<Book> Books { get; set; }
      
          protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
          {
              optionsBuilder.UseSqlServer("YourConnectionStringHere");
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Book.cs</strong>: Defines a model class named <code>Book</code> with properties <code>Id</code>, <code>Title</code>, and <code>Author</code>.</li>
              <li><strong>ApplicationDbContext.cs</strong>: Defines a DbContext class that represents a session with the database and allows querying and saving instances of the <code>Book</code> class.</li>
              <li><strong>optionsBuilder.UseSqlServer("YourConnectionStringHere");</strong>: Configures the context to use a SQL Server database.</li>
            </ul>
      
            <h3>Creating the Database</h3>
            <p>EF Core uses migrations to create and update the database schema. You can add a migration and update the database using the following commands:</p>
            <pre><code class="language-csharp">
      Add-Migration InitialCreate
      Update-Database
            </code></pre>
      
            <h3>Performing CRUD Operations</h3>
            <p>CRUD operations (Create, Read, Update, Delete) are the basic operations you can perform on data. Example:</p>
            <pre><code class="language-csharp">
      // Program.cs
      using System;
      using System.Linq;
      
      class Program
      {
          static void Main()
          {
              using (var context = new ApplicationDbContext())
              {
                  // Create
                  var book = new Book { Title = "1984", Author = "George Orwell" };
                  context.Books.Add(book);
                  context.SaveChanges();
      
                  // Read
                  var books = context.Books.ToList();
                  books.ForEach(b => Console.WriteLine($"{b.Title} by {b.Author}"));
      
                  // Update
                  book.Title = "Nineteen Eighty-Four";
                  context.SaveChanges();
      
                  // Delete
                  context.Books.Remove(book);
                  context.SaveChanges();
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>context.Books.Add(book);</strong>: Adds a new book to the context.</li>
              <li><strong>context.SaveChanges();</strong>: Saves changes made to the context to the database.</li>
              <li><strong>context.Books.ToList();</strong>: Retrieves all books from the database.</li>
              <li><strong>context.Books.Remove(book);</strong>: Removes the book from the context.</li>
            </ul>
      
            <h3>Assignment 1: Creating a Model and Performing CRUD Operations</h3>
            <p>Create a model class named <code>Movie</code> with properties <code>Id</code>, <code>Title</code>, and <code>Director</code>. Define a DbContext class and perform CRUD operations (Create, Read, Update, Delete) on the <code>Movie</code> model. Display the list of movies after each operation.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // Models/Movie.cs
      using System.ComponentModel.DataAnnotations;
      
      public class Movie
      {
          public int Id { get; set; }
          [Required]
          public string Title { get; set; }
          public string Director { get; set; }
      }
      
      // Data/ApplicationDbContext.cs
      using Microsoft.EntityFrameworkCore;
      
      public class ApplicationDbContext : DbContext
      {
          public DbSet<Movie> Movies { get; set; }
      
          protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
          {
              optionsBuilder.UseSqlServer("YourConnectionStringHere");
          }
      }
      
      // Program.cs
      using System;
      using System.Linq;
      
      class Program
      {
          static void Main()
          {
              using (var context = new ApplicationDbContext())
              {
                  // Create
                  var movie = new Movie { Title = "Inception", Director = "Christopher Nolan" };
                  context.Movies.Add(movie);
                  context.SaveChanges();
      
                  // Read
                  var movies = context.Movies.ToList();
                  movies.ForEach(m => Console.WriteLine($"{m.Title} by {m.Director}"));
      
                  // Update
                  movie.Title = "Inception (2010)";
                  context.SaveChanges();
      
                  // Delete
                  context.Movies.Remove(movie);
                  context.SaveChanges();
      
                  // Read
                  movies = context.Movies.ToList();
                  movies.ForEach(m => Console.WriteLine($"{m.Title} by {m.Director}"));
              }
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Working with Relationships</h3>
            <p>Create two model classes, <code>Author</code> and <code>Book</code>. An author can have multiple books (one-to-many relationship). Define the DbContext class and perform CRUD operations to manage authors and their books. Display the list of authors and their books after each operation.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // Models/Author.cs
      using System.Collections.Generic;
      using System.ComponentModel.DataAnnotations;
      
      public class Author
      {
          public int Id { get; set; }
          [Required]
          public string Name { get; set; }
          public List<Book> Books { get; set; } = new List<Book>();
      }
      
      // Models/Book.cs
      using System.ComponentModel.DataAnnotations;
      
      public class Book
      {
          public int Id { get; set; }
          [Required]
          public string Title { get; set; }
          public int AuthorId { get; set; }
          public Author Author { get; set; }
      }
      
      // Data/ApplicationDbContext.cs
      using Microsoft.EntityFrameworkCore;
      
      public class ApplicationDbContext : DbContext
      {
          public DbSet<Author> Authors { get; set; }
          public DbSet<Book> Books { get; set; }
      
          protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
          {
              optionsBuilder.UseSqlServer("YourConnectionStringHere");
          }
      }
      
      // Program.cs
      using System;
      using System.Linq;
      
      class Program
      {
          static void Main()
          {
              using (var context = new ApplicationDbContext())
              {
                  // Create author and books
                  var author = new Author { Name = "George Orwell" };
                  var book1 = new Book { Title = "1984", Author = author };
                  var book2 = new Book { Title = "Animal Farm", Author = author };
      
                  context.Authors.Add(author);
                  context.Books.AddRange(book1, book2);
                  context.SaveChanges();
      
                  // Read
                  var authors = context.Authors.Include(a => a.Books).ToList();
                  foreach (var a in authors)
                  {
                      Console.WriteLine($"{a.Name}");
                      foreach (var b in a.Books)
                      {
                          Console.WriteLine($"\t{b.Title}");
                      }
                  }
      
                  // Update
                  book1.Title = "Nineteen Eighty-Four";
                  context.SaveChanges();
      
                  // Delete
                  context.Books.Remove(book2);
                  context.SaveChanges();
      
                  // Read
                  authors = context.Authors.Include(a => a.Books).ToList();
                  foreach (var a in authors)
                  {
                      Console.WriteLine($"{a.Name}");
                      foreach (var b in a.Books)
                      {
                          Console.WriteLine($"\t{b.Title}");
                      }
                  }
              }
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Entity Framework Core is a powerful ORM for .NET applications that simplifies data access by allowing developers to work with database objects through .NET classes. By understanding the basics of defining models, configuring the DbContext, and performing CRUD operations, you can efficiently manage your application's data. Practice using these concepts to become proficient in using EF Core.</p>
          </section>
        `
      },
      
      {
        id: 'wpf',
        title: 'WPF (Windows Presentation Foundation)',
        content: `
          <section id="wpf">
            <h2>WPF (Windows Presentation Foundation)</h2>
      
            <h3>Introduction</h3>
            <p>WPF (Windows Presentation Foundation) is a UI framework for building visually compelling Windows desktop applications. It supports a broad range of features, including data binding, media services, templates, animations, and more, enabling developers to create rich user experiences.</p>
      
            <h3>Getting Started with WPF</h3>
            <p>To create a WPF application, you need to set up a WPF project in Visual Studio. Here is a simple example of a WPF application:</p>
            <pre><code class="language-csharp">
      // MainWindow.xaml
      <Window x:Class="WpfApp.MainWindow"
              xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
              xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
              Title="MainWindow" Height="350" Width="525">
          <Grid>
              <TextBlock Text="Hello, WPF!" HorizontalAlignment="Center" VerticalAlignment="Center" FontSize="24"/>
          </Grid>
      </Window>
      
      // MainWindow.xaml.cs
      using System.Windows;
      
      namespace WpfApp
      {
          public partial class MainWindow : Window
          {
              public MainWindow()
              {
                  InitializeComponent();
              }
          }
      }
      
      // App.xaml
      <Application x:Class="WpfApp.App"
                   xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                   xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                   StartupUri="MainWindow.xaml">
          <Application.Resources>
               
          </Application.Resources>
      </Application>
      
      // App.xaml.cs
      using System.Windows;
      
      namespace WpfApp
      {
          public partial class App : Application
          {
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>MainWindow.xaml</strong>: Defines the UI of the main window using XAML (Extensible Application Markup Language).</li>
              <li><strong>MainWindow.xaml.cs</strong>: Contains the code-behind for the main window, handling events and interactions.</li>
              <li><strong>App.xaml</strong>: Defines application-level settings, including the startup window.</li>
              <li><strong>App.xaml.cs</strong>: Contains the code-behind for the application class.</li>
            </ul>
      
            <h3>Data Binding</h3>
            <p>Data binding in WPF connects UI elements to data sources, enabling dynamic updates and synchronization. Example:</p>
            <pre><code class="language-csharp">
      // MainWindow.xaml
      <Window x:Class="WpfApp.MainWindow"
              xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
              xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
              Title="MainWindow" Height="350" Width="525">
          <Grid>
              <TextBox Text="{Binding Name, UpdateSourceTrigger=PropertyChanged}" HorizontalAlignment="Center" VerticalAlignment="Center" Width="200"/>
          </Grid>
      </Window>
      
      // MainWindow.xaml.cs
      using System.ComponentModel;
      using System.Runtime.CompilerServices;
      using System.Windows;
      
      namespace WpfApp
      {
          public partial class MainWindow : Window, INotifyPropertyChanged
          {
              private string name;
      
              public string Name
              {
                  get { return name; }
                  set
                  {
                      name = value;
                      OnPropertyChanged();
                  }
              }
      
              public MainWindow()
              {
                  InitializeComponent();
                  DataContext = this;
              }
      
              public event PropertyChangedEventHandler PropertyChanged;
      
              protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
              {
                  PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Text="{Binding Name, UpdateSourceTrigger=PropertyChanged}"</strong>: Binds the <code>TextBox</code> text to the <code>Name</code> property.</li>
              <li><strong>INotifyPropertyChanged</strong>: Interface implemented to notify the UI of property changes.</li>
              <li><strong>DataContext = this;</strong>: Sets the data context for data binding.</li>
              <li><strong>OnPropertyChanged</strong>: Notifies the UI when the property value changes.</li>
            </ul>
      
            <h3>Commands</h3>
            <p>Commands in WPF separate the logic for user actions from the UI, promoting a clean and maintainable architecture. Example:</p>
            <pre><code class="language-csharp">
      // MainWindow.xaml
      <Window x:Class="WpfApp.MainWindow"
              xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
              xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
              Title="MainWindow" Height="350" Width="525">
          <Grid>
              <Button Command="{Binding ShowMessageCommand}" Content="Click Me" HorizontalAlignment="Center" VerticalAlignment="Center"/>
          </Grid>
      </Window>
      
      // MainWindow.xaml.cs
      using System;
      using System.Windows;
      using System.Windows.Input;
      
      namespace WpfApp
      {
          public partial class MainWindow : Window
          {
              public ICommand ShowMessageCommand { get; set; }
      
              public MainWindow()
              {
                  InitializeComponent();
                  ShowMessageCommand = new RelayCommand(ShowMessage);
                  DataContext = this;
              }
      
              private void ShowMessage()
              {
                  MessageBox.Show("Hello, WPF Commands!");
              }
          }
      
          public class RelayCommand : ICommand
          {
              private readonly Action execute;
              private readonly Func<bool> canExecute;
      
              public RelayCommand(Action execute, Func<bool> canExecute = null)
              {
                  this.execute = execute;
                  this.canExecute = canExecute;
              }
      
              public bool CanExecute(object parameter) => canExecute == null || canExecute();
              public void Execute(object parameter) => execute();
              public event EventHandler CanExecuteChanged;
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Command="{Binding ShowMessageCommand}"</strong>: Binds the button's command to the <code>ShowMessageCommand</code> property.</li>
              <li><strong>ShowMessageCommand = new RelayCommand(ShowMessage);</strong>: Initializes the command with the method to execute.</li>
              <li><strong>RelayCommand</strong>: Implements the <code>ICommand</code> interface to define the command behavior.</li>
              <li><strong>ShowMessage()</strong>: Method executed when the command is invoked.</li>
            </ul>
      
            <h3>Assignment 1: Data Binding</h3>
            <p>Create a WPF application with a <code>TextBox</code> bound to a property named <code>Age</code>. Implement the <code>INotifyPropertyChanged</code> interface to update the UI whenever the property value changes.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // MainWindow.xaml
      <Window x:Class="WpfApp.MainWindow"
              xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
              xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
              Title="MainWindow" Height="350" Width="525">
          <Grid>
              <TextBox Text="{Binding Age, UpdateSourceTrigger=PropertyChanged}" HorizontalAlignment="Center" VerticalAlignment="Center" Width="200"/>
          </Grid>
      </Window>
      
      // MainWindow.xaml.cs
      using System.ComponentModel;
      using System.Runtime.CompilerServices;
      using System.Windows;
      
      namespace WpfApp
      {
          public partial class MainWindow : Window, INotifyPropertyChanged
          {
              private int age;
      
              public int Age
              {
                  get { return age; }
                  set
                  {
                      age = value;
                      OnPropertyChanged();
                  }
              }
      
              public MainWindow()
              {
                  InitializeComponent();
                  DataContext = this;
              }
      
              public event PropertyChangedEventHandler PropertyChanged;
      
              protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
              {
                  PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
              }
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Commands</h3>
            <p>Create a WPF application with a <code>Button</code> bound to a command named <code>GreetCommand</code>. When the button is clicked, display a message box with the text "Greetings from WPF Commands!".</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // MainWindow.xaml
      <Window x:Class="WpfApp.MainWindow"
              xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
              xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
              Title="MainWindow" Height="350" Width="525">
          <Grid>
              <Button Command="{Binding GreetCommand}" Content="Greet" HorizontalAlignment="Center" VerticalAlignment="Center"/>
          </Grid>
      </Window>
      
      // MainWindow.xaml.cs
      using System;
      using System.Windows;
      using System.Windows.Input;
      
      namespace WpfApp
      {
          public partial class MainWindow : Window
          {
              public ICommand GreetCommand { get; set; }
      
              public MainWindow()
              {
                  InitializeComponent();
                  GreetCommand = new RelayCommand(Greet);
                  DataContext = this;
              }
      
              private void Greet()
              {
                  MessageBox.Show("Greetings from WPF Commands!");
              }
          }
      
          public class RelayCommand : ICommand
          {
              private readonly Action execute;
              private readonly Func<bool> canExecute;
      
              public RelayCommand(Action execute, Func<bool> canExecute = null)
              {
                  this.execute = execute;
                  this.canExecute = canExecute;
              }
      
              public bool CanExecute(object parameter) => canExecute == null || canExecute();
              public void Execute(object parameter) => execute();
              public event EventHandler CanExecuteChanged;
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>WPF is a powerful framework for building Windows desktop applications with rich user interfaces. By understanding the basics of XAML, data binding, and commands, you can create dynamic and responsive applications. Practice using these concepts to become proficient in WPF development.</p>
          </section>
        `
      },
      {
        id: 'xamarin',
        title: 'Xamarin',
        content: `
          <section id="xamarin">
            <h2>Xamarin</h2>
      
            <h3>Introduction</h3>
            <p>Xamarin is a cross-platform framework for building mobile applications using C# and .NET. It allows developers to create native</p>
            <p> Android, iOS, and Windows apps with a single shared codebase. Xamarin provides access to native APIs and user interfaces, </p>
            <p>ensuring high performance and a native look and feel.</p>
      
            <h3>Getting Started with Xamarin</h3>
            <p>To get started with Xamarin, you need to set up Visual Studio with the Xamarin workload. Here's a simple example of a Xamarin.Forms application:</p>
            <pre><code class="language-csharp">
      // MainPage.xaml
      <ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
                   xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                   x:Class="XamarinApp.MainPage">
          <StackLayout>
              <Label Text="Welcome to Xamarin.Forms!"
                     VerticalOptions="CenterAndExpand" 
                     HorizontalOptions="CenterAndExpand" />
              <Button Text="Click Me" Clicked="OnButtonClicked" />
          </StackLayout>
      </ContentPage>
      
      // MainPage.xaml.cs
      using System;
      using Xamarin.Forms;
      
      namespace XamarinApp
      {
          public partial class MainPage : ContentPage
          {
              public MainPage()
              {
                  InitializeComponent();
              }
      
              private void OnButtonClicked(object sender, EventArgs e)
              {
                  DisplayAlert("Button Clicked", "Hello, Xamarin.Forms!", "OK");
              }
          }
      }
      
      // App.xaml.cs
      using Xamarin.Forms;
      
      namespace XamarinApp
      {
          public partial class App : Application
          {
              public App()
              {
                  InitializeComponent();
      
                  MainPage = new MainPage();
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>MainPage.xaml</strong>: Defines the UI of the main page using XAML.</li>
              <li><strong>MainPage.xaml.cs</strong>: Contains the code-behind for the main page, handling events and interactions.</li>
              <li><strong>App.xaml.cs</strong>: Defines the application class and sets the main page.</li>
            </ul>
      
            <h3>Data Binding</h3>
            <p>Data binding in Xamarin.Forms connects UI elements to data sources, enabling dynamic updates and synchronization. Example:</p>
            <pre><code class="language-csharp">
      // MainPage.xaml
      <ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
                   xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                   x:Class="XamarinApp.MainPage">
          <StackLayout>
              <Entry Text="{Binding Name, Mode=TwoWay}" Placeholder="Enter your name" />
              <Label Text="{Binding Name}" VerticalOptions="CenterAndExpand" HorizontalOptions="CenterAndExpand" />
          </StackLayout>
      </ContentPage>
      
      // MainPage.xaml.cs
      using System.ComponentModel;
      using Xamarin.Forms;
      
      namespace XamarinApp
      {
          public partial class MainPage : ContentPage, INotifyPropertyChanged
          {
              private string name;
      
              public string Name
              {
                  get { return name; }
                  set
                  {
                      name = value;
                      OnPropertyChanged(nameof(Name));
                  }
              }
      
              public MainPage()
              {
                  InitializeComponent();
                  BindingContext = this;
              }
      
              public event PropertyChangedEventHandler PropertyChanged;
      
              protected void OnPropertyChanged(string propertyName)
              {
                  PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Text="{Binding Name, Mode=TwoWay}"</strong>: Binds the <code>Entry</code> text to the <code>Name</code> property with two-way binding.</li>
              <li><strong>INotifyPropertyChanged</strong>: Interface implemented to notify the UI of property changes.</li>
              <li><strong>BindingContext = this;</strong>: Sets the binding context for data binding.</li>
              <li><strong>OnPropertyChanged</strong>: Notifies the UI when the property value changes.</li>
            </ul>
      
            <h3>Navigation</h3>
            <p>Xamarin.Forms provides a navigation framework to navigate between pages. Example:</p>
            <pre><code class="language-csharp">
      // MainPage.xaml
      <ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
                   xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                   x:Class="XamarinApp.MainPage">
          <StackLayout>
              <Button Text="Go to Second Page" Clicked="OnNavigateButtonClicked" />
          </StackLayout>
      </ContentPage>
      
      // MainPage.xaml.cs
      using System;
      using Xamarin.Forms;
      
      namespace XamarinApp
      {
          public partial class MainPage : ContentPage
          {
              public MainPage()
              {
                  InitializeComponent();
              }
      
              private async void OnNavigateButtonClicked(object sender, EventArgs e)
              {
                  await Navigation.PushAsync(new SecondPage());
              }
          }
      }
      
      // SecondPage.xaml
      <ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
                   xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                   x:Class="XamarinApp.SecondPage">
          <StackLayout>
              <Label Text="Welcome to the Second Page!"
                     VerticalOptions="CenterAndExpand" 
                     HorizontalOptions="CenterAndExpand" />
          </StackLayout>
      </ContentPage>
      
      // SecondPage.xaml.cs
      using Xamarin.Forms;
      
      namespace XamarinApp
      {
          public partial class SecondPage : ContentPage
          {
              public SecondPage()
              {
                  InitializeComponent();
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Navigation.PushAsync(new SecondPage());</strong>: Navigates to the <code>SecondPage</code>.</li>
              <li><strong>SecondPage.xaml</strong>: Defines the UI for the second page.</li>
            </ul>
      
            <h3>Dependency Services</h3>
            <p>Dependency services in Xamarin.Forms enable platform-specific implementations of functionality. Example:</p>
            <pre><code class="language-csharp">
      // Define an interface
      public interface IDeviceService
      {
          string GetDeviceName();
      }
      
      // Implement the interface on each platform
      // Android: MainActivity.cs
      [assembly: Dependency(typeof(DeviceService))]
      namespace XamarinApp.Droid
      {
          public class DeviceService : IDeviceService
          {
              public string GetDeviceName()
              {
                  return "Android Device";
              }
          }
      }
      
      // iOS: AppDelegate.cs
      [assembly: Dependency(typeof(DeviceService))]
      namespace XamarinApp.iOS
      {
          public class DeviceService : IDeviceService
          {
              public string GetDeviceName()
              {
                  return "iOS Device";
              }
          }
      }
      
      // Use the dependency service in shared code
      // MainPage.xaml.cs
      using Xamarin.Forms;
      
      namespace XamarinApp
      {
          public partial class MainPage : ContentPage
          {
              public MainPage()
              {
                  InitializeComponent();
                  string deviceName = DependencyService.Get<IDeviceService>().GetDeviceName();
                  DisplayAlert("Device Info", deviceName, "OK");
              }
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>IDeviceService</strong>: Defines an interface for device-specific functionality.</li>
              <li><strong>Dependency</strong>: Registers the platform-specific implementations.</li>
              <li><strong>DependencyService.Get&lt;IDeviceService&gt;().GetDeviceName();</strong>: Retrieves the device name using the dependency service.</li>
            </ul>
      
            <h3>Assignment 1: Data Binding</h3>
            <p>Create a Xamarin.Forms application with an <code>Entry</code> bound to a property named <code>Email</code>. Implement the <code>INotifyPropertyChanged</code> </p>
            <p>interface to update the UI whenever the property value changes.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // MainPage.xaml
      <ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
                   xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                   x:Class="XamarinApp.MainPage">
          <StackLayout>
            <Entry Text="{Binding Email, Mode=TwoWay}" Placeholder="Enter your email" />
            <Label Text="{Binding Email}" VerticalOptions="CenterAndExpand" HorizontalOptions="CenterAndExpand" />
          </StackLayout>
      </ContentPage>
      
      // MainPage.xaml.cs
      using System.ComponentModel;
      using Xamarin.Forms;
      
      namespace XamarinApp
      {
          public partial class MainPage : ContentPage, INotifyPropertyChanged
          {
              private string email;
      
              public string Email
              {
                  get { return email; }
                  set
                  {
                      email = value;
                      OnPropertyChanged(nameof(Email));
                  }
              }
      
              public MainPage()
              {
                  InitializeComponent();
                  BindingContext = this;
              }
      
              public event PropertyChangedEventHandler PropertyChanged;
      
              protected void OnPropertyChanged(string propertyName)
              {
                  PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
              }
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Navigation</h3>
            <p>Create a Xamarin.Forms application with a <code>Button</code> that navigates to a second page named <code>DetailsPage</code>. Display a welcome message on the <code>DetailsPage</code>.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // MainPage.xaml
      <ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
                   xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                   x:Class="XamarinApp.MainPage">
          <StackLayout>
              <Button Text="Go to Details Page" Clicked="OnNavigateButtonClicked" />
          </StackLayout>
      </ContentPage>
      
      // MainPage.xaml.cs
      using System;
      using Xamarin.Forms;
      
      namespace XamarinApp
      {
          public partial class MainPage : ContentPage
          {
              public MainPage()
              {
                  InitializeComponent();
              }
      
              private async void OnNavigateButtonClicked(object sender, EventArgs e)
              {
                  await Navigation.PushAsync(new DetailsPage());
              }
          }
      }
      
      // DetailsPage.xaml
      <ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
                   xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                   x:Class="XamarinApp.DetailsPage">
          <StackLayout>
              <Label Text="Welcome to the Details Page!"
                     VerticalOptions="CenterAndExpand" 
                     HorizontalOptions="CenterAndExpand" />
          </StackLayout>
      </ContentPage>
      
      // DetailsPage.xaml.cs
      using Xamarin.Forms;
      
      namespace XamarinApp
      {
          public partial class DetailsPage : ContentPage
          {
              public DetailsPage()
              {
                  InitializeComponent();
              }
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Xamarin is a powerful framework for building cross-platform mobile applications with a shared codebase. By understanding the basics of XAML, data binding, navigation, and dependency services, you can create dynamic and responsive mobile apps. Practice using these concepts to become proficient in Xamarin development.</p>
          </section>
        `
      },
      
      {
        id: 'design',
        title: 'Design Patterns',
        content: `
          <section id="design">
            <h2>Design Patterns</h2>
      
            <h3>Introduction</h3>
            <p>Design patterns are proven solutions to common software design problems. They represent best practices used by experienced object-oriented software developers. Design patterns are categorized into three main types: Creational, Structural, and Behavioral patterns.</p>
      
            <h3>Creational Patterns</h3>
            <p>Creational patterns deal with object creation mechanisms, trying to create objects in a manner suitable for the situation. Examples include Singleton, Factory Method, and Abstract Factory.</p>
            
            <h4>Singleton Pattern</h4>
            <p>The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. Example:</p>
            <pre><code class="language-csharp">
      public class Singleton
      {
          private static Singleton instance;
      
          private Singleton() { }
      
          public static Singleton Instance
          {
              get
              {
                  if (instance == null)
                  {
                      instance = new Singleton();
                  }
                  return instance;
              }
          }
      
          public void DoSomething()
          {
              Console.WriteLine("Singleton instance doing something.");
          }
      }
      
      // Usage
      class Program
      {
          static void Main()
          {
              Singleton.Instance.DoSomething();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>private static Singleton instance;</strong>: Holds the single instance of the Singleton class.</li>
              <li><strong>private Singleton()</strong>: Private constructor prevents instantiation from other classes.</li>
              <li><strong>public static Singleton Instance</strong>: Provides a global point of access to the Singleton instance.</li>
              <li><strong>Singleton.Instance.DoSomething();</strong>: Calls a method on the Singleton instance.</li>
            </ul>
      
            <h3>Structural Patterns</h3>
            <p>Structural patterns deal with object composition or the organization of classes and objects. Examples include Adapter, Composite, and Decorator.</p>
            
            <h4>Adapter Pattern</h4>
            <p>The Adapter pattern allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces. Example:</p>
            <pre><code class="language-csharp">
      public interface ITarget
      {
          void Request();
      }
      
      public class Adaptee
      {
          public void SpecificRequest()
          {
              Console.WriteLine("Called SpecificRequest()");
          }
      }
      
      public class Adapter : ITarget
      {
          private readonly Adaptee _adaptee;
      
          public Adapter(Adaptee adaptee)
          {
              _adaptee = adaptee;
          }
      
          public void Request()
          {
              _adaptee.SpecificRequest();
          }
      }
      
      // Usage
      class Program
      {
          static void Main()
          {
              Adaptee adaptee = new Adaptee();
              ITarget target = new Adapter(adaptee);
              target.Request();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>ITarget</strong>: Defines the domain-specific interface used by the client.</li>
              <li><strong>Adaptee</strong>: Contains some useful behavior but its interface is incompatible with the existing client code.</li>
              <li><strong>Adapter</strong>: Makes the Adaptee's interface compatible with the ITarget interface.</li>
              <li><strong>target.Request();</strong>: Calls the Adaptee's method via the Adapter.</li>
            </ul>
      
            <h3>Behavioral Patterns</h3>
            <p>Behavioral patterns are concerned with algorithms and the assignment of responsibilities between objects. Examples include Observer, Strategy, and Command.</p>
            
            <h4>Observer Pattern</h4>
            <p>The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. Example:</p>
            <pre><code class="language-csharp">
      using System;
      using System.Collections.Generic;
      
      public class Subject
      {
          private List<IObserver> observers = new List<IObserver>();
      
          public void Attach(IObserver observer)
          {
              observers.Add(observer);
          }
      
          public void Detach(IObserver observer)
          {
              observers.Remove(observer);
          }
      
          public void Notify()
          {
              foreach (var observer in observers)
              {
                  observer.Update();
              }
          }
      }
      
      public interface IObserver
      {
          void Update();
      }
      
      public class ConcreteObserver : IObserver
      {
          public void Update()
          {
              Console.WriteLine("Observer updated.");
          }
      }
      
      // Usage
      class Program
      {
          static void Main()
          {
              Subject subject = new Subject();
              IObserver observer = new ConcreteObserver();
              
              subject.Attach(observer);
              subject.Notify();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Subject</strong>: Maintains a list of observers and notifies them of state changes.</li>
              <li><strong>IObserver</strong>: Interface for the observers that need to be notified of state changes.</li>
              <li><strong>ConcreteObserver</strong>: Implements the IObserver interface and defines the update action.</li>
              <li><strong>subject.Notify();</strong>: Notifies all attached observers of a state change.</li>
            </ul>
      
            <h3>Assignment 1: Singleton Pattern</h3>
            <p>Create a Singleton class that provides a method to log messages. Ensure that only one instance of the logger is used throughout the application.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      public class Logger
      {
          private static Logger instance;
      
          private Logger() { }
      
          public static Logger Instance
          {
              get
              {
                  if (instance == null)
                  {
                      instance = new Logger();
                  }
                  return instance;
              }
          }
      
          public void Log(string message)
          {
              Console.WriteLine("Log: " + message);
          }
      }
      
      // Usage
      class Program
      {
          static void Main()
          {
              Logger.Instance.Log("This is a log message.");
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Observer Pattern</h3>
            <p>Implement the Observer pattern to create a notification system where multiple observers can subscribe to a subject and get notified of any state changes.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      using System;
      using System.Collections.Generic;
      
      public class Subject
      {
          private List<IObserver> observers = new List<IObserver>();
      
          private string state;
          public string State
          {
              get { return state; }
              set
              {
                  state = value;
                  Notify();
              }
          }
      
          public void Attach(IObserver observer)
          {
              observers.Add(observer);
          }
      
          public void Detach(IObserver observer)
          {
              observers.Remove(observer);
          }
      
          public void Notify()
          {
              foreach (var observer in observers)
              {
                  observer.Update(State);
              }
          }
      }
      
      public interface IObserver
      {
          void Update(string state);
      }
      
      public class ConcreteObserver : IObserver
      {
          private string observerState;
      
          public void Update(string state)
          {
              observerState = state;
              Console.WriteLine("Observer updated with state: " + observerState);
          }
      }
      
      // Usage
      class Program
      {
          static void Main()
          {
              Subject subject = new Subject();
              IObserver observer1 = new ConcreteObserver();
              IObserver observer2 = new ConcreteObserver();
              
              subject.Attach(observer1);
              subject.Attach(observer2);
              
              subject.State = "New State";
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Design patterns are essential tools for creating robust, reusable, and maintainable software. By understanding and applying these patterns, you can solve common software design problems efficiently. Practice using these design patterns to become proficient in software architecture and design.</p>
          </section>
        `
      },
      
      {
        id: 'unit',
        title: 'Unit Testing',
        content: `
          <section id="unit">
            <h2>Unit Testing</h2>
      
            <h3>Introduction</h3>
            <p>Unit testing is a software testing method where individual units or components of a software are tested in isolation from the rest of the application. The main goal is to validate that each unit of the software performs as expected. Unit tests are typically automated and help ensure that code changes do not introduce new bugs.</p>
      
            <h3>Setting Up Unit Testing in C#</h3>
            <p>To get started with unit testing in C#, you need to set up a test project in Visual Studio using a unit testing framework like MSTest, NUnit, or xUnit. Here's how to set up a test project using xUnit:</p>
            <pre><code class="language-csharp">
            // Install xUnit NuGet package
            Install-Package xunit
            Install-Package xunit.runner.visualstudio
            Install-Package Microsoft.NET.Test.Sdk
            </code></pre>
      
            <h3>Writing Your First Unit Test</h3>
            <p>Here's an example of a simple class and its unit test:</p>
            <pre><code class="language-csharp">
      // Calculator.cs
      public class Calculator
      {
          public int Add(int a, int b)
          {
              return a + b;
          }
      }
      
      // CalculatorTests.cs
      using Xunit;
      
      public class CalculatorTests
      {
          [Fact]
          public void Add_ShouldReturnCorrectSum()
          {
              // Arrange
              var calculator = new Calculator();
              
              // Act
              int result = calculator.Add(2, 3);
              
              // Assert
              Assert.Equal(5, result);
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Calculator</strong>: A simple class with an <code>Add</code> method.</li>
              <li><strong>CalculatorTests</strong>: A test class containing a unit test for the <code>Add</code> method.</li>
              <li><strong>[Fact]</strong>: An attribute that marks the method as a test method.</li>
              <li><strong>Assert.Equal(5, result)</strong>: Checks that the result is equal to the expected value.</li>
            </ul>
      
            <h3>Common Assertions in xUnit</h3>
            <p>xUnit provides various assertions to verify different conditions in your tests. Here are some common assertions:</p>
            <pre><code class="language-csharp">
      using Xunit;
      
      public class AssertionsExampleTests
      {
          [Fact]
          public void TestAssertions()
          {
              int expected = 5;
              int actual = 5;
      
              Assert.Equal(expected, actual); // Checks for equality
              Assert.NotEqual(expected, 6); // Checks for inequality
              Assert.True(actual > 0); // Checks if the condition is true
              Assert.False(actual < 0); // Checks if the condition is false
              Assert.Null(null); // Checks if the object is null
              Assert.NotNull(actual); // Checks if the object is not null
              Assert.Contains("xUnit", "xUnit testing framework"); // Checks if a string contains a substring
              Assert.DoesNotContain("NUnit", "xUnit testing framework");
               // Checks if a string does not contain a substring
          }
      }
            </code></pre>
      
            <h3>Mocking Dependencies</h3>
            <p>In unit testing, you often need to test a class that depends on other classes. Mocking frameworks like Moq help you create mock objects to simulate the behavior of dependencies. Example:</p>
            <pre><code class="language-csharp">
      // Service.cs
      public interface IService
      {
          int GetData();
      }
      
      public class MyService : IService
      {
          public int GetData()
          {
              return 42; // Simulated data
          }
      }
      
      // MyController.cs
      public class MyController
      {
          private readonly IService _service;
      
          public MyController(IService service)
          {
              _service = service;
          }
      
          public int GetServiceData()
          {
              return _service.GetData();
          }
      }
      
      // MyControllerTests.cs
      using Moq;
      using Xunit;
      
      public class MyControllerTests
      {
          [Fact]
          public void GetServiceData_ShouldReturnMockedData()
          {
              // Arrange
              var mockService = new Mock<IService>();
              mockService.Setup(service => service.GetData()).Returns(100);
      
              var controller = new MyController(mockService.Object);
      
              // Act
              int result = controller.GetServiceData();
      
              // Assert
              Assert.Equal(100, result);
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>IService</strong>: Interface for the service.</li>
              <li><strong>MyService</strong>: Implementation of the service.</li>
              <li><strong>MyController</strong>: Class that depends on <code>IService</code>.</li>
              <li><strong>Mock&lt;IService&gt;</strong>: Creates a mock object for the <code>IService</code> interface.</li>
              <li><strong>mockService.Setup(service => service.GetData()).Returns(100);</strong>: Sets up the mock to return 100 when <code>GetData</code> is called.</li>
            </ul>
      
            <h3>Assignment 1: Unit Testing a Calculator Class</h3>
            <p>Create a <code>Calculator</code> class with methods for addition, subtraction, multiplication, and division. Write unit tests for each method to ensure they return the correct results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // Calculator.cs
      public class Calculator
      {
          public int Add(int a, int b)
          {
              return a + b;
          }
      
          public int Subtract(int a, int b)
          {
              return a - b;
          }
      
          public int Multiply(int a, int b)
          {
              return a * b;
          }
      
          public int Divide(int a, int b)
          {
              if (b == 0)
                  throw new DivideByZeroException();
              return a / b;
          }
      }
      
      // CalculatorTests.cs
      using Xunit;
      
      public class CalculatorTests
      {
          private readonly Calculator _calculator = new Calculator();
      
          [Fact]
          public void Add_ShouldReturnCorrectSum()
          {
              int result = _calculator.Add(2, 3);
              Assert.Equal(5, result);
          }
      
          [Fact]
          public void Subtract_ShouldReturnCorrectDifference()
          {
              int result = _calculator.Subtract(5, 3);
              Assert.Equal(2, result);
          }
      
          [Fact]
          public void Multiply_ShouldReturnCorrectProduct()
          {
              int result = _calculator.Multiply(2, 3);
              Assert.Equal(6, result);
          }
      
          [Fact]
          public void Divide_ShouldReturnCorrectQuotient()
          {
              int result = _calculator.Divide(6, 3);
              Assert.Equal(2, result);
          }
      
          [Fact]
          public void Divide_ByZero_ShouldThrowDivideByZeroException()
          {
              Assert.Throws<DivideByZeroException>(() => _calculator.Divide(6, 0));
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Mocking Dependencies</h3>
            <p>Create a service interface named <code>IUserService</code> with a method <code>GetUserName</code>. Implement a class <code>UserService</code> that returns a user's name. Create a controller class <code>UserController</code> that uses <code>IUserService</code>. Write unit tests to mock <code>IUserService</code> and verify that <code>UserController</code> returns the correct user name.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // IUserService.cs
      public interface IUserService
      {
          string GetUserName(int userId);
      }
      
      // UserService.cs
      public class UserService : IUserService
      {
          public string GetUserName(int userId)
          {
              return "John Doe"; // Simulated user name
          }
      }
      
      // UserController.cs
      public class UserController
      {
          private readonly IUserService _userService;
      
          public UserController(IUserService userService)
          {
              _userService = userService;
          }
      
          public string GetUserName(int userId)
          {
              return _userService.GetUserName(userId);
          }
      }
      
      // UserControllerTests.cs
      using Moq;
      using Xunit;
      
      public class UserControllerTests
      {
          [Fact]
          public void GetUserName_ShouldReturnMockedUserName()
          {
              // Arrange
              var mockUserService = new Mock<IUserService>();
              mockUserService.Setup(service => service.GetUserName(It.IsAny<int>())).Returns("Jane Doe");
      
              var controller = new UserController(mockUserService.Object);
      
              // Act
              string result = controller.GetUserName(1);
      
              // Assert
              Assert.Equal("Jane Doe", result);
          }
      }
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Unit testing is a crucial practice for ensuring the reliability and quality of your software. By writing automated tests for your code, you can catch bugs early and make code refactoring safer. Practice using unit testing frameworks and mocking dependencies to become proficient in writing effective unit tests.</p>
          </section>
        `
      },
      
      {
        id: 'dependency',
        title: 'Dependency Injection',
        content: `
          <section id="dependency">
            <h2>Dependency Injection</h2>
      
            <h3>Introduction</h3>
            <p>Dependency Injection (DI) is a design pattern used to implement Inversion of Control (IoC) between classes and their dependencies. It allows a class to receive its dependencies from an external source rather than creating them itself. DI promotes loose coupling, easier testing, and better maintainability.</p>
      
            <h3>Types of Dependency Injection</h3>
            <p>There are three common types of Dependency Injection:</p>
            <ul>
              <li><strong>Constructor Injection:</strong> Dependencies are provided through a class constructor.</li>
              <li><strong>Property Injection:</strong> Dependencies are provided through public properties.</li>
              <li><strong>Method Injection:</strong> Dependencies are provided through method parameters.</li>
            </ul>
      
            <h3>Constructor Injection</h3>
            <p>Constructor Injection is the most common form of Dependency Injection. Dependencies are passed to the class through its constructor. Example:</p>
            <pre><code class="language-csharp">
      // IService.cs
      public interface IService
      {
          void Serve();
      }
      
      // Service.cs
      public class Service : IService
      {
          public void Serve()
          {
              Console.WriteLine("Service Called");
          }
      }
      
      // Client.cs
      public class Client
      {
          private readonly IService _service;
      
          // Constructor Injection
          public Client(IService service)
          {
              _service = service;
          }
      
          public void Start()
          {
              Console.WriteLine("Service Started");
              _service.Serve();
          }
      }
      
      // Program.cs
      class Program
      {
          static void Main()
          {
              IService service = new Service();
              Client client = new Client(service);
              client.Start();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>IService</strong>: Interface for the service.</li>
              <li><strong>Service</strong>: Implementation of the service.</li>
              <li><strong>Client</strong>: Client class that depends on <code>IService</code>.</li>
              <li><strong>Client(IService service)</strong>: Constructor that receives the dependency.</li>
            </ul>
      
            <h3>Property Injection</h3>
            <p>Property Injection allows dependencies to be set through public properties. Example:</p>
            <pre><code class="language-csharp">
      // Client.cs
      public class Client
      {
          private IService _service;
      
          // Property Injection
          public IService Service
          {
              set { _service = value; }
          }
      
          public void Start()
          {
              Console.WriteLine("Service Started");
              _service?.Serve();
          }
      }
      
      // Program.cs
      class Program
      {
          static void Main()
          {
              IService service = new Service();
              Client client = new Client
              {
                  Service = service // Property Injection
              };
              client.Start();
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>public IService Service</strong>: Public property for injecting the dependency.</li>
              <li><strong>client.Service = service;</strong>: Injects the dependency using the property.</li>
            </ul>
      
            <h3>Method Injection</h3>
            <p>Method Injection allows dependencies to be passed directly to methods. Example:</p>
            <pre><code class="language-csharp">
      // Client.cs
      public class Client
      {
          public void Start(IService service)
          {
              Console.WriteLine("Service Started");
              service.Serve();
          }
      }
      
      // Program.cs
      class Program
      {
          static void Main()
          {
              IService service = new Service();
              Client client = new Client();
              client.Start(service); // Method Injection
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>public void Start(IService service)</strong>: Method that receives the dependency.</li>
              <li><strong>client.Start(service);</strong>: Injects the dependency using the method parameter.</li>
            </ul>
      
            <h3>Using Dependency Injection in ASP.NET Core</h3>
            <p>ASP.NET Core has built-in support for Dependency Injection. Services are registered in the <code>Startup.cs</code> file and injected into controllers and other services. Example:</p>
            <pre><code class="language-csharp">
      // IService.cs
      public interface IService
      {
          void Serve();
      }
      
      // Service.cs
      public class Service : IService
      {
          public void Serve()
          {
              Console.WriteLine("Service Called");
          }
      }
      
      // HomeController.cs
      using Microsoft.AspNetCore.Mvc;
      
      public class HomeController : Controller
      {
          private readonly IService _service;
      
          public HomeController(IService service)
          {
              _service = service;
          }
      
          public IActionResult Index()
          {
              _service.Serve();
              return View();
          }
      }
      
      // Startup.cs
      public class Startup
      {
          public void ConfigureServices(IServiceCollection services)
          {
              services.AddTransient<IService, Service>();
              services.AddControllersWithViews();
          }
      
          public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
          {
              if (env.IsDevelopment())
              {
                  app.UseDeveloperExceptionPage();
              }
              else
              {
                  app.UseExceptionHandler("/Home/Error");
                  app.UseHsts();
              }
              app.UseHttpsRedirection();
              app.UseStaticFiles();
              app.UseRouting();
              app.UseAuthorization();
              app.UseEndpoints(endpoints =>
              {
                  endpoints.MapControllerRoute(
                      name: "default",
                      pattern: "{controller=Home}/{action=Index}/{id?}");
              });
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>services.AddTransient&lt;IService, Service&gt;();</strong>: Registers the service with the DI container.</li>
              <li><strong>HomeController(IService service)</strong>: Constructor that receives the dependency.</li>
              <li><strong>_service.Serve();</strong>: Uses the injected service.</li>
            </ul>
      
            <h3>Assignment 1: Implement Constructor Injection</h3>
            <p>Create an interface <code>ILogger</code> with a method <code>Log</code>. Implement this interface in a class <code>ConsoleLogger</code>. Create a client class <code>Application</code> that receives an <code>ILogger</code> through its constructor and uses it to log messages. Write a <code>Main</code> method to demonstrate constructor injection.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // ILogger.cs
      public interface ILogger
      {
          void Log(string message);
      }
      
      // ConsoleLogger.cs
      public class ConsoleLogger : ILogger
      {
          public void Log(string message)
          {
              Console.WriteLine("Log: " + message);
          }
      }
      
      // Application.cs
      public class Application
      {
          private readonly ILogger _logger;
      
          public Application(ILogger logger)
          {
              _logger = logger;
          }
      
          public void Run()
          {
              _logger.Log("Application is running");
          }
      }
      
      // Program.cs
      class Program
      {
          static void Main()
          {
              ILogger logger = new ConsoleLogger();
              Application app = new Application(logger);
              app.Run();
          }
      }
            </code></pre>
      
            <h3>Assignment 2: Using Dependency Injection in ASP.NET Core</h3>
            <p>Create an ASP.NET Core application with a service <code>IWeatherService</code> that provides weather information. Implement this interface in a class <code>WeatherService</code>. Inject this service into a controller and use it to display weather information in a view.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // IWeatherService.cs
      public interface IWeatherService
      {
          string GetWeather();
      }
      
      // WeatherService.cs
      public class WeatherService : IWeatherService
      {
          public string GetWeather()
          {
              return "Sunny";
          }
      }
      
      // WeatherController.cs
      using Microsoft.AspNetCore.Mvc;
      
      public class WeatherController : Controller
      {
          private readonly IWeatherService _weatherService;
      
          public WeatherController(IWeatherService weatherService)
          {
              _weatherService = weatherService;
          }
      
          public IActionResult Index()
          {
              ViewBag.Weather = _weatherService.GetWeather();
              return View();
          }
      }
      
      // Startup.cs
      public class Startup
      {
          public void ConfigureServices(IServiceCollection services)
          {
              services.AddTransient<IWeatherService, WeatherService>();
              services.AddControllersWithViews();
          }
      
          public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
          {
              if (env.IsDevelopment())
              {
                  app.UseDeveloperExceptionPage();
              }
              else
              {
                  app.UseExceptionHandler("/Home/Error");
                  app.UseHsts();
              }
              app.UseHttpsRedirection();
              app.UseStaticFiles();
              app.UseRouting();
              app.UseAuthorization();
              app.UseEndpoints(endpoints =>
              {
                  endpoints.MapControllerRoute(
                      name: "default",
                      pattern: "{controller=Weather}/{action=Index}/{id?}");
              });
          }
      }
      
      // Views/Weather/Index.cshtml
      @{
          ViewBag.Title = "Weather";
      }
      
      <h2>Weather</h2>
      <p>Current weather: @ViewBag.Weather</p>
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Dependency Injection is a powerful pattern that helps to achieve loose coupling, better testability, and easier maintainability of code. By understanding and applying Dependency Injection, you can create more flexible and robust applications. Practice using DI in different scenarios to become proficient in this essential design pattern.</p>
          </section>
        `
      },
      
      {
        id: 'microservices',
        title: 'Microservices Architecture',
        content: `
          <section id="microservices">
            <h2>Microservices Architecture</h2>
      
            <h3>Introduction</h3>
            <p>Microservices Architecture is an architectural style that structures an application as a collection of small, autonomous services modeled around a business domain. Each microservice is a small application that has its own hexagonal architecture consisting of business logic along with various adapters.</p>
            <p>Microservices promote modularity, making applications easier to develop, test, deploy, and, more importantly, to scale.</p>
      
            <h3>Characteristics of Microservices</h3>
            <ul>
              <li><strong>Single Responsibility:</strong> Each microservice is designed to do one thing well.</li>
              <li><strong>Independently Deployable:</strong> Microservices can be developed, deployed, and scaled independently.</li>
              <li><strong>Decentralized Data Management:</strong> Each microservice manages its own database.</li>
              <li><strong>Polyglot Programming:</strong> Different microservices can be written in different programming languages.</li>
              <li><strong>Inter-Process Communication:</strong> Microservices communicate with each other through well-defined APIs, often using HTTP/REST or messaging queues.</li>
            </ul>
      
            <h3>Building a Simple Microservice</h3>
            <p>Let's build a simple microservice in ASP.NET Core. We'll create a ProductService that manages product information.</p>
            <pre><code class="language-csharp">
      // Models/Product.cs
      public class Product
      {
          public int Id { get; set; }
          public string Name { get; set; }
          public decimal Price { get; set; }
      }
      
      // Controllers/ProductController.cs
      using Microsoft.AspNetCore.Mvc;
      using System.Collections.Generic;
      
      [ApiController]
      [Route("api/[controller]")]
      public class ProductController : ControllerBase
      {
          private static List<Product> products = new List<Product>
          {
              new Product { Id = 1, Name = "Product 1", Price = 10.0M },
              new Product { Id = 2, Name = "Product 2", Price = 20.0M }
          };
      
          [HttpGet]
          public IEnumerable<Product> Get()
          {
              return products;
          }
      
          [HttpGet("{id}")]
          public ActionResult<Product> Get(int id)
          {
              var product = products.Find(p => p.Id == id);
              if (product == null)
                  return NotFound();
              return product;
          }
      
          [HttpPost]
          public ActionResult<Product> Post(Product product)
          {
              product.Id = products.Count + 1;
              products.Add(product);
              return CreatedAtAction(nameof(Get), new { id = product.Id }, product);
          }
      }
      
      // Program.cs
      using Microsoft.AspNetCore.Hosting;
      using Microsoft.Extensions.Hosting;
      
      public class Program
      {
          public static void Main(string[] args)
          {
              CreateHostBuilder(args).Build().Run();
          }
      
          public static IHostBuilder CreateHostBuilder(string[] args) =>
              Host.CreateDefaultBuilder(args)
                  .ConfigureWebHostDefaults(webBuilder =>
                  {
                      webBuilder.UseStartup<Startup>();
                  });
      }
      
      // Startup.cs
      using Microsoft.AspNetCore.Builder;
      using Microsoft.AspNetCore.Hosting;
      using Microsoft.Extensions.DependencyInjection;
      using Microsoft.Extensions.Hosting;
      
      public class Startup
      {
          public void ConfigureServices(IServiceCollection services)
          {
              services.AddControllers();
          }
      
          public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
          {
              if (env.IsDevelopment())
              {
                  app.UseDeveloperExceptionPage();
              }
      
              app.UseHttpsRedirection();
              app.UseRouting();
              app.UseAuthorization();
              app.UseEndpoints(endpoints =>
              {
                  endpoints.MapControllers();
              });
          }
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Product</strong>: Represents the data model for a product.</li>
              <li><strong>ProductController</strong>: Handles HTTP requests for product information.</li>
              <li><strong>Program</strong>: Entry point of the application.</li>
              <li><strong>Startup</strong>: Configures services and the app's request pipeline.</li>
            </ul>
      
            <h3>Inter-Process Communication (IPC)</h3>
            <p>Microservices often need to communicate with each other. Common communication methods include:</p>
            <ul>
              <li><strong>HTTP/REST:</strong> Using HTTP requests to communicate between services.</li>
              <li><strong>Message Queues:</strong> Using message brokers like RabbitMQ or Kafka to send messages between services.</li>
              <li><strong>gRPC:</strong> A high-performance RPC framework that can be used for communication between services.</li>
            </ul>
            <p>Example of HTTP/REST communication:</p>
            <pre><code class="language-csharp">
      // ServiceAController.cs
      using System.Net.Http;
      using System.Threading.Tasks;
      using Microsoft.AspNetCore.Mvc;
      
      [ApiController]
      [Route("api/[controller]")]
      public class ServiceAController : ControllerBase
      {
          private readonly HttpClient _httpClient;
      
          public ServiceAController(HttpClient httpClient)
          {
              _httpClient = httpClient;
          }
      
          [HttpGet("call-service-b")]
          public async Task<IActionResult> CallServiceB()
          {
              var response = await _httpClient.GetAsync("https://localhost:5001/api/serviceb");
              var content = await response.Content.ReadAsStringAsync();
              return Ok(content);
          }
      }
      
      // Startup.cs
      public class Startup
      {
          public void ConfigureServices(IServiceCollection services)
          {
              services.AddHttpClient();
              services.AddControllers();
          }
      
          // Other configurations
      }
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>HttpClient</strong>: Used to make HTTP requests to other services.</li>
              <li><strong>ServiceAController</strong>: Demonstrates how to call another microservice using HttpClient.</li>
              <li><strong>services.AddHttpClient();</strong>: Registers HttpClient for dependency injection.</li>
            </ul>
      
            <h3>Assignment 1: Creating a Simple Microservice</h3>
            <p>Create a CustomerService microservice that manages customer information. Implement CRUD operations and expose them through a REST API.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // Models/Customer.cs
      public class Customer
      {
          public int Id { get; set; }
          public string Name { get; set; }
          public string Email { get; set; }
      }
      
      // Controllers/CustomerController.cs
      using Microsoft.AspNetCore.Mvc;
      using System.Collections.Generic;
      
      [ApiController]
      [Route("api/[controller]")]
      public class CustomerController : ControllerBase
      {
          private static List<Customer> customers = new List<Customer>
          {
              new Customer { Id = 1, Name = "John Doe", Email = "john@example.com" },
              new Customer { Id = 2, Name = "Jane Smith", Email = "jane@example.com" }
          };
      
          [HttpGet]
          public IEnumerable<Customer> Get()
          {
              return customers;
          }
      
          [HttpGet("{id}")]
          public ActionResult<Customer> Get(int id)
          {
              var customer = customers.Find(c => c.Id == id);
              if (customer == null)
                  return NotFound();
              return customer;
          }
      
          [HttpPost]
          public ActionResult<Customer> Post(Customer customer)
          {
              customer.Id = customers.Count + 1;
              customers.Add(customer);
              return CreatedAtAction(nameof(Get), new { id = customer.Id }, customer);
          }
      
          [HttpPut("{id}")]
          public IActionResult Put(int id, Customer updatedCustomer)
          {
              var customer = customers.Find(c => c.Id == id);
              if (customer == null)
                  return NotFound();
              customer.Name = updatedCustomer.Name;
              customer.Email = updatedCustomer.Email;
              return NoContent();
          }
      
          [HttpDelete("{id}")]
          public IActionResult Delete(int id)
          {
              var customer = customers.Find(c => c.Id == id);
              if (customer == null)
                  return NotFound();
              customers.Remove(customer);
              return NoContent();
          }
      }
      
      // Program.cs and Startup.cs
      // Same as the ProductService example
            </code></pre>
      
            <h3>Assignment 2: Implementing Inter-Process Communication</h3>
            <p>Create a second microservice named OrderService. Implement a method in CustomerService that calls OrderService to get orders for a customer using HTTP/REST communication.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // OrderService/Models/Order.cs
      public class Order
      {
          public int Id { get; set; }
          public int CustomerId { get; set; }
          public string Product { get; set; }
          public decimal Price { get; set; }
      }
      
      // OrderService/Controllers/OrderController.cs
      using Microsoft.AspNetCore.Mvc;
      using System.Collections.Generic;
      
      [ApiController]
      [Route("api/[controller]")]
      public class OrderController : ControllerBase
      {
          private static List<Order> orders = new List<Order>
          {
              new Order { Id = 1, CustomerId = 1, Product = "Product A", Price = 100.0M },
              new Order { Id = 2, CustomerId = 2, Product = "Product B", Price = 200.0M }
          };
      
          [HttpGet("customer/{customerId}")]
          public IEnumerable<Order> GetOrdersByCustomer(int customerId)
          {
              return orders.FindAll(o => o.CustomerId == customerId);
          }
      }
      
      // CustomerService/Controllers/CustomerController.cs
      using System.Net.Http;
      using System.Threading.Tasks;
      using Microsoft.AspNetCore.Mvc;
      
      [ApiController]
      [Route("api/[controller]")]
      public class CustomerController : ControllerBase
      {
          private static List<Customer> customers = new List<Customer>
          {
              new Customer { Id = 1, Name = "John Doe", Email = "john@example.com" },
              new Customer { Id = 2, Name = "Jane Smith", Email = "jane@example.com" }
          };
      
          private readonly HttpClient _httpClient;
      
          public CustomerController(HttpClient httpClient)
          {
              _httpClient = httpClient;
          }
      
          [HttpGet]
          public IEnumerable<Customer> Get()
          {
              return customers;
          }
      
          [HttpGet("{id}")]
          public async Task<ActionResult<Customer>> Get(int id)
          {
              var customer = customers.Find(c => c.Id == id);
              if (customer == null)
                  return NotFound();
      
              var ordersResponse = await _httpClient.GetAsync($"https://localhost:5001/api/order/customer/{id}");
              var orders = await ordersResponse.Content.ReadAsAsync<IEnumerable<Order>>();
      
              // Add orders to the customer or process as needed
              customer.Orders = orders.ToList();
      
              return customer;
          }
      
          // Other CRUD methods...
      
          public class Customer
          {
              public int Id { get; set; }
              public string Name { get; set; }
              public string Email { get; set; }
              public List<Order> Orders { get; set; } = new List<Order>();
          }
      }
      
      // Program.cs and Startup.cs for both services
      // Same as the ProductService example
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Microservices Architecture offers a robust and scalable way to develop large applications. By breaking down the application into smaller, manageable services, each responsible for a specific functionality, you can achieve better modularity, flexibility, and ease of maintenance. Practice building and communicating between microservices to become proficient in this architecture style.</p>
          </section>
        `
      },
      
      {
        id: 'deployment',
        title: 'Deployment',
        content: `
          <section id="deployment">
            <h2>Deployment</h2>
      
            <h3>Introduction</h3>
            <p>Deployment refers to the process of making a software application available for use in its intended environment. This can range from deploying a simple web application to a cloud platform, to setting up complex microservices architectures. Proper deployment practices ensure that applications run efficiently, are scalable, and maintainable.</p>
      
            <h3>Types of Deployment</h3>
            <ul>
              <li><strong>Manual Deployment:</strong> The process of manually transferring files and configuring environments.</li>
              <li><strong>Automated Deployment:</strong> Utilizing scripts and tools to automate the deployment process.</li>
              <li><strong>Continuous Deployment (CD):</strong> Automatically deploying every code change that passes automated tests to production.</li>
              <li><strong>Blue-Green Deployment:</strong> Reducing downtime and risk by running two identical production environments.</li>
              <li><strong>Canary Deployment:</strong> Gradually rolling out updates to a small subset of users before a full release.</li>
            </ul>
      
            <h3>Deploying a .NET Core Application to Azure</h3>
            <p>Azure is a cloud computing service created by Microsoft. Here's how you can deploy a .NET Core web application to Azure:</p>
            <pre><code class="language-csharp">
      // Step 1: Create a .NET Core Web Application
      dotnet new webapp -o MyWebApp
      cd MyWebApp
      
      // Step 2: Create a Resource Group in Azure
      az group create --name MyResourceGroup --location "East US"
      
      // Step 3: Create an App Service Plan
      az appservice plan create --name MyAppServicePlan --resource-group MyResourceGroup --sku B1 --is-linux
      
      // Step 4: Create a Web App
      az webapp create --resource-group MyResourceGroup --plan MyAppServicePlan --name MyUniqueAppName --runtime "DOTNETCORE|3.1"
      
      // Step 5: Deploy the Web App to Azure
      dotnet publish --configuration Release
      az webapp deploy --resource-group MyResourceGroup --name MyUniqueAppName --src-path ./bin/Release/netcoreapp3.1/publish --type zip
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>dotnet new webapp</strong>: Creates a new .NET Core web application.</li>
              <li><strong>az group create</strong>: Creates a resource group in Azure.</li>
              <li><strong>az appservice plan create</strong>: Creates an App Service Plan in Azure.</li>
              <li><strong>az webapp create</strong>: Creates a web app in Azure.</li>
              <li><strong>dotnet publish</strong>: Publishes the web application.</li>
              <li><strong>az webapp deploy</strong>: Deploys the published web application to Azure.</li>
            </ul>
      
            <h3>Dockerizing an Application</h3>
            <p>Docker is a platform that allows you to package applications into containers, making them portable and consistent across different environments. Here's how to Dockerize a .NET Core application:</p>
            <pre><code class="language-csharp">
      // Step 1: Create a Dockerfile
      // Dockerfile
      FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
      WORKDIR /app
      EXPOSE 80
      
      FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
      WORKDIR /src
      COPY ["MyWebApp/MyWebApp.csproj", "MyWebApp/"]
      RUN dotnet restore "MyWebApp/MyWebApp.csproj"
      COPY . .
      WORKDIR "/src/MyWebApp"
      RUN dotnet build "MyWebApp.csproj" -c Release -o /app/build
      
      FROM build AS publish
      RUN dotnet publish "MyWebApp.csproj" -c Release -o /app/publish
      
      FROM base AS final
      WORKDIR /app
      COPY --from=publish /app/publish .
      ENTRYPOINT ["dotnet", "MyWebApp.dll"]
      
      // Step 2: Build the Docker Image
      docker build -t mywebapp:latest .
      
      // Step 3: Run the Docker Container
      docker run -d -p 8080:80 --name mywebappcontainer mywebapp:latest
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Dockerfile</strong>: Defines the instructions to create the Docker image.</li>
              <li><strong>docker build</strong>: Builds a Docker image from the Dockerfile.</li>
              <li><strong>docker run</strong>: Runs a container from the Docker image.</li>
            </ul>
      
            <h3>Continuous Deployment with GitHub Actions</h3>
            <p>GitHub Actions allows you to automate workflows, including deployment. Here's an example of setting up continuous deployment for a .NET Core application:</p>
            <pre><code class="language-csharp">
      # .github/workflows/ci-cd.yml
      name: CI/CD
      
      on:
        push:
          branches:
            - main
      
      jobs:
        build:
          runs-on: ubuntu-latest
      
          steps:
          - uses: actions/checkout@v2
          - name: Set up .NET
            uses: actions/setup-dotnet@v1
            with:
              dotnet-version: '5.0.x'
          - name: Build
            run: dotnet build --configuration Release
          - name: Test
            run: dotnet test --no-build --verbosity normal
      
        deploy:
          runs-on: ubuntu-latest
          needs: build
      
          steps:
          - uses: actions/checkout@v2
          - name: Set up .NET
            uses: actions/setup-dotnet@v1
            with:
              dotnet-version: '5.0.x'
          - name: Publish
            run: dotnet publish --configuration Release --output ./publish
          - name: Deploy to Azure Web App
            uses: azure/webapps-deploy@v2
            with:
              app-name: 'MyUniqueAppName'
              slot-name: 'production'
              publish-profile: \${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
              package: './publish'
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>on: push:</strong>: Triggers the workflow on pushes to the main branch.</li>
              <li><strong>actions/checkout@v2</strong>: Checks out the repository's code.</li>
              <li><strong>actions/setup-dotnet@v1</strong>: Sets up .NET on the runner.</li>
              <li><strong>dotnet build</strong>: Builds the application.</li>
              <li><strong>dotnet test</strong>: Runs tests.</li>
              <li><strong>dotnet publish</strong>: Publishes the application.</li>
              <li><strong>azure/webapps-deploy@v2</strong>: Deploys the application to Azure Web Apps.</li>
            </ul>
      
            <h3>Assignment 1: Deploy a .NET Core Application to Heroku</h3>
            <p>Create and deploy a simple .NET Core web application to Heroku. Use the Heroku CLI to create an app, set up the necessary buildpacks, and deploy the application.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // Step 1: Create a .NET Core Web Application
      dotnet new webapp -o MyHerokuApp
      cd MyHerokuApp
      
      // Step 2: Create a Procfile
      // Procfile
      web: dotnet MyHerokuApp.dll
      
      // Step 3: Initialize a Git Repository and Commit Code
      git init
      git add .
      git commit -m "Initial commit"
      
      // Step 4: Create a Heroku App
      heroku create my-heroku-app
      
      // Step 5: Set Buildpacks and Deploy
      heroku buildpacks:set heroku/dotnet
      git push heroku main
            </code></pre>
      
            <h3>Assignment 2: Dockerize and Deploy to AWS</h3>
            <p>Dockerize a .NET Core application and deploy it to AWS Elastic Beanstalk. Use the AWS CLI to create an Elastic Beanstalk environment and deploy the Docker image.</p>
            <h4>Solution:</h4>
            <pre><code class="language-csharp">
      // Step 1: Create a Dockerfile
      // Dockerfile
      FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
      WORKDIR /app
      EXPOSE 80
      
      FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
      WORKDIR /src
      COPY ["MyWebApp/MyWebApp.csproj", "MyWebApp/"]
      RUN dotnet restore "MyWebApp/MyWebApp.csproj"
      COPY . .
      WORKDIR "/src/MyWebApp"
      RUN dotnet build "MyWebApp.csproj" -c Release -o /app/build
      
      FROM build AS publish
      RUN dotnet publish "MyWebApp.csproj" -c Release -o /app/publish
      
      FROM base AS final
      WORKDIR /app
      COPY --from=publish /app/publish .
      ENTRYPOINT ["dotnet", "MyWebApp.dll"]
      
      // Step 2: Initialize Elastic Beanstalk
      eb init -p docker my-aws-app
      
      // Step 3: Create an Elastic Beanstalk Environment
      eb create my-env
      
      // Step 4: Deploy the Docker Image
      eb deploy
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Deployment is a critical phase in the software development lifecycle. It ensures that applications are available for users and running efficiently. Understanding different deployment strategies and tools can help you choose the best approach for your applications. Practice deploying applications to various environments to gain proficiency in this essential skill.</p>
          </section>
        `
      },
      
    
];
const CsharpCourse = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeTab, setActiveTab] = useState('setup');
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
          const contentParts = section.content.split(/(<pre><code class="language-csharp">[\s\S]*?<\/code><\/pre>)/g);
    
          return (
            <div key={section.id}>
              {contentParts.map((part, index) => {
                if (part.startsWith('<pre><code class="language-csharp">')) {
                  const codeContent = part.match(/<code class="language-csharp">([\s\S]*?)<\/code>/)[1];
                  return (
                    <SyntaxHighlighter key={index} language="csharp" style={darcula}>
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
                {subSection.content.split(/(<pre><code class="language-csharp">[\s\S]*?<\/code><\/pre>)/g).map((part, index) => {
                  if (part.startsWith('<pre><code class="language-csharp">')) {
                    const codeContent = part.match(/<code class="language-csharp">([\s\S]*?)<\/code>/)[1];
                    return (
                      <SyntaxHighlighter key={index} language="csharp" style={darcula}>
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
        <div className="csharp-introduction">
  <h2 className="text-3xl font-bold mb-6">Introduction to C#</h2>
  <p className="mb-4">C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by Microsoft. It's part of the .NET framework and is widely used for developing Windows applications, web services, and games.</p>
  
  <h3 className="text-2xl font-semibold mb-4">Key Features of C#:</h3>
  <ul className="list-disc list-inside mb-6">
    <li>Strong typing and object-oriented programming</li>
    <li>Cross-platform development with .NET Core</li>
    <li>Large ecosystem and community support</li>
    <li>Integrated with Visual Studio IDE</li>
    <li>Support for functional programming concepts</li>
    <li>Extensive standard library and third-party packages</li>
  </ul>

  <Tabs value={activeTab} onValueChange={setActiveTab}>
    <TabsList className="grid w-full grid-cols-3">
      <TabsTrigger value="setup">Environment Setup</TabsTrigger>
      <TabsTrigger value="usage">Using IDEs</TabsTrigger>
      <TabsTrigger value="hello-world">Hello World</TabsTrigger>
    </TabsList>
    
    <TabsContent value="setup">
      <h3 className="text-2xl font-semibold mb-4">Setting Up Your C# Development Environment</h3>
      <p className="mb-4">To start developing with C#, you'll need to install the .NET SDK and an IDE. Here are the steps:</p>
      
      <ol className="list-decimal list-inside ml-4 space-y-2">
        <li>Visit the <a href="https://dotnet.microsoft.com/download" className="text-blue-600 hover:underline">.NET download page</a>.</li>
        <li>Download and install the .NET SDK for your operating system.</li>
        <li>Verify the installation by opening a command prompt and typing: <code>dotnet --version</code></li>
        <li>Install an IDE (see "Using IDEs" tab for options).</li>
      </ol>
    </TabsContent>
    
    <TabsContent value="usage">
      <h3 className="text-2xl font-semibold mb-4">Using IDEs for C# Development</h3>
      <p className="mb-4">While you can write C# code in any text editor, using an IDE can greatly enhance your productivity. Here are some popular IDEs for C# development:</p>
      
      <h4 className="text-xl font-semibold mt-4">Visual Studio:</h4>
      <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
        <li>Download and install Visual Studio from the <a href="https://visualstudio.microsoft.com/downloads/" className="text-blue-600 hover:underline">official website</a>.</li>
        <li>During installation, select the ".NET desktop development" workload.</li>
        <li>Launch Visual Studio and create a new C# project.</li>
      </ul>

      <h4 className="text-xl font-semibold mt-4">Visual Studio Code:</h4>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>Download and install VS Code from the <a href="https://code.visualstudio.com/download" className="text-blue-600 hover:underline">official website</a>.</li>
        <li>Install the C# extension from the VS Code marketplace.</li>
        <li>Open a folder containing your C# project in VS Code.</li>
        <li>Start coding in C#!</li>
      </ul>
    </TabsContent>
    
    <TabsContent value="hello-world">
      <h3 className="text-2xl font-semibold mb-4">Your First C# Program: Hello World</h3>
      <p className="mb-4">Let's write a simple "Hello World" program in C#:</p>
      
      <Button 
        onClick={() => setShowCode(!showCode)}
        className="mb-4"
      >
        <Code className="mr-2 h-4 w-4" /> {showCode ? "Hide" : "Show"} Code
      </Button>
      
      {showCode && (
        <SyntaxHighlighter language="csharp" style={darcula}>
          {`using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, C# World!");
    }
}`}
        </SyntaxHighlighter>
      )}
      
      <h4 className="text-xl font-semibold mt-6">Understanding the Code:</h4>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li><code>using System;</code>: Imports the System namespace.</li>
        <li><code>class Program</code>: Defines the main class of our program.</li>
        <li><code>static void Main()</code>: The entry point of our C# program.</li>
        <li><code>Console.WriteLine()</code>: Outputs text to the console.</li>
      </ul>
      
      <p className="mt-4">This simple program demonstrates several key features of C#:</p>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>C# uses namespaces to organize code.</li>
        <li>Programs are structured into classes and methods.</li>
        <li>The <code>Main()</code> method is the entry point of a C# console application.</li>
        <li>C# is a statically-typed language, but types can often be inferred.</li>
      </ul>
    </TabsContent>
  </Tabs>
</div>
);
};
    return (
      <div className="csharp-course">
        <Helmet>
        <title>Learn C# Programming - Comprehensive Guide</title>
        <meta name="description" content="Learn C# programming with our comprehensive guide. From basics to advanced topics, become proficient in C# with practical projects and real-world applications." />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Course",
              "name": "Learn C# Programming",
              "description": "Comprehensive guide to C# programming with practical projects.",
              "provider": {
                "@type": "Organization",
                "name": "U-Learn Tech",
                "sameAs": "http://www.u-learntech.com"
              }
            }
          `}
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
    );
  };
  
export default CsharpCourse;
