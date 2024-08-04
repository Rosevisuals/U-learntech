import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Prism as SyntaxHighlighter  } from 'react-syntax-highlighter';
import customTheme from '../customSyntaxTheme';
import { ArrowUp, Menu, X } from 'lucide-react';
import './Jv.css';

const sections = [
    {
      id: 'introduction',
      title: 'Introduction to Java',
      content: `
        <section id="introduction">
          <h2>Introduction to Java</h2>
          <p>Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA).</p>
          <h3>History of Java</h3>
          <p>Java was developed by James Gosling at Sun Microsystems and released in 1995 as a core component of Sun Microsystems' Java platform.</p>
          <h3>Features of Java</h3>
          <ul>
            <li>Platform Independent</li>
            <li>Object-Oriented</li>
            <li>Simple and Secure</li>
            <li>Robust and Scalable</li>
          </ul>
          <h3>Real-life Applications of Java</h3>
          <p>Java is used in a wide variety of applications, from mobile apps (Android) to web servers, application servers, and large-scale enterprise applications.</p>
          <h3>Getting Started with Java IDEs</h3>
          <p>To start developing in Java, you need to install the Java Development Kit (JDK) and an Integrated Development Environment (IDE) like IntelliJ IDEA, Eclipse, or NetBeans.</p>
          <h4>Installing and Configuring IntelliJ IDEA</h4>
          <ul>
            <li>Download IntelliJ IDEA from the <a href="https://www.jetbrains.com/idea/download/">official website</a>.</li>
            <li>Install the software by following the setup instructions.</li>
            <li>Configure the JDK: Go to File > Project Structure > Project, and set the Project SDK to the JDK path.</li>
          </ul>
          <h4>Installing and Configuring Eclipse</h4>
          <ul>
            <li>Download Eclipse from the <a href="https://www.eclipse.org/downloads/">official website</a>.</li>
            <li>Install the software by following the setup instructions.</li>
            <li>Configure the JDK: Go to Window > Preferences > Java > Installed JREs, and add the JDK path.</li>
          </ul>
          <h4>Installing and Configuring NetBeans</h4>
          <ul>
            <li>Download NetBeans from the <a href="https://netbeans.apache.org/download/index.html">official website</a>.</li>
            <li>Install the software by following the setup instructions.</li>
            <li>Configure the JDK: Go to Tools > Java Platforms, and add the JDK path.</li>
          </ul>
        </section>`
    },
    {
        id: 'java-basics',
        title: 'Java Basics',
        content: `
          <section id="java-basics">
            <h2>Java Basics</h2>
            
            <h3>Setting up the Java Development Environment</h3>
            <p>To start developing in Java, you need to install the Java Development Kit (JDK) and an Integrated Development Environment (IDE) like IntelliJ IDEA, Eclipse, or NetBeans.</p>
            <ol>
              <li>Download and install the latest version of JDK from the official Oracle website.</li>
              <li>Set up the JAVA_HOME environment variable to point to your JDK installation directory.</li>
              <li>Add the JDK's bin directory to your system's PATH variable.</li>
              <li>Download and install an IDE of your choice (e.g., IntelliJ IDEA, Eclipse, or NetBeans).</li>
            </ol>
      
            <h3>Writing your First Java Program</h3>
            <p>Let's create a simple "Hello, World!" program to get started with Java:</p>
            <pre><code class="language-java">
      public class HelloWorld {
          public static void main(String[] args) {
              System.out.println("Hello, World!");
          }
      }
            </code></pre>
            <p>Save this code in a file named <code>HelloWorld.java</code>, compile it using <code>javac HelloWorld.java</code>, and run it using <code>java HelloWorld</code>.</p>
      
            <h3>Understanding the Java Program Structure</h3>
            <p>Every Java application must have a main method which is the entry point of the application. Let's break down the structure:</p>
            <ul>
              <li><code>public class HelloWorld</code>: Defines a public class named HelloWorld.</li>
              <li><code>public static void main(String[] args)</code>: The main method, which is the entry point of the program.</li>
              <li><code>System.out.println()</code>: A method to print text to the console.</li>
            </ul>
      
            <h3>Basic Syntax</h3>
            <p>Java syntax is largely influenced by C++. It uses curly braces {} to define blocks of code. Here are some key points:</p>
            <ul>
              <li>Java is case-sensitive.</li>
              <li>Each statement must end with a semicolon (;).</li>
              <li>Code blocks are defined by curly braces {}.</li>
              <li>Class names should start with an uppercase letter and follow CamelCase convention.</li>
              <li>Method names should start with a lowercase letter and follow camelCase convention.</li>
            </ul>
      
            <h3>Data Types and Variables</h3>
            <p>Java supports various data types:</p>
            <h4>Primitive Data Types:</h4>
            <ul>
              <li>byte: 8-bit signed two's complement integer</li>
              <li>short: 16-bit signed two's complement integer</li>
              <li>int: 32-bit signed two's complement integer</li>
              <li>long: 64-bit signed two's complement integer</li>
              <li>float: 32-bit IEEE 754 floating point</li>
              <li>double: 64-bit IEEE 754 floating point</li>
              <li>boolean: true or false</li>
              <li>char: 16-bit Unicode character</li>
            </ul>
            <h4>Non-Primitive Data Types:</h4>
            <ul>
              <li>String: Sequence of characters</li>
              <li>Arrays: Collection of similar data types</li>
              <li>Classes: User-defined data types</li>
            </ul>
            <pre><code class="language-java">
      // Example of primitive data types
      byte myByte = 127;
      short myShort = 32767;
      int myInt = 2147483647;
      long myLong = 9223372036854775807L;
      float myFloat = 3.14f;
      double myDouble = 3.14159265359;
      boolean isJavaFun = true;
      char myChar = 'A';
      
      // Example of non-primitive data types
      String name = "John Doe";
      int[] numbers = {1, 2, 3, 4, 5};
            </code></pre>
      
            <h3>Comments in Java</h3>
            <p>Comments are used to explain code and make it more readable. Java supports three types of comments:</p>
            <ul>
              <li>Single-line comments: <code>// This is a single-line comment</code></li>
              <li>Multi-line comments: <code>/* This is a multi-line comment */</code></li>
              <li>Documentation comments: <code>/** This is a documentation comment */</code></li>
            </ul>
            <p>Documentation comments are used to generate documentation for Java code and are typically used before class or method declarations.</p>
      
            <h3>Typecasting</h3>
            <p>Typecasting is the process of converting one data type into another. There are two types of casting:</p>
            <ul>
              <li>Implicit Casting (Widening): Automatically done when converting a smaller type to a larger type size.</li>
              <li>Explicit Casting (Narrowing): Manually done when converting a larger type to a smaller size type.</li>
            </ul>
            <pre><code class="language-java">
      // Implicit Casting
      int myInt = 9;
      double myDouble = myInt; // Automatic casting: int to double
      
      // Explicit Casting
      double myDouble = 9.78;
      int myInt = (int) myDouble; // Manual casting: double to int
            </code></pre>
      
            <h3>Strings</h3>
            <p>Strings are used to store text and are immutable objects in Java. They can be created in two ways:</p>
            <pre><code class="language-java">
      // Using string literal
      String str1 = "Hello, World!";
      
      // Using new keyword
      String str2 = new String("Hello, World!");
      
      // String methods
      String text = "Java Programming";
      System.out.println(text.length()); // 17
      System.out.println(text.toUpperCase()); // JAVA PROGRAMMING
      System.out.println(text.substring(0, 4)); // Java
            </code></pre>
      
            <h3>Operators</h3>
            <p>Java provides a rich set of operators to manipulate variables:</p>
            <ul>
              <li>Arithmetic Operators: +, -, *, /, %, ++, --</li>
              <li>Relational Operators: ==, !=, >, <, >=, <=</li>
              <li>Logical Operators: &&, ||, !</li>
              <li>Assignment Operators: =, +=, -=, *=, /=, %=</li>
              <li>Bitwise Operators: &, |, ^, ~, <<, >>, >>></li>
            </ul>
            <pre><code class="language-java">
      int a = 10, b = 5;
      System.out.println(a + b); // 15
      System.out.println(a > b); // true
      System.out.println((a > b) && (a < 20)); // true
      a += 5; // a is now 15
      System.out.println(a & b); // 5 (bitwise AND)
            </code></pre>
      
            <h3>Control Flow Statements</h3>
            <p>Java provides several control flow statements to control the flow of execution in a program:</p>
            <h4>1. if-else statement</h4>
            <pre><code class="language-java">
      int number = 10;
      if (number > 0) {
          System.out.println("Positive number");
      } else if (number < 0) {
          System.out.println("Negative number");
      } else {
          System.out.println("Zero");
      }
            </code></pre>
            <h4>2. switch statement</h4>
            <pre><code class="language-java">
      int day = 4;
      switch (day) {
          case 1:
              System.out.println("Monday");
              break;
          case 2:
              System.out.println("Tuesday");
              break;
          // ... other cases ...
          default:
              System.out.println("Invalid day");
      }
            </code></pre>
            <h4>3. for loop</h4>
            <pre><code class="language-java">
      for (int i = 0; i < 5; i++) {
          System.out.println(i);
      }
            </code></pre>
            <h4>4. while loop</h4>
            <pre><code class="language-java">
      int i = 0;
      while (i < 5) {
          System.out.println(i);
          i++;
      }
            </code></pre>
            <h4>5. do-while loop</h4>
            <pre><code class="language-java">
      int i = 0;
      do {
          System.out.println(i);
          i++;
      } while (i < 5);
            </code></pre>
      
            <h3>Assignment Questions</h3>
            <p>1. Write a Java program to declare an integer variable, assign it a value, and print the value.</p>
            <pre><code class="language-java">
      public class Assignment1 {
          public static void main(String[] args) {
              int number = 25;
              System.out.println("The value of the number is: " + number);
          }
      }
            </code></pre>
            <p>2. Write a Java program to perform arithmetic operations (addition, subtraction, multiplication, division) on two variables.</p>
            <pre><code class="language-java">
      public class Assignment2 {
          public static void main(String[] args) {
              int num1 = 10;
              int num2 = 5;
              System.out.println("Addition: " + (num1 + num2));
              System.out.println("Subtraction: " + (num1 - num2));
              System.out.println("Multiplication: " + (num1 * num2));
              System.out.println("Division: " + (num1 / num2));
          }
      }
            </code></pre>
            <p>3. Write a Java program that takes a number as input and prints whether it's positive, negative, or zero.</p>
            <pre><code class="language-java">
      import java.util.Scanner;
      
      public class Assignment3 {
          public static void main(String[] args) {
              Scanner scanner = new Scanner(System.in);
              System.out.print("Enter a number: ");
              int number = scanner.nextInt();
              
              if (number > 0) {
                  System.out.println("The number is positive.");
              } else if (number < 0) {
                  System.out.println("The number is negative.");
              } else {
                  System.out.println("The number is zero.");
              }
              
              scanner.close();
          }
      }
            </code></pre>
          </section>`
      },
      {
        id: 'control-flow-statements',
        title: 'Control Flow Statements',
        content: `
          <section id="control-flow-statements">
            <h2>Control Flow Statements</h2>
            
            <h3>Conditional Statements</h3>
            <p>Conditional statements allow your program to make decisions based on certain conditions. Java provides several types of conditional statements.</p>
            
            <h4>1. If Statement</h4>
            <p>The if statement is used to execute a block of code only if a specified condition is true.</p>
            <pre><code class="language-java">
      if (condition) {
          // code to be executed if condition is true
      }
            </code></pre>
            <p>Example:</p>
            <pre><code class="language-java">
      int age = 18;
      if (age >= 18) {
          System.out.println("You are eligible to vote.");
      }
            </code></pre>
            
            <h4>2. If-Else Statement</h4>
            <p>The if-else statement allows you to execute one block of code if the condition is true and another if it's false.</p>
            <pre><code class="language-java">
      if (condition) {
          // code to be executed if condition is true
      } else {
          // code to be executed if condition is false
      }
            </code></pre>
            <p>Example:</p>
            <pre><code class="language-java">
      int number = 10;
      if (number % 2 == 0) {
          System.out.println(number + " is even.");
      } else {
          System.out.println(number + " is odd.");
      }
            </code></pre>
            
            <h4>3. If-Else-If Ladder</h4>
            <p>The if-else-if ladder allows you to test multiple conditions.</p>
            <pre><code class="language-java">
      if (condition1) {
          // code to be executed if condition1 is true
      } else if (condition2) {
          // code to be executed if condition2 is true
      } else {
          // code to be executed if all conditions are false
      }
            </code></pre>
            <p>Example:</p>
            <pre><code class="language-java">
      int score = 75;
      if (score >= 90) {
          System.out.println("Grade: A");
      } else if (score >= 80) {
          System.out.println("Grade: B");
      } else if (score >= 70) {
          System.out.println("Grade: C");
      } else {
          System.out.println("Grade: F");
      }
            </code></pre>
            
            <h3>Switch Statements</h3>
            <p>The switch statement is a multi-way branch statement that provides an easy way to dispatch execution to different parts of code based on the value of an expression.</p>
            <pre><code class="language-java">
      switch (expression) {
          case value1:
              // code block
              break;
          case value2:
              // code block
              break;
          // more cases
          default:
              // code block
      }
            </code></pre>
            <p>Example:</p>
            <pre><code class="language-java">
      int dayOfWeek = 3;
      switch (dayOfWeek) {
          case 1:
              System.out.println("Monday");
              break;
          case 2:
              System.out.println("Tuesday");
              break;
          case 3:
              System.out.println("Wednesday");
              break;
          case 4:
              System.out.println("Thursday");
              break;
          case 5:
              System.out.println("Friday");
              break;
          case 6:
          case 7:
              System.out.println("Weekend");
              break;
          default:
              System.out.println("Invalid day");
      }
            </code></pre>
            
            <h3>Looping Statements</h3>
            <p>Loops are used to execute a block of code multiple times. Java provides several types of loops.</p>
            
            <h4>1. For Loop</h4>
            <p>The for loop is used when you know in advance how many times you want to execute a statement or a block of statements.</p>
            <pre><code class="language-java">
      for (initialization; condition; update) {
          // code block to be executed
      }
            </code></pre>
            <p>Example:</p>
            <pre><code class="language-java">
      for (int i = 0; i < 5; i++) {
          System.out.println("Iteration: " + i);
      }
            </code></pre>
            
            <h4>2. While Loop</h4>
            <p>The while loop is used to execute a block of statements repeatedly until a given condition is true.</p>
            <pre><code class="language-java">
      while (condition) {
          // code block to be executed
      }
            </code></pre>
            <p>Example:</p>
            <pre><code class="language-java">
      int count = 0;
      while (count < 5) {
          System.out.println("Count: " + count);
          count++;
      }
            </code></pre>
            
            <h4>3. Do-While Loop</h4>
            <p>The do-while loop is similar to the while loop, but it executes the code block at least once before checking the condition.</p>
            <pre><code class="language-java">
      do {
          // code block to be executed
      } while (condition);
            </code></pre>
            <p>Example:</p>
            <pre><code class="language-java">
      int i = 0;
      do {
          System.out.println("i: " + i);
          i++;
      } while (i < 5);
            </code></pre>
            
            <h4>4. Enhanced For Loop (For-Each Loop)</h4>
            <p>The enhanced for loop is used to iterate through elements of arrays or collections.</p>
            <pre><code class="language-java">
      for (dataType item : collection) {
          // code block to be executed
      }
            </code></pre>
            <p>Example:</p>
            <pre><code class="language-java">
      int[] numbers = {1, 2, 3, 4, 5};
      for (int num : numbers) {
          System.out.println("Number: " + num);
      }
            </code></pre>
            
            <h3>Break and Continue Statements</h3>
            <p>Break and continue statements are used to alter the flow of loops.</p>
            
            <h4>Break Statement</h4>
            <p>The break statement is used to exit a loop prematurely.</p>
            <pre><code class="language-java">
      for (int i = 0; i < 10; i++) {
          if (i == 5) {
              break;
          }
          System.out.println(i);
      }
            </code></pre>
            
            <h4>Continue Statement</h4>
            <p>The continue statement skips the rest of the current iteration and moves to the next iteration of the loop.</p>
            <pre><code class="language-java">
      for (int i = 0; i < 10; i++) {
          if (i % 2 == 0) {
              continue;
          }
          System.out.println(i);
      }
            </code></pre>
            
            <h3>Assignment Questions</h3>
            <p>1. Write a Java program to check if a number is positive, negative, or zero using if-else statements.</p>
            <pre><code class="language-java">
      public class Assignment1 {
          public static void main(String[] args) {
              int number = -10;
              if (number > 0) {
                  System.out.println("The number is positive.");
              } else if (number < 0) {
                  System.out.println("The number is negative.");
              } else {
                  System.out.println("The number is zero.");
              }
          }
      }
            </code></pre>
            
            <p>2. Write a Java program to print the first 10 natural numbers using a for loop.</p>
            <pre><code class="language-java">
      public class Assignment2 {
          public static void main(String[] args) {
              for (int i = 1; i <= 10; i++) {
                  System.out.println(i);
              }
          }
      }
            </code></pre>
            
            <p>3. Write a Java program that uses a switch statement to print the name of the month based on its number (1-12).</p>
            <pre><code class="language-java">
      public class Assignment3 {
          public static void main(String[] args) {
              int month = 8;
              switch (month) {
                  case 1:
                      System.out.println("January");
                      break;
                  case 2:
                      System.out.println("February");
                      break;
                  // ... (cases 3-11)
                  case 12:
                      System.out.println("December");
                      break;
                  default:
                      System.out.println("Invalid month");
              }
          }
      }
            </code></pre>
            
            <p>4. Write a Java program to find the sum of all even numbers between 1 and 100 using a while loop.</p>
            <pre><code class="language-java">
      public class Assignment4 {
          public static void main(String[] args) {
              int sum = 0;
              int number = 2;
              while (number <= 100) {
                  sum += number;
                  number += 2;
              }
              System.out.println("Sum of even numbers: " + sum);
          }
      }
            </code></pre>
            
            <p>5. Write a Java program to print the Fibonacci sequence up to a given number of terms using a do-while loop.</p>
            <pre><code class="language-java">
      public class Assignment5 {
          public static void main(String[] args) {
              int n = 10; // Number of terms
              int first = 0, second = 1, next;
              int count = 0;
              
              System.out.println("Fibonacci Sequence:");
              do {
                  System.out.print(first + " ");
                  next = first + second;
                  first = second;
                  second = next;
                  count++;
              } while (count < n);
          }
      }
            </code></pre>
            
            <p>6. Write a Java program that uses nested loops to print a pattern of asterisks in the shape of a right-angled triangle.</p>
            <pre><code class="language-java">
      public class Assignment6 {
          public static void main(String[] args) {
              int rows = 5;
              for (int i = 1; i <= rows; i++) {
                  for (int j = 1; j <= i; j++) {
                      System.out.print("* ");
                  }
                  System.out.println();
              }
          }
      }
            </code></pre>
          </section>`
      },
      {
        id: 'oop-in-java',
        title: 'Object-Oriented Programming in Java',
        content: `
          <section id="oop-in-java">
            <h2>Object-Oriented Programming (OOP) in Java</h2>
      
            <h3>Introduction to OOP Concepts</h3>
      <p>Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code.</p> 
      <p>OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them.</p>
      <p>This approach to programming is well-suited for programs that are large, complex, and actively updated or maintained.</p>

      <h3>1. Classes and Objects</h3>
      <p>In Java, a class is a blueprint for creating objects. An object is an instance of a class.</p>
      <h4>What are Classes?</h4>
      <p>Classes are fundamental building blocks in object-oriented programming. </p>
      <p>They serve as templates or blueprints that define the structure and behavior of objects. </p>
      <p>A class encapsulates data for the object and methods to manipulate that data.</p>
      <p> Think of a class as a custom data type that you define to model real-world entities or abstract concepts in your program.</p>

      <h4>Components of a Class</h4>
      <ul>
        <li><strong>Fields (Attributes):</strong> Variables that hold the data of the class.</li>
        <li><strong>Methods:</strong> Functions that define the behavior of the class.</li>
        <li><strong>Constructors:</strong> Special methods used to initialize objects of the class.</li>
        <li><strong>Access Modifiers:</strong> Keywords that define the visibility and accessibility of class members.</li>
      </ul>

      <h4>How are Classes Helpful?</h4>
      <p>Classes provide several benefits in software development:</p>
      <ul>
        <li><strong>Encapsulation:</strong> Classes allow you to bundle data and the methods that operate on that data. 
        <p>This helps in hiding the internal details of how an object works, promoting better organization and security of code.</p></li>
        <li><strong>Reusability:</strong> Once a class is defined, it can be used to create multiple objects. 
        <p>This reusability saves time and reduces redundancy in code.</p></li>
        <li><strong>Modularity:</strong> Classes enable you to break down complex problems into smaller, more manageable parts. 
        <p>Each class can represent a distinct component of your system.</p></li>
        <li><strong>Maintainability:</strong> By organizing code into classes, it becomes easier to maintain and update. 
        <p>Changes to one class don't necessarily affect others, allowing for more flexible code management.</p></li>
        <li><strong>Abstraction:</strong> Classes allow you to model complex systems by representing only the essential features of objects,
         hiding unnecessary details.</li>
      </ul>

      <h4>Uses for Developers</h4>
      <p>Developers use classes for various purposes in software development:</p>
      <ul>
        <li><strong>Modeling Real-World Entities:</strong> Classes can represent tangible objects (like a Car, Person, or Book) or abstract concepts (like a BankAccount or DatabaseConnection).</li>
        <li><strong>Creating Libraries and Frameworks:</strong> Developers can create reusable libraries of classes that other programmers can use in their projects.</li>
        <li><strong>Implementing Design Patterns:</strong> Many software design patterns rely on the use of classes to create flexible and maintainable code structures.</li>
        <li><strong>Building User Interfaces:</strong> In GUI programming, classes often represent different elements of the user interface.</li>
        <li><strong>Data Structures:</strong> Custom data structures can be implemented as classes, allowing for specialized data management.</li>
        <li><strong>Testing:</strong> Classes make it easier to write unit tests, as each class can be tested independently.</li>
        <li><strong>API Development:</strong> When creating APIs, classes are used to define the structure of the data and services provided.</li>
      </ul>

      <p>By mastering the concept of classes, developers can create more organized, efficient, and scalable code, leading to better software design and easier collaboration in team projects.</p>

      <p>Let's look at an example of a class in Java:</p>

      <pre><code class="language-java">
public class Dog {
    // Fields (attributes)
    String breed;
    int age;
    String color;

    // Constructor
    public Dog(String breed, int age, String color) {
        this.breed = breed;
        this.age = age;
        this.color = color;
    }

    // Methods (behaviors)
    public void bark() {
        System.out.println("Woof! Woof!");
    }

    public void displayInfo() {
        System.out.println("Breed: " + breed + ", Age: " + age + ", Color: " + color);
    }
}

// Creating and using an object
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("Labrador", 3, "Yellow");
        myDog.displayInfo();
        myDog.bark();
    }
}
      
public class Dog {
    // Fields (attributes)
    String breed;
    int age;
    String color;

    // Constructor
    public Dog(String breed, int age, String color) {
        this.breed = breed;
        this.age = age;
        this.color = color;
    }

    // Methods (behaviors)
    public void bark() {
        System.out.println("Woof! Woof!");
    }

    public void displayInfo() {
        System.out.println("Breed: " + breed + ", Age: " + age + ", Color: " + color);
    }
}

// Creating and using an object
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("Labrador", 3, "Yellow");
        myDog.displayInfo();
        myDog.bark();
    }
}
      </code></pre>

      <h3>2. Inheritance</h3>
      <p>Inheritance is a mechanism where a new class inherits properties and methods from an existing class. This promotes code reusability and establishes a relationship between classes.</p>
      <h4>What is Inheritance?</h4>
      <p>Inheritance is a fundamental concept in object-oriented programming that allows a new class (called a subclass or derived class) to be based on an existing class (called a superclass or base class). The subclass inherits fields and methods from the superclass, allowing for code reuse and the creation of hierarchical relationships between classes.</p>

      <h4>Key Concepts in Inheritance</h4>
      <ul>
        <li><strong>Superclass (Parent class):</strong> The class whose properties and methods are inherited.</li>
        <li><strong>Subclass (Child class):</strong> The class that inherits properties and methods from another class.</li>
        <li><strong>extends keyword:</strong> Used in Java to create a subclass.</li>
        <li><strong>super keyword:</strong> Used to call the superclass constructor or methods.</li>
        <li><strong>Method Overriding:</strong> Redefining a method in a subclass that is already defined in the superclass.</li>
      </ul>

      <h4>Types of Inheritance</h4>
      <ul>
        <li><strong>Single Inheritance:</strong> A subclass inherits from one superclass.</li>
        <li><strong>Multilevel Inheritance:</strong> A class inherits from a subclass, forming a chain.</li>
        <li><strong>Hierarchical Inheritance:</strong> Multiple classes inherit from a single superclass.</li>
        <li><strong>Multiple Inheritance:</strong> Not supported directly in Java for classes, but can be achieved through interfaces.</li>
      </ul>

      <h4>Benefits of Inheritance</h4>
      <ul>
        <li><strong>Code Reusability:</strong> Reduces redundancy by allowing common code to be written once in the superclass.</li>
        <li><strong>Extensibility:</strong> Easily extend the functionality of existing classes.</li>
        <li><strong>Hierarchical Classification:</strong> Organize classes into a hierarchy, reflecting their relationships.</li>
        <li><strong>Method Overriding:</strong> Allows subclasses to provide specific implementations of methods.</li>
        <li><strong>Polymorphism:</strong> Enables using a superclass reference to refer to a subclass object.</li>
      </ul>

      <h4>Considerations When Using Inheritance</h4>
      <ul>
        <li><strong>"Is-a" Relationship:</strong> Use inheritance when there's a clear "is-a" relationship between classes.</li>
        <li><strong>Avoid Deep Hierarchies:</strong> Too many levels of inheritance can lead to complex and hard-to-maintain code.</li>
        <li><strong>Composition vs. Inheritance:</strong> Sometimes composition (has-a relationship) is more appropriate than inheritance.</li>
        <li><strong>Access Modifiers:</strong> Be mindful of access modifiers to control what is inherited and what can be accessed.</li>
      </ul>

      <h4>Example of Inheritance</h4>
      <pre><code class="language-java">
class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }
}

class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    public void bark() {
        System.out.println(name + " is barking.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy");
        myDog.eat();  // Inherited method
        myDog.bark(); // Dog's own method
    }
}
      </code></pre>
<h4>Another Example of Inheritance</h4>
      <pre><code class="language-java">
class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }
}

class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    public void bark() {
        System.out.println(name + " is barking.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy");
        myDog.eat();  // Inherited method
        myDog.bark(); // Dog's own method
    }
}
      </code></pre>

      <h3>3. Polymorphism</h3>
      <p>Polymorphism allows objects of different classes to be treated as objects of a common superclass. It can be achieved through method overriding and method overloading.</p>
      <h4>What is Polymorphism?</h4>
      <p>Polymorphism, derived from Greek words meaning "many forms," is a core concept in object-oriented programming. It allows objects of different types to be treated as objects of a common base type. In essence, polymorphism enables a single interface to represent different underlying forms (data types or classes).</p>

      <h4>Types of Polymorphism in Java</h4>
      <ol>
        <li><strong>Runtime Polymorphism (Dynamic Method Dispatch):</strong>
          <ul>
            <li>Achieved through method overriding.</li>
            <li>The specific method to be called is determined at runtime based on the actual object type.</li>
          </ul>
        </li>
        <li><strong>Compile-time Polymorphism (Static Binding):</strong>
          <ul>
            <li>Achieved through method overloading.</li>
            <li>The specific method to be called is determined at compile time based on the method signature.</li>
          </ul>
        </li>
      </ol>

      <h4>How is Polymorphism Helpful?</h4>
      <p>Polymorphism provides several benefits in object-oriented programming:</p>
      <ul>
        <li><strong>Flexibility:</strong> It allows you to write more flexible and reusable code by treating objects of different classes uniformly.</li>
        <li><strong>Extensibility:</strong> New classes can be easily added to a system without modifying existing code, as long as they implement the necessary interfaces or extend the appropriate base classes.</li>
        <li><strong>Simplification:</strong> It simplifies code by allowing the use of a single interface to represent multiple types or classes.</li>
        <li><strong>Modularity:</strong> Polymorphism supports the creation of modular code, where different parts of a system can be developed and maintained independently.</li>
        <li><strong>Abstraction:</strong> It helps in creating abstract, high-level code that works with generalized types, promoting better design and easier maintenance.</li>
      </ul>

      <h4>Uses of Polymorphism for Developers</h4>
      <p>Developers use polymorphism in various ways to create more efficient, maintainable, and scalable code:</p>
      <ul>
        <li><strong>Creating Flexible APIs:</strong> Polymorphism allows developers to design APIs that can work with objects of multiple types, making them more versatile and easier to use.</li>
        <li><strong>Implementing Design Patterns:</strong> Many design patterns, such as Strategy, Observer, and Factory, rely heavily on polymorphism to create flexible and reusable code structures.</li>
        <li><strong>Building Extensible Frameworks:</strong> Polymorphism is crucial in creating frameworks that can be easily extended by other developers without modifying the core code.</li>
        <li><strong>Simplifying Complex Systems:</strong> By using polymorphism, developers can create simpler, more abstract interfaces to complex systems, hiding unnecessary details from the users of those systems.</li>
        <li><strong>Enabling Code Reuse:</strong> Polymorphism allows developers to write code that can work with objects of multiple types, reducing code duplication and promoting reuse.</li>
        <li><strong>Supporting Dependency Injection:</strong> Polymorphism is a key concept in implementing dependency injection, allowing for more modular and testable code.</li>
        <li><strong>Creating Plug-in Architectures:</strong> Polymorphism enables the creation of systems where new functionality can be "plugged in" without changing existing code, as long as it adheres to a defined interface.</li>
      </ul>

      <h4>Example of Polymorphism: Method Overriding (Runtime Polymorphism)</h4>
      <p>Here's an example demonstrating runtime polymorphism through method overriding:</p>

      <pre><code class="language-java">
class Animal {
    public void makeSound() {
        System.out.println("The animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        myDog.makeSound(); // Outputs: The dog barks
        myCat.makeSound(); // Outputs: The cat meows
    }
}
      </code></pre>

      <h4>Example of Polymorphism: Method Overloading (Compile-time Polymorphism)</h4>
      <p>Here's an example demonstrating compile-time polymorphism through method overloading:</p>

      <pre><code class="language-java">
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 10));       // Calls the first method
        System.out.println(calc.add(5.5, 10.5));   // Calls the second method
        System.out.println(calc.add(5, 10, 15));   // Calls the third method
    }
}
      </code></pre>

      <p>These examples illustrate how polymorphism allows for flexible and extensible code design. In the first example, we can treat different animal objects uniformly through their common superclass, while in the second example, we can use the same method name for different parameter types and counts.</p>

      
      <h4>Method Overriding</h4>
      <p>Method overriding is a feature in Java that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. It is a way of implementing runtime polymorphism.</p>

      <h5>What is Method Overriding?</h5>
      <p>Method overriding occurs when a subclass (child class) has a method with the same name, return type, and parameters as a method in its superclass (parent class). The overriding method in the subclass replaces the implementation of the method in the superclass for objects of the subclass.</p>

      <h5>How Method Overriding Works</h5>
      <ul>
        <li>The method in the subclass must have the same name, return type, and parameter list as the method in the superclass.</li>
        <li>The overriding method cannot have a more restrictive access modifier than the method being overridden.</li>
        <li>The overriding method may use the @Override annotation, which helps to catch errors at compile-time.</li>
        <li>Method overriding is resolved at runtime, not at compile time.</li>
      </ul>

      <h5>Benefits of Method Overriding</h5>
      <ul>
        <li><strong>Runtime Polymorphism:</strong> It allows Java to determine which method should be executed based on the type of the object at runtime.</li>
        <li><strong>Flexibility:</strong> Subclasses can provide their own specific implementations of inherited methods.</li>
        <li><strong>Code Reusability:</strong> It promotes the reuse of code from the superclass while allowing customization in subclasses.</li>
        <li><strong>Method Specialization:</strong> Subclasses can specialize the behavior of inherited methods to suit their specific needs.</li>
      </ul>

      <h5>Examples of Method Overriding</h5>

      <p>1. Basic Method Overriding:</p>
      <pre><code class="language-java">
class Animal {
    public void makeSound() {
        System.out.println("The animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        myDog.makeSound();  // Outputs: The dog barks
        myCat.makeSound();  // Outputs: The cat meows
    }
}
      </code></pre>

      <p>2. Method Overriding with super Keyword:</p>
      <pre><code class="language-java">
class Vehicle {
    public void start() {
        System.out.println("Vehicle is starting");
    }
}

class Car extends Vehicle {
    @Override
    public void start() {
        super.start();  // Call the superclass method
        System.out.println("Car is starting");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.start();
        // Outputs:
        // Vehicle is starting
        // Car is starting
    }
}
      </code></pre>

      <p>3. Method Overriding with Return Types:</p>
      <pre><code class="language-java">
class Shape {
    public double getArea() {
        return 0;
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public double getArea() {
        return length * width;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape circle = new Circle(5);
        Shape rectangle = new Rectangle(4, 5);
        System.out.println("Circle area: " + circle.getArea());
        System.out.println("Rectangle area: " + rectangle.getArea());
    }
}
      </code></pre>

      <h5>Common Pitfalls and Considerations</h5>
      <ul>
        <li><strong>Access Modifiers:</strong> The overriding method cannot have a more restrictive access modifier than the overridden method.</li>
        <li><strong>Final Methods:</strong> Methods declared as final cannot be overridden.</li>
        <li><strong>Static Methods:</strong> Static methods cannot be overridden, but they can be hidden by declaring a static method with the same signature in the subclass.</li>
        <li><strong>Overriding vs. Overloading:</strong> Don't confuse method overriding (same method signature in subclass) with method overloading (same method name, different parameters).</li>
      </ul>

      <h5>Practice Exercise</h5>
      <p>Create a class hierarchy for different types of employees in a company. Start with a base class 'Employee' with a method 'calculateSalary()'. Create subclasses for different types of employees (e.g., 'Manager', 'Developer', 'Salesperson') and override the 'calculateSalary()' method in each subclass to provide a specific implementation based on their salary structure. Include a main method to demonstrate the use of these classes.</p>


      <h4>Method Overloading</h4>
      <p>Method overloading is a feature in Java that allows a class to have multiple methods with the same name but different parameters. It is a way of implementing compile-time polymorphism.</p>

      <h5>What is Method Overloading?</h5>
      <p>Method overloading occurs when a class has multiple methods with the same name but different parameter lists. The compiler determines which method to call based on the number, types, and order of the arguments passed to the method.</p>

      <h5>How Method Overloading Works</h5>
      <ul>
        <li>Methods must have the same name but different parameter lists.</li>
        <li>Return type alone is not sufficient to distinguish overloaded methods.</li>
        <li>The compiler determines which method to call based on the arguments provided at compile time.</li>
      </ul>

      <h5>Benefits of Method Overloading</h5>
      <ul>
        <li><strong>Improved Readability:</strong> Multiple methods can have the same name, making the code more intuitive and easier to understand.</li>
        <li><strong>Flexibility:</strong> It allows methods to handle different types or numbers of parameters while keeping a consistent method name.</li>
        <li><strong>Reduced Complexity:</strong> Instead of creating multiple method names for similar operations, you can use a single name.</li>
      </ul>

      <h5>Examples of Method Overloading</h5>

      <p>1. Basic Method Overloading:</p>
      <pre><code class="language-java">
public class Calculator {
    // Method with two integer parameters
    public int add(int a, int b) {
        return a + b;
    }

    // Method with three integer parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // Method with two double parameters
    public double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 10));        // Calls add(int a, int b)
        System.out.println(calc.add(5, 10, 15));    // Calls add(int a, int b, int c)
        System.out.println(calc.add(5.5, 10.5));    // Calls add(double a, double b)
    }
}
      </code></pre>

      <p>2. Overloading with Different Data Types:</p>
      <pre><code class="language-java">
public class Printer {
    public void print(int number) {
        System.out.println("Printing integer: " + number);
    }

    public void print(double number) {
        System.out.println("Printing double: " + number);
    }

    public void print(String text) {
        System.out.println("Printing string: " + text);
    }

    public static void main(String[] args) {
        Printer printer = new Printer();
        printer.print(100);        // Calls print(int)
        printer.print(10.5);       // Calls print(double)
        printer.print("Hello");    // Calls print(String)
    }
}
      </code></pre>

      <p>3. Overloading with Different Order of Parameters:</p>
      <pre><code class="language-java">
public class MathOperations {
    public int operate(int a, double b) {
        return (int)(a + b);
    }

    public double operate(double a, int b) {
        return a - b;
    }

    public static void main(String[] args) {
        MathOperations math = new MathOperations();
        System.out.println(math.operate(5, 2.5));    // Calls operate(int, double)
        System.out.println(math.operate(5.5, 2));    // Calls operate(double, int)
    }
}
      </code></pre>

      <h5>Common Pitfalls and Considerations</h5>
      <ul>
        <li><strong>Ambiguity:</strong> Be cautious of creating ambiguous method calls. The compiler will throw an error if it can't determine which method to call.</li>
        <li><strong>Type Promotion:</strong> Java will automatically promote types in some cases (e.g., int to long, or int to double) which can affect method selection.</li>
        <li><strong>Overloading vs. Overriding:</strong> Don't confuse method overloading (same method name, different parameters) with method overriding (same method signature in a subclass).</li>
      </ul>

      <h5>Practice Exercise</h5>
      <p>Create a class called StringManipulator with the following overloaded methods:</p>
      <ul>
        <li>A method 'concatenate' that takes two strings and returns their concatenation.</li>
        <li>Another 'concatenate' method that takes three strings and returns their concatenation.</li>
        <li>A method 'repeat' that takes a string and an integer n, and returns the string repeated n times.</li>
        <li>Another 'repeat' method that takes a char and an integer n, and returns a string with the char repeated n times.</li>
      </ul>
      <p>Implement these methods and create a main method to demonstrate their usage.</p>


      <h3>4. Encapsulation</h3>
      <p>Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods. </p>
      <p>This is also known as data hiding.</p>
      <h4>What is Encapsulation?</h4>
      <p>Encapsulation is one of the fundamental concepts in object-oriented programming. It refers to the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components. Encapsulation is used to hide the values or state of a structured data object inside a class, preventing direct access to them by clients in a way that could expose hidden implementation details or violate class invariants.</p>

      <h4>Key Principles of Encapsulation</h4>
      <ul>
        <li><strong>Data Hiding:</strong> Making the instance variables private so that they can't be accessed directly from outside the class.</li>
        <li><strong>Getter and Setter Methods:</strong> Providing public methods to access and modify the private variables.</li>
        <li><strong>Access Control:</strong> Using access modifiers (private, protected, public) to control the visibility of class members.</li>
      </ul>

      <h4>Benefits of Encapsulation</h4>
      <ul>
        <li><strong>Improved Control:</strong> Class can have total control over what is stored in its fields.</li>
        <li><strong>Flexibility:</strong> Fields can be made read-only or write-only.</li>
        <li><strong>Security:</strong> It protects the internal state of an object by hiding it from the outside world.</li>
        <li><strong>Modularity:</strong> Encapsulated code is easier to maintain and modify.</li>
        <li><strong>Testing:</strong> Encapsulated code is easier to test through a public interface.</li>
      </ul>

      <h4>Examples of Encapsulation</h4>

      <p>1. Basic Encapsulation:</p>
      <pre><code class="language-java">
public class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        account.deposit(1000);
        System.out.println("Balance: " + account.getBalance());
        account.withdraw(500);
        System.out.println("Balance after withdrawal: " + account.getBalance());
    }
}
      </code></pre>

      <p>2. Encapsulation with Data Validation:</p>
      <pre><code class="language-java">
public class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if (name != null && !name.isEmpty()) {
            this.name = name;
        }
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 0 && age <= 120) {
            this.age = age;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        person.setName("John Doe");
        person.setAge(30);
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());

        person.setAge(-5); // This won't change the age due to validation
        System.out.println("Age after invalid input: " + person.getAge());
    }
}
      </code></pre>

      <p>3. Encapsulation with Read-Only and Derived Properties:</p>
      <pre><code class="language-java">
public class Circle {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public double getArea() {
        return Math.PI * radius * radius;
    }

    public double getCircumference() {
        return 2 * Math.PI * radius;
    }
}

public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle(5);
        System.out.println("Radius: " + circle.getRadius());
        System.out.println("Area: " + circle.getArea());
        System.out.println("Circumference: " + circle.getCircumference());
    }
}
      </code></pre>

      <h4>Common Practices and Considerations</h4>
      <ul>
        <li><strong>JavaBeans Convention:</strong> Follow the JavaBeans naming convention for getter and setter methods (e.g., getName() and setName()).</li>
        <li><strong>Immutable Objects:</strong> For immutable objects, provide only getter methods and make all fields final.</li>
        <li><strong>Derived Properties:</strong> Use methods to provide derived properties that are calculated from the encapsulated data.</li>
        <li><strong>Minimal Public Interface:</strong> Only expose what is necessary, keeping the public interface as small as possible.</li>
      </ul>

      <h4>Practice Exercise</h4>
      <p>Create a class called 'Employee' with private fields for name, salary, and hire date. Implement appropriate getter and setter methods for these fields. </p>
      <p>Add a method to calculate years of service based on the hire date. Ensure that the salary cannot be set to a negative value and that the hire date cannot be set to a future date. Create a main method to demonstrate the use of this class.</p>

     
      <h3>5. Abstraction</h3>
      <p>Abstraction is the process of hiding the implementation details and showing only the functionality to the user.</p>
      <p> In Java, we can achieve abstraction using abstract classes and interfaces.</p>
       
      <h4>What is Abstraction?</h4>
      <p>Abstraction is a fundamental concept in object-oriented programming that allows you to hide complex implementation details and show only the essential features of an object. It's about creating a simplified view of an object that represents its essential characteristics without including the background details or explanations.</p>

      <h4>Key Concepts of Abstraction</h4>
      <ul>
        <li><strong>Abstract Classes:</strong> Classes that cannot be instantiated and may contain abstract methods.</li>
        <li><strong>Abstract Methods:</strong> Methods declared without an implementation.</li>
        <li><strong>Interfaces:</strong> A completely abstract type that contains only abstract method declarations.</li>
        <li><strong>Implementation Hiding:</strong> Showing only the relevant details to the user and hiding the internal implementation.</li>
      </ul>

      <h4>Benefits of Abstraction</h4>
      <ul>
        <li><strong>Simplicity:</strong> It simplifies complex systems by breaking them down into smaller, more manageable parts.</li>
        <li><strong>Modularity:</strong> It allows for the creation of modular code that's easier to maintain and update.</li>
        <li><strong>Flexibility:</strong> It provides the ability to change implementation details without affecting the abstract interface.</li>
        <li><strong>Security:</strong> It helps in hiding sensitive details from users.</li>
        <li><strong>Reusability:</strong> Abstract classes and interfaces can be reused in multiple related classes.</li>
      </ul>

      <h4>Examples of Abstraction</h4>

      <p>1. Using Abstract Classes:</p>
      <pre><code class="language-java">
abstract class Shape {
    protected String color;

    public Shape(String color) {
        this.color = color;
    }

    // Abstract method
    public abstract double getArea();

    // Concrete method
    public void displayColor() {
        System.out.println("Color: " + color);
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(String color, double length, double width) {
        super(color);
        this.length = length;
        this.width = width;
    }

    @Override
    public double getArea() {
        return length * width;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape circle = new Circle("Red", 5);
        Shape rectangle = new Rectangle("Blue", 4, 5);

        circle.displayColor();
        System.out.println("Circle Area: " + circle.getArea());

        rectangle.displayColor();
        System.out.println("Rectangle Area: " + rectangle.getArea());
    }
}
      </code></pre>

      <p>2. Using Interfaces:</p>
      <pre><code class="language-java">
interface Vehicle {
    void start();
    void stop();
    void accelerate(int speed);
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car started");
    }

    @Override
    public void stop() {
        System.out.println("Car stopped");
    }

    @Override
    public void accelerate(int speed) {
        System.out.println("Car accelerating to " + speed + " km/h");
    }
}

class Bicycle implements Vehicle {
    @Override
    public void start() {
        System.out.println("Bicycle started moving");
    }

    @Override
    public void stop() {
        System.out.println("Bicycle stopped");
    }

    @Override
    public void accelerate(int speed) {
        System.out.println("Bicycle speeding up to " + speed + " km/h");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle car = new Car();
        Vehicle bicycle = new Bicycle();

        car.start();
        car.accelerate(60);
        car.stop();

        bicycle.start();
        bicycle.accelerate(20);
        bicycle.stop();
    }
}
      </code></pre>

      <p>3. Combining Abstract Classes and Interfaces:</p>
      <pre><code class="language-java">
interface Drawable {
    void draw();
}

abstract class GraphicObject {
    int x, y;

    GraphicObject(int x, int y) {
        this.x = x;
        this.y = y;
    }

    abstract void resize(int percent);

    void moveTo(int newX, int newY) {
        System.out.println("Moving to x: " + newX + ", y: " + newY);
        this.x = newX;
        this.y = newY;
    }
}

class Circle extends GraphicObject implements Drawable {
    int radius;

    Circle(int x, int y, int radius) {
        super(x, y);
        this.radius = radius;
    }

    @Override
    void resize(int percent) {
        radius = radius * percent / 100;
        System.out.println("Circle resized to radius: " + radius);
    }

    @Override
    public void draw() {
        System.out.println("Drawing Circle at x: " + x + ", y: " + y + " with radius: " + radius);
    }
}

public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle(10, 20, 5);
        circle.draw();
        circle.resize(150);
        circle.moveTo(15, 25);
        circle.draw();
    }
}
      </code></pre>

      <h4>Key Differences between Abstract Classes and Interfaces</h4>
      <ul>
        <li><strong>Methods:</strong> Abstract classes can have both abstract and non-abstract methods. Interfaces can only have abstract methods (prior to Java 8) or default and static methods (Java 8+).</li>
        <li><strong>Variables:</strong> Abstract classes can have non-final variables. Interface variables are by default public, static, and final.</li>
        <li><strong>Inheritance:</strong> A class can extend only one abstract class but can implement multiple interfaces.</li>
        <li><strong>Purpose:</strong> Abstract classes are used to define a template for a group of subclasses. Interfaces are used to define a contract for what a class can do.</li>
      </ul>

      <h4>Practice Exercise</h4>
      <p>Create an abstract class 'Animal' with abstract methods 'makeSound()' and 'move()'. Create two interfaces: 'Swimmable' with a method 'swim()' and 'Flyable' with a method 'fly()'. Now, create concrete classes for different animals (e.g., 'Dog', 'Bird', 'Fish') that extend the 'Animal' class and implement the appropriate interfaces. Include a main method to demonstrate the use of these classes and interfaces.</p>

     

      <h4>Interface</h4>
      <pre><code class="language-java">
interface Drawable {
    void draw();
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

class Rectangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle");
    }
}

public class Main {
    public static void main(String[] args) {
        Drawable circle = new Circle();
        Drawable rectangle = new Rectangle();

        circle.draw();
        rectangle.draw();
    }
}
      </code></pre>
      
            <h3>Assignment Questions and Solutions</h3>
            
            <h4>1. Library System</h4>
            <p>Create a class hierarchy for a simple library system. Include a base class \`LibraryItem\` with common attributes like \`title\` and \`itemID\`. Create subclasses for different types of items (e.g., \`Book\`, \`DVD\`) with specific attributes. Implement methods to check out and return items.</p>
            <pre><code class="language-java">
      abstract class LibraryItem {
          private String title;
          private String itemID;
          private boolean checkedOut;
      
          public LibraryItem(String title, String itemID) {
              this.title = title;
              this.itemID = itemID;
              this.checkedOut = false;
          }
      
          public void checkOut() {
              if (!checkedOut) {
                  checkedOut = true;
                  System.out.println(title + " has been checked out.");
              } else {
                  System.out.println(title + " is already checked out.");
              }
          }
      
          public void returnItem() {
              if (checkedOut) {
                  checkedOut = false;
                  System.out.println(title + " has been returned.");
              } else {
                  System.out.println(title + " is already in the library.");
              }
          }
      
          // Getters and setters
      }
      
      class Book extends LibraryItem {
          private String author;
          private int pages;
      
          public Book(String title, String itemID, String author, int pages) {
              super(title, itemID);
              this.author = author;
              this.pages = pages;
          }
      
          // Getters and setters for author and pages
      }
      
      class DVD extends LibraryItem {
          private int duration;
          private String director;
      
          public DVD(String title, String itemID, int duration, String director) {
              super(title, itemID);
              this.duration = duration;
              this.director = director;
          }
      
          // Getters and setters for duration and director
      }
            </code></pre>
      
            <h4>2. Shape Interface</h4>
            <p>Design a \`Shape\` interface with methods for calculating area and perimeter. Implement this interface for at least three different shapes (e.g., Circle, Rectangle, Triangle). Create a program that uses these shapes and displays their areas and perimeters.</p>
            <pre><code class="language-java">
      interface Shape {
          double calculateArea();
          double calculatePerimeter();
      }
      
      class Circle implements Shape {
          private double radius;
      
          public Circle(double radius) {
              this.radius = radius;
          }
      
          @Override
          public double calculateArea() {
              return Math.PI * radius * radius;
          }
      
          @Override
          public double calculatePerimeter() {
              return 2 * Math.PI * radius;
          }
      }
      
      class Rectangle implements Shape {
          private double length;
          private double width;
      
          public Rectangle(double length, double width) {
              this.length = length;
              this.width = width;
          }
      
          @Override
          public double calculateArea() {
              return length * width;
          }
      
          @Override
          public double calculatePerimeter() {
              return 2 * (length + width);
          }
      }
      
      class Triangle implements Shape {
          private double a, b, c;
      
          public Triangle(double a, double b, double c) {
              this.a = a;
              this.b = b;
              this.c = c;
          }
      
          @Override
          public double calculateArea() {
              double s = (a + b + c) / 2;
              return Math.sqrt(s * (s - a) * (s - b) * (s - c));
          }
      
          @Override
          public double calculatePerimeter() {
              return a + b + c;
          }
      }
            </code></pre>
      
            <h4>3. Bank Account</h4>
            <p>Create a class \`BankAccount\` with private fields for account number and balance. Implement methods for deposit, withdrawal, and checking the balance. Ensure that the balance cannot be accessed directly and that withdrawals cannot exceed the available balance.</p>
            <pre><code class="language-java">
      class BankAccount {
          private String accountNumber;
          private double balance;
      
          public BankAccount(String accountNumber, double initialBalance) {
              this.accountNumber = accountNumber;
              this.balance = initialBalance;
          }
      
          public void deposit(double amount) {
              if (amount > 0) {
                  balance += amount;
                  System.out.println("Deposited: $" + amount);
              } else {
                  System.out.println("Invalid deposit amount");
              }
          }
      
          public void withdraw(double amount) {
              if (amount > 0 && amount <= balance) {
                  balance -= amount;
                  System.out.println("Withdrawn: $" + amount);
              } else {
                  System.out.println("Invalid withdrawal amount or insufficient funds");
              }
          }
      
          public double getBalance() {
              return balance;
          }
      
          // Getter for accountNumber if needed
      }
            </code></pre>
      
            <h4>4. Employee Management System</h4>
            <p>Implement a simple employee management system. Create an abstract class \`Employee\` with fields for name and ID, and an abstract method \`calculateSalary()\`. Create concrete classes for different types of employees (e.g., \`HourlyEmployee\`, \`SalariedEmployee\`) that implement the \`calculateSalary()\` method differently.</p>
            <pre><code class="language-java">
      abstract class Employee {
          protected String name;
          protected String id;
      
          public Employee(String name, String id) {
              this.name = name;
              this.id = id;
          }
      
          public abstract double calculateSalary();
      }
      
      class HourlyEmployee extends Employee {
          private double hourlyRate;
          private int hoursWorked;
      
          public HourlyEmployee(String name, String id, double hourlyRate, int hoursWorked) {
              super(name, id);
              this.hourlyRate = hourlyRate;
              this.hoursWorked = hoursWorked;
          }
      
          @Override
          public double calculateSalary() {
              return hourlyRate * hoursWorked;
          }
      }
      
      class SalariedEmployee extends Employee {
          private double monthlySalary;
      
          public SalariedEmployee(String name, String id, double monthlySalary) {
              super(name, id);
              this.monthlySalary = monthlySalary;
          }
      
          @Override
          public double calculateSalary() {
              return monthlySalary;
          }
      }
            </code></pre>
      
            <h4>5. Car Class with Method Overloading</h4>
            <p>Design a class \`Car\` with fields for make, model, and year. Implement method overloading for a \`displayInfo()\` method that can take different parameters (no parameters, only make, make and model, or all three). Demonstrate the use of these overloaded methods.</p>
            <pre><code class="language-java">
      class Car {
          private String make;
          private String model;
          private int year;
      
          public Car(String make, String model, int year) {
              this.make = make;
              this.model = model;
              this.year = year;
          }
      
          public void displayInfo() {
              System.out.println("Car Information: " + year + " " + make + " " + model);
          }
      
          public void displayInfo(String make) {
              System.out.println("Car Make: " + make);
          }
      
          public void displayInfo(String make, String model) {
              System.out.println("Car Make and Model: " + make + " " + model);
          }
      
          public void displayInfo(String make, String model, int year) {
              System.out.println("Full Car Information: " + year + " " + make + " " + model);
          }
      }
            </code></pre>
      
            <h4>6. Sortable Interface</h4>
            <p>Create an interface \`Sortable\` with a method \`sort()\`. Implement this interface in classes representing different sorting algorithms (e.g., \`BubbleSort\`, \`QuickSort\`). Create a program that uses these classes to sort an array of integers, demonstrating polymorphism.</p>
            <pre><code class="language-java">
      interface Sortable {
          void sort(int[] array);
      }
      
      class BubbleSort implements Sortable {
          @Override
          public void sort(int[] array) {
              int n = array.length;
              for (int i = 0; i < n-1; i++)
                  for (int j = 0; j < n-i-1; j++)
                      if (array[j] > array[j+1]) {
                          int temp = array[j];
                          array[j] = array[j+1];
                          array[j+1] = temp;
                      }
          }
      }
      
      class QuickSort implements Sortable {
          @Override
          public void sort(int[] array) {
              quickSort(array, 0, array.length - 1);
          }
      
          private void quickSort(int[] array, int low, int high) {
              if (low < high) {
                  int pi = partition(array, low, high);
                  quickSort(array, low, pi - 1);
                  quickSort(array, pi + 1, high);
              }
          }
      
          private int partition(int[] array, int low, int high) {
              int pivot = array[high];
              int i = (low - 1);
              for (int j = low; j < high; j++) {
                  if (array[j] < pivot) {
                      i++;
                      int temp = array[i];
                      array[i] = array[j];
                      array[j] = temp;
                  }
              }
              int temp = array[i + 1];
              array[i + 1] = array[high];
              array[high] = temp;
              return i + 1;
          }
      }
      
      // Example usage
      public class Main {
          public static void main(String[] args) {
              int[] numbers = {64, 34, 25, 12, 22, 11, 90};
              
              Sortable bubbleSort = new BubbleSort();
              bubbleSort.sort(numbers);
              System.out.println("Sorted using Bubble Sort: " + Arrays.toString(numbers));
      
              int[] numbers2 = {64, 34, 25, 12, 22, 11, 90};
              Sortable quickSort = new QuickSort();
              quickSort.sort(numbers2);
              System.out.println("Sorted using Quick Sort: " + Arrays.toString(numbers2));
          }
      }
            </code></pre>
          </section>`
      },
    {
      id: 'java-methods',
      title: 'Java Methods',
      content: `
        <section id="java-methods">
          <h2>Java Methods</h2>
          <h3>Defining Methods</h3>
          <p>Methods are blocks of code that perform a specific task and can be called upon when needed.</p>

          <h4>Anatomy of a Method</h4>
          <p>A typical method definition in Java consists of the following parts:</p>
          <pre><code>
    [access_modifier] [static] [return_type] methodName([parameters]) {
        // Method body
        [return statement]
    }
          </code></pre>
          <ul>
            <li><strong>Access Modifier:</strong> Determines the visibility of the method (e.g., public, private, protected).</li>
            <li><strong>Static:</strong> Optional keyword that makes the method belong to the class rather than an instance of the class.</li>
            <li><strong>Return Type:</strong> Specifies the type of value the method returns, or void if it doesn't return a value.</li>
            <li><strong>Method Name:</strong> The name used to call the method.</li>
            <li><strong>Parameters:</strong> Input values passed to the method (optional).</li>
            <li><strong>Method Body:</strong> The actual code that performs the task.</li>
            <li><strong>Return Statement:</strong> Used to return a value from the method (if the return type is not void).</li>
          </ul>
    
          <h4>Examples of Method Definitions</h4>
    
          <p>1. Simple Method with No Parameters and No Return Value:</p>
          <pre><code class="language-java">
    public class Greeter {
        public void sayHello() {
            System.out.println("Hello, World!");
        }
    
        public static void main(String[] args) {
            Greeter greeter = new Greeter();
            greeter.sayHello();
        }
    }
          </code></pre>
    
          <p>2. Method with Parameters and Return Value:</p>
          <pre><code class="language-java">
    public class Calculator {
        public int add(int a, int b) {
            return a + b;
        }
    
        public static void main(String[] args) {
            Calculator calc = new Calculator();
            int result = calc.add(5, 3);
            System.out.println("5 + 3 = " + result);
        }
    }
          </code></pre>
    
          <p>3. Static Method:</p>
          <pre><code class="language-java">
    public class MathUtils {
        public static int square(int number) {
            return number * number;
        }
    
        public static void main(String[] args) {
            int result = MathUtils.square(4);
            System.out.println("4 squared is: " + result);
        }
    }
          </code></pre>
    
          <p>4. Method with Multiple Parameters and Complex Logic:</p>
          <pre><code class="language-java">
    public class StringUtils {
        public static String repeatString(String str, int times, String separator) {
            if (times <= 0) {
                return "";
            }
            StringBuilder result = new StringBuilder();
            for (int i = 0; i < times; i++) {
                result.append(str);
                if (i < times - 1) {
                    result.append(separator);
                }
            }
            return result.toString();
        }
    
        public static void main(String[] args) {
            String repeated = StringUtils.repeatString("Hello", 3, "-");
            System.out.println(repeated);  // Outputs: Hello-Hello-Hello
        }
    }
          </code></pre>
    
          <h4>Key Concepts in Method Definition</h4>
          <ul>
            <li><strong>Method Overloading:</strong> Defining multiple methods with the same name but different parameter lists.</li>
            <li><strong>Parameter Passing:</strong> Understanding pass-by-value for primitive types and pass-by-reference for objects.</li>
            <li><strong>Method Signatures:</strong> The combination of method name and parameter list that uniquely identifies a method.</li>
            <li><strong>Recursive Methods:</strong> Methods that call themselves to solve problems.</li>
          </ul>
    
          <h4>Best Practices for Defining Methods</h4>
          <ul>
            <li>Use clear and descriptive method names that indicate their purpose.</li>
            <li>Keep methods focused on a single task (Single Responsibility Principle).</li>
            <li>Limit the number of parameters to improve readability and maintainability.</li>
            <li>Use appropriate access modifiers to encapsulate implementation details.</li>
            <li>Include comments or JavaDoc to explain the purpose and usage of complex methods.</li>
          </ul>
    
          <h4>Practice Exercise</h4>
          <p>Create a class called 'ArrayProcessor' with the following static methods:</p>
          <ol>
            <li>'findMax': Takes an array of integers and returns the maximum value.</li>
            <li>'calculateAverage': Takes an array of doubles and returns the average value.</li>
            <li>'reverseArray': Takes an array of any type and returns a new array with elements in reverse order.</li>
            <li>'searchElement': Takes an array and an element, returns the index of the element if found, or -1 if not found.</li>
          </ol>
          <p>Implement these methods and create a main method to demonstrate their usage with different types of arrays.</p>
    
          <h3>Method Overloading</h3>
          <p>Method overloading allows a class to have more than one method having the same name, if their parameter lists are different.</p>
          <h4>Key Concepts of Method Overloading</h4>
      <ul>
        <li><strong>Same Method Name:</strong> Overloaded methods share the same name within the class.</li>
        <li><strong>Different Parameters:</strong> They must differ in the number, type, or order of parameters.</li>
        <li><strong>Compile-time Polymorphism:</strong> The compiler determines which method to call based on the arguments provided.</li>
        <li><strong>Return Type:</strong> The return type alone is not sufficient to distinguish overloaded methods.</li>
      </ul>

      <h4>Ways to Overload Methods</h4>
      <ol>
        <li>Changing the number of parameters</li>
        <li>Changing the data type of parameters</li>
        <li>Changing the order of parameters</li>
      </ol>

      <h4>Examples of Method Overloading</h4>

      <p>1. Overloading by Changing the Number of Parameters:</p>
      <pre><code class="language-java">
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Sum of two numbers: " + calc.add(5, 10));
        System.out.println("Sum of three numbers: " + calc.add(5, 10, 15));
    }
}
      </code></pre>

      <p>2. Overloading by Changing the Data Type of Parameters:</p>
      <pre><code class="language-java">
public class Printer {
    public void print(int number) {
        System.out.println("Printing integer: " + number);
    }

    public void print(double number) {
        System.out.println("Printing double: " + number);
    }

    public void print(String text) {
        System.out.println("Printing string: " + text);
    }

    public static void main(String[] args) {
        Printer printer = new Printer();
        printer.print(10);
        printer.print(10.5);
        printer.print("Hello, World!");
    }
}
      </code></pre>

      <p>3. Overloading by Changing the Order of Parameters:</p>
      <pre><code class="language-java">
public class MathOperations {
    public int compute(int a, double b) {
        return (int)(a + b);
    }

    public double compute(double a, int b) {
        return a - b;
    }

    public static void main(String[] args) {
        MathOperations math = new MathOperations();
        System.out.println("Result 1: " + math.compute(5, 2.5));
        System.out.println("Result 2: " + math.compute(5.5, 2));
    }
}
      </code></pre>

      <h4>Benefits of Method Overloading</h4>
      <ul>
        <li><strong>Improved Readability:</strong> Methods can have the same name for related operations, making the code more intuitive.</li>
        <li><strong>Flexibility:</strong> Allows calling a method with different types or numbers of arguments.</li>
        <li><strong>Consistency:</strong> Provides a consistent way to perform similar operations with different data types.</li>
        <li><strong>Code Reusability:</strong> Reduces the need for creating multiple method names for similar operations.</li>
      </ul>

      <h4>Considerations and Potential Pitfalls</h4>
      <ul>
        <li><strong>Ambiguity:</strong> Be cautious of creating ambiguous method calls. The compiler will throw an error if it can't determine which method to call.</li>
        <li><strong>Type Promotion:</strong> Understand how Java promotes primitive types in method invocation (e.g., int to long, or int to double).</li>
        <li><strong>Overloading vs. Overriding:</strong> Don't confuse method overloading (same name, different parameters) with method overriding (same signature in a subclass).</li>
        <li><strong>Autoboxing:</strong> Be aware of how autoboxing can affect method selection in overloaded methods.</li>
      </ul>

      <h4>Practice Exercise</h4>
      <p>Create a class called 'ShapeCalculator' with overloaded methods to calculate the area of different shapes:</p>
      <ol>
        <li>A method to calculate the area of a square (one parameter for side length)</li>
        <li>A method to calculate the area of a rectangle (two parameters for length and width)</li>
        <li>A method to calculate the area of a circle (one parameter for radius)</li>
        <li>A method to calculate the area of a triangle (three parameters for base and two sides, using Heron's formula)</li>
      </ol>
      <p>Implement these methods and create a main method to demonstrate their usage with different shapes. Make sure to handle any necessary type conversions and use appropriate return types.</p>

          <h3>Method Parameters</h3>
          <p>Parameters are variables that are passed into methods to provide input data for the method.</p>
          <h4>Key Concepts of Method Parameters</h4>
      <ul>
        <li><strong>Definition:</strong> Parameters are defined in the method declaration, specifying the type and name of each parameter.</li>
        <li><strong>Arguments:</strong> The actual values passed to a method when it is called are called arguments.</li>
        <li><strong>Pass-by-Value:</strong> In Java, all parameters are passed by value, meaning a copy of the value is passed to the method.</li>
        <li><strong>Parameter Types:</strong> Parameters can be of any valid Java type, including primitives, objects, and arrays.</li>
      </ul>

      <h4>Types of Parameters</h4>
      <ol>
        <li><strong>Formal Parameters:</strong> The variables defined in the method declaration.</li>
        <li><strong>Actual Parameters (Arguments):</strong> The values passed to the method when it is called.</li>
        <li><strong>Variable-length Parameters (Varargs):</strong> Allow a method to accept an arbitrary number of arguments.</li>
      </ol>

      <h4>Examples of Method Parameters</h4>

      <p>1. Basic Parameter Usage:</p>
      <pre><code class="language-java">
public class Greeter {
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void main(String[] args) {
        Greeter greeter = new Greeter();
        greeter.greet("Alice");  // Output: Hello, Alice!
        greeter.greet("Bob");    // Output: Hello, Bob!
    }
}
      </code></pre>

      <p>2. Multiple Parameters:</p>
      <pre><code class="language-java">
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int result = calc.add(5, 3);
        System.out.println("5 + 3 = " + result);  // Output: 5 + 3 = 8
    }
}
      </code></pre>

      <p>3. Object Parameters:</p>
      <pre><code class="language-java">
class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class PersonPrinter {
    public void printPerson(Person person) {
        System.out.println("Name: " + person.name + ", Age: " + person.age);
    }

    public static void main(String[] args) {
        PersonPrinter printer = new PersonPrinter();
        Person john = new Person("John", 30);
        printer.printPerson(john);  // Output: Name: John, Age: 30
    }
}
      </code></pre>

      <p>4. Variable-length Parameters (Varargs):</p>
      <pre><code class="language-java">
public class NumberAdder {
    public int addNumbers(int... numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }

    public static void main(String[] args) {
        NumberAdder adder = new NumberAdder();
        System.out.println(adder.addNumbers(1, 2, 3));       // Output: 6
        System.out.println(adder.addNumbers(1, 2, 3, 4, 5)); // Output: 15
    }
}
      </code></pre>

      <h4>Parameter Passing Mechanisms</h4>
      <p>Java uses pass-by-value for all parameters. However, the behavior differs for primitive types and objects:</p>
      <ul>
        <li><strong>Primitive Types:</strong> The actual value is passed, and changes to the parameter inside the method do not affect the original variable.</li>
        <li><strong>Objects:</strong> A copy of the reference to the object is passed. While the reference itself is passed by value, it still refers to the same object in memory.</li>
      </ul>

      <h4>Best Practices for Using Method Parameters</h4>
      <ul>
        <li>Use meaningful parameter names that describe their purpose.</li>
        <li>Limit the number of parameters to improve readability (generally no more than 3-4).</li>
        <li>Consider using objects to group related parameters if a method requires many parameters.</li>
        <li>Validate parameters when necessary to ensure method robustness.</li>
        <li>Use final keyword for parameters that shouldn't be modified within the method.</li>
      </ul>

      <h4>Practice Exercise</h4>
      <p>Create a class called 'StringManipulator' with the following methods:</p>
      <ol>
        <li>'concatenate': Takes two strings as parameters and returns their concatenation.</li>
        <li>'findAndReplace': Takes three string parameters - the original string, the substring to find, and the substring to replace it with. Returns the modified string.</li>
        <li>'countOccurrences': Takes two string parameters - the main string and a substring. Returns the number of times the substring appears in the main string.</li>
        <li> 'reverseWords': Takes a string parameter containing multiple words and returns a string with the words in reverse order.</li>
      </ol>
      <p>Implement these methods and create a main method to demonstrate their usage with different inputs. Make sure to handle edge cases and null inputs appropriately.</p>

          <h3>Recursion</h3>
          <p>Recursion is a process where a method calls itself.</p>
          <h4>Key Concepts of Recursion</h4>
      <ul>
        <li><strong>Base Case:</strong> The condition that stops the recursion. It's crucial to prevent infinite recursion.</li>
        <li><strong>Recursive Case:</strong> The part where the method calls itself with a modified input.</li>
        <li><strong>Call Stack:</strong> Each recursive call adds a new layer to the call stack, which is important to consider for memory usage.</li>
        <li><strong>Problem Decomposition:</strong> Breaking down a problem into smaller, similar subproblems.</li>
      </ul>

      <h4>Structure of a Recursive Method</h4>
      <pre><code class="language-java">
public type recursiveMethod(parameters) {
    if (base case condition) {
        return base case result;
    } else {
        // Recursive case
        return recursiveMethod(modified parameters);
    }
}
      </code></pre>

      <h4>Examples of Recursion</h4>

      <p>1. Factorial Calculation:</p>
      <pre><code class="language-java">
public class Factorial {
    public static int factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;  // Base case
        } else {
            return n * factorial(n - 1);  // Recursive case
        }
    }

    public static void main(String[] args) {
        System.out.println("Factorial of 5: " + factorial(5));  // Output: 120
    }
}
      </code></pre>

      <p>2. Fibonacci Sequence:</p>
      <pre><code class="language-java">
public class Fibonacci {
    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;  // Base cases
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive case
        }
    }

    public static void main(String[] args) {
        System.out.println("8th Fibonacci number: " + fibonacci(8));  // Output: 21
    }
}
      </code></pre>

      <p>3. Binary Search (Recursive Implementation):</p>
      <pre><code class="language-java">
public class BinarySearch {
    public static int binarySearch(int[] arr, int target, int low, int high) {
        if (low > high) {
            return -1;  // Base case: element not found
        }
        
        int mid = (low + high) / 2;
        if (arr[mid] == target) {
            return mid;  // Base case: element found
        } else if (arr[mid] > target) {
            return binarySearch(arr, target, low, mid - 1);  // Recursive case
        } else {
            return binarySearch(arr, target, mid + 1, high);  // Recursive case
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11, 13, 15};
        int target = 7;
        int result = binarySearch(arr, target, 0, arr.length - 1);
        System.out.println("Element " + target + " found at index: " + result);  // Output: 3
    }
}
      </code></pre>

      <h4>Advantages of Recursion</h4>
      <ul>
        <li>Can simplify complex problems and make code more readable.</li>
        <li>Useful for problems with recursive structures (e.g., tree traversal, fractals).</li>
        <li>Often leads to elegant and concise solutions.</li>
      </ul>

      <h4>Disadvantages and Considerations</h4>
      <ul>
        <li>Can be less efficient than iterative solutions due to overhead of multiple function calls.</li>
        <li>Risk of stack overflow for deep recursions.</li>
        <li>May be harder to understand and debug for complex recursions.</li>
      </ul>

      <h4>When to Use Recursion</h4>
      <ul>
        <li>When the problem can be naturally broken down into similar subproblems.</li>
        <li>For problems involving trees or graphs.</li>
        <li>In divide-and-conquer algorithms.</li>
        <li>When simplicity of code is more important than performance.</li>
      </ul>

      <h4>Practice Exercise</h4>
      <p>Implement the following recursive methods:</p>
      <ol>
        <li>'sumOfDigits': Takes an integer and returns the sum of its digits.</li>
        <li>'reverseString': Takes a string and returns its reverse.</li>
        <li>'power': Calculates x raised to the power n (x^n) using recursion.</li>
        <li>'gcd': Finds the Greatest Common Divisor of two numbers using the Euclidean algorithm recursively.</li>
      </ol>
      <p>For each method, write both the recursive implementation and an example of how to use it in the main method. Consider edge cases and potential limitations of your recursive solutions.</p>
          
          <h3>Scope</h3>
          <p>The scope of a variable is the region of the code where the variable is accessible.</p>
          <ul>
            <li>Local Scope</li>
            <li>Instance Scope</li>
            <li>Class/Static Scope</li>
          </ul>
          <h4>1. Local Scope</h4>
      <p>Variables declared inside a method or a block have local scope. They are only accessible within that method or block.</p>
      
      <pre><code class="language-java">
public class LocalScopeExample {
    public void exampleMethod() {
        int localVar = 10; // Local variable
        System.out.println(localVar); // Accessible here
    }

    public void anotherMethod() {
        // System.out.println(localVar); // Error: localVar is not accessible here
    }

    public static void main(String[] args) {
        LocalScopeExample example = new LocalScopeExample();
        example.exampleMethod();
        // System.out.println(localVar); // Error: localVar is not accessible here
    }
}
      </code></pre>

      <h4>2. Instance Scope</h4>
      <p>Instance variables are declared in a class but outside any method. They are accessible to all non-static methods in the class.</p>

      <pre><code class="language-java">
public class InstanceScopeExample {
    private int instanceVar = 20; // Instance variable

    public void method1() {
        System.out.println(instanceVar); // Accessible here
    }

    public void method2() {
        instanceVar = 30; // Can be modified here
        System.out.println(instanceVar);
    }

    public static void main(String[] args) {
        InstanceScopeExample example = new InstanceScopeExample();
        example.method1(); // Output: 20
        example.method2(); // Output: 30
    }
}
      </code></pre>

      <h4>3. Class/Static Scope</h4>
      <p>Static variables belong to the class rather than any specific instance. They are accessible to all static and non-static methods of the class.</p>

      <pre><code class="language-java">
public class StaticScopeExample {
    private static int staticVar = 40; // Static variable

    public static void staticMethod() {
        System.out.println(staticVar); // Accessible in static method
    }

    public void nonStaticMethod() {
        System.out.println(staticVar); // Also accessible in non-static method
    }

    public static void main(String[] args) {
        StaticScopeExample.staticMethod(); // Output: 40
        StaticScopeExample example = new StaticScopeExample();
        example.nonStaticMethod(); // Output: 40
    }
}
      </code></pre>

      <h4>Scope Nesting and Shadowing</h4>
      <p>When scopes are nested, inner scopes can access variables from outer scopes, but not vice versa. Variable shadowing occurs when a variable in an inner scope has the same name as a variable in an outer scope.</p>

      <pre><code class="language-java">
public class ScopeNestingExample {
    private int x = 10; // Instance variable

    public void exampleMethod() {
        int x = 20; // Local variable shadows instance variable
        System.out.println(x); // Prints 20 (local variable)
        System.out.println(this.x); // Prints 10 (instance variable)

        {
            int y = 30; // Block scope
            System.out.println(y); // Accessible here
        }
        // System.out.println(y); // Error: y is not accessible here
    }

    public static void main(String[] args) {
        ScopeNestingExample example = new ScopeNestingExample();
        example.exampleMethod();
    }
}
      </code></pre>

      <h4>Key Points About Scope</h4>
      <ul>
        <li>Local variables have the narrowest scope and shortest lifetime.</li>
        <li>Instance variables are accessible throughout the class but require an instance of the class to be accessed from outside.</li>
        <li>Static variables have the widest scope and can be accessed without creating an instance of the class.</li>
        <li>Understanding scope helps in writing more efficient code and avoiding naming conflicts.</li>
        <li>Proper use of scope can enhance encapsulation and data hiding in object-oriented programming.</li>
      </ul>

      <h4>Practice Exercise</h4>
      <p>Create a class called 'BankAccount' that demonstrates the use of different scopes:</p>
      <ol>
        <li>Use a static variable to keep track of the total number of accounts created.</li>
        <li>Use instance variables for account number and balance.</li>
        <li>Create methods for deposit and withdrawal that use local variables.</li>
        <li>Implement a method that prints account details, demonstrating access to both static and instance variables.</li>
        <li>Create a main method to demonstrate the creation of multiple accounts and the use of all implemented methods.</li>
      </ol>
      <p>Ensure that your implementation demonstrates proper use of local, instance, and static scopes. Consider how the different scopes affect the accessibility and lifetime of the variables in your program.</p>

          
          <h3>Assignment Questions</h3>
          <p>1. Write a method named 'calculateSum' that takes two integers as parameters and returns their sum.</p>
          <pre><code class="language-java">
  public class Calculator {
      public int calculateSum(int a, int b) {
          return a + b;
      }
  
      public static void main(String[] args) {
          Calculator calc = new Calculator();
          int sum = calc.calculateSum(5, 3);
          System.out.println("Sum: " + sum);
      }
  }
          </code></pre>
          <p>2. Write a method named 'findMaximum' that takes three double values as parameters and returns the maximum value.</p>
          <pre><code class="language-java">
  public class MathUtils {
      public double findMaximum(double a, double b, double c) {
          if (a >= b && a >= c) {
              return a;
          } else if (b >= a && b >= c) {
              return b;
          } else {
              return c;
          }
      }
  
      public static void main(String[] args) {
          MathUtils utils = new MathUtils();
          double max = utils.findMaximum(2.3, 4.5, 1.8);
          System.out.println("Maximum: " + max);
      }
  }
          </code></pre>
        </section>`
    },
    {
      id: 'arrays-collections',
      title: 'Arrays and Collections',
      content: `
        <section id="arrays-collections">
          <h2>Arrays and Collections</h2>
          <h3>Introduction to Arrays</h3>
          <p>An array in Java is a container object that holds a fixed number of values of a single type. Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.</p>

      <h4>Key Characteristics of Arrays</h4>
      <ul>
        <li>Fixed Size: Once created, the size of an array cannot be changed.</li>
        <li>Homogeneous Elements: All elements in an array must be of the same data type.</li>
        <li>Zero-Based Indexing: The first element of an array is at index 0.</li>
        <li>Contiguous Memory: Array elements are stored in contiguous memory locations.</li>
      </ul>

      <h4>Declaring and Initializing Arrays</h4>
      <p>There are several ways to declare and initialize arrays in Java:</p>

      <pre><code class="language-java">
// Method 1: Declaration and initialization in separate steps
int[] numbers;           // Declaration
numbers = new int[5];    // Initialization with size

// Method 2: Declaration and initialization in one step
int[] numbers = new int[5];

// Method 3: Declaration and initialization with values
int[] numbers = {1, 2, 3, 4, 5};

// Method 4: Anonymous array (useful for passing an array to a method)
printArray(new int[]{1, 2, 3, 4, 5});
      </code></pre>

      <h4>Accessing and Modifying Array Elements</h4>
      <p>Array elements are accessed using their index:</p>

      <pre><code class="language-java">
int[] numbers = {10, 20, 30, 40, 50};
System.out.println(numbers[0]);  // Outputs: 10
numbers[2] = 35;                 // Modifying an element
System.out.println(numbers[2]);  // Outputs: 35
      </code></pre>

      <h4>Array Length and Iteration</h4>
      <p>The length of an array can be obtained using the 'length' property. Arrays are commonly iterated using loops:</p>

      <pre><code class="language-java">
int[] numbers = {1, 2, 3, 4, 5};

// Using for loop
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}

// Using enhanced for loop (for-each loop)
for (int number : numbers) {
    System.out.println(number);
}
      </code></pre>

      <h4>Multidimensional Arrays</h4>
      <p>Java supports multidimensional arrays, which are essentially arrays of arrays:</p>

      <pre><code class="language-java">
// 2D array
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println(matrix[1][2]);  // Outputs: 6

// Iterating over 2D array
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
      </code></pre>

      <h4>Arrays Class Utility Methods</h4>
      <p>Java provides the Arrays class with useful methods for array manipulation:</p>

      <pre><code class="language-java">
import java.util.Arrays;

int[] numbers = {5, 2, 8, 1, 9};

// Sorting an array
Arrays.sort(numbers);
System.out.println(Arrays.toString(numbers));  // Outputs: [1, 2, 5, 8, 9]

// Binary search (on sorted array)
int index = Arrays.binarySearch(numbers, 5);
System.out.println("Index of 5: " + index);    // Outputs: 2

// Filling an array
int[] fillArray = new int[5];
Arrays.fill(fillArray, 10);
System.out.println(Arrays.toString(fillArray));  // Outputs: [10, 10, 10, 10, 10]

// Comparing arrays
int[] array1 = {1, 2, 3};
int[] array2 = {1, 2, 3};
System.out.println(Arrays.equals(array1, array2));  // Outputs: true
      </code></pre>

      <h4>Limitations of Arrays</h4>
      <ul>
        <li>Fixed Size: Once created, the size cannot be changed.</li>
        <li>Homogeneous Data: Can only store elements of the same type.</li>
        <li>Limited Functionality: No built-in methods for common operations like adding or removing elements.</li>
      </ul>

      <h4>Practice Exercise</h4>
      <p>Create a program that demonstrates the following array operations:</p>
      <ol>
        <li>Create an array of integers with values from 1 to 10.</li>
        <li>Print the sum and average of all elements in the array.</li>
        <li>Find and print the maximum and minimum values in the array.</li>
        <li>Reverse the array and print the reversed array.</li>
        <li>Create a method that takes an array and a value, and returns the number of occurrences of that value in the array.</li>
      </ol>
      <p>Implement these operations using both standard loops and Java 8 stream operations where applicable. Consider edge cases such as empty arrays or arrays with duplicate values.</p>

         
  
          <h3>ArrayList</h3>
          <p>ArrayList is a resizable array implementation of the List interface in Java. It provides dynamic arrays in Java, allowing elements to be added or removed after the array has been created. ArrayList is part of the Java Collections Framework and is located in the java.util package.</p>

      <h4>Key Features of ArrayList</h4>
      <ul>
        <li>Dynamic Size: Grows and shrinks automatically as needed.</li>
        <li>Random Access: Provides constant-time performance for get and set operations.</li>
        <li>Ordered Collection: Maintains insertion order of elements.</li>
        <li>Allows Duplicates: Can contain duplicate elements.</li>
        <li>Null Elements: Permits null values.</li>
      </ul>

      <h4>Creating an ArrayList</h4>
      <pre><code class="language-java">
import java.util.ArrayList;

// Creating an ArrayList of Strings
ArrayList<String> fruits = new ArrayList<>();

// Creating with initial capacity
ArrayList<Integer> numbers = new ArrayList<>(20);

// Creating and initializing
ArrayList<String> colors = new ArrayList<>(Arrays.asList("Red", "Green", "Blue"));
      </code></pre>

      <h4>Basic Operations</h4>
      <pre><code class="language-java">
ArrayList<String> fruits = new ArrayList<>();

// Adding elements
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Cherry");

// Accessing elements
String firstFruit = fruits.get(0);  // Apple

// Modifying elements
fruits.set(1, "Blueberry");

// Removing elements
fruits.remove("Cherry");
fruits.remove(0);  // Removes the first element

// Size of ArrayList
int size = fruits.size();

// Checking if empty
boolean isEmpty = fruits.isEmpty();

// Clearing all elements
fruits.clear();
      </code></pre>

      <h4>Iterating Over an ArrayList</h4>
      <pre><code class="language-java">
ArrayList<String> fruits = new ArrayList<>(Arrays.asList("Apple", "Banana", "Cherry"));

// Using for loop
for (int i = 0; i < fruits.size(); i++) {
    System.out.println(fruits.get(i));
}

// Using enhanced for loop
for (String fruit : fruits) {
    System.out.println(fruit);
}

// Using Iterator
Iterator<String> iterator = fruits.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// Using Java 8 forEach
fruits.forEach(System.out::println);
      </code></pre>

      <h4>Useful ArrayList Methods</h4>
      <pre><code class="language-java">
ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Cherry");

// Contains
boolean hasApple = fruits.contains("Apple");  // true

// Index of
int index = fruits.indexOf("Banana");  // 1

// To Array
String[] fruitArray = fruits.toArray(new String[0]);

// Sublist
List<String> subList = fruits.subList(0, 2);  // [Apple, Banana]

// Sort
Collections.sort(fruits);

// Reverse
Collections.reverse(fruits);
      </code></pre>

      <h4>ArrayList vs Array</h4>
      <ul>
        <li>ArrayList is dynamic, while arrays have a fixed size.</li>
        <li>ArrayList can only store objects, while arrays can store primitives or objects.</li>
        <li>ArrayList provides more utility methods and is part of Collections framework.</li>
        <li>ArrayList has some memory overhead compared to arrays.</li>
      </ul>

      <h4>Performance Considerations</h4>
      <ul>
        <li>Adding/removing at the end: O(1) amortized time.</li>
        <li>Adding/removing from a specific index: O(n) in worst case.</li>
        <li>Accessing elements: O(1) time.</li>
        <li>Searching: O(n) for unsorted list, O(log n) if sorted (using binary search).</li>
      </ul>

      <h4>Practice Exercise</h4>
      <p>Create a program that manages a to-do list using an ArrayList. Implement the following operations:</p>
      <ol>
        <li>Add a new task to the list.</li>
        <li>Mark a task as completed (remove it from the list).</li>
        <li>Display all current tasks.</li>
        <li>Search for a task by keyword.</li>
        <li>Sort tasks alphabetically.</li>
        <li>Remove all completed tasks at once.</li>
      </ol>
      <p>Use Scanner for user input to create an interactive command-line interface for this to-do list manager. Implement error handling for invalid inputs and edge cases.</p>

      <h4>Sample Implementation</h4>
      <pre><code class="language-java">
import java.util.*;

public class TodoListManager {
    private ArrayList<String> tasks = new ArrayList<>();
    private Scanner scanner = new Scanner(System.in);

    public void addTask() {
        System.out.print("Enter new task: ");
        String task = scanner.nextLine();
        tasks.add(task);
        System.out.println("Task added successfully.");
    }

    public void markAsCompleted() {
        System.out.print("Enter task number to mark as completed: ");
        int index = Integer.parseInt(scanner.nextLine()) - 1;
        if (index >= 0 && index < tasks.size()) {
            String completedTask = tasks.remove(index);
            System.out.println("Marked as completed: " + completedTask);
        } else {
            System.out.println("Invalid task number.");
        }
    }

    public void displayTasks() {
        if (tasks.isEmpty()) {
            System.out.println("No tasks in the list.");
        } else {
            for (int i = 0; i < tasks.size(); i++) {
                System.out.println((i + 1) + ". " + tasks.get(i));
            }
        }
    }

    public void searchTask() {
        System.out.print("Enter search keyword: ");
        String keyword = scanner.nextLine().toLowerCase();
        boolean found = false;
        for (String task : tasks) {
            if (task.toLowerCase().contains(keyword)) {
                System.out.println("Found: " + task);
                found = true;
            }
        }
        if (!found) {
            System.out.println("No matching tasks found.");
        }
    }

    public void sortTasks() {
        Collections.sort(tasks);
        System.out.println("Tasks sorted alphabetically.");
    }

    public static void main(String[] args) {
        TodoListManager manager = new TodoListManager();
        while (true) {
            System.out.println("\n1. Add Task");
            System.out.println("2. Mark Task as Completed");
            System.out.println("3. Display Tasks");
            System.out.println("4. Search Task");
            System.out.println("5. Sort Tasks");
            System.out.println("6. Exit");
            System.out.print("Choose an option: ");
            
            int choice = Integer.parseInt(manager.scanner.nextLine());
            switch (choice) {
                case 1: manager.addTask(); break;
                case 2: manager.markAsCompleted(); break;
                case 3: manager.displayTasks(); break;
                case 4: manager.searchTask(); break;
                case 5: manager.sortTasks(); break;
                case 6: System.out.println("Goodbye!"); return;
                default: System.out.println("Invalid option. Please try again.");
            }
        }
    }
}
      </code></pre>
      <p>This implementation demonstrates the use of ArrayList for managing a dynamic list of tasks, showcasing various ArrayList operations in a practical context.</p>
    
          
          <h3>Collections Framework</h3>
<p>The Collections Framework is a unified architecture for representing and manipulating collections, enabling collections to be manipulated independently of implementation details. It includes interfaces, implementations (classes), and algorithms.</p>

<h4>Core Interfaces</h4>
<p>The core interfaces of the Collections Framework are:</p>
<ul>
  <li><b>Collection:</b> The root of the collection hierarchy. It represents a group of objects known as elements.</li>
  <li><b>List:</b> An ordered collection (also known as a sequence). Lists can contain duplicate elements. Example implementations include ArrayList, LinkedList, and Vector.</li>
  <li><b>Set:</b> A collection that contains no duplicate elements. Example implementations include HashSet, LinkedHashSet, and TreeSet.</li>
  <li><b>Queue:</b> A collection designed for holding elements prior to processing. Example implementations include LinkedList and PriorityQueue.</li>
  <li><b>Map:</b> An object that maps keys to values. A map cannot contain duplicate keys. Example implementations include HashMap, LinkedHashMap, and TreeMap.</li>
</ul>

<h4>List Interface</h4>
<p>The List interface provides an ordered collection. Examples include ArrayList, LinkedList, and Vector.</p>
<pre><code class="language-java">
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class ListExample {
    public static void main(String[] args) {
        // Using ArrayList
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Cherry");
        
        // Using LinkedList
        List<String> linkedList = new LinkedList<>();
        linkedList.add("Dog");
        linkedList.add("Elephant");
        linkedList.add("Fox");
        
        // Print lists
        System.out.println("ArrayList: " + arrayList);
        System.out.println("LinkedList: " + linkedList);
    }
}
</code></pre>

<h4>Set Interface</h4>
<p>The Set interface provides a collection that contains no duplicate elements. Examples include HashSet, LinkedHashSet, and TreeSet.</p>
<pre><code class="language-java">
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

public class SetExample {
    public static void main(String[] args) {
        // Using HashSet
        Set<String> hashSet = new HashSet<>();
        hashSet.add("A");
        hashSet.add("B");
        hashSet.add("C");
        hashSet.add("A"); // Duplicate element, will not be added
        
        // Using LinkedHashSet
        Set<String> linkedHashSet = new LinkedHashSet<>();
        linkedHashSet.add("X");
        linkedHashSet.add("Y");
        linkedHashSet.add("Z");
        
        // Using TreeSet
        Set<String> treeSet = new TreeSet<>();
        treeSet.add("1");
        treeSet.add("2");
        treeSet.add("3");
        
        // Print sets
        System.out.println("HashSet: " + hashSet);
        System.out.println("LinkedHashSet: " + linkedHashSet);
        System.out.println("TreeSet: " + treeSet);
    }
}
</code></pre>

<h4>Queue Interface</h4>
<p>The Queue interface provides a collection designed for holding elements prior to processing. Examples include LinkedList and PriorityQueue.</p>
<pre><code class="language-java">
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        // Using LinkedList as Queue
        Queue<String> linkedListQueue = new LinkedList<>();
        linkedListQueue.add("A");
        linkedListQueue.add("B");
        linkedListQueue.add("C");
        
        // Using PriorityQueue
        Queue<String> priorityQueue = new PriorityQueue<>();
        priorityQueue.add("3");
        priorityQueue.add("1");
        priorityQueue.add("2");
        
        // Print queues
        System.out.println("LinkedList Queue: " + linkedListQueue);
        System.out.println("PriorityQueue: " + priorityQueue);
    }
}
</code></pre>

<h4>Map Interface</h4>
<p>The Map interface provides a collection that maps keys to values. Examples include HashMap, LinkedHashMap, and TreeMap.</p>
<pre><code class="language-java">
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.TreeMap;

public class MapExample {
    public static void main(String[] args) {
        // Using HashMap
        Map<String, String> hashMap = new HashMap<>();
        hashMap.put("one", "1");
        hashMap.put("two", "2");
        hashMap.put("three", "3");
        
        // Using LinkedHashMap
        Map<String, String> linkedHashMap = new LinkedHashMap<>();
        linkedHashMap.put("A", "Apple");
        linkedHashMap.put("B", "Banana");
        linkedHashMap.put("C", "Cherry");
        
        // Using TreeMap
        Map<String, String> treeMap = new TreeMap<>();
        treeMap.put("X", "X-ray");
        treeMap.put("Y", "Yellow");
        treeMap.put("Z", "Zebra");
        
        // Print maps
        System.out.println("HashMap: " + hashMap);
        System.out.println("LinkedHashMap: " + linkedHashMap);
        System.out.println("TreeMap: " + treeMap);
    }
}
</code></pre>

<h4>Iterating through Collections</h4>
<p>Java provides several ways to iterate through collections, such as using for-each loops and iterators.</p>
<pre><code class="language-java">
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class IterationExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        
        // Using for-each loop
        for (String fruit : list) {
            System.out.println(fruit);
        }
        
        // Using Iterator
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
</code></pre>

<h4>Common Algorithms</h4>
<p>The Collections Framework provides several algorithms that can be applied to collections:</p>
<ul>
  <li><b>Sorting:</b> Collections.sort(list) - Sorts the elements in the list.</li>
  <li><b>Shuffling:</b> Collections.shuffle(list) - Randomly permutes the elements in the list.</li>
  <li><b>Reversing:</b> Collections.reverse(list) - Reverses the order of elements in the list.</li>
  <li><b>Copying:</b> Collections.copy(dest, src) - Copies all elements from the source list to the destination list.</li>
</ul>
<pre><code class="language-java">
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class AlgorithmsExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Banana");
        list.add("Apple");
        list.add("Cherry");
        
        // Sorting
        Collections.sort(list);
        System.out.println("Sorted List: " + list);
        
        // Shuffling
        Collections.shuffle(list);
        System.out.println("Shuffled List: " + list);
        
        // Reversing
        Collections.reverse(list);
        System.out.println("Reversed List: " + list);
        
        // Copying
        List<String> copyList = new ArrayList<>(list);
        Collections.copy(copyList, list);
        System.out.println("Copied List: " + copyList);
    }
}
</code></pre>

          <h3>Assignment Questions</h3>
          <p>1. Write a Java program to create an array of 5 integers and print the array elements.</p>
          <pre><code class="language-java">
  public class Assignment5 {
      public static void main(String[] args) {
          int[] numbers = {1, 2, 3, 4, 5};
          for (int number : numbers) {
              System.out.println(number);
          }
      }
  }
          </code></pre>
          <p>2. Write a Java program to create an 'ArrayList' of strings, add 3 elements to it, and print the elements.</p>
          <pre><code class="language-java">
  import java.util.ArrayList;
  
  public class Assignment6 {
      public static void main(String[] args) {
          ArrayList<String> list = new ArrayList<>();
          list.add("Apple");
          list.add("Banana");
          list.add("Cherry");
  
          for (String fruit : list) {
              System.out.println(fruit);
          }
      }
  }
          </code></pre>
        </section>`
    },
    {
        id: 'java-packages',
        title: 'Java Packages',
        content: `
          <section id="java-packages">
            <h3>Java Packages</h3>
            
            <p>Java packages are a way to organize related classes, interfaces, and sub-packages. They provide a namespace for the classes and a way to manage access control between different parts of a program. Packages help in avoiding name conflicts and make it easier to maintain large applications.</p>
      
            <h4>1. Creating Packages</h4>
            <p>To create a package, you use the <code>package</code> keyword at the beginning of your Java file:</p>
      
            <pre><code class="language-java">
      // File: com/example/myapp/MyClass.java
      package com.example.myapp;
      
      public class MyClass {
          // Class implementation
      }
            </code></pre>
      
            <p>The directory structure should match the package structure. For example, the above class should be in a directory path: <code>com/example/myapp/</code></p>
      
            <h4>2. Importing Classes from Packages</h4>
            <p>To use a class from another package, you need to import it:</p>
      
            <pre><code class="language-java">
      // Importing a specific class
      import com.example.myapp.MyClass;
      
      // Importing all classes from a package
      import com.example.myapp.*;
      
      public class MainApp {
          public static void main(String[] args) {
              MyClass obj = new MyClass();
              // Use the object
          }
      }
            </code></pre>
      
            <h4>3. Static Imports</h4>
            <p>Static imports allow you to use static members of a class without qualifying them with the class name:</p>
      
            <pre><code class="language-java">
      import static java.lang.Math.PI;
      import static java.lang.Math.sqrt;
      
      public class MathExample {
          public static void main(String[] args) {
              double radius = 5.0;
              double area = PI * radius * radius;
              double diagonal = sqrt(2) * radius;
              System.out.println("Area: " + area);
              System.out.println("Diagonal: " + diagonal);
          }
      }
            </code></pre>
      
            <h4>4. Package Access Control</h4>
            <p>Packages play a crucial role in Java's access control system:</p>
            <ul>
              <li><strong>public:</strong> Accessible from any other class.</li>
              <li><strong>protected:</strong> Accessible within the same package and by subclasses.</li>
              <li><strong>default (package-private):</strong> Accessible only within the same package.</li>
              <li><strong>private:</strong> Accessible only within the same class.</li>
            </ul>
      
            <pre><code class="language-java">
      package com.example.myapp;
      
      public class AccessExample {
          public int publicVar;
          protected int protectedVar;
          int defaultVar;
          private int privateVar;
      
          // Methods with different access modifiers
          public void publicMethod() { }
          protected void protectedMethod() { }
          void defaultMethod() { }
          private void privateMethod() { }
      }
            </code></pre>
      
            <h4>5. Sub-packages</h4>
            <p>Packages can contain sub-packages, creating a hierarchical structure:</p>
      
            <pre><code class="language-java">
      // File: com/example/myapp/util/Helper.java
      package com.example.myapp.util;
      
      public class Helper {
          // Utility methods
      }
      
      // File: com/example/myapp/Main.java
      package com.example.myapp;
      
      import com.example.myapp.util.Helper;
      
      public class Main {
          public static void main(String[] args) {
              Helper helper = new Helper();
              // Use the helper
          }
      }
            </code></pre>
      
            <h4>6. The java.lang Package</h4>
            <p>The <code>java.lang</code> package is automatically imported into every Java program. It contains fundamental classes like String, System, and Object.</p>
      
            <pre><code class="language-java">
      public class StringExample {
          public static void main(String[] args) {
              String str = "Hello, World!";
              System.out.println(str.length());  // Using String class from java.lang
              System.out.println(Math.PI);       // Using Math class from java.lang
          }
      }
            </code></pre>
      
            <h4>7. Creating and Using JAR Files</h4>
            <p>JAR (Java Archive) files are used to package multiple Java class files and associated metadata and resources into one file for distribution.</p>
      
            <pre><code class="language-java">
      // Creating a JAR file
      jar cvf MyApp.jar com/example/myapp/*.class
      
      // Running a Java application from a JAR file
      java -cp MyApp.jar com.example.myapp.Main
            </code></pre>
      
            <h4>8. Package Naming Conventions</h4>
            <p>Package names are typically all lowercase and use reverse domain name notation:</p>
            <ul>
              <li><code>com.companyname.applicationname</code></li>
              <li><code>org.organizationname.projectname</code></li>
            </ul>
      
            <h4>9. Module System (Java 9+)</h4>
            <p>Java 9 introduced the module system, which allows you to group packages and control their visibility at a higher level:</p>
      
            <pre><code class="language-java">
      // File: module-info.java
      module com.example.myapp {
          exports com.example.myapp.api;
          requires java.sql;
      }
            </code></pre>
            <h3>Java Package Types and Examples</h3>

      <h4>1. Built-in Packages</h4>
      <p>Java provides several built-in packages that contain commonly used classes and interfaces.</p>

      <h5>a. java.lang</h5>
      <p>This package is automatically imported and contains fundamental classes.</p>
      <p><strong>Syntax:</strong> No import needed</p>
      <pre><code class="language-java">
public class StringExample {
    public static void main(String[] args) {
        String message = "Hello, World!";
        System.out.println(message.length());  // Using String class from java.lang
        System.out.println(Math.PI);           // Using Math class from java.lang
    }
}
      </code></pre>

      <h5>b. java.util</h5>
      <p>Contains the Collections framework, legacy collection classes, event model, date and time facilities, internationalization, and miscellaneous utility classes.</p>
      <p><strong>Syntax:</strong> import java.util.*; or import specific classes</p>
      <pre><code class="language-java">
import java.util.ArrayList;
import java.util.Date;

public class UtilExample {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        System.out.println(list);

        Date today = new Date();
        System.out.println("Today is: " + today);
    }
}
      </code></pre>

      <h5>c. java.io</h5>
      <p>Provides for system input and output through data streams, serialization and the file system.</p>
      <p><strong>Syntax:</strong> import java.io.*; or import specific classes</p>
      <pre><code class="language-java">
import java.io.FileWriter;
import java.io.IOException;

public class IOExample {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write("Hello, Java IO!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h4>2. Custom Packages</h4>
      <p>Developers can create their own packages to organize related classes.</p>

      <h5>a. Single-level Package</h5>
      <p><strong>Syntax:</strong> package packagename;</p>
      <pre><code class="language-java">
// File: com/mycompany/MyClass.java
package com.mycompany;

public class MyClass {
    public void sayHello() {
        System.out.println("Hello from MyClass!");
    }
}

// File: Main.java
import com.mycompany.MyClass;

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.sayHello();
    }
}
      </code></pre>

      <h5>b. Multi-level Package</h5>
      <p><strong>Syntax:</strong> package packagename.subpackagename;</p>
      <pre><code class="language-java">
// File: com/mycompany/util/StringUtils.java
package com.mycompany.util;

public class StringUtils {
    public static String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
    }
}

// File: Main.java
import com.mycompany.util.StringUtils;

public class Main {
    public static void main(String[] args) {
        String original = "Hello, World!";
        String reversed = StringUtils.reverse(original);
        System.out.println("Reversed: " + reversed);
    }
}
      </code></pre>

      <h4>3. Third-party Packages</h4>
      <p>These are packages provided by third-party libraries or frameworks.</p>
      <p><strong>Example:</strong> Using the Apache Commons Lang library</p>
      <pre><code class="language-java">
// First, add the library to your project's dependencies
import org.apache.commons.lang3.StringUtils;

public class ThirdPartyExample {
    public static void main(String[] args) {
        String text = "   Hello, World!   ";
        String trimmed = StringUtils.trim(text);
        System.out.println("Trimmed: '" + trimmed + "'");

        boolean isAlpha = StringUtils.isAlphanumeric("abc123");
        System.out.println("Is alphanumeric: " + isAlpha);
    }
}
      </code></pre>

      
            <h4>Practice Exercises</h4>
      
            <h5>Exercise 1: Basic Package Creation</h5>
            <p>Create a package structure for a simple banking application:</p>
            <ol>
              <li>Create a package <code>com.mybank</code>.</li>
              <li>Inside this package, create classes: <code>Account</code>, <code>Customer</code>, and <code>Transaction</code>.</li>
              <li>Create a sub-package <code>com.mybank.utils</code> with a class <code>BankingUtils</code>.</li>
              <li>In a separate file, create a <code>Main</code> class that uses these classes.</li>
            </ol>
      
            <h5>Exercise 2: Access Control</h5>
            <p>Extend the banking application:</p>
            <ol>
              <li>In the <code>Account</code> class, create private fields for account number and balance.</li>
              <li>Create public methods for deposit and withdrawal.</li>
              <li>In the <code>BankingUtils</code> class, create a method to transfer money between accounts.</li>
              <li>Ensure that classes outside the <code>com.mybank</code> package cannot directly access account balances.</li>
            </ol>
      
            <h5>Exercise 3: JAR Creation and Usage</h5>
            <p>Package your banking application:</p>
            <ol>
              <li>Compile all your classes.</li>
              <li>Create a JAR file containing all the classes in your banking application.</li>
              <li>Write a separate application that uses this JAR file to perform banking operations.</li>
            </ol>
      
            <h5>Exercise 4: Module Creation (For Java 9+)</h5>
            <p>Convert your banking application into a module:</p>
            <ol>
              <li>Create a <code>module-info.java</code> file for your banking application.</li>
              <li>Decide which packages to export for external use.</li>
              <li>Create another module that uses your banking module and demonstrate how it accesses the exported packages.</li>
            </ol>
      
            <p>These exercises will help you apply various concepts related to Java packages in practical scenarios, including package creation, access control, JAR file usage, and basic module system concepts.</p>
          </section>
        `
      },
        
    {
      id: 'exception-handling',
      title: 'Exception Handling',
      content: `
        <section id="exception-handling">
          <h2>Exception Handling</h2>
          <h3>Types of Exceptions</h3>
          <p>Exceptions can be categorized into checked and unchecked exceptions.</p>
          <h3>Try, Catch, Finally Blocks</h3>
          <p>Exception handling in Java is a mechanism to handle runtime errors and abnormal conditions that may occur during program execution. It allows you to separate error-handling code from regular code, making programs more robust and maintainable.</p>

      <h3>Key Concepts of Exception Handling</h3>
      <ul>
        <li><strong>Exception:</strong> An event that disrupts the normal flow of program execution.</li>
        <li><strong>try block:</strong> Contains code that might throw an exception.</li>
        <li><strong>catch block:</strong> Handles exceptions if they occur in the try block.</li>
        <li><strong>finally block:</strong> Executes regardless of whether an exception occurs or not.</li>
        <li><strong>throw:</strong> Used to explicitly throw an exception.</li>
        <li><strong>throws:</strong> Declares that a method might throw certain types of exceptions.</li>
      </ul>

      <h3>Types of Exceptions</h3>
      <ul>
        <li><strong>Checked Exceptions:</strong> Compile-time exceptions that must be either caught or declared.</li>
        <li><strong>Unchecked Exceptions (Runtime Exceptions):</strong> Occur at runtime and don't need to be explicitly caught or declared.</li>
        <li><strong>Errors:</strong> Serious problems that are not typically caught by the application.</li>
      </ul>

      <h3>Basic Exception Handling</h3>
      <pre><code class="language-java">
public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // This will throw an ArithmeticException
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero");
        }
        System.out.println("Program continues...");
    }
}
      </code></pre>

      <h3>Multiple catch Blocks</h3>
      <pre><code class="language-java">
public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[3]); // This will throw an ArrayIndexOutOfBoundsException
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception occurred");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array Index Out Of Bounds Exception occurred");
        } catch (Exception e) {
            System.out.println("Some other exception occurred");
        }
    }
}
      </code></pre>

      <h3>finally Block</h3>
      <pre><code class="language-java">
public class FinallyExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception occurred");
        } finally {
            System.out.println("This will always execute");
        }
    }
}
      </code></pre>

      <h3>throw Keyword</h3>
      <pre><code class="language-java">
public class ThrowExample {
    public static void validateAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or older");
        } else {
            System.out.println("Welcome!");
        }
    }

    public static void main(String[] args) {
        try {
            validateAge(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
      </code></pre>

      <h3>throws Keyword</h3>
      <pre><code class="language-java">
import java.io.*;

public class ThrowsExample {
    public static void readFile(String filename) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(filename));
        String line = reader.readLine();
        System.out.println(line);
        reader.close();
    }

    public static void main(String[] args) {
        try {
            readFile("nonexistent.txt");
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
      </code></pre>

      <h3>Custom Exceptions</h3>
      <pre><code class="language-java">
class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

class BankAccount {
    private double balance;

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException("Insufficient funds");
        }
        balance -= amount;
    }
}

public class CustomExceptionExample {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        try {
            account.withdraw(100);
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
      </code></pre>

      <h3>Best Practices for Exception Handling</h3>
      <ul>
        <li>Only catch exceptions that you can handle.</li>
        <li>Catch specific exceptions before more general ones.</li>
        <li>Use finally block to release resources.</li>
        <li>Avoid catching Throwable or Error.</li>
        <li>Log exceptions with sufficient details for debugging.</li>
        <li>Don't swallow exceptions (catch and do nothing).</li>
        <li>Use custom exceptions to provide more meaningful error messages.</li>
      </ul>

      <h3>Practice Exercise</h3>
      <p>Create a program that simulates a simple banking system. Implement the following:</p>
      <ol>
        <li>A 'BankAccount' class with methods for deposit and withdrawal.</li>
        <li>Custom exceptions for insufficient funds and invalid amounts.</li>
        <li>A main method that demonstrates various scenarios (successful transactions, overdrafts, invalid inputs).</li>
        <li>Proper exception handling with try-catch blocks and appropriate error messages.</li>
        <li>Use of finally block to perform cleanup operations.</li>
        <li>Implement a method that reads account details from a file, using throws to declare possible IOExceptions.</li>
      </ol>
      <p>This exercise will help you practice various aspects of exception handling in a real-world scenario.</p>

      <h3>Runtime vs Checked Exceptions</h3>
      <p>Java exceptions are divided into two main categories: checked exceptions and runtime (unchecked) exceptions.</p>

      <h4>Checked Exceptions</h4>
      <ul>
        <li>Checked at compile-time</li>
        <li>Must be either caught or declared in the method signature</li>
        <li>Extend Exception class (excluding RuntimeException and its subclasses)</li>
        <li>Example: IOException, SQLException</li>
      </ul>

      <h4>Runtime (Unchecked) Exceptions</h4>
      <ul>
        <li>Not checked at compile-time</li>
        <li>Don't need to be caught or declared</li>
        <li>Extend RuntimeException</li>
        <li>Example: NullPointerException, ArrayIndexOutOfBoundsException</li>
      </ul>

      <pre><code class="language-java">
// Checked Exception Example
import java.io.*;

public class CheckedExceptionExample {
    public static void readFile(String filename) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(filename));
        String line = reader.readLine();
        System.out.println(line);
        reader.close();
    }

    public static void main(String[] args) {
        try {
            readFile("nonexistent.txt");
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}

// Runtime Exception Example
public class RuntimeExceptionExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};
        System.out.println(numbers[3]); // This will throw ArrayIndexOutOfBoundsException
    }
}
      </code></pre>

      <h3>Handling Multiple Exceptions</h3>
      <p>Java allows catching multiple exceptions in a single catch block (introduced in Java 7) or using multiple catch blocks.</p>

      <h4>Multiple Catch Blocks</h4>
      <pre><code class="language-java">
public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            int result = numbers[4] / 0;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index error: " + e.getMessage());
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("General error: " + e.getMessage());
        }
    }
}
      </code></pre>

      <h4>Multi-catch Block (Java 7+)</h4>
      <pre><code class="language-java">
public class MultiCatchExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            int result = numbers[4] / 0;
        } catch (ArrayIndexOutOfBoundsException | ArithmeticException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
      </code></pre>

      <h3>Exception Handling in Threads</h3>
      <p>Exception handling in threads requires special attention because exceptions thrown in a thread that are not caught will cause the thread to terminate without affecting the main program.</p>

      <h4>Using try-catch in run() method</h4>
      <pre><code class="language-java">
public class ThreadExceptionExample extends Thread {
    public void run() {
        try {
            throw new RuntimeException("Exception in thread");
        } catch (Exception e) {
            System.out.println("Caught exception in thread: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        ThreadExceptionExample thread = new ThreadExceptionExample();
        thread.start();
    }
}
      </code></pre>

      <h4>Using UncaughtExceptionHandler</h4>
      <pre><code class="language-java">
public class UncaughtExceptionHandlerExample implements Thread.UncaughtExceptionHandler {
    public void uncaughtException(Thread t, Throwable e) {
        System.out.println("Uncaught exception in thread " + t.getName() + ": " + e.getMessage());
    }

    public static void main(String[] args) {
        Thread thread = new Thread(() -> {
            throw new RuntimeException("Exception in thread");
        });
        thread.setUncaughtExceptionHandler(new UncaughtExceptionHandlerExample());
        thread.start();
    }
}
      </code></pre>

      <h3>Best Practices for Advanced Exception Handling</h3>
      <ul>
        <li>Use specific exceptions for better error handling and debugging.</li>
        <li>Avoid catching RuntimeException, Error, or Throwable directly.</li>
        <li>When using multiple catch blocks, order them from most specific to most general.</li>
        <li>Use multi-catch for exceptions that require the same handling.</li>
        <li>In multithreaded applications, always handle exceptions within the thread or use UncaughtExceptionHandler.</li>
        <li>Preserve the original exception when wrapping exceptions (use exception chaining).</li>
      </ul>

      <h3>Advanced Practice Exercise</h3>
      <p>Create a multithreaded application that simulates a bank with multiple accounts. Implement the following:</p>
      <ol>
        <li>A 'BankAccount' class with methods for deposit and withdrawal.</li>
        <li>Custom exceptions for insufficient funds and invalid amounts.</li>
        <li>Multiple threads performing concurrent transactions on different accounts.</li>
        <li>Proper exception handling in each thread, including the use of UncaughtExceptionHandler.</li>
        <li>A method that reads initial account balances from a file (demonstrating checked exception handling).</li>
        <li>Implement thread-safe operations to prevent race conditions.</li>
      </ol>
      <p>This exercise will help you practice advanced exception handling in a multithreaded environment, dealing with both checked and unchecked exceptions.</p>
   
          <h3>Assignment Questions</h3>
          <p>1. Write a Java program to handle 'ArithmeticException' by attempting to divide a number by zero and catching the exception.</p>
          <pre><code class="language-java">
  public class Assignment7 {
      public static void main(String[] args) {
          try {
              int result = 10 / 0;
              System.out.println("Result: " + result);
          } catch (ArithmeticException e) {
              System.out.println("Error: Division by zero is not allowed.");
          }
      }
  }
          </code></pre>
          <p>2. Write a Java program to handle 'ArrayIndexOutOfBoundsException' by trying to access an invalid array index and catching the exception.</p>
          <pre><code class="language-java">
  public class Assignment8 {
      public static void main(String[] args) {
          int[] numbers = {1, 2, 3};
          try {
              System.out.println(numbers[3]);
          } catch (ArrayIndexOutOfBoundsException e) {
              System.out.println("Error: Invalid array index accessed.");
          }
      }
  }
          </code></pre>
        </section>`
    },
    {
      id: 'java-io',
      title: 'Java I/O',
      content: `
        <section id="java-io">
          <h2>Java I/O</h2>
          <p>Java I/O (Input/Output) is a part of java.io package, used to process input and produce output. Java I/O operations involve reading data from a source or writing data to a destination.</p>

      <h3>Key Concepts in Java I/O</h3>
      <ul>
        <li><strong>Streams:</strong> Ordered sequence of data.</li>
        <li><strong>Byte Streams:</strong> Handle I/O of raw binary data.</li>
        <li><strong>Character Streams:</strong> Handle I/O of character data, automatically handling character encoding.</li>
        <li><strong>Buffered Streams:</strong> Improve performance by reducing the number of physical I/O operations.</li>
        <li><strong>File I/O:</strong> Reading from and writing to files.</li>
      </ul>

      <h3>1. File Handling</h3>
      <p>The File class is used to create objects that provide abstract representation of file and directory pathnames.</p>

      <pre><code class="language-java">
import java.io.File;
import java.io.IOException;

public class FileExample {
    public static void main(String[] args) {
        try {
            File file = new File("example.txt");
            
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
            
            System.out.println("Absolute path: " + file.getAbsolutePath());
            System.out.println("Writeable: " + file.canWrite());
            System.out.println("Readable: " + file.canRead());
            System.out.println("File size in bytes: " + file.length());
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h3>2. File Input Stream</h3>
      <p>FileInputStream is used to read byte-oriented data from a file.</p>

      <pre><code class="language-java">
import java.io.FileInputStream;
import java.io.IOException;

public class FileInputStreamExample {
    public static void main(String[] args) {
        try (FileInputStream fis = new FileInputStream("example.txt")) {
            int content;
            while ((content = fis.read()) != -1) {
                System.out.print((char) content);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h3>3. File Output Stream</h3>
      <p>FileOutputStream is used for writing byte-oriented data to a file.</p>

      <pre><code class="language-java">
import java.io.FileOutputStream;
import java.io.IOException;

public class FileOutputStreamExample {
    public static void main(String[] args) {
        String data = "Hello, FileOutputStream!";
        try (FileOutputStream fos = new FileOutputStream("output.txt")) {
            byte[] bytes = data.getBytes();
            fos.write(bytes);
            System.out.println("Data written to file.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h3>4. Buffered Reader and Writer</h3>
      <p>BufferedReader and BufferedWriter provide buffering for readers and writers, improving performance.</p>

      <pre><code class="language-java">
import java.io.*;

public class BufferedReaderWriterExample {
    public static void main(String[] args) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("buffered.txt"))) {
            writer.write("Using BufferedWriter");
        } catch (IOException e) {
            e.printStackTrace();
        }

        try (BufferedReader reader = new BufferedReader(new FileReader("buffered.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h3>5. Scanner Class</h3>
      <p>Scanner class is used to get user input and can parse primitive types and strings using regular expressions.</p>

      <pre><code class="language-java">
import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        
        scanner.close();
    }
}
      </code></pre>

      <h3>6. Serialization</h3>
      <p>Serialization is the process of converting an object into a byte stream. Deserialization is the reverse process.</p>

      <pre><code class="language-java">
import java.io.*;

class Person implements Serializable {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

public class SerializationExample {
    public static void main(String[] args) {
        Person person = new Person("John Doe", 30);

        // Serialization
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("person.ser"))) {
            oos.writeObject(person);
            System.out.println("Person object serialized");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Deserialization
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("person.ser"))) {
            Person deserializedPerson = (Person) ois.readObject();
            System.out.println("Deserialized Person: " + deserializedPerson);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h3>7. NIO (New I/O)</h3>
      <p>Java NIO (New I/O) is an alternative I/O API for Java, providing features for intensive I/O operations.</p>

      <pre><code class="language-java">
import java.nio.file.*;

public class NIOExample {
    public static void main(String[] args) {
        Path path = Paths.get("example.txt");
        
        try {
            String content = "Hello, Java NIO!";
            Files.write(path, content.getBytes(), StandardOpenOption.CREATE);
            
            System.out.println("File content:");
            Files.lines(path).forEach(System.out::println);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h3>Best Practices for Java I/O</h3>
      <ul>
        <li>Always close resources (use try-with-resources for automatic resource management).</li>
        <li>Use buffered streams for improved performance when dealing with large amounts of data.</li>
        <li>Handle exceptions properly in I/O operations.</li>
        <li>Use character streams for text files and byte streams for binary files.</li>
        <li>Consider using NIO for high-performance I/O operations, especially with large files or many connections.</li>
      </ul>

      <h3>Practice Exercise</h3>
      <p>Create a program that demonstrates various I/O operations:</p>
      <ol>
        <li>Create a text file and write some content to it using FileWriter.</li>
        <li>Read the content of the file using BufferedReader and display it.</li>
        <li>Append new content to the existing file.</li>
        <li>Use Scanner to read user input and write it to a new file.</li>
        <li>Implement a simple serialization and deserialization example with a custom object.</li>
        <li>Use NIO to copy the contents of one file to another.</li>
      </ol>
      <p>This exercise will help you practice various aspects of Java I/O, including file handling, different types of streams, user input, and serialization.</p>

          <h3>Assignment Questions</h3>
          <p>1. Write a Java program to create a new file named 'test.txt' and write some text to it.</p>
          <pre><code class="language-java">
  import java.io.FileWriter;
  import java.io.IOException;
  
  public class Assignment9 {
      public static void main(String[] args) {
          try {
              FileWriter writer = new FileWriter("test.txt");
              writer.write("Hello, this is a test file.");
              writer.close();
              System.out.println("Successfully wrote to the file.");
          } catch (IOException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
          }
      }
  }
          </code></pre>
          <p>2. Write a Java program to read the contents of a file named 'example.txt' and print it to the console.</p>
          <pre><code class="language-java">
  import java.io.File;
  import java.io.FileNotFoundException;
  import java.util.Scanner;
  
  public class Assignment10 {
      public static void main(String[] args) {
          try {
              File file = new File("example.txt");
              Scanner reader = new Scanner(file);
              while (reader.hasNextLine()) {
                  String data = reader.nextLine();
                  System.out.println(data);
              }
              reader.close();
          } catch (FileNotFoundException e) {
              System.out.println("An error occurred.");
              e.printStackTrace();
          }
      }
  }
          </code></pre>
        </section>`
    },
    {
        id: 'java-concurrency',
        title: 'Concurrency in Java',
        content: `
          <section id="java-concurrency">
            <h2>Concurrency in Java</h2>
            
            <p>Concurrency in Java refers to the ability of a program to execute multiple tasks simultaneously. In a banking system like Trenzy, concurrency is crucial for handling multiple user requests, processing transactions, and maintaining system responsiveness.</p>
      
            <h3>Key Concepts in Java Concurrency</h3>
            <ul>
              <li><strong>Threads:</strong> Lightweight units of execution within a process.</li>
              <li><strong>Synchronization:</strong> Coordinating access to shared resources.</li>
              <li><strong>Locks:</strong> Mechanisms for controlling access to critical sections.</li>
              <li><strong>Thread Safety:</strong> Ensuring that code behaves correctly when accessed by multiple threads.</li>
              <li><strong>Concurrent Collections:</strong> Thread-safe implementations of common data structures.</li>
            </ul>
      
            <h3>Creating and Managing Threads</h3>
            <p>There are two main ways to create threads in Java:</p>
      
            <h4>1. Extending the Thread Class</h4>
            <pre><code class="language-java">
      public class TransactionProcessor extends Thread {
          @Override
          public void run() {
              // Process transactions
          }
      }
      
      // Usage
      TransactionProcessor processor = new TransactionProcessor();
      processor.start();
            </code></pre>
      
            <h4>2. Implementing the Runnable Interface</h4>
            <pre><code class="language-java">
      public class AccountUpdater implements Runnable {
          @Override
          public void run() {
              // Update account balances
          }
      }
      
      // Usage
      Thread updater = new Thread(new AccountUpdater());
      updater.start();
            </code></pre>
      
            <h3>Synchronization in Java</h3>
            <p>Synchronization is crucial in banking applications to prevent race conditions and ensure data integrity.</p>
      
            <h4>Using synchronized Keyword</h4>
            <pre><code class="language-java">
      public class BankAccount {
          private double balance;
      
          public synchronized void deposit(double amount) {
              balance += amount;
          }
      
          public synchronized void withdraw(double amount) {
              if (balance >= amount) {
                  balance -= amount;
              }
          }
      }
            </code></pre>
      
            <h4>Using Lock Interface</h4>
            <pre><code class="language-java">
      import java.util.concurrent.locks.Lock;
      import java.util.concurrent.locks.ReentrantLock;
      
      public class BankAccount {
          private double balance;
          private Lock lock = new ReentrantLock();
      
          public void deposit(double amount) {
              lock.lock();
              try {
                  balance += amount;
              } finally {
                  lock.unlock();
              }
          }
      }
            </code></pre>
      
            <h3>Concurrent Collections</h3>
            <p>Java provides thread-safe collections for concurrent access:</p>
            <ul>
              <li><code>ConcurrentHashMap</code></li>
              <li><code>CopyOnWriteArrayList</code></li>
              <li><code>BlockingQueue</code></li>
            </ul>
      
            <h4>Example: Using ConcurrentHashMap for Account Storage</h4>
            <pre><code class="language-java">
      import java.util.concurrent.ConcurrentHashMap;
      
      public class AccountManager {
          private ConcurrentHashMap<String, BankAccount> accounts = new ConcurrentHashMap<>();
      
          public void addAccount(String accountId, BankAccount account) {
              accounts.put(accountId, account);
          }
      
          public BankAccount getAccount(String accountId) {
              return accounts.get(accountId);
          }
      }
            </code></pre>
      
            <h3>ExecutorService and Thread Pools</h3>
            <p>For efficient thread management, especially in a banking system handling numerous transactions:</p>
      
            <pre><code class="language-java">
      import java.util.concurrent.ExecutorService;
      import java.util.concurrent.Executors;
      
      public class TransactionManager {
          private ExecutorService executor = Executors.newFixedThreadPool(10);
      
          public void processTransaction(Transaction transaction) {
              executor.submit(() -> {
                  // Process the transaction
              });
          }
      }
            </code></pre>
      
            <h3>Challenges in Concurrent Programming</h3>
            <ul>
              <li><strong>Deadlocks:</strong> When two or more threads are waiting for each other to release resources.</li>
              <li><strong>Race Conditions:</strong> When the outcome depends on the sequence of execution of threads.</li>
              <li><strong>Thread Starvation:</strong> When a thread is unable to gain regular access to shared resources.</li>
            </ul>
      
            <h3>Best Practices for Concurrency in Banking Systems</h3>
            <ol>
              <li>Use high-level concurrency objects (like ExecutorService) instead of low-level threads.</li>
              <li>Prefer concurrent collections over synchronized wrappers.</li>
              <li>Use atomic variables for simple shared counters.</li>
              <li>Implement proper exception handling in threads.</li>
              <li>Avoid using Thread.sleep() for synchronization purposes.</li>
              <li>Use thread-safe logging mechanisms.</li>
              <li>Regularly test for concurrency issues using tools like stress testing and static analyzers.</li>
            </ol>
      
            <h3>Practical Exercise: Concurrent Transaction Processing</h3>
            <p>Implement a concurrent transaction processing system for Trenzy Bank:</p>
            <ol>
              <li>Create a TransactionProcessor class that implements Runnable.</li>
              <li>Implement a thread-safe BankAccount class with deposit and withdraw methods.</li>
              <li>Use an ExecutorService to manage a pool of TransactionProcessor threads.</li>
              <li>Implement proper synchronization to ensure account balances are updated correctly.</li>
              <li>Add logging to track the progress of transactions across multiple threads.</li>
              <li>Test the system with a high volume of concurrent transactions to ensure thread safety.</li>
            </ol>
      
          </section>
        `
      },
          {
            id:'java-frameworks',
            title:'Java Framework',
            content:`<section id="java-frameworks">
            <h2>Java Frameworks</h2>
            
            <p>Java frameworks are essential tools in modern Java development, providing structured, reusable code that significantly enhances productivity and maintainability. These frameworks offer pre-built components and architectural patterns that solve common development challenges, allowing developers to focus on business logic rather than reinventing solutions to standard problems.</p>
          
            <h3>Key Benefits of Java Frameworks</h3>
            <ul>
              <li><strong>Rapid Development:</strong> Pre-built components and conventions speed up the development process.</li>
              <li><strong>Standardization:</strong> Frameworks enforce consistent coding practices across projects and teams.</li>
              <li><strong>Scalability:</strong> Many frameworks are designed to handle growth in application size and user base.</li>
              <li><strong>Security:</strong> Built-in security features help protect against common vulnerabilities.</li>
              <li><strong>Community Support:</strong> Popular frameworks have large communities for support and continuous improvement.</li>
            </ul>
          
            <h3>Popular Java Frameworks</h3>
          
            <h4>1. Spring Framework</h4>
            <p>Spring is a comprehensive framework for building enterprise Java applications. It's known for its flexibility and modular approach, allowing developers to use only the components they need.</p>
            
            <h5>Key Features:</h5>
            <ul>
              <li><strong>Dependency Injection (DI):</strong> Spring's core feature, allowing loose coupling between components.</li>
              <li><strong>Aspect-Oriented Programming (AOP):</strong> Enables separation of cross-cutting concerns like logging and security.</li>
              <li><strong>Model-View-Controller (MVC):</strong> A robust web framework for building scalable web applications.</li>
              <li><strong>Transaction Management:</strong> Simplifies database transaction handling across different APIs.</li>
              <li><strong>Spring Boot:</strong> An opinionated approach to configuring Spring applications, reducing boilerplate code.</li>
            </ul>
          
            <h5>Detailed Example: Spring Boot REST API</h5>
            <pre><code class="language-java">
          // Book.java
          @Entity
          public class Book {
              @Id
              @GeneratedValue(strategy = GenerationType.AUTO)
              private Long id;
              private String title;
              private String author;
              
              // Getters and setters
          }
          
          // BookRepository.java
          @Repository
          public interface BookRepository extends JpaRepository&lt;Book, Long&gt; {
          }
          
          // BookController.java
          @RestController
          @RequestMapping("/api/books")
          public class BookController {
              @Autowired
              private BookRepository bookRepository;
          
              @GetMapping
              public List&lt;Book&gt; getAllBooks() {
                  return bookRepository.findAll();
              }
          
              @PostMapping
              public Book createBook(@RequestBody Book book) {
                  return bookRepository.save(book);
              }
          
              @GetMapping("/{id}")
              public ResponseEntity&lt;Book&gt; getBookById(@PathVariable Long id) {
                  return bookRepository.findById(id)
                      .map(ResponseEntity::ok)
                      .orElse(ResponseEntity.notFound().build());
              }
          
              @PutMapping("/{id}")
              public ResponseEntity&lt;Book&gt; updateBook(@PathVariable Long id, @RequestBody Book bookDetails) {
                  return bookRepository.findById(id)
                      .map(book -> {
                          book.setTitle(bookDetails.getTitle());
                          book.setAuthor(bookDetails.getAuthor());
                          return ResponseEntity.ok(bookRepository.save(book));
                      })
                      .orElse(ResponseEntity.notFound().build());
              }
          
              @DeleteMapping("/{id}")
              public ResponseEntity&lt;?&gt; deleteBook(@PathVariable Long id) {
                  return bookRepository.findById(id)
                      .map(book -> {
                          bookRepository.delete(book);
                          return ResponseEntity.ok().build();
                      })
                      .orElse(ResponseEntity.notFound().build());
              }
          }
            </code></pre>
          
            <p>This example demonstrates a complete CRUD (Create, Read, Update, Delete) API for a Book entity using Spring Boot. It showcases Spring's powerful features like dependency injection, JPA integration, and RESTful endpoint mapping.</p>
          
            <h4>2. Hibernate</h4>
            <p>Hibernate is an Object-Relational Mapping (ORM) framework that bridges the gap between object-oriented domain models and relational database systems.</p>
          
            <h5>Key Features:</h5>
            <ul>
              <li><strong>ORM Mapping:</strong> Automatically maps Java classes to database tables.</li>
              <li><strong>HQL (Hibernate Query Language):</strong> Object-oriented query language similar to SQL.</li>
              <li><strong>Caching:</strong> Multiple levels of caching for improved performance.</li>
              <li><strong>Lazy Loading:</strong> Fetches data from the database only when it's needed.</li>
              <li><strong>Dirty Checking:</strong> Automatically detects changes to persistent objects.</li>
            </ul>
          
            <h5>Detailed Example: Hibernate CRUD Operations</h5>
            <pre><code class="language-java">
          // Student.java
          @Entity
          @Table(name = "students")
          public class Student {
              @Id
              @GeneratedValue(strategy = GenerationType.IDENTITY)
              private Long id;
              
              @Column(name = "first_name")
              private String firstName;
              
              @Column(name = "last_name")
              private String lastName;
              
              @Column(name = "email")
              private String email;
              
              // Getters and setters
          }
          
          // StudentDAO.java
          public class StudentDAO {
              private SessionFactory sessionFactory;
          
              public StudentDAO(SessionFactory sessionFactory) {
                  this.sessionFactory = sessionFactory;
              }
          
              public void saveStudent(Student student) {
                  try (Session session = sessionFactory.openSession()) {
                      session.beginTransaction();
                      session.save(student);
                      session.getTransaction().commit();
                  }
              }
          
              public Student getStudent(Long id) {
                  try (Session session = sessionFactory.openSession()) {
                      return session.get(Student.class, id);
                  }
              }
          
              public void updateStudent(Student student) {
                  try (Session session = sessionFactory.openSession()) {
                      session.beginTransaction();
                      session.update(student);
                      session.getTransaction().commit();
                  }
              }
          
              public void deleteStudent(Long id) {
                  try (Session session = sessionFactory.openSession()) {
                      session.beginTransaction();
                      Student student = session.get(Student.class, id);
                      if (student != null) {
                          session.delete(student);
                      }
                      session.getTransaction().commit();
                  }
              }
          
              public List&lt;Student&gt; getAllStudents() {
                  try (Session session = sessionFactory.openSession()) {
                      return session.createQuery("from Student", Student.class).list();
                  }
              }
          }
            </code></pre>
          
            <p>This example shows how Hibernate simplifies database operations. The Student class is automatically mapped to a database table, and the StudentDAO class provides methods for CRUD operations using Hibernate's Session API.</p>
          
            <h4>3. JavaServer Faces (JSF)</h4>
            <p>JSF is a server-side user interface component framework for Java web applications. It's designed to simplify the development of user interfaces for Java web applications.</p>
          
            <h5>Key Features:</h5>
            <ul>
              <li><strong>Component-based UI:</strong> Reusable UI components for rapid development.</li>
              <li><strong>Event-driven Programming:</strong> Handles user interactions through a server-side event model.</li>
              <li><strong>Expression Language (EL):</strong> Simplifies access to backend data and methods.</li>
              <li><strong>Validation and Conversion:</strong> Built-in support for input validation and data type conversion.</li>
              <li><strong>Ajax Support:</strong> Enables partial page updates for responsive UIs.</li>
            </ul>
          
            <h5>Detailed Example: JSF Registration Form</h5>
            <pre><code class="language-java">
          &lt;!-- registration.xhtml --&gt;
          &lt;h:form&gt;
              &lt;h:panelGrid columns="3"&gt;
                  &lt;h:outputLabel for="firstName" value="First Name:" /&gt;
                  &lt;h:inputText id="firstName" value="#{userBean.firstName}" required="true" /&gt;
                  &lt;h:message for="firstName" /&gt;
          
                  &lt;h:outputLabel for="lastName" value="Last Name:" /&gt;
                  &lt;h:inputText id="lastName" value="#{userBean.lastName}" required="true" /&gt;
                  &lt;h:message for="lastName" /&gt;
          
                  &lt;h:outputLabel for="email" value="Email:" /&gt;
                  &lt;h:inputText id="email" value="#{userBean.email}" required="true"&gt;
                      &lt;f:validateRegex pattern="^[A-Za-z0-9+_.-]+@(.+)$" /&gt;
                  &lt;/h:inputText&gt;
                  &lt;h:message for="email" /&gt;
          
                  &lt;h:outputLabel for="password" value="Password:" /&gt;
                  &lt;h:inputSecret id="password" value="#{userBean.password}" required="true" /&gt;
                  &lt;h:message for="password" /&gt;
              &lt;/h:panelGrid&gt;
          
              &lt;h:commandButton value="Register" action="#{userBean.register}" /&gt;
          &lt;/h:form&gt;
          
          // UserBean.java
          @ManagedBean
          @ViewScoped
          public class UserBean {
              private String firstName;
              private String lastName;
              private String email;
              private String password;
          
              public String register() {
                  // Registration logic here
                  FacesContext.getCurrentInstance().addMessage(null, 
                      new FacesMessage(FacesMessage.SEVERITY_INFO, "Registration Successful", 
                      "Welcome " + firstName + "!"));
                  return "confirmation";
              }
          
              // Getters and setters
          }
            </code></pre>
          
            <p>This example demonstrates a JSF registration form with validation. The XHTML file defines the UI components, while the UserBean class handles the form submission and processing.</p>

            <h4>4. Apache Struts</h4>
  <p>Apache Struts is an open-source web application framework for developing Java EE web applications. It uses and extends the Java Servlet API to encourage developers to adopt a model–view–controller (MVC) architecture.</p>

  <h5>Key Features:</h5>
  <ul>
    <li><strong>MVC Architecture:</strong> Separates the application logic from the user interface, promoting cleaner code organization.</li>
    <li><strong>Tag Libraries:</strong> Provides custom tag libraries to simplify the creation of interactive form-based applications.</li>
    <li><strong>AJAX Support:</strong> Offers built-in AJAX support for creating dynamic web pages.</li>
    <li><strong>Validation Framework:</strong> Includes a robust validation framework for both client-side and server-side validation.</li>
    <li><strong>Plugin Framework:</strong> Allows easy integration of various technologies and frameworks.</li>
  </ul>

  <h5>Detailed Example: Struts 2 Action and JSP</h5>
  <pre><code class="language-java">
// HelloWorldAction.java
package com.example.actions;

import com.opensymphony.xwork2.ActionSupport;

public class HelloWorldAction extends ActionSupport {
    private String name;
    private String message;

    public String execute() {
        message = "Hello, " + name + "!";
        return SUCCESS;
    }

    // Getters and setters for name and message
}

// struts.xml
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE struts PUBLIC
    "-//Apache Software Foundation//DTD Struts Configuration 2.5//EN"
    "http://struts.apache.org/dtds/struts-2.5.dtd"&gt;
&lt;struts&gt;
    &lt;package name="default" extends="struts-default"&gt;
        &lt;action name="hello" class="com.example.actions.HelloWorldAction"&gt;
            &lt;result name="success"&gt;/WEB-INF/jsp/hello.jsp&lt;/result&gt;
        &lt;/action&gt;
    &lt;/package&gt;
&lt;/struts&gt;

&lt;!-- hello.jsp --&gt;
&lt;%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%&gt;
&lt;%@ taglib prefix="s" uri="/struts-tags"%&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Hello World&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;&lt;s:property value="message"/&gt;&lt;/h1&gt;
    &lt;s:form action="hello"&gt;
        &lt;s:textfield name="name" label="Your name"/&gt;
        &lt;s:submit value="Submit"/&gt;
    &lt;/s:form&gt;
&lt;/body&gt;
&lt;/html&gt;
  </code></pre>

  <p>This example demonstrates a simple Struts 2 application. The HelloWorldAction processes the user's input, the struts.xml file configures the action mapping, and the JSP file renders the view using Struts tags.</p>

  <h4>5. Microservices with Spring Boot</h4>
  <p>Spring Boot is widely used for building microservices due to its ease of use, embedded server capabilities, and robust ecosystem. Microservices architecture allows for building applications as a suite of small, independently deployable services.</p>

  <h5>Key Concepts:</h5>
  <ul>
    <li><strong>Service Discovery:</strong> Automatically detect the network locations of service instances.</li>
    <li><strong>Load Balancing:</strong> Distribute incoming requests across multiple service instances.</li>
    <li><strong>API Gateway:</strong> Single entry point for all client requests, routing them to appropriate microservices.</li>
    <li><strong>Circuit Breaker:</strong> Handle failures in microservices to prevent cascading failures.</li>
    <li><strong>Distributed Tracing:</strong> Track and visualize requests as they flow through multiple microservices.</li>
  </ul>

  <h5>Example: Simple Microservice with Spring Boot and Eureka</h5>
  <pre><code class="language-java">
// Application.java
@SpringBootApplication
@EnableEurekaClient
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// ProductController.java
@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity&lt;Product&gt; getProduct(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProduct(id));
    }
}

// application.yml
spring:
  application:
    name: product-service

server:
  port: 8080

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/
  </code></pre>

  <p>This example shows a basic Spring Boot microservice registered with Eureka for service discovery. The Application class enables the Eureka client, the ProductController defines a REST endpoint, and the application.yml configures the service and Eureka connection.</p>

          
            <h3>Assignments</h3>
          
            <h4>Assignment 1: Spring Boot REST API</h4>
            <p>Expand on the Book API example:</p>
            <ul>
              <li>Add pagination and sorting to the getAllBooks endpoint.</li>
              <li>Implement a search functionality to find books by title or author.</li>
              <li>Add validation to ensure book titles are unique.</li>
              <li>Implement proper error handling and return appropriate HTTP status codes.</li>
            </ul>
          
            <h4>Assignment 2: Hibernate Database Application</h4>
            <p>Enhance the Student management system:</p>
            <ul>
              <li>Add a Course entity and establish a many-to-many relationship with Student.</li>
              <li>Implement methods to enroll students in courses and retrieve all students for a given course.</li>
              <li>Use Hibernate's criteria API to perform complex queries (e.g., find all students enrolled in more than 3 courses).</li>
              <li>Implement optimistic locking to handle concurrent updates to student records.</li>
            </ul>
          
            <h4>Assignment 3: JSF Web Application</h4>
            <p>Build on the registration form example:</p>
            <ul>
              <li>Create a login page and implement session management.</li>
              <li>Add a profile page where users can view and update their information.</li>
              <li>Implement client-side validation using JSF's built-in validators and custom validators.</li>
              <li>Use AJAX to provide real-time feedback (e.g., check if a username is already taken as the user types).</li>
            </ul>
          
            <h4>Assignment 4: Framework Comparison</h4>
            <p>Compare Spring MVC and JSF:</p>
            <ul>
              <li>Implement the same feature (e.g., a user registration system) in both frameworks.</li>
              <li>Compare the development process, code structure, and resulting application.</li>
              <li>Analyze performance differences between the two implementations.</li>
              <li>Discuss scenarios where one framework might be preferred over the other.</li>
            </ul>
          
            <h4>Assignment 5: Multi-Framework Project</h4>
            <p>Create a complete web application using multiple frameworks:</p>
            <ul>
              <li>Use Spring Boot for the backend REST API.</li>
              <li>Implement data persistence with Hibernate.</li>
              <li>Create the frontend using JSF or a modern JavaScript framework (e.g., React or Angular).</li>
              <li>Implement security using Spring Security.</li>
              <li>Use Spring Boot Actuator for application monitoring and metrics.</li>
            </ul>
          
            <h4>Assignment 6: Struts Web Application and Spring Boot Microservices</h4>
            <p>Develop a more complex web application using Struts and microservices:</p>
            <ul>
              <li>Create a Struts 2 web application for an e-commerce platform's front-end.</li>
              <li>Implement user authentication and authorization using Struts' interceptors.</li>
              <li>Develop multiple Spring Boot microservices for various functionalities (e.g., product catalog, user management, order processing).</li>
              <li>Use Spring Cloud Netflix for service discovery (Eureka) and client-side load balancing (Ribbon).</li>
              <li>Implement an API Gateway using Spring Cloud Gateway to route requests to appropriate microservices.</li>
              <li>Add circuit breaker patterns using Resilience4j to handle potential service failures.</li>
              <li>Implement distributed tracing using Spring Cloud Sleuth and Zipkin to monitor request flow across services.</li>
            </ul>
          

            <p>These assignments will provide hands-on experience with each framework and help you understand how they can work together in a real-world application.</p>
          </section>`
          },
     {
        id: 'advanced-java-topics',
        title: 'Advanced Java Topics',
        content: `
          <section id="advanced-java-topics">
            <h2>Advanced Java Topics</h2>
            <h3>1. Java Generics</h3>
      <p>Generics in Java allow you to write code that can work with different types while providing compile-time type safety. They were introduced in Java 5 to enhance type safety and reduce the need for explicit type casting.</p>

      <h4>Key Concepts:</h4>
      <ul>
        <li>Type Parameters: Represented by angle brackets &lt;&gt;, e.g., List&lt;String&gt;</li>
        <li>Generic Classes and Interfaces</li>
        <li>Bounded Type Parameters: Restricting the types that can be used with generics</li>
        <li>Wildcards: Unknown types represented by ?</li>
      </ul>

      <h4>Example: Generic Class</h4>
      <pre><code class="language-java">
public class Box&lt;T&gt; {
    private T content;

    public void put(T content) {
        this.content = content;
    }

    public T get() {
        return content;
    }
}

// Usage
Box&lt;String&gt; stringBox = new Box&lt;&gt;();
stringBox.put("Hello Generics");
String content = stringBox.get();
      </code></pre>

      <h4>Example: Bounded Type Parameters</h4>
      <pre><code class="language-java">
public class NumberBox&lt;T extends Number&gt; {
    private T number;

    public void set(T number) {
        this.number = number;
    }

    public double sqrt() {
        return Math.sqrt(number.doubleValue());
    }
}

// Usage
NumberBox&lt;Integer&gt; intBox = new NumberBox&lt;&gt;();
intBox.set(16);
System.out.println(intBox.sqrt()); // Output: 4.0
      </code></pre>

      <h4>Practical Application:</h4>
      <p>Generics are extensively used in collections framework, making it type-safe and eliminating the need for explicit casting. They're also crucial in designing flexible and reusable APIs.</p>

      <h3>2. Java Annotations</h3>
      <p>Annotations provide metadata about code that can be processed at compile-time or runtime. They were introduced in Java 5 to provide a way to add metadata to Java source code.</p>

      <h4>Key Concepts:</h4>
      <ul>
        <li>Built-in Annotations: @Override, @Deprecated, @SuppressWarnings, etc.</li>
        <li>Custom Annotations</li>
        <li>Retention Policies: SOURCE, CLASS, RUNTIME</li>
        <li>Target: Specifies where the annotation can be used</li>
      </ul>

      <h4>Example: Custom Annotation</h4>
      <pre><code>
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface TestMethod {
    String description() default "";
}

// Usage
class MyTest {
    @TestMethod(description = "This test checks basic addition")
    public void testAddition() {
        assert 1 + 1 == 2;
    }
}
      </code></pre>

      <h4>Example: Processing Annotations</h4>
      <pre><code class="language-java">
import java.lang.reflect.Method;

public class TestRunner {
    public static void runTests(Class&lt;?&gt; testClass) throws Exception {
        for (Method method : testClass.getDeclaredMethods()) {
            if (method.isAnnotationPresent(TestMethod.class)) {
                TestMethod annotation = method.getAnnotation(TestMethod.class);
                System.out.println("Running test: " + annotation.description());
                method.invoke(testClass.newInstance());
            }
        }
    }

    public static void main(String[] args) throws Exception {
        runTests(MyTest.class);
    }
}
      </code></pre>

      <h4>Practical Application:</h4>
      <p>Annotations are widely used in frameworks like Spring for dependency injection, JPA for object-relational mapping, and JUnit for test method identification. They simplify configuration and make code more self-descriptive.</p>

      <h3>3. Java Reflection</h3>
      <p>Reflection is a feature in Java that allows an executing program to examine or "introspect" upon itself, and manipulate internal properties of the program. It's a powerful tool for inspecting classes, interfaces, fields, and methods at runtime.</p>

      <h4>Key Concepts:</h4>
      <ul>
        <li>Class&lt;?&gt; object: Represents the runtime class of an object</li>
        <li>Inspecting class members: fields, methods, constructors</li>
        <li>Dynamic invocation of methods</li>
        <li>Creating instances of classes at runtime</li>
      </ul>

      <h4>Example: Inspecting Class Members</h4>
      <pre><code class="language-java">
import java.lang.reflect.*;

public class ReflectionExample {
    public static void inspectClass(String className) throws ClassNotFoundException {
        Class&lt;?&gt; clazz = Class.forName(className);
        
        System.out.println("Class name: " + clazz.getName());
        
        System.out.println("Fields:");
        for (Field field : clazz.getDeclaredFields()) {
            System.out.println(field.getType() + " " + field.getName());
        }
        
        System.out.println("Methods:");
        for (Method method : clazz.getDeclaredMethods()) {
            System.out.println(method.getReturnType() + " " + method.getName());
        }
    }

    public static void main(String[] args) throws ClassNotFoundException {
        inspectClass("java.util.ArrayList");
    }
}
      </code></pre>

      <h4>Example: Dynamic Method Invocation</h4>
      <pre><code class="language-java">
import java.lang.reflect.Method;

public class DynamicInvocationExample {
    public static void main(String[] args) throws Exception {
        String str = "Hello, Reflection!";
        Method lengthMethod = String.class.getMethod("length");
        int length = (int) lengthMethod.invoke(str);
        System.out.println("Length: " + length);
    }
}
      </code></pre>

      <h4>Practical Application:</h4>
      <p>Reflection is used extensively in frameworks for dependency injection, serialization libraries, and testing tools. It allows for flexible and dynamic code that can adapt to different classes and objects at runtime.</p>

      <h3>4. Java NIO (New I/O)</h3>
      <p>Java NIO (New I/O) is an alternative I/O API for Java, providing features for intensive I/O operations. It was introduced in Java 1.4 to complement the standard I/O APIs.</p>

      <h4>Key Concepts:</h4>
      <ul>
        <li>Channels and Buffers: Primary abstractions in NIO</li>
        <li>Non-blocking I/O: Allows a single thread to manage multiple I/O channels</li>
        <li>Selectors: Enable a single thread to monitor multiple channels</li>
        <li>Memory-mapped files: Allows files to be accessed as if they were in memory</li>
      </ul>

      <h4>Example: Reading a File with NIO</h4>
      <pre><code class="language-java">
import java.nio.file.*;
import java.nio.charset.StandardCharsets;

public class NIOFileReadExample {
    public static void main(String[] args) throws Exception {
        Path path = Paths.get("example.txt");
        byte[] bytes = Files.readAllBytes(path);
        String content = new String(bytes, StandardCharsets.UTF_8);
        System.out.println(content);
    }
}
      </code></pre>

      <h4>Example: Using Channels and Buffers</h4>
      <pre><code class="language-java">
import java.nio.*;
import java.nio.channels.*;
import java.nio.file.*;

public class NIOChannelExample {
    public static void main(String[] args) throws Exception {
        Path path = Paths.get("example.txt");
        try (FileChannel channel = FileChannel.open(path, StandardOpenOption.READ)) {
            ByteBuffer buffer = ByteBuffer.allocate(1024);
            while (channel.read(buffer) > 0) {
                buffer.flip();
                while (buffer.hasRemaining()) {
                    System.out.print((char) buffer.get());
                }
                buffer.clear();
            }
        }
    }
}
      </code></pre>

      <h4>Practical Application:</h4>
      <p>NIO is particularly useful for applications that need to handle many concurrent connections, such as server applications. It provides better performance for large-scale I/O operations and offers more control over I/O processes.</p>
    </section>`
},
      {
        id:'multithreading',
        title:'Multithreading',
        content:`<section id="multithreading">
        <h3> Multithreading</h3>
        <p>Multithreading in Java is a feature that allows concurrent execution of two or more parts of a program for maximum utilization of CPU. Each part of such a program is called a thread. Threads are lightweight compared to processes, as they share the process's resources.</p>

        <h4>1. Creating Threads</h4>
        <p>In Java, there are two main ways to create a thread:</p>
  
        <h5>a. Extending the Thread class</h5>
        <pre><code class="language-java">
  public class MyThread extends Thread {
      public void run() {
          System.out.println("Thread running: " + Thread.currentThread().getName());
      }
  
      public static void main(String[] args) {
          MyThread thread = new MyThread();
          thread.start();
      }
  }
        </code></pre>
  
        <h5>b. Implementing the Runnable interface</h5>
        <pre><code class="language-java">
  public class MyRunnable implements Runnable {
      public void run() {
          System.out.println("Thread running: " + Thread.currentThread().getName());
      }
  
      public static void main(String[] args) {
          Thread thread = new Thread(new MyRunnable());
          thread.start();
      }
  }
        </code></pre>
  
        <p>Implementing Runnable is generally preferred as it doesn't waste the single inheritance, but both approaches work similarly.</p>
  
        <h4>2. Thread Lifecycle</h4>
        <p>A thread goes through various states in its lifecycle:</p>
        <ul>
          <li>New: The thread is created but not yet started.</li>
          <li>Runnable: The thread is ready to run and is waiting for CPU time.</li>
          <li>Running: The thread is currently executing.</li>
          <li>Blocked/Waiting: The thread is temporarily inactive (e.g., waiting for I/O or synchronization).</li>
          <li>Terminated: The thread has completed its execution.</li>
        </ul>
  
        <h4>3. Thread Synchronization</h4>
        <p>When multiple threads access shared resources, we need to synchronize them to avoid race conditions and ensure thread safety.</p>
  
        <h5>a. Synchronized Methods</h5>
        <pre><code class="language-java">
  public class Counter {
      private int count = 0;
  
      public synchronized void increment() {
          count++;
      }
  
      public synchronized int getCount() {
          return count;
      }
  }
        </code></pre>
  
        <h5>b. Synchronized Blocks</h5>
        <pre><code class="language-java">
  public class Counter {
      private int count = 0;
      private Object lock = new Object();
  
      public void increment() {
          synchronized(lock) {
              count++;
          }
      }
  
      public int getCount() {
          synchronized(lock) {
              return count;
          }
      }
  }
        </code></pre>
  
        <h4>4. Thread Communication</h4>
        <p>Threads can communicate with each other using wait(), notify(), and notifyAll() methods.</p>
  
        <pre><code class="language-java">
  public class ProducerConsumer {
      private LinkedList<Integer> list = new LinkedList<>();
      private final int LIMIT = 10;
      private Object lock = new Object();
  
      public void produce() throws InterruptedException {
          int value = 0;
          while (true) {
              synchronized (lock) {
                  while (list.size() == LIMIT) {
                      lock.wait();
                  }
                  list.add(value++);
                  lock.notify();
              }
          }
      }
  
      public void consume() throws InterruptedException {
          while (true) {
              synchronized (lock) {
                  while (list.isEmpty()) {
                      lock.wait();
                  }
                  System.out.println("List size is: " + list.size());
                  int value = list.removeFirst();
                  System.out.println("Consumed: " + value);
                  lock.notify();
              }
              Thread.sleep(1000);
          }
      }
  
      public static void main(String[] args) {
          ProducerConsumer pc = new ProducerConsumer();
          Thread producer = new Thread(() -> {
              try {
                  pc.produce();
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          });
          Thread consumer = new Thread(() -> {
              try {
                  pc.consume();
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          });
          producer.start();
          consumer.start();
      }
  }
        </code></pre>
  
        <h4>5. Thread Pools</h4>
        <p>Thread pools are used to reuse threads for executing multiple tasks, improving performance and resource management.</p>
  
        <pre><code class="language-java">
  import java.util.concurrent.ExecutorService;
  import java.util.concurrent.Executors;
  
  public class ThreadPoolExample {
      public static void main(String[] args) {
          ExecutorService executor = Executors.newFixedThreadPool(5);
          for (int i = 0; i < 10; i++) {
              Runnable worker = new WorkerThread("" + i);
              executor.execute(worker);
          }
          executor.shutdown();
          while (!executor.isTerminated()) {
          }
          System.out.println("Finished all threads");
      }
  }
  
  class WorkerThread implements Runnable {
      private String command;
      public WorkerThread(String s) {
          this.command = s;
      }
      public void run() {
          System.out.println(Thread.currentThread().getName() + " Start. Command = " + command);
          processCommand();
          System.out.println(Thread.currentThread().getName() + " End.");
      }
      private void processCommand() {
          try {
              Thread.sleep(5000);
          } catch (InterruptedException e) {
              e.printStackTrace();
          }
      }
  }
        </code></pre>
  
        <h4>6. Concurrent Collections</h4>
        <p>Java provides thread-safe collections in the java.util.concurrent package.</p>
  
        <pre><code class="language-java">
  import java.util.concurrent.ConcurrentHashMap;
  
  public class ConcurrentCollectionExample {
      public static void main(String[] args) {
          ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
          map.put("A", 1);
          map.put("B", 2);
          map.put("C", 3);
  
          // Multiple threads can safely modify the map
          Thread t1 = new Thread(() -> map.put("D", 4));
          Thread t2 = new Thread(() -> map.put("E", 5));
  
          t1.start();
          t2.start();
  
          try {
              t1.join();
              t2.join();
          } catch (InterruptedException e) {
              e.printStackTrace();
          }
  
          System.out.println(map);
      }
  }
        </code></pre>
  
        <h4>7. Deadlock</h4>
        <p>Deadlock occurs when two or more threads are blocked forever, each waiting for the other to release a lock.</p>
  
        <pre><code class="language-java">
  public class DeadlockExample {
      private static Object lock1 = new Object();
      private static Object lock2 = new Object();
  
      public static void main(String[] args) {
          Thread thread1 = new Thread(() -> {
              synchronized (lock1) {
                  System.out.println("Thread 1: Holding lock 1...");
                  try { Thread.sleep(10); } catch (InterruptedException e) {}
                  System.out.println("Thread 1: Waiting for lock 2...");
                  synchronized (lock2) {
                      System.out.println("Thread 1: Holding lock 1 & 2...");
                  }
              }
          });
  
          Thread thread2 = new Thread(() -> {
              synchronized (lock2) {
                  System.out.println("Thread 2: Holding lock 2...");
                  try { Thread.sleep(10); } catch (InterruptedException e) {}
                  System.out.println("Thread 2: Waiting for lock 1...");
                  synchronized (lock1) {
                      System.out.println("Thread 2: Holding lock 1 & 2...");
                  }
              }
          });
  
          thread1.start();
          thread2.start();
      }
  }
        </code></pre>
  
        <h4>8. Java Memory Model and Volatile Keyword</h4>
        <p>The volatile keyword ensures that changes to a variable are immediately visible to other threads.</p>
  
        <pre><code class="language-java">
  public class VolatileExample {
      private static volatile boolean flag = false;
  
      public static void main(String[] args) {
          Thread writerThread = new Thread(() -> {
              try {
                  Thread.sleep(1000);
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
              flag = true;
              System.out.println("Flag set to true");
          });
  
          Thread readerThread = new Thread(() -> {
              while (!flag) {
                  // Busy wait
              }
              System.out.println("Flag is true, exiting...");
          });
  
          writerThread.start();
          readerThread.start();
      }
  }
        </code></pre>
  
        <h4>Practice Exercise</h4>
        <p>Implement a simple bank account system with the following requirements:</p>
        <ol>
          <li>Create a BankAccount class with methods for deposit and withdrawal.</li>
          <li>Implement proper synchronization to ensure thread-safety.</li>
          <li>Create multiple threads to simulate concurrent deposits and withdrawals.</li>
          <li>Use a ThreadPool to manage the threads.</li>
          <li>Implement a method to transfer money between two accounts, ensuring no deadlocks occur.</li>
        </ol>
  
        <p>This exercise will help you apply various multithreading concepts in a practical scenario.</p>
      
        </section>`
      }, 
      {
        id:'networking',
        title:'Networking',
        content:`<section id="networking">
        <h3> Networking</h3>
        <p>Java provides a robust and flexible networking API through the java.net package. This API allows developers to create networked applications ranging from simple client-server programs to complex distributed systems.</p>

        <h4>1. Basic Networking Concepts</h4>
        <ul>
          <li><strong>IP Address:</strong> A unique identifier for a device on a network.</li>
          <li><strong>Port:</strong> A number that identifies a specific process to which a message is to be forwarded.</li>
          <li><strong>Socket:</strong> An endpoint for communication between two machines.</li>
          <li><strong>Protocol:</strong> A set of rules that governs the data communication.</li>
        </ul>
  
        <h4>2. Working with IP Addresses</h4>
        <p>Java's InetAddress class represents an IP address.</p>
  
        <pre><code class="language-java">
  import java.net.InetAddress;
  import java.net.UnknownHostException;
  
  public class IPAddressExample {
      public static void main(String[] args) {
          try {
              InetAddress address = InetAddress.getLocalHost();
              System.out.println("Local Host: " + address.getHostAddress());
  
              address = InetAddress.getByName("www.example.com");
              System.out.println("Example.com IP: " + address.getHostAddress());
  
              InetAddress[] addresses = InetAddress.getAllByName("www.google.com");
              for (InetAddress addr : addresses) {
                  System.out.println("Google IP: " + addr.getHostAddress());
              }
          } catch (UnknownHostException e) {
              e.printStackTrace();
          }
      }
  }
        </code></pre>
  
        <h4>3. Socket Programming</h4>
        <p>Sockets provide a communication mechanism between two computers using TCP. Here's a simple client-server example:</p>
  
        <h5>Server:</h5>
        <pre><code class="language-java">
  import java.io.*;
  import java.net.*;
  
  public class SimpleServer {
      public static void main(String[] args) {
          try (ServerSocket serverSocket = new ServerSocket(6666)) {
              System.out.println("Server is listening on port 6666");
              while (true) {
                  Socket clientSocket = serverSocket.accept();
                  System.out.println("Client connected: " + clientSocket.getInetAddress());
                  
                  BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                  PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
                  
                  String inputLine;
                  while ((inputLine = in.readLine()) != null) {
                      System.out.println("Received: " + inputLine);
                      out.println("Server received: " + inputLine);
                      if (inputLine.equals("bye")) {
                          break;
                      }
                  }
                  clientSocket.close();
              }
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
        </code></pre>
  
        <h5>Client:</h5>
        <pre><code class="language-java">
  import java.io.*;
  import java.net.*;
  
  public class SimpleClient {
      public static void main(String[] args) {
          try (Socket socket = new Socket("localhost", 6666)) {
              PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
              BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
              BufferedReader stdIn = new BufferedReader(new InputStreamReader(System.in));
              
              String userInput;
              while ((userInput = stdIn.readLine()) != null) {
                  out.println(userInput);
                  System.out.println("Server response: " + in.readLine());
                  if (userInput.equals("bye")) {
                      break;
                  }
              }
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
        </code></pre>
  
        <h4>4. URL Processing</h4>
        <p>Java provides the URL class to represent and manipulate Uniform Resource Locators.</p>
  
        <pre><code class="language-java">
  import java.net.*;
  import java.io.*;
  
  public class URLExample {
      public static void main(String[] args) {
          try {
              URL url = new URL("https://www.example.com/index.html");
              System.out.println("Protocol: " + url.getProtocol());
              System.out.println("Host: " + url.getHost());
              System.out.println("Path: " + url.getPath());
  
              BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
              String inputLine;
              while ((inputLine = in.readLine()) != null) {
                  System.out.println(inputLine);
              }
              in.close();
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
        </code></pre>
  
        <h4>5. UDP Programming</h4>
        <p>UDP (User Datagram Protocol) is a connectionless protocol. Here's an example of UDP client and server:</p>
  
        <h5>UDP Server:</h5>
        <pre><code class="language-java">
  import java.net.*;
  
  public class UDPServer {
      public static void main(String[] args) {
          try (DatagramSocket socket = new DatagramSocket(9876)) {
              byte[] receiveData = new byte[1024];
              
              while (true) {
                  DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
                  socket.receive(receivePacket);
                  String sentence = new String(receivePacket.getData(), 0, receivePacket.getLength());
                  System.out.println("Received: " + sentence);
                  
                  InetAddress IPAddress = receivePacket.getAddress();
                  int port = receivePacket.getPort();
                  String capitalizedSentence = sentence.toUpperCase();
                  byte[] sendData = capitalizedSentence.getBytes();
                  DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, IPAddress, port);
                  socket.send(sendPacket);
              }
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
        </code></pre>
  
        <h5>UDP Client:</h5>
        <pre><code class="language-java">
  import java.net.*;
  import java.io.*;
  
  public class UDPClient {
      public static void main(String[] args) {
          try (DatagramSocket socket = new DatagramSocket()) {
              InetAddress IPAddress = InetAddress.getByName("localhost");
              byte[] sendData = new byte[1024];
              byte[] receiveData = new byte[1024];
              
              BufferedReader inFromUser = new BufferedReader(new InputStreamReader(System.in));
              String sentence = inFromUser.readLine();
              sendData = sentence.getBytes();
              
              DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, IPAddress, 9876);
              socket.send(sendPacket);
              
              DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
              socket.receive(receivePacket);
              String modifiedSentence = new String(receivePacket.getData(), 0, receivePacket.getLength());
              System.out.println("From Server: " + modifiedSentence);
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
        </code></pre>
  
        <h4>6. Non-Blocking I/O (NIO)</h4>
        <p>Java NIO provides an alternative to standard I/O that offers improved performance for certain types of applications.</p>
  
        <pre><code class="language-java">
  import java.io.IOException;
  import java.net.InetSocketAddress;
  import java.nio.ByteBuffer;
  import java.nio.channels.SelectionKey;
  import java.nio.channels.Selector;
  import java.nio.channels.ServerSocketChannel;
  import java.nio.channels.SocketChannel;
  import java.util.Iterator;
  import java.util.Set;
  
  public class NIOServer {
      public static void main(String[] args) {
          try {
              ServerSocketChannel serverChannel = ServerSocketChannel.open();
              serverChannel.bind(new InetSocketAddress("localhost", 5000));
              serverChannel.configureBlocking(false);
  
              Selector selector = Selector.open();
              serverChannel.register(selector, SelectionKey.OP_ACCEPT);
  
              ByteBuffer buffer = ByteBuffer.allocate(256);
  
              while (true) {
                  selector.select();
                  Set<SelectionKey> selectedKeys = selector.selectedKeys();
                  Iterator<SelectionKey> iter = selectedKeys.iterator();
  
                  while (iter.hasNext()) {
                      SelectionKey key = iter.next();
  
                      if (key.isAcceptable()) {
                          register(selector, serverChannel);
                      }
  
                      if (key.isReadable()) {
                          answerWithEcho(buffer, key);
                      }
  
                      iter.remove();
                  }
              }
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  
      private static void register(Selector selector, ServerSocketChannel serverChannel) throws IOException {
          SocketChannel client = serverChannel.accept();
          client.configureBlocking(false);
          client.register(selector, SelectionKey.OP_READ);
      }
  
      private static void answerWithEcho(ByteBuffer buffer, SelectionKey key) throws IOException {
          SocketChannel client = (SocketChannel) key.channel();
          client.read(buffer);
          buffer.flip();
          client.write(buffer);
          buffer.clear();
      }
  }
        </code></pre>
  
        <h4>7. Multicasting</h4>
        <p>Multicasting allows sending data to multiple recipients simultaneously.</p>
  
        <pre><code class="language-java">
  import java.net.*;
  
  public class MulticastSender {
      public static void main(String[] args) {
          try (DatagramSocket socket = new DatagramSocket()) {
              InetAddress group = InetAddress.getByName("230.0.0.0");
              String msg = "Hello Multicast";
              DatagramPacket packet = new DatagramPacket(msg.getBytes(), msg.length(), group, 4446);
              socket.send(packet);
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
  
  public class MulticastReceiver {
      public static void main(String[] args) {
          try (MulticastSocket socket = new MulticastSocket(4446)) {
              InetAddress group = InetAddress.getByName("230.0.0.0");
              socket.joinGroup(group);
  
              byte[] buf = new byte[256];
              DatagramPacket packet = new DatagramPacket(buf, buf.length);
              socket.receive(packet);
  
              String received = new String(packet.getData(), 0, packet.getLength());
              System.out.println("Received: " + received);
  
              socket.leaveGroup(group);
          } catch (IOException e) {
              e.printStackTrace();
          }
      }
  }
        </code></pre>
  
        <h4>Practice Exercise</h4>
        <p>Implement a simple chat application with the following features:</p>
        <ol>
          <li>A server that can handle multiple clients simultaneously.</li>
          <li>Clients should be able to send messages to all other clients (broadcast).</li>
          <li>Implement a simple protocol for actions like joining, leaving, and listing all active users.</li>
          <li>Use NIO for improved scalability.</li>
          <li>Add basic encryption for the messages exchanged.</li>
        </ol>
  
        <p>This exercise will help you apply various networking concepts in a practical scenario, including socket programming, multi-client handling, and protocol design.</p>
      
        </section>`
      },
      {
        id:'database',
        title:'Database Connectivity',
        content:`<section id="database">
                  <h3> Java Database Connectivity (JDBC)</h3>
                <p>JDBC (Java Database Connectivity) is an API for connecting and executing queries with a database. It provides methods for querying and updating data in a database. JDBC is oriented towards relational databases.</p>

      <h4>1. JDBC Architecture</h4>
      <ul>
        <li><strong>JDBC API:</strong> Provides the application-to-JDBC Manager connection.</li>
        <li><strong>JDBC Driver Manager:</strong> Loads a specific driver for the database.</li>
        <li><strong>JDBC Driver:</strong> Handles the communication with the database.</li>
      </ul>

      <h4>2. JDBC Drivers</h4>
      <p>There are four types of JDBC drivers:</p>
      <ol>
        <li>Type 1: JDBC-ODBC Bridge driver</li>
        <li>Type 2: Native-API driver (partially Java driver)</li>
        <li>Type 3: Network-Protocol driver (fully Java driver)</li>
        <li>Type 4: Thin driver (fully Java driver)</li>
      </ol>
      <p>Type 4 is the most commonly used as it's platform-independent and performs better.</p>

      <h4>3. Basic JDBC Steps</h4>
      <ol>
        <li>Import the packages: <code>java.sql.*</code></li>
        <li>Load and register the JDBC driver</li>
        <li>Open a connection</li>
        <li>Execute a query</li>
        <li>Process the results</li>
        <li>Close the connection</li>
      </ol>

      <h4>4. Connecting to a Database</h4>
      <pre><code class="language-java">
import java.sql.*;

public class JDBCConnection {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "username";
        String password = "password";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("Connected to the database successfully.");
        } catch (SQLException e) {
            System.out.println("Error in connecting to the database");
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h4>5. Executing SQL Statements</h4>
      <h5>a. Statement for simple queries:</h5>
      <pre><code class="language-java">
public class JDBCStatement {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "username";
        String password = "password";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement()) {
            
            String sql = "SELECT id, name, age FROM users";
            ResultSet rs = stmt.executeQuery(sql);

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h5>b. PreparedStatement for parameterized queries:</h5>
      <pre><code class="language-java">
public class JDBCPreparedStatement {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "username";
        String password = "password";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            String sql = "INSERT INTO users (name, age) VALUES (?, ?)";
            
            try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
                pstmt.setString(1, "John Doe");
                pstmt.setInt(2, 30);
                int rowsAffected = pstmt.executeUpdate();
                System.out.println(rowsAffected + " row(s) inserted.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h4>6. Transaction Management</h4>
      <pre><code class="language-java">
public class JDBCTransaction {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "username";
        String password = "password";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            conn.setAutoCommit(false);
            
            try (Statement stmt = conn.createStatement()) {
                String sql1 = "INSERT INTO accounts (id, balance) VALUES (1, 1000)";
                String sql2 = "INSERT INTO accounts (id, balance) VALUES (2, 1000)";
                String sql3 = "UPDATE accounts SET balance = balance - 500 WHERE id = 1";
                String sql4 = "UPDATE accounts SET balance = balance + 500 WHERE id = 2";

                stmt.executeUpdate(sql1);
                stmt.executeUpdate(sql2);
                stmt.executeUpdate(sql3);
                stmt.executeUpdate(sql4);

                conn.commit();
                System.out.println("Transaction completed successfully.");
            } catch (SQLException e) {
                conn.rollback();
                System.out.println("Transaction rolled back.");
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h4>7. Batch Processing</h4>
      <pre><code class="language-java">
public class JDBCBatch {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "username";
        String password = "password";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement()) {

            conn.setAutoCommit(false);
            
            stmt.addBatch("INSERT INTO users (name, age) VALUES ('Alice', 25)");
            stmt.addBatch("INSERT INTO users (name, age) VALUES ('Bob', 30)");
            stmt.addBatch("INSERT INTO users (name, age) VALUES ('Charlie', 35)");

            int[] updateCounts = stmt.executeBatch();
            conn.commit();

            System.out.println("Batch executed successfully.");
            for (int count : updateCounts) {
                System.out.println(count + " row(s) affected.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h4>8. Metadata</h4>
      <pre><code class="language-java">
public class JDBCMetaData {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "username";
        String password = "password";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            DatabaseMetaData dbmd = conn.getMetaData();

            System.out.println("Driver Name: " + dbmd.getDriverName());
            System.out.println("Driver Version: " + dbmd.getDriverVersion());
            System.out.println("Database Product Name: " + dbmd.getDatabaseProductName());
            System.out.println("Database Product Version: " + dbmd.getDatabaseProductVersion());

            ResultSet rs = dbmd.getTables(null, null, "%", new String[] {"TABLE"});
            System.out.println("Tables in the database:");
            while (rs.next()) {
                System.out.println(rs.getString("TABLE_NAME"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h4>9. Connection Pooling</h4>
      <p>Connection pooling improves performance by reusing database connections. Here's an example using HikariCP, a popular connection pool:</p>

      <pre><code class="language-java">
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import java.sql.*;

public class JDBCConnectionPool {
    public static void main(String[] args) {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://localhost:3306/mydatabase");
        config.setUsername("username");
        config.setPassword("password");
        config.addDataSourceProperty("cachePrepStmts", "true");
        config.addDataSourceProperty("prepStmtCacheSize", "250");
        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");

        try (HikariDataSource ds = new HikariDataSource(config);
             Connection conn = ds.getConnection();
             Statement stmt = conn.createStatement()) {

            ResultSet rs = stmt.executeQuery("SELECT * FROM users");
            while (rs.next()) {
                System.out.println(rs.getInt("id") + ", " + rs.getString("name"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
      </code></pre>

      <h4>Practice Exercise</h4>
      <p>Implement a simple library management system using JDBC with the following features:</p>
      <ol>
        <li>Create tables for books, authors, and borrowers.</li>
        <li>Implement CRUD operations for each entity.</li>
        <li>Create a method to check out and return books, updating the necessary tables.</li>
        <li>Implement a search functionality to find books by title, author, or ISBN.</li>
        <li>Use prepared statements for all database operations.</li>
        <li>Implement proper transaction management for operations that affect multiple tables.</li>
        <li>Use connection pooling to improve performance.</li>
        <li>Create a simple command-line interface to interact with the system.</li>
      </ol>

      <p>This exercise will help you apply various JDBC concepts in a practical scenario, including connection management, querying, updating, transaction handling, and performance optimization.</p>           
        </section>`
      },
      {
        id:'lambda',
        title:'Lambda Expressions and Functional Interfaces',
        content:`<section id='lambda'>
                <h3> Lambda Expressions and Functional Interfaces</h3>
                <p>Lambda expressions and functional interfaces were introduced in Java 8 to facilitate functional programming. They provide a clear and concise way to represent one method interface using an expression. Lambda expressions can be thought of as anonymous functions, capable of being passed around as if they were objects and executed on demand.</p>

      <h4>1. Functional Interfaces</h4>
      <p>A functional interface is an interface that contains exactly one abstract method. Java 8 introduced the @FunctionalInterface annotation to mark interfaces as functional interfaces.</p>

      <pre><code class="language-java">
@FunctionalInterface
public interface Greeting {
    void greet(String name);
}

// Traditional implementation
Greeting traditionalGreeting = new Greeting() {
    @Override
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }
};

// Lambda expression
Greeting lambdaGreeting = (String name) -> System.out.println("Hello, " + name);

traditionalGreeting.greet("Alice");  // Output: Hello, Alice
lambdaGreeting.greet("Bob");         // Output: Hello, Bob
      </code></pre>

      <h4>2. Lambda Expression Syntax</h4>
      <p>The basic syntax of a lambda expression is:</p>
      <pre><code>(parameter-list) -> { body }</code></pre>
      <p>For single expressions, curly braces can be omitted:</p>
      <pre><code>(parameter-list) -> expression</code></pre>

      <h4>3. Method References</h4>
      <p>Method references provide a way to refer to methods or constructors without executing them. They can be used as a shorter alternative to certain lambda expressions.</p>

      <pre><code class="language-java">
import java.util.Arrays;
import java.util.List;

public class MethodReferenceExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

        // Lambda expression
        names.forEach(name -> System.out.println(name));

        // Method reference
        names.forEach(System.out::println);
    }
}
      </code></pre>

      <h4>4. Built-in Functional Interfaces</h4>
      <p>Java provides several built-in functional interfaces in the java.util.function package:</p>

      <h5>a. Function<T,R></h5>
      <pre><code class="language-java">
import java.util.function.Function;

public class FunctionExample {
    public static void main(String[] args) {
        Function<Integer, String> intToString = Object::toString;
        System.out.println(intToString.apply(123));  // Output: "123"

        Function<String, Integer> stringToInt = Integer::parseInt;
        System.out.println(stringToInt.apply("123"));  // Output: 123

        Function<Integer, Integer> multiply = x -> x * 2;
        System.out.println(multiply.apply(5));  // Output: 10
    }
}
      </code></pre>

      <h5>b. Predicate<T></h5>
      <pre><code class="language-java">
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class PredicateExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        Predicate<Integer> isEven = n -> n % 2 == 0;
        numbers.stream().filter(isEven).forEach(System.out::println);
        // Output: 2 4 6 8 10
    }
}
      </code></pre>

      <h5>c. Consumer<T></h5>
      <pre><code class="language-java">
import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class ConsumerExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

        Consumer<String> printUpperCase = name -> System.out.println(name.toUpperCase());
        names.forEach(printUpperCase);
        // Output:
        // ALICE
        // BOB
        // CHARLIE
    }
}
      </code></pre>

      <h5>d. Supplier<T></h5>
      <pre><code class="language-java">
import java.util.function.Supplier;
import java.util.Random;

public class SupplierExample {
    public static void main(String[] args) {
        Supplier<Integer> randomIntSupplier = () -> new Random().nextInt(100);
        System.out.println(randomIntSupplier.get());  // Output: Random number between 0 and 99
    }
}
      </code></pre>

      <h4>5. Composing Functions</h4>
      <p>Functional interfaces often provide methods to compose functions, creating more complex operations from simpler ones.</p>

      <pre><code class="language-java">
import java.util.function.Function;

public class FunctionCompositionExample {
    public static void main(String[] args) {
        Function<Integer, Integer> multiply = x -> x * 2;
        Function<Integer, Integer> add = x -> x + 3;

        Function<Integer, Integer> multiplyThenAdd = add.compose(multiply);
        System.out.println(multiplyThenAdd.apply(5));  // Output: 13 (5 * 2 + 3)

        Function<Integer, Integer> addThenMultiply = add.andThen(multiply);
        System.out.println(addThenMultiply.apply(5));  // Output: 16 ((5 + 3) * 2)
    }
}
      </code></pre>

      <h4>6. Capturing Variables</h4>
      <p>Lambda expressions can capture variables from their enclosing scope. However, these variables must be effectively final (either declared final or never modified after initialization).</p>

      <pre><code class="language-java">
public class VariableCaptureExample {
    public static void main(String[] args) {
        String prefix = "Hello, ";
        Greeting greeting = name -> System.out.println(prefix + name);
        greeting.greet("World");  // Output: Hello, World
        
        // This would cause a compilation error:
        // prefix = "Hi, ";
    }
}
      </code></pre>

      <h4>7. Exception Handling in Lambda Expressions</h4>
      <p>Lambda expressions can throw exceptions, but they must be compatible with the abstract method in the functional interface.</p>

      <pre><code class="language-java">
import java.io.IOException;
import java.util.function.Consumer;

public class LambdaExceptionHandling {
    public static void main(String[] args) {
        Consumer<String> printWithException = s -> {
            try {
                if (s == null) {
                    throw new IOException("Null input");
                }
                System.out.println(s);
            } catch (IOException e) {
                System.err.println("Error: " + e.getMessage());
            }
        };

        printWithException.accept("Hello");  // Output: Hello
        printWithException.accept(null);     // Output: Error: Null input
    }
}
      </code></pre>

      <h4>Practice Exercise</h4>
      <p>Implement a simple text processing library using lambda expressions and functional interfaces:</p>
      <ol>
        <li>Create a functional interface TextProcessor with a method process(String input).</li>
        <li>Implement various text processors using lambda expressions (e.g., to uppercase, remove whitespace, reverse string).</li>
        <li>Create a method that takes a list of strings and a TextProcessor, and applies the processor to each string.</li>
        <li>Implement a way to chain multiple TextProcessors together.</li>
        <li>Use built-in functional interfaces where appropriate (e.g., Function, Predicate).</li>
        <li>Create a simple command-line interface where users can select different text processing operations to apply to their input.</li>
      </ol>

      <p>This exercise will help you apply various concepts related to lambda expressions and functional interfaces in a practical scenario, including creating and using custom functional interfaces, working with built-in functional interfaces, and function composition.</p>
    </section>
      
        </section>`
      },
      {
        id:'generics',
        title:'Generics',
        content:`<section id="generics">
        <h3> Generics</h3>
        <p>Generics in Java provide a way to abstract over types. They allow you to write code that can work with different types while providing compile-time type safety. Generics were introduced in Java 5 to enhance type safety and reduce the need for explicit type casting.</p>

        <h4>1. Basic Syntax and Usage</h4>
        <p>Generics use type parameters, denoted by angle brackets &lt;&gt;, to specify the type.</p>
  
        <pre><code class="language-java">
  public class Box&lt;T&gt; {
      private T content;
  
      public void set(T content) {
          this.content = content;
      }
  
      public T get() {
          return content;
      }
  }
  
  public class GenericExample {
      public static void main(String[] args) {
          Box&lt;Integer&gt; intBox = new Box&lt;&gt;();
          intBox.set(10);
          Integer content = intBox.get();
          System.out.println(content);  // Output: 10
  
          Box&lt;String&gt; stringBox = new Box&lt;&gt;();
          stringBox.set("Hello Generics");
          String strContent = stringBox.get();
          System.out.println(strContent);  // Output: Hello Generics
      }
  }
        </code></pre>
  
        <h4>2. Generic Methods</h4>
        <p>Methods can also be generic, allowing for type parameters at the method level.</p>
  
        <pre><code class="language-java">
  public class GenericMethods {
      public static &lt;T&gt; void printArray(T[] array) {
          for (T element : array) {
              System.out.print(element + " ");
          }
          System.out.println();
      }
  
      public static void main(String[] args) {
          Integer[] intArray = {1, 2, 3, 4, 5};
          Double[] doubleArray = {1.1, 2.2, 3.3, 4.4, 5.5};
          String[] stringArray = {"Hello", "Generics", "in", "Java"};
  
          printArray(intArray);     // Output: 1 2 3 4 5
          printArray(doubleArray);  // Output: 1.1 2.2 3.3 4.4 5.5
          printArray(stringArray);  // Output: Hello Generics in Java
      }
  }
        </code></pre>
  
        <h4>3. Bounded Type Parameters</h4>
        <p>You can restrict the types that can be used with generics using bounded type parameters.</p>
  
        <pre><code class="language-java">
  public class NumberBox&lt;T extends Number&gt; {
      private T number;
  
      public void set(T number) {
          this.number = number;
      }
  
      public double sqrt() {
          return Math.sqrt(number.doubleValue());
      }
  }
  
  public class BoundedTypeExample {
      public static void main(String[] args) {
          NumberBox&lt;Integer&gt; intBox = new NumberBox&lt;&gt;();
          intBox.set(16);
          System.out.println(intBox.sqrt());  // Output: 4.0
  
          NumberBox&lt;Double&gt; doubleBox = new NumberBox&lt;&gt;();
          doubleBox.set(25.0);
          System.out.println(doubleBox.sqrt());  // Output: 5.0
  
          // This won't compile:
          // NumberBox&lt;String&gt; stringBox = new NumberBox&lt;&gt;();
      }
  }
        </code></pre>
  
        <h4>4. Wildcard Types</h4>
        <p>Wildcards provide more flexibility in using generic types. There are three types of wildcards:</p>
        <ul>
          <li>Unbounded Wildcard: &lt;?&gt;</li>
          <li>Upper Bounded Wildcard: &lt;? extends Type&gt;</li>
          <li>Lower Bounded Wildcard: &lt;? super Type&gt;</li>
        </ul>
  
        <pre><code class="language-java">
  import java.util.Arrays;
  import java.util.List;
  
  public class WildcardExample {
      // Unbounded Wildcard
      public static void printList(List&lt;?&gt; list) {
          for (Object elem : list) {
              System.out.print(elem + " ");
          }
          System.out.println();
      }
  
      // Upper Bounded Wildcard
      public static double sumOfList(List&lt;? extends Number&gt; list) {
          double sum = 0.0;
          for (Number num : list) {
              sum += num.doubleValue();
          }
          return sum;
      }
  
      // Lower Bounded Wildcard
      public static void addNumbers(List&lt;? super Integer&gt; list) {
          for (int i = 1; i <= 5; i++) {
              list.add(i);
          }
      }
  
      public static void main(String[] args) {
          List&lt;Integer&gt; intList = Arrays.asList(1, 2, 3);
          List&lt;Double&gt; doubleList = Arrays.asList(1.1, 2.2, 3.3);
          List&lt;String&gt; stringList = Arrays.asList("Hello", "Generics");
  
          printList(intList);     // Output: 1 2 3
          printList(doubleList);  // Output: 1.1 2.2 3.3
          printList(stringList);  // Output: Hello Generics
  
          System.out.println("Sum of intList: " + sumOfList(intList));       // Output: 6.0
          System.out.println("Sum of doubleList: " + sumOfList(doubleList)); // Output: 6.6
  
          List&lt;Number&gt; numberList = new ArrayList&lt;&gt;();
          addNumbers(numberList);
          System.out.println(numberList);  // Output: [1, 2, 3, 4, 5]
      }
  }
        </code></pre>
  
        <h4>5. Type Erasure</h4>
        <p>Java uses type erasure to implement generics, which means generic type information is removed at runtime. This is done to maintain backward compatibility with pre-generics code.</p>
  
        <pre><code class="language-java">
  public class TypeErasureExample {
      public static void main(String[] args) {
          List&lt;String&gt; stringList = new ArrayList&lt;&gt;();
          List&lt;Integer&gt; intList = new ArrayList&lt;&gt;();
  
          System.out.println(stringList.getClass() == intList.getClass());  // Output: true
      }
  }
        </code></pre>
  
        <h4>6. Generic Interfaces</h4>
        <p>Interfaces can also be generic, allowing for flexible implementations.</p>
  
        <pre><code class="language-java">
  interface Pair&lt;K, V&gt; {
      K getKey();
      V getValue();
  }
  
  class OrderedPair&lt;K, V&gt; implements Pair&lt;K, V&gt; {
      private K key;
      private V value;
  
      public OrderedPair(K key, V value) {
          this.key = key;
          this.value = value;
      }
  
      public K getKey() { return key; }
      public V getValue() { return value; }
  }
  
  public class GenericInterfaceExample {
      public static void main(String[] args) {
          Pair&lt;String, Integer&gt; pair = new OrderedPair&lt;&gt;("Age", 30);
          System.out.println(pair.getKey() + ": " + pair.getValue());  // Output: Age: 30
      }
  }
        </code></pre>
  
        <h4>7. Recursive Type Bounds</h4>
        <p>Type parameters can be bounded by other type parameters, which is useful for comparing objects that implement Comparable.</p>
  
        <pre><code class="language-java">
  public class RecursiveBoundExample {
      public static &lt;T extends Comparable&lt;T&gt;&gt; T findMax(List&lt;T&gt; list) {
          if (list.isEmpty()) {
              throw new IllegalArgumentException("List is empty");
          }
          T max = list.get(0);
          for (T item : list) {
              if (item.compareTo(max) > 0) {
                  max = item;
              }
          }
          return max;
      }
  
      public static void main(String[] args) {
          List&lt;Integer&gt; intList = Arrays.asList(3, 1, 4, 1, 5, 9);
          System.out.println("Max integer: " + findMax(intList));  // Output: 9
  
          List&lt;String&gt; stringList = Arrays.asList("apple", "banana", "cherry");
          System.out.println("Max string: " + findMax(stringList));  // Output: cherry
      }
  }
        </code></pre>
  
        <h4>Practice Exercise</h4>
        <p>Implement a generic data structure for a binary search tree:</p>
        <ol>
          <li>Create a generic Node class that can hold any Comparable type.</li>
          <li>Implement a BinarySearchTree class with methods for insertion, deletion, and searching.</li>
          <li>Add methods for in-order, pre-order, and post-order traversal.</li>
          <li>Implement a method to find the minimum and maximum values in the tree.</li>
          <li>Create a method that can convert the tree to a sorted list.</li>
          <li>Ensure that your implementation works with different types (e.g., Integer, String, custom objects).</li>
          <li>Use bounded type parameters to ensure that the tree can only be used with Comparable types.</li>
        </ol>
  
        <p>This exercise will help you apply various concepts related to generics in a practical scenario, including bounded type parameters, recursive type bounds, and working with comparable objects.</p>
        </section>`
      },    
     
      {
        id:'java-practise',
        title:'Java Practise Questions and Solutions',
        content:`<section id="java-practise">
        <h3>Comprehensive Java Practice Questions and Solutions</h3>

      <ol>
        <li>
          <p><strong>Question:</strong> Write a Java program to print "Hello, World!" to the console.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Create a program that takes two integers as input and prints their sum.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
import java.util.Scanner;

public class SumCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int num1 = scanner.nextInt();
        System.out.print("Enter second number: ");
        int num2 = scanner.nextInt();
        int sum = num1 + num2;
        System.out.println("Sum: " + sum);
        scanner.close();
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Write a program to find the factorial of a number using a for loop.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
public class Factorial {
    public static void main(String[] args) {
        int number = 5;
        long factorial = 1;
        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + number + " is: " + factorial);
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Implement a simple calculator using a switch statement.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        System.out.print("Enter operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        
        double result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    System.out.println("Error: Division by zero");
                    return;
                }
                break;
            default:
                System.out.println("Error: Invalid operator");
                return;
        }
        System.out.println("Result: " + result);
        scanner.close();
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Create a class representing a Circle with methods to calculate its area and circumference.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
public class Circle {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    public double calculateCircumference() {
        return 2 * Math.PI * radius;
    }

    public static void main(String[] args) {
        Circle circle = new Circle(5);
        System.out.println("Area: " + circle.calculateArea());
        System.out.println("Circumference: " + circle.calculateCircumference());
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Write a program to reverse a string without using the StringBuilder or StringBuffer class.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
public class StringReversal {
    public static String reverseString(String str) {
        char[] charArray = str.toCharArray();
        int left = 0;
        int right = charArray.length - 1;
        while (left < right) {
            char temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp;
            left++;
            right--;
        }
        return new String(charArray);
    }

    public static void main(String[] args) {
        String original = "Hello, World!";
        String reversed = reverseString(original);
        System.out.println("Original: " + original);
        System.out.println("Reversed: " + reversed);
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Implement a program to check if a number is prime.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
public class PrimeChecker {
    public static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int number = 17;
        if (isPrime(number)) {
            System.out.println(number + " is prime.");
        } else {
            System.out.println(number + " is not prime.");
        }
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Create a program that demonstrates the use of try-catch-finally for exception handling.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
public class ExceptionHandlingDemo {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[3]); // This will throw an exception
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught exception: " + e.getMessage());
        } finally {
            System.out.println("This block always executes.");
        }
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Implement a simple bank account class with methods for deposit, withdrawal, and balance inquiry.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Invalid withdrawal amount or insufficient funds.");
        }
    }

    public double getBalance() {
        return balance;
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);
        account.deposit(500);
        account.withdraw(200);
        System.out.println("Current balance: $" + account.getBalance());
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Write a program to find the second largest element in an array.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
import java.util.Arrays;

public class SecondLargest {
    public static int findSecondLargest(int[] arr) {
        if (arr.length < 2) {
            throw new IllegalArgumentException("Array should have at least two elements");
        }
        Arrays.sort(arr);
        return arr[arr.length - 2];
    }

    public static void main(String[] args) {
        int[] numbers = {5, 2, 8, 1, 9, 3, 7};
        int secondLargest = findSecondLargest(numbers);
        System.out.println("Second largest element: " + secondLargest);
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Implement a simple LinkedList class with methods to add and remove elements.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
public class LinkedList<T> {
    private class Node {
        T data;
        Node next;

        Node(T data) {
            this.data = data;
            this.next = null;
        }
    }

    private Node head;

    public void add(T data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    public boolean remove(T data) {
        if (head == null) return false;
        if (head.data.equals(data)) {
            head = head.next;
            return true;
        }
        Node current = head;
        while (current.next != null) {
            if (current.next.data.equals(data)) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    public void printList() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.printList();
        list.remove(2);
        list.printList();
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Create a program that demonstrates the use of an interface and a class implementing that interface.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
interface Shape {
    double calculateArea();
    double calculatePerimeter();
}

class Rectangle implements Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public double calculateArea() {
        return length * width;
    }

    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle(5, 3);
        System.out.println("Area: " + rectangle.calculateArea());
        System.out.println("Perimeter: " + rectangle.calculatePerimeter());
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Implement a simple thread that prints numbers from 1 to 10.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
class NumberPrinter extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 10; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ThreadDemo {
    public static void main(String[] args) {
        NumberPrinter thread1 = new NumberPrinter();
        NumberPrinter thread2 = new NumberPrinter();
        thread1.start();
        thread2.start();
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Write a program that demonstrates the use of a HashMap to store and retrieve key-value pairs.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {
    public static void main(String[] args) {
        Map<String, Integer> ageMap = new HashMap<>();
        
        // Adding key-value pairs
        ageMap.put("Alice", 25);
        ageMap.put("Bob", 30);
        ageMap.put("Charlie", 35);

        // Retrieving values
        System.out.println("Bob's age: " + ageMap.get("Bob"));

        // Iterating over the map
        for (Map.Entry<String, Integer> entry : ageMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Checking if a key exists
        String name = "David";
        if (ageMap.containsKey(name)) {
            System.out.println(name + "'s age: " + ageMap.get(name));
        } else {
            System.out.println(name + " not found in the map.");
        }
    }
}
          </code></pre>
        </li>

        <li>
          <p><strong>Question:</strong> Create a program that reads a text file, counts the occurrence of each word, and writes the results to another file.</p>
          <p><strong>Solution:</strong></p>
          <pre><code class="language-java">
          import java.io.*;
          import java.util.*;
          
          public class WordCounter {
              public static void main(String[] args) {
                  String inputFile = "input.txt";
                  String outputFile = "output.txt";
                  Map<String, Integer> wordCount = new HashMap<>();
          
                  // Reading the input file and counting words
                  try (BufferedReader reader = new BufferedReader(new FileReader(inputFile))) {
                      String line;
                      while ((line = reader.readLine()) != null) {
                          String[] words = line.toLowerCase().split("\\W+");
                          for (String word : words) {
                              if (!word.isEmpty()) {
                                  wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
                              }
                          }
                      }
                  } catch (IOException e) {
                      e.printStackTrace();
                      return;
                  }
          
                  // Writing the word counts to the output file
                  try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile))) {
                      for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {
                          writer.write(entry.getKey() + ": " + entry.getValue());
                          writer.newLine();
                      }
                  } catch (IOException e) {
                      e.printStackTrace();
                  }
              }
          }
         </pre></code>          
        
         <li>
           <p><strong>Question:</strong> Implement a generic method that finds the maximum element in an array of any comparable type.</p>
           <p><strong>Solution:</strong></p>
           <pre><code class="language-java">
 public class GenericMaxFinder {
     public static <T extends Comparable<T>> T findMax(T[] array) {
         if (array == null || array.length == 0) {
             throw new IllegalArgumentException("Array must not be null or empty");
         }
         T max = array[0];
         for (int i = 1; i < array.length; i++) {
             if (array[i].compareTo(max) > 0) {
                 max = array[i];
             }
         }
         return max;
     }
 
     public static void main(String[] args) {
         Integer[] intArray = {3, 7, 2, 9, 5};
         System.out.println("Max integer: " + findMax(intArray));
 
         String[] strArray = {"apple", "banana", "cherry", "date"};
         System.out.println("Max string: " + findMax(strArray));
     }
 }
           </code></pre>
         </li>
 
         <li>
           <p><strong>Question:</strong> Write a program that demonstrates the use of lambda expressions and the Stream API to filter and manipulate a list of objects.</p>
           <p><strong>Solution:</strong></p>
           <pre><code class="language-java">
 import java.util.Arrays;
 import java.util.List;
 import java.util.stream.Collectors;
 
 class Person {
     private String name;
     private int age;
 
     public Person(String name, int age) {
         this.name = name;
         this.age = age;
     }
 
     public String getName() { return name; }
     public int getAge() { return age; }
 
     @Override
     public String toString() {
         return name + " (" + age + ")";
     }
 }
 
 public class StreamAPIDemo {
     public static void main(String[] args) {
         List<Person> people = Arrays.asList(
             new Person("Alice", 25),
             new Person("Bob", 30),
             new Person("Charlie", 35),
             new Person("David", 40),
             new Person("Eve", 45)
         );
 
         // Filter people older than 30 and collect their names
         List<String> namesOver30 = people.stream()
             .filter(p -> p.getAge() > 30)
             .map(Person::getName)
             .collect(Collectors.toList());
 
         System.out.println("Names of people over 30: " + namesOver30);
 
         // Calculate the average age
         double averageAge = people.stream()
             .mapToInt(Person::getAge)
             .average()
             .orElse(0);
 
         System.out.println("Average age: " + averageAge);
 
         // Find the oldest person
         Person oldest = people.stream()
             .max((p1, p2) -> Integer.compare(p1.getAge(), p2.getAge()))
             .orElse(null);
 
         System.out.println("Oldest person: " + oldest);
     }
 }
           </code></pre>
         </li>
 
         <li>
           <p><strong>Question:</strong> Implement the Singleton design pattern in Java.</p>
           <p><strong>Solution:</strong></p>
           <pre><code class="language-java">
 public class Singleton {
     private static Singleton instance;
 
     private Singleton() {
         // Private constructor to prevent instantiation
     }
 
     public static Singleton getInstance() {
         if (instance == null) {
             instance = new Singleton();
         }
         return instance;
     }
 
     public void showMessage() {
         System.out.println("Hello from Singleton!");
     }
 
     public static void main(String[] args) {
         Singleton singleton = Singleton.getInstance();
         singleton.showMessage();
 
         // Trying to get another instance
         Singleton anotherSingleton = Singleton.getInstance();
 
         System.out.println("Are both instances the same? " + (singleton == anotherSingleton));
     }
 }
           </code></pre>
         </li>
 
         <li>
           <p><strong>Question:</strong> Create a program that demonstrates the use of the Observer design pattern.</p>
           <p><strong>Solution:</strong></p>
           <pre><code class="language-java">
 import java.util.ArrayList;
 import java.util.List;
 
 interface Observer {
     void update(String message);
 }
 
 class NewsAgency {
     private List<Observer> observers = new ArrayList<>();
     private String news;
 
     public void addObserver(Observer observer) {
         observers.add(observer);
     }
 
     public void removeObserver(Observer observer) {
         observers.remove(observer);
     }
 
     public void setNews(String news) {
         this.news = news;
         notifyObservers();
     }
 
     private void notifyObservers() {
         for (Observer observer : observers) {
             observer.update(news);
         }
     }
 }
 
 class NewsChannel implements Observer {
     private String name;
 
     public NewsChannel(String name) {
         this.name = name;
     }
 
     @Override
     public void update(String news) {
         System.out.println(name + " received news: " + news);
     }
 }
 
 public class ObserverPatternDemo {
     public static void main(String[] args) {
         NewsAgency agency = new NewsAgency();
         NewsChannel channel1 = new NewsChannel("Channel 1");
         NewsChannel channel2 = new NewsChannel("Channel 2");
 
         agency.addObserver(channel1);
         agency.addObserver(channel2);
 
         agency.setNews("Breaking news: Java 17 released!");
 
         agency.removeObserver(channel2);
         agency.setNews("Weather update: Sunny day ahead.");
     }
 }
           </code></pre>
         </li>
 
         <li>
           <p><strong>Question:</strong> Implement a simple producer-consumer problem using wait() and notify() methods for thread synchronization.</p>
           <p><strong>Solution:</strong></p>
           <pre><code class="language-java">
 import java.util.LinkedList;
 import java.util.Queue;
 
 class Buffer {
     private Queue<Integer> queue = new LinkedList<>();
     private int capacity;
 
     public Buffer(int capacity) {
         this.capacity = capacity;
     }
 
     public synchronized void produce(int item) throws InterruptedException {
         while (queue.size() == capacity) {
             wait();
         }
         queue.add(item);
         System.out.println("Produced: " + item);
         notify();
     }
 
     public synchronized int consume() throws InterruptedException {
         while (queue.isEmpty()) {
             wait();
         }
         int item = queue.remove();
         System.out.println("Consumed: " + item);
         notify();
         return item;
     }
 }
 
 class Producer implements Runnable {
     private Buffer buffer;
 
     public Producer(Buffer buffer) {
         this.buffer = buffer;
     }
 
     @Override
     public void run() {
         for (int i = 0; i < 10; i++) {
             try {
                 buffer.produce(i);
                 Thread.sleep(100);
             } catch (InterruptedException e) {
                 e.printStackTrace();
             }
         }
     }
 }
 
 class Consumer implements Runnable {
     private Buffer buffer;
 
     public Consumer(Buffer buffer) {
         this.buffer = buffer;
     }
 
     @Override
     public void run() {
         for (int i = 0; i < 10; i++) {
             try {
                 buffer.consume();
                 Thread.sleep(200);
             } catch (InterruptedException e) {
                 e.printStackTrace();
             }
         }
     }
 }
 
 public class ProducerConsumerDemo {
     public static void main(String[] args) {
         Buffer buffer = new Buffer(5);
         Thread producerThread = new Thread(new Producer(buffer));
         Thread consumerThread = new Thread(new Consumer(buffer));
 
         producerThread.start();
         consumerThread.start();
     }
 }
           </code></pre>
         </li>
      
        </section>`
      },
  ];
  

  const JavaCourse = () => {
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
          // Split the content into parts where <pre><code> blocks are
          const contentParts = section.content.split(/(<pre><code class="language-java">[\s\S]*?<\/code><\/pre>)/g);
          
          return (
            <div key={section.id}>
              {contentParts.map((part, index) => {
                if (part.startsWith('<pre><code class="language-java">')) {
                  // Extract the code content from the <pre><code> block
                  const codeContent = part.match(/<code class="language-java">([\s\S]*?)<\/code>/)[1];
                  return (
                    <SyntaxHighlighter key={index} language="java" style={customTheme}>
                      {codeContent}
                    </SyntaxHighlighter>
                  );
                } else {
                  // Render the regular content parts
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
                {subSection.content.split(/(<pre><code class="language-java">[\s\S]*?<\/code><\/pre>)/g).map((part, index) => {
                  if (part.startsWith('<pre><code class="language-java">')) {
                    const codeContent = part.match(/<code class="language-java">([\s\S]*?)<\/code>/)[1];
                    return (
                      <SyntaxHighlighter key={index} language="java" style={customTheme}>
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
  
    return (
      <div className="java-course">
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
    );
  };
  
  export default JavaCourse;