import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowUp, Menu, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Button from '../components/ui/button';
import { Code } from 'lucide-react';

import './Kt.css';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction to Kotlin',
    content: `
      <section id="introduction">
        
      </section>
    `
  },
  {
    id: 'variables',
    title: 'Variables in Kotlin',
    content: `<section id="variables">
      <h2>Variables in Kotlin</h2>
  
      <p>Variables in Kotlin are used to store data in memory. They are a fundamental concept in programming, allowing you to work with different types of information throughout your code.</p>
  
      <h3>1. Types of Variables</h3>
      <h4>a. Immutable Variables (val)</h4>
      <p>Immutable variables are declared using the 'val' keyword. Once a value is assigned, it cannot be changed.</p>
      
      <pre><code class="language-kotlin">
      val pi = 3.14159
      val daysInWeek = 7
      // pi = 3.14 // This would cause a compilation error
      </code></pre>
      
      <p><strong>Explanation:</strong> In this example, 'pi' and 'daysInWeek' are immutable. Attempting to reassign a value to 'pi' would result in a compilation error.</p>
  
      <h4>b. Mutable Variables (var)</h4>
      <p>Mutable variables are declared using the 'var' keyword. Their values can be changed after initial assignment.</p>
      
      <pre><code class="language-kotlin">
      var count = 0
      println(count) // Output: 0
      count = 1
      println(count) // Output: 1
      </code></pre>
      
      <p><strong>Explanation:</strong> Here, 'count' is mutable. We can change its value from 0 to 1 after the initial assignment.</p>
  
      <h3>2. Type Inference</h3>
      <p>Kotlin can infer the type of a variable from its value, reducing the need for explicit type declarations.</p>
      
      <pre><code class="language-kotlin">
      val name = "Kotlin" // Inferred as String
      val version = 1.5 // Inferred as Double
      val isAwesome = true // Inferred as Boolean
      </code></pre>
      
      <p><strong>Explanation:</strong> Kotlin automatically infers that 'name' is a String, 'version' is a Double, and 'isAwesome' is a Boolean based on their assigned values.</p>
  
      <h3>3. Explicit Type Declaration</h3>
      <p>You can explicitly declare the type of a variable when needed for clarity or when the inferred type is not the desired one.</p>
      
      <pre><code class="language-kotlin">
      val explicitDouble: Double = 3.0
      val explicitFloat: Float = 3f
      val explicitLong: Long = 3L
      </code></pre>
      
      <p><strong>Explanation:</strong> Here, we explicitly declare the types to ensure the correct numeric type is used. This is especially useful for floating-point and integer types where precision matters.</p>
  
      <h3>4. Null Safety</h3>
      <p>Kotlin's type system distinguishes between nullable and non-nullable types to prevent null pointer exceptions.</p>
      
      <pre><code class="language-kotlin">
      var nonNullable: String = "Cannot be null"
      // nonNullable = null // Compilation error
  
      var nullable: String? = "Can be null"
      nullable = null // This is allowed
  
      // Safe call
      println(nullable?.length) // Prints null if nullable is null
  
      // Elvis operator
      val length = nullable?.length ?: -1
      println(length) // Prints -1 if nullable is null
      </code></pre>
      
      <p><strong>Explanation:</strong> The '?' after String makes 'nullable' a nullable type. The safe call operator '?.' and the Elvis operator '?:' are used to safely handle potentially null values.</p>
  
      <h3>5. Late Initialization</h3>
      <p>For non-null properties that will be initialized after construction, use 'lateinit'.</p>
      
      <pre><code class="language-kotlin">
      class Person {
          lateinit var name: String
          
          fun initializeName(newName: String) {
              name = newName
          }
          
          fun printName() {
              if (::name.isInitialized) {
                  println(name)
              } else {
                  println("Name not initialized")
              }
          }
      }
  
      val person = Person()
      person.printName() // Prints: Name not initialized
      person.initializeName("Alice")
      person.printName() // Prints: Alice
      </code></pre>
      
      <p><strong>Explanation:</strong> 'lateinit' allows us to delay the initialization of 'name'. We can check if it's initialized using '::name.isInitialized'.</p>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice working with variables in Kotlin:</p>
  
      <ol>
        <li>
          <strong>Basic Variable Usage:</strong>
          <p>Create variables to store your name, age, and whether you're a Kotlin developer (use appropriate types). Print a sentence using these variables.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
      val name: String = "Your Name"
      var age: Int = 25
      val isKotlinDeveloper: Boolean = true
  
      println("My name is $name, I'm $age years old, and it's $isKotlinDeveloper that I'm a Kotlin developer.")
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Type Conversion:</strong>
          <p>Create a variable as a String containing a number. Convert it to an Int and perform a mathematical operation.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
      val numberString: String = "42"
      val number: Int = numberString.toInt()
      val result: Int = number * 2
      println("The result is: $result")
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Null Safety Practice:</strong>
          <p>Create a nullable variable for a person's middle name. Write a function that prints the full name, handling the case where the middle name might be null.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
      fun printFullName(firstName: String, middleName: String?, lastName: String) {
          val fullName = if (middleName != null) {
              "$firstName $middleName $lastName"
          } else {
              "$firstName $lastName"
          }
          println("Full name: $fullName")
      }
  
      printFullName("John", null, "Doe")
      printFullName("Jane", "Marie", "Smith")
            </code></pre>
          </details>
        </li>
      </ol>
  
      <p>These assignments will help reinforce your understanding of variables in Kotlin. Remember to experiment with different types, nullability, and variable scopes to get a comprehensive grasp of how Kotlin handles variables.</p>
    </section>`
  },
  {
    id: 'datatypes',
    title: 'Data Types in Kotlin',
    content: `<section id="datatypes">
      <h2>Data Types in Kotlin</h2>
  
      <p>Kotlin, as a statically-typed language, offers a rich set of data types to ensure type safety and efficiency. Understanding these types is crucial for writing robust and performant Kotlin code.</p>
  
      <h3>1. Basic Types</h3>
  
      <h4>a. Numbers</h4>
      <p>Kotlin provides several types for representing numbers, each with its own size and range:</p>
  
      <ul>
        <li><strong>Byte:</strong> 8-bit signed integer (-128 to 127)</li>
        <li><strong>Short:</strong> 16-bit signed integer (-32768 to 32767)</li>
        <li><strong>Int:</strong> 32-bit signed integer (-2^31 to 2^31 - 1)</li>
        <li><strong>Long:</strong> 64-bit signed integer (-2^63 to 2^63 - 1)</li>
        <li><strong>Float:</strong> 32-bit floating point (6-7 decimal digits precision)</li>
        <li><strong>Double:</strong> 64-bit floating point (15-16 decimal digits precision)</li>
      </ul>
  
      <pre><code class="language-kotlin">
      val byte: Byte = 127
      val short: Short = 32767
      val int: Int = 2147483647
      val long: Long = 9223372036854775807L
      val float: Float = 3.14f
      val double: Double = 3.14159265358979323846
  
      // Underscores for readability
      val oneMillion = 1_000_000
      val creditCardNumber = 1234_5678_9012_3456L
      val socialSecurityNumber = 999_99_9999L
  
      // Type conversion
      val intValue: Int = 100
      val longValue: Long = intValue.toLong()
  
      println("Byte max value: {Byte.MAX_VALUE}")
      println("Long min value: {Long.MIN_VALUE}")
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>Kotlin uses type inference, but explicit type declaration can improve readability and prevent unintended type conversions.</li>
        <li>The 'L' suffix is required for Long literals to distinguish them from Int.</li>
        <li>The 'f' or 'F' suffix is used for Float literals; without it, the number is treated as Double.</li>
        <li>Underscores can be used in number literals for better readability, especially for large numbers.</li>
        <li>Kotlin does not perform implicit widening conversions for numbers. Use explicit conversion functions like 'toLong()' when needed.</li>
        <li>Each numeric type has 'MIN_VALUE' and 'MAX_VALUE' properties that provide the range of values.</li>
      </ul>
  
      <h4>b. Booleans</h4>
      <p>The Boolean type in Kotlin represents logical values with two possible states: true and false.</p>
  
      <pre><code class="language-kotlin">
      val isKotlinFun: Boolean = true
      val isJavaDifficult: Boolean = false
  
      // Boolean operations
      val andResult = isKotlinFun && isJavaDifficult
      val orResult = isKotlinFun || isJavaDifficult
      val notResult = !isJavaDifficult
  
      // Boolean in control structures
      if (isKotlinFun) {
          println("Enjoying Kotlin!")
      }
  
      // Boolean expressions
      val isAdult = { age: Int -> age >= 18 }
      println(isAdult(20)) // Prints: true
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>Booleans are often used in conditional statements, loops, and logical operations.</li>
        <li>Kotlin supports standard logical operations: AND (&&), OR (||), and NOT (!).</li>
        <li>Boolean expressions can be used directly in control structures like 'if' statements and 'when' expressions.</li>
        <li>Functions or lambda expressions that return Boolean values are commonly used for predicates or conditions.</li>
      </ul>
  
      <h4>c. Characters</h4>
      <p>Characters in Kotlin are represented by the Char type, which cannot be treated directly as numbers.</p>
  
      <pre><code class="language-kotlin">
      val letter: Char = 'A'
      val digit: Char = '7'
  
      // Character operations
      val nextLetter = letter + 1 // 'B'
      val isDigit = digit.isDigit() // true
      val isLetter = letter.isLetter() // true
  
      // Unicode characters
      val heart: Char = \\u2665 // ♥
  
      // Escape sequences
      val newline = \\n
      val tab = \\t
  
      println("Hello {tab}World {newline}How are you?")
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>Characters are enclosed in single quotes.</li>
        <li>Arithmetic operations on Char produce Int results.</li>
        <li>Kotlin provides extension functions like 'isDigit()' and 'isLetter()' for character classification.</li>
        <li>Unicode characters can be represented using the '\\u' escape sequence followed by the Unicode code point.</li>
        <li>Common escape sequences include '\\n' for newline, '\\t' for tab, '\\r' for carriage return, '\\'' for single quote, and '\\"' for double quote.</li>
      </ul>
  
      <h4>d. Strings</h4>
      <p>Strings in Kotlin are immutable sequences of characters, represented by the String type.</p>
  
      <pre><code class="language-kotlin">
      val name: String = "Kotlin"
      val greeting = "Hello, $name!"
  
      // Multi-line strings
      val multiLine: String = """
          This is a
          multi-line
          string
      """.trimIndent()
  
      // String operations
      val length = name.length // 6
      val upperCase = name.toUpperCase() // "KOTLIN"
      val substring = name.substring(0, 3) // "Kot"
  
      // String templates
      val items = listOf("apple", "banana", "orange")
      println("There are {items.size} items")
      println("The first item is {items.first().capitalize()}")
  
      // String comparison
      val str1 = "Hello"
      val str2 = "hello"
      println(str1 == str2) // false
      println(str1.equals(str2, ignoreCase = true)) // true
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>Strings are enclosed in double quotes. Single quotes are used for Char literals.</li>
        <li>String templates allow embedding expressions directly into strings using '$' for simple variable names and '{...}' for expressions.</li>
        <li>Multi-line strings are defined using triple quotes ("""). 'trimIndent()' is often used to remove leading whitespace.</li>
        <li>Strings in Kotlin are immutable. Operations like 'toUpperCase()' return new STRING objects.</li>
        <li>Kotlin provides numerous extension functions for string manipulation, such as 'capitalize()', 'trim()', 'split()', etc.</li>
        <li>String comparison is done using '==' for structural equality and '===' for referential equality. The 'equals()' method allows case-insensitive comparison.</li>
      </ul>
  
      <h3>2. Arrays</h3>
      <p>Arrays in Kotlin are represented by the Array class, which is invariant and has a fixed size.</p>
  
      <pre><code class="language-kotlin">
      // Creating arrays
      val numbers: Array&lt;Int&gt; = arrayOf(1, 2, 3, 4, 5)
      val squares: Array&lt;Int&gt; = Array(5) { i -> i * i }
  
      // Accessing elements
      println(numbers[2]) // Prints: 3
      numbers[1] = 10 // Modifying an element
  
      // Array operations
      val sum = numbers.sum() // 23
      val evenNumbers = numbers.filter { it % 2 == 0 }
  
      // Specialized array classes for primitive types
      val intArray: IntArray = intArrayOf(1, 2, 3, 4, 5)
      val charArray: CharArray = charArrayOf('H', 'e', 'l', 'l', 'o')
  
      // 2D array
      val matrix: Array&lt;Array&lt;Int&gt;&gt; = Array(3) { Array(3) { 0 } }
      matrix[0][0] = 1
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>Arrays are created using the 'arrayOf()' function or the Array constructor with a lambda for initialization.</li>
        <li>Array elements are accessed and modified using square bracket notation.</li>
        <li>Kotlin provides extension functions like 'sum()', 'filter()', 'map()', etc., for array operations.</li>
        <li>For arrays of primitive types, Kotlin offers specialized classes like IntArray, CharArray, etc., which are compiled to Java's primitive type arrays for better performance.</li>
        <li>Multi-dimensional arrays are represented as nested arrays.</li>
        <li>Arrays in Kotlin are invariant, meaning Array&lt;String&gt; is not a subtype of Array&lt;Any&gt;.</li>
      </ul>
  
      <h3>3. Collections</h3>
      <p>Kotlin provides a rich set of collection types, including List, Set, and Map, each available in mutable and read-only variants.</p>
  
      <h4>a. List</h4>
      <pre><code class="language-kotlin">
      // Read-only list
      val readOnlyList: List&lt;String&gt; = listOf("apple", "banana", "cherry")
  
      // Mutable list
      val mutableList: MutableList&lt;String&gt; = mutableListOf("dog", "cat", "bird")
  
      // List operations
      println(readOnlyList[1]) // Prints: banana
      println(readOnlyList.first()) // Prints: apple
      println(readOnlyList.last()) // Prints: cherry
  
      mutableList.add("fish")
      mutableList.removeAt(1)
      println(mutableList) // Prints: [dog, bird, fish]
  
      // List transformation
      val uppercaseList = readOnlyList.map { it.toUpperCase() }
      val filteredList = mutableList.filter { it.length > 3 }
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>Lists maintain the order of elements and allow duplicate values.</li>
        <li>'List' is read-only (immutable), while 'MutableList' allows modification.</li>
        <li>Elements can be accessed by index using square bracket notation or functions like 'first()', 'last()'.</li>
        <li>Mutable lists support operations like 'add()', 'remove()', 'clear()', etc.</li>
        <li>Kotlin provides powerful functions for list manipulation, such as 'map()', 'filter()', 'reduce()', 'fold()', etc.</li>
        <li>The immutability of 'List' is shallow; if it contains mutable objects, those objects can still be modified.</li>
      </ul>
  
      <h4>b. Set</h4>
      <pre><code class="language-kotlin">
      // Read-only set
      val readOnlySet: Set&lt;Int&gt; = setOf(1, 2, 3, 3, 2, 1)
  
      // Mutable set
      val mutableSet: MutableSet&lt;Int&gt; = mutableSetOf(4, 5, 6)
  
      // Set operations
      println(readOnlySet) // Prints: [1, 2, 3]
      println(readOnlySet.contains(2)) // Prints: true
  
      mutableSet.add(7)
      mutableSet.remove(5)
      println(mutableSet) // Prints: [4, 6, 7]
  
      // Set algebra
      val set1 = setOf(1, 2, 3)
      val set2 = setOf(3, 4, 5)
      println(set1 union set2) // [1, 2, 3, 4, 5]
      println(set1 intersect set2) // [3]
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>Sets contain unique elements; duplicates are automatically removed.</li>
        <li>'Set' is read-only, while 'MutableSet' allows adding and removing elements.</li>
        <li>Sets are useful for checking membership ('contains()') and removing duplicates from a collection.</li>
        <li>Kotlin provides set algebra operations like 'union', 'intersect', 'subtract'.</li>
        <li>The order of elements in a set is generally not guaranteed, unless using a LinkedHashSet.</li>
        <li>HashSet is the default implementation, offering constant time performance for basic operations.</li>
      </ul>
  
      <h4>c. Map</h4>
      <pre><code class="language-kotlin">
      // Read-only map
      val readOnlyMap: Map&lt;String, Int&gt; = mapOf("one" to 1, "two" to 2, "three" to 3)
  
      // Mutable map
      val mutableMap: MutableMap&lt;String, Int&gt; = mutableMapOf("four" to 4, "five" to 5)
  
      // Map operations
      println(readOnlyMap["two"]) // Prints: 2
      println(readOnlyMap.getOrDefault("four", 0)) // Prints: 0
  
      mutableMap["six"] = 6
      mutableMap.remove("four")
      println(mutableMap) // Prints: {five=5, six=6}
  
      // Iterating over a map
      for ((key, value) in readOnlyMap) {
          println("$key = $value")
      }
  
      // Transforming maps
      val doubledValues = readOnlyMap.mapValues { it.value * 2 }
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>Maps store key-value pairs, where each key is unique.</li>
        <li>'Map' is read-only, while 'MutableMap' allows adding, removing, and modifying entries.</li>
        <li>Map entries can be accessed using square bracket notation or methods like 'get()', 'getOrDefault()', 'getValue()'.</li>
        <li>The 'to' infix function is used to create Pair objects for map initialization.</li>
        <li>Maps can be iterated using a for loop with destructuring declaration.</li>
        <li>Kotlin provides functions for map manipulation like 'mapKeys()', 'mapValues()', 'filter()', etc.</li>
        <li>LinkedHashMap maintains the order of insertion, while HashMap (the default) does not guarantee any specific order.</li>
      </ul>
  
      <h3>4. Nullable Types</h3>
      <p>Kotlin's type system distinguishes between nullable and non-nullable types to help prevent null pointer exceptions.</p>
  
      <pre><code class="language-kotlin">
      // Nullable types
  {
    // Nullable types
    var nullableInt: Int? = 10
    nullableInt = null // This is allowed

    var nonNullableInt: Int = 20
    // nonNullableInt = null // This would cause a compilation error

    // Safe calls
    val length: Int? = nullableInt?.toString()?.length

    // Elvis operator
    val lengthOrDefault: Int = nullableInt?.toString()?.length ?: 0

    // Not-null assertion
    val definitelyNotNull: Int = nullableInt!!

    // Smart casts
    if (nullableInt != null) {
        // nullableInt is automatically cast to Int (non-nullable) in this scope
        println(nullableInt + 5)
    }

    // Nullable receiver
    fun String?.isNullOrEmpty(): Boolean = this == null || this.isEmpty()

    // Platform types
    val platformString: String = System.getProperty("user.name")
    // platformString is treated as non-null, but it might be null at runtime

    // Collections of nullable types
    val nullableList: List<Int?> = listOf(1, 2, null, 4)
    val filteredList: List<Int> = nullableList.filterNotNull()
    </pre></code>
    <h3>Assignments</h3>
    <p>Complete the following assignments to practice working with data types in Kotlin:</p>

    <ol>
      <li>
        <strong>Array Manipulation:</strong>
        <p>Create an array of integers from 1 to 5. Then, create a new array where each element is the square of the corresponding element in the first array.</p>
        <details>
          <summary>Click for solution</summary>
          <pre><code class="language-kotlin">
    val numbers = arrayOf(1, 2, 3, 4, 5)
    val squares = Array(5) { i -> numbers[i] * numbers[i] }
    println(squares.contentToString()) // Prints: [1, 4, 9, 16, 25]
          </code></pre>
        </details>
      </li>
      <li>
        <strong>Collection Operations:</strong>
        <p>Create a list of strings representing days of the week. Then, create a set from this list. Finally, create a map where the keys are the first letters of the days and the values are the full day names.</p>
        <details>
          <summary>Click for solution</summary>
          <pre><code class="language-kotlin">
    val days = listOf("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
    val daysSet = days.toSet()
    val daysMap = days.associateBy { it.first() }
    
    println(daysSet)
    println(daysMap)
          </code></pre>
        </details>
      </li>
      <li>
        <strong>Nullable Types Practice:</strong>
        <p>Create a function that takes a nullable string and returns its length if it's not null, or -1 if it is null. Test this function with both null and non-null inputs.</p>
        <details>
          <summary>Click for solution</summary>
          <pre><code class="language-kotlin">
    fun getStringLength(str: String?): Int {
        return str?.length ?: -1
    }

    println(getStringLength("Kotlin")) // Prints: 6
    println(getStringLength(null)) // Prints: -1
          </code></pre>
        </details>
      </li>
    </ol>

    <p>These assignments will help you practice working with various data types in Kotlin, including arrays, collections, and nullable types. Remember to experiment with different scenarios to fully grasp how Kotlin handles different types of data.</p>
  </section>`
},
{
    id: 'operators',
    title: 'Operators in Kotlin',
    content: `<section id="operators">
      <h2>Operators in Kotlin</h2>
  
      <p>Operators in Kotlin are special symbols that perform specific operations on one, two, or three operands. Kotlin provides a rich set of operators and also allows you to define custom operators for your own types.</p>
  
      <h3>1. Arithmetic Operators</h3>
      <p>Arithmetic operators are used to perform basic mathematical operations.</p>
  
      <pre><code class="language-kotlin">
      val a = 10
      val b = 3
  
      println(a + b)  // Addition: 13
      println(a - b)  // Subtraction: 7
      println(a * b)  // Multiplication: 30
      println(a / b)  // Division: 3 (integer division)
      println(a % b)  // Modulus: 1 (remainder of division)
  
      // Float division
      println(a.toFloat() / b)  // 3.3333333
  
      // Increment and decrement
      var c = 5
      println(c++)  // Post-increment: prints 5, then c becomes 6
      println(++c)  // Pre-increment: c becomes 7, then prints 7
  
      // Augmented assignments
      var d = 10
      d += 5  // Equivalent to: d = d + 5
      println(d)  // 15
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>The '+', '-', '*', '/', and '%' operators work as expected for numeric types.</li>
        <li>Integer division (/) truncates the decimal part. Use toFloat() or toDouble() for floating-point division.</li>
        <li>The '++' and '--' operators can be used as prefix or postfix, with slightly different behavior.</li>
        <li>Augmented assignments (+=, -=, *=, /=, %=) combine an operation with assignment.</li>
      </ul>
  
      <h3>2. Comparison Operators</h3>
      <p>Comparison operators are used to compare two values.</p>
  
      <pre><code class="language-kotlin">
      val x = 5
      val y = 10
  
      println(x == y)  // Equal to: false
      println(x != y)  // Not equal to: true
      println(x > y)   // Greater than: false
      println(x < y)   // Less than: true
      println(x >= y)  // Greater than or equal to: false
      println(x <= y)  // Less than or equal to: true
  
      // Structural equality
      val list1 = listOf(1, 2, 3)
      val list2 = listOf(1, 2, 3)
      println(list1 == list2)  // true (structural equality)
      println(list1 === list2) // false (referential equality)
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>The '==' operator checks for structural equality (equivalent to Java's equals()).</li>
        <li>The '===' operator checks for referential equality (if two references point to the same object).</li>
        <li>The '!=', '>', '<', '>=', and '<=' operators work as expected for comparable types.</li>
      </ul>
  
      <h3>3. Logical Operators</h3>
      <p>Logical operators are used to perform logical operations on boolean values.</p>
  
      <pre><code class="language-kotlin">
      val p = true
      val q = false
  
      println(p && q)  // Logical AND: false
      println(p || q)  // Logical OR: true
      println(!p)      // Logical NOT: false
  
      // Short-circuit evaluation
      val result = (x > 0) && (y / x > 2)  // Safe even if x is 0
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>The '&&' operator returns true if both operands are true.</li>
        <li>The '||' operator returns true if at least one operand is true.</li>
        <li>The '!' operator negates the boolean value.</li>
        <li>Kotlin uses short-circuit evaluation for '&&' and '||', which can be useful for avoiding potential errors.</li>
      </ul>
  
      <h3>4. Bitwise Operators</h3>
      <p>Bitwise operators perform operations on the binary representations of integer values.</p>
  
      <pre><code class="language-kotlin">
      val m = 0b1010  // Binary: 10
      val n = 0b1100  // Binary: 12
  
      println(m and n)   // Bitwise AND: 8 (1000 in binary)
      println(m or n)    // Bitwise OR: 14 (1110 in binary)
      println(m xor n)   // Bitwise XOR: 6 (0110 in binary)
      println(m.inv())   // Bitwise inversion: -11 (11110101 in binary)
      println(m shl 1)   // Signed shift left: 20 (10100 in binary)
      println(m shr 1)   // Signed shift right: 5 (101 in binary)
      println(m ushr 1)  // Unsigned shift right: 5 (101 in binary)
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>Bitwise operators work on the individual bits of integer values.</li>
        <li>'and', 'or', and 'xor' perform the respective operations bit by bit.</li>
        <li>'inv()' inverts all the bits (0 becomes 1, and 1 becomes 0).</li>
        <li>'shl' and 'shr' perform signed left and right shifts, while 'ushr' performs an unsigned right shift.</li>
      </ul>
  
      <h3>5. String Operators</h3>
      <p>Kotlin provides special operators for working with strings.</p>
  
      <pre><code class="language-kotlin">
      val str1 = "Hello"
      val str2 = "World"
  
      println(str1 + " " + str2)  // String concatenation: Hello World
      println("$str1 $str2")      // String template: Hello World
  
      // String indexing
      println(str1[1])  // 'e'
  
      // String comparison
      println("abc" == "abc")  // true
      println("abc" > "abd")   // false (lexicographic comparison)
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>The '+' operator can be used for string concatenation.</li>
        <li>String templates (using '$' or '{...}') provide a concise way to include variables in strings.</li>
        <li>Strings can be indexed like arrays to access individual characters.</li>
        <li>String comparison uses lexicographic ordering.</li>
      </ul>
  
      <h3>6. Special Operators</h3>
      <p>Kotlin includes several special operators for various purposes.</p>
  
      <pre><code class="language-kotlin">
      // Elvis operator
      val nullableValue: String? = null
      val result = nullableValue ?: "Default"
      println(result)  // Default
  
      // Range operator
      for (i in 1..5) {
          print(i)  // 12345
      }
  
      // 'is' and 'as' operators
      val obj: Any = "Hello"
      if (obj is String) {
          println(obj.length)  // 5
      }
      val str = obj as String
      println(str.uppercase())  // HELLO
  
      // Spread operator
      val array = intArrayOf(1, 2, 3)
      val list = listOf(*array)
      println(list)  // [1, 2, 3]
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>The Elvis operator '?:' provides a default value for nullable expressions.</li>
        <li>The range operator '..' creates a range of values.</li>
        <li>The 'is' operator checks the type of an object, while 'as' performs type casting.</li>
        <li>The spread operator '*' is used to pass arrays to vararg parameters.</li>
      </ul>
  
      <h3>7. Operator Overloading</h3>
      <p>Kotlin allows you to define custom implementations for operators on your own types.</p>
  
      <pre><code class="language-kotlin">
      data class Point(val x: Int, val y: Int) {
          operator fun plus(other: Point) = Point(x + other.x, y + other.y)
      }
  
      val p1 = Point(1, 2)
      val p2 = Point(3, 4)
      val p3 = p1 + p2
      println(p3)  // Point(x=4, y=6)
      </code></pre>
  
      <p><strong>Detailed Explanation:</strong></p>
      <ul>
        <li>Operator overloading is achieved by defining functions with specific names (like 'plus' for '+').</li>
        <li>The 'operator' keyword is required when overloading operators.</li>
        <li>This feature allows you to use standard operators with custom types in a natural way.</li>
      </ul>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice working with operators in Kotlin:</p>
  
      <ol>
        <li>
          <strong>Arithmetic Operations:</strong>
          <p>Write a function that takes two integers and returns their average as a Float. Use appropriate operators and type conversion.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  fun average(a: Int, b: Int): Float {
      return (a + b).toFloat() / 2
  }
  
  println(average(5, 10))  // 7.5
            </code></pre>
          </details>
        </li>
        <li>
          <strong>String Manipulation:</strong>
          <p>Create a function that takes a string and an integer n, and returns a new string that repeats the original string n times. Use the appropriate string operator.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  fun repeatString(str: String, n: Int): String {
      return str * n
  }
  
  println(repeatString("Hello", 3))  // HelloHelloHello
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Custom Operator:</strong>
          <p>Define a 'Point' class with x and y coordinates. Implement the '-' operator to calculate the distance between two points.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  import kotlin.math.sqrt
  
  data class Point(val x: Double, val y: Double) {
      operator fun minus(other: Point): Double {
          val dx = this.x - other.x
          val dy = this.y - other.y
          return sqrt(dx * dx + dy * dy)
      }
  }
  
  val p1 = Point(0.0, 0.0)
  val p2 = Point(3.0, 4.0)
  println(p1 - p2)  // 5.0
            </code></pre>
          </details>
        </li>
      </ol>
  
      <p>These assignments will help you practice using various operators in Kotlin, including arithmetic operators, string operators, and custom operator overloading. Remember to consider the types of your operands and the desired output when working with operators.</p>
    </section>`
  },
  {
    id: 'control-structures',
    title: 'Control Structures in Kotlin',
    content: `<section id="control-structures">
      <h2>Control Structures in Kotlin</h2>
  
      <p>Control structures in Kotlin allow you to control the flow of your program's execution. Kotlin provides a variety of control structures that are both powerful and flexible.</p>
  
      <h3>1. If Expression</h3>
      
      <p>The if expression in Kotlin is a control structure that allows conditional execution of code. It can be used as a statement or as an expression that returns a value.</p>
  
      <h4>Example: Basic If-Else Statement</h4>
      <pre><code class="language-kotlin">
      fun max(a: Int, b: Int): Int {
          if (a > b) {
              return a
          } else {
              return b
          }
      }
  
      println(max(5, 3))  // Output: 5
      </code></pre>
  
      <p>The if-else statement checks a condition and executes different code blocks based on whether the condition is true or false. In this example, it returns the larger of two numbers.</p>
  
      <h3>2. When Expression</h3>
  
      <p><strong>Definition:</strong> The when expression is a versatile control structure in Kotlin that can be used as a replacement for switch statements. It can match against constants, ranges, types, and even complex conditions.</p>
  
      <h4>Example: Simple When Statement</h4>
      <pre><code class="language-kotlin">
      fun describe(obj: Any): String =
          when (obj) {
              1          -> "One"
              "Hello"    -> "Greeting"
              is Long    -> "Long"
              !is String -> "Not a string"
              else       -> "Unknown"
          }
  
      println(describe(1))       // Output: One
      println(describe("Hello")) // Output: Greeting
      </code></pre>
  
      <p>The when expression matches its argument against all branches sequentially until a branch condition is satisfied. The else branch is executed if no other branch matches.</p>
  
      <h3>3. For Loops</h3>
  
      <p>For loops in Kotlin are used to iterate over ranges, arrays, collections, or anything that provides an iterator. They offer a concise way to perform repeated operations.</p>
  
      <h4>Example: Iterating Over a Range</h4>
      <pre><code class="language-kotlin">
      for (i in 1..5) {
          print(i)
      }
      // Output: 12345
      </code></pre>
  
      <p><strong>Explanation:</strong> This for loop iterates over a range from 1 to 5 (inclusive), printing each number. The '..' operator creates a range that can be iterated over.</p>
  
      <h3>4. While and Do-While Loops</h3>
  
      <p>While and do-while loops in Kotlin are used for repeated execution of a block of code as long as a given condition is true. The while loop checks the condition before each iteration, while the do-while loop checks it after.</p>
  
      <h4>Example: While Loop</h4>
      <pre><code class="language-kotlin">
      var x = 5
      while (x > 0) {
          print(x)
          x--
      }
      // Output: 54321
      </code></pre>
  
      <p>The while loop continues executing its body as long as the condition (x > 0) remains true. It checks the condition before each iteration.</p>
  
      <h3>5. Break and Continue</h3>
  
      <p>Break and continue are jump expressions in Kotlin. Break terminates the nearest enclosing loop, while continue proceeds to the next iteration of the nearest enclosing loop.</p>
  
      <h4>Example: Using Break and Continue</h4>
      <pre><code class="language-kotlin">
      for (i in 1..10) {
          if (i == 3) continue  // Skip 3
          if (i > 5) break      // Stop after 5
          print(i)
      }
      // Output: 1245
      </code></pre>
  
      <p>In this example, continue skips printing 3, and break stops the loop after printing 5. These expressions provide fine-grained control over loop execution.</p>
  
      <h3>6. Labeled Breaks</h3>
  
      <p>Labeled breaks in Kotlin allow breaking out of an outer loop from within an inner loop. They provide a way to control nested loop execution more precisely.</p>
  
      <h4>Example: Breaking from Nested Loops</h4>
      <pre><code class="language-kotlin">
      outer@ for (i in 1..3) {
          for (j in 1..3) {
              if (i * j == 4) break@outer
              print("$i$j ")
          }
      }
      // Output: 11 12 13 21
      </code></pre>
  
      <p>The @outer label is used to break out of both loops when i * j equals 4. This allows for more complex loop control in nested scenarios.</p>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice working with control structures in Kotlin:</p>
  
      <ol>
        <li>
          <strong>FizzBuzz:</strong>
          <p>Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  for (i in 1..100) {
      when {
          i % 15 == 0 -> println("FizzBuzz")
          i % 3 == 0 -> println("Fizz")
          i % 5 == 0 -> println("Buzz")
          else -> println(i)
      }
  }
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Guessing Game:</strong>
          <p>Create a simple number guessing game. Generate a random number between 1 and 100, then use a while loop to repeatedly ask the user for guesses. Provide "too high" or "too low" feedback until they guess correctly.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  import kotlin.random.Random
  
  fun main() {
      val number = Random.nextInt(1, 101)
      var guess: Int
      var attempts = 0
  
      println("I'm thinking of a number between 1 and 100.")
  
      do {
          print("Enter your guess: ")
          guess = readLine()?.toIntOrNull() ?: 0
          attempts++
  
          when {
              guess < number -> println("Too low!")
              guess > number -> println("Too high!")
              else -> println("Correct! You guessed it in $attempts attempts.")
          }
      } while (guess != number)
  }
            </code></pre>
          </details>
        </li>
      </ol>
  
      <p>These assignments will help you practice using various control structures in Kotlin, including loops, conditional statements, and user input. Remember to consider edge cases and user experience when implementing these programs.</p>
    </section>`
  },
  {
    id: 'object',
    title: 'Object-Oriented Programming in Kotlin',
    content: `<section id="object">
      <h2>Object-Oriented Programming in Kotlin</h2>
  
      <p>Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. Kotlin provides full support for OOP with some additional features and improvements over traditional OOP languages.</p>
  
      <h3>1. Classes and Objects</h3>
      
      <p>A class is a blueprint for creating objects (instances) that have similar properties and methods. An object is an instance of a class.</p>
  
      <h4>Example: Defining and Using a Class</h4>
      <pre><code class="language-kotlin">
      class Person(val name: String, var age: Int) {
          fun introduce() = "Hi, I'm $name and I'm $age years old."
      }
  
      val alice = Person("Alice", 30)
      println(alice.introduce())  // Output: Hi, I'm Alice and I'm 30 years old.
      alice.age = 31
      println(alice.age)  // Output: 31
      </code></pre>
  
      <p><strong>Explanation:</strong> This example defines a Person class with properties (name and age) and a method (introduce). We create an instance of Person, call its method, and modify its mutable property.</p>
  
      <h3>2. Inheritance</h3>
  
      <p>Inheritance is a mechanism where a new class is derived from an existing class, inheriting its properties and methods.</p>
  
      <h4>Example: Base and Derived Classes</h4>
      <pre><code class="language-kotlin">
      open class Animal(val name: String) {
          open fun makeSound() = "The animal makes a sound"
      }
  
      class Dog(name: String) : Animal(name) {
          override fun makeSound() = "The dog barks"
      }
  
      val animal = Animal("Generic Animal")
      val dog = Dog("Buddy")
  
      println(animal.makeSound())  // Output: The animal makes a sound
      println(dog.makeSound())     // Output: The dog barks
      </code></pre>
  
      <p><strong>Explanation:</strong> The Animal class is marked as 'open' to allow inheritance. The Dog class inherits from Animal and overrides the makeSound method. The 'override' keyword is required when overriding a method.</p>
  
      <h3>3. Interfaces</h3>
  
      <p>An interface defines a contract that classes can implement, specifying a set of methods and properties that the class must provide.</p>
  
      <h4>Example: Defining and Implementing an Interface</h4>
      <pre><code class="language-kotlin">
      interface Flyable {
          fun fly()
          val maxAltitude: Int
      }
  
      class Bird(override val maxAltitude: Int) : Flyable {
          override fun fly() {
              println("The bird is flying up to $maxAltitude meters")
          }
      }
  
      val eagle = Bird(3000)
      eagle.fly()  // Output: The bird is flying up to 3000 meters
      </code></pre>
  
      <p><strong>Explanation:</strong> The Flyable interface declares a method (fly) and a property (maxAltitude). The Bird class implements this interface, providing implementations for both the method and the property.</p>
  
      <h3>4. Data Classes</h3>
  
      <p>Data classes are a concise way to create classes that are used to hold data, automatically providing useful methods like toString(), equals(), and hashCode().</p>
  
      <h4>Example: Using a Data Class</h4>
      <pre><code class="language-kotlin">
      data class User(val name: String, val id: Int)
  
      val user1 = User("Alice", 1)
      val user2 = User("Alice", 1)
      val user3 = User("Bob", 2)
  
      println(user1)          // Output: User(name=Alice, id=1)
      println(user1 == user2) // Output: true
      println(user1 == user3) // Output: false
  
      val (name, id) = user1
      println("$name, $id")   // Output: Alice, 1
      </code></pre>
  
      <p><strong>Explanation:</strong> The data class automatically provides toString(), equals(), hashCode(), and component functions for destructuring. This makes data classes very convenient for holding and manipulating data.</p>
  
      <h3>5. Object Declarations and Companion Objects</h3>
  
      <p>Object declarations create singletons, while companion objects allow you to define static-like members for a class.</p>
  
      <h4>Example: Singleton and Companion Object</h4>
      <pre><code class="language-kotlin">
      object DatabaseConfig {
          val url = "jdbc:mysql://localhost/test"
          fun connect() = println("Connecting to: $url")
      }
  
      class MyClass {
          companion object {
              fun create(): MyClass = MyClass()
          }
      }
  
      DatabaseConfig.connect()  // Output: Connecting to: jdbc:mysql://localhost/test
  
      val instance = MyClass.create()
      </code></pre>
  
      <p><strong>Explanation:</strong> DatabaseConfig is a singleton object that can be used directly. The companion object in MyClass allows you to call create() on the class itself, similar to a static method in other languages.</p>
  
      <h3>6. Sealed Classes</h3>
  
      <p>Sealed classes are used for representing restricted class hierarchies, where a value can have one of the types from a limited set, but cannot have any other type.</p>
  
      <h4>Example: Using Sealed Classes</h4>
      <pre><code class="language-kotlin">
      sealed class Result {
          data class Success(val data: String) : Result()
          data class Error(val message: String) : Result()
      }
  
      fun handleResult(result: Result) = when(result) {
          is Result.Success -> println("Success: {result.data}")
          is Result.Error -> println("Error: {result.message}")
      }
  
      handleResult(Result.Success("Operation completed"))  // Output: Success: Operation completed
      handleResult(Result.Error("Something went wrong"))   // Output: Error: Something went wrong
      </code></pre>
  
      <p><strong>Explanation:</strong> The sealed class Result can only have two subclasses: Success and Error. This allows for exhaustive when expressions without needing an else branch, as the compiler knows all possible subtypes.</p>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice working with OOP concepts in Kotlin:</p>
  
      <ol>
        <li>
          <strong>Shape Hierarchy:</strong>
          <p>Create a base class Shape with a method to calculate area. Then create subclasses Circle and Rectangle that inherit from Shape and implement the area calculation. Create instances of both and print their areas.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  abstract class Shape {
      abstract fun calculateArea(): Double
  }
  
  class Circle(private val radius: Double) : Shape() {
      override fun calculateArea() = Math.PI * radius * radius
  }
  
  class Rectangle(private val width: Double, private val height: Double) : Shape() {
      override fun calculateArea() = width * height
  }
  
  val circle = Circle(5.0)
  val rectangle = Rectangle(4.0, 6.0)
  
  println("Circle area: {circle.calculateArea()}")
  println("Rectangle area: {rectangle.calculateArea()}")
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Bank Account System:</strong>
          <p>Create a BankAccount class with methods for deposit and withdrawal. Then create a SavingsAccount subclass that overrides the withdrawal method to prevent the balance from going below zero. Use a data class to represent a Transaction.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  data class Transaction(val type: String, val amount: Double)
  
  open class BankAccount(var balance: Double) {
      val transactions = mutableListOf&lt;Transaction&gt;()
  
      open fun deposit(amount: Double) {
          balance += amount
          transactions.add(Transaction("Deposit", amount))
      }
  
      open fun withdraw(amount: Double) {
          balance -= amount
          transactions.add(Transaction("Withdrawal", amount))
      }
  }
  
  class SavingsAccount(balance: Double) : BankAccount(balance) {
      override fun withdraw(amount: Double) {
          if (balance - amount >= 0) {
              super.withdraw(amount)
          } else {
              println("Insufficient funds")
          }
      }
  }
  
  val account = SavingsAccount(100.0)
  account.deposit(50.0)
  account.withdraw(75.0)
  account.withdraw(100.0)  // This will print: Insufficient funds
  
  println("Final balance: {account.balance}")
  println("Transactions: {account.transactions}")
            </code></pre>
          </details>
        </li>
      </ol>
  
      <p>These assignments will help you practice using various OOP concepts in Kotlin, including inheritance, polymorphism, and data classes. Remember to think about the relationships between classes and how to best structure your code.</p>
    </section>`
  },
  {
    id: 'exception',
    title: 'Exception Handling in Kotlin',
    content: `<section id="exception">
      <h2>Exception Handling in Kotlin</h2>
  
      <p>Exception handling in Kotlin allows you to manage and respond to runtime errors or exceptional conditions in your code. Kotlin provides a robust mechanism for throwing and catching exceptions, with some improvements over traditional exception handling in Java.</p>
  
      <h3>1. Try-Catch Blocks</h3>
      
      <p> The try-catch block is used to enclose code that might throw an exception. If an exception occurs, it's caught and handled in the catch block.</p>
  
      <h4>Example: Basic Try-Catch Usage</h4>
      <pre><code class="language-kotlin">
      fun divideNumbers(a: Int, b: Int): Int {
          try {
              return a / b
          } catch (e: ArithmeticException) {
              println("Error: {e.message}")
              return 0
          }
      }
  
      println(divideNumbers(10, 2))  // Output: 5
      println(divideNumbers(10, 0))  // Output: Error: / by zero
                                     //         0
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates a basic try-catch block. It attempts to divide two numbers and catches an ArithmeticException if division by zero occurs. The catch block handles the exception by printing an error message and returning a default value.</p>
  
      <h3>2. Multiple Catch Blocks</h3>
  
      <p> You can use multiple catch blocks to handle different types of exceptions differently.</p>
  
      <h4>Example: Handling Multiple Exception Types</h4>
      <pre><code class="language-kotlin">
      fun parseAndDivide(a: String, b: String): Int {
          try {
              val numerator = a.toInt()
              val denominator = b.toInt()
              return numerator / denominator
          } catch (e: NumberFormatException) {
              println("Error: One of the inputs is not a valid number")
              return 0
          } catch (e: ArithmeticException) {
              println("Error: Division by zero")
              return 0
          }
      }
  
      println(parseAndDivide("10", "2"))   // Output: 5
      println(parseAndDivide("10", "0"))   // Output: Error: Division by zero
                                           //         0
      println(parseAndDivide("10", "a"))   // Output: Error: One of the inputs is not a valid number
                                           //         0
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to handle multiple exception types. It attempts to parse two strings to integers and divide them, catching NumberFormatException for parsing errors and ArithmeticException for division by zero.</p>
  
      <h3>3. Finally Block</h3>
  
      <p><strong>Definition:</strong> The finally block contains code that will be executed regardless of whether an exception was thrown or caught.</p>
  
      <h4>Example: Using Finally for Cleanup</h4>
      <pre><code class="language-kotlin">
      fun readFile(filename: String): String {
          val reader = FileReader(filename)
          try {
              return reader.readText()
          } catch (e: IOException) {
              println("Error reading file: {e.message}")
              return ""
          } finally {
              reader.close()
              println("File reader closed")
          }
      }
  
      // Usage (assume "test.txt" exists):
      println(readFile("test.txt"))
      // Output: [content of test.txt]
      //         File reader closed
  
      // Usage (with non-existent file):
      println(readFile("nonexistent.txt"))
      // Output: Error reading file: [error message]
      //         File reader closed
      //         
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates the use of a finally block to ensure that a resource (in this case, a FileReader) is always closed, regardless of whether the read operation succeeds or fails.</p>
  
      <h3>4. Throw Expression</h3>
  
      <p> In Kotlin, throw is an expression, which means it can be used as part of other expressions.</p>
  
      <h4>Example: Throw as an Expression</h4>
      <pre><code class="language-kotlin">
      fun getPlayerName(id: Int): String {
          val name = when (id) {
              1 -> "Alice"
              2 -> "Bob"
              else -> throw IllegalArgumentException("Invalid player ID")
          }
          return name
      }
  
      try {
          println(getPlayerName(1))  // Output: Alice
          println(getPlayerName(3))  // Throws IllegalArgumentException
      } catch (e: IllegalArgumentException) {
          println("Error: {e.message}")
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how throw can be used as part of a when expression. If an invalid player ID is provided, an IllegalArgumentException is thrown.</p>
  
      <h3>5. Try as an Expression</h3>
  
      <p> In Kotlin, try can be used as an expression, returning a value.</p>
  
      <h4>Example: Try-Catch as an Expression</h4>
      <pre><code class="language-kotlin">
      fun convertToInt(str: String): Int {
          val result = try {
              str.toInt()
          } catch (e: NumberFormatException) {
              0
          }
          return result
      }
  
      println(convertToInt("42"))    // Output: 42
      println(convertToInt("Hello")) // Output: 0
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates how try-catch can be used as an expression. The function attempts to convert a string to an integer, returning 0 if the conversion fails.</p>
  
      <h3>6. Custom Exceptions</h3>
  
      <p><strong>Definition:</strong> Kotlin allows you to define custom exception classes to represent specific error conditions in your application.</p>
  
      <h4>Example: Creating and Using a Custom Exception</h4>
      <pre><code class="language-kotlin">
      class InsufficientFundsException(message: String) : Exception(message)
  
      class BankAccount(var balance: Double) {
          fun withdraw(amount: Double) {
              if (amount > balance) {
                  throw InsufficientFundsException("Not enough funds to withdraw $amount")
              }
              balance -= amount
          }
      }
  
      val account = BankAccount(100.0)
      try {
          account.withdraw(50.0)
          println("New balance: {account.balance}")  // Output: New balance: 50.0
          account.withdraw(75.0)  // This will throw InsufficientFundsException
      } catch (e: InsufficientFundsException) {
          println("Error: {e.message}")
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example defines a custom InsufficientFundsException and uses it in a BankAccount class. The withdraw method throws this exception when there are not enough funds, allowing for more specific error handling.</p>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice exception handling in Kotlin:</p>
  
      <ol>
        <li>
          <strong>Safe Division Calculator:</strong>
          <p>Create a function that takes two strings as input, converts them to integers, and returns their division. Handle potential NumberFormatException and ArithmeticException. Use try-catch as an expression to return a default value of null if any exception occurs.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  fun safeDivide(a: String, b: String): Double? {
      return try {
          val numerator = a.toInt()
          val denominator = b.toInt()
          numerator.toDouble() / denominator
      } catch (e: NumberFormatException) {
          println("Error: Invalid number format")
          null
      } catch (e: ArithmeticException) {
          println("Error: Division by zero")
          null
      }
  }
  
  println(safeDivide("10", "2"))   // Output: 5.0
  println(safeDivide("10", "0"))   // Output: Error: Division by zero
                                   //         null
  println(safeDivide("10", "a"))   // Output: Error: Invalid number format
                                   //         null
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Resource Management:</strong>
          <p>Implement a Resource class with a use method. The Resource should be opened in the constructor and closed in a close method. Use this class in a function that demonstrates proper resource management with try-finally, ensuring the resource is always closed, even if an exception occurs.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  class Resource(val name: String) {
      init {
          println("Resource $name opened")
      }
  
      fun use() {
          println("Using resource $name")
          if (name == "faulty") {
              throw RuntimeException("Error using resource")
          }
      }
  
      fun close() {
          println("Resource $name closed")
      }
  }
  
  fun useResource(resourceName: String) {
      val resource = Resource(resourceName)
      try {
          resource.use()
      } finally {
          resource.close()
      }
  }
  
  useResource("normal")
  // Output: Resource normal opened
  //         Using resource normal
  //         Resource normal closed
  
  try {
      useResource("faulty")
  } catch (e: RuntimeException) {
      println("Caught exception: {e.message}")
  }
  // Output: Resource faulty opened
  //         Using resource faulty
  //         Resource faulty closed
  //         Caught exception: Error using resource
            </code></pre>
          </details>
        </li>
      </ol>
  
      <p>These assignments will help you practice various aspects of exception handling in Kotlin, including try-catch expressions, resource management, and custom exceptions. Remember to always consider potential exceptions and handle them appropriately in your code.</p>
    </section>`
  },
  {
    id: 'collections',
    title: 'Collections Framework in Kotlin',
    content: `<section id="collections">
      <h2>Collections Framework in Kotlin</h2>
  
      <p>The Collections Framework in Kotlin provides a set of classes and interfaces for storing and manipulating groups of objects. Kotlin's collections are built on top of the Java collections framework but add many useful features and improvements.</p>
  
      <h3>1. List</h3>
      
      <p> A List is an ordered collection of elements that allows duplicate elements. In Kotlin, lists can be mutable (MutableList) or read-only (List).</p>
  
      <h4>Example: Creating and Using Lists</h4>
      <pre><code class="language-kotlin">
      // Read-only list
      val readOnlyList = listOf("apple", "banana", "cherry")
      println(readOnlyList[1])  // Output: banana
  
      // Mutable list
      val mutableList = mutableListOf(1, 2, 3)
      mutableList.add(4)
      mutableList.removeAt(0)
      println(mutableList)  // Output: [2, 3, 4]
  
      // List operations
      println(readOnlyList.first())  // Output: apple
      println(readOnlyList.last())   // Output: cherry
      println(readOnlyList.contains("banana"))  // Output: true
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates creating both read-only and mutable lists. It shows basic operations like accessing elements, adding and removing elements (for mutable lists), and using utility functions like first(), last(), and contains().</p>
  
      <h3>2. Set</h3>
  
      <p><strong>Definition:</strong> A Set is a collection that contains no duplicate elements. Like lists, sets in Kotlin can be mutable (MutableSet) or read-only (Set).</p>
  
      <h4>Example: Working with Sets</h4>
      <pre><code class="language-kotlin">
      // Read-only set
      val readOnlySet = setOf(1, 2, 3, 3, 2, 1)
      println(readOnlySet)  // Output: [1, 2, 3]
  
      // Mutable set
      val mutableSet = mutableSetOf("a", "b", "c")
      mutableSet.add("d")
      mutableSet.remove("b")
      println(mutableSet)  // Output: [a, c, d]
  
      // Set operations
      val set1 = setOf(1, 2, 3)
      val set2 = setOf(3, 4, 5)
      println(set1 union set2)        // Output: [1, 2, 3, 4, 5]
      println(set1 intersect set2)    // Output: [3]
      println(set1 subtract set2)     // Output: [1, 2]
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to create and use sets in Kotlin. It demonstrates that sets automatically remove duplicates and showcases set operations like union, intersect, and subtract.</p>
  
      <h3>3. Map</h3>
  
      <p> A Map is a collection of key-value pairs. Each key in a map is unique and maps to exactly one value. Kotlin provides both read-only (Map) and mutable (MutableMap) versions.</p>
  
      <h4>Example: Using Maps</h4>
      <pre><code class="language-kotlin">
      // Read-only map
      val readOnlyMap = mapOf("a" to 1, "b" to 2, "c" to 3)
      println(readOnlyMap["b"])  // Output: 2
  
      // Mutable map
      val mutableMap = mutableMapOf("x" to 10, "y" to 20)
      mutableMap["z"] = 30
      mutableMap.remove("x")
      println(mutableMap)  // Output: {y=20, z=30}
  
      // Map operations
      println(readOnlyMap.keys)    // Output: [a, b, c]
      println(readOnlyMap.values)  // Output: [1, 2, 3]
      println(readOnlyMap.entries) // Output: [a=1, b=2, c=3]
  
      // Iterating over a map
      for ((key, value) in readOnlyMap) {
          println("$key -> $value")
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates creating and using maps in Kotlin. It shows how to access values by key, add and remove entries (for mutable maps), and perform various operations on maps. It also shows how to iterate over a map using a for loop with destructuring.</p>
  
      <h3>4. Collection Transformations</h3>
  
      <p> Kotlin provides a rich set of functions for transforming collections, allowing you to manipulate and process collection data efficiently.</p>
  
      <h4>Example: Collection Transformation Functions</h4>
      <pre><code class="language-kotlin">
      val numbers = listOf(1, 2, 3, 4, 5, 6)
      
      // Map: transform each element
      val squared = numbers.map { it * it }
      println(squared)  // Output: [1, 4, 9, 16, 25, 36]
  
      // Filter: keep elements that satisfy a condition
      val evens = numbers.filter { it % 2 == 0 }
      println(evens)  // Output: [2, 4, 6]
  
      // FlatMap: transform and flatten
      val nested = listOf(listOf(1, 2), listOf(3, 4))
      val flat = nested.flatMap { it }
      println(flat)  // Output: [1, 2, 3, 4]
  
      // Reduce: combine elements
      val sum = numbers.reduce { acc, i -> acc + i }
      println(sum)  // Output: 21
  
      // GroupBy: group elements by a key
      val words = listOf("apple", "banana", "cherry", "date")
      val grouped = words.groupBy { it.length }
      println(grouped)  // Output: {5=[apple], 6=[banana, cherry], 4=[date]}
      </code></pre>
  
      <p><strong>Explanation:</strong> This example showcases various collection transformation functions in Kotlin. map transforms each element, filter selects elements based on a condition, flatMap transforms and flattens nested collections, reduce combines elements, and groupBy groups elements based on a key function.</p>
  
      <h3>5. Sequences</h3>
  
      <p> Sequences in Kotlin represent lazily-evaluated collections. They offer the same functions as collections but handle intermediate steps more efficiently for large datasets or complex operation chains.</p>
  
      <h4>Example: Using Sequences</h4>
      <pre><code class="language-kotlin">
      val numbers = (1..1000000).toList()
  
      // Using a regular collection
      val sumOfDoubledEven = numbers.filter { it % 2 == 0 }
                                    .map { it * 2 }
                                    .take(10)
                                    .sum()
      println(sumOfDoubledEven)
  
      // Using a sequence
      val sumOfDoubledEvenSeq = numbers.asSequence()
                                       .filter { it % 2 == 0 }
                                       .map { it * 2 }
                                       .take(10)
                                       .sum()
      println(sumOfDoubledEvenSeq)
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates the use of sequences. While both approaches produce the same result, the sequence version is more efficient for large collections as it evaluates elements lazily and doesn't create intermediate collections for each operation.</p>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice working with collections in Kotlin:</p>
  
      <ol>
        <li>
          <strong>Student Grade Analyzer:</strong>
          <p>Create a program that manages a list of students and their grades. Implement functions to add students, record grades, calculate average grades, and find the top-performing student.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  data class Student(val name: String, val grades: MutableList<Int> = mutableListOf())
  
  class GradeBook {
      private val students = mutableListOf<Student>()
  
      fun addStudent(name: String) {
          students.add(Student(name))
      }
  
      fun recordGrade(studentName: String, grade: Int) {
          students.find { it.name == studentName }?.grades?.add(grade)
      }
  
      fun calculateAverageGrade(studentName: String): Double? {
          return students.find { it.name == studentName }?.grades?.average()
      }
  
      fun findTopStudent(): Student? {
          return students.maxByOrNull { it.grades.average() }
      }
  }
  
  // Usage
  val gradeBook = GradeBook()
  gradeBook.addStudent("Alice")
  gradeBook.addStudent("Bob")
  
  gradeBook.recordGrade("Alice", 85)
  gradeBook.recordGrade("Alice", 90)
  gradeBook.recordGrade("Bob", 80)
  gradeBook.recordGrade("Bob", 95)
  
  println(gradeBook.calculateAverageGrade("Alice"))  // Output: 87.5
  println(gradeBook.calculateAverageGrade("Bob"))    // Output: 87.5
  
  val topStudent = gradeBook.findTopStudent()
  println("Top student: {topStudent?.name}")  // Output: Top student: Bob
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Word Frequency Counter:</strong>
          <p>Write a function that takes a string of text and returns a map where the keys are unique words and the values are the frequency of each word. Ignore punctuation and treat words as case-insensitive. Use Kotlin's collection operations to solve this efficiently.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  fun wordFrequency(text: String): Map<String, Int> {
      return text.toLowerCase()
                 .split(Regex("\\s+"))
                 .filter { it.isNotEmpty() }
                 .groupingBy { it.trim('.',',','!','?') }
                 .eachCount()
  }
  
  // Usage
  val text = "The quick brown fox jumps over the lazy dog. The fox was quick and the dog was lazy."
  val frequency = wordFrequency(text)
  frequency.forEach { (word, count) ->
      println("$word: $count")
  }
  // Output:
  // the: 4
  // quick: 2
  // brown: 1
  // fox: 2
  // jumps: 1
  // over: 1
  // lazy: 2
  // dog: 2
  // was: 2
  // and: 1
            </code></pre>
          </details>
        </li>
      </ol>
  
      <p>These assignments will help you practice using various collection types and operations in Kotlin. They cover concepts like data classes, mutable lists, map operations, and collection transformations. Remember to consider efficiency and readability when working with collections.</p>
    </section>`
  },
  {
    id: 'file',
    title: 'File Input/Output in Kotlin',
    content: `<section id="file">
      <h2>File Input/Output in Kotlin</h2>
  
      <p>File Input/Output (I/O) in Kotlin allows you to read from and write to files on your computer. Kotlin provides several convenient ways to handle file operations, building upon Java's I/O capabilities while offering more concise and expressive syntax.</p>
  
      <h3>1. Reading Files</h3>
      
      <p> Reading files in Kotlin involves accessing the contents of a file and processing its data. Kotlin provides several methods to read files, from simple one-liners to more complex operations.</p>
  
      <h4>Example: Reading a File Line by Line</h4>
      <pre><code class="language-kotlin">
      import java.io.File
  
      fun readFileLineByLine(fileName: String) {
          File(fileName).forEachLine { println(it) }
      }
  
      // Usage
      readFileLineByLine("example.txt")
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates how to read a file line by line using the forEachLine function. It's a simple and efficient way to process each line of a file.</p>
  
      <h4>Example: Reading an Entire File as a String</h4>
      <pre><code class="language-kotlin">
      import java.io.File
  
      fun readEntireFile(fileName: String): String {
          return File(fileName).readText()
      }
  
      // Usage
      val content = readEntireFile("example.txt")
      println(content)
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to read an entire file into a single String using the readText() function. This is useful when you need to process the entire file content at once.</p>
  
      <h3>2. Writing Files</h3>
  
      <p> Writing files in Kotlin involves creating new files or modifying existing ones by writing data to them. Kotlin offers straightforward methods to write data to files.</p>
  
      <h4>Example: Writing Text to a File</h4>
      <pre><code class="language-kotlin">
      import java.io.File
  
      fun writeToFile(fileName: String, content: String) {
          File(fileName).writeText(content)
      }
  
      // Usage
      writeToFile("output.txt", "Hello, Kotlin File I/O!")
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates how to write a string to a file using the writeText() function. If the file doesn't exist, it will be created. If it does exist, its content will be overwritten.</p>
  
      <h4>Example: Appending Text to a File</h4>
      <pre><code class="language-kotlin">
      import java.io.File
  
      fun appendToFile(fileName: String, content: String) {
          File(fileName).appendText(content + "\n")
      }
  
      // Usage
      appendToFile("log.txt", "New log entry")
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to append text to an existing file using the appendText() function. This is useful for adding new content to a file without overwriting existing content.</p>
  
      <h3>3. Working with File and Directory Paths</h3>
  
      <p> Kotlin provides utilities to work with file and directory paths, allowing you to manipulate and navigate file systems easily.</p>
  
      <h4>Example: File Path Operations</h4>
      <pre><code class="language-kotlin">
      import java.io.File
  
      fun filePathOperations() {
          val file = File("documents/report.txt")
          
          println("File name: {file.name}")
          println("Parent directory: {file.parent}")
          println("Absolute path: {file.absolutePath}")
          println("Is file: {file.isFile}")
          println("Is directory: {file.isDirectory}")
          println("Exists: {file.exists()}")
      }
  
      // Usage
      filePathOperations()
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates various operations you can perform on file paths, such as getting the file name, parent directory, checking if it's a file or directory, and verifying its existence.</p>
  
      <h3>4. Using Buffered Readers and Writers</h3>
  
      <p>For more efficient reading and writing of large files, Kotlin allows the use of buffered readers and writers, which can improve performance by reducing the number of I/O operations.</p>
  
      <h4>Example: Using BufferedReader and BufferedWriter</h4>
      <pre><code class="language-kotlin">
      import java.io.File
      import java.io.BufferedReader
      import java.io.BufferedWriter
  
      fun copyFileBuffered(source: String, destination: String) {
          File(source).bufferedReader().use { reader ->
              File(destination).bufferedWriter().use { writer ->
                  reader.forEachLine { line ->
                      writer.write(line)
                      writer.newLine()
                  }
              }
          }
      }
  
      // Usage
      copyFileBuffered("source.txt", "destination.txt")
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to use BufferedReader and BufferedWriter to efficiently copy content from one file to another. The use function ensures that the resources are properly closed after use, even if an exception occurs.</p>
  
      <h3>5. Working with Binary Files</h3>
  
      <p> Kotlin also supports working with binary files, allowing you to read and write raw bytes directly.</p>
  
      <h4>Example: Reading and Writing Binary Files</h4>
      <pre><code class="language-kotlin">
      import java.io.File
  
      fun copyBinaryFile(source: String, destination: String) {
          File(source).inputStream().use { input ->
              File(destination).outputStream().use { output ->
                  input.copyTo(output)
              }
          }
      }
  
      // Usage
      copyBinaryFile("image.jpg", "image_copy.jpg")
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates how to copy a binary file (like an image) using input and output streams. The copyTo function efficiently transfers the content from the input stream to the output stream.</p>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice working with File I/O in Kotlin:</p>
  
      <ol>
        <li>
          <strong>Log File Analyzer:</strong>
          <p>Create a program that reads a log file, counts the occurrences of each type of log message (e.g., INFO, WARNING, ERROR), and writes a summary to a new file. Each line of the log file should start with the message type followed by a colon and the actual message.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  import java.io.File
  
  fun analyzeLogFile(inputFile: String, outputFile: String) {
      val messageCounts = mutableMapOf<String, Int>()
  
      File(inputFile).useLines { lines ->
          lines.forEach { line ->
              val messageType = line.substringBefore(':')
              messageCounts[messageType] = messageCounts.getOrDefault(messageType, 0) + 1
          }
      }
  
      File(outputFile).bufferedWriter().use { writer ->
          writer.write("Log Analysis Summary:\n")
          messageCounts.forEach { (type, count) ->
              writer.write("$type: $count\n")
          }
      }
  }
  
  // Usage
  analyzeLogFile("app.log", "log_summary.txt")
            </code></pre>
          </details>
        </li>
        <li>
          <strong>CSV File Processor:</strong>
          <p>Write a program that reads a CSV file containing student information (Name, ID, Grade), processes the data to calculate the average grade, and writes a new CSV file with the original data plus an additional column for the student's grade status (Pass/Fail, where Pass is a grade >= 60).</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  import java.io.File
  
  data class Student(val name: String, val id: String, val grade: Int)
  
  fun processCsvFile(inputFile: String, outputFile: String) {
      val students = mutableListOf<Student>()
  
      // Read and parse input file
      File(inputFile).useLines { lines ->
          lines.drop(1).forEach { line ->
              val (name, id, gradeStr) = line.split(",")
              students.add(Student(name, id, gradeStr.toInt()))
          }
      }
  
      // Calculate average grade
      val averageGrade = students.map { it.grade }.average()
  
      // Write processed data to output file
      File(outputFile).bufferedWriter().use { writer ->
          writer.write("Name,ID,Grade,Status\n")
          students.forEach { student ->
              val status = if (student.grade >= 60) "Pass" else "Fail"
              writer.write("{student.name},{student.id},{student.grade},$status\n")
          }
          writer.write("Average Grade,{"%.2f".format(averageGrade)}\n")
      }
  }
  
  // Usage
  processCsvFile("students.csv", "processed_students.csv")
            </code></pre>
          </details>
        </li>
      </ol>
  
      <p>These assignments will help you practice various aspects of File I/O in Kotlin, including reading from and writing to files, processing data, and working with different file formats. Remember to handle potential exceptions and close resources properly in your implementations.</p>
    </section>`
  },
  {
    id: 'concurrency',
    title: 'Concurrency in Kotlin',
    content: `<section id="concurrency">
      <h2>Concurrency in Kotlin</h2>
  
      <p>Concurrency in Kotlin allows multiple parts of a program to execute simultaneously, improving performance and responsiveness. Kotlin provides several mechanisms for handling concurrency, building upon Java's concurrency model while offering more expressive and safer abstractions.</p>
  
      <h3>1. Coroutines</h3>
      
      <p> Coroutines are Kotlin's way of writing asynchronous, non-blocking code in a sequential manner. They provide a high-level abstraction over threading, making concurrent programming more manageable and efficient.</p>
  
      <h4>Example: Basic Coroutine Usage</h4>
      <pre><code class="language-kotlin">
      import kotlinx.coroutines.*
  
      fun main() = runBlocking {
          launch {
              delay(1000L)
              println("World!")
          }
          println("Hello,")
      }
  
      // Output:
      // Hello,
      // World!
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates the basic usage of coroutines. The launch function creates a new coroutine that runs concurrently with the rest of the code. The delay function suspends the coroutine for a specified time without blocking the thread.</p>
  
      <h3>2. Async and Await</h3>
  
      <p> async is used to start a coroutine that computes some value, while await is used to wait for the result of an async computation. This pattern is useful for parallel decomposition of work.</p>
  
      <h4>Example: Parallel Execution with async</h4>
      <pre><code class="language-kotlin">
      import kotlinx.coroutines.*
  
      suspend fun fetchUserData(): String {
          delay(1000L) // simulate network call
          return "User Data"
      }
  
      suspend fun fetchUserPosts(): List&lt;String&gt; {
          delay(1000L) // simulate network call
          return listOf("Post 1", "Post 2")
      }
  
      fun main() = runBlocking {
          val userDataDeferred = async { fetchUserData() }
          val userPostsDeferred = async { fetchUserPosts() }
          
          val userData = userDataDeferred.await()
          val userPosts = userPostsDeferred.await()
          
          println("User Data: $userData")
          println("User Posts: $userPosts")
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to use async to start multiple operations concurrently and await to wait for their results. The fetchUserData and fetchUserPosts functions are executed in parallel, potentially saving time compared to sequential execution.</p>
  
      <h3>3. Channels</h3>
  
      <p> Channels provide a way to transfer a stream of values between coroutines. They are conceptually similar to BlockingQueue but with suspending operations instead of blocking ones.</p>
  
      <h4>Example: Using Channels for Producer-Consumer Pattern</h4>
      <pre><code class="language-kotlin">
      import kotlinx.coroutines.*
      import kotlinx.coroutines.channels.*
  
      fun main() = runBlocking {
          val channel = Channel&lt;Int&gt;()
          launch {
              for (x in 1..5) {
                  delay(100L)
                  channel.send(x * x)
              }
              channel.close()
          }
          for (y in channel) {
              println(y)
          }
          println("Done!")
      }
  
      // Output:
      // 1
      // 4
      // 9
      // 16
      // 25
      // Done!
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates the use of a Channel to communicate between coroutines. One coroutine sends squares of numbers through the channel, while another receives and prints them. The for loop on the receiving end automatically terminates when the channel is closed.</p>
  
      <h3>4. Shared Mutable State and Concurrency</h3>
  
      <p> When multiple coroutines access the same mutable state, it can lead to race conditions. Kotlin provides several mechanisms to safely work with shared mutable state in concurrent environments.</p>
  
      <h4>Example: Using Atomic Variables</h4>
      <pre><code class="language-kotlin">
      import kotlinx.coroutines.*
      import java.util.concurrent.atomic.AtomicInteger
      import kotlin.system.measureTimeMillis
  
      suspend fun massiveRun(action: suspend () -> Unit) {
          val n = 100  // number of coroutines to launch
          val k = 1000 // times an action is repeated by each coroutine
          val time = measureTimeMillis {
              coroutineScope {
                  repeat(n) {
                      launch {
                          repeat(k) { action() }
                      }
                  }
              }
          }
          println("Completed {n * k} actions in $time ms")
      }
  
      fun main() = runBlocking {
          val counter = AtomicInteger()
          massiveRun {
              counter.incrementAndGet()
          }
          println("Counter = {counter.get()}")
      }
  
      // Output:
      // Completed 100000 actions in [some] ms
      // Counter = 100000
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to use AtomicInteger to safely increment a counter from multiple coroutines. The AtomicInteger class provides atomic operations that are safe to use in concurrent environments, preventing race conditions.</p>
  
      <h3>5. Select Expression</h3>
  
      <p><strong>Definition:</strong> The select expression allows you to await multiple suspending operations simultaneously and select the first one that becomes available.</p>
  
      <h4>Example: Using select with Channels</h4>
      <pre><code class="language-kotlin">
      import kotlinx.coroutines.*
      import kotlinx.coroutines.channels.*
      import kotlinx.coroutines.selects.*
  
      fun CoroutineScope.fizz() = produce&lt;String&gt; {
          while(true) {
              delay(300)
              send("Fizz")
          }
      }
  
      fun CoroutineScope.buzz() = produce&lt;String&gt; {
          while(true) {
              delay(500)
              send("Buzz")
          }
      }
  
      suspend fun selectFizzBuzz(fizz: ReceiveChannel&lt;String&gt;, buzz: ReceiveChannel&lt;String&gt;) {
          select&lt;Unit&gt; {
              fizz.onReceive { value ->
                  println("Fizz -> '$value'")
              }
              buzz.onReceive { value ->
                  println("Buzz -> '$value'")
              }
          }
      }
  
      fun main() = runBlocking&lt;Unit&gt; {
          val fizz = fizz()
          val buzz = buzz()
          repeat(7) {
              selectFizzBuzz(fizz, buzz)
          }
          coroutineContext.cancelChildren()
      }
  
      // Output might look like:
      // Fizz -> 'Fizz'
      // Buzz -> 'Buzz'
      // Fizz -> 'Fizz'
      // Fizz -> 'Fizz'
      // Buzz -> 'Buzz'
      // Fizz -> 'Fizz'
      // Buzz -> 'Buzz'
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates the use of select to receive from multiple channels. The fizz and buzz functions produce values at different intervals, and selectFizzBuzz uses select to receive from whichever channel has a value available first.</p>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice working with concurrency in Kotlin:</p>
  
      <ol>
        <li>
          <strong>Parallel Processing:</strong>
          <p>Create a program that downloads content from multiple URLs concurrently using coroutines. The program should measure and print the total time taken to download all URLs.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  import kotlinx.coroutines.*
  import java.net.URL
  import kotlin.system.measureTimeMillis
  
  suspend fun downloadUrl(url: String): String {
      return withContext(Dispatchers.IO) {
          URL(url).readText()
      }
  }
  
  suspend fun downloadAllUrls(urls: List&lt;String&gt;): List&lt;String&gt; = coroutineScope {
      urls.map { url ->
          async {
              downloadUrl(url)
          }
      }.awaitAll()
  }
  
  fun main() = runBlocking {
      val urls = listOf(
          "https://example.com",
          "https://example.org",
          "https://example.net"
      )
  
      val time = measureTimeMillis {
          val results = downloadAllUrls(urls)
          results.forEachIndexed { index, content ->
              println("URL {index + 1}: {content.length} bytes")
          }
      }
  
      println("Total time: $time ms")
  }
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Producer-Consumer with Bounded Buffer:</strong>
          <p>Implement a producer-consumer scenario using coroutines and a channel with a bounded buffer. The producer should generate numbers, and multiple consumers should process these numbers (e.g., calculate their factorial). Ensure that the producer waits if the buffer is full and consumers wait if the buffer is empty.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  import kotlinx.coroutines.*
  import kotlinx.coroutines.channels.*
  
  fun CoroutineScope.producer(channel: SendChannel&lt;Int&gt;) = launch {
      for (i in 1..20) {
          channel.send(i)
          println("Produced: $i")
          delay(100) // simulate some work
      }
  }
  
  fun CoroutineScope.consumer(id: Int, channel: ReceiveChannel&lt;Int&gt;) = launch {
      for (num in channel) {
          val factorial = (1..num).reduce { acc, i -> acc * i }
          println("Consumer $id: Factorial of $num is $factorial")
          delay(500) // simulate processing time
      }
  }
  
  fun main() = runBlocking {
      val channel = Channel&lt;Int&gt;(3) // buffer size of 3
      val producerJob = producer(channel)
      val consumers = List(3) { consumer(it, channel) }
      
      producerJob.join()
      channel.close()
      consumers.joinAll()
  }
            </code></pre>
          </details>
        </li>
      </ol>
  
      <p>These assignments will help you practice various aspects of concurrency in Kotlin, including coroutines, channels, and parallel processing. Remember to consider potential race conditions and ensure proper synchronization in your implementations.</p>
    </section>`
  },
  {
    id: 'networking',
    title: 'Networking in Kotlin',
    content: `<section id="networking">
      <h2>Networking in Kotlin</h2>
  
      <p>Networking in Kotlin allows you to create applications that communicate over networks, such as the internet. Kotlin provides several ways to perform network operations, building upon Java's networking capabilities while offering more concise syntax and coroutine support for asynchronous operations.</p>
  
      <h3>1. HTTP Requests with HttpURLConnection</h3>
      
      <p><strong>Definition:</strong> HttpURLConnection is a built-in Java class that Kotlin can use to send HTTP requests and receive responses. It's a low-level API but useful for simple networking tasks.</p>
  
      <h4>Example: Making a GET Request</h4>
      <pre><code class="language-kotlin">
      import java.net.HttpURLConnection
      import java.net.URL
  
      fun makeGetRequest(urlString: String): String {
          val url = URL(urlString)
          val connection = url.openConnection() as HttpURLConnection
          connection.requestMethod = "GET"
          
          return connection.inputStream.bufferedReader().use { it.readText() }
      }
  
      fun main() {
          val response = makeGetRequest("https://api.example.com/data")
          println(response)
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates how to make a simple GET request using HttpURLConnection. It opens a connection to the specified URL, sets the request method to GET, and reads the response as a string.</p>
  
      <h3>2. Using OkHttp Library</h3>
  
      <p> OkHttp is a popular third-party HTTP client for Android and Java applications. It's efficient, easy to use, and supports modern web protocols.</p>
  
      <h4>Example: Making POST Request with OkHttp</h4>
      <pre><code class="language-kotlin">
      import okhttp3.*
  
      fun makePostRequest(url: String, json: String): String {
          val client = OkHttpClient()
          val requestBody = json.toRequestBody("application/json".toMediaType())
          
          val request = Request.Builder()
              .url(url)
              .post(requestBody)
              .build()
          
          client.newCall(request).execute().use { response ->
              return response.body?.string() ?: ""
          }
      }
  
      fun main() {
          val json = """{"key": "value"}"""
          val response = makePostRequest("https://api.example.com/post", json)
          println(response)
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to use the OkHttp library to make a POST request. It creates a request with a JSON body, sends it to the specified URL, and returns the response as a string.</p>
  
      <h3>3. Asynchronous Networking with Coroutines</h3>
  
      <p> Kotlin coroutines provide a way to perform asynchronous operations without blocking threads, making them ideal for network operations.</p>
  
      <h4>Example: Asynchronous GET Request with Coroutines</h4>
      <pre><code class="language-kotlin">
      import kotlinx.coroutines.*
      import java.net.HttpURLConnection
      import java.net.URL
  
      suspend fun fetchUrl(url: String): String = withContext(Dispatchers.IO) {
          val connection = URL(url).openConnection() as HttpURLConnection
          connection.inputStream.bufferedReader().use { it.readText() }
      }
  
      fun main() = runBlocking {
          val urls = listOf(
              "https://api.example.com/data1",
              "https://api.example.com/data2",
              "https://api.example.com/data3"
          )
  
          val responses = urls.map { url ->
              async { fetchUrl(url) }
          }.awaitAll()
  
          responses.forEachIndexed { index, response ->
              println("Response from {urls[index]}: $response")
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates how to use coroutines to perform multiple asynchronous GET requests concurrently. The fetchUrl function is a suspend function that performs the network operation on the IO dispatcher, and the main function uses async to start multiple requests in parallel.</p>
  
      <h3>4. Working with WebSockets</h3>
  
      <p><strong>Definition:</strong> WebSockets provide full-duplex communication channels over a single TCP connection, allowing real-time data exchange between clients and servers.</p>
  
      <h4>Example: WebSocket Client with OkHttp</h4>
      <pre><code class="language-kotlin">
      import okhttp3.*
      import okio.ByteString
  
      class EchoWebSocketListener : WebSocketListener() {
          override fun onOpen(webSocket: WebSocket, response: Response) {
              webSocket.send("Hello, WebSocket!")
          }
  
          override fun onMessage(webSocket: WebSocket, text: String) {
              println("Receiving: $text")
          }
  
          override fun onClosing(webSocket: WebSocket, code: Int, reason: String) {
              webSocket.close(1000, null)
              println("Closing: $code / $reason")
          }
  
          override fun onFailure(webSocket: WebSocket, t: Throwable, response: Response?) {
              println("Error: " + t.message)
          }
      }
  
      fun main() {
          val client = OkHttpClient()
          val request = Request.Builder().url("ws://echo.websocket.org").build()
          val listener = EchoWebSocketListener()
          val ws = client.newWebSocket(request, listener)
  
          // Trigger shutdown of the dispatcher's executor so this process can exit cleanly.
          client.dispatcher.executorService.shutdown()
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to create a WebSocket client using OkHttp. It connects to an echo server, sends a message, and listens for responses. The EchoWebSocketListener class handles different WebSocket events like opening a connection, receiving messages, and handling errors.</p>
  
      <h3>5. Parsing JSON with Kotlinx Serialization</h3>
  
      <p> Kotlinx Serialization is a Kotlin library for serializing and deserializing JSON, which is commonly used in network communication.</p>
  
      <h4>Example: Parsing JSON Response</h4>
      <pre><code class="language-kotlin">
      import kotlinx.serialization.*
      import kotlinx.serialization.json.*
  
      @Serializable
      data class User(val id: Int, val name: String, val email: String)
  
      fun parseJsonResponse(jsonString: String): User {
          return Json.decodeFromString(jsonString)
      }
  
      fun main() {
          val jsonResponse = """{"id":1,"name":"John Doe","email":"john@example.com"}"""
          val user = parseJsonResponse(jsonResponse)
          println("User: $user")
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates how to use Kotlinx Serialization to parse a JSON string into a Kotlin object. The User class is annotated with @Serializable, allowing it to be easily serialized and deserialized. The parseJsonResponse function uses Json.decodeFromString to convert the JSON string into a User object.</p>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice working with networking in Kotlin:</p>
  
      <ol>
        <li>
          <strong>Weather API Client:</strong>
          <p>Create a program that fetches weather data from a public weather API (e.g., OpenWeatherMap). The program should take a city name as input, make an API request, parse the JSON response, and display the current temperature and weather conditions.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  import kotlinx.coroutines.*
  import kotlinx.serialization.*
  import kotlinx.serialization.json.*
  import java.net.HttpURLConnection
  import java.net.URL
  
  @Serializable
  data class WeatherResponse(
      val main: MainWeather,
      val weather: List&lt;WeatherCondition&gt;
  )
  
  @Serializable
  data class MainWeather(val temp: Double)
  
  @Serializable
  data class WeatherCondition(val description: String)
  
  suspend fun fetchWeatherData(city: String): WeatherResponse = withContext(Dispatchers.IO) {
      val apiKey = "YOUR_API_KEY_HERE"
      val url = URL("https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric")
      val connection = url.openConnection() as HttpURLConnection
      
      val response = connection.inputStream.bufferedReader().use { it.readText() }
      Json.decodeFromString(response)
  }
  
  fun main() = runBlocking {
      print("Enter city name: ")
      val city = readLine() ?: return@runBlocking
      
      try {
          val weatherData = fetchWeatherData(city)
          println("Current temperature: {weatherData.main.temp}°C")
          println("Weather conditions: {weatherData.weather.firstOrNull()?.description ?: "N/A"}")
      } catch (e: Exception) {
          println("Error fetching weather data: {e.message}")
      }
  }
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Simple Chat Application:</strong>
          <p>Implement a basic chat application using WebSockets. Create a server that broadcasts messages to all connected clients, and a client that can send and receive messages. Use the Ktor framework for both the server and client implementations.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  // Server (build.gradle.kts)
  dependencies {
      implementation("io.ktor:ktor-server-netty:1.6.0")
      implementation("io.ktor:ktor-websockets:1.6.0")
  }
  
  // Server (ChatServer.kt)
  import io.ktor.application.*
  import io.ktor.http.cio.websocket.*
  import io.ktor.routing.*
  import io.ktor.websocket.*
  import java.util.*
  
  fun main(args: Array&lt;String&gt;): Unit = io.ktor.server.netty.EngineMain.main(args)
  
  fun Application.module() {
      install(WebSockets)
      routing {
          val connections = Collections.synchronizedSet&lt;WebSocketSession&gt;(LinkedHashSet())
          webSocket("/chat") {
              connections += this
              try {
                  for (frame in incoming) {
                      frame as? Frame.Text ?: continue
                      val text = frame.readText()
                      connections.forEach {
                          it.send(Frame.Text(text))
                      }
                  }
              } finally {
                  connections -= this
              }
          }
      }
  }
  
  // Client (build.gradle.kts)
  dependencies {
      implementation("io.ktor:ktor-client-cio:1.6.0")
      implementation("io.ktor:ktor-client-websockets:1.6.0")
  }
  
  // Client (ChatClient.kt)
  import io.ktor.client.*
  import io.ktor.client.features.websocket.*
  import io.ktor.http.*
  import io.ktor.http.cio.websocket.*
  import kotlinx.coroutines.*
  
  fun main() = runBlocking {
      val client = HttpClient {
          install(WebSockets)
      }
      client.webSocket(method = HttpMethod.Get, host = "localhost", port = 8080, path = "/chat") {
          val messageOutputRoutine = launch { outputMessages() }
          val userInputRoutine = launch { inputMessages() }
  
          userInputRoutine.join()
          messageOutputRoutine.cancelAndJoin()
      }
      client.close()
      println("Connection closed. Goodbye!")
  }
  
  suspend fun DefaultClientWebSocketSession.outputMessages() {
      try {
          for (message in incoming) {
              message as? Frame.Text ?: continue
              println(message.readText())
          }
      } catch (e: Exception) {
          println("Error while receiving: " + e.message)
      }
  }
  
  suspend fun DefaultClientWebSocketSession.inputMessages() {
      while (true) {
          val message = readLine() ?: ""
          if (message.equals("exit", ignoreCase = true)) return
          try {
              send(message)
          } catch (e: Exception) {
              println("Error while sending: " + e.message)
              return
          }
      }
  }
            </code></pre>
          </details>
        </li>
      </ol>
  
      <p>These assignments will help you practice various aspects of networking in Kotlin, including making HTTP requests, parsing JSON, and working with WebSockets. Remember to handle exceptions and consider concurrency when dealing with network operations.</p>
    </section>`
  },
  {
    id: 'ktor',
    title: 'Ktor Framework',
    content: `<section id="ktor">
      <h2>Ktor Framework</h2>
  
      <p>Ktor is an asynchronous web framework for creating microservices and web applications. It's built from the ground up using Kotlin coroutines and provides an easy-to-use and flexible API.</p>
  
      <h3>1. Setting Up a Ktor Server</h3>
      
      <p> Setting up a Ktor server involves creating a basic application structure and defining routes for handling HTTP requests.</p>
  
      <h4>Example: Basic Ktor Server</h4>
      <pre><code class="language-kotlin">
      import io.ktor.application.*
      import io.ktor.response.*
      import io.ktor.routing.*
      import io.ktor.server.engine.*
      import io.ktor.server.netty.*
  
      fun main() {
          embeddedServer(Netty, port = 8080) {
              routing {
                  get("/") {
                      call.respondText("Hello, Ktor!")
                  }
              }
          }.start(wait = true)
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example sets up a basic Ktor server using the Netty engine. It defines a single route that responds with "Hello, Ktor!" when the root URL is accessed.</p>
  
      <h3>2. Routing in Ktor</h3>
  
      <p>Routing in Ktor allows you to define how your application responds to different HTTP methods and paths.</p>
  
      <h4>Example: Advanced Routing</h4>
      <pre><code class="language-kotlin">
      import io.ktor.application.*
      import io.ktor.response.*
      import io.ktor.routing.*
  
      fun Application.configureRouting() {
          routing {
              get("/") {
                  call.respondText("Welcome to the homepage!")
              }
              route("/users") {
                  get {
                      call.respondText("List of users")
                  }
                  get("/{id}") {
                      val id = call.parameters["id"]
                      call.respondText("User details for ID: $id")
                  }
                  post {
                      call.respondText("Creating a new user")
                  }
              }
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates more advanced routing, including nested routes and path parameters. It defines routes for listing users, getting user details by ID, and creating a new user.</p>
  
      <h3>3. Request Handling and Response Building</h3>
  
      <p> Ktor provides various ways to handle incoming requests and build appropriate responses.</p>
  
      <h4>Example: Handling Requests and Building Responses</h4>
      <pre><code class="language-kotlin">
      import io.ktor.application.*
      import io.ktor.request.*
      import io.ktor.response.*
      import io.ktor.routing.*
      import io.ktor.http.*
  
      fun Application.configureRequestHandling() {
          routing {
              get("/hello") {
                  val name = call.request.queryParameters["name"] ?: "World"
                  call.respondText("Hello, $name!")
              }
              post("/echo") {
                  val body = call.receiveText()
                  call.respond(HttpStatusCode.OK, "You said: $body")
              }
              get("/json") {
                  call.respond(mapOf("message" to "This is a JSON response"))
              }
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows different ways of handling requests and building responses. It demonstrates query parameter handling, receiving request body, and responding with different content types.</p>
  
      <h3>4. Content Negotiation</h3>
  
      <p>Content negotiation in Ktor allows your application to serve different representations of the same resource based on client preferences.</p>
  
      <h4>Example: Setting Up Content Negotiation</h4>
      <pre><code class="language-kotlin">
      import io.ktor.application.*
      import io.ktor.features.*
      import io.ktor.jackson.*
      import io.ktor.response.*
      import io.ktor.routing.*
  
      data class Person(val name: String, val age: Int)
  
      fun Application.configureContentNegotiation() {
          install(ContentNegotiation) {
              jackson()
          }
          
          routing {
              get("/person") {
                  val person = Person("John Doe", 30)
                  call.respond(person)
              }
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example sets up content negotiation using Jackson for JSON serialization. When the /person route is accessed, Ktor will automatically serialize the Person object to JSON.</p>
  
      <h3>5. Authentication</h3>
  
      <p> Ktor provides various authentication mechanisms to secure your application.</p>
  
      <h4>Example: Basic Authentication</h4>
      <pre><code class="language-kotlin">
      import io.ktor.application.*
      import io.ktor.auth.*
      import io.ktor.response.*
      import io.ktor.routing.*
  
      fun Application.configureAuth() {
          install(Authentication) {
              basic("myAuth") {
                  realm = "My App"
                  validate { credentials ->
                      if (credentials.name == "user" && credentials.password == "password") {
                          UserIdPrincipal(credentials.name)
                      } else {
                          null
                      }
                  }
              }
          }
          
          routing {
              authenticate("myAuth") {
                  get("/protected") {
                      val principal = call.principal&lt;UserIdPrincipal&gt;()
                      call.respondText("Hello, {principal?.name}!")
                  }
              }
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example sets up basic authentication. The /protected route is secured and only accessible with valid credentials. The validate function checks the provided credentials against hardcoded values (in a real application, you'd check against a database or other secure storage).</p>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice working with the Ktor Framework:</p>
  
      <ol>
        <li>
          <strong>RESTful API for a Todo List:</strong>
          <p>Create a simple RESTful API for a Todo List application using Ktor. Implement endpoints for listing all todos, getting a specific todo by ID, creating a new todo, updating an existing todo, and deleting a todo. Use in-memory storage for simplicity.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  import io.ktor.application.*
  import io.ktor.features.*
  import io.ktor.http.*
  import io.ktor.jackson.*
  import io.ktor.request.*
  import io.ktor.response.*
  import io.ktor.routing.*
  import io.ktor.server.engine.*
  import io.ktor.server.netty.*
  
  data class Todo(val id: Int, var title: String, var completed: Boolean = false)
  
  val todos = mutableListOf&lt;Todo&gt;()
  
  fun main() {
      embeddedServer(Netty, port = 8080) {
          install(ContentNegotiation) {
              jackson()
          }
          
          routing {
              route("/todos") {
                  get {
                      call.respond(todos)
                  }
                  get("/{id}") {
                      val id = call.parameters["id"]?.toIntOrNull()
                      if (id == null) {
                          call.respond(HttpStatusCode.BadRequest, "Invalid ID")
                      } else {
                          val todo = todos.find { it.id == id }
                          if (todo != null) {
                              call.respond(todo)
                          } else {
                              call.respond(HttpStatusCode.NotFound, "Todo not found")
                          }
                      }
                  }
                  post {
                      val todo = call.receive&lt;Todo&gt;()
                      todos.add(todo)
                      call.respond(HttpStatusCode.Created, todo)
                  }
                  put("/{id}") {
                      val id = call.parameters["id"]?.toIntOrNull()
                      if (id == null) {
                          call.respond(HttpStatusCode.BadRequest, "Invalid ID")
                      } else {
                          val updatedTodo = call.receive&lt;Todo&gt;()
                          val index = todos.indexOfFirst { it.id == id }
                          if (index != -1) {
                              todos[index] = updatedTodo.copy(id = id)
                              call.respond(todos[index])
                          } else {
                              call.respond(HttpStatusCode.NotFound, "Todo not found")
                          }
                      }
                  }
                  delete("/{id}") {
                      val id = call.parameters["id"]?.toIntOrNull()
                      if (id == null) {
                          call.respond(HttpStatusCode.BadRequest, "Invalid ID")
                      } else {
                          val removed = todos.removeIf { it.id == id }
                          if (removed) {
                              call.respond(HttpStatusCode.NoContent)
                          } else {
                              call.respond(HttpStatusCode.NotFound, "Todo not found")
                          }
                      }
                  }
              }
          }
      }.start(wait = true)
  }
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Authenticated File Upload and Download:</strong>
          <p>Implement a Ktor application that allows authenticated users to upload files and download them later. Use basic authentication and store the files on the server's file system. Implement endpoints for uploading a file, listing all uploaded files, and downloading a specific file.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  import io.ktor.application.*
  import io.ktor.auth.*
  import io.ktor.features.*
  import io.ktor.http.*
  import io.ktor.http.content.*
  import io.ktor.request.*
  import io.ktor.response.*
  import io.ktor.routing.*
  import io.ktor.server.engine.*
  import io.ktor.server.netty.*
  import java.io.File
  
  fun main() {
      val uploadDir = File("uploads").apply { mkdirs() }
  
      embeddedServer(Netty, port = 8080) {
          install(Authentication) {
              basic("auth-basic") {
                  realm = "Access to the upload system"
                  validate { credentials ->
                      if (credentials.name == "user" && credentials.password == "password") {
                          UserIdPrincipal(credentials.name)
                      } else null
                  }
              }
          }
  
          routing {
              authenticate("auth-basic") {
                  post("/upload") {
                      val multipart = call.receiveMultipart()
                      multipart.forEachPart { part ->
                          when (part) {
                              is PartData.FileItem -> {
                                  val fileName = part.originalFileName ?: return@forEachPart
                                  val file = File(uploadDir, fileName)
                                  part.streamProvider().use { input ->
                                      file.outputStream().buffered().use { output ->
                                          input.copyTo(output)
                                      }
                                  }
                                  call.respondText("File uploaded successfully: $fileName")
                              }
                              else -> {}
                          }
                          part.dispose()
                      }
                  }
  
                  get("/files") {
                      val files = uploadDir.listFiles()?.map { it.name } ?: emptyList()
                      call.respond(files)
                  }
  
                  get("/download/{fileName}") {
                      val fileName = call.parameters["fileName"] ?: return@get call.respond(HttpStatusCode.BadRequest)
                      val file = File(uploadDir, fileName)
                      if (file.exists()) {
                          call.respondFile(file)
                      } else {
                          call.respond(HttpStatusCode.NotFound, "File not found")
                      }
                  }
              }
          }
      }.start(wait = true)
  }
            </code></pre>
          </details>
        </li>
      </ol>
  
      <p>These assignments will help you practice various aspects of the Ktor framework, including routing, authentication, request handling, and file operations. Remember to handle exceptions and consider security implications when dealing with file uploads and downloads.</p>
    </section>`
  },
  {
    id: 'jetpack',
    title: 'Jetpack Compose',
    content: `<section id="jetpack">
      <h2>Jetpack Compose</h2>
  
      <p>Jetpack Compose is a modern toolkit for building native Android UI. It simplifies and accelerates UI development on Android with less code, powerful tools, and intuitive Kotlin APIs.</p>
  
      <h3>1. Basic UI Components</h3>
      
      <p> Jetpack Compose provides a set of ready-to-use UI components that form the building blocks of your app's user interface.</p>
  
      <h4>Example: Creating a Simple UI</h4>
      <pre><code class="language-kotlin">
      import androidx.compose.foundation.layout.Column
      import androidx.compose.material.Button
      import androidx.compose.material.Text
      import androidx.compose.runtime.Composable
  
      @Composable
      fun SimpleUI() {
          Column {
              Text("Welcome to Jetpack Compose!")
              Button(onClick = { /* Handle click */ }) {
                  Text("Click me")
              }
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates the creation of a simple UI using Jetpack Compose. It includes a Text component for displaying a message and a Button component with a click handler. The Column component is used to arrange these elements vertically.</p>
  
      <h3>2. State Management</h3>
  
      <p><strong>Definition:</strong> State management in Jetpack Compose involves handling and updating the data that affects the UI of your application.</p>
  
      <h4>Example: Using State in Compose</h4>
      <pre><code class="language-kotlin">
      import androidx.compose.foundation.layout.Column
      import androidx.compose.material.Button
      import androidx.compose.material.Text
      import androidx.compose.runtime.*
  
      @Composable
      fun CounterExample() {
          var count by remember { mutableStateOf(0) }
          
          Column {
              Text("Count: $count")
              Button(onClick = { count++ }) {
                  Text("Increment")
              }
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to use state in Compose. The count variable is declared using remember and mutableStateOf to create a mutable state that Compose will observe. When the button is clicked, the count is incremented, causing the UI to recompose and update.</p>
  
      <h3>3. Layouts and Arrangement</h3>
  
      <p>Jetpack Compose provides various layout components to arrange UI elements in different patterns.</p>
  
      <h4>Example: Complex Layout</h4>
      <pre><code class="language-kotlin">
      import androidx.compose.foundation.layout.*
      import androidx.compose.material.Card
      import androidx.compose.material.Text
      import androidx.compose.runtime.Composable
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.unit.dp
  
      @Composable
      fun ComplexLayout() {
          Row(modifier = Modifier.padding(16.dp)) {
              Card(
                  modifier = Modifier
                      .weight(1f)
                      .height(100.dp)
              ) {
                  Text("Card 1", modifier = Modifier.padding(16.dp))
              }
              Spacer(modifier = Modifier.width(16.dp))
              Card(
                  modifier = Modifier
                      .weight(1f)
                      .height(100.dp)
              ) {
                  Text("Card 2", modifier = Modifier.padding(16.dp))
              }
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates a more complex layout using Row, Card, and Spacer components. It creates two cards side by side with equal weight and a spacer between them. The Modifier is used to apply padding, set dimensions, and control the layout.</p>
  
      <h3>4. Lists and Grids</h3>
  
      <p>Jetpack Compose provides efficient ways to display lists and grids of items, which are common in many Android applications.</p>
  
      <h4>Example: LazyColumn for List Display</h4>
      <pre><code class="language-kotlin">
      import androidx.compose.foundation.lazy.LazyColumn
      import androidx.compose.foundation.lazy.items
      import androidx.compose.material.Text
      import androidx.compose.runtime.Composable
  
      @Composable
      fun SimpleList(items: List&lt;String&gt;) {
          LazyColumn {
              items(items) { item ->
                  Text(text = item, modifier = Modifier.padding(16.dp))
              }
          }
      }
  
      // Usage
      @Composable
      fun ListExample() {
          val listItems = List(100) { "Item {it + 1}" }
          SimpleList(listItems)
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to use LazyColumn to efficiently display a large list of items. LazyColumn only composes and lays out the items that are currently visible on the screen, making it performant for long lists.</p>
  
      <h3>5. Theming and Styling</h3>
  
      <p>Jetpack Compose allows you to apply consistent theming and styling across your application.</p>
  
      <h4>Example: Custom Theme</h4>
      <pre><code class="language-kotlin">
      import androidx.compose.foundation.isSystemInDarkTheme
      import androidx.compose.material.MaterialTheme
      import androidx.compose.material.darkColors
      import androidx.compose.material.lightColors
      import androidx.compose.runtime.Composable
  
      private val DarkColorPalette = darkColors(
          primary = Purple200,
          primaryVariant = Purple700,
          secondary = Teal200
      )
  
      private val LightColorPalette = lightColors(
          primary = Purple500,
          primaryVariant = Purple700,
          secondary = Teal200
      )
  
      @Composable
      fun MyAppTheme(darkTheme: Boolean = isSystemInDarkTheme(), content: @Composable () -> Unit) {
          val colors = if (darkTheme) {
              DarkColorPalette
          } else {
              LightColorPalette
          }
  
          MaterialTheme(
              colors = colors,
              typography = Typography,
              shapes = Shapes,
              content = content
          )
      }
  
      // Usage
      @Composable
      fun MyApp() {
          MyAppTheme {
              // Your app content here
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates how to create a custom theme in Jetpack Compose. It defines color palettes for light and dark themes and uses MaterialTheme to apply the theme to the entire application. The isSystemInDarkTheme() function is used to detect the system's current theme.</p>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice working with Jetpack Compose:</p>
  
      <ol>
        <li>
          <strong>Todo List App:</strong>
          <p>Create a simple Todo List app using Jetpack Compose. The app should allow users to add new tasks, mark tasks as completed, and delete tasks. Use state management to handle the list of tasks and their completion status.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  import androidx.compose.foundation.layout.*
  import androidx.compose.foundation.lazy.LazyColumn
  import androidx.compose.foundation.lazy.items
  import androidx.compose.material.*
  import androidx.compose.material.icons.Icons
  import androidx.compose.material.icons.filled.Add
  import androidx.compose.material.icons.filled.Delete
  import androidx.compose.runtime.*
  import androidx.compose.ui.Alignment
  import androidx.compose.ui.Modifier
  import androidx.compose.ui.unit.dp
  
  data class TodoItem(val id: Int, val text: String, var isCompleted: Boolean)
  
  @Composable
  fun TodoApp() {
      var tasks by remember { mutableStateOf(listOf&lt;TodoItem&gt;()) }
      var newTaskText by remember { mutableStateOf("") }
  
      Column {
          // Input for new task
          Row(modifier = Modifier.padding(16.dp)) {
              TextField(
                  value = newTaskText,
                  onValueChange = { newTaskText = it },
                  modifier = Modifier.weight(1f)
              )
              Spacer(modifier = Modifier.width(16.dp))
              Button(onClick = {
                  if (newTaskText.isNotBlank()) {
                      tasks = tasks + TodoItem(tasks.size, newTaskText, false)
                      newTaskText = ""
                  }
              }) {
                  Icon(Icons.Default.Add, contentDescription = "Add")
              }
          }
  
          // List of tasks
          LazyColumn {
              items(tasks) { task ->
                  Row(
                      modifier = Modifier
                          .fillMaxWidth()
                          .padding(16.dp),
                      verticalAlignment = Alignment.CenterVertically
                  ) {
                      Checkbox(
                          checked = task.isCompleted,
                          onCheckedChange = { isChecked ->
                              tasks = tasks.map { if (it.id == task.id) it.copy(isCompleted = isChecked) else it }
                          }
                      )
                      Text(
                          text = task.text,
                          modifier = Modifier.weight(1f),
                          style = if (task.isCompleted) MaterialTheme.typography.body1.copy(textDecoration = TextDecoration.LineThrough)
                                 else MaterialTheme.typography.body1
                      )
                      IconButton(onClick = {
                          tasks = tasks.filter { it.id != task.id }
                      }) {
                          Icon(Icons.Default.Delete, contentDescription = "Delete")
                      }
                  }
              }
          }
      }
  }
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Weather App UI:</strong>
          <p>Design a UI for a weather app using Jetpack Compose. The app should display the current weather conditions, temperature, and a 5-day forecast. Use custom theming to style the app and implement a toggle for switching between light and dark themes.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
  import androidx.compose.foundation.isSystemInDarkTheme
  import androidx.compose.foundation.layout.*
  import androidx.compose.foundation.lazy.LazyRow
  import androidx.compose.foundation.lazy.items
  import androidx.compose.material.*
  import androidx.compose.material.icons.Icons
  import androidx.compose.material.icons.filled.WbSunny
  import androidx.compose.runtime.*
  import androidx.compose.ui.Alignment
  import androidx.compose.ui.Modifier
  import androidx.compose.ui.graphics.Color
  import androidx.compose.ui.unit.dp
  
  // Define color palettes
  private val DarkColorPalette = darkColors(
      primary = Color(0xFF1976D2),
      primaryVariant = Color(0xFF004BA0),
      secondary = Color(0xFFFFD600)
  )
  
  private val LightColorPalette = lightColors(
      primary = Color(0xFF2196F3),
      primaryVariant = Color(0xFF0069C0),
      secondary = Color(0xFFFFD600)
  )
  
  @Composable
  fun WeatherAppTheme(darkTheme: Boolean = isSystemInDarkTheme(), content: @Composable () -> Unit) {
      val colors = if (darkTheme) DarkColorPalette else LightColorPalette
  
      MaterialTheme(
          colors = colors,
          content = content
      )
  }
  
  data class WeatherForecast(val day: String, val temperature: Int, val condition: String)
  
  @Composable
  fun WeatherApp() {
      var isDarkTheme by remember { mutableStateOf(false) }
  
      WeatherAppTheme(darkTheme = isDarkTheme) {
          Scaffold(
              topBar = {
                  TopAppBar(
                      title = { Text("Weather App") },
                      actions = {
                          Switch(
                              checked = isDarkTheme,
                              onCheckedChange = { isDarkTheme = it }
                          )
                      }
                  )
              }
          ) {
              Column(modifier = Modifier.padding(16.dp)) {
                  CurrentWeather()
                  Spacer(modifier = Modifier.height(16.dp))
                  ForecastList()
              }
          }
      }
  }
  
  @Composable
  fun CurrentWeather() {
      Card(
          modifier = Modifier.fillMaxWidth(),
          elevation = 4.dp
      ) {
          Column(
              modifier = Modifier.padding(16.dp),
              horizontalAlignment = Alignment.CenterHorizontally
          ) {
              Icon(Icons.Default.WbSunny, contentDescription = "Sunny", modifier = Modifier.size(64.dp))
              Spacer(modifier = Modifier.height(16.dp))
              Text("Sunny", style = MaterialTheme.typography.h5)
              Text("25°C", style = MaterialTheme.typography.h3)
          }
      }
  }
  
  @Composable
  fun ForecastList() {
      val forecasts = listOf(
          WeatherForecast("Mon", 24, "Sunny"),
          WeatherForecast("Tue", 22, "Cloudy"),
          WeatherForecast("Wed", 20, "Rainy"),
          WeatherForecast("Thu", 23, "Partly Cloudy"),
          WeatherForecast("Fri", 25, "Sunny")
      )
  
      LazyRow {
          items(forecasts) { forecast ->
              ForecastItem(forecast)
          }
      }
  }
  
  @Composable
  fun ForecastItem(forecast: WeatherForecast) {
      Card(
          modifier = Modifier
              .padding(end = 16.dp)
              .width(100.dp),
          elevation = 2.dp
      ) {
          Column(
              modifier = Modifier.padding(8.dp),
              horizontalAlignment = Alignment.CenterHorizontally
          ) {
              Text(forecast.day, style = MaterialTheme.typography.subtitle1)
              Spacer(modifier = Modifier.height(8.dp))
              Text("{forecast.temperature}°C", style = MaterialTheme.typography.h6)
              Text(forecast.condition, style = MaterialTheme.typography.caption)
          }
      }
  }
            </code></pre>
          </details>
        </li>
      </ol>
  
      <p>These assignments will help you practice various aspects of Jetpack Compose, including state management, custom layouts, theming, and creating reusable composable functions. Remember to consider user experience and performance when implementing these UIs.</p>
    </section>`
  },
  {
    id: 'android',
    title: 'Android Development with Kotlin',
    content: `<section id="android">
      <h2>Android Development with Kotlin</h2>
  
      <p>Android development with Kotlin combines the power of the Android platform with the conciseness and expressiveness of the Kotlin programming language. Kotlin is fully interoperable with Java and brings modern programming features to Android development.</p>
  
      <h3>1. Activity and Lifecycle</h3>
      
      <p> An Activity in Android represents a single screen with a user interface. Understanding the Activity lifecycle is crucial for managing app behavior during different states.</p>
  
      <h4>Example: Basic Activity in Kotlin</h4>
      <pre><code class="language-kotlin">
      import android.os.Bundle
      import androidx.appcompat.app.AppCompatActivity
      import android.widget.TextView
  
      class MainActivity : AppCompatActivity() {
          override fun onCreate(savedInstanceState: Bundle?) {
              super.onCreate(savedInstanceState)
              setContentView(R.layout.activity_main)
  
              findViewById&lt;TextView&gt;(R.id.helloText).text = "Hello, Kotlin!"
          }
  
          override fun onStart() {
              super.onStart()
              // Activity is about to become visible
          }
  
          override fun onResume() {
              super.onResume()
              // Activity has become visible
          }
  
          override fun onPause() {
              super.onPause()
              // Another activity is taking focus
          }
  
          override fun onStop() {
              super.onStop()
              // Activity is no longer visible
          }
  
          override fun onDestroy() {
              super.onDestroy()
              // Activity is being destroyed
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates a basic Android Activity written in Kotlin. It overrides key lifecycle methods to handle different states of the Activity. The onCreate method is where you typically initialize your UI components.</p>
  
      <h3>2. Views and Layouts</h3>
  
      <p>Views are the basic building blocks of user interface components in Android. Layouts are containers that determine the arrangement of views on the screen.</p>
  
      <h4>Example: Creating a Layout Programmatically</h4>
      <pre><code class="language-kotlin">
      import android.os.Bundle
      import android.widget.Button
      import android.widget.LinearLayout
      import androidx.appcompat.app.AppCompatActivity
  
      class ProgrammaticLayoutActivity : AppCompatActivity() {
          override fun onCreate(savedInstanceState: Bundle?) {
              super.onCreate(savedInstanceState)
  
              val layout = LinearLayout(this).apply {
                  orientation = LinearLayout.VERTICAL
              }
  
              val button = Button(this).apply {
                  text = "Click me!"
                  setOnClickListener { 
                      // Handle click event
                  }
              }
  
              layout.addView(button)
              setContentView(layout)
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to create a simple layout programmatically in Kotlin. It creates a LinearLayout and adds a Button to it. The apply function is used for concise configuration of the views.</p>
  
      <h3>3. Intents and Navigation</h3>
  
      <p>Intents are messaging objects used to request an action from another app component. They are fundamental for navigation between activities and for starting services.</p>
  
      <h4>Example: Using Intents for Navigation</h4>
      <pre><code class="language-kotlin">
      import android.content.Intent
      import android.os.Bundle
      import android.widget.Button
      import androidx.appcompat.app.AppCompatActivity
  
      class MainActivity : AppCompatActivity() {
          override fun onCreate(savedInstanceState: Bundle?) {
              super.onCreate(savedInstanceState)
              setContentView(R.layout.activity_main)
  
              findViewById&lt;Button&gt;(R.id.navigateButton).setOnClickListener {
                  val intent = Intent(this, SecondActivity::class.java).apply {
                      putExtra("KEY_MESSAGE", "Hello from MainActivity!")
                  }
                  startActivity(intent)
              }
          }
      }
  
      class SecondActivity : AppCompatActivity() {
          override fun onCreate(savedInstanceState: Bundle?) {
              super.onCreate(savedInstanceState)
              setContentView(R.layout.activity_second)
  
              val message = intent.getStringExtra("KEY_MESSAGE")
              // Use the message...
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates how to use Intents to navigate between activities and pass data. In MainActivity, a button click creates an Intent to start SecondActivity, passing a message. SecondActivity then retrieves this message from the Intent.</p>
  
      <h3>4. RecyclerView</h3>
  
      <p> RecyclerView is a flexible view for providing a limited window into a large data set. It's commonly used for displaying lists and grids efficiently.</p>
  
      <h4>Example: Implementing a RecyclerView</h4>
      <pre><code class="language-kotlin">
      import android.os.Bundle
      import android.view.LayoutInflater
      import android.view.View
      import android.view.ViewGroup
      import android.widget.TextView
      import androidx.appcompat.app.AppCompatActivity
      import androidx.recyclerview.widget.LinearLayoutManager
      import androidx.recyclerview.widget.RecyclerView
  
      class RecyclerViewActivity : AppCompatActivity() {
          override fun onCreate(savedInstanceState: Bundle?) {
              super.onCreate(savedInstanceState)
              setContentView(R.layout.activity_recycler_view)
  
              val recyclerView = findViewById&lt;RecyclerView&gt;(R.id.recyclerView)
              recyclerView.layoutManager = LinearLayoutManager(this)
              recyclerView.adapter = MyAdapter(List(20) { "Item $it" })
          }
      }
  
      class MyAdapter(private val data: List&lt;String&gt;) : 
          RecyclerView.Adapter&lt;MyAdapter.MyViewHolder&gt;() {
  
          class MyViewHolder(view: View) : RecyclerView.ViewHolder(view) {
              val textView: TextView = view.findViewById(R.id.itemTextView)
          }
  
          override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
              val view = LayoutInflater.from(parent.context)
                  .inflate(R.layout.recycler_item, parent, false)
              return MyViewHolder(view)
          }
  
          override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
              holder.textView.text = data[position]
          }
  
          override fun getItemCount() = data.size
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example shows how to implement a RecyclerView in Kotlin. It includes a custom adapter (MyAdapter) that manages the data and creates ViewHolders. The RecyclerView is set up in the activity with a LinearLayoutManager and the custom adapter.</p>
  
      <h3>5. Coroutines in Android</h3>
  
      <p>Coroutines provide a way to write asynchronous, non-blocking code in a sequential manner. They are particularly useful in Android for managing background tasks and network operations.</p>
  
      <h4>Example: Using Coroutines for Network Request</h4>
      <pre><code class="language-kotlin">
      import androidx.appcompat.app.AppCompatActivity
      import android.os.Bundle
      import android.widget.TextView
      import kotlinx.coroutines.*
      import java.net.URL
  
      class CoroutineActivity : AppCompatActivity() {
          override fun onCreate(savedInstanceState: Bundle?) {
              super.onCreate(savedInstanceState)
              setContentView(R.layout.activity_coroutine)
  
              val textView = findViewById&lt;TextView&gt;(R.id.resultTextView)
  
              CoroutineScope(Dispatchers.Main).launch {
                  val result = withContext(Dispatchers.IO) {
                      fetchDataFromNetwork()
                  }
                  textView.text = result
              }
          }
  
          private suspend fun fetchDataFromNetwork(): String {
              return URL("https://api.example.com/data").readText()
          }
      }
      </code></pre>
  
      <p><strong>Explanation:</strong> This example demonstrates how to use coroutines in an Android activity to perform a network request. The network operation is performed on the IO dispatcher to avoid blocking the main thread, and the result is then displayed on the UI using the Main dispatcher.</p>
  
      <h3>Assignments</h3>
      <p>Complete the following assignments to practice Android development with Kotlin:</p>
  
      <ol>
        <li>
          <strong>Contact List App:</strong>
          <p>Create an Android app that displays a list of contacts using RecyclerView. Each item should show the contact's name and phone number. Implement a feature to add new contacts and delete existing ones. Use Kotlin and follow Android best practices.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code class="language-kotlin">
      // MainActivity.kt
      import android.os.Bundle
      import android.widget.Button
      import android.widget.EditText
      import androidx.appcompat.app.AppCompatActivity
      import androidx.recyclerview.widget.LinearLayoutManager
      import androidx.recyclerview.widget.RecyclerView
  
      data class Contact(val name: String, val phone: String)
  
      class MainActivity : AppCompatActivity() {
          private lateinit var adapter: ContactAdapter
          private val contacts = mutableListOf&lt;Contact&gt;()
  
          override fun onCreate(savedInstanceState: Bundle?) {
              super.onCreate(savedInstanceState)
              setContentView(R.layout.activity_main)
  
              val recyclerView = findViewById&lt;RecyclerView&gt;(R.id.recyclerView)
              adapter = ContactAdapter(contacts) { position -> deleteContact(position) }
              recyclerView.adapter = adapter
              recyclerView.layoutManager = LinearLayoutManager(this)
  
              val nameEditText = findViewById&lt;EditText&gt;(R.id.nameEditText)
              val phoneEditText = findViewById&lt;EditText&gt;(R.id.phoneEditText)
              val addButton = findViewById&lt;Button&gt;(R.id.addButton)
  
              addButton.setOnClickListener {
                  val name = nameEditText.text.toString()
                  val phone = phoneEditText.text.toString()
                  if (name.isNotEmpty() && phone.isNotEmpty()) {
                      addContact(Contact(name, phone))
                      nameEditText.text.clear()
                      phoneEditText.text.clear()
                  }
              }
          }
  
          private fun addContact(contact: Contact) {
              contacts.add(contact)
              adapter.notifyItemInserted(contacts.size - 1)
          }
  
          private fun deleteContact(position: Int) {
              contacts.removeAt(position)
              adapter.notifyItemRemoved(position)
          }
      }
  
      // ContactAdapter.kt
      import android.view.LayoutInflater
      import android.view.View
      import android.view.ViewGroup
      import android.widget.TextView
      import androidx.recyclerview.widget.RecyclerView
  
      class ContactAdapter(
          private val contacts: List&lt;Contact&gt;,
          private val onDeleteClick: (Int) -> Unit
      ) : RecyclerView.Adapter&lt;ContactAdapter.ViewHolder&gt;() {
  
          class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
              val nameTextView: TextView = view.findViewById(R.id.nameTextView)
              val phoneTextView: TextView = view.findViewById(R.id.phoneTextView)
              val deleteButton: View = view.findViewById(R.id.deleteButton)
          }
  
          override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
              val view = LayoutInflater.from(parent.context)
                  .inflate(R.layout.contact_item, parent, false)
              return ViewHolder(view)
          }
  
          override fun onBindViewHolder(holder: ViewHolder, position: Int) {
              val contact = contacts[position]
              holder.nameTextView.text = contact.name
              holder.phoneTextView.text = contact.phone
              holder.deleteButton.setOnClickListener { onDeleteClick(position) }
          }
  
          override fun getItemCount() = contacts.size
      }
  
      // activity_main.xml
      &lt;LinearLayout
          xmlns:android="http://schemas.android.com/apk/res/android"
          android:layout_width="match_parent"
          android:layout_height="match_parent"
          android:orientation="vertical"
          android:padding="16dp"&gt;
  
          &lt;EditText
              android:id="@+id/nameEditText"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:hint="Name"/&gt;
  
          &lt;EditText
              android:id="@+id/phoneEditText"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:hint="Phone"/&gt;
  
          &lt;Button
              android:id="@+id/addButton"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:text="Add Contact"/&gt;
  
          &lt;androidx.recyclerview.widget.RecyclerView
              android:id="@+id/recyclerView"
              android:layout_width="match_parent"
              android:layout_height="0dp"
              android:layout_weight="1"/&gt;
  
      &lt;/LinearLayout&gt;
  
      // contact_item.xml
      &lt;LinearLayout
          xmlns:android="http://schemas.android.com/apk/res/android"
          android:layout_width="match_parent"
          android:layout_height="wrap_content"
          android:orientation="horizontal"
          android:padding="8dp"&gt;
  
          &lt;LinearLayout
              android:layout_width="0dp"
              android:layout_height="wrap_content"
              android:layout_weight="1"
              android:orientation="vertical"&gt;
  
              &lt;TextView
                  android:id="@+id/nameTextView"
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:textStyle="bold"/&gt;
  
              &lt;TextView
                  android:id="@+id/phoneTextView"
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"/&gt;
  
          &lt;/LinearLayout&gt;
  
          &lt;Button
              android:id="@+id/deleteButton"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:text="Delete"/&gt;
  
      &lt;/LinearLayout&gt;
            </code></pre>
          </details>
        </li>
        <li>
          <strong>Weather App with API Integration:</strong>
          <p>Develop a Weather App that fetches data from a weather API (e.g., OpenWeatherMap). The app should allow users to search for a city and display current weather conditions including temperature, humidity, and weather description. Use Kotlin Coroutines for network operations and implement proper error handling.</p>
          <details>
            <summary>Click for solution</summary>
            <pre><code>
      // MainActivity.kt
      import android.os.Bundle
      import android.widget.Button
      import android.widget.EditText
      import android.widget.TextView
      import androidx.appcompat.app.AppCompatActivity
      import kotlinx.coroutines.*
      import org.json.JSONObject
      import java.net.URL
  
      class MainActivity : AppCompatActivity
      // MainActivity.kt
    import android.os.Bundle
    import android.widget.Button
    import android.widget.EditText
    import android.widget.TextView
    import androidx.appcompat.app.AppCompatActivity
    import kotlinx.coroutines.*
    import org.json.JSONObject
    import java.net.URL

    class MainActivity : AppCompatActivity() {
        private lateinit var searchEditText: EditText
        private lateinit var searchButton: Button
        private lateinit var resultTextView: TextView

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.activity_main)

            searchEditText = findViewById(R.id.searchEditText)
            searchButton = findViewById(R.id.searchButton)
            resultTextView = findViewById(R.id.resultTextView)

            searchButton.setOnClickListener {
                val city = searchEditText.text.toString()
                if (city.isNotEmpty()) {
                    fetchWeatherData(city)
                }
            }
        }

        private fun fetchWeatherData(city: String) {
            CoroutineScope(Dispatchers.Main).launch {
                try {
                    val result = withContext(Dispatchers.IO) {
                        fetchWeather(city)
                    }
                    displayWeatherData(result)
                } catch (e: Exception) {
                    resultTextView.text = "Error: {e.message}"
                }
            }
        }

        private suspend fun fetchWeather(city: String): JSONObject {
            val apiKey = "YOUR_API_KEY_HERE"
            val url = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric"
            val response = URL(url).readText()
            return JSONObject(response)
        }

        private fun displayWeatherData(weatherData: JSONObject) {
            val main = weatherData.getJSONObject("main")
            val weather = weatherData.getJSONArray("weather").getJSONObject(0)

            val temp = main.getDouble("temp")
            val humidity = main.getInt("humidity")
            val description = weather.getString("description")

            val resultText = """
                Temperature: $temp°C
                Humidity: $humidity%
                Description: $description
            """.trimIndent()

            resultTextView.text = resultText
        }
    }

    // activity_main.xml
    &lt;?xml version="1.0" encoding="utf-8"?&gt;
    &lt;LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical"
        android:padding="16dp"&gt;

        &lt;EditText
            android:id="@+id/searchEditText"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:hint="Enter city name" /&gt;

        &lt;Button
            android:id="@+id/searchButton"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Search" /&gt;

        &lt;TextView
            android:id="@+id/resultTextView"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="16dp" /&gt;

    &lt;/LinearLayout&gt;
    </pre></code>
    </li>
    </ol>
    <p>These assignments will help you practice various aspects of Jetpack Compose, including state management, custom layouts, theming, and creating reusable composable functions. Remember to consider user experience and performance when implementing these UIs.</p>
    </section>`
},
{
    id: 'spring',
    title: 'Spring Boot with Kotlin',
    content: `
      <section id='spring'>
        <h2>Spring Boot with Kotlin</h2>
  
        <h3>Introduction</h3>
        <p>Spring Boot is a framework designed to simplify the creation of stand-alone, production-grade Spring-based applications. It takes an opinionated view of the Spring platform and third-party libraries, which makes it easy to get started with minimum fuss. Kotlin is a statically typed programming language that is fully interoperable with Java and is designed to improve developer productivity by providing a more concise syntax, null safety, and powerful features like extension functions.</p>
  
        <h3>Why Use Kotlin with Spring Boot?</h3>
        <ul>
          <li><strong>Concise Syntax:</strong> Kotlin's syntax is more concise and expressive than Java, which can lead to fewer lines of code and improved readability.</li>
          <li><strong>Null Safety:</strong> Kotlin includes null safety as a core feature, reducing the risk of null pointer exceptions.</li>
          <li><strong>Interoperability:</strong> Kotlin is fully interoperable with Java, allowing you to use existing Java libraries and frameworks seamlessly.</li>
          <li><strong>Extension Functions:</strong> Kotlin allows you to extend existing classes with new functionality without modifying their code.</li>
        </ul>
  
        <h3>Setting Up Your Environment</h3>
        <p>To get started with Spring Boot and Kotlin, follow these steps:</p>
        <ol>
          <li><strong>Install JDK:</strong> Download and install the Java Development Kit (JDK) from the official Oracle website or use OpenJDK.</li>
          <li><strong>Install an IDE:</strong> Use IntelliJ IDEA, which has excellent support for both Spring Boot and Kotlin.</li>
          <li><strong>Create a Spring Boot Project:</strong> You can create a new Spring Boot project using <a href="https://start.spring.io">Spring Initializr</a>. Select Kotlin as the language and add the necessary dependencies.</li>
        </ol>
  
        <h3>Creating a Basic Spring Boot Application</h3>
        <p>Let's start by creating a simple Spring Boot application in Kotlin that responds with "Hello, World!" when accessed at the root URL.</p>
        <pre><code class="language-kotlin">
        import org.springframework.boot.autoconfigure.SpringBootApplication
        import org.springframework.boot.runApplication
        import org.springframework.web.bind.annotation.GetMapping
        import org.springframework.web.bind.annotation.RestController
  
        @SpringBootApplication
        class DemoApplication
  
        fun main(args: Array<String>) {
            runApplication<DemoApplication>(*args)
        }
  
        @RestController
        class HelloController {
            @GetMapping("/")
            fun hello() = "Hello, World!"
        }
        </code></pre>
  
        <h3>Understanding the Code</h3>
        <p>In the example above:</p>
        <ul>
          <li><code>@SpringBootApplication</code>: This annotation marks the main class of a Spring Boot application.</li>
          <li><code>runApplication&lt;DemoApplication&gt;(*args)</code>: This function launches the Spring Boot application.</li>
          <li><code>@RestController</code>: This annotation indicates that the class will handle HTTP requests.</li>
          <li><code>@GetMapping("/)</code>: This annotation maps HTTP GET requests to the <code>hello</code> method, which returns a "Hello, World!" message.</li>
        </ul>
  
        <h3>Assignment 1: Create a New Endpoint</h3>
        <p>Create a new Spring Boot project with Kotlin and add a new endpoint that returns your name.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        import org.springframework.boot.autoconfigure.SpringBootApplication
        import org.springframework.boot.runApplication
        import org.springframework.web.bind.annotation.GetMapping
        import org.springframework.web.bind.annotation.RestController
  
        @SpringBootApplication
        class DemoApplication
  
        fun main(args: Array<String>) {
            runApplication<DemoApplication>(*args)
        }
  
        @RestController
        class HelloController {
            @GetMapping("/")
            fun hello() = "Hello, World!"
  
            @GetMapping("/name")
            fun name() = "Your Name"
        }
        </code></pre>
  
        <h3>Explanation:</h3>
        <p>In this solution, we added a new endpoint <code>/name</code> to the <code>HelloController</code> class. This endpoint responds with a static string "Your Name". You can replace "Your Name" with your actual name.</p>
  
        <h3>Assignment 2: Handle POST Request</h3>
        <p>Extend the application to handle a POST request that accepts a JSON object and returns a greeting message.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        import org.springframework.boot.autoconfigure.SpringBootApplication
        import org.springframework.boot.runApplication
        import org.springframework.web.bind.annotation.*
  
        @SpringBootApplication
        class DemoApplication
  
        fun main(args: Array<String>) {
            runApplication<DemoApplication>(*args)
        }
  
        data class GreetingRequest(val name: String)
  
        @RestController
        class HelloController {
            @GetMapping("/")
            fun hello() = "Hello, World!"
  
            @GetMapping("/name")
            fun name() = "Your Name"
  
            @PostMapping("/greet")
            fun greet(@RequestBody request: GreetingRequest) = "Hello, \${request.name}!"
        }
        </code></pre>
  
        <h3>Explanation:</h3>
        <p>In this solution, we created a new data class <code>GreetingRequest</code> that represents the JSON object expected in the POST request. The <code>greet</code> method in the <code>HelloController</code> class handles the POST request, reads the <code>name</code> from the request body, and returns a greeting message.</p>
  
        <h3>Assignment 3: Implement Error Handling</h3>
        <p>Implement error handling for invalid inputs in your application.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        import org.springframework.boot.autoconfigure.SpringBootApplication
        import org.springframework.boot.runApplication
        import org.springframework.http.HttpStatus
        import org.springframework.web.bind.annotation.*
  
        @SpringBootApplication
        class DemoApplication
  
        fun main(args: Array<String>) {
            runApplication<DemoApplication>(*args)
        }
  
        data class GreetingRequest(val name: String)
  
        @RestController
        class HelloController {
            @GetMapping("/")
            fun hello() = "Hello, World!"
  
            @GetMapping("/name")
            fun name() = "Your Name"
  
            @PostMapping("/greet")
            fun greet(@RequestBody request: GreetingRequest): String {
                if (request.name.isBlank()) {
                    throw InvalidInputException("Name cannot be blank")
                }
                return "Hello, \${request.name}!"
            }
        }
  
        @ResponseStatus(HttpStatus.BAD_REQUEST)
        class InvalidInputException(message: String) : RuntimeException(message)
  
        @ControllerAdvice
        class GlobalExceptionHandler {
            @ExceptionHandler(InvalidInputException::class)
            @ResponseBody
            fun handleInvalidInput(ex: InvalidInputException): Map<String, String> {
                return mapOf("error" to ex.message)
            }
        }
        </code></pre>
  
        <h3>Explanation:</h3>
        <p>In this solution, we created a custom exception class <code>InvalidInputException</code> that is thrown when the name is blank. The <code>GlobalExceptionHandler</code> class handles this exception and returns a JSON response with an error message.</p>
  
        <h3>Further Reading</h3>
        <p>To learn more about Spring Boot and Kotlin, check out the following resources:</p>
        <ul>
          <li><a href="https://spring.io/projects/spring-boot">Spring Boot Documentation</a></li>
          <li><a href="https://kotlinlang.org/docs/home.html">Kotlin Documentation</a></li>
          <li><a href="https://spring.io/guides/tutorials/spring-boot-kotlin/">Spring Boot Kotlin Tutorial</a></li>
        </ul>
      </section>
    `
  },
  {
    id: 'routines',
    title: 'Kotlin Coroutines',
    content: `
      <section id="routines">
        <h2>Kotlin Coroutines</h2>
  
        <h3>Introduction</h3>
        <p>Kotlin Coroutines provide a way to write asynchronous code that is both simple and efficient. They allow you to perform long-running tasks, such as network or database operations, without blocking the main thread. Coroutines are lightweight and can be thought of as a more efficient alternative to threads.</p>
  
        <h3>Why Use Coroutines?</h3>
        <ul>
          <li><strong>Lightweight:</strong> Coroutines are much lighter than threads and can be run efficiently.</li>
          <li><strong>Structured Concurrency:</strong> Coroutines provide structured concurrency, making it easier to manage and reason about concurrent operations.</li>
          <li><strong>Readable Code:</strong> Coroutines allow you to write asynchronous code in a sequential style, making it more readable and maintainable.</li>
        </ul>
  
        <h3>Setting Up Coroutines</h3>
        <p>To use coroutines in your Kotlin project, you need to add the following dependencies to your build file:</p>
        <pre><code class="language-kotlin">
        dependencies {
            implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.5.0")
            implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.5.0")
        }
        </code></pre>
  
        <h3>Basic Coroutine Example</h3>
        <p>Here is a simple example of using coroutines to perform a task asynchronously:</p>
        <pre><code class="language-kotlin">
        import kotlinx.coroutines.*
  
        fun main() = runBlocking {
            launch {
                delay(1000L)
                println("Hello,")
            }
            println("World!")
        }
        </code></pre>
        <p>In this example:</p>
        <ul>
          <li><code>runBlocking</code>: Starts a new coroutine and blocks the current thread until its completion.</li>
          <li><code>launch</code>: Launches a new coroutine without blocking the current thread.</li>
          <li><code>delay</code>: Suspends the coroutine for a specific time without blocking the thread.</li>
        </ul>
  
        <h3>Assignment 1: Using Coroutines</h3>
        <p>Create a coroutine that performs a long-running task (e.g., fetching data from a network) and prints a message before and after the task.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        import kotlinx.coroutines.*
  
        fun main() = runBlocking {
            println("Fetching data...")
            launch {
                fetchData()
            }
        }
  
        suspend fun fetchData() {
            delay(2000L) // Simulate long-running task
            println("Data fetched!")
        }
        </code></pre>
  
        <h3>Assignment 2: Structured Concurrency</h3>
        <p>Modify the above example to use structured concurrency with <code>coroutineScope</code> to ensure all child coroutines complete before the main coroutine finishes.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        import kotlinx.coroutines.*
  
        fun main() = runBlocking {
            println("Fetching data...")
            coroutineScope {
                launch {
                    fetchData()
                }
            }
            println("All tasks completed.")
        }
  
        suspend fun fetchData() {
            delay(2000L) // Simulate long-running task
            println("Data fetched!")
        }
        </code></pre>
  
        <h3>Assignment 3: Handling Exceptions</h3>
        <p>Extend the example to handle exceptions within coroutines using <code>try-catch</code> and the <code>supervisorScope</code>.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        import kotlinx.coroutines.*
  
        fun main() = runBlocking {
            println("Fetching data...")
            supervisorScope {
                launch {
                    try {
                        fetchData()
                    } catch (e: Exception) {
                        println("Error: \${e.message}")
                    }
                }
            }
            println("All tasks completed.")
        }
  
        suspend fun fetchData() {
            delay(2000L) // Simulate long-running task
            throw Exception("Network error")
        }
        </code></pre>
  
        <h3>Further Reading</h3>
        <p>To learn more about Kotlin Coroutines, check out the following resources:</p>
        <ul>
          <li><a href="https://kotlinlang.org/docs/coroutines-overview.html">Kotlin Coroutines Documentation</a></li>
          <li><a href="https://kotlinlang.org/docs/coroutines-guide.html">Kotlin Coroutines Guide</a></li>
          <li><a href="https://developer.android.com/kotlin/coroutines">Using Kotlin Coroutines in Android</a></li>
        </ul>
      </section>
    `
  },
  
  {
    id: 'library',
    title: 'Kotlin Standard Library',
    content: `
      <section id="library">
        <h2>Kotlin Standard Library</h2>
  
        <h3>Introduction</h3>
        <p>The Kotlin Standard Library provides a comprehensive suite of tools and utilities that enhance Kotlin's capabilities and streamline development. It includes functions for collections, I/O, text processing, and much more. Understanding and utilizing the Kotlin Standard Library can significantly improve your coding efficiency and effectiveness.</p>
  
        <h3>Why Use the Kotlin Standard Library?</h3>
        <ul>
          <li><strong>Rich Functionality:</strong> Offers a wide range of functions and utilities for various tasks.</li>
          <li><strong>Consistency:</strong> Ensures consistency in your code by using standardized methods.</li>
          <li><strong>Interoperability:</strong> Seamlessly integrates with Java libraries.</li>
          <li><strong>Performance:</strong> Optimized for performance to handle common programming tasks efficiently.</li>
        </ul>
  
        <h3>Commonly Used Functions</h3>
        <p>Here are some commonly used functions and features in the Kotlin Standard Library:</p>
        
        <h4>1. Collections</h4>
        <p>Kotlin provides robust support for collections such as lists, sets, and maps.</p>
        <pre><code class="language-kotlin">
        fun main() {
            val numbers = listOf(1, 2, 3, 4, 5)
            val doubled = numbers.map { it * 2 }
            println(doubled) // Output: [2, 4, 6, 8, 10]
  
            val filtered = numbers.filter { it % 2 == 0 }
            println(filtered) // Output: [2, 4]
        }
        </code></pre>
  
        <h4>2. String Manipulation</h4>
        <p>Kotlin makes string manipulation straightforward with its extensive set of string functions.</p>
        <pre><code class="language-kotlin">
        fun main() {
            val text = "Hello, Kotlin"
            println(text.toUpperCase()) // Output: HELLO, KOTLIN
            println(text.split(", ")) // Output: [Hello, Kotlin]
            println(text.replace("Kotlin", "World")) // Output: Hello, World
        }
        </code></pre>
  
        <h4>3. Null Safety</h4>
        <p>Kotlin's standard library provides excellent support for null safety, reducing the risk of null pointer exceptions.</p>
        <pre><code class="language-kotlin">
        fun main() {
            val nullableString: String? = "Hello"
            println(nullableString?.length) // Output: 5
            
            val nullString: String? = null
            println(nullString?.length) // Output: null
        }
        </code></pre>
  
        <h4>4. I/O Operations</h4>
        <p>The Kotlin Standard Library simplifies I/O operations with straightforward functions.</p>
        <pre><code class="language-kotlin">
        import java.io.File
  
        fun main() {
            val text = File("example.txt").readText()
            println(text)
  
            File("output.txt").writeText("Hello, Kotlin!")
        }
        </code></pre>
  
        <h4>5. Extension Functions</h4>
        <p>Kotlin allows you to add new functions to existing classes without modifying their source code.</p>
        <pre><code class="language-kotlin">
        fun String.isPalindrome(): Boolean {
            return this == this.reversed()
        }
  
        fun main() {
            val word = "radar"
            println(word.isPalindrome()) // Output: true
  
            val anotherWord = "hello"
            println(anotherWord.isPalindrome()) // Output: false
        }
        </code></pre>
  
        <h3>Assignment 1: Working with Collections</h3>
        <p>Write a program that creates a list of numbers, filters out the odd numbers, and prints the remaining numbers in descending order.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        fun main() {
            val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
            val evenNumbers = numbers.filter { it % 2 == 0 }.sortedDescending()
            println(evenNumbers) // Output: [10, 8, 6, 4, 2]
        }
        </code></pre>
  
        <h3>Assignment 2: String Manipulation</h3>
        <p>Create a function that takes a string and returns the number of vowels in the string.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        fun countVowels(text: String): Int {
            val vowels = "aeiou"
            return text.toLowerCase().count { it in vowels }
        }
  
        fun main() {
            val text = "Hello, Kotlin"
            println(countVowels(text)) // Output: 4
        }
        </code></pre>
  
        <h3>Assignment 3: Null Safety</h3>
        <p>Write a function that takes a nullable string and returns its length, or 0 if the string is null.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        fun getLength(text: String?): Int {
            return text?.length ?: 0
        }
  
        fun main() {
            val text: String? = "Kotlin"
            println(getLength(text)) // Output: 6
  
            val nullText: String? = null
            println(getLength(nullText)) // Output: 0
        }
        </code></pre>
  
        <h3>Further Reading</h3>
        <p>To learn more about the Kotlin Standard Library, check out the following resources:</p>
        <ul>
          <li><a href="https://kotlinlang.org/api/latest/jvm/stdlib/">Kotlin Standard Library Documentation</a></li>
          <li><a href="https://kotlinlang.org/docs/reference/stdlib-overview.html">Kotlin Standard Library Overview</a></li>
          <li><a href="https://kotlinlang.org/docs/reference/extensions.html">Kotlin Extensions</a></li>
        </ul>
      </section>
    `
  },
  
  {
    id: 'function',
    title: 'Functional Programming',
    content: `
      <section id="function">
        <h2>Functional Programming in Kotlin</h2>
  
        <h3>Introduction</h3>
        <p>Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. Kotlin supports many functional programming concepts, making it easier to write clean, concise, and expressive code.</p>
  
        <h3>Why Use Functional Programming?</h3>
        <ul>
          <li><strong>Immutability:</strong> Promotes immutability and reduces side effects.</li>
          <li><strong>Pure Functions:</strong> Functions produce the same output for the same input without modifying any state.</li>
          <li><strong>Higher-Order Functions:</strong> Functions can accept other functions as parameters and return them as results.</li>
          <li><strong>Concise Code:</strong> Enables writing more concise and readable code.</li>
        </ul>
  
        <h3>Key Concepts in Functional Programming</h3>
  
        <h4>1. Lambda Expressions</h4>
        <p>Lambda expressions are anonymous functions that can be treated as values.</p>
        <pre><code class="language-kotlin">
        fun main() {
            val sum = { a: Int, b: Int -> a + b }
            println(sum(3, 4)) // Output: 7
        }
        </code></pre>
  
        <h4>2. Higher-Order Functions</h4>
        <p>Higher-order functions are functions that take other functions as parameters or return them as results.</p>
        <pre><code class="language-kotlin">
        fun main() {
            fun calculate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
                return operation(a, b)
            }
            val sum = calculate(3, 4, { x, y -> x + y })
            println(sum) // Output: 7
        }
        </code></pre>
  
        <h4>3. Immutability</h4>
        <p>Functional programming emphasizes the use of immutable data structures.</p>
        <pre><code class="language-kotlin">
        fun main() {
            val list = listOf(1, 2, 3, 4, 5)
            val doubled = list.map { it * 2 }
            println(doubled) // Output: [2, 4, 6, 8, 10]
        }
        </code></pre>
  
        <h4>4. Pure Functions</h4>
        <p>Pure functions always produce the same output for the same input and do not have any side effects.</p>
        <pre><code class="language-kotlin">
        fun add(a: Int, b: Int): Int {
            return a + b
        }
  
        fun main() {
            println(add(3, 4)) // Output: 7
        }
        </code></pre>
  
        <h4>5. Function Composition</h4>
        <p>Function composition is the process of combining two or more functions to produce a new function.</p>
        <pre><code class="language-kotlin">
        fun main() {
            val multiplyByTwo = { x: Int -> x * 2 }
            val addThree = { x: Int -> x + 3 }
            val composedFunction = { x: Int -> addThree(multiplyByTwo(x)) }
  
            println(composedFunction(4)) // Output: 11
        }
        </code></pre>
  
        <h3>Assignment 1: Using Lambda Expressions</h3>
        <p>Create a lambda expression that takes two strings and returns their concatenation.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        fun main() {
            val concatenate: (String, String) -> String = { a, b -> a + b }
            println(concatenate("Hello, ", "World")) // Output: Hello, World
        }
        </code></pre>
  
        <h3>Assignment 2: Higher-Order Functions</h3>
        <p>Write a higher-order function that takes a list of integers and a function that multiplies each integer by 2, and then returns the resulting list.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        fun applyToList(list: List<Int>, operation: (Int) -> Int): List<Int> {
            return list.map { operation(it) }
        }
  
        fun main() {
            val numbers = listOf(1, 2, 3, 4, 5)
            val result = applyToList(numbers) { it * 2 }
            println(result) // Output: [2, 4, 6, 8, 10]
        }
        </code></pre>
  
        <h3>Assignment 3: Immutability and Pure Functions</h3>
        <p>Implement a function that takes a list of integers and returns a new list with only the even numbers. Ensure the original list remains unchanged.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        fun filterEvenNumbers(list: List<Int>): List<Int> {
            return list.filter { it % 2 == 0 }
        }
  
        fun main() {
            val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
            val evenNumbers = filterEvenNumbers(numbers)
            println(evenNumbers) // Output: [2, 4, 6, 8, 10]
            println(numbers) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (original list remains unchanged)
        }
        </code></pre>
  
        <h3>Further Reading</h3>
        <p>To learn more about functional programming in Kotlin, check out the following resources:</p>
        <ul>
          <li><a href="https://kotlinlang.org/docs/reference/lambdas.html">Kotlin Lambdas</a></li>
          <li><a href="https://kotlinlang.org/docs/reference/collections-overview.html">Kotlin Collections</a></li>
          <li><a href="https://kotlinlang.org/docs/reference/functional-programming.html">Kotlin Functional Programming</a></li>
        </ul>
      </section>
    `
  },
  
  {
    id: 'testing',
    title: 'Testing',
    content: `
      <section id="testing">
        <h2>Testing in Kotlin</h2>
  
        <h3>Introduction</h3>
        <p>Testing is an essential part of the software development process. It ensures that your code works as expected and helps identify bugs early. Kotlin provides robust support for testing, with tools and libraries such as JUnit and KotlinTest (now part of Kotest).</p>
  
        <h3>Why Write Tests?</h3>
        <ul>
          <li><strong>Ensure Code Quality:</strong> Tests help verify that your code works correctly and meets the requirements.</li>
          <li><strong>Prevent Regressions:</strong> Automated tests catch bugs that may be introduced by changes in the code.</li>
          <li><strong>Facilitate Refactoring:</strong> Tests give you the confidence to refactor code without breaking existing functionality.</li>
          <li><strong>Documentation:</strong> Tests serve as a form of documentation, showing how the code is expected to behave.</li>
        </ul>
  
        <h3>Setting Up Your Testing Environment</h3>
        <p>To get started with testing in Kotlin, you need to add the following dependencies to your build file:</p>
        <pre><code class="language-kotlin">
        dependencies {
            testImplementation("org.jetbrains.kotlin:kotlin-test")
            testImplementation("org.jetbrains.kotlin:kotlin-test-junit")
            testImplementation("io.kotest:kotest-runner-junit5:4.6.1")
            testImplementation("io.kotest:kotest-assertions-core:4.6.1")
        }
        </code></pre>
  
        <h3>Writing Basic Tests with JUnit</h3>
        <p>JUnit is a popular testing framework for Java and Kotlin. Here is an example of a basic JUnit test:</p>
        <pre><code class="language-kotlin">
        import org.junit.Test
        import kotlin.test.assertEquals
  
        class BasicTests {
  
            @Test
            fun testSum() {
                val result = sum(2, 3)
                assertEquals(5, result)
            }
  
            fun sum(a: Int, b: Int): Int {
                return a + b
            }
        }
        </code></pre>
  
        <h3>Writing Tests with Kotest</h3>
        <p>Kotest is a flexible and comprehensive testing library for Kotlin. It provides expressive DSLs for writing tests. Here is an example:</p>
        <pre><code class="language-kotlin">
        import io.kotest.core.spec.style.StringSpec
        import io.kotest.matchers.shouldBe
  
        class StringSpecTests : StringSpec({
            "length should return size of string" {
                "hello".length shouldBe 5
            }
  
            "startsWith should test for a prefix" {
                "world" should startWith("wor")
            }
        })
        </code></pre>
  
        <h3>Assignment 1: Basic Arithmetic Tests</h3>
        <p>Write tests for basic arithmetic functions (addition, subtraction, multiplication, division) using JUnit.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        import org.junit.Test
        import kotlin.test.assertEquals
  
        class ArithmeticTests {
  
            @Test
            fun testAddition() {
                assertEquals(5, add(2, 3))
            }
  
            @Test
            fun testSubtraction() {
                assertEquals(1, subtract(3, 2))
            }
  
            @Test
            fun testMultiplication() {
                assertEquals(6, multiply(2, 3))
            }
  
            @Test
            fun testDivision() {
                assertEquals(2, divide(6, 3))
            }
  
            fun add(a: Int, b: Int) = a + b
            fun subtract(a: Int, b: Int) = a - b
            fun multiply(a: Int, b: Int) = a * b
            fun divide(a: Int, b: Int) = a / b
        }
        </code></pre>
  
        <h3>Assignment 2: String Manipulation Tests</h3>
        <p>Write tests for string manipulation functions (uppercase, lowercase, reverse) using Kotest.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        import io.kotest.core.spec.style.StringSpec
        import io.kotest.matchers.shouldBe
  
        class StringManipulationTests : StringSpec({
            "toUpperCase should convert string to uppercase" {
                "kotlin".toUpperCase() shouldBe "KOTLIN"
            }
  
            "toLowerCase should convert string to lowercase" {
                "KOTLIN".toLowerCase() shouldBe "kotlin"
            }
  
            "reverse should reverse the string" {
                "kotlin".reversed() shouldBe "niltok"
            }
        })
        </code></pre>
  
        <h3>Assignment 3: Exception Handling Tests</h3>
        <p>Write tests to ensure that functions correctly handle and throw exceptions when invalid inputs are provided.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        import org.junit.Test
        import kotlin.test.assertFailsWith
  
        class ExceptionHandlingTests {
  
            @Test
            fun testDivisionByZero() {
                assertFailsWith<ArithmeticException> {
                    divide(1, 0)
                }
            }
  
            fun divide(a: Int, b: Int): Int {
                if (b == 0) throw ArithmeticException("Division by zero")
                return a / b
            }
        }
        </code></pre>
  
        <h3>Further Reading</h3>
        <p>To learn more about testing in Kotlin, check out the following resources:</p>
        <ul>
          <li><a href="https://kotlinlang.org/docs/reference/using-junit.html">Kotlin and JUnit</a></li>
          <li><a href="https://kotest.io/">Kotest Documentation</a></li>
          <li><a href="https://junit.org/junit5/">JUnit 5 Documentation</a></li>
        </ul>
      </section>
    `
  },
  
  {
    id: 'kotlin',
    title: 'Kotlin Multiplatform',
    content: `
      <section id="kotlin">
        <h2>Kotlin Multiplatform</h2>
  
        <h3>Introduction</h3>
        <p>Kotlin Multiplatform is a powerful feature of Kotlin that allows you to write code that can run on multiple platforms, including JVM, JavaScript, and Native. It enables you to share common code between different platforms while writing platform-specific code where necessary. This approach reduces code duplication and improves code maintainability.</p>
  
        <h3>Why Use Kotlin Multiplatform?</h3>
        <ul>
          <li><strong>Code Sharing:</strong> Share common business logic, data models, and utilities across multiple platforms.</li>
          <li><strong>Consistency:</strong> Ensure consistent behavior across different platforms by reusing the same code.</li>
          <li><strong>Efficiency:</strong> Reduce development time and effort by avoiding code duplication.</li>
          <li><strong>Flexibility:</strong> Write platform-specific code when needed while sharing common code.</li>
        </ul>
  
        <h3>Setting Up a Kotlin Multiplatform Project</h3>
        <p>To get started with Kotlin Multiplatform, you need to set up your development environment and configure your project. Here's how to do it:</p>
        <ol>
          <li>Install the latest version of IntelliJ IDEA with Kotlin plugin.</li>
          <li>Create a new Kotlin Multiplatform project in IntelliJ IDEA.</li>
          <li>Add the necessary dependencies to your project.</li>
        </ol>
        <pre><code class="language-kotlin">
        plugins {
            kotlin("multiplatform") version "1.5.21"
        }
  
        kotlin {
            jvm()
            js {
                browser {
                }
                nodejs {
                }
            }
            linuxX64("linux")
  
            sourceSets {
                val commonMain by getting {
                    dependencies {
                        implementation(kotlin("stdlib-common"))
                    }
                }
                val commonTest by getting {
                    dependencies {
                        implementation(kotlin("test-common"))
                        implementation(kotlin("test-annotations-common"))
                    }
                }
                val jvmMain by getting {
                    dependencies {
                        implementation(kotlin("stdlib-jdk8"))
                    }
                }
                val jvmTest by getting {
                    dependencies {
                        implementation(kotlin("test-junit"))
                    }
                }
                val jsMain by getting {
                    dependencies {
                        implementation(kotlin("stdlib-js"))
                    }
                }
                val jsTest by getting {
                    dependencies {
                        implementation(kotlin("test-js"))
                    }
                }
                val linuxMain by getting
                val linuxTest by getting
            }
        }
        </code></pre>
  
        <h3>Writing Common Code</h3>
        <p>In a Kotlin Multiplatform project, you can write common code that is shared across all platforms. Here is an example of a common Kotlin file:</p>
        <pre><code class="language-kotlin">
  // src/commonMain/kotlin/com/example/Hello.kt
  package com.example
  
  fun greet(): String {
      return "Hello, Kotlin Multiplatform!"
  }
        </code></pre>
  
        <h3>Writing Platform-Specific Code</h3>
        <p>Sometimes, you need to write platform-specific code. Kotlin Multiplatform allows you to do this by creating platform-specific source sets. Here is an example of platform-specific code for JVM and JS:</p>
        <pre><code class="language-kotlin">
  // src/jvmMain/kotlin/com/example/Platform.kt
  package com.example
  
  actual fun getPlatformName(): String {
      return "JVM"
  }
  
  // src/jsMain/kotlin/com/example/Platform.kt
  package com.example
  
  actual fun getPlatformName(): String {
      return "JavaScript"
  }
        </code></pre>
  
        <h3>Expect/Actual Declarations</h3>
        <p>Kotlin Multiplatform uses <code>expect</code> and <code>actual</code> declarations to define platform-specific implementations. Here is an example:</p>
        <pre><code class="language-kotlin">
  // src/commonMain/kotlin/com/example/Platform.kt
  package com.example
  
  expect fun getPlatformName(): String
  
  fun greet(): String {
      return "Hello from \${getPlatformName()}!"
  }
  
  // src/jvmMain/kotlin/com/example/Platform.kt
  package com.example
  
  actual fun getPlatformName(): String {
      return "JVM"
  }
  
  // src/jsMain/kotlin/com/example/Platform.kt
  package com.example
  
  actual fun getPlatformName(): String {
      return "JavaScript"
  }
        </code></pre>
  
        <h3>Assignment 1: Basic Multiplatform Project</h3>
        <p>Create a Kotlin Multiplatform project that shares a function to calculate the factorial of a number. Implement platform-specific code to print the result on JVM and JS.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
  // src/commonMain/kotlin/com/example/Factorial.kt
  package com.example
  
  fun factorial(n: Int): Long {
      return if (n == 1) n.toLong() else n * factorial(n - 1)
  }
  
  // src/jvmMain/kotlin/com/example/Main.kt
  package com.example
  
  fun main() {
      println("Factorial of 5 is \${factorial(5)}")
  }
  
  // src/jsMain/kotlin/com/example/Main.kt
  package com.example
  
  fun main() {
      println("Factorial of 5 is \${factorial(5)}")
  }
        </code></pre>
  
        <h3>Assignment 2: Expect/Actual Declarations</h3>
        <p>Create a Kotlin Multiplatform project that defines a common interface for logging messages. Implement platform-specific logging for JVM (using println) and JS (using console.log).</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
  // src/commonMain/kotlin/com/example/Logger.kt
  package com.example
  
  expect class Logger() {
      fun log(message: String)
  }
  
  // src/jvmMain/kotlin/com/example/Logger.kt
  package com.example
  
  actual class Logger actual constructor() {
      actual fun log(message: String) {
          println("JVM Logger: \\message")
      }
  }
  
  // src/jsMain/kotlin/com/example/Logger.kt
  package com.example
  
  actual class Logger actual constructor() {
      actual fun log(message: String) {
          console.log("JS Logger: \\message")
      }
  }
        </code></pre>
  
        <h3>Assignment 3: Multiplatform Testing</h3>
        <p>Create unit tests for the common factorial function and ensure they run on both JVM and JS platforms.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
  // src/commonTest/kotlin/com/example/FactorialTest.kt
  package com.example
  
  import kotlin.test.Test
  import kotlin.test.assertEquals
  
  class FactorialTest {
      @Test
      fun testFactorial() {
          assertEquals(120, factorial(5))
      }
  }
        </code></pre>
  
        <h3>Further Reading</h3>
        <p>To learn more about Kotlin Multiplatform, check out the following resources:</p>
        <ul>
          <li><a href="https://kotlinlang.org/docs/multiplatform.html">Kotlin Multiplatform Documentation</a></li>
          <li><a href="https://kotlinlang.org/docs/reference/platform-specific-declarations.html">Expect/Actual Declarations</a></li>
          <li><a href="https://github.com/Kotlin/kotlin-examples">Kotlin Examples on GitHub</a></li>
        </ul>
      </section>
    `
  },
  
  {
    id: 'domain',
    title: 'Domain-Specific Languages (DSL)',
    content: `
      <section id="domain">
        <h2>Domain-Specific Languages (DSL) in Kotlin</h2>
  
        <h3>Introduction</h3>
        <p>A Domain-Specific Language (DSL) is a specialized language designed to solve problems in a specific domain. Kotlin's expressive syntax and powerful language features make it an excellent choice for creating DSLs. With Kotlin DSLs, you can create readable, concise, and maintainable code that clearly expresses the domain concepts.</p>
  
        <h3>Why Use DSLs?</h3>
        <ul>
          <li><strong>Readability:</strong> DSLs can make code more readable and expressive by using domain-specific terminology.</li>
          <li><strong>Maintainability:</strong> DSLs can encapsulate complex logic, making code easier to maintain and extend.</li>
          <li><strong>Abstraction:</strong> DSLs provide a higher level of abstraction, allowing developers to focus on the domain rather than implementation details.</li>
        </ul>
  
        <h3>Creating a Simple DSL</h3>
        <p>Let's start by creating a simple DSL for building HTML. We'll use Kotlin's extension functions and lambda expressions to achieve this:</p>
        <pre><code class="language-kotlin">
        class HTML {
            private val elements = mutableListOf<String>()
  
            fun body(init: BODY.() -> Unit) {
                val body = BODY().apply(init)
                elements.add(body.toString())
            }
  
            override fun toString(): String {
                return elements.joinToString("\\n", "<html>\\n", "\\n</html>")
            }
        }
  
        class BODY {
            private val elements = mutableListOf<String>()
  
            fun h1(text: String) {
                elements.add("<h1>\\$text</h1>")
            }
  
            fun p(text: String) {
                elements.add("<p>\\$text</p>")
            }
  
            override fun toString(): String {
                return elements.joinToString("\\n", "<body>\\n", "\\n</body>")
            }
        }
  
        fun html(init: HTML.() -> Unit): HTML {
            return HTML().apply(init)
        }
  
        fun main() {
            val page = html {
                body {
                    h1("Welcome to Kotlin DSL")
                    p("This is an example of a simple DSL in Kotlin.")
                }
            }
            println(page)
        }
        </code></pre>
        <p>In this example, we've created a simple DSL for building HTML. The <code>html</code> function takes a lambda with receiver that allows you to define the HTML structure in a readable way.</p>
  
        <h3>Assignment 1: Extending the HTML DSL</h3>
        <p>Extend the HTML DSL to support more HTML elements, such as <code>ul</code> and <code>li</code> for unordered lists.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        class HTML {
            private val elements = mutableListOf<String>()
  
            fun body(init: BODY.() -> Unit) {
                val body = BODY().apply(init)
                elements.add(body.toString())
            }
  
            override fun toString(): String {
                return elements.joinToString("\\n", "<html>\\n", "\\n</html>")
            }
        }
  
        class BODY {
            private val elements = mutableListOf<String>()
  
            fun h1(text: String) {
                elements.add("<h1>\\$text</h1>")
            }
  
            fun p(text: String) {
                elements.add("<p>\\$text</p>")
            }
  
            fun ul(init: UL.() -> Unit) {
                val ul = UL().apply(init)
                elements.add(ul.toString())
            }
  
            override fun toString(): String {
                return elements.joinToString("\\n", "<body>\\n", "\\n</body>")
            }
        }
  
        class UL {
            private val elements = mutableListOf<String>()
  
            fun li(text: String) {
                elements.add("<li>\\$text</li>")
            }
  
            override fun toString(): String {
                return elements.joinToString("\\n", "<ul>\\n", "\\n</ul>")
            }
        }
  
        fun html(init: HTML.() -> Unit): HTML {
            return HTML().apply(init)
        }
  
        fun main() {
            val page = html {
                body {
                    h1("Welcome to Kotlin DSL")
                    p("This is an example of a simple DSL in Kotlin.")
                    ul {
                        li("Item 1")
                        li("Item 2")
                        li("Item 3")
                    }
                }
            }
            println(page)
        }
        </code></pre>
  
        <h3>Assignment 2: Creating a DSL for a Config File</h3>
        <p>Create a DSL for defining a configuration file. The configuration should support defining sections and properties within each section.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        class Config {
            private val sections = mutableListOf<Section>()
  
            fun section(name: String, init: Section.() -> Unit) {
                val section = Section(name).apply(init)
                sections.add(section)
            }
  
            override fun toString(): String {
                return sections.joinToString("\\n") { it.toString() }
            }
        }
  
        class Section(private val name: String) {
            private val properties = mutableListOf<String>()
  
            fun property(key: String, value: String) {
                properties.add("\\$key=\\$value")
            }
  
            override fun toString(): String {
                return "[$name]\\n" + properties.joinToString("\\n")
            }
        }
  
        fun config(init: Config.() -> Unit): Config {
            return Config().apply(init)
        }
  
        fun main() {
            val configFile = config {
                section("database") {
                    property("url", "jdbc:mysql://localhost:3306/mydb")
                    property("user", "root")
                    property("password", "password")
                }
                section("server") {
                    property("host", "localhost")
                    property("port", "8080")
                }
            }
            println(configFile)
        }
        </code></pre>
  
        <h3>Assignment 3: Creating a Task Management DSL</h3>
        <p>Create a DSL for defining tasks. Each task should have a name, a description, and a list of subtasks.</p>
        <h4>Solution:</h4>
        <pre><code class="language-kotlin">
        class Task(val name: String) {
            private val subtasks = mutableListOf<String>()
            var description: String = ""
  
            fun subtask(name: String) {
                subtasks.add(name)
            }
  
            override fun toString(): String {
                return "Task: \\$name\\nDescription: \\$description\\nSubtasks:\\n" + subtasks.joinToString("\\n") { "- \\$it" }
            }
        }
  
        class TaskManager {
            private val tasks = mutableListOf<Task>()
  
            fun task(name: String, init: Task.() -> Unit) {
                val task = Task(name).apply(init)
                tasks.add(task)
            }
  
            override fun toString(): String {
                return tasks.joinToString("\\n\\n") { it.toString() }
            }
        }
  
        fun tasks(init: TaskManager.() -> Unit): TaskManager {
            return TaskManager().apply(init)
        }
  
        fun main() {
            val taskList = tasks {
                task("Write Kotlin DSL") {
                    description = "Create a domain-specific language in Kotlin."
                    subtask("Define HTML DSL")
                    subtask("Extend HTML DSL")
                    subtask("Create Config DSL")
                }
                task("Test DSL") {
                    description = "Write tests for the created DSL."
                    subtask("Test HTML DSL")
                    subtask("Test Config DSL")
                }
            }
            println(taskList)
        }
        </code></pre>
  
        <h3>Further Reading</h3>
        <p>To learn more about Domain-Specific Languages in Kotlin, check out the following resources:</p>
        <ul>
          <li><a href="https://kotlinlang.org/docs/type-safe-builders.html">Type-Safe Builders</a></li>
          <li><a href="https://kotlinlang.org/docs/reference/lambdas.html">Kotlin Lambdas</a></li>
          <li><a href="https://kotlinlang.org/docs/reference/extensions.html">Kotlin Extensions</a></li>
        </ul>
      </section>
    `
  },
  
];

const KotlinCourse = () => {
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
          const contentParts = section.content.split(/(<pre><code class="language-kotlin">[\s\S]*?<\/code><\/pre>)/g);
    
          return (
            <div key={section.id}>
              {contentParts.map((part, index) => {
                if (part.startsWith('<pre><code class="language-kotlin">')) {
                  const codeContent = part.match(/<code class="language-kotlin">([\s\S]*?)<\/code>/)[1];
                  return (
                    <SyntaxHighlighter key={index} language="kotlin" style={darcula}>
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
                {subSection.content.split(/(<pre><code class="language-kotlin">[\s\S]*?<\/code><\/pre>)/g).map((part, index) => {
                  if (part.startsWith('<pre><code class="language-kotlin">')) {
                    const codeContent = part.match(/<code class="language-kotlin">([\s\S]*?)<\/code>/)[1];
                    return (
                      <SyntaxHighlighter key={index} language="kotlin" style={darcula}>
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
        <div className="kotlin-introduction">
          <h2 className="text-3xl font-bold mb-6">Introduction to Kotlin</h2>
          <p className="mb-4">Kotlin is a modern, expressive, and safe programming language developed by JetBrains. It's fully interoperable with Java and has become increasingly popular, especially for Android development.</p>
          
          <h3 className="text-2xl font-semibold mb-4">Key Features of Kotlin:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Concise and expressive syntax</li>
            <li>Null safety</li>
            <li>Functional programming support</li>
            <li>Interoperability with Java</li>
            <li>Coroutines for asynchronous programming</li>
            <li>Cross-platform development capabilities</li>
          </ul>
      
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="setup">Environment Setup</TabsTrigger>
              <TabsTrigger value="usage">Using IDEs</TabsTrigger>
              <TabsTrigger value="hello-world">Hello World</TabsTrigger>
            </TabsList>
            
            <TabsContent value="setup">
              <h3 className="text-2xl font-semibold mb-4">Setting Up Your Kotlin Development Environment</h3>
              <p className="mb-4">To start developing with Kotlin, you'll need an Integrated Development Environment (IDE). Here are three popular options:</p>
              
              <Tabs value={activeIdeTab} onValueChange={setActiveIdeTab}>
                <TabsList>
                  <TabsTrigger value="android-studio">Android Studio</TabsTrigger>
                  <TabsTrigger value="intellij">IntelliJ IDEA</TabsTrigger>
                  <TabsTrigger value="vscode">VS Code</TabsTrigger>
                </TabsList>
                
                <TabsContent value="android-studio">
                  <h4 className="text-xl font-semibold mt-4">Android Studio</h4>
                  <p className="mb-4">Android Studio is the official IDE for Android development and provides excellent support for Kotlin.</p>
                  <ol className="list-decimal list-inside ml-4 space-y-2">
                    <li>Visit the <a href="https://developer.android.com/studio" className="text-blue-600 hover:underline">Android Studio download page</a>.</li>
                    <li>Download the appropriate version for your operating system.</li>
                    <li>Run the installer and follow the installation wizard.</li>
                    <li>Ensure you select Android SDK, Android SDK Platform, and Android Virtual Device during installation.</li>
                  </ol>
                </TabsContent>
      
                <TabsContent value="intellij">
                  <h4 className="text-xl font-semibold mt-4">IntelliJ IDEA</h4>
                  <p className="mb-4">IntelliJ IDEA is a versatile IDE that supports various programming languages, including Kotlin.</p>
                  <ol className="list-decimal list-inside ml-4 space-y-2">
                    <li>Go to the <a href="https://www.jetbrains.com/idea/download/" className="text-blue-600 hover:underline">IntelliJ IDEA download page</a>.</li>
                    <li>Choose between Community (free) or Ultimate (paid) edition.</li>
                    <li>Download and run the installer for your operating system.</li>
                    <li>During installation, make sure to select the Kotlin plugin.</li>
                  </ol>
                </TabsContent>
      
                <TabsContent value="vscode">
                  <h4 className="text-xl font-semibold mt-4">Visual Studio Code</h4>
                  <p className="mb-4">VS Code can be set up for Kotlin development with the right extensions.</p>
                  <ol className="list-decimal list-inside ml-4 space-y-2">
                    <li>Download VS Code from the <a href="https://code.visualstudio.com/download" className="text-blue-600 hover:underline">official website</a>.</li>
                    <li>Install VS Code following the standard installation process for your OS.</li>
                    <li>Open VS Code and navigate to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X on macOS).</li>
                    <li>Search for and install the "Kotlin Language" and "Kotlin Debugger" extensions.</li>
                  </ol>
                </TabsContent>
              </Tabs>
            </TabsContent>
            
            <TabsContent value="usage">
              <h3 className="text-2xl font-semibold mb-4">Using IDEs for Kotlin Development</h3>
              <p className="mb-4">Once you have your IDE set up, here's how to start a new Kotlin project:</p>
              
              <h4 className="text-xl font-semibold mt-4">In Android Studio / IntelliJ IDEA:</h4>
              <ol className="list-decimal list-inside ml-4 space-y-2 mb-4">
                <li>Open the IDE and click on "New Project".</li>
                <li>Select "Kotlin" as the language.</li>
                <li>Choose "Console Application" for a simple start.</li>
                <li>Configure your project name and location.</li>
                <li>Click "Finish" to create the project.</li>
              </ol>
      
              <h4 className="text-xl font-semibold mt-4">In Visual Studio Code:</h4>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>Open VS Code and create a new folder for your project.</li>
                <li>Open the folder in VS Code.</li>
                <li>Create a new file with a `.kt` extension (e.g., `HelloWorld.kt`).</li>
                <li>Start coding in Kotlin!</li>
              </ol>
            </TabsContent>
            
            <TabsContent value="hello-world">
              <h3 className="text-2xl font-semibold mb-4">Your First Kotlin Program: Hello World</h3>
              <p className="mb-4">Let's write a simple "Hello World" program in Kotlin:</p>
              
              <Button 
                onClick={() => setShowCode(!showCode)}
                className="mb-4"
              >
                <Code className="mr-2 h-4 w-4" /> {showCode ? "Hide" : "Show"} Code
              </Button>
              
              {showCode && (
                <SyntaxHighlighter language="kotlin" style={darcula}>
                  {`fun main() {
                    println("Hello, Kotlin World!")
                  }`}
                </SyntaxHighlighter>
              )}
              
              <h4 className="text-xl font-semibold mt-6">Understanding the Code:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><code>fun</code>: Keyword to declare a function in Kotlin.</li>
                <li><code>main()</code>: The entry point of a Kotlin program.</li>
                <li><code>println()</code>: Prints the given message to the console and adds a new line.</li>
              </ul>
              
              <p className="mt-4">This simple program demonstrates several key features of Kotlin:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Kotlin doesn't require semicolons at the end of statements.</li>
                <li>The `main()` function doesn't need to be part of a class.</li>
                <li>Type inference: We didn't need to specify the return type of the `main()` function.</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      );
    };
  
    return (
      <div className="kotlin-course">
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
  
  export default KotlinCourse;