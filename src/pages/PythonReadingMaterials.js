import React, { useState } from 'react';
import Header from '../components/Header';
import './PythonReadingMaterials.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const sections = [
  { id: 'introduction', title: 'Introduction', content: 
`<section id="introduction">
<h2>Introduction</h2>
<p>Python is a powerful programming language that is widely used in various domains such as web development, data science, artificial intelligence, scientific computing, and more. It is known for its simplicity, readability, and versatility.</p>
<p>Python is a high-level, general-purpose, and very popular programming language. Python programming language (latest Python 3) is being used in web development, and Machine Learning applications, along with all cutting-edge technology in Software Industry. 
Python language is being used by almost all tech-giant companies like – Google, Amazon, Facebook, Instagram, Dropbox, Uber… etc.</p>

<p>First we are to go set up our python on our computers.</p>
<h3>Setting up Python</h3>
<p>Step 1: </p>
<p>Download Visual Studio from https://code.visualstudio.com/download.</p>
<p>Step 2: </p>
<p>Download Python from https://www.python.org/downloads/.</p>
<p>Step 3: </p>
<p>Configure python</p>
<p>Step 4: </p>
<p>Check if you have python installed</p>
<h4> ON WINDOWS </h4>
<pre><code>
$ python --version </code></pre>
<h4>ON A MAC </h4>
<pre><code>
$ python3 --version </code></pre>
<h3>A QUICKSTART </h3>
<p>Python is an interpreted programming language, this means that as a developer you write Python (.py) files in a text editor and then put those files into the python interpreter to be executed.
Let's write our first Python file, called hello.py, which can be done in any text editor.
</p>
<pre><code>
hello.py</code></pre>
<p>Save your file. Open your command line, navigate to the directory and save your file.</p>
<pre><code>
cd path-to-your-directory
</code></pre>
<p>To run the program in your command line(terminal), </p>
<h4>On Windows</h4>
<p>Press Win + R, type cmd, and press Enter.</p>
<h4>On a mac </h4>
<p>Press Cmd + Space, type Terminal, and press Enter.</p>
<p>The output should read:</p>
<pre><code>
Hello World!
</code></pre>
<h3>Watch this video tutorial to get started with Python</h3>
<div class="video-responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/rfscVS0vtbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<h3>Assignment</h3>
<p>1. Create a python program and name it day1.py</p>
<p>2. Print the following statement;</p>
<p>“Hello this is [your_name] and this is my first python program. Looking forward to more coding with python”.</p>
<p>Note: Make sure the program runs.</p>

</section>` },
     {id: 'variables' , title:'Variables' ,content:
`<section id="variables">
<h2>Variables</h2>
<p>Variables are containers for storing data values. In Python, you don't need to declare the type of a variable; you just assign a value to it.</p>

<h3>Basic Variable Assignment</h3>
<p>You can assign a value to a variable using the assignment operator <code>=</code>. The variable will take the type of the value it holds.</p>
<pre><code>
x = 5           # Integer
y = "Hello, World!"  # String
z = 3.14        # Float
is_active = True  # Boolean

print(x)
print(y)
print(z)
print(is_active)
</code></pre>

<h3>Multiple Assignments</h3>
<p>Python allows you to assign values to multiple variables in one line:</p>
<pre><code>
a, b, c = 1, 2, 3
print(a, b, c)
</code></pre>

<h3>Dynamic Typing</h3>
<p>Python is dynamically typed, which means you can change the type of a variable by assigning it a value of a different type:</p>
<pre><code>
var = 10           # Integer
print(var)

var = "Python"     # String
print(var)

var = [1, 2, 3]    # List
print(var)
</code></pre>

<h3>Variable Naming Rules</h3>
<p>When naming variables in Python, follow these rules:</p>
<ul>
  <li>Variable names must start with a letter (a-z, A-Z) or an underscore (_).</li>
  <li>The rest of the variable name can contain letters, numbers, or underscores.</li>
  <li>Variable names are case-sensitive.</li>
</ul>
<pre><code>
my_var = 100
MyVar = 200
_var = 300
var123 = 400

print(my_var)
print(MyVar)
print(_var)
print(var123)
</code></pre>

<h3>Global and Local Variables</h3>
<p>Variables defined inside a function are local and those defined outside are global. You can use the <code>global</code> keyword to modify a global variable inside a function:</p>
<pre><code>
global_var = "I am global"

def my_function():
    local_var = "I am local"
    global global_var
    global_var = "Modified global variable"
    print(local_var)
    print(global_var)

my_function()
print(global_var)
</code></pre>

<h3>Constants</h3>
<p>In Python, constants are usually defined using uppercase letters. However, there is no strict rule, and Python doesn't have built-in constant support.</p>
<pre><code>
PI = 3.14159
GRAVITY = 9.8

print(PI)
print(GRAVITY)
</code></pre>

<h3>Using <code>type()</code> Function</h3>
<p>You can use the <code>type()</code> function to find out the data type of a variable:</p>
<pre><code>
a = 5
b = 3.14
c = "Hello"
d = True

print(type(a))  # Output: <class 'int'>
print(type(b))  # Output: <class 'float'>
print(type(c))  # Output: <class 'str'>
print(type(d))  # Output: <class 'bool'>
</code></pre>

<h3>Type Casting</h3>
<p>Python allows you to convert one data type to another. This is called type casting.</p>
<pre><code>
# Convert integer to float
x = 1
y = float(x)
print(y)  # Output: 1.0

# Convert float to integer
a = 3.14
b = int(a)
print(b)  # Output: 3

# Convert integer to string
num = 100
num_str = str(num)
print(num_str)  # Output: "100"
</code></pre>

<h3>Unpacking a Collection</h3>
<p>You can extract the values from a list or tuple into variables. This is called unpacking.</p>
<pre><code>
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits

print(x)  # Output: apple
print(y)  # Output: banana
print(z)  # Output: cherry
</code></pre>

<h3>Variable Scope</h3>
<p>The scope of a variable is the portion of the program where it is recognized. Variables can be defined inside a function (local scope) or outside a function (global scope).</p>
<pre><code>
def my_function():
    local_var = 10
    print(local_var)

my_function()
# print(local_var)  # This will raise an error because local_var is not defined outside the function

global_var = 20
def another_function():
    print(global_var)

another_function()
</code></pre>

<h3>Deleting Variables</h3>
<p>You can delete a variable using the <code>del</code> keyword:</p>
<pre><code>
x = 10
print(x)

del x
# print(x)  # This will raise an error because x is deleted
</code></pre>


</section>` },
  { id: 'datatypes', title: 'Data Types', content: 
`<section id="datatypes">
<h2>Data Types</h2>
<p>Python has various data types including integers, floats, strings, lists, tuples, sets, and dictionaries. Each data type serves different purposes and provides different functionalities.</p>

<h3>Numeric Data Types</h3>
<p>Python supports different types of numeric values:</p>
<ul>
  <li><strong>int</strong>: Integer values</li>
  <li><strong>float</strong>: Floating point numbers</li>
  <li><strong>complex</strong>: Complex numbers</li>
</ul>
<pre><code>
x = 5        # int
y = 3.14     # float
z = 1 + 2j   # complex

print(type(x))
print(type(y))
print(type(z))
</code></pre>

<h3>String Data Type</h3>
<p>Strings are sequences of characters, enclosed in single, double, or triple quotes:</p>
<pre><code>
str1 = 'Hello'
str2 = "World"
str3 = '''This is a multi-line string.'''

print(type(str1))
print(type(str2))
print(type(str3))

# String operations
greeting = str1 + " " + str2
print(greeting)  # Output: Hello World

print(str1[1])  # Output: e
print(str2[1:4])  # Output: orl
</code></pre>

<h3>List Data Type</h3>
<p>Lists are ordered collections of items, which can be of different data types. Lists are mutable, meaning you can change their content:</p>
<pre><code>
my_list = [1, 2, 3, "apple", 3.14, True]
print(type(my_list))
print(my_list)

# List operations
my_list.append("new item")
print(my_list)

my_list.remove(2)
print(my_list)

print(my_list[1])  # Output: 3
print(my_list[1:4])  # Output: [3, 'apple', 3.14]
</code></pre>

<h3>Tuple Data Type</h3>
<p>Tuples are ordered collections of items similar to lists, but they are immutable. Once a tuple is created, you cannot change its values:</p>
<pre><code>
my_tuple = (1, 2, 3, "apple", 3.14, True)
print(type(my_tuple))
print(my_tuple)

# Tuple operations
print(my_tuple[1])  # Output: 2
print(my_tuple[1:4])  # Output: (2, 3, 'apple')

# my_tuple[1] = 4  # This will raise an error because tuples are immutable
</code></pre>

<h3>Set Data Type</h3>
<p>Sets are unordered collections of unique items. Sets are mutable, but they do not allow duplicate values:</p>
<pre><code>
my_set = {1, 2, 3, "apple", 3.14, True}
print(type(my_set))
print(my_set)

# Set operations
my_set.add("new item")
print(my_set)

my_set.remove(3.14)
print(my_set)

# Duplicate values are ignored
my_set.add(1)
print(my_set)  # Output: {1, 2, 3, 'new item', 'apple', True}
</code></pre>

<h3>Dictionary Data Type</h3>
<p>Dictionaries are unordered collections of key-value pairs. Keys must be unique and immutable, but values can be of any data type:</p>
<pre><code>
my_dict = {"name": "Alice", "age": 25, "city": "New York"}
print(type(my_dict))
print(my_dict)

# Dictionary operations
print(my_dict["name"])  # Output: Alice
my_dict["age"] = 26
print(my_dict)

my_dict["profession"] = "Engineer"
print(my_dict)

del my_dict["city"]
print(my_dict)
</code></pre>

<h3>Boolean Data Type</h3>
<p>Boolean data type can have one of two values: <code>True</code> or <code>False</code>:</p>
<pre><code>
is_active = True
is_admin = False

print(type(is_active))
print(type(is_admin))

print(is_active and is_admin)  # Output: False
print(is_active or is_admin)  # Output: True
</code></pre>

<h3>None Data Type</h3>
<p>The None keyword represents the absence of a value or a null value:</p>
<pre><code>
value = None
print(type(value))

if value is None:
    print("value is None")
</code></pre>
<h3>Advanced Data Types</h3>
<p>In addition to the basic data types, Python provides several advanced data types, such as:</p>
<ul>
  <li><strong>byte</strong>: Represents a sequence of bytes</li>
  <li><strong>bytearray</strong>: Represents a mutable sequence of bytes</li>
  <li><strong>range</strong>: Represents an immutable sequence of numbers</li>
</ul>
<pre><code>
# byte
byte_data = b"Hello"
print(type(byte_data))
print(byte_data)  # Output: b'Hello'

# bytearray
bytearray_data = bytearray(5)
print(type(bytearray_data))
print(bytearray_data)  # Output: bytearray(b'\x00\x00\x00\x00\x00')

# range
range_data = range(5)
print(type(range_data))
print(list(range_data))  # Output: [0, 1, 2, 3, 4]
</code></pre>
</section>` },
{ id: 'operators', title: 'Operators', content: 
`<section id="operators">
<h2>Operators</h2>
<p>Operators are used to perform operations on variables and values. Python supports various types of operators, including arithmetic, comparison, logical, bitwise, assignment, and identity operators.</p>

<h3>Arithmetic Operators</h3>
<p>Arithmetic operators are used to perform common mathematical operations.</p>
<p>Example:</p>
<pre><code>
# Addition
print(5 + 3)  # Output: 8

# Subtraction
print(5 - 3)  # Output: 2

# Multiplication
print(5 * 3)  # Output: 15

# Division
print(5 / 3)  # Output: 1.6666666666666667

# Floor Division
print(5 // 3)  # Output: 1

# Modulus
print(5 % 3)  # Output: 2

# Exponentiation
print(5 ** 3)  # Output: 125
</code></pre>
<p><strong>Explanation:</strong> Arithmetic operators include addition (+), subtraction (-), multiplication (*), division (/), floor division (//), modulus (%), and exponentiation (**).</p>

<p><strong>Assignment:</strong> Write a program that takes two numbers as input and performs all the arithmetic operations on them. Print the results.</p>

<pre><code>
a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))

print(f"Addition: {a + b}")
print(f"Subtraction: {a - b}")
print(f"Multiplication: {a * b}")
print(f"Division: {a / b}")
print(f"Floor Division: {a // b}")
print(f"Modulus: {a % b}")
print(f"Exponentiation: {a ** b}")
</code></pre>

<h3>Comparison Operators</h3>
<p>Comparison operators are used to compare two values. They return a Boolean value (True or False).</p>
<p>Example:</p>
<pre><code>
# Equal to
print(5 == 3)  # Output: False

# Not equal to
print(5 != 3)  # Output: True

# Greater than
print(5 > 3)  # Output: True

# Less than
print(5 < 3)  # Output: False

# Greater than or equal to
print(5 >= 3)  # Output: True

# Less than or equal to
print(5 <= 3)  # Output: False
</code></pre>
<p><strong>Explanation:</strong> Comparison operators include equal to (==), not equal to (!=), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).</p>

<p><strong>Assignment:</strong> Write a program that takes two numbers as input and compares them using all the comparison operators. Print the results.</p>

<pre><code>
a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))

print(f"{a} == {b}: {a == b}")
print(f"{a} != {b}: {a != b}")
print(f"{a} > {b}: {a > b}")
print(f"{a} < {b}: {a < b}")
print(f"{a} >= {b}: {a >= b}")
print(f"{a} <= {b}: {a <= b}")
</code></pre>

<h3>Logical Operators</h3>
<p>Logical operators are used to combine conditional statements. They include and, or, and not.</p>
<p>Example:</p>
<pre><code>
# and
print(True and False)  # Output: False

# or
print(True or False)  # Output: True

# not
print(not True)  # Output: False
</code></pre>
<p><strong>Explanation:</strong> The <code>and</code> operator returns True if both statements are true. The <code>or</code> operator returns True if one of the statements is true. The <code>not</code> operator reverses the result, returning False if the result is true.</p>

<p><strong>Assignment:</strong> Write a program that takes two Boolean values as input and combines them using all the logical operators. Print the results.</p>

<pre><code>
a = input("Enter the first Boolean value (True/False): ") == "True"
b = input("Enter the second Boolean value (True/False): ") == "True"

print(f"{a} and {b}: {a and b}")
print(f"{a} or {b}: {a or b}")
print(f"not {a}: {not a}")
</code></pre>

<h3>Bitwise Operators</h3>
<p>Bitwise operators are used to perform operations on binary numbers.</p>
<p>Example:</p>
<pre><code>
# AND
print(5 & 3)  # Output: 1

# OR
print(5 | 3)  # Output: 7

# XOR
print(5 ^ 3)  # Output: 6

# NOT
print(~5)  # Output: -6

# Left Shift
print(5 << 1)  # Output: 10

# Right Shift
print(5 >> 1)  # Output: 2
</code></pre>
<p><strong>Explanation:</strong> Bitwise operators include AND (&), OR (|), XOR (^), NOT (~), left shift (<<), and right shift (>>).</p>

<p><strong>Assignment:</strong> Write a program that takes two numbers as input and performs all the bitwise operations on them. Print the results.</p>

<pre><code>
a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))

print(f"Bitwise AND: {a & b}")
print(f"Bitwise OR: {a | b}")
print(f"Bitwise XOR: {a ^ b}")
print(f"Bitwise NOT of {a}: {~a}")
print(f"Bitwise Left Shift of {a}: {a << 1}")
print(f"Bitwise Right Shift of {a}: {a >> 1}")
</code></pre>

<h3>Assignment Operators</h3>
<p>Assignment operators are used to assign values to variables. They include operators like =, +=, -=, *=, /=, %=, **=, //=, &=, |=, ^=, >>=, and <<=.</p>
<p>Example:</p>
<pre><code>
a = 5

a += 3  # Equivalent to a = a + 3
print(a)  # Output: 8

a -= 3  # Equivalent to a = a - 3
print(a)  # Output: 5

a *= 3  # Equivalent to a = a * 3
print(a)  # Output: 15

a /= 3  # Equivalent to a = a / 3
print(a)  # Output: 5.0

a %= 3  # Equivalent to a = a % 3
print(a)  # Output: 2.0

a **= 3  # Equivalent to a = a ** 3
print(a)  # Output: 8.0

a //= 3  # Equivalent to a = a // 3
print(a)  # Output: 2.0
</code></pre>
<p><strong>Explanation:</strong> Assignment operators are used to assign values to variables and perform arithmetic operations simultaneously.</p>

<p><strong>Assignment:</strong> Write a program that takes a number as input and performs all the assignment operations on it. Print the results after each operation.</p>

<pre><code>
a = int(input("Enter a number: "))

a += 5
print(f"After += 5: {a}")

a -= 3
print(f"After -= 3: {a}")

a *= 2
print(f"After *= 2: {a}")

a /= 4
print(f"After /= 4: {a}")

a %= 3
print(f"After %= 3: {a}")

a **= 2
print(f"After **= 2: {a}")

a //= 2
print(f"After //= 2: {a}")
</code></pre>

<h3>Identity Operators</h3>
<p>Identity operators are used to compare the memory locations of two objects. They include <code>is</code> and <code>is not</code>.</p>
<p>Example:</p>
<pre><code>
a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a is b)       # Output: True
print(a is c)       # Output: False
print(a is not c)   # Output: True
</code></pre>
<p><strong>Explanation:</strong> The <code>is</code> operator returns True if both variables point to the same object, whereas <code>is not</code> returns True if they do not.</p>

<p><strong>Assignment:</strong> Write a program that creates two lists, compares them using identity operators, and prints the results.</p>

<pre><code>
list1 = [1, 2, 3]
list2 = list1
list3 = [1, 2, 3]

print(f"list1 is list2: {list1 is list2}")
print(f"list1 is list3: {list1 is list3}")
print(f"list1 is not list3: {list1 is not list3}")
</code></pre>

<h3>Membership Operators</h3>
<p>Membership operators are used to test if a sequence is present in an object. They include <code>in</code> and <code>not in</code>.</p>
<p>Example:</p>
<pre><code>
a = [1, 2, 3, 4, 5]

print(3 in a)       # Output: True
print(6 in a)       # Output: False
print(6 not in a)   # Output: True
</code></pre>
<p><strong>Explanation:</strong> The <code>in</code> operator returns True if the specified value is found in the sequence, whereas <code>not in</code> returns True if the specified value is not found in the sequence.</p>

<p><strong>Assignment:</strong> Write a program that creates a list of numbers and tests whether specific values are present using membership operators. Print the results.</p>

<pre><code>
numbers = [10, 20, 30, 40, 50]

print(30 in numbers)
print(60 in numbers)
print(60 not in numbers)
</code></pre>
</section` },
{ id: "arrays" , title: 'Arrays', content:
`<section id="arrays">
<h2>Arrays</h2>
<p>Arrays are a collection of items stored at contiguous memory locations. They are similar to lists but can store only one type of data. Python does not have a built-in array data structure, but you can use the <code>array</code> module to create and manipulate arrays.</p>

<h3>Creating Arrays</h3>
<p>To create an array, you need to import the <code>array</code> module and specify the type code for the array. The type code specifies the type of elements the array can hold.</p>
<p>Example:</p>
<pre><code>
import array

# Create an array of integers
arr = array.array('i', [1, 2, 3, 4, 5])

print(arr)  # Output: array('i', [1, 2, 3, 4, 5])
</code></pre>
<p><strong>Explanation:</strong> The <code>array.array</code> function creates an array. The first argument is the type code ('i' for integers), and the second argument is a list of initial elements.</p>

<p><strong>Assignment:</strong> Write a program that creates an array of floating-point numbers and prints it.</p>

<pre><code>
import array

# Create an array of floats
arr = array.array('f', [1.1, 2.2, 3.3, 4.4, 5.5])

print(arr)  # Output: array('f', [1.1, 2.2, 3.3, 4.4, 5.5])
</code></pre>

<h3>Accessing Array Elements</h3>
<p>You can access array elements using their index. The index of the first element is 0.</p>
<p>Example:</p>
<pre><code>
import array

# Create an array of integers
arr = array.array('i', [1, 2, 3, 4, 5])

# Access elements by index
print(arr[0])  # Output: 1
print(arr[2])  # Output: 3
</code></pre>
<p><strong>Explanation:</strong> You can access elements of an array using square brackets and the index of the element you want to access.</p>

<p><strong>Assignment:</strong> Write a program that creates an array of strings and prints each element using a loop.</p>

<pre><code>
import array

# Create an array of characters
arr = array.array('u', 'hello')

# Access elements by index
for i in range(len(arr)):
    print(arr[i])
</code></pre>

<h3>Modifying Array Elements</h3>
<p>You can modify array elements by accessing them through their index and assigning a new value.</p>
<p>Example:</p>
<pre><code>
import array

# Create an array of integers
arr = array.array('i', [1, 2, 3, 4, 5])

# Modify elements
arr[1] = 20
arr[3] = 40

print(arr)  # Output: array('i', [1, 20, 3, 40, 5])
</code></pre>
<p><strong>Explanation:</strong> You can modify elements of an array by assigning new values to specific indexes.</p>

<p><strong>Assignment:</strong> Write a program that creates an array of floating-point numbers, modifies some elements, and prints the modified array.</p>

<pre><code>
import array

# Create an array of floats
arr = array.array('f', [1.1, 2.2, 3.3, 4.4, 5.5])

# Modify elements
arr[0] = 10.1
arr[4] = 50.5

print(arr)  # Output: array('f', [10.1, 2.2, 3.3, 4.4, 50.5])
</code></pre>

<h3>Appending and Extending Arrays</h3>
<p>You can add elements to an array using the <code>append()</code> and <code>extend()</code> methods.</p>
<p>Example:</p>
<pre><code>
import array

# Create an array of integers
arr = array.array('i', [1, 2, 3])

# Append a single element
arr.append(4)
print(arr)  # Output: array('i', [1, 2, 3, 4])

# Extend the array with another array
arr.extend([5, 6, 7])
print(arr)  # Output: array('i', [1, 2, 3, 4, 5, 6, 7])
</code></pre>
<p><strong>Explanation:</strong> The <code>append()</code> method adds a single element to the end of the array. The <code>extend()</code> method adds all elements of an iterable to the end of the array.</p>

<p><strong>Assignment:</strong> Write a program that creates an array of integers, appends new elements, and extends it with another array. Print the final array.</p>

<pre><code>
import array

# Create an array of integers
arr = array.array('i', [1, 2, 3])

# Append a single element
arr.append(4)
print(f"After append: {arr}")

# Extend the array with another array
arr.extend([5, 6, 7])
print(f"After extend: {arr}")
</code></pre>

<h3>Inserting and Removing Elements</h3>
<p>You can insert elements at a specific position using the <code>insert()</code> method and remove elements using the <code>remove()</code> and <code>pop()</code> methods.</p>
<p>Example:</p>
<pre><code>
import array

# Create an array of integers
arr = array.array('i', [1, 2, 3, 5])

# Insert an element at a specific position
arr.insert(3, 4)
print(arr)  # Output: array('i', [1, 2, 3, 4, 5])

# Remove an element by value
arr.remove(2)
print(arr)  # Output: array('i', [1, 3, 4, 5])

# Remove and return the last element
last_element = arr.pop()
print(last_element)  # Output: 5
print(arr)  # Output: array('i', [1, 3, 4])
</code></pre>
<p><strong>Explanation:</strong> The <code>insert()</code> method inserts an element at a specified position. The <code>remove()</code> method removes the first occurrence of a specified value. The <code>pop()</code> method removes and returns the last element of the array.</p>

<p><strong>Assignment:</strong> Write a program that creates an array of characters, inserts a new character at a specific position, removes a character by value, and prints the modified array.</p>

<pre><code>
import array

# Create an array of characters
arr = array.array('u', 'hello')

# Insert a character at a specific position
arr.insert(1, 'a')
print(f"After insert: {arr}")

# Remove a character by value
arr.remove('l')
print(f"After remove: {arr}")
</code></pre>

<h3>Array Slicing</h3>
<p>Array slicing allows you to access a subset of elements in an array. You can use the colon operator to specify the start, stop, and step of the slice.</p>
<p>Example:</p>
<pre><code>
import array

# Create an array of integers
arr = array.array('i', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# Access a subset of elements
print(arr[2:5])  # Output: array('i', [3, 4, 5])
print(arr[:4])   # Output: array('i', [1, 2, 3, 4])
print(arr[5:])   # Output: array('i', [6, 7, 8, 9, 10])
print(arr[::2])  # Output: array('i', [1, 3, 5, 7, 9])
</code></pre>
<p><strong>Explanation:</strong> Array slicing allows you to access elements from the start index (inclusive) to the stop index (exclusive). The step value specifies the interval between elements.</p>

<p><strong>Assignment:</strong> Write a program that creates an array of integers and demonstrates different slicing operations. Print the results.</p>

<pre><code>
import array

# Create an array of integers
arr = array.array('i', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# Demonstrate slicing operations
print(f"Slice [2:5]: {arr[2:5]}")
print(f"Slice [:4]: {arr[:4]}")
print(f"Slice [5:]: {arr[5:]}")
print(f"Slice [::2]: {arr[::2]}")
</code></pre>

<h3>Array Methods</h3>
<p>Arrays have various methods that you can use to perform operations like searching, counting, and reversing elements.</p>
<p>Example:</p>
<pre><code>
import array

# Create an array of integers
arr = array.array('i', [1, 2, 3, 4, 5, 2])

# Count the occurrences of a value
count = arr.count(2)
print(f"Count of 2: {count}")  # Output: 2

# Get the index of a value
index = arr.index(3)
print(f"Index of 3: {index}")  # Output: 2

# Reverse the array
arr.reverse()
print(f"Reversed array: {arr}")  # Output: array('i', [2, 5, 4, 3, 2, 1])
</code></pre>
<p><strong>Explanation:</strong> The <code>count()</code> method counts the occurrences of a specified value in the array. The <code>index()</code> method returns the index of the first occurrence of a specified value. The <code>reverse()</code> method reverses the order of elements in the array.</p>

<p><strong>Assignment:</strong> Write a program that creates an array of integers, counts the occurrences of a specific value, finds the index of a value, and reverses the array. Print the results.</p>

<pre><code>
import array

# Create an array of integers
arr = array.array('i', [1, 2, 3, 4, 5, 2])

# Count the occurrences of a value
count = arr.count(2)
print(f"Count of 2: {count}")

# Get the index of a value
index = arr.index(4)
print(f"Index of 4: {index}")

# Reverse the array
arr.reverse()
print(f"Reversed array: {arr}")
</code></pre>

<h3>Multidimensional Arrays</h3>
<p>Multidimensional arrays can be created using lists of lists. They are often used to represent matrices or tables.</p>
<p>Example:</p>
<pre><code>
# Create a 2D array (matrix)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Access elements
print(matrix[0][0])  # Output: 1
print(matrix[1][2])  # Output: 6

# Iterate through elements
for row in matrix:
    for element in row:
        print(element, end=' ')
    print()
</code></pre>
<p><strong>Explanation:</strong> Multidimensional arrays are created using nested lists. You can access and iterate through elements using nested loops.</p>

<p><strong>Assignment:</strong> Write a program that creates a 2D array and prints its elements in matrix form. Then, modify specific elements and print the modified array.</p>

<pre><code>
# Create a 2D array (matrix)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Print elements in matrix form
for row in matrix:
    for element in row:
        print(element, end=' ')
    print()

# Modify specific elements
matrix[0][0] = 10
matrix[2][2] = 90

print("\nModified matrix:")
for row in matrix:
    for element in row:
        print(element, end=' ')
    print()
</code></pre>

</section>`},

  { id: 'control-structures', title: 'Control Structures', content: 
`<section id="control-structures">
<h2>Control Structures</h2>
<p>Control structures are used to control the flow of the program. These include if statements, loops, and more. They help in making decisions, repeating tasks, and controlling the program's execution.</p>

<h3>If Statements</h3>
<p>If statements are used to execute a block of code only if a condition is true. They help in decision-making by allowing the program to choose different paths of execution based on the conditions provided.</p>
<p>Syntax:</p>
<pre><code>
if condition:
    # code block to be executed if the condition is true
</code></pre>
<p>You can also use <code>elif</code> and <code>else</code> to handle multiple conditions:</p>
<pre><code>
if condition1:
    # code block to be executed if condition1 is true
elif condition2:
    # code block to be executed if condition2 is true
else:
    # code block to be executed if none of the conditions above are true
</code></pre>
<p>Example:</p>
<pre><code>
x = 10
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is equal to 5")
else:
    print("x is not greater than 5")
</code></pre>
<p><strong>Explanation:</strong> The code checks if <code>x</code> is greater than 5. If true, it prints the first message. If <code>x</code> equals 5, it prints the second message. Otherwise, it prints the third message. This allows the program to make decisions and execute different code blocks based on the conditions.</p>

<p><strong>Real-life example:</strong> Think of if statements as a traffic signal. If the light is green, cars can go. If the light is yellow, cars should slow down. If the light is red, cars must stop. The traffic signal directs the flow of cars based on the conditions (color of the light).</p>

<p><strong>Assignment 1:</strong> Write a program that checks if a number stored in the variable <code>y</code> is positive, negative, or zero, and prints an appropriate message for each case.</p>

<pre><code>
y = int(input("Enter a number: "))
if y > 0:
    print("The number is positive")
elif y < 0:
    print("The number is negative")
else:
    print("The number is zero")
</code></pre>

<p><strong>Assignment 2:</strong> Write a program that checks the grade of a student stored in the variable <code>grade</code>. If the grade is 90 or above, print "A". If it is between 80 and 89, print "B". If it is between 70 and 79, print "C". If it is between 60 and 69, print "D". Otherwise, print "F".</p>

<pre><code>
grade = int(input("Enter the grade: "))
if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
elif grade >= 60:
    print("D")
else:
    print("F")
</code></pre>

<h3>For Loops</h3>
<p>For loops are used to iterate over a sequence (such as a list, tuple, dictionary, set, or string). They allow you to execute a block of code multiple times, once for each item in the sequence.</p>
<p>Syntax:</p>
<pre><code>
for item in sequence:
    # code block to be executed for each item
</code></pre>
<p>Example:</p>
<pre><code>
# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
</code></pre>
<p><strong>Explanation:</strong> The loop iterates over each item in the list <code>fruits</code> and prints each fruit. This allows you to perform actions on each item in a sequence.</p>

<p><strong>Real-life example:</strong> Think of a for loop as going through a playlist of songs. You play each song one by one until you reach the end of the playlist.</p>

<p><strong>Assignment 1:</strong> Write a program that prints each character of a string stored in the variable <code>word</code> on a new line.</p>

<pre><code>
word = "Python"
for char in word:
    print(char)
</code></pre>

<p><strong>Assignment 2:</strong> Write a program that iterates through the numbers 1 to 10 and prints whether each number is odd or even.</p>

<pre><code>
for i in range(1, 11):
    if i % 2 == 0:
        print(f"{i} is even")
    else:
        print(f"{i} is odd")
</code></pre>

<h3>While Loops</h3>
<p>While loops are used to execute a block of code as long as a condition is true. They are useful when the number of iterations is not known beforehand.</p>
<p>Syntax:</p>
<pre><code>
while condition:
    # code block to be executed as long as the condition is true
</code></pre>
<p>Example:</p>
<pre><code>
# Example of while loop
count = 0
while count < 5:
    print(count)
    count += 1
</code></pre>
<p><strong>Explanation:</strong> The loop continues to execute as long as <code>count</code> is less than 5. The value of <code>count</code> is printed and then incremented by 1 in each iteration. This allows for repeated execution of a block of code while a condition remains true.</p>

<p><strong>Real-life example:</strong> Think of a while loop as waiting for a condition to be met, like waiting for water to boil. You keep checking the temperature until it reaches 100°C, then you stop.</p>

<p><strong>Assignment 1:</strong> Write a program that keeps asking the user for input and prints it until the user types "stop".</p>

<pre><code>
user_input = ""
while user_input != "stop":
    user_input = input("Enter something (type 'stop' to end): ")
    print(user_input)
</code></pre>

<p><strong>Assignment 2:</strong> Write a program that calculates the sum of numbers entered by the user until they enter 0. Print the total sum after the loop ends.</p>

<pre><code>
total_sum = 0
number = int(input("Enter a number (0 to end): "))

while number != 0:
    total_sum += number
    number = int(input("Enter a number (0 to end): "))

print(f"Total sum: {total_sum}")
</code></pre>

<h3>Nested Loops</h3>
<p>Nested loops are loops inside other loops. This allows you to perform more complex iterations, such as iterating over multi-dimensional data structures.</p>
<p>Syntax:</p>
<pre><code>
for outer_item in outer_sequence:
    for inner_item in inner_sequence:
        # code block to be executed for each combination of outer_item and inner_item
</code></pre>
<p>Example:</p>
<pre><code>
# Example of nested loops
for i in range(3):
    for j in range(2):
        print(f"i = {i}, j = {j}")
</code></pre>
<p><strong>Explanation:</strong> The outer loop runs 3 times, and for each iteration of the outer loop, the inner loop runs 2 times. This results in a total of 6 print statements, showing the values of <code>i</code> and <code>j</code>. Nested loops are useful for tasks that require a combination of two or more sequences.</p>

<p><strong>Real-life example:</strong> Think of nested loops as a clock. The outer loop represents the hour hand, and the inner loop represents the minute hand. For each hour, the minute hand goes through all 60 minutes.</p>

<p><strong>Assignment 1:</strong> Write a program that prints a multiplication table for numbers 1 to 5.</p>

<pre><code>
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i} x {j} = {i * j}")
    print("-----------")
</code></pre>

<p><strong>Assignment 2:</strong> Write a program that prints a pattern of stars like this:</p>
<pre><code>
*
**
***
****
*****
</code></pre>

<pre><code>
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()
</code></pre>

<h3>Break and Continue Statements</h3>
<p>The <code>break</code> statement is used to exit a loop prematurely. The <code>continue</code> statement is used to skip the current iteration and continue with the next iteration.</p>
<p>Break Example:</p>
<pre><code>
for i in range(10):
    if i == 5:
        break
    print(i)
</code></pre>
<p><strong>Explanation:</strong> The loop runs from 0 to 9, but the <code>break</code> statement exits the loop when <code>i</code> equals 5, so only numbers 0 to 4 are printed.</p>

<p>Continue Example:</p>
<pre><code>
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)
</code></pre>
<p><strong>Explanation:</strong> The loop runs from 0 to 9, but the <code>continue</code> statement skips the current iteration if <code>i</code> is even, so only odd numbers are printed.</p>

<p><strong>Real-life example:</strong> Think of the <code>break</code> statement as a fire drill in a school. If the alarm rings (condition is met), everyone exits the building immediately (loop is exited). Think of the <code>continue</code> statement as skipping a step in a recipe. If you don't like a particular ingredient (condition is met), you skip that step and continue with the next.</p>

<p><strong>Assignment 1:</strong> Write a program that prints numbers from 1 to 10, but stops if it encounters a number greater than 7, and skips even numbers.</p>

<pre><code>
for i in range(1, 11):
    if i > 7:
        break
    if i % 2 == 0:
        continue
    print(i)
</code></pre>

<p><strong>Assignment 2:</strong> Write a program that iterates through the numbers 1 to 10 and prints the numbers. If a number is divisible by 3, it should not be printed.</p>

<pre><code>
for i in range(1, 11):
    if i % 3 == 0:
        continue
    print(i)
</code></pre>

<h3>Else Clause with Loops</h3>
<p>Python allows an optional <code>else</code> clause with loops. The <code>else</code> block is executed when the loop completes normally (without encountering a <code>break</code> statement).</p>
<p>Syntax:</p>
<pre><code>
for item in sequence:
    # code block
else:
    # code block to be executed when the loop completes normally
</code></pre>
<p>For Loop Example:</p>
<pre><code>
for i in range(5):
    print(i)
else:
    print("Loop completed without break")
</code></pre>
<p><strong>Explanation:</strong> The loop runs from 0 to 4, and then the <code>else</code> block is executed because the loop completed normally without encountering a <code>break</code> statement.</p>

<p>While Loop Example:</p>
<pre><code>
count = 0
while count < 5:
    print(count)
    count += 1
else:
    print("Loop completed without break")
</code></pre>
<p><strong>Explanation:</strong> The loop runs while <code>count</code> is less than 5, and then the <code>else</code> block is executed because the loop completed normally without encountering a <code>break</code> statement.</p>

<p><strong>Real-life example:</strong> Think of the <code>else</code> clause with loops as completing a homework assignment. If you complete all the problems (loop runs normally), you get a reward (else block). If you stop before finishing (break statement), you do not get the reward.</p>

<p><strong>Assignment 1:</strong> Write a program that iterates through numbers 1 to 5, prints them, and after the loop completes, print "Finished loop without break". If a number is greater than 4, use <code>break</code> to exit the loop early.</p>

<pre><code>
for i in range(1, 6):
    if i > 4:
        break
    print(i)
else:
    print("Finished loop without break")
</code></pre>

<p><strong>Assignment 2:</strong> Write a program that iterates through the letters of a string and prints them. If it encounters the letter 'e', it should exit the loop. If it completes the loop without encountering 'e', it should print "Completed without finding 'e'".</p>

<pre><code>
word = "hello"
for letter in word:
    if letter == 'e':
        break
    print(letter)
else:
    print("Completed without finding 'e'")
</code></pre>

<h3>Pass Statement</h3>
<p>The <code>pass</code> statement is a null operation; it does nothing. It is used as a placeholder for future code.</p>
<p>Syntax:</p>
<pre><code>
if condition:
    pass  # placeholder for future code
</code></pre>
<p>Example:</p>
<pre><code>
for i in range(5):
    if i == 3:
        pass  # Placeholder for future code
    print(i)
</code></pre>
<p><strong>Explanation:</strong> The loop runs from 0 to 4. When <code>i</code> equals 3, the <code>pass</code> statement is executed, doing nothing, and the loop continues to print the value of <code>i</code>. The <code>pass</code> statement is useful as a placeholder when you are planning to add code later but want to maintain the structure of the program.</p>

<p><strong>Real-life example:</strong> Think of the <code>pass</code> statement as a bookmark in a book. It doesn't add any content but marks where you need to add or continue reading later.</p>

<p><strong>Assignment:</strong> Write a program that iterates through numbers 0 to 4 and uses <code>pass</code> when the number is 2. For other numbers, print the number.</p>

<pre><code>
for i in range(5):
    if i == 2:
        pass  # Placeholder for future code
    else:
        print(i)
</code></pre>

<h3>Try-Except Block</h3>
<p>The <code>try</code> block lets you test a block of code for errors. The <code>except</code> block lets you handle the error. This is useful for handling exceptions and preventing the program from crashing due to unexpected errors.</p>
<p>Syntax:</p>
<pre><code>
try:
    # code block that may raise an exception
except ExceptionType:
    # code block to handle the exception
</code></pre>
<p>Example:</p>
<pre><code>
try:
    # Code that may raise an exception
    x = 10 / 0
except ZeroDivisionError:
    # Code to handle the exception
    print("Cannot divide by zero")
</code></pre>
<p><strong>Explanation:</strong> The <code>try</code> block contains code that may raise an exception. If a <code>ZeroDivisionError</code> occurs, the <code>except</code> block is executed, printing an error message. This prevents the program from crashing and allows for graceful error handling.</p>

<pre><code>
try:
    # Code that may raise an exception
    result = int("abc")
except ValueError as e:
    # Code to handle the exception
    print(f"ValueError: {e}")
</code></pre>
<p><strong>Explanation:</strong> The <code>try</code> block contains code that may raise a <code>ValueError</code> when attempting to convert a string to an integer. If the exception occurs, the <code>except</code> block is executed, printing an error message along with the exception details.</p>

<p><strong>Real-life example:</strong> Think of a try-except block as a safety net. If you are performing a task that may fail (like trying to open a locked door), you can have a backup plan (catching the exception) to handle the failure gracefully (trying a different door).</p>

<p><strong>Assignment 1:</strong> Write a program that prompts the user to enter a number. If the user enters a non-numeric value, handle the exception and print "Invalid input. Please enter a number."</p>

<pre><code>
try:
    user_input = int(input("Enter a number: "))
    print(f"You entered: {user_input}")
except ValueError:
    print("Invalid input. Please enter a number.")
</code></pre>

<p><strong>Assignment 2:</strong> Write a program that tries to open a file called <code>data.txt</code> and read its content. If the file does not exist, handle the exception and print "File not found".</p>

<pre><code>
try:
    with open('data.txt', 'r') as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("File not found")
</code></pre>


</section>` },
  { id: 'functions', title: 'Functions', content: 
`<section id="functions">
<h2>Functions</h2>
<p>Functions are blocks of code that only run when they are called. They help organize code, make it reusable, and improve readability. Functions can accept parameters and return values.</p>

<h3>Defining Functions</h3>
<p>To define a function, use the <code>def</code> keyword, followed by the function name and parentheses. Inside the parentheses, you can specify parameters.</p>
<p>Syntax:</p>
<pre><code>
def function_name(parameters):
    # code block
    return result  # Optional
</code></pre>
<p>Example:</p>
<pre><code>
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
print(greet("Bob"))
</code></pre>
<p><strong>Explanation:</strong> The function <code>greet</code> takes a parameter <code>name</code> and returns a greeting message. The <code>print</code> statements call the function with different arguments, and the returned values are printed.</p>

<p><strong>Real-life example:</strong> Think of a function as a recipe. You have a set of ingredients (parameters) and a set of instructions (code block) to follow. When you follow the recipe (call the function), you get a dish (return value).</p>

<p><strong>Assignment 1:</strong> Write a function called <code>add_numbers</code> that takes two parameters and returns their sum. Call the function with different sets of numbers and print the results.</p>

<pre><code>
def add_numbers(a, b):
    return a + b

print(add_numbers(3, 5))  # Output: 8
print(add_numbers(-2, 7))  # Output: 5
</code></pre>

<p><strong>Assignment 2:</strong> Write a function called <code>convert_to_fahrenheit</code> that takes a Celsius temperature as a parameter and returns the equivalent Fahrenheit temperature. Call the function with different temperatures and print the results.</p>

<pre><code>
def convert_to_fahrenheit(celsius):
    return celsius * 9/5 + 32

print(convert_to_fahrenheit(0))    # Output: 32.0
print(convert_to_fahrenheit(25))   # Output: 77.0
</code></pre>

<h3>Function Parameters</h3>
<p>Functions can take parameters, which are specified in the parentheses of the function definition. Parameters allow you to pass data to functions.</p>
<p>Example:</p>
<pre><code>
def multiply(a, b):
    return a * b

print(multiply(4, 5))  # Output: 20
print(multiply(7, 3))  # Output: 21
</code></pre>
<p><strong>Explanation:</strong> The function <code>multiply</code> takes two parameters, <code>a</code> and <code>b</code>, and returns their product. The <code>print</code> statements call the function with different arguments and print the results.</p>

<p><strong>Real-life example:</strong> Think of function parameters as inputs to a machine. The machine processes the inputs and produces an output based on the inputs provided.</p>

<p><strong>Assignment 1:</strong> Write a function called <code>subtract_numbers</code> that takes two parameters and returns their difference. Call the function with different sets of numbers and print the results.</p>

<pre><code>
def subtract_numbers(a, b):
    return a - b

print(subtract_numbers(10, 4))  # Output: 6
print(subtract_numbers(5, 9))   # Output: -4
</code></pre>

<p><strong>Assignment 2:</strong> Write a function called <code>calculate_area</code> that takes the length and width of a rectangle as parameters and returns the area. Call the function with different sets of dimensions and print the results.</p>

<pre><code>
def calculate_area(length, width):
    return length * width

print(calculate_area(5, 3))  # Output: 15
print(calculate_area(7, 2))  # Output: 14
</code></pre>

<h3>Default Parameters</h3>
<p>You can define default values for function parameters. If a default parameter is not provided when the function is called, the default value is used.</p>
<p>Example:</p>
<pre><code>
def greet(name="Guest"):
    return f"Hello, {name}!"

print(greet())         # Output: Hello, Guest!
print(greet("Alice"))  # Output: Hello, Alice!
</code></pre>
<p><strong>Explanation:</strong> The function <code>greet</code> has a default parameter <code>name</code> with a default value of "Guest". When the function is called without an argument, the default value is used.</p>

<p><strong>Real-life example:</strong> Think of default parameters as preset values on a microwave. If you don't specify a time, the microwave uses a default setting.</p>

<p><strong>Assignment 1:</strong> Write a function called <code>divide_numbers</code> that takes two parameters and returns their division. The second parameter should have a default value of 1. Call the function with different sets of numbers and print the results.</p>

<pre><code>
def divide_numbers(a, b=1):
    return a / b

print(divide_numbers(10))     # Output: 10.0
print(divide_numbers(10, 2))  # Output: 5.0
</code></pre>

<p><strong>Assignment 2:</strong> Write a function called <code>calculate_discount</code> that takes a price and a discount percentage as parameters. The discount percentage should have a default value of 10%. The function should return the price after applying the discount. Call the function with different sets of prices and print the results.</p>

<pre><code>
def calculate_discount(price, discount=10):
    return price * (1 - discount / 100)

print(calculate_discount(100))       # Output: 90.0
print(calculate_discount(100, 20))   # Output: 80.0
</code></pre>

<h3>Keyword Arguments</h3>
<p>Keyword arguments allow you to specify arguments by their parameter names when calling a function. This makes the function call more readable and allows you to provide arguments in any order.</p>
<p>Example:</p>
<pre><code>
def describe_person(name, age, city):
    return f"{name} is {age} years old and lives in {city}."

print(describe_person(name="Alice", age=30, city="New York"))
print(describe_person(city="Los Angeles", name="Bob", age=25))
</code></pre>
<p><strong>Explanation:</strong> The function <code>describe_person</code> takes three parameters. Keyword arguments are used to specify the arguments by their parameter names, making the function call more readable.</p>

<p><strong>Real-life example:</strong> Think of keyword arguments as labeling containers in a pantry. You can find and use items easily because they are clearly labeled.</p>

<p><strong>Assignment 1:</strong> Write a function called <code>format_address</code> that takes three parameters: <code>street</code>, <code>city</code>, and <code>postal_code</code>. Use keyword arguments to call the function with different addresses and print the results.</p>

<pre><code>
def format_address(street, city, postal_code):
    return f"{street}, {city}, {postal_code}"

print(format_address(street="123 Main St", city="New York", postal_code="10001"))
print(format_address(postal_code="90210", city="Beverly Hills", street="456 Elm St"))
</code></pre>

<p><strong>Assignment 2:</strong> Write a function called <code>calculate_bmi</code> that takes <code>weight</code> (in kg) and <code>height</code> (in meters) as parameters. Use keyword arguments to call the function and print the BMI values. The BMI is calculated as weight divided by the square of the height.</p>

<pre><code>
def calculate_bmi(weight, height):
    return weight / (height ** 2)

print(calculate_bmi(weight=70, height=1.75))  # Output: 22.86
print(calculate_bmi(height=1.6, weight=60))   # Output: 23.44
</code></pre>

<h3>Arbitrary Arguments</h3>
<p>Sometimes, you may not know how many arguments will be passed to a function. You can use <code>*args</code> to accept an arbitrary number of positional arguments and <code>**kwargs</code> to accept an arbitrary number of keyword arguments.</p>
<p>Example (Positional Arguments):</p>
<pre><code>
def sum_numbers(*args):
    return sum(args)

print(sum_numbers(1, 2, 3))        # Output: 6
print(sum_numbers(4, 5, 6, 7, 8))  # Output: 30
</code></pre>
<p><strong>Explanation:</strong> The function <code>sum_numbers</code> accepts an arbitrary number of positional arguments using <code>*args</code> and returns their sum.</p>

<p>Example (Keyword Arguments):</p>
<pre><code>
def print_details(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_details(name="Alice", age=30, city="New York")
print_details(name="Bob", profession="Developer")
</code></pre>
<p><strong>Explanation:</strong> The function <code>print_details</code> accepts an arbitrary number of keyword arguments using <code>**kwargs</code> and prints each key-value pair.</p>

<p><strong>Real-life example:</strong> Think of <code>*args</code> as bringing any number of friends to a party without specifying the exact number. Think of <code>**kwargs</code> as bringing items with labels (like food dishes with names) to a potluck.</p>

<p><strong>Assignment 1:</strong> Write a function called <code>calculate</code> that accepts an arbitrary number of numbers and returns their product. Use <code>*args</code> to accept the numbers. Call the function with different sets of numbers and print the results.</p>

<pre><code>
def calculate(*args):
    product = 1
    for num in args:
        product *= num
    return product

print(calculate(2, 3, 4))      # Output: 24
print(calculate(1, 5, 7, 9))   # Output: 315
</code></pre>

<p><strong>Assignment 2:</strong> Write a function called <code>describe_student</code> that accepts arbitrary keyword arguments representing a student's details (name, age, grade, etc.). Use <code>**kwargs</code> to accept the details and print them. Call the function with different sets of details and print the results.</p>

<pre><code>
def describe_student(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

describe_student(name="John", age=15, grade="10th")
describe_student(name="Emma", age=17, grade="12th", city="New York")
</code></pre>

<h3>Lambda Functions</h3>
<p>Lambda functions are small anonymous functions defined using the <code>lambda</code> keyword. They can have any number of arguments but only one expression.</p>
<p>Syntax:</p>
<pre><code>
lambda arguments: expression
</code></pre>
<p>Example:</p>
<pre><code>
# Regular function
def add(a, b):
    return a + b

# Lambda function
add = lambda a, b: a + b

print(add(3, 5))  # Output: 8
</code></pre>
<p><strong>Explanation:</strong> The lambda function <code>add</code> performs the same operation as the regular function but is defined in a single line. Lambda functions are often used for short, simple operations.</p>

<p><strong>Real-life example:</strong> Think of a lambda function as a quick, one-time use tool like a sticky note. It’s not meant to be kept for long-term use but serves a specific, immediate purpose.</p>

<p><strong>Assignment 1:</strong> Write a lambda function that takes a number and returns its square. Call the function with different numbers and print the results.</p>

<pre><code>
square = lambda x: x ** 2

print(square(4))   # Output: 16
print(square(7))   # Output: 49
</code></pre>

<p><strong>Assignment 2:</strong> Write a lambda function that takes two strings and returns their concatenation. Call the function with different strings and print the results.</p>

<pre><code>
concat = lambda a, b: a + " " + b

print(concat("Hello", "World"))  # Output: "Hello World"
print(concat("Python", "Programming"))  # Output: "Python Programming"
</code></pre>

</section>` },
  { id: 'oop', title: 'Object-Oriented Programming', content: 
`<section id="oop">
<h2>Object-Oriented Programming</h2>
<p>Python supports object-oriented programming (OOP), which is a programming paradigm based on the concept of "objects". Objects are instances of classes, which can contain data (attributes) and methods (functions) to manipulate that data. OOP helps in organizing complex code and makes it more reusable and maintainable.</p>

<h3>Classes and Objects</h3>
<p>A class is a blueprint for creating objects. Each object is an instance of a class. Classes define attributes (data) and methods (functions) that the objects created from the class can use.</p>
<p>Real-life example: Think of a class as a blueprint for a car. The blueprint defines properties like color, make, and model, and actions like start, stop, and drive. Each car built from this blueprint is an object of the Car class.</p>
<p>Syntax:</p>
<pre><code>
class ClassName:
    def __init__(self, parameters):
        # Initialize attributes
    def method_name(self):
        # Method implementation
</code></pre>
<p>Example:</p>
<pre><code>
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} is barking."

dog1 = Dog("Buddy", 3)
print(dog1.bark())
</code></pre>
<p><strong>Explanation:</strong> The class <code>Dog</code> has an <code>__init__</code> method, which initializes the <code>name</code> and <code>age</code> attributes. The <code>bark</code> method returns a string indicating that the dog is barking. An instance of the class is created with the name "Buddy" and age 3, and the <code>bark</code> method is called.</p>

<p><strong>Assignment 1:</strong> Create a class called <code>Car</code> with attributes <code>make</code>, <code>model</code>, and <code>year</code>. Add a method called <code>start_engine</code> that returns a string indicating that the car's engine has started. Create an instance of the class and call the <code>start_engine</code> method.</p>

<pre><code>
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start_engine(self):
        return f"The {self.year} {self.make} {self.model} engine is starting."

car1 = Car("Toyota", "Corolla", 2020)
print(car1.start_engine())
</code></pre>

<p><strong>Assignment 2:</strong> Create a class called <code>Book</code> with attributes <code>title</code>, <code>author</code>, and <code>pages</code>. Add a method called <code>description</code> that returns a string describing the book. Create an instance of the class and call the <code>description</code> method.</p>

<pre><code>
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def description(self):
        return f"'{self.title}' by {self.author}, {self.pages} pages"

book1 = Book("1984", "George Orwell", 328)
print(book1.description())
</code></pre>

<h3>Inheritance</h3>
<p>Inheritance allows a class (child class) to inherit attributes and methods from another class (parent class). This promotes code reuse and establishes a hierarchical relationship between classes.</p>
<p>Real-life example: Consider a base class Vehicle that has general attributes and methods like speed and drive. A Car class and a Bike class can inherit from Vehicle, each adding specific features unique to cars and bikes, respectively.</p>
<p>Syntax:</p>
<pre><code>
class DerivedClass(BaseClass):
    # Additional attributes and methods
</code></pre>
<p>Example:</p>
<pre><code>
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclasses must implement this method")

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")
print(dog.speak())
print(cat.speak())
</code></pre>
<p><strong>Explanation:</strong> The class <code>Animal</code> is the parent class with a method <code>speak</code> that raises a <code>NotImplementedError</code>. The classes <code>Dog</code> and <code>Cat</code> inherit from <code>Animal</code> and implement the <code>speak</code> method. Instances of <code>Dog</code> and <code>Cat</code> call their respective <code>speak</code> methods.</p>

<p><strong>Assignment 1:</strong> Create a base class called <code>Shape</code> with a method <code>area</code> that raises a <code>NotImplementedError</code>. Create a subclass called <code>Rectangle</code> that inherits from <code>Shape</code> and implements the <code>area</code> method to return the area of the rectangle. Create an instance of <code>Rectangle</code> and call the <code>area</code> method.</p>

<pre><code>
class Shape:
    def area(self):
        raise NotImplementedError("Subclasses must implement this method")

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

rect = Rectangle(5, 3)
print(rect.area())  # Output: 15
</code></pre>

<p><strong>Assignment 2:</strong> Create a base class called <code>Employee</code> with attributes <code>name</code> and <code>salary</code>. Add a method <code>work</code> that raises a <code>NotImplementedError</code>. Create subclasses <code>Developer</code> and <code>Designer</code> that inherit from <code>Employee</code> and implement the <code>work</code> method. Create instances of each subclass and call their <code>work</code> methods.</p>

<pre><code>
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def work(self):
        raise NotImplementedError("Subclasses must implement this method")

class Developer(Employee):
    def work(self):
        return f"{self.name} is writing code."

class Designer(Employee):
    def work(self):
        return f"{self.name} is designing graphics."

dev = Developer("Alice", 70000)
des = Designer("Bob", 65000)
print(dev.work())
print(des.work())
</code></pre>

<h3>Encapsulation</h3>
<p>Encapsulation is the concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit or class. It restricts access to certain components to prevent accidental modification and provides a way to control how data is accessed or modified.</p>
<p>Real-life example: Consider a bank account. You can deposit and withdraw money, but you cannot directly change the account balance without going through these methods. This ensures that the balance is always updated correctly.</p>
<p>Example:</p>
<pre><code>
class Person:
    def __init__(self, name, age):
        self.name = name
        self.__age = age  # Private attribute

    def get_age(self):
        return self.__age

    def set_age(self, age):
        if 0 <= age <= 120:
            self.__age = age
        else:
            raise ValueError("Invalid age")

person = Person("Alice", 30)
print(person.get_age())
person.set_age(35)
print(person.get_age())
</code></pre>
<p><strong>Explanation:</strong> The class <code>Person</code> has a private attribute <code>__age</code>, which is accessible through the methods <code>get_age</code> and <code>set_age</code>. The <code>set_age</code> method includes validation to ensure the age is within a valid range.</p>

<p><strong>Assignment 1:</strong> Create a class called <code>BankAccount</code> with private attributes <code>balance</code> and <code>account_number</code>. Add methods to deposit and withdraw money, and to get the current balance. Ensure that withdrawals do not exceed the available balance.</p>

<pre><code>
class BankAccount:
    def __init__(self, account_number, balance=0):
        self.__account_number = account_number
        self.__balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
        else:
            raise ValueError("Insufficient funds")

    def get_balance(self):
        return self.__balance

account = BankAccount("12345678", 100)
account.deposit(50)
print(account.get_balance())  # Output: 150
account.withdraw(75)
print(account.get_balance())  # Output: 75
</code></pre>

<p><strong>Assignment 2:</strong> Create a class called <code>Student</code> with private attributes <code>name</code> and <code>grades</code>. Add methods to add a grade, get the average grade, and get the student's name. Ensure that grades are between 0 and 100.</p>

<pre><code>
class Student:
    def __init__(self, name):
        self.__name = name
        self.__grades = []

    def add_grade(self, grade):
        if 0 <= grade <= 100:
            self.__grades.append(grade)
        else:
            raise ValueError("Grade must be between 0 and 100")

    def get_average_grade(self):
        return sum(self.__grades) / len(self.__grades) if self.__grades else 0

    def get_name(self):
        return self.__name

student = Student("John")
student.add_grade(85)
student.add_grade(90)
student.add_grade(78)
print(f"{student.get_name()}'s average grade: {student.get_average_grade()}")
</code></pre>

<h3>Polymorphism</h3>
<p>Polymorphism allows methods to do different things based on the object it is acting upon. This can be achieved through method overriding or by defining methods with the same name in different classes.</p>
<p>Real-life example: Consider a base class Employee with a method work. A Developer class and a Designer class can inherit from Employee, each implementing their own version of the work method. When calling the work method on an object, the specific implementation is executed based on the object's class.</p>
<p>Example:</p>
<pre><code>
class Bird:
    def fly(self):
        return "Flying"

class Penguin(Bird):
    def fly(self):
        return "Cannot fly"

def make_bird_fly(bird):
    print(bird.fly())

sparrow = Bird()
penguin = Penguin()

make_bird_fly(sparrow)
make_bird_fly(penguin)
</code></pre>
<p><strong>Explanation:</strong> The class <code>Bird</code> has a method <code>fly</code>. The class <code>Penguin</code> inherits from <code>Bird</code> and overrides the <code>fly</code> method. The function <code>make_bird_fly</code> accepts any object that has a <code>fly</code> method and calls it, demonstrating polymorphism.</p>

<p><strong>Assignment 1:</strong> Create a base class called <code>Instrument</code> with a method <code>play</code>. Create subclasses called <code>Guitar</code> and <code>Drum</code> that inherit from <code>Instrument</code> and override the <code>play</code> method. Write a function that takes an <code>Instrument</code> object and calls its <code>play</code> method. Create instances of <code>Guitar</code> and <code>Drum</code> and pass them to the function.</p>

<pre><code>
class Instrument:
    def play(self):
        raise NotImplementedError("Subclasses must implement this method")

class Guitar(Instrument):
    def play(self):
        return "Playing the guitar"

class Drum(Instrument):
    def play(self):
        return "Playing the drums"

def play_instrument(instrument):
    print(instrument.play())

guitar = Guitar()
drum = Drum()

play_instrument(guitar)
play_instrument(drum)
</code></pre>

<p><strong>Assignment 2:</strong> Create a base class called <code>Vehicle</code> with a method <code>move</code>. Create subclasses called <code>Car</code> and <code>Bicycle</code> that inherit from <code>Vehicle</code> and override the <code>move</code> method. Write a function that takes a <code>Vehicle</code> object and calls its <code>move</code> method. Create instances of <code>Car</code> and <code>Bicycle</code> and pass them to the function.</p>

<pre><code>
class Vehicle:
    def move(self):
        raise NotImplementedError("Subclasses must implement this method")

class Car(Vehicle):
    def move(self):
        return "Driving the car"

class Bicycle(Vehicle):
    def move(self):
        return "Riding the bicycle"

def move_vehicle(vehicle):
    print(vehicle.move())

car = Car()
bicycle = Bicycle()

move_vehicle(car)
move_vehicle(bicycle)
</code></pre>

<h3>Methods vs Functions</h3>
<p>In Python, methods are functions that are defined within a class and are associated with an object. Functions, on the other hand, are independent and not tied to any object. Methods are called on an object, while functions are called on their own.</p>
<p>Real-life example: Think of a method as a specific instruction that a device (object) can perform, like a coffee machine brewing coffee. A function is a general instruction, like adding two numbers, that can be used anywhere in a program.</p>
<p>Example of a function:</p>
<pre><code>
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # Output: 8
</code></pre>
<p>Example of a method:</p>
<pre><code>
class Calculator:
    def add(self, a, b):
        return a + b

calc = Calculator()
result = calc.add(3, 5)
print(result)  # Output: 8
</code></pre>
<p><strong>Explanation:</strong> The <code>add</code> function takes two parameters and returns their sum. The <code>add</code> method does the same but is defined within the <code>Calculator</code> class and is called on an instance of the class.</p>

<p><strong>When to use methods:</strong> Use methods when you need to operate on the data contained within an object or when the operation is specific to objects of a particular class.</p>
<p><strong>When to use functions:</strong> Use functions when the operation is general and not tied to any specific object.</p>

<p><strong>Assignment:</strong> Write a class called <code>Circle</code> with an attribute <code>radius</code>. Add a method called <code>area</code> that calculates and returns the area of the circle. Also, write a standalone function that calculates the area of a circle given its radius. Compare the usage of the method and the function.</p>

<pre><code>
import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

def circle_area(radius):
    return math.pi * radius ** 2

# Using the Circle class method
circle = Circle(5)
print(circle.area())  # Output: 78.53981633974483

# Using the standalone function
print(circle_area(5))  # Output: 78.53981633974483
</code></pre>


</section>` },
  { id: 'file-handling', title: 'File Handling', content: 
`<section id="file-handling">
<h2>File Handling</h2>
<p>Python allows you to work with files to read from and write data to files. File handling is essential for tasks like storing data persistently, logging, and more. Python provides built-in functions to handle file operations in a straightforward manner.</p>

<h3>Opening and Closing Files</h3>
<p>To open a file, use the <code>open()</code> function, which returns a file object. You can specify the mode in which the file should be opened, such as read ('r'), write ('w'), append ('a'), and others. It is a good practice to close the file after performing operations on it to free up system resources.</p>
<p>Real-life example: Think of a file as a notebook. You can open the notebook to read from it or write new information. After you are done, you close the notebook.</p>
<p>Example:</p>
<pre><code>
# Opening a file
file = open('file.txt', 'w')
file.write("Hello, World!")
file.close()

# Reading from a file
file = open('file.txt', 'r')
content = file.read()
print(content)
file.close()
</code></pre>
<p><strong>Explanation:</strong> The file <code>file.txt</code> is opened in write mode ('w') to write "Hello, World!" to it, and then it is closed. The file is then opened in read mode ('r') to read the content and print it, and then it is closed.</p>

<p><strong>Assignment 1:</strong> Create a file called <code>data.txt</code> and write the text "Python is fun!" to it. Then, open the file in read mode and print its content.</p>

<pre><code>
# Writing to a file
file = open('data.txt', 'w')
file.write("Python is fun!")
file.close()

# Reading from the file
file = open('data.txt', 'r')
content = file.read()
print(content)
file.close()
</code></pre>

<h3>Using the with Statement</h3>
<p>Using the <code>with</code> statement to work with files is a best practice in Python. It ensures that the file is properly closed after its suite finishes, even if an exception is raised.</p>
<p>Real-life example: Using a <code>with</code> statement to open a file is like borrowing a book from a library. You are guaranteed to return it (close it) when you are done reading or writing.</p>
<p>Example:</p>
<pre><code>
# Writing to a file using with statement
with open('file.txt', 'w') as file:
    file.write("Hello, World!")

# Reading from a file using with statement
with open('file.txt', 'r') as file:
    content = file.read()
    print(content)
</code></pre>
<p><strong>Explanation:</strong> The <code>with</code> statement is used to open <code>file.txt</code> in write mode, write "Hello, World!" to it, and automatically close it. Similarly, the file is opened in read mode to read its content and print it, and it is automatically closed.</p>

<p><strong>Assignment 2:</strong> Using the <code>with</code> statement, write "Learning file handling in Python" to a file called <code>example.txt</code>. Then, read the content of the file and print it.</p>

<pre><code>
# Writing to a file using with statement
with open('example.txt', 'w') as file:
    file.write("Learning file handling in Python")

# Reading from the file using with statement
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)
</code></pre>

<h3>Reading and Writing Multiple Lines</h3>
<p>You can read from and write multiple lines to a file using methods like <code>readlines()</code> and <code>writelines()</code>.</p>
<p>Example:</p>
<pre><code>
# Writing multiple lines to a file
lines_to_write = ["First line\n", "Second line\n", "Third line\n"]
with open('file.txt', 'w') as file:
    file.writelines(lines_to_write)

# Reading multiple lines from a file
with open('file.txt', 'r') as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())  # strip() removes newline characters
</code></pre>
<p><strong>Explanation:</strong> The <code>writelines()</code> method writes a list of strings to <code>file.txt</code>. The <code>readlines()</code> method reads all lines from the file into a list, and a loop is used to print each line.</p>

<p><strong>Assignment 3:</strong> Create a file called <code>notes.txt</code> and write the following lines to it: "Line 1: Python\nLine 2: JavaScript\nLine 3: Java". Then, read the file line by line and print each line.</p>

<pre><code>
# Writing multiple lines to a file
lines_to_write = ["Line 1: Python\n", "Line 2: JavaScript\n", "Line 3: Java\n"]
with open('notes.txt', 'w') as file:
    file.writelines(lines_to_write)

# Reading the file line by line
with open('notes.txt', 'r') as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())
</code></pre>

<h3>Appending to a File</h3>
<p>To append data to an existing file without overwriting its content, open the file in append mode ('a').</p>
<p>Example:</p>
<pre><code>
# Appending to a file
with open('file.txt', 'a') as file:
    file.write("Appending a new line.\n")

# Reading the updated file
with open('file.txt', 'r') as file:
    content = file.read()
    print(content)
</code></pre>
<p><strong>Explanation:</strong> The file <code>file.txt</code> is opened in append mode ('a') to add a new line to its content. The file is then opened in read mode to read and print the updated content.</p>

<p><strong>Assignment 4:</strong> Create a file called <code>log.txt</code> and write "Log entry 1\n". Then, append "Log entry 2\n" and "Log entry 3\n" to the file. Finally, read and print the content of the file.</p>

<pre><code>
# Writing to a file
with open('log.txt', 'w') as file:
    file.write("Log entry 1\n")

# Appending to the file
with open('log.txt', 'a') as file:
    file.write("Log entry 2\n")
    file.write("Log entry 3\n")

# Reading the updated file
with open('log.txt', 'r') as file:
    content = file.read()
    print(content)
</code></pre>

<h3>File Modes</h3>
<p>Different modes can be used to open a file in Python:</p>
<ul>
    <li><code>'r'</code>: Read mode (default) - Opens a file for reading.</li>
    <li><code>'w'</code>: Write mode - Opens a file for writing (overwrites if the file exists).</li>
    <li><code>'a'</code>: Append mode - Opens a file for appending (creates the file if it does not exist).</li>
    <li><code>'r+'</code>: Read and write mode - Opens a file for both reading and writing.</li>
    <li><code>'b'</code>: Binary mode - Opens a file in binary mode (used for non-text files like images).</li>
</ul>
<p>Example:</p>
<pre><code>
# Example demonstrating different file modes
with open('binaryfile.bin', 'wb') as file:
    file.write(b'\x00\x01\x02\x03')

with open('binaryfile.bin', 'rb') as file:
    content = file.read()
    print(content)
</code></pre>
<p><strong>Explanation:</strong> The file <code>binaryfile.bin</code> is opened in binary write mode ('wb') to write bytes to it. The file is then opened in binary read mode ('rb') to read and print the content.</p>

<p><strong>Assignment 5:</strong> Create a binary file called <code>data.bin</code> and write the bytes <code>b'\x10\x20\x30\x40'</code> to it. Then, read and print the content of the file.</p>

<pre><code>
# Writing to a binary file
with open('data.bin', 'wb') as file:
    file.write(b'\x10\x20\x30\x40')

# Reading from the binary file
with open('data.bin', 'rb') as file:
    content = file.read()
    print(content)
</code></pre>
</section>` },
{ id: 'special-methods', title: 'Special Methods', content: 
`<section id="special-methods">
<h3>Special Methods</h3>
<p>Special methods in Python, also known as magic methods or dunder methods (short for double underscore), are predefined methods that you can use to enhance the functionality of your classes. These methods are called implicitly by Python when certain operations are performed on your objects.</p>
<p>These methods start and end with double underscores, such as <code>__init__</code>, <code>__str__</code>, <code>__repr__</code>, <code>__len__</code>, and <code>__eq__</code>.</p>

<h4>__init__</h4>
<p>The <code>__init__</code> method is the constructor method in Python. It is called when an instance (object) of the class is created.</p>
<pre><code>
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("Alice", 30)
print(person.name)  # Output: Alice
print(person.age)   # Output: 30
</code></pre>
<p><strong>Explanation:</strong> The <code>__init__</code> method initializes the object's attributes <code>name</code> and <code>age</code> when a new instance of the <code>Person</code> class is created.</p>

<h4>__str__ and __repr__</h4>
<p>The <code>__str__</code> method is called by the <code>str()</code> function and the <code>print</code> statement to get a string representation of an object. The <code>__repr__</code> method is called by the <code>repr()</code> function and the interactive interpreter to get an official string representation of an object.</p>
<pre><code>
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"Person(name={self.name}, age={self.age})"

    def __repr__(self):
        return f"Person('{self.name}', {self.age})"

person = Person("Alice", 30)
print(person)         # Output: Person(name=Alice, age=30)
print(repr(person))   # Output: Person('Alice', 30)
</code></pre>
<p><strong>Explanation:</strong> The <code>__str__</code> method provides a readable string representation of the object, while the <code>__repr__</code> method provides a more detailed and unambiguous string representation, typically useful for debugging.</p>

<h4>__len__</h4>
<p>The <code>__len__</code> method is called by the <code>len()</code> function to return the length of an object.</p>
<pre><code>
class CustomList:
    def __init__(self, items):
        self.items = items

    def __len__(self):
        return len(self.items)

my_list = CustomList([1, 2, 3, 4, 5])
print(len(my_list))  # Output: 5
</code></pre>
<p><strong>Explanation:</strong> The <code>__len__</code> method returns the length of the <code>items</code> list contained in the <code>CustomList</code> object.</p>

<h4>__eq__</h4>
<p>The <code>__eq__</code> method is called by the equality operator <code>==</code>
to compare two objects for equality.</p>

<pre><code>
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __eq__(self, other):
        return self.name == other.name and self.age == other.age

person1 = Person("Alice", 30)
person2 = Person("Alice", 30)
person3 = Person("Bob", 25)

print(person1 == person2)  # Output: True
print(person1 == person3)  # Output: False
</code></pre>
<p><strong>Explanation:</strong> The <code>__eq__</code> method checks if the <code>name</code> and <code>age</code> attributes of two <code>Person</code> objects are equal.</p>
<h4>Other Common Special Methods</h4>
<p>Here are some other commonly used special methods:</p>
<ul>
    <li><code>__lt__(self, other)</code>: Less than, called by the <code>&lt;</code> operator.</li>
    <li><code>__le__(self, other)</code>: Less than or equal to, called by the <code>&lt;=</code> operator.</li>
    <li><code>__gt__(self, other)</code>: Greater than, called by the <code>&gt;</code> operator.</li>
    <li><code>__ge__(self, other)</code>: Greater than or equal to, called by the <code>&gt;=</code> operator.</li>
    <li><code>__ne__(self, other)</code>: Not equal, called by the <code>!=</code> operator.</li>
    <li><code>__add__(self, other)</code>: Addition, called by the <code>+</code> operator.</li>
    <li><code>__sub__(self, other)</code>: Subtraction, called by the <code>-</code> operator.</li>
    <li><code>__mul__(self, other)</code>: Multiplication, called by the <code>*</code> operator.</li>
    <li><code>__truediv__(self, other)</code>: True division, called by the <code>/</code> operator.</li>
</ul>
<h4>Assignment 1</h4>
<p>Create a class called <code>Rectangle</code> with attributes <code>width</code> and <code>height</code>. Implement the <code>__str__</code>, <code>__repr__</code>, and <code>__eq__</code> methods. Test the class by creating instances and comparing them.</p>
<pre><code>
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
        def __str__(self):
    return f"Rectangle(width={self.width}, height={self.height})"

def __repr__(self):
    return f"Rectangle({self.width}, {self.height})"

def __eq__(self, other):
    return self.width == other.width and self.height == other.height
    rect1 = Rectangle(10, 20)
rect2 = Rectangle(10, 20)
rect3 = Rectangle(15, 25)

print(rect1) # Output: Rectangle(width=10, height=20)
print(repr(rect1)) # Output: Rectangle(10, 20)
print(rect1 == rect2) # Output: True
print(rect1 == rect3) # Output: False
</code></pre>

<h4>Assignment 2</h4>
<p>Create a class called <code>CustomString</code> that wraps around a regular string. Implement the <code>__len__</code>, <code>__add__</code>, and <code>__eq__</code> methods to allow length calculation, string concatenation, and comparison, respectively.</p>
<pre><code>
class CustomString:
    def __init__(self, string):
        self.string = string
        def __len__(self):
    return len(self.string)

def __add__(self, other):
    return CustomString(self.string + other.string)

def __eq__(self, other):
    return self.string == other.string

def __str__(self):
    return self.string

def __repr__(self):
    return f'CustomString("{self.string}")'
    str1 = CustomString("Hello")
    str2 = CustomString("World")
    str3 = str1 + str2
    
    print(len(str1)) # Output: 5
    print(str3) # Output: HelloWorld
    print(repr(str3)) # Output: CustomString("HelloWorld")
    print(str1 == str2) # Output: False
    print(str1 == CustomString("Hello")) # Output: True
    </code></pre>
</section>`
},
{
  id: 'data-structures-algorithms', title: 'Data Structures and Algorithms', content: `<section id='data-structures-algorithms>
  <h2>Data Structures and Algorithms</h2>
  <p>Data structures and algorithms are fundamental concepts in computer science. They help in organizing and processing data efficiently. In this section, we will cover various built-in data structures in Python, custom data structures, and common algorithms.</p>

  <h3>Built-in Data Structures</h3>
  <p>Python provides several built-in data structures, each with its own advantages and use cases. Understanding these structures is essential for writing efficient and effective Python code.</p>
  
  <h4>Lists</h4>
  <p>Lists are ordered, mutable collections of elements. They allow duplicate members.</p>
  <pre><code>
// Creating a list
fruits = ['apple', 'banana', 'cherry']

// Accessing elements
print(fruits[0])  // Output: apple

// Modifying elements
fruits[1] = 'blueberry'
print(fruits)  // Output: ['apple', 'blueberry', 'cherry']

// Adding elements
fruits.append('date')
print(fruits)  // Output: ['apple', 'blueberry', 'cherry', 'date']

// Removing elements
fruits.remove('blueberry')
print(fruits)  // Output: ['apple', 'cherry', 'date']

// List comprehension
squares = [x ** 2 for x in range(10)]
print(squares)  // Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

// Real-life example
shopping_list = ['milk', 'bread', 'eggs']
shopping_list.append('butter')
print(shopping_list)  // Output: ['milk', 'bread', 'eggs', 'butter']
  </code></pre>
  <p><strong>Explanation:</strong> Lists are like shopping lists where you can add, modify, and remove items.</p>

  <h4>Tuples</h4>
  <p>Tuples are ordered, immutable collections of elements. They allow duplicate members.</p>
  <pre><code>
// Creating a tuple
colors = ('red', 'green', 'blue')

// Accessing elements
print(colors[1])  // Output: green

// Tuples are immutable
// colors[1] = 'yellow'  // This will raise a TypeError

// Tuple packing and unpacking
person = ('John', 25, 'Engineer')
name, age, profession = person
print(name)  // Output: John
print(age)  // Output: 25
print(profession)  // Output: Engineer

// Real-life example
coordinates = (10.0, 20.0)
print(f"The coordinates are {coordinates}")  // Output: The coordinates are (10.0, 20.0)
  </code></pre>
  <p><strong>Explanation:</strong> Tuples are like geographical coordinates (latitude, longitude) which do not change.</p>

  <h4>Sets</h4>
  <p>Sets are unordered collections of unique elements. They do not allow duplicate members.</p>
  <pre><code>
// Creating a set
unique_numbers = {1, 2, 3, 4, 5}

// Adding elements
unique_numbers.add(6)
print(unique_numbers)  // Output: {1, 2, 3, 4, 5, 6}

// Removing elements
unique_numbers.remove(3)
print(unique_numbers)  // Output: {1, 2, 4, 5, 6}

// Sets do not allow duplicates
unique_numbers.add(4)
print(unique_numbers)  // Output: {1, 2, 4, 5, 6}

// Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a.union(b))        // Output: {1, 2, 3, 4, 5, 6}
print(a.intersection(b)) // Output: {3, 4}
print(a.difference(b))   // Output: {1, 2}

// Real-life example
students_in_class_A = {'John', 'Mary', 'Steve'}
students_in_class_B = {'Mary', 'Steve', 'Kevin'}
common_students = students_in_class_A.intersection(students_in_class_B)
print(common_students)  // Output: {'Mary', 'Steve'}
  </code></pre>
  <p><strong>Explanation:</strong> Sets are like collections of students in different classes where you can find common students.</p>

  <h4>Dictionaries</h4>
  <p>Dictionaries are unordered collections of key-value pairs. Keys must be unique and immutable, while values can be of any data type.</p>
  <pre><code>
// Creating a dictionary
student = {
'name': 'John Doe',
'age': 20,
'courses': ['Math', 'Science']
}

// Accessing values
print(student['name'])  // Output: John Doe

// Modifying values
student['age'] = 21
print(student)  // Output: {'name': 'John Doe', 'age': 21, 'courses': ['Math', 'Science']}

// Adding key-value pairs
student['grade'] = 'A'
print(student)  // Output: {'name': 'John Doe', 'age': 21, 'courses': ['Math', 'Science'], 'grade': 'A'}

// Removing key-value pairs
del student['courses']
print(student)  // Output: {'name': 'John Doe', 'age': 21, 'grade': 'A'}

// Dictionary comprehension
squares = {x: x ** 2 for x in range(6)}
print(squares)  // Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

// Real-life example
phone_book = {
'Alice': '123-456-7890',
'Bob': '987-654-3210'
}
print(phone_book['Alice'])  // Output: 123-456-7890
  </code></pre>
  <p><strong>Explanation:</strong> Dictionaries are like phone books where you can look up phone numbers by name.</p>

  <h3>Custom Data Structures</h3>
  <p>Sometimes, built-in data structures are not sufficient for certain tasks. In such cases, you can create custom data structures.</p>
  
  <h4>Linked List</h4>
  <pre><code>
class Node:
def __init__(self, data=None):
  self.data = data
  self.next = None

class LinkedList:
def __init__(self):
  self.head = None

def insert(self, data):
  new_node = Node(data)
  if self.head is None:
      self.head = new_node
  else:
      current = self.head
      while current.next:
          current = current.next
      current.next = new_node

def display(self):
  elements = []
  current = self.head
  while current:
      elements.append(current.data)
      current = current.next
  print(elements)

# Usage
ll = LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.display()  // Output: [1, 2, 3]
  </code></pre>
  <p><strong>Explanation:</strong> A linked list is a linear data structure where each element points to the next. It's like a chain of elements where you can traverse from one element to the next.</p>

  <h4>Stack</h4>
  <pre><code>
class Stack:
def __init__(self):
  self.items = []

def push(self, item):
  self.items.append(item)

def pop(self):
  if not self.is_empty():
      return self.items.pop()

def is_empty(self):
  return len(self.items) == 0

def peek(self):
  if not self.is_empty():
      return self.items[-1]

def size(self):
  return len(self.items)

# Usage
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.pop())  # Output: 3
print(stack.peek()) # Output: 2
print(stack.size()) # Output: 2
  </code></pre>
  <p><strong>Explanation:</strong> A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. It's like a stack of plates where you can only take the top plate.</p>

  <h4>Queue</h4>
  <pre><code>
class Queue:
def __init__(self):
  self.items = []

def enqueue(self, item):
  self.items.insert(0, item)

def dequeue(self):
  if not self.is_empty():
      return self.items.pop()

def is_empty(self):
  return len(self.items) == 0

def size(self):
  return len(self.items)

# Usage
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(queue.dequeue())  # Output: 1
print(queue.size())     # Output: 2
  </code></pre>
  <p><strong>Explanation:</strong> A queue is a linear data structure that follows the First In, First Out (FIFO) principle. It's like a queue of people where the first person in line is the first to be served.</p>

  <h3>Common Algorithms</h3>
  <p>Algorithms are step-by-step procedures or formulas for solving problems. Here are some common algorithms:</p>
  
  <h4>Sorting Algorithms</h4>
  <p>Sorting algorithms arrange the elements of a list in a certain order (usually ascending or descending).</p>
  
  <h5>Bubble Sort</h5>
  <pre><code>
def bubble_sort(arr):
n = len(arr)
for i in range(n):
  for j in range(0, n-i-1):
      if arr[j] > arr[j+1]:
          arr[j], arr[j+1] = arr[j+1], arr[j]

# Usage
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print("Sorted array is:", arr)  # Output: Sorted array is: [11, 12, 22, 25, 34, 64, 90]
  </code></pre>
  <p><strong>Explanation:</strong> Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted.</p>

  <h5>Quick Sort</h5>
  <pre><code>
def quick_sort(arr):
if len(arr) <= 1:
  return arr
pivot = arr[len(arr) // 2]
left = [x for x in arr if x < pivot]
middle = [x for x in arr if x == pivot]
right = [x for x in arr if x > pivot]
return quick_sort(left) + middle + quick_sort(right)

# Usage
arr = [3, 6, 8, 10, 1, 2, 1]
print("Sorted array is:", quick_sort(arr))  # Output: Sorted array is: [1, 1, 2, 3, 6, 8, 10]
  </code></pre>
  <p><strong>Explanation:</strong> Quick Sort selects a pivot element and partitions the array into three sub-arrays: elements less than the pivot, elements equal to the pivot, and elements greater than the pivot. It then recursively sorts the sub-arrays.</p>

  <h4>Search Algorithms</h4>
  <p>Search algorithms are used to find an element in a data structure.</p>
  
  <h5>Linear Search</h5>
  <pre><code>
def linear_search(arr, target):
for i in range(len(arr)):
  if arr[i] == target:
      return i
return -1

# Usage
arr = [2, 3, 4, 10, 40]
target = 10
result = linear_search(arr, target)
print("Element found at index:", result)  # Output: Element found at index: 3
  </code></pre>
  <p><strong>Explanation:</strong> Linear Search sequentially checks each element of the list until the target element is found or the list ends.</p>

  <h5>Binary Search</h5>
  <pre><code>
def binary_search(arr, target):
low = 0
high = len(arr) - 1
mid = 0

while low <= high:
  mid = (high + low) // 2

  if arr[mid] < target:
      low = mid + 1
  elif arr[mid] > target:
      high = mid - 1
  else:
      return mid
return -1

# Usage
arr = [2, 3, 4, 10, 40]
target = 10
result = binary_search(arr, target)
print("Element found at index:", result)  # Output: Element found at index: 3
  </code></pre>
  <p><strong>Explanation:</strong> Binary Search works on sorted arrays. It repeatedly divides the search interval in half. If the value of the target is less than the value in the middle of the interval, the search continues in the lower half, or else it continues in the upper half. The process repeats until the target is found or the interval is empty.</p>

  <h3>Assignment 1</h3>
  <p>Create a list of your favorite movies, a tuple of your top 3 favorite colors, a set of unique numbers from 1 to 10, and a dictionary with information about a book (title, author, and year). Print each data structure.</p>
  <pre><code>
// List of favorite movies
movies = ['Inception', 'The Matrix', 'Interstellar']
print(movies)

// Tuple of top 3 favorite colors
colors = ('blue', 'green', 'red')
print(colors)

// Set of unique numbers from 1 to 10
unique_numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
print(unique_numbers)

// Dictionary with information about a book
book = {
'title': 'To Kill a Mockingbird',
'author': 'Harper Lee',
'year': 1960
}
print(book)
  </code></pre>

  <h3>Assignment 2</h3>
  <p>Create a dictionary that stores information about three different books. Each book should have a title, author, and year of publication. Print out the title of each book and the year it was published.</p>
  <pre><code>
// Dictionary with information about three books
books = {
'book1': {'title': '1984', 'author': 'George Orwell', 'year': 1949},
'book2': {'title': 'Brave New World', 'author': 'Aldous Huxley', 'year': 1932},
'book3': {'title': 'Fahrenheit 451', 'author': 'Ray Bradbury', 'year': 1953}
}

// Print out the title and year of publication of each book
for key, value in books.items():
print(f"{value['title']} was published in {value['year']}")
  </code></pre>

  <h3>Assignment 3</h3>
  <p>Implement a linked list, stack, and queue in Python. Create a linked list with elements 1, 2, and 3, push 4 and 5 onto a stack, and enqueue 6 and 7 into a queue. Print the elements of each data structure.</p>
  <pre><code>
// Linked List Implementation
class Node:
def __init__(self, data=None):
  self.data = data
  self.next = None

class LinkedList:
def __init__(self):
  self.head = None

def insert(self, data):
  new_node = Node(data)
  if self.head is None:
      self.head = new_node
  else:
      current = self.head
      while current.next:
          current = current.next
      current.next = new_node

def display(self):
  elements = []
  current = self.head
  while current:
      elements.append(current.data)
      current = current.next
  print(elements)

# Create Linked List with elements 1, 2, and 3
ll = LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.display()  // Output: [1, 2, 3]

// Stack Implementation
class Stack:
def __init__(self):
  self.items = []

def push(self, item):
  self.items.append(item)

def pop(self):
  if not self.is_empty():
      return self.items.pop()

def is_empty(self):
  return len(self.items) == 0

def peek(self):
  if not self.is_empty():
      return self.items[-1]

def size(self):
  return len(self.items)

# Push 4 and 5 onto the stack
stack = Stack()
stack.push(4)
stack.push(5)
print(stack.items)  // Output: [4, 5]

// Queue Implementation
class Queue:
def __init__(self):
  self.items = []

def enqueue(self, item):
  self.items.insert(0, item)

def dequeue(self):
  if not self.is_empty():
      return self.items.pop()

def is_empty(self):
  return len(self.items) == 0

def size(self):
  return len(self.items)

# Enqueue 6 and 7 into the queue
queue = Queue()
queue.enqueue(6)
queue.enqueue(7)
print(queue.items)  // Output: [7, 6]
  </code></pre>
  </section>`,
  subSections: [
    { id: 'built-in-data-structures', title: 'Built-in Data Structures', content: `<section id="built-in-data-structures">
    <h2>Built-in Data Structures</h2>
        <p>Python provides several built-in data structures, each with its own advantages and use cases. Understanding these structures is essential for writing efficient and effective Python code.</p>
        
        <h3>Lists</h3>
        <p>Lists are ordered, mutable collections of elements. They allow duplicate members.</p>
        <pre><code>
// Creating a list
fruits = ['apple', 'banana', 'cherry']

// Accessing elements
print(fruits[0])  // Output: apple

// Modifying elements
fruits[1] = 'blueberry'
print(fruits)  // Output: ['apple', 'blueberry', 'cherry']

// Adding elements
fruits.append('date')
print(fruits)  // Output: ['apple', 'blueberry', 'cherry', 'date']

// Removing elements
fruits.remove('blueberry')
print(fruits)  // Output: ['apple', 'cherry', 'date']

// List comprehension
squares = [x ** 2 for x in range(10)]
print(squares)  // Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
        </code></pre>

        <h3>Tuples</h3>
        <p>Tuples are ordered, immutable collections of elements. They allow duplicate members.</p>
        <pre><code>
// Creating a tuple
colors = ('red', 'green', 'blue')

// Accessing elements
print(colors[1])  // Output: green

// Tuples are immutable
// colors[1] = 'yellow'  // This will raise a TypeError

// Tuple packing and unpacking
person = ('John', 25, 'Engineer')
name, age, profession = person
print(name)  // Output: John
print(age)  // Output: 25
print(profession)  // Output: Engineer
        </code></pre>

        <h3>Sets</h3>
        <p>Sets are unordered collections of unique elements. They do not allow duplicate members.</p>
        <pre><code>
// Creating a set
unique_numbers = {1, 2, 3, 4, 5}

// Adding elements
unique_numbers.add(6)
print(unique_numbers)  // Output: {1, 2, 3, 4, 5, 6}

// Removing elements
unique_numbers.remove(3)
print(unique_numbers)  // Output: {1, 2, 4, 5, 6}

// Sets do not allow duplicates
unique_numbers.add(4)
print(unique_numbers)  // Output: {1, 2, 4, 5, 6}

// Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a.union(b))        // Output: {1, 2, 3, 4, 5, 6}
print(a.intersection(b)) // Output: {3, 4}
print(a.difference(b))   // Output: {1, 2}
        </code></pre>

        <h3>Dictionaries</h3>
        <p>Dictionaries are unordered collections of key-value pairs. Keys must be unique and immutable, while values can be of any data type.</p>
        <pre><code>
// Creating a dictionary
student = {
    'name': 'John Doe',
    'age': 20,
    'courses': ['Math', 'Science']
}

// Accessing values
print(student['name'])  // Output: John Doe

// Modifying values
student['age'] = 21
print(student)  // Output: {'name': 'John Doe', 'age': 21, 'courses': ['Math', 'Science']}

// Adding key-value pairs
student['grade'] = 'A'
print(student)  // Output: {'name': 'John Doe', 'age': 21, 'courses': ['Math', 'Science'], 'grade': 'A'}

// Removing key-value pairs
del student['courses']
print(student)  // Output: {'name': 'John Doe', 'age': 21, 'grade': 'A'}

// Dictionary comprehension
squares = {x: x ** 2 for x in range(6)}
print(squares)  // Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
        </code></pre>

        <h3>Summary</h3>
        <p>These built-in data structures provide versatile ways to store and manipulate data in Python. Choosing the right data structure for your task can greatly affect the performance and readability of your code.</p>
        
        <h3>Assignment 1</h3>
        <p>Create a list of your favorite movies, a tuple of your top 3 favorite colors, a set of unique numbers from 1 to 10, and a dictionary with information about a book (title, author, and year). Print each data structure.</p>
        <pre><code>
// List of favorite movies
movies = ['Inception', 'The Matrix', 'Interstellar']
print(movies)

// Tuple of top 3 favorite colors
colors = ('blue', 'green', 'red')
print(colors)

// Set of unique numbers from 1 to 10
unique_numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
print(unique_numbers)

// Dictionary with information about a book
book = {
    'title': 'To Kill a Mockingbird',
    'author': 'Harper Lee',
    'year': 1960
}
print(book)
        </code></pre>

        <h3>Assignment 2</h3>
        <p>Create a dictionary that stores information about three different books. Each book should have a title, author, and year of publication. Print out the title of each book and the year it was published.</p>
        <pre><code>
// Dictionary with information about three books
books = {
    'book1': {'title': '1984', 'author': 'George Orwell', 'year': 1949},
    'book2': {'title': 'Brave New World', 'author': 'Aldous Huxley', 'year': 1932},
    'book3': {'title': 'Fahrenheit 451', 'author': 'Ray Bradbury', 'year': 1953}
}

// Print out the title and year of publication of each book
for key, value in books.items():
    print(f"{value['title']} was published in {value['year']}")
        </code></pre>
    </section>` },
    { id: 'custom-data-structures', title: 'Custom Data Structures', content: `<section id="custom-data-structures">
    <h2>Custom Data Structures</h2>
        <p>Sometimes, built-in data structures are not sufficient for certain tasks. In such cases, you can create custom data structures to better suit your needs.</p>
        
        <h3>Linked List</h3>
        <p>A linked list is a linear data structure where each element is a separate object called a node. Each node contains data and a reference (or link) to the next node in the sequence.</p>
        
        <pre><code>
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def display(self):
        elements = []
        current = self.head
        while current:
            elements.append(current.data)
            current = current.next
        print(elements)

# Usage
ll = LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.display()  # Output: [1, 2, 3]
        </code></pre>
        <p><strong>Explanation:</strong> A linked list is like a chain of elements where you can traverse from one element to the next. Each element (node) contains data and a reference to the next node.</p>
        
        <p><strong>Real-life example:</strong> Think of a linked list as a series of train cars. Each car (node) contains passengers (data) and a link to the next car.</p>

        <h3>Stack</h3>
        <p>A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. The most recently added element is the first to be removed.</p>
        
        <pre><code>
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

    def peek(self):
        if not self.is_empty():
            return self.items[-1]

    def size(self):
        return len(self.items)

# Usage
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.pop())  # Output: 3
print(stack.peek()) # Output: 2
print(stack.size()) # Output: 2
        </code></pre>
        <p><strong>Explanation:</strong> A stack is like a stack of plates where you can only take the top plate. You add (push) plates to the top of the stack and remove (pop) plates from the top.</p>
        
        <p><strong>Real-life example:</strong> Think of a stack as a stack of books. You can only remove the book at the top, and you add new books on top of the stack.</p>

        <h3>Queue</h3>
        <p>A queue is a linear data structure that follows the First In, First Out (FIFO) principle. The oldest added element is the first to be removed.</p>
        
        <pre><code>
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

# Usage
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(queue.dequeue())  # Output: 1
print(queue.size())     # Output: 2
        </code></pre>
        <p><strong>Explanation:</strong> A queue is like a line of people where the first person in line is the first to be served. You add (enqueue) people to the end of the line and remove (dequeue) people from the front.</p>
        
        <p><strong>Real-life example:</strong> Think of a queue as a queue at a ticket counter. The first person in line is the first to get a ticket, and new people join the end of the line.</p>

        <h3>Tree</h3>
        <p>A tree is a hierarchical data structure that consists of nodes, with a single node as the root from which all other nodes descend. Each node can have multiple children but only one parent (except for the root, which has no parent).</p>
        
        <pre><code>
class TreeNode:
    def __init__(self, data=None):
        self.data = data
        self.children = []
    
    def add_child(self, child_node):
        self.children.append(child_node)
    
    def remove_child(self, child_node):
        self.children = [child for child in self.children if child != child_node]
    
    def display(self, level=0):
        print(' ' * level + str(self.data))
        for child in self.children:
            child.display(level + 1)

# Usage
root = TreeNode('root')
child1 = TreeNode('child1')
child2 = TreeNode('child2')
root.add_child(child1)
root.add_child(child2)
child1.add_child(TreeNode('child1.1'))
child2.add_child(TreeNode('child2.1'))
root.display()
        </code></pre>
        <p><strong>Explanation:</strong> A tree is like a family tree where each person (node) can have multiple children but only one parent.</p>
        
        <p><strong>Real-life example:</strong> Think of a tree as an organizational chart of a company where the CEO is the root, department heads are children of the CEO, and employees are children of department heads.</p>

        <h3>Graph</h3>
        <p>A graph is a collection of nodes (vertices) connected by edges. Graphs can be either directed or undirected, depending on whether the edges have a direction.</p>
        
        <pre><code>
class Graph:
    def __init__(self):
        self.nodes = {}
    
    def add_node(self, node):
        if node not in self.nodes:
            self.nodes[node] = []
    
    def add_edge(self, node1, node2):
        if node1 in self.nodes and node2 in self.nodes:
            self.nodes[node1].append(node2)
            self.nodes[node2].append(node1)  # For undirected graph
    
    def display(self):
        for node, edges in self.nodes.items():
            print(f"{node}: {', '.join(edges)}")

# Usage
graph = Graph()
graph.add_node('A')
graph.add_node('B')
graph.add_node('C')
graph.add_edge('A', 'B')
graph.add_edge('A', 'C')
graph.add_edge('B', 'C')
graph.display()
        </code></pre>
        <p><strong>Explanation:</strong> A graph is like a network of roads connecting cities where each city (node) is connected by roads (edges).</p>
        
        <p><strong>Real-life example:</strong> Think of a graph as a social network where each person (node) is connected to other people (nodes) through friendships (edges).</p>

        <h3>Assignment 1</h3>
        <p>Implement a linked list, stack, and queue in Python. Create a linked list with elements 1, 2, and 3, push 4 and 5 onto a stack, and enqueue 6 and 7 into a queue. Print the elements of each data structure.</p>
        <pre><code>
// Linked List Implementation
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def display(self):
        elements = []
        current = self.head
        while current:
            elements.append(current.data)
            current = current.next
        print(elements)

# Create Linked List with elements 1, 2, and 3
ll = LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.display()  // Output: [1, 2, 3]

// Stack Implementation
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

    def peek(self):
        if not self.is_empty():
            return self.items[-1]

    def size(self):
        return len(self.items)

# Push 4 and 5 onto the stack
stack = Stack()
stack.push(4)
stack.push(5)
print(stack.items)  // Output: [4, 5]

// Queue Implementation
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

# Enqueue 6 and 7 into the queue
queue = Queue()
queue.enqueue(6)
queue.enqueue(7)
print(queue.items)  // Output: [7, 6]
        </code></pre>

        <h3>Assignment 2</h3>
        <p>Implement a tree and a graph in Python. Create a tree with a root node and two children, each having one child. Create a graph with three nodes connected to each other. Print the structure of the tree and the graph.</p>
        <pre><code>
// Tree Implementation
class TreeNode:
    def __init__(self, data=None):
        self.data = data
        self.children = []
    
    def add_child(self, child_node):
        self.children.append(child_node)
    
    def remove_child(self, child_node):
        self.children = [child for child in self.children if child != child_node]
    
    def display(self, level=0):
        print(' ' * level + str(self.data))
        for child in self.children:
            child.display(level + 1)

# Create Tree with root and children
root = TreeNode('root')
child1 = TreeNode('child1')
child2 = TreeNode('child2')
root.add_child(child1)
root.add_child(child2)
child1.add_child(TreeNode('child1.1'))
child2.add_child(TreeNode('child2.1'))
root.display()

// Graph Implementation
class Graph:
    def __init__(self):
        self.nodes = {}
    
    def add_node(self, node):
        if node not in self.nodes:
            self.nodes[node] = []
    
    def add_edge(self, node1, node2):
        if node1 in self.nodes and node2 in self.nodes:
            self.nodes[node1].append(node2)
            self.nodes[node2].append(node1)  # For undirected graph
    
    def display(self):
        for node, edges in self.nodes.items():
            print(f"{node}: {', '.join(edges)}")

# Create Graph with nodes and edges
graph = Graph()
graph.add_node('A')
graph.add_node('B')
graph.add_node('C')
graph.add_edge('A', 'B')
graph.add_edge('A', 'C')
graph.add_edge('B', 'C')
graph.display()
        </code></pre>
    </section>` },
    { id: 'algorithms', title: 'Algorithms', content: `<section id="algorithms">
    <h2>Algorithms</h2>
        <p>Algorithms are step-by-step procedures or formulas for solving problems. They are essential for performing tasks efficiently. Here are some common algorithms with explanations, real-life examples, and assignments.</p>
        
        <h3>Sorting Algorithms</h3>
        <p>Sorting algorithms arrange the elements of a list in a certain order (usually ascending or descending).</p>

        <h4>Bubble Sort</h4>
        <p>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted.</p>
        <pre><code>
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

# Usage
arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print("Sorted array is:", arr)  # Output: Sorted array is: [11, 12, 22, 25, 34, 64, 90]
        </code></pre>
        <p><strong>Explanation:</strong> Bubble Sort repeatedly compares and swaps adjacent elements until the list is sorted. It's like repeatedly passing through a list of items and swapping them if they are out of order.</p>
        
        <p><strong>Real-life example:</strong> Imagine sorting a deck of cards by repeatedly going through the deck and swapping adjacent cards if they are out of order.</p>

        <h4>Quick Sort</h4>
        <p>Quick Sort is a divide-and-conquer algorithm that selects a pivot element and partitions the array into three sub-arrays: elements less than the pivot, elements equal to the pivot, and elements greater than the pivot. It then recursively sorts the sub-arrays.</p>
        <pre><code>
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# Usage
arr = [3, 6, 8, 10, 1, 2, 1]
print("Sorted array is:", quick_sort(arr))  # Output: Sorted array is: [1, 1, 2, 3, 6, 8, 10]
        </code></pre>
        <p><strong>Explanation:</strong> Quick Sort selects a pivot element and partitions the array. It then recursively sorts the sub-arrays. It's like picking a pivot item in a list and organizing other items around it, and repeating the process for sub-lists.</p>
        
        <p><strong>Real-life example:</strong> Imagine organizing a bookshelf by picking a book, arranging books with titles alphabetically before and after it, and repeating the process for each section of the shelf.</p>

        <h3>Search Algorithms</h3>
        <p>Search algorithms are used to find an element in a data structure.</p>

        <h4>Linear Search</h4>
        <p>Linear Search sequentially checks each element of the list until the target element is found or the list ends.</p>
        <pre><code>
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Usage
arr = [2, 3, 4, 10, 40]
target = 10
result = linear_search(arr, target)
print("Element found at index:", result)  # Output: Element found at index: 3
        </code></pre>
        <p><strong>Explanation:</strong> Linear Search checks each element one by one until it finds the target or reaches the end of the list. It's like looking through a list of names one by one to find a specific name.</p>
        
        <p><strong>Real-life example:</strong> Imagine looking for a specific book on a shelf by checking each book one by one until you find the desired book.</p>

        <h4>Binary Search</h4>
        <p>Binary Search works on sorted arrays. It repeatedly divides the search interval in half. If the value of the target is less than the value in the middle of the interval, the search continues in the lower half, or else it continues in the upper half. The process repeats until the target is found or the interval is empty.</p>
        <pre><code>
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    mid = 0

    while low <= high:
        mid = (high + low) // 2

        if arr[mid] < target:
            low = mid + 1
        elif arr[mid] > target:
            high = mid - 1
        else:
            return mid
    return -1

# Usage
arr = [2, 3, 4, 10, 40]
target = 10
result = binary_search(arr, target)
print("Element found at index:", result)  # Output: Element found at index: 3
        </code></pre>
        <p><strong>Explanation:</strong> Binary Search repeatedly divides the list in half and compares the target with the middle element until it finds the target or the search interval is empty. It's like looking for a name in a phone book by opening it in the middle and narrowing down the search.</p>
        
        <p><strong>Real-life example:</strong> Imagine looking for a word in a dictionary by opening it in the middle and then deciding whether to search the left or right half based on the alphabetical order.</p>

        <h3>Assignment 1</h3>
        <p>Implement Bubble Sort and Quick Sort algorithms in Python. Create a list of unsorted numbers, sort them using both algorithms, and print the sorted lists.</p>
        <pre><code>
// Bubble Sort Implementation
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

// Quick Sort Implementation
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

// Usage
unsorted_arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(unsorted_arr)
print("Bubble Sorted array is:", unsorted_arr)

unsorted_arr = [3, 6, 8, 10, 1, 2, 1]
print("Quick Sorted array is:", quick_sort(unsorted_arr))
        </code></pre>

        <h3>Assignment 2</h3>
        <p>Implement Linear Search and Binary Search algorithms in Python. Create a list of numbers and search for a specific number using both algorithms. Print the index of the number if found.</p>
        <pre><code>
// Linear Search Implementation
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

// Binary Search Implementation
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    mid = 0

    while low <= high:
        mid = (high + low) // 2

        if arr[mid] < target:
            low = mid + 1
        elif arr[mid] > target:
            high = mid - 1
        else:
            return mid
    return -1

// Usage
arr = [2, 3, 4, 10, 40]
target = 10
linear_result = linear_search(arr, target)
binary_result = binary_search(arr, target)
print("Linear Search - Element found at index:", linear_result)
print("Binary Search - Element found at index:", binary_result)
        </code></pre>
    </section>`}
]
},
{id: 'advanced-python-concepts', title: ' Advanced Python Concepts', content: 
`<section id="advanced-python-concepts">
<h2>Advanced Python Concepts</h2>
        <p>As you advance in Python programming, it's crucial to understand some of the more sophisticated features and concepts that can help you write more efficient, readable, and powerful code. In this section, we will cover a variety of advanced Python topics that are essential for becoming a proficient Python developer.</p>
        
        <h3>What to Expect</h3>
        <p>In this section, you will learn about:</p>
        <ul>
          <li>Decorators</li>
          <li>Generators and Iterators</li>
          <li>Context Managers</li>
          <li>List Comprehensions</li>
          <li>Lambda Functions</li>
          <li>Metaclasses</li>
          <li>Concurrency (Threads and Asyncio)</li>
        </ul>
        
        <h3>Real-Life Examples</h3>
        <p>We will illustrate these concepts with real-life examples to help you understand how they can be applied in practical scenarios:</p>
        <ul>
          <li><strong>Decorators:</strong> Enhancing the functionality of functions or methods in a reusable way, similar to adding plugins to software.</li>
          <li><strong>Generators:</strong> Efficiently handling large data streams, like reading lines from a large file without loading the entire file into memory.</li>
          <li><strong>Context Managers:</strong> Managing resources such as file streams or database connections, ensuring they are properly opened and closed, akin to using a 'with' statement in file handling to manage file opening and closing automatically.</li>
          <li><strong>List Comprehensions:</strong> Writing more concise and readable code for creating lists, similar to using shortcuts to simplify tasks.</li>
          <li><strong>Lambda Functions:</strong> Creating small, anonymous functions for quick, one-time operations, akin to writing a quick note instead of drafting a full letter.</li>
          <li><strong>Metaclasses:</strong> Customizing class creation, which can be compared to using templates to enforce specific designs in objects.</li>
          <li><strong>Concurrency:</strong> Running multiple tasks simultaneously to improve performance, like multitasking in daily life to get more done in less time.</li>
        </ul>
        
        <h3>Examples</h3>
        <p>Here are some brief examples to give you a taste of what's to come:</p>
        
        <h4>Decorators</h4>
        <pre><code>
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
        </code></pre>
        <p><strong>Explanation:</strong> This decorator adds functionality before and after the 'say_hello' function, similar to adding extra steps before and after a core task.</p>

        <h4>Generators</h4>
        <pre><code>
def generate_numbers():
    for i in range(10):
        yield i

for number in generate_numbers():
    print(number)
        </code></pre>
        <p><strong>Explanation:</strong> Generators produce items one at a time and only when needed, which is efficient for handling large datasets without consuming much memory.</p>

        <h4>Context Managers</h4>
        <pre><code>
with open('sample.txt', 'r') as file:
    content = file.read()
    print(content)
        </code></pre>
        <p><strong>Explanation:</strong> Using a context manager ensures that resources are properly managed, similar to borrowing a library book and ensuring it's returned on time.</p>

        <h4>List Comprehensions</h4>
        <pre><code>
squares = [x ** 2 for x in range(10)]
print(squares)
        </code></pre>
        <p><strong>Explanation:</strong> List comprehensions allow you to create lists in a concise and readable manner, like using a shortcut to perform a repetitive task efficiently.</p>

        <h4>Lambda Functions</h4>
        <pre><code>
add = lambda x, y: x + y
print(add(2, 3))  # Output: 5
        </code></pre>
        <p><strong>Explanation:</strong> Lambda functions are small, anonymous functions useful for quick operations, similar to jotting down a quick note instead of a formal document.</p>

        <h4>Metaclasses</h4>
        <pre><code>
class Meta(type):
    def __new__(cls, name, bases, dct):
        print(f"Creating class {name}")
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=Meta):
    pass
        </code></pre>
        <p><strong>Explanation:</strong> Metaclasses allow customization of class creation, similar to using a mold to shape an object in a specific way.</p>

        <h4>Concurrency (Threads and Asyncio)</h4>
        <pre><code>
import threading

def print_numbers():
    for i in range(5):
        print(i)

thread = threading.Thread(target=print_numbers)
thread.start()
thread.join()
        </code></pre>
        <p><strong>Explanation:</strong> Concurrency enables running multiple tasks simultaneously, like multitasking to improve efficiency.</p>

        <p>These examples are just the beginning. In the following subsections, we will dive deeper into each of these concepts with more detailed explanations, real-life applications, and assignments to solidify your understanding.</p>
      </section>
</section>`,
subSections: [
  {
    id: 'decorators',
    title: 'Decorators',
    content: `
      <section id="decorators">
        <h2>Decorators</h2>
        <p>Decorators are a powerful and useful tool in Python that allows you to modify the behavior of a function or a class method. They are a way to dynamically alter the functionality of your code without changing the actual code of the function or method being decorated.</p>
        
        <h3>What are Decorators?</h3>
        <p>Decorators are functions that take another function as an argument and extend its behavior without explicitly modifying it. They are often used for logging, enforcing access control, instrumentation, caching, and more.</p>
        
        <h3>Basic Example</h3>
        <pre><code>
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
        </code></pre>
        <p><strong>Explanation:</strong> In this example, <code>my_decorator</code> is a decorator that wraps the <code>say_hello</code> function. When <code>say_hello</code> is called, it first prints a message, then calls <code>say_hello</code>, and finally prints another message.</p>

        <h3>Real-Life Example</h3>
        <p>Imagine you have a coffee machine that can make different types of coffee. You can enhance its functionality by adding extra features like adding sugar or milk. Decorators work similarly by adding extra features to a function.</p>

        <h3>Using Decorators with Arguments</h3>
        <pre><code>
def repeat(num_times):
    def decorator_repeat(func):
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                func(*args, **kwargs)
        return wrapper
    return decorator_repeat

@repeat(num_times=3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
        </code></pre>
        <p><strong>Explanation:</strong> This example demonstrates how to create a decorator with arguments. The <code>repeat</code> decorator repeats the execution of the <code>greet</code> function three times.</p>

        <h3>Using Multiple Decorators</h3>
        <pre><code>
def uppercase(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

def exclaim(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result + "!"
    return wrapper

@uppercase
@exclaim
def greet(name):
    return f"Hello, {name}"

print(greet("Alice"))
        </code></pre>
        <p><strong>Explanation:</strong> This example shows how to use multiple decorators. The <code>greet</code> function is first decorated with <code>exclaim</code> and then with <code>uppercase</code>. The result is that the greeting is converted to uppercase and an exclamation mark is added at the end.</p>

        <h3>Class Decorators</h3>
        <p>Decorators can also be used with classes. This allows you to add functionality to all methods of a class.</p>
        <pre><code>
def log_methods(cls):
    for key, value in cls.__dict__.items():
        if callable(value):
            setattr(cls, key, log(value))
    return cls

def log(func):
    def wrapper(*args, **kwargs):
        print(f"Calling method {func.__name__}")
        result = func(*args, **kwargs)
        print(f"Finished method {func.__name__}")
        return result
    return wrapper

@log_methods
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

p = Person("Alice", 30)
p.greet()
        </code></pre>
        <p><strong>Explanation:</strong> The <code>log_methods</code> decorator applies the <code>log</code> decorator to all methods of the <code>Person</code> class. When an instance method is called, it logs the start and end of the method call.</p>

        <h3>Assignment</h3>
        <p>1. Create a decorator called <code>timer</code> that measures the time a function takes to execute. Apply this decorator to a function that performs a task, such as calculating the factorial of a number.</p>
        <pre><code>
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function {func.__name__} took {end_time - start_time} seconds to execute.")
        return result
    return wrapper

@timer
def factorial(n):
    result = 1
    for i in range(2, n+1):
        result *= i
    return result

print(factorial(10))
        </code></pre>

        <p>2. Create a decorator called <code>authenticate</code> that checks if a user is authenticated before allowing them to execute a function. If the user is not authenticated, print a message indicating that access is denied.</p>
        <pre><code>
def authenticate(func):
    def wrapper(user, *args, **kwargs):
        if user.get("authenticated"):
            return func(*args, **kwargs)
        else:
            print("Access denied. User is not authenticated.")
    return wrapper

@authenticate
def view_account_details():
    print("Account details: ...")

user = {"name": "Alice", "authenticated": True}
view_account_details(user)

user = {"name": "Bob", "authenticated": False}
view_account_details(user)
        </code></pre>
      </section>
    `,
  },
  {
    id: 'generators-and-iterators',
    title: 'Generators and Iterators',
    content: `
      <section id="generators-and-iterators">
      <h2>Generators and Iterators</h2>
      <p>Generators and iterators are powerful tools in Python that allow you to iterate over data efficiently. They are especially useful for working with large datasets or streams of data where loading everything into memory at once is not feasible.</p>
      
      <h3>What are Iterators?</h3>
      <p>An iterator is an object that contains a countable number of values. It can be iterated upon, meaning you can traverse through all the values. In Python, an iterator is an object which implements the iterator protocol, consisting of the methods <code>__iter__()</code> and <code>__next__()</code>.</p>
      
      <h4>Iterator Example</h4>
      <pre><code>
# Creating an iterator
class MyNumbers:
  def __iter__(self):
      self.a = 1
      return self

  def __next__(self):
      if self.a <= 10:
          x = self.a
          self.a += 1
          return x
      else:
          raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)

for x in myiter:
  print(x)
      </code></pre>
      <p><strong>Explanation:</strong> In this example, <code>MyNumbers</code> is an iterator that generates numbers from 1 to 10. The <code>__iter__()</code> method initializes the iterator, and the <code>__next__()</code> method returns the next value. When there are no more values to return, it raises a <code>StopIteration</code> exception.</p>
      
      <h3>What are Generators?</h3>
      <p>Generators are a simple way of creating iterators. They are written like regular functions but use the <code>yield</code> statement whenever they want to return data. Each time <code>next()</code> is called on it, the generator resumes where it left off (it remembers all the data values and which statement was last executed).</p>
      
      <h4>Generator Example</h4>
      <pre><code>
def my_generator():
  for i in range(1, 11):
      yield i

for num in my_generator():
  print(num)
      </code></pre>
      <p><strong>Explanation:</strong> This generator function <code>my_generator</code> yields numbers from 1 to 10. Each time the <code>yield</code> statement is executed, the function’s state is saved, and the value is returned to the caller. When <code>next()</code> is called again, the function resumes from where it left off.</p>
      
      <h3>Real-Life Example</h3>
      <p>Imagine you have a huge book, and you want to read one page at a time instead of loading the entire book into memory. Generators help you read one page at a time efficiently.</p>
      
      <h3>Generator Expressions</h3>
      <p>Generator expressions are a compact way to create generators. They are similar to list comprehensions but with parentheses instead of square brackets.</p>
      <pre><code>
# Generator expression
my_generator = (x * x for x in range(10))
for value in my_generator:
  print(value)
      </code></pre>
      <p><strong>Explanation:</strong> This generator expression generates squares of numbers from 0 to 9. It is similar to a list comprehension but generates values one by one, making it more memory efficient.</p>
      
      <h3>Using Generators for File I/O</h3>
      <pre><code>
def read_large_file(file_path):
  with open(file_path, 'r') as file:
      while True:
          line = file.readline()
          if not line:
              break
          yield line

for line in read_large_file('large_file.txt'):
  print(line)
      </code></pre>
      <p><strong>Explanation:</strong> This generator function reads a large file line by line. It yields each line one at a time, making it efficient for processing large files without loading the entire file into memory.</p>
      
      <h3>Assignment 1</h3>
      <p>Create a generator function that yields the Fibonacci sequence up to a given number of terms. Print the generated sequence.</p>
      <pre><code>
def fibonacci(n):
  a, b = 0, 1
  for _ in range(n):
      yield a
      a, b = b, a + b

for num in fibonacci(10):
  print(num)
      </code></pre>
      
      <h3>Assignment 2</h3>
      <p>Create an iterator class that generates the squares of numbers from 1 to 10. Iterate over the object and print each value.</p>
      <pre><code>
class SquareNumbers:
  def __iter__(self):
      self.num = 1
      return self

  def __next__(self):
      if self.num <= 10:
          result = self.num ** 2
          self.num += 1
          return result
      else:
          raise StopIteration

squares = SquareNumbers()
for square in squares:
  print(square)
      </code></pre>
      </section>
    `,
  },
  {
    id: 'context-managers', title:'Context Managers', content:`<section id="context-managers">
    <h2>Context Managers</h2>
    <p>Context managers are a powerful feature in Python that provide a way to allocate and release resources precisely when you want to. The most widely used example of context managers is the <code>with</code> statement in file operations. They are implemented using the <code>with</code> statement and are particularly useful for managing resources like file streams, network connections, and locks.</p>
    
    <h3>What are Context Managers?</h3>
    <p>Context managers allow you to allocate and release resources precisely when you want to. The most common use of context managers is to manage the opening and closing of files.</p>
    
    <h3>Basic Example</h3>
    <pre><code>
# Using a context manager to open a file
with open('example.txt', 'r') as file:
content = file.read()
print(content)
    </code></pre>
    <p><strong>Explanation:</strong> The <code>with</code> statement simplifies exception handling by encapsulating common preparation and cleanup tasks. In this example, the file is properly closed after its suite finishes, even if an exception is raised at some point.</p>
    
    <h3>Real-Life Example</h3>
    <p>Imagine borrowing a book from a library. You check out the book (allocate resource), read it (use resource), and return it (release resource). Context managers handle these steps for you automatically.</p>
    
    <h3>Creating a Context Manager</h3>
    <p>You can create a context manager by defining a class with <code>__enter__</code> and <code>__exit__</code> methods.</p>
    <pre><code>
class MyContextManager:
def __enter__(self):
    print("Entering the context")
    return self

def __exit__(self, exc_type, exc_value, traceback):
    print("Exiting the context")

with MyContextManager():
print("Inside the context")
    </code></pre>
    <p><strong>Explanation:</strong> In this example, the <code>MyContextManager</code> class has <code>__enter__</code> and <code>__exit__</code> methods. The <code>__enter__</code> method is executed when the execution flow enters the context of the <code>with</code> statement, and the <code>__exit__</code> method is executed when the execution flow leaves the context.</p>
    
    <h3>Contextlib Module</h3>
    <p>Python's <code>contextlib</code> module provides utilities for working with context managers. The <code>@contextmanager</code> decorator can be used to define a context manager using a generator function.</p>
    <pre><code>
from contextlib import contextmanager

@contextmanager
def my_context_manager():
print("Entering the context")
yield
print("Exiting the context")

with my_context_manager():
print("Inside the context")
    </code></pre>
    <p><strong>Explanation:</strong> The <code>@contextmanager</code> decorator allows you to define a context manager using a generator function. The code before the <code>yield</code> statement is executed when entering the context, and the code after the <code>yield</code> statement is executed when exiting the context.</p>
    
    <h3>Using Context Managers for File I/O</h3>
    <pre><code>
# Writing to a file using a context manager
with open('example.txt', 'w') as file:
file.write('Hello, world!')

# Reading from a file using a context manager
with open('example.txt', 'r') as file:
content = file.read()
print(content)
    </code></pre>
    <p><strong>Explanation:</strong> Using a context manager ensures that the file is properly opened and closed, even if an error occurs during file operations.</p>
    
    <h3>Assignment 1</h3>
    <p>Create a context manager that times the execution of a block of code. Use this context manager to measure the time it takes to calculate the sum of numbers from 1 to 1,000,000.</p>
    <pre><code>
import time

class TimerContextManager:
def __enter__(self):
    self.start_time = time.time()
    return self

def __exit__(self, exc_type, exc_value, traceback):
    self.end_time = time.time()
    print(f"Elapsed time: {self.end_time - self.start_time} seconds")

with TimerContextManager():
total = sum(range(1, 1000001))
print(f"Total sum: {total}")
    </code></pre>
    
    <h3>Assignment 2</h3>
    <p>Create a context manager that logs the entry and exit of a block of code to a file. Use this context manager to log messages when entering and exiting a block of code that writes "Hello, world!" to a file.</p>
    <pre><code>
from contextlib import contextmanager

@contextmanager
def log_context_manager(file_path):
with open(file_path, 'a') as log_file:
    log_file.write("Entering the context\n")
    yield
    log_file.write("Exiting the context\n")

with log_context_manager('log.txt'):
with open('example.txt', 'w') as file:
    file.write('Hello, world!')
    </code></pre>
    </section>`,
  },
  {
    id: 'list-comprehensions', title:'List Comprehensions', content:`<section id="list-comprehensions">
    <h2>List Comprehensions</h2>
    <p>List comprehensions provide a concise way to create lists in Python. They consist of brackets containing an expression followed by a <code>for</code> clause. They can also include multiple <code>for</code> or <code>if</code> clauses. List comprehensions are not only syntactically cleaner but also more efficient than traditional for-loops for creating lists.</p>

    <h3>What are List Comprehensions?</h3>
    <p>List comprehensions offer a more compact and readable way to create lists. The general syntax is:</p>
    <pre><code>[expression for item in iterable if condition]</code></pre>
    <p>The expression can be any valid Python expression, including calling functions and methods.</p>

    <h3>Basic Example</h3>
    <pre><code>
# Creating a list of squares using a for-loop
squares = []
for x in range(10):
squares.append(x ** 2)
print(squares)

# Creating a list of squares using a list comprehension
squares = [x ** 2 for x in range(10)]
print(squares)
    </code></pre>
    <p><strong>Explanation:</strong> The list comprehension <code>[x ** 2 for x in range(10)]</code> generates a list of squares from 0 to 9 in a more concise and readable way than the equivalent for-loop.</p>

    <h3>Real-Life Example</h3>
    <p>Imagine you have a list of prices in different currencies, and you want to convert them all to a single currency. List comprehensions make it easy to apply the conversion in a single line of code.</p>
    <pre><code>
prices_in_usd = [10, 20, 30, 40]
exchange_rate = 1.1  # Example exchange rate to EUR
prices_in_eur = [price * exchange_rate for price in prices_in_usd]
print(prices_in_eur)  # Output: [11.0, 22.0, 33.0, 44.0]
    </code></pre>

    <h3>Using <code>if</code> Clauses</h3>
    <p>List comprehensions can also include <code>if</code> clauses to filter items.</p>
    <pre><code>
# Creating a list of even numbers using a for-loop
evens = []
for x in range(20):
if x % 2 == 0:
    evens.append(x)
print(evens)

# Creating a list of even numbers using a list comprehension
evens = [x for x in range(20) if x % 2 == 0]
print(evens)
    </code></pre>
    <p><strong>Explanation:</strong> The list comprehension <code>[x for x in range(20) if x % 2 == 0]</code> generates a list of even numbers from 0 to 19 in a more concise and readable way than the equivalent for-loop with an <code>if</code> condition.</p>

    <h3>Nesting List Comprehensions</h3>
    <p>You can also nest list comprehensions to create lists of lists.</p>
    <pre><code>
# Creating a matrix using nested for-loops
matrix = []
for i in range(3):
row = []
for j in range(3):
    row.append(i * j)
matrix.append(row)
print(matrix)

# Creating a matrix using nested list comprehensions
matrix = [[i * j for j in range(3)] for i in range(3)]
print(matrix)
    </code></pre>
    <p><strong>Explanation:</strong> The nested list comprehension <code>[[i * j for j in range(3)] for i in range(3)]</code> generates a 3x3 matrix in a more concise and readable way than the equivalent nested for-loops.</p>

    <h3>Real-Life Example</h3>
    <p>Imagine you have a list of names, and you want to create a list of initials. List comprehensions make it easy to extract the first letter of each name in a single line of code.</p>
    <pre><code>
names = ["Alice", "Bob", "Charlie"]
initials = [name[0] for name in names]
print(initials)  # Output: ['A', 'B', 'C']
    </code></pre>

    <h3>Using List Comprehensions with Functions</h3>
    <p>List comprehensions can also be used with functions to apply a function to each item in a list.</p>
    <pre><code>
# Defining a function to convert Fahrenheit to Celsius
def fahrenheit_to_celsius(f):
return (f - 32) * 5 / 9

# Creating a list of Fahrenheit temperatures
fahrenheit_temperatures = [32, 45, 64, 77, 86]

# Converting Fahrenheit to Celsius using a list comprehension
celsius_temperatures = [fahrenheit_to_celsius(f) for f in fahrenheit_temperatures]
print(celsius_temperatures)  # Output: [0.0, 7.222222222222222, 17.77777777777778, 25.0, 30.0]
    </code></pre>
    <p><strong>Explanation:</strong> The list comprehension <code>[fahrenheit_to_celsius(f) for f in fahrenheit_temperatures]</code> applies the <code>fahrenheit_to_celsius</code> function to each item in the <code>fahrenheit_temperatures</code> list, converting them to Celsius.</p>

    <h3>Advanced List Comprehensions</h3>
    <p>List comprehensions can also handle more complex operations, such as flattening a list of lists.</p>
    <pre><code>
# Flattening a list of lists using a nested for-loop
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = []
for sublist in list_of_lists:
for item in sublist:
    flattened.append(item)
print(flattened)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Flattening a list of lists using a nested list comprehension
flattened = [item for sublist in list_of_lists for item in sublist]
print(flattened)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    </code></pre>
    <p><strong>Explanation:</strong> The nested list comprehension <code>[item for sublist in list_of_lists for item in sublist]</code> flattens the list of lists into a single list in a concise and readable manner.</p>

    <h3>Real-Life Example</h3>
    <p>Consider you have a list of sentences, and you want to create a list of words from all the sentences. List comprehensions make it easy to split each sentence into words and combine them into a single list.</p>
    <pre><code>
sentences = ["Hello world", "Python is great", "List comprehensions are powerful"]
words = [word for sentence in sentences for word in sentence.split()]
print(words)  # Output: ['Hello', 'world', 'Python', 'is', 'great', 'List', 'comprehensions', 'are', 'powerful']
    </code></pre>

    <h3>Using <code>if</code> and <code>else</code> Clauses</h3>
    <p>You can also include <code>if</code> and <code>else</code> clauses in list comprehensions for more complex conditional logic.</p>
    <pre><code>
# Creating a list of even and odd labels using a for-loop
labels = []
for x in range(10):
if x % 2 == 0:
    labels.append('even')
else:
    labels.append('odd')
print(labels)

# Creating a list of even and odd labels using a list comprehension
labels = ['even' if x % 2 == 0 else 'odd' for x in range(10)]
print(labels)
    </code></pre>
    <p><strong>Explanation:</strong> The list comprehension <code>['even' if x % 2 == 0 else 'odd' for x in range(10)]</code> generates a list of labels ("even" or "odd") based on the parity of numbers from 0 to 9.</p>

    <h3>Assignment 1</h3>
    <p>Create a list comprehension that generates a list of the first 10 cube numbers (e.g., 0, 1, 8, 27, ...).</p>
    <pre><code>
# List comprehension to generate the first 10 cube numbers
cubes = [x ** 3 for x in range(10)]
print(cubes)  # Output: [0, 1, 8, 27, 64, 125, 216, 343, 512, 729]
    </code></pre>

    <h3>Assignment 2</h3>
    <p>Given a list of words, create a list comprehension that returns a list of the lengths of those words.</p>
    <pre><code>
words = ["Python", "list", "comprehension", "example"]
# List comprehension to get the lengths of the words
word_lengths = [len(word) for word in words]
print(word_lengths)  # Output: [6, 4, 13, 7]
    </code></pre>

    <h3>Assignment 3</h3>
    <p>Create a list comprehension that filters out negative numbers from a given list of numbers.</p>
    <pre><code>
numbers = [-10, -5, 0, 5, 10]
# List comprehension to filter out negative numbers
positive_numbers = [num for num in numbers if num >= 0]
print(positive_numbers)  # Output: [0, 5, 10]
    </code></pre>

    <h3>Assignment 4</h3>
    <p>Create a nested list comprehension that generates a multiplication table (from 1 to 10).</p>
    <pre><code>
# Nested list comprehension to generate a multiplication table
multiplication_table = [[i * j for j in range(1, 11)] for i in range(1, 11)]
for row in multiplication_table:
print(row)
    </code></pre>
    </section`,
  },

],
},
    {
      id:'reading-and-writing-files', title: 'Reading and Writing Files', content:`<section id="reading-and-writing-files">
      <h2>Reading and Writing Files</h2>
      <p>Working with files is a crucial skill in programming. Whether you're saving data for later use, processing logs, or reading configuration settings, being able to read from and write to files efficiently is essential. In this section, you will learn the basics of file I/O (input/output) in Python.</p>

      <h3>What You Will Learn</h3>
      <p>In this section, we will cover:</p>
      <ul>
        <li>Opening and closing files</li>
        <li>Reading from files</li>
        <li>Writing to files</li>
        <li>Using context managers for file I/O</li>
        <li>Handling file exceptions</li>
        <li>Reading and writing different file formats (e.g., text, CSV, JSON)</li>
      </ul>

      <h3>Introduction to File I/O</h3>
      <p>File I/O operations allow you to persist data by writing it to files and to retrieve data by reading from files. Python provides built-in functions and modules to handle file operations easily and efficiently. Let's start by understanding the basics of opening and closing files.</p>

      <h3>Opening and Closing Files</h3>
      <p>Before you can read from or write to a file, you need to open it. The built-in <code>open()</code> function is used to open a file, and it returns a file object. You should always close a file after you're done with it to free up system resources.</p>
      <pre><code>
# Opening a file
file = open('example.txt', 'r')  # 'r' mode is for reading
# Perform file operations
file.close()
      </code></pre>
      <p>Using the <code>with</code> statement ensures that the file is properly closed after its suite finishes, even if an exception is raised.</p>
      <pre><code>
# Using the 'with' statement to open and close a file
with open('example.txt', 'r') as file:
  # Perform file operations
  content = file.read()
  print(content)
      </code></pre>
      <p><strong>Explanation:</strong> The <code>with</code> statement simplifies exception handling by encapsulating common preparation and cleanup tasks. The file is automatically closed when the block inside the <code>with</code> statement is exited.</p>

      <h3>Reading from Files</h3>
      <p>Python provides several methods to read from a file:</p>
      <ul>
        <li><code>read()</code>: Reads the entire file content.</li>
        <li><code>readline()</code>: Reads one line from the file.</li>
        <li><code>readlines()</code>: Reads all lines from the file and returns a list.</li>
      </ul>
      <pre><code>
# Reading the entire file content
with open('example.txt', 'r') as file:
  content = file.read()
  print(content)

# Reading one line at a time
with open('example.txt', 'r') as file:
  line = file.readline()
  while line:
      print(line.strip())  # strip() removes the newline character
      line = file.readline()

# Reading all lines into a list
with open('example.txt', 'r') as file:
  lines = file.readlines()
  for line in lines:
      print(line.strip())
      </code></pre>

      <h3>Writing to Files</h3>
      <p>Python provides methods to write to a file:</p>
      <ul>
        <li><code>write()</code>: Writes a string to the file.</li>
        <li><code>writelines()</code>: Writes a list of strings to the file.</li>
      </ul>
      <pre><code>
# Writing a string to a file
with open('example.txt', 'w') as file:
  file.write('Hello, world!')

# Writing multiple lines to a file
lines = ['Hello, world!', 'This is a test.', 'Goodbye!']
with open('example.txt', 'w') as file:
  file.writelines(lines)
      </code></pre>
      <p><strong>Explanation:</strong> The <code>write()</code> method writes a single string to the file, while the <code>writelines()</code> method writes a list of strings to the file. Note that the <code>writelines()</code> method does not add newline characters, so you need to include them in your strings if needed.</p>

      <h3>Using Context Managers for File I/O</h3>
      <p>Using context managers (the <code>with</code> statement) ensures that files are properly closed after their suite finishes, even if an exception is raised.</p>
      <pre><code>
# Using the 'with' statement for file I/O
with open('example.txt', 'w') as file:
  file.write('Hello, world!')

with open('example.txt', 'r') as file:
  content = file.read()
  print(content)
      </code></pre>

      <h3>Handling File Exceptions</h3>
      <p>When working with files, it's important to handle exceptions that may occur. For example, the file you're trying to read might not exist.</p>
      <pre><code>
try:
  with open('nonexistent_file.txt', 'r') as file:
      content = file.read()
      print(content)
except FileNotFoundError:
  print('The file does not exist.')
      </code></pre>
      <p><strong>Explanation:</strong> The <code>try...except</code> block is used to catch and handle exceptions. In this example, if the file does not exist, a <code>FileNotFoundError</code> is caught, and a message is printed.</p>

      <h3>Reading and Writing Different File Formats</h3>
      <p>Python provides libraries to handle various file formats, such as CSV and JSON.</p>

      <h4>CSV Files</h4>
      <p>CSV (Comma-Separated Values) is a common file format for tabular data. Python's built-in <code>csv</code> module makes it easy to read and write CSV files.</p>
      <pre><code>
import csv

# Writing to a CSV file
with open('example.csv', 'w', newline='') as csvfile:
  writer = csv.writer(csvfile)
  writer.writerow(['Name', 'Age', 'City'])
  writer.writerow(['Alice', 30, 'New York'])
  writer.writerow(['Bob', 25, 'Los Angeles'])

# Reading from a CSV file
with open('example.csv', 'r') as csvfile:
  reader = csv.reader(csvfile)
  for row in reader:
      print(row)
      </code></pre>

      <h4>JSON Files</h4>
      <p>JSON (JavaScript Object Notation) is a popular data interchange format. Python's built-in <code>json</code> module makes it easy to read and write JSON files.</p>
      <pre><code>
import json

# Writing to a JSON file
data = {
  'name': 'Alice',
  'age': 30,
  'city': 'New York'
}
with open('example.json', 'w') as jsonfile:
  json.dump(data, jsonfile)

# Reading from a JSON file
with open('example.json', 'r') as jsonfile:
  data = json.load(jsonfile)
  print(data)
      </code></pre>
      <p><strong>Explanation:</strong> The <code>json.dump()</code> method writes a Python object to a JSON file, and the <code>json.load()</code> method reads a JSON file into a Python object.</p>

      <h3>Assignment 1</h3>
      <p>Write a Python program that reads from a text file, counts the number of words, and prints the count. Use a context manager to open and close the file.</p>
      <pre><code>
def count_words(file_path):
  with open(file_path, 'r') as file:
      content = file.read()
      words = content.split()
      word_count = len(words)
      print(f'The file contains {word_count} words.')

count_words('example.txt')
      </code></pre>

      <h3>Assignment 2</h3>
      <p>Write a Python program that reads a CSV file and prints each row in a readable format. Use a context manager to open and close the file.</p>
      <pre><code>
import csv

def read_csv(file_path):
  with open(file_path, 'r') as csvfile:
      reader = csv.reader(csvfile)
      for row in reader:
          print(' | '.join(row))

read_csv('example.csv')
      </code></pre>
      
      <h3>Assignment 3</h3>
      <p>Write a Python program that reads a JSON file, updates a value, and writes the updated data back to the JSON file. Use a context manager to open and close the file.</p>
      <pre><code>
import json

def update_json(file_path, key, new_value):
  with open(file_path, 'r') as jsonfile:
      data = json.load(jsonfile)
  
  data[key] = new_value
  
  with open(file_path, 'w') as jsonfile:
      json.dump(data, jsonfile)

update_json('example.json', 'age', 35)
      </code></pre>
      </section>`,
      subSections: [
        {
          id:'different-file-formats', title:'Different file formats', content:`<section id="different-file-formats">
          <h2>Different File Formats</h2>
          <p>Python provides extensive support for handling various file formats, making it a versatile language for data processing and manipulation. In this section, you will learn how to read from and write to different file formats such as CSV, JSON, XML, and Excel. Understanding how to work with these formats is essential for data analysis, web development, and many other fields.</p>
  
          <h3>What You Will Learn</h3>
          <p>In this section, we will cover:</p>
          <ul>
            <li>Reading from and writing to CSV files</li>
            <li>Reading from and writing to JSON files</li>
            <li>Reading from and writing to XML files</li>
            <li>Reading from and writing to Excel files</li>
          </ul>
  
          <h3>CSV Files</h3>
          <p>CSV (Comma-Separated Values) is a common file format for storing tabular data. Python's built-in <code>csv</code> module makes it easy to read from and write to CSV files.</p>
  
          <h4>Writing to a CSV File</h4>
          <pre><code>
  import csv
  
  # Writing to a CSV file
  with open('example.csv', 'w', newline='') as csvfile:
      writer = csv.writer(csvfile)
      writer.writerow(['Name', 'Age', 'City'])
      writer.writerow(['Alice', 30, 'New York'])
      writer.writerow(['Bob', 25, 'Los Angeles'])
          </code></pre>
  
          <h4>Reading from a CSV File</h4>
          <pre><code>
  import csv
  
  # Reading from a CSV file
  with open('example.csv', 'r') as csvfile:
      reader = csv.reader(csvfile)
      for row in reader:
          print(row)
          </code></pre>
  
          <h3>JSON Files</h3>
          <p>JSON (JavaScript Object Notation) is a popular data interchange format. Python's built-in <code>json</code> module makes it easy to read from and write to JSON files.</p>
  
          <h4>Writing to a JSON File</h4>
          <pre><code>
  import json
  
  # Writing to a JSON file
  data = {
      'name': 'Alice',
      'age': 30,
      'city': 'New York'
  }
  with open('example.json', 'w') as jsonfile:
      json.dump(data, jsonfile)
          </code></pre>
  
          <h4>Reading from a JSON File</h4>
          <pre><code>
  import json
  
  # Reading from a JSON file
  with open('example.json', 'r') as jsonfile:
      data = json.load(jsonfile)
      print(data)
          </code></pre>
  
          <h3>XML Files</h3>
          <p>XML (eXtensible Markup Language) is a widely used format for storing and transporting data. Python's <code>xml.etree.ElementTree</code> module provides methods to parse and create XML data.</p>
  
          <h4>Writing to an XML File</h4>
          <pre><code>
  import xml.etree.ElementTree as ET
  
  # Creating an XML structure
  root = ET.Element("data")
  person1 = ET.SubElement(root, "person", name="Alice")
  ET.SubElement(person1, "age").text = "30"
  ET.SubElement(person1, "city").text = "New York"
  person2 = ET.SubElement(root, "person", name="Bob")
  ET.SubElement(person2, "age").text = "25"
  ET.SubElement(person2, "city").text = "Los Angeles"
  
  # Writing to an XML file
  tree = ET.ElementTree(root)
  tree.write("example.xml")
          </code></pre>
  
          <h4>Reading from an XML File</h4>
          <pre><code>
  import xml.etree.ElementTree as ET
  
  # Reading from an XML file
  tree = ET.parse('example.xml')
  root = tree.getroot()
  
  for person in root.findall('person'):
      name = person.get('name')
      age = person.find('age').text
      city = person.find('city').text
      print(f'Name: {name}, Age: {age}, City: {city}')
          </code></pre>
  
          <h3>Excel Files</h3>
          <p>Excel is a widely used spreadsheet format. Python's <code>pandas</code> library provides robust methods for reading from and writing to Excel files.</p>
  
          <h4>Writing to an Excel File</h4>
          <pre><code>
  import pandas as pd
  
  # Creating a DataFrame
  data = {
      'Name': ['Alice', 'Bob'],
      'Age': [30, 25],
      'City': ['New York', 'Los Angeles']
  }
  df = pd.DataFrame(data)
  
  # Writing to an Excel file
  df.to_excel('example.xlsx', index=False)
          </code></pre>
  
          <h4>Reading from an Excel File</h4>
          <pre><code>
  import pandas as pd
  
  # Reading from an Excel file
  df = pd.read_excel('example.xlsx')
  print(df)
          </code></pre>
  
          <h3>Assignment 1</h3>
          <p>Write a Python program that reads data from a CSV file and writes the data to a JSON file. Use context managers to handle file operations.</p>
          <pre><code>
  import csv
  import json
  
  def csv_to_json(csv_file_path, json_file_path):
      with open(csv_file_path, 'r') as csvfile:
          reader = csv.DictReader(csvfile)
          rows = list(reader)
      
      with open(json_file_path, 'w') as jsonfile:
          json.dump(rows, jsonfile, indent=4)
  
  csv_to_json('example.csv', 'example.json')
          </code></pre>
  
          <h3>Assignment 2</h3>
          <p>Write a Python program that reads data from a JSON file and writes the data to an XML file. Use context managers to handle file operations.</p>
          <pre><code>
  import json
  import xml.etree.ElementTree as ET
  
  def json_to_xml(json_file_path, xml_file_path):
      with open(json_file_path, 'r') as jsonfile:
          data = json.load(jsonfile)
      
      root = ET.Element("data")
      for item in data:
          person = ET.SubElement(root, "person", name=item["Name"])
          ET.SubElement(person, "age").text = str(item["Age"])
          ET.SubElement(person, "city").text = item["City"]
      
      tree = ET.ElementTree(root)
      tree.write(xml_file_path)
  
  json_to_xml('example.json', 'example.xml')
          </code></pre>
  
          <h3>Assignment 3</h3>
          <p>Write a Python program that reads data from an Excel file and writes the data to a CSV file. Use context managers to handle file operations.</p>
          <pre><code>
  import pandas as pd
  
  def excel_to_csv(excel_file_path, csv_file_path):
      df = pd.read_excel(excel_file_path)
      df.to_csv(csv_file_path, index=False)
  
  excel_to_csv('example.xlsx', 'example.csv')
          </code></pre>
          </section>`,
        },
      ]
    },

    {
      id:'working-with-libraries', title:'Working with Libraries and Frameworks', content:`<section id="working-with-libraries">
      <h2>Working with Libraries</h2>
      <p>Libraries are an essential part of Python programming, providing pre-written code that can be reused to perform common tasks. Python has a vast standard library as well as numerous third-party libraries available for various purposes such as data analysis, web development, machine learning, and more. This section will introduce you to the basics of working with Python libraries, including installation, importing, and using libraries to simplify your coding tasks.</p>

      <h3>What You Will Learn</h3>
      <p>In this section, we will cover:</p>
      <ul>
        <li>Installing libraries using pip</li>
        <li>Importing libraries</li>
        <li>Using standard libraries</li>
        <li>Using popular third-party libraries</li>
        <li>Managing dependencies with virtual environments</li>
      </ul>

      <h3>Introduction to Different Libraries</h3>
      <p>Python libraries are collections of modules that provide specific functionality to perform a wide range of tasks without having to write code from scratch. Here are some of the libraries you will learn about in this section:</p>
      <ul>
        <li><strong>Requests:</strong> A simple and elegant library for making HTTP requests, useful for interacting with web APIs.</li>
        <li><strong>Pandas:</strong> A powerful data manipulation and analysis library that provides data structures like DataFrames.</li>
        <li><strong>NumPy:</strong> A library for numerical computing with support for large, multi-dimensional arrays and matrices.</li>
        <li><strong>Matplotlib:</strong> A plotting library for creating static, animated, and interactive visualizations in Python.</li>
        <li><strong>BeautifulSoup:</strong> A library for parsing HTML and XML documents, commonly used for web scraping.</li>
        <li><strong>SciPy:</strong> A library used for scientific and technical computing, built on NumPy.</li>
        <li><strong>Scikit-learn:</strong> A machine learning library that provides simple and efficient tools for data analysis and modeling.</li>
      </ul>
      <p>By the end of this section, you will have a good understanding of how to install, import, and use these libraries to perform various tasks, enhancing your Python programming skills significantly.</p>

      <h3>Installing Libraries</h3>
      <p>The most common way to install Python libraries is using pip, the Python package installer. Pip allows you to install libraries from the Python Package Index (PyPI) and other sources.</p>
      <pre><code>
# Installing a library using pip
pip install requests
      </code></pre>
      <p><strong>Explanation:</strong> The command above installs the <code>requests</code> library, which is a popular library for making HTTP requests in Python.</p>

      <h3>Importing Libraries</h3>
      <p>Once a library is installed, you can import it into your Python script using the <code>import</code> statement.</p>
      <pre><code>
# Importing a library
import requests

# Using the imported library
response = requests.get('https://api.example.com/data')
print(response.json())
      </code></pre>
      <p><strong>Explanation:</strong> The code above imports the <code>requests</code> library and uses it to make a GET request to an API.</p>

      <h3>Using Standard Libraries</h3>
      <p>Python's standard library includes many modules that provide useful functionalities. Some commonly used standard libraries include:</p>
      <ul>
        <li><code>math</code>: Mathematical functions</li>
        <li><code>datetime</code>: Date and time manipulation</li>
        <li><code>os</code>: Operating system interfaces</li>
        <li><code>sys</code>: System-specific parameters and functions</li>
        <li><code>re</code>: Regular expressions</li>
      </ul>
      <pre><code>
import math
import datetime
import os
import sys
import re

# Using the math library
print(math.sqrt(16))  # Output: 4.0

# Using the datetime library
now = datetime.datetime.now()
print(now)

# Using the os library
print(os.getcwd())

# Using the sys library
print(sys.version)

# Using the re library
pattern = r'\b[A-Za-z]{4,}\b'
text = 'This is an example sentence with some long words.'
matches = re.findall(pattern, text)
print(matches)  # Output: ['This', 'example', 'sentence', 'with', 'some', 'long', 'words']
      </code></pre>

      <h3>Using Popular Third-Party Libraries</h3>
      <p>Many third-party libraries provide powerful functionalities. Here are a few examples:</p>
      <ul>
        <li><code>numpy</code>: Numerical computing</li>
        <li><code>pandas</code>: Data manipulation and analysis</li>
        <li><code>matplotlib</code>: Plotting and visualization</li>
        <li><code>requests</code>: HTTP requests</li>
        <li><code>beautifulsoup4</code>: Web scraping</li>
      </ul>
      <pre><code>
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import requests
from bs4 import BeautifulSoup

# Using numpy for numerical computing
array = np.array([1, 2, 3, 4, 5])
print(array.mean())  # Output: 3.0

# Using pandas for data manipulation
data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}
df = pd.DataFrame(data)
print(df)

# Using matplotlib for plotting
plt.plot([1, 2, 3], [4, 5, 6])
plt.show()

# Using requests for HTTP requests
response = requests.get('https://api.example.com/data')
print(response.json())

# Using BeautifulSoup for web scraping
html = '<html><body><h1>Title</h1><p>Paragraph.</p></body></html>'
soup = BeautifulSoup(html, 'html.parser')
print(soup.h1.text)  # Output: Title
      </code></pre>

      <h3>Managing Dependencies with Virtual Environments</h3>
      <p>Virtual environments are a way to isolate your project's dependencies, ensuring that your project uses the correct versions of libraries without interfering with other projects. You can create a virtual environment using the <code>venv</code> module.</p>
      <pre><code>
# Creating a virtual environment
python -m venv myenv

# Activating the virtual environment (Windows)
myenv\\Scripts\\activate

# Activating the virtual environment (macOS/Linux)
source myenv/bin/activate

# Installing libraries within the virtual environment
pip install requests
      </code></pre>
      <p><strong>Explanation:</strong> The commands above create and activate a virtual environment named <code>myenv</code>. Once activated, any libraries installed using pip will be isolated to this environment.</p>

      <h3>Assignment 1</h3>
      <p>Write a Python program that uses the <code>requests</code> library to fetch data from a public API and print the JSON response. Ensure you install the <code>requests</code> library using pip.</p>
      <pre><code>
import requests

def fetch_data(api_url):
  response = requests.get(api_url)
  data = response.json()
  print(data)

fetch_data('https://api.example.com/data')
      </code></pre>

      <h3>Assignment 2</h3>
      <p>Write a Python program that uses the <code>pandas</code> library to create a DataFrame from a dictionary and save it to a CSV file. Ensure you install the <code>pandas</code> library using pip.</p>
      <pre><code>
import pandas as pd

def create_dataframe(data, csv_file):
  df = pd.DataFrame(data)
  df.to_csv(csv_file, index=False)
  print(f'DataFrame saved to {csv_file}')

data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}
create_dataframe(data, 'example.csv')
      </code></pre>

      <h3>Assignment 3</h3>
      <p>Write a Python program that uses the <code>matplotlib</code> library to plot a simple line graph. Ensure you install the <code>matplotlib</code> library using pip.</p>
      <pre><code>
import matplotlib.pyplot as plt

def plot_graph(x, y):
  plt.plot(x, y)
  plt.xlabel('X-axis')
  plt.ylabel('Y-axis')
  plt.title('Simple Line Graph')
  plt.show()

x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]
plot_graph(x, y)
      </code></pre>
      </section>`,
      subSections: [
        {
          id: 'popular-libraries', title: 'Popular Libraries', content:`<section id="popular-libraries">
          <h2>Popular Libraries</h2>
          <p>Python's ecosystem includes a wide range of libraries that simplify many tasks, from data analysis to web development and machine learning. This section provides an overview of some of the most popular and widely used libraries, explaining their purposes, how to install them, and basic usage examples. Understanding these libraries can significantly enhance your productivity and broaden your programming capabilities.</p>
  
          <h3>What You Will Learn</h3>
          <p>In this section, we will cover:</p>
          <ul>
            <li><strong>NumPy:</strong> Numerical computing</li>
            <li><strong>Pandas:</strong> Data manipulation and analysis</li>
            <li><strong>Matplotlib:</strong> Plotting and visualization</li>
            <li><strong>Requests:</strong> HTTP requests</li>
            <li><strong>BeautifulSoup:</strong> Web scraping</li>
            <li><strong>SciPy:</strong> Scientific computing</li>
            <li><strong>Scikit-learn:</strong> Machine learning</li>
          </ul>
  
          <h3>NumPy</h3>
          <p>NumPy (Numerical Python) is a library for numerical computing. It provides support for large multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays.</p>
          <pre><code>
  # Installing NumPy
  pip install numpy
  
  # Using NumPy
  import numpy as np
  
  # Creating an array
  array = np.array([1, 2, 3, 4, 5])
  print(array)
  
  # Performing operations on arrays
  print(array.mean())  # Output: 3.0
  print(array.std())   # Output: 1.4142135623730951
          </code></pre>
  
          <h3>Pandas</h3>
          <p>Pandas is a powerful library for data manipulation and analysis. It provides data structures like DataFrames, which are ideal for handling tabular data.</p>
          <pre><code>
  # Installing Pandas
  pip install pandas
  
  # Using Pandas
  import pandas as pd
  
  # Creating a DataFrame
  data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}
  df = pd.DataFrame(data)
  print(df)
  
  # Data manipulation
  print(df.describe())  # Summary statistics
  print(df[df['Age'] > 30])  # Filtering data
          </code></pre>
  
          <h3>Matplotlib</h3>
          <p>Matplotlib is a plotting library for creating static, animated, and interactive visualizations in Python. It is widely used for generating plots, histograms, bar charts, and more.</p>
          <pre><code>
  # Installing Matplotlib
  pip install matplotlib
  
  # Using Matplotlib
  import matplotlib.pyplot as plt
  
  # Creating a simple plot
  plt.plot([1, 2, 3], [4, 5, 6])
  plt.xlabel('X-axis')
  plt.ylabel('Y-axis')
  plt.title('Simple Line Plot')
  plt.show()
          </code></pre>
  
          <h3>Requests</h3>
          <p>Requests is a simple and elegant library for making HTTP requests. It is widely used for interacting with web APIs.</p>
          <pre><code>
  # Installing Requests
  pip install requests
  
  # Using Requests
  import requests
  
  # Making a GET request
  response = requests.get('https://api.example.com/data')
  print(response.status_code)  # Output: 200
  print(response.json())       # Output: JSON data
          </code></pre>
  
          <h3>BeautifulSoup</h3>
          <p>BeautifulSoup is a library for parsing HTML and XML documents. It is commonly used for web scraping, allowing you to extract data from web pages.</p>
          <pre><code>
  # Installing BeautifulSoup
  pip install beautifulsoup4
  
  # Using BeautifulSoup
  from bs4 import BeautifulSoup
  
  # Parsing HTML
  html = '<html><body><h1>Title</h1><p>Paragraph.</p></body></html>'
  soup = BeautifulSoup(html, 'html.parser')
  print(soup.h1.text)  # Output: Title
  print(soup.p.text)   # Output: Paragraph.
          </code></pre>
  
          <h3>SciPy</h3>
          <p>SciPy is a library used for scientific and technical computing. It builds on NumPy and provides a large number of higher-level functions that operate on arrays and matrices.</p>
          <pre><code>
  # Installing SciPy
  pip install scipy
  
  # Using SciPy
  import numpy as np
  from scipy import stats
  
  # Creating an array
  data = np.array([1, 2, 2, 3, 4, 4, 4, 5, 6])
  
  # Performing statistical operations
  print(stats.mode(data))  # Output: ModeResult(mode=array([4]), count=array([3]))
  print(stats.describe(data))  # Output: DescribeResult
          </code></pre>
  
          <h3>Scikit-learn</h3>
          <p>Scikit-learn is a machine learning library that provides simple and efficient tools for data analysis and modeling. It includes various algorithms for classification, regression, clustering, and more.</p>
          <pre><code>
  # Installing Scikit-learn
  pip install scikit-learn
  
  # Using Scikit-learn
  from sklearn.datasets import load_iris
  from sklearn.model_selection import train_test_split
  from sklearn.ensemble import RandomForestClassifier
  from sklearn.metrics import accuracy_score
  
  # Loading dataset
  iris = load_iris()
  X = iris.data
  y = iris.target
  
  # Splitting data into training and testing sets
  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
  
  # Training a classifier
  clf = RandomForestClassifier(n_estimators=100)
  clf.fit(X_train, y_train)
  
  # Making predictions
  y_pred = clf.predict(X_test)
  
  # Evaluating the model
  print(accuracy_score(y_test, y_pred))  # Output: Accuracy score
          </code></pre>
  
          <h3>Assignment 1</h3>
          <p>Write a Python program that uses the <code>requests</code> library to fetch data from a public API and print the JSON response. Ensure you install the <code>requests</code> library using pip.</p>
          <pre><code>
  import requests
  
  def fetch_data(api_url):
      response = requests.get(api_url)
      data = response.json()
      print(data)
  
  fetch_data('https://api.example.com/data')
          </code></pre>
  
          <h3>Assignment 2</h3>
          <p>Write a Python program that uses the <code>pandas</code> library to create a DataFrame from a dictionary and save it to a CSV file. Ensure you install the <code>pandas</code> library using pip.</p>
          <pre><code>
  import pandas as pd
  
  def create_dataframe(data, csv_file):
      df = pd.DataFrame(data)
      df.to_csv(csv_file, index=False)
      print(f'DataFrame saved to {csv_file}')
  
  data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35]}
  create_dataframe(data, 'example.csv')
          </code></pre>
  
          <h3>Assignment 3</h3>
          <p>Write a Python program that uses the <code>matplotlib</code> library to plot a simple line graph. Ensure you install the <code>matplotlib</code> library using pip.</p>
          <pre><code>
  import matplotlib.pyplot as plt
  
  def plot_graph(x, y):
      plt.plot(x, y)
      plt.xlabel('X-axis')
      plt.ylabel('Y-axis')
      plt.title('Simple Line Graph')
      plt.show()
  
  x = [1, 2, 3, 4, 5]
  y = [2, 3, 5, 7, 11]
  plot_graph(x, y)
          </code></pre>
  
          <h3>Assignment 4</h3>
          <p>Write a Python program that uses the <code>beautifulsoup4</code> library to scrape the title and paragraph from a simple HTML page. Ensure you install the <code>beautifulsoup4</code> library using pip.</p>
          <pre><code>
  from bs4 import BeautifulSoup
  
  def scrape_html(html_content):
      soup = BeautifulSoup(html_content, 'html.parser')
      title = soup.h1.text
      paragraph = soup.p.text
      print(f'Title: {title}')
      print(f'Paragraph: {paragraph}')
  
  html = '<html><body><h1>Title</h1><p>Paragraph.</p></body></html>'
  scrape_html(html)
          </code></pre>
          </section>`,
        },
        {
          id:'web-frameworks', title:'Web Frameworks', content: `<section id="web-frameworks">
          <h2>Web Frameworks</h2>
          <p>Web frameworks are essential tools for building and deploying web applications efficiently. They provide a structured way to create and manage web applications, offering features such as URL routing, database integration, and templating engines. In this section, you will learn about some of the most popular web frameworks in Python, including their key features, installation, and basic usage.</p>
  
          <h3>What You Will Learn</h3>
          <p>In this section, we will cover:</p>
          <ul>
            <li>Django</li>
            <li>Flask</li>
            <li>FastAPI</li>
          </ul>
  
          <h3>Django</h3>
          <p>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It includes many built-in features such as an ORM (Object-Relational Mapping), an admin interface, and authentication.</p>
          <pre><code>
  # Installing Django
  pip install django
  
  # Creating a new Django project
  django-admin startproject myproject
  
  # Running the development server
  cd myproject
  python manage.py runserver
          </code></pre>
          <p><strong>Explanation:</strong> The commands above install Django, create a new Django project named "myproject", and start the development server. You can access the server at <code>http://127.0.0.1:8000/</code>.</p>
  
          <h4>Creating a Simple Django App</h4>
          <pre><code>
  # Creating a new app
  python manage.py startapp myapp
  
  # Adding the app to settings.py
  # In myproject/settings.py, add 'myapp' to INSTALLED_APPS
  
  INSTALLED_APPS = [
      ...
      'myapp',
  ]
  
  # Defining a view in myapp/views.py
  from django.http import HttpResponse
  
  def index(request):
      return HttpResponse("Hello, world!")
  
  # Mapping the view to a URL in myapp/urls.py
  from django.urls import path
  from . import views
  
  urlpatterns = [
      path('', views.index, name='index'),
  ]
  
  # Including the app's URLs in the project's urls.py
  # In myproject/urls.py, add an include for myapp.urls
  
  from django.urls import include, path
  
  urlpatterns = [
      path('myapp/', include('myapp.urls')),
      path('admin/', admin.site.urls),
  ]
          </code></pre>
  
          <h4>Advanced Django Features</h4>
          <p>Django offers a wide range of advanced features for building robust web applications:</p>
          <ul>
            <li><strong>Admin Interface:</strong> Automatically generated from models for managing content.</li>
            <li><strong>Authentication:</strong> Built-in user authentication system for handling user accounts, groups, permissions, and cookie-based user sessions.</li>
            <li><strong>ORM:</strong> An object-relational mapper to define your data models entirely in Python and generate the database schema.</li>
            <li><strong>Form Handling:</strong> Forms framework to easily create and validate forms, and process form data securely.</li>
          </ul>
  
          <h3>Flask</h3>
          <p>Flask is a lightweight WSGI web application framework. It is designed with simplicity and flexibility in mind, allowing developers to create web applications with minimal setup.</p>
          <pre><code>
  # Installing Flask
  pip install flask
  
  # Creating a simple Flask app
  from flask import Flask
  
  app = Flask(__name__)
  
  @app.route('/')
  def hello_world():
      return 'Hello, World!'
  
  if __name__ == '__main__':
      app.run(debug=True)
          </code></pre>
          <p><strong>Explanation:</strong> The code above installs Flask and creates a simple Flask application that returns "Hello, World!" when accessed at the root URL. The development server is started with <code>app.run(debug=True)</code>.</p>
  
          <h4>Creating a Flask App with Templates and Static Files</h4>
          <pre><code>
  # Creating a Flask app with templates and static files
  from flask import Flask, render_template
  
  app = Flask(__name__)
  
  @app.route('/')
  def index():
      return render_template('index.html')
  
  if __name__ == '__main__':
      app.run(debug=True)
  
  # Directory structure:
  # myapp/
  # ├── static/
  # │   └── style.css
  # ├── templates/
  # │   └── index.html
  # └── app.py
  
  # index.html
  <!doctype html>
  <html>
  <head>
      <title>Hello, Flask!</title>
      <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
  </head>
  <body>
      <h1>Hello, Flask!</h1>
  </body>
  </html>
  
  # style.css
  body {
      font-family: Arial, sans-serif;
  }
          </code></pre>
  
          <h4>Advanced Flask Features</h4>
          <p>Flask can be extended with various extensions to add more functionalities:</p>
          <ul>
            <li><strong>Flask-SQLAlchemy:</strong> Adds support for SQLAlchemy ORM.</li>
            <li><strong>Flask-WTF:</strong> Adds support for WTForms, a form validation and rendering library.</li>
            <li><strong>Flask-Migrate:</strong> Handles SQLAlchemy database migrations.</li>
            <li><strong>Flask-Login:</strong> Manages user session and authentication.</li>
          </ul>
  
          <h3>FastAPI</h3>
          <p>FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. It is designed for high performance and ease of use, making it a great choice for building RESTful APIs.</p>
          <pre><code>
  # Installing FastAPI and Uvicorn (an ASGI server)
  pip install fastapi uvicorn
  
  # Creating a simple FastAPI app
  from fastapi import FastAPI
  
  app = FastAPI()
  
  @app.get('/')
  def read_root():
      return {"Hello": "World"}
  
  if __name__ == '__main__':
      import uvicorn
      uvicorn.run(app, host='127.0.0.1', port=8000)
          </code></pre>
          <p><strong>Explanation:</strong> The code above installs FastAPI and Uvicorn, then creates a simple FastAPI application that returns a JSON response with "Hello, World!" when accessed at the root URL. The Uvicorn server is started with <code>uvicorn.run(app, host='127.0.0.1', port=8000)</code>.</p>
  
          <h4>Creating a FastAPI App with Path Parameters and Request Body</h4>
          <pre><code>
  # Creating a FastAPI app with path parameters and request body
  from fastapi import FastAPI
  from pydantic import BaseModel
  
  app = FastAPI()
  
  class Item(BaseModel):
      name: str
      price: float
      is_offer: bool = None
  
  @app.get('/items/{item_id}')
  def read_item(item_id: int, q: str = None):
      return {"item_id": item_id, "q": q}
  
  @app.put('/items/{item_id}')
  def update_item(item_id: int, item: Item):
      return {"item_name": item.name, "item_price": item.price}
          </code></pre>
  
          <h4>Advanced FastAPI Features</h4>
          <p>FastAPI offers several advanced features that make it a powerful choice for building APIs:</p>
          <ul>
            <li><strong>Automatic Interactive API Documentation:</strong> FastAPI automatically generates interactive API documentation using Swagger UI and ReDoc.</li>
            <li><strong>Data Validation:</strong> Built-in data validation using Pydantic.</li>
            <li><strong>Dependency Injection:</strong> Support for dependency injection for managing dependencies.</li>
            <li><strong>Asynchronous Support:</strong> Built-in support for asynchronous request handling, making it ideal for high-performance applications.</li>
          </ul>
  
          <h3>Assignment 1</h3>
          <p>Write a Python program that creates a simple Django app with a view that returns "Hello, Django!". Ensure you install Django using pip.</p>
          <pre><code>
  # Install Django
  pip install django
  
  # Create a Django project
  django-admin startproject myproject
  
  # Create a Django app
  cd myproject
  python manage.py startapp myapp
  
  # Add 'myapp' to INSTALLED_APPS in myproject/settings.py
  
  # Define a view in myapp/views.py
  from django.http import HttpResponse
  
  def hello_django(request):
      return HttpResponse("Hello, Django!")
  
  # Map the view to a URL in myapp/urls.py
  from django.urls import path
  from . import views
  
  urlpatterns = [
      path('hello/', views.hello_django, name='hello_django'),
  ]
  
  # Include the app's URLs in myproject/urls.py
  from django.urls import include, path
  
  urlpatterns = [
      path('myapp/', include('myapp.urls')),
      path('admin/', admin.site.urls),
  ]
  
  # Run the development server
  python manage.py runserver
          </code></pre>
  
          <h3>Assignment 2</h3>
          <p>Write a Python program that creates a simple Flask app with a route that returns "Hello, Flask!". Ensure you install Flask using pip.</p>
          <pre><code>
  # Install Flask
  pip install flask
  
  # Create a simple Flask app
  from flask import Flask
  
  app = Flask(__name__)
  
  @app.route('/')
  def hello_flask():
      return 'Hello, Flask!'
  
  if __name__ == '__main__':
      app.run(debug=True)
          </code></pre>
  
          <h3>Assignment 3</h3>
          <p>Write a Python program that creates a simple FastAPI app with a route that returns a JSON response with "Hello, FastAPI!". Ensure you install FastAPI and Uvicorn using pip.</p>
          <pre><code>
  # Install FastAPI and Uvicorn
  pip install fastapi uvicorn
  
  # Create a simple FastAPI app
  from fastapi import FastAPI
  
  app = FastAPI()
  
  @app.get('/')
  def hello_fastapi():
      return {"message": "Hello, FastAPI!"}
  
  if __name__ == '__main__':
      import uvicorn
      uvicorn.run(app, host='127.0.0.1', port=8000)
          </code></pre>
          </section>`,
        },
        {
          id:'testing-frameworks', title:'Testing Frameworks', content:`<section id="testing-frameworks">
          <h2>Testing Frameworks</h2>
          <p>Testing is a crucial aspect of software development, ensuring that your code works as expected and helps prevent bugs and regressions. Python offers several testing frameworks that make it easier to write, organize, and run tests. This section introduces you to some of the most popular testing frameworks in Python, including their key features, installation, and basic usage.</p>
  
          <h3>What You Will Learn</h3>
          <p>In this section, we will cover:</p>
          <ul>
            <li>Unittest</li>
            <li>Pytest</li>
            <li>Doctest</li>
          </ul>
  
          <h3>Unittest</h3>
          <p>Unittest is a built-in Python module for writing and running tests. It is inspired by the JUnit framework from Java and is suitable for both small and large projects.</p>
          <pre><code>
  # Using Unittest
  import unittest
  
  class TestStringMethods(unittest.TestCase):
  
      def test_upper(self):
          self.assertEqual('foo'.upper(), 'FOO')
  
      def test_isupper(self):
          self.assertTrue('FOO'.isupper())
          self.assertFalse('Foo'.isupper())
  
      def test_split(self):
          s = 'hello world'
          self.assertEqual(s.split(), ['hello', 'world'])
          with self.assertRaises(TypeError):
              s.split(2)
  
  if __name__ == '__main__':
      unittest.main()
          </code></pre>
          <p><strong>Explanation:</strong> The code above defines a test case for string methods using Unittest. The test methods use assertions to check the expected outcomes.</p>
  
          <h4>Advanced Unittest Features</h4>
          <p>Unittest offers several advanced features to enhance your testing experience:</p>
          <ul>
            <li><strong>Test Fixtures:</strong> Setup and teardown methods to prepare the environment before and after tests.</li>
            <li><strong>Test Suites:</strong> Organize and run multiple test cases together.</li>
            <li><strong>Mocking:</strong> Mock objects to simulate real objects for testing.</li>
            <li><strong>Command Line Interface:</strong> Run tests from the command line with various options.</li>
          </ul>
  
          <h3>Pytest</h3>
          <p>Pytest is a powerful testing framework that makes it easy to write simple and scalable test cases. It is known for its simple syntax, powerful fixtures, and rich plugin architecture.</p>
          <pre><code>
  # Installing Pytest
  pip install pytest
  
  # Using Pytest
  def test_upper():
      assert 'foo'.upper() == 'FOO'
  
  def test_isupper():
      assert 'FOO'.isupper()
      assert not 'Foo'.isupper()
  
  def test_split():
      s = 'hello world'
      assert s.split() == ['hello', 'world']
      with pytest.raises(TypeError):
          s.split(2)
  
  if __name__ == '__main__':
      pytest.main()
          </code></pre>
          <p><strong>Explanation:</strong> The code above defines test functions using Pytest. Assertions are used to check the expected outcomes, and the <code>pytest.raises</code> context manager is used to test for exceptions.</p>
  
          <h4>Advanced Pytest Features</h4>
          <p>Pytest offers several advanced features to enhance your testing experience:</p>
          <ul>
            <li><strong>Fixtures:</strong> Setup and teardown logic to create reusable test components.</li>
            <li><strong>Parametrized Tests:</strong> Run a test with multiple sets of data.</li>
            <li><strong>Plugins:</strong> Extend Pytest's functionality with various plugins.</li>
            <li><strong>Detailed Assertions:</strong> Enhanced assertions with detailed error messages.</li>
          </ul>
  
          <h3>Doctest</h3>
          <p>Doctest is a module that tests interactive Python examples in docstrings. It is useful for ensuring that code examples in documentation are correct and up-to-date.</p>
          <pre><code>
  # Using Doctest
  def add(a, b):
      """
      Adds two numbers and returns the result.
  
      >>> add(2, 3)
      5
      >>> add(-1, 1)
      0
      >>> add(0, 0)
      0
      """
      return a + b
  
  if __name__ == '__main__':
      import doctest
      doctest.testmod()
          </code></pre>
          <p><strong>Explanation:</strong> The code above defines a simple function with examples in the docstring. Doctest runs these examples as tests to ensure they produce the expected results.</p>
  
          <h4>Advanced Doctest Features</h4>
          <p>Doctest offers several advanced features to enhance your testing experience:</p>
          <ul>
            <li><strong>Test Directives:</strong> Control the behavior of Doctest with special comments.</li>
            <li><strong>Doctest Options:</strong> Customize the behavior of Doctest with various options.</li>
            <li><strong>Embedding Tests:</strong> Embed tests in documentation and verify their correctness.</li>
            <li><strong>Running Doctests:</strong> Run doctests from the command line or within a script.</li>
          </ul>
  
          <h3>Assignment 1</h3>
          <p>Write a Python program that uses Unittest to test a function that calculates the factorial of a number. Ensure you install Unittest using pip.</p>
          <pre><code>
  import unittest
  
  def factorial(n):
      if n == 0:
          return 1
      else:
          return n * factorial(n-1)
  
  class TestFactorial(unittest.TestCase):
  
      def test_factorial(self):
          self.assertEqual(factorial(5), 120)
          self.assertEqual(factorial(0), 1)
          self.assertEqual(factorial(1), 1)
          self.assertEqual(factorial(3), 6)
  
  if __name__ == '__main__':
      unittest.main()
          </code></pre>
  
          <h3>Assignment 2</h3>
          <p>Write a Python program that uses Pytest to test a function that reverses a string. Ensure you install Pytest using pip.</p>
          <pre><code>
  # Install Pytest
  pip install pytest
  
  def reverse_string(s):
      return s[::-1]
  
  def test_reverse_string():
      assert reverse_string('hello') == 'olleh'
      assert reverse_string('') == ''
      assert reverse_string('Python') == 'nohtyP'
  
  if __name__ == '__main__':
      pytest.main()
          </code></pre>
  
          <h3>Assignment 3</h3>
          <p>Write a Python program that uses Doctest to test a function that checks if a number is prime. Ensure you install Doctest using pip.</p>
          <pre><code>
  def is_prime(n):
      """
      Checks if a number is prime.
  
      >>> is_prime(5)
      True
      >>> is_prime(4)
      False
      >>> is_prime(13)
      True
      >>> is_prime(1)
      False
      """
      if n <= 1:
          return False
      for i in range(2, int(n ** 0.5) + 1):
          if n % i == 0:
              return False
      return True
  
  if __name__ == '__main__':
      import doctest
      doctest.testmod()
          </code></pre>
          </section>`,
        },
      ]
    },
    {
      id:'database-knowledge', title:'Database Knowledge', content:`<section id="database-knowledge">
      <h2>Database Knowledge</h2>
      <p>Databases are essential for storing, managing, and retrieving data in web applications. Understanding how to interact with databases is crucial for any developer. This section introduces you to the basics of databases, SQL, and how to use databases in Python.</p>

      <h3>What You Will Learn</h3>
      <p>In this section, we will cover:</p>
      <ul>
        <li>Introduction to Databases</li>
        <li>SQL Basics</li>
        <li>Using SQLite with Python</li>
        <li>Using PostgreSQL with Python</li>
        <li>Using SQLAlchemy</li>
      </ul>

      <h3>Introduction to Databases</h3>
      <p>Databases are organized collections of data that can be easily accessed, managed, and updated. There are two main types of databases:</p>
      <ul>
        <li><strong>Relational Databases:</strong> Use tables to store data, with relationships between tables. Examples include SQLite, PostgreSQL, MySQL, and Oracle.</li>
        <li><strong>NoSQL Databases:</strong> Store data in non-tabular forms such as key-value pairs, documents, or graphs. Examples include MongoDB, Cassandra, and Redis.</li>
      </ul>
      <p>In this section, we will focus on relational databases and SQL (Structured Query Language), which is used to communicate with relational databases.</p>

      <h3>SQL Basics</h3>
      <p>SQL is a standard language for interacting with relational databases. Here are some basic SQL commands:</p>
      <pre><code>
-- Creating a table
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE
);

-- Inserting data into a table
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

-- Querying data from a table
SELECT * FROM users;

-- Updating data in a table
UPDATE users SET email = 'newalice@example.com' WHERE name = 'Alice';

-- Deleting data from a table
DELETE FROM users WHERE name = 'Alice';
      </code></pre>
      <p><strong>Explanation:</strong> The commands above demonstrate how to create a table, insert data, query data, update data, and delete data using SQL.</p>

      <h3>Using SQLite with Python</h3>
      <p>SQLite is a lightweight, file-based database that is easy to set up and use. It is included with Python, so no additional installation is required.</p>
      <pre><code>
import sqlite3

# Connecting to SQLite
conn = sqlite3.connect('example.db')
c = conn.cursor()

# Creating a table
c.execute('''CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT UNIQUE)''')

# Inserting data into the table
c.execute('''INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com')''')
conn.commit()

# Querying data from the table
c.execute('''SELECT * FROM users''')
print(c.fetchall())

# Closing the connection
conn.close()
      </code></pre>
      <p><strong>Explanation:</strong> The code above demonstrates how to connect to an SQLite database, create a table, insert data, query data, and close the connection using Python.</p>

      <h3>Using PostgreSQL with Python</h3>
      <p>PostgreSQL is a powerful, open-source relational database system. To use PostgreSQL with Python, you need to install the <code>psycopg2</code> library.</p>
      <pre><code>
# Installing psycopg2
pip install psycopg2

# Using psycopg2 to interact with PostgreSQL
import psycopg2

# Connecting to PostgreSQL
conn = psycopg2.connect(
  dbname='exampledb',
  user='dbuser',
  password='password',
  host='localhost'
)
c = conn.cursor()

# Creating a table
c.execute('''CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) UNIQUE)''')
conn.commit()

# Inserting data into the table
c.execute('''INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com')''')
conn.commit()

# Querying data from the table
c.execute('''SELECT * FROM users''')
print(c.fetchall())

# Closing the connection
conn.close()
      </code></pre>
      <p><strong>Explanation:</strong> The code above demonstrates how to connect to a PostgreSQL database, create a table, insert data, query data, and close the connection using Python and the <code>psycopg2</code> library.</p>

      <h3>Using SQLAlchemy</h3>
      <p>SQLAlchemy is a powerful ORM (Object-Relational Mapping) library for Python. It provides a high-level abstraction over relational databases, allowing you to work with Python objects instead of raw SQL queries.</p>
      <pre><code>
# Installing SQLAlchemy
pip install sqlalchemy

# Using SQLAlchemy to interact with a database
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Setting up the database
engine = create_engine('sqlite:///example.db')
Base = declarative_base()

# Defining a User model
class User(Base):
  __tablename__ = 'users'
  id = Column(Integer, primary_key=True)
  name = Column(String)
  email = Column(String, unique=True)

# Creating the users table
Base.metadata.create_all(engine)

# Creating a new session
Session = sessionmaker(bind=engine)
session = Session()

# Adding a new user
new_user = User(name='Alice', email='alice@example.com')
session.add(new_user)
session.commit()

# Querying users
users = session.query(User).all()
for user in users:
  print(user.name, user.email)

# Closing the session
session.close()
      </code></pre>
      <p><strong>Explanation:</strong> The code above demonstrates how to set up SQLAlchemy, define a model, create a table, add a new user, query users, and close the session using Python.</p>

      <h3>Assignment 1</h3>
      <p>Write a Python program that uses SQLite to create a table for storing book information (title, author, year), insert a few records, and query all records.</p>
      <pre><code>
import sqlite3

# Connecting to SQLite
conn = sqlite3.connect('books.db')
c = conn.cursor()

# Creating a table
c.execute('''CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, author TEXT, year INTEGER)''')

# Inserting data into the table
c.execute('''INSERT INTO books (title, author, year) VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', 1925)''')
c.execute('''INSERT INTO books (title, author, year) VALUES ('1984', 'George Orwell', 1949)''')
c.execute('''INSERT INTO books (title, author, year) VALUES ('To Kill a Mockingbird', 'Harper Lee', 1960)''')
conn.commit()

# Querying data from the table
c.execute('''SELECT * FROM books''')
print(c.fetchall())

# Closing the connection
conn.close()
      </code></pre>

      <h3>Assignment 2</h3>
      <p>Write a Python program that uses PostgreSQL to create a table for storing employee information (name, position, salary), insert a few records, and query all records. Ensure you install <code>psycopg2</code> using pip.</p>
      <pre><code>
import psycopg2

# Connecting to PostgreSQL
conn = psycopg2.connect(
  dbname='exampledb',
  user='dbuser',
  password='password',
  host='localhost'
)
c = conn.cursor()

# Creating a table
c.execute('''CREATE TABLE employees (id SERIAL PRIMARY KEY, name VARCHAR(100), position VARCHAR(100), salary INTEGER)''')
conn.commit()

# Inserting data into the table
c.execute('''INSERT INTO employees (name, position, salary) VALUES ('John Doe', 'Manager', 60000)''')
c.execute('''INSERT INTO employees (name, position, salary) VALUES ('Jane Smith', 'Developer', 55000)''')
c.execute('''INSERT INTO employees (name, position, salary) VALUES ('Mike Johnson', 'Designer', 50000)''')
conn.commit()

# Querying data from the table
c.execute('''SELECT * FROM employees''')
print(c.fetchall())

# Closing the connection
conn.close()
      </code></pre>

      <h3>Assignment 3</h3>
      <p>Write a Python program that uses SQLAlchemy to create a table for storing product information (name, description, price), insert a few records, and query all records. Ensure you install SQLAlchemy using pip.</p>
      <pre><code>
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Setting up the database
engine = create_engine('sqlite:///products.db')
Base = declarative_base()

# Defining a Product model
class Product(Base):
  __tablename__ = 'products'
  id = Column(Integer, primary_key=True)
  name = Column(String)
  description = Column(String)
  price = Column(Float)

# Creating the products table
Base.metadata.create_all(engine)

# Creating a new session
Session = sessionmaker(bind=engine)
session = Session()

# Adding new products
product1 = Product(name='Laptop', description='A powerful laptop', price=999.99)
product2 = Product(name='Smartphone', description='A modern smartphone', price=699.99)
product3 = Product(name='Tablet', description='A versatile tablet', price=499.99)
session.add(product1)
session.add(product2)
session.add(product3)
session.commit()

# Querying products
products = session.query(Product).all()
for product in products:
  print(product.name, product.description, product.price)

# Closing the session
session.close()
      </code></pre>
      </section>`
    },
    {
      id:'verion-control', title:'Version Control', content: `<section id="version-control">
      <h2>Version Control</h2>
        <p>Version control systems are essential tools for managing changes to your codebase over time. They help you track changes, collaborate with others, and maintain a history of your project. In this section, we will focus on Git, the most widely used version control system, and GitHub, a platform for hosting and collaborating on Git repositories.</p>

        <h3>What You Will Learn</h3>
        <p>In this section, we will cover:</p>
        <ul>
          <li>Introduction to Version Control</li>
          <li>Installing Git</li>
          <li>Basic Git Commands</li>
          <li>Working with Remote Repositories</li>
          <li>Branching and Merging</li>
          <li>Using GitHub</li>
        </ul>

        <h3>Introduction to Version Control</h3>
        <p>Version control systems (VCS) allow you to manage changes to your code and collaborate with others. They provide a way to track revisions, revert to previous versions, and handle conflicts that arise from multiple people working on the same codebase.</p>
        <p>Some popular version control systems include Git, Mercurial, and Subversion. In this section, we will focus on Git due to its popularity and powerful features.</p>

        <h3>Installing Git</h3>
        <p>Before you can use Git, you need to install it on your system. Follow the instructions for your operating system:</p>
        <ul>
          <li><a href="https://git-scm.com/download/win">Windows</a></li>
          <li><a href="https://git-scm.com/download/mac">MacOS</a></li>
          <li><a href="https://git-scm.com/download/linux">Linux</a></li>
        </ul>
        <p>After installing Git, you can verify the installation by running the following command in your terminal or command prompt:</p>
        <pre><code>git --version</code></pre>

        <h3>Basic Git Commands</h3>
        <p>Here are some basic Git commands to get you started:</p>
        <pre><code>
# Configuring Git with your user name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initializing a new Git repository
git init

# Cloning an existing repository
git clone https://github.com/user/repository.git

# Checking the status of your repository
git status

# Adding files to the staging area
git add file.txt

# Committing changes to the repository
git commit -m "Commit message"

# Viewing the commit history
git log

# Pushing changes to a remote repository
git push origin main

# Pulling changes from a remote repository
git pull origin main
        </code></pre>
        <p><strong>Explanation:</strong> The commands above show how to configure Git, initialize a repository, clone a repository, check the status, add files, commit changes, view the commit history, push changes, and pull changes.</p>

        <h3>Working with Remote Repositories</h3>
        <p>Remote repositories allow you to collaborate with others by sharing your code on platforms like GitHub, GitLab, and Bitbucket. Here are some commands for working with remote repositories:</p>
        <pre><code>
# Adding a remote repository
git remote add origin https://github.com/user/repository.git

# Pushing changes to the remote repository
git push -u origin main

# Fetching changes from the remote repository
git fetch origin

# Merging changes from the remote repository
git merge origin/main

# Viewing remote repositories
git remote -v
        </code></pre>
        <p><strong>Explanation:</strong> The commands above show how to add a remote repository, push changes, fetch changes, merge changes, and view remote repositories.</p>

        <h3>Branching and Merging</h3>
        <p>Branches allow you to work on different features or fixes without affecting the main codebase. Merging combines changes from different branches. Here are some commands for branching and merging:</p>
        <pre><code>
# Creating a new branch
git branch feature-branch

# Switching to a branch
git checkout feature-branch

# Creating and switching to a new branch
git checkout -b feature-branch

# Merging a branch into the main branch
git checkout main
git merge feature-branch

# Deleting a branch
git branch -d feature-branch

# Viewing all branches
git branch
        </code></pre>
        <p><strong>Explanation:</strong> The commands above show how to create, switch, merge, delete, and view branches.</p>

        <h3>Using GitHub</h3>
        <p>GitHub is a platform for hosting and collaborating on Git repositories. Here are some steps to get started with GitHub:</p>
        <ol>
          <li>Create a GitHub account at <a href="https://github.com">github.com</a>.</li>
          <li>Create a new repository on GitHub.</li>
          <li>Clone the repository to your local machine using <code>git clone</code>.</li>
          <li>Add, commit, and push changes to the repository.</li>
          <li>Create pull requests to propose changes.</li>
          <li>Review and merge pull requests.</li>
        </ol>
        <p>GitHub also offers additional features such as issues, wikis, and GitHub Actions for continuous integration and deployment.</p>

        <h3>Assignment 1</h3>
        <p>Write a series of Git commands to create a new repository, add a file, commit the changes, and push it to a new GitHub repository.</p>
        <pre><code>
# Initialize a new Git repository
git init

# Create a new file
echo "# My New Repository" > README.md

# Add the file to the staging area
git add README.md

# Commit the changes
git commit -m "Initial commit"

# Add a remote repository
git remote add origin https://github.com/user/new-repository.git

# Push the changes to GitHub
git push -u origin main
        </code></pre>

        <h3>Assignment 2</h3>
        <p>Write a series of Git commands to create a new branch, make changes to a file, commit the changes, and merge the branch back into the main branch.</p>
        <pre><code>
# Create a new branch
git branch feature-branch

# Switch to the new branch
git checkout feature-branch

# Make changes to a file
echo "Some new changes" >> file.txt

# Add the file to the staging area
git add file.txt

# Commit the changes
git commit -m "Add new changes to file.txt"

# Switch back to the main branch
git checkout main

# Merge the feature branch into the main branch
git merge feature-branch

# Delete the feature branch
git branch -d feature-branch
        </code></pre>

        <h3>Assignment 3</h3>
        <p>Write a series of Git commands to clone an existing repository, create a new branch, make changes, push the branch to GitHub, and create a pull request on GitHub.</p>
        <pre><code>
# Clone an existing repository
git clone https://github.com/user/existing-repository.git

# Navigate to the repository directory
cd existing-repository

# Create a new branch
git checkout -b feature-branch

# Make changes to a file
echo "Some new changes" >> file.txt

# Add the file to the staging area
git add file.txt

# Commit the changes
git commit -m "Add new changes to file.txt"

# Push the branch to GitHub
git push -u origin feature-branch

# Go to GitHub and create a pull request for the feature branch
        </code></pre>
      </section>`
    },{
      id:'development-environment', title:'Development Environment', content: `<section id="development-environment">
      <h2>Development Environment</h2>
      <p>Setting up a proper development environment is crucial for efficient and effective coding. In this section, we will discuss the tools and software you need to set up your Python development environment, including IDEs, text editors, virtual environments, and version control systems.</p>

      <h3>What You Will Learn</h3>
      <p>In this section, we will cover:</p>
      <ul>
        <li>Integrated Development Environments (IDEs)</li>
        <li>Text Editors</li>
        <li>Virtual Environments</li>
        <li>Version Control Systems</li>
        <li>Python Package Management</li>
      </ul>

      <h3>Integrated Development Environments (IDEs)</h3>
      <p>IDEs provide comprehensive facilities to programmers for software development. They typically consist of a source code editor, build automation tools, and a debugger. Here are some popular Python IDEs:</p>
      <ul>
        <li><strong>PyCharm:</strong> A powerful IDE developed by JetBrains. It offers code analysis, a graphical debugger, an integrated unit tester, integration with version control systems, and supports web development with Django.</li>
        <li><strong>Visual Studio Code:</strong> A lightweight but powerful source code editor from Microsoft. It supports Python development through extensions and offers features like debugging, intelligent code completion, and integrated Git support.</li>
        <li><strong>Spyder:</strong> An open-source IDE primarily for scientific programming in Python. It includes advanced editing, interactive testing, debugging, and introspection features.</li>
      </ul>

      <h4>Example: Setting Up PyCharm</h4>
      <p>To set up PyCharm:</p>
      <ol>
        <li>Download and install PyCharm from the <a href="https://www.jetbrains.com/pycharm/download/">official website</a>.</li>
        <li>Open PyCharm and create a new project.</li>
        <li>Configure the project interpreter to use your desired Python version.</li>
        <li>Start coding in the PyCharm editor.</li>
      </ol>

      <h3>Text Editors</h3>
      <p>Text editors are simpler than IDEs but can be highly customized with plugins and extensions. Here are some popular text editors for Python development:</p>
      <ul>
        <li><strong>Sublime Text:</strong> A fast and versatile text editor with a rich set of features and an extensive range of plugins available.</li>
        <li><strong>Atom:</strong> An open-source text editor developed by GitHub. It is highly customizable and has a large community contributing to plugins and themes.</li>
        <li><strong>Notepad++:</strong> A free source code editor for Windows that supports various programming languages, including Python.</li>
      </ul>

      <h4>Example: Setting Up Visual Studio Code</h4>
      <p>To set up Visual Studio Code for Python development:</p>
      <ol>
        <li>Download and install Visual Studio Code from the <a href="https://code.visualstudio.com/">official website</a>.</li>
        <li>Install the Python extension for Visual Studio Code.</li>
        <li>Open a folder or workspace and start coding in the editor.</li>
      </ol>

      <h3>Virtual Environments</h3>
      <p>Virtual environments are used to create isolated Python environments for different projects, ensuring that each project has its own dependencies and does not interfere with others.</p>
      <pre><code>
# Creating a virtual environment
python -m venv myenv

# Activating the virtual environment (Windows)
myenv\\Scripts\\activate

# Activating the virtual environment (MacOS/Linux)
source myenv/bin/activate

# Deactivating the virtual environment
deactivate
      </code></pre>
      <p><strong>Explanation:</strong> The commands above show how to create, activate, and deactivate a virtual environment using the <code>venv</code> module.</p>

      <h3>Version Control Systems</h3>
      <p>Version control systems like Git are essential for managing changes to your codebase over time. They help you track changes, collaborate with others, and maintain a history of your project. Refer to the 'Version Control' section for detailed instructions on using Git.</p>

      <h3>Python Package Management</h3>
      <p>Python package management is crucial for managing dependencies in your projects. The most commonly used package manager is <code>pip</code>. Here are some basic commands:</p>
      <pre><code>
# Installing a package
pip install package-name

# Listing installed packages
pip list

# Uninstalling a package
pip uninstall package-name

# Creating a requirements file
pip freeze > requirements.txt

# Installing packages from a requirements file
pip install -r requirements.txt
      </code></pre>
      <p><strong>Explanation:</strong> The commands above show how to install, list, and uninstall packages using <code>pip</code>, as well as how to create and use a requirements file to manage project dependencies.</p>

      <h3>Assignment 1</h3>
      <p>Write a series of steps to set up a new Python project using PyCharm, including creating a virtual environment and installing necessary packages.</p>
      <pre><code>
# Step 1: Download and install PyCharm
# Step 2: Open PyCharm and create a new project
# Step 3: Create a virtual environment
python -m venv myenv
# Step 4: Activate the virtual environment
myenv\\Scripts\\activate (Windows)
source myenv/bin/activate (MacOS/Linux)
# Step 5: Install necessary packages
pip install package-name
      </code></pre>

      <h3>Assignment 2</h3>
      <p>Write a Python script that sets up a virtual environment, installs the Flask package, and lists all installed packages.</p>
      <pre><code>
import os
import subprocess

# Create a virtual environment
subprocess.run(['python', '-m', 'venv', 'myenv'])

# Activate the virtual environment
activate_script = os.path.join('myenv', 'Scripts', 'activate')
if os.name == 'posix':
  activate_script = os.path.join('myenv', 'bin', 'activate')

# Install the Flask package
subprocess.run(['pip', 'install', 'flask'])

# List installed packages
subprocess.run(['pip', 'list'])
      </code></pre>

      <h3>Assignment 3</h3>
      <p>Write a series of Git commands to create a new repository, add a file, commit the changes, and push it to a new GitHub repository.</p>
      <pre><code>
# Initialize a new Git repository
git init

# Create a new file
echo "# My New Repository" > README.md

# Add the file to the staging area
git add README.md

# Commit the changes
git commit -m "Initial commit"

# Add a remote repository
git remote add origin https://github.com/user/new-repository.git

# Push the changes to GitHub
git push -u origin main
      </code></pre>
      </section>`
    },
    {
      id:'project-management', title:'Project Management and Collaboration', content:`<section id="project-management">
      <h2>Project Management</h2>
        <p>Effective project management is essential for the successful delivery of software projects. It involves planning, organizing, and managing resources to achieve specific goals. In this section, we will discuss the key concepts and tools for managing software projects, including task management, version control, continuous integration, and Agile methodologies.</p>

        <h3>What You Will Learn</h3>
        <p>In this section, we will cover:</p>
        <ul>
          <li>Introduction to Project Management</li>
          <li>Task Management Tools</li>
          <li>Version Control Systems</li>
          <li>Continuous Integration and Deployment (CI/CD)</li>
          <li>Agile Methodologies</li>
        </ul>

        <h3>Introduction to Project Management</h3>
        <p>Project management involves applying knowledge, skills, tools, and techniques to project activities to meet project requirements. It is crucial for ensuring that projects are completed on time, within budget, and to the required quality standards.</p>

        <h3>Task Management Tools</h3>
        <p>Task management tools help teams organize, prioritize, and track work. Here are some popular task management tools:</p>
        <ul>
          <li><strong>Trello:</strong> A visual tool for organizing tasks using boards, lists, and cards.</li>
          <li><strong>Asana:</strong> A comprehensive project management tool with features for task tracking, project planning, and collaboration.</li>
          <li><strong>Jira:</strong> A powerful tool for managing software development projects, particularly suited for Agile methodologies.</li>
        </ul>
        <p>Example: Setting Up a Trello Board</p>
        <ol>
          <li>Create a Trello account at <a href="https://trello.com">trello.com</a>.</li>
          <li>Create a new board for your project.</li>
          <li>Add lists for different stages of your workflow (e.g., To Do, In Progress, Done).</li>
          <li>Add cards to represent tasks and move them between lists as work progresses.</li>
        </ol>

        <h3>Version Control Systems</h3>
        <p>Version control systems like Git are essential for managing changes to your codebase over time. They help you track changes, collaborate with others, and maintain a history of your project. Refer to the 'Version Control' section for detailed instructions on using Git.</p>

        <h3>Continuous Integration and Deployment (CI/CD)</h3>
        <p>CI/CD is a set of practices that enable teams to deliver code changes more frequently and reliably. CI involves automatically building and testing code changes, while CD involves deploying changes to production environments. Here are some popular CI/CD tools:</p>
        <ul>
          <li><strong>Jenkins:</strong> An open-source automation server that supports building, deploying, and automating any project.</li>
          <li><strong>Travis CI:</strong> A CI service used to build and test projects hosted on GitHub.</li>
          <li><strong>GitHub Actions:</strong> A CI/CD service integrated with GitHub that allows you to automate workflows directly in your GitHub repository.</li>
        </ul>
        <p>Example: Setting Up a CI Pipeline with GitHub Actions</p>
        <pre><code>
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Run tests
      run: |
        pytest
        </code></pre>

        <h3>Agile Methodologies</h3>
        <p>Agile methodologies focus on iterative development, continuous feedback, and flexibility to adapt to changing requirements. Here are some key Agile concepts:</p>
        <ul>
          <li><strong>Scrum:</strong> A framework for managing work with an emphasis on collaboration, accountability, and iterative progress.</li>
          <li><strong>Kanban:</strong> A method for managing work by visualizing tasks on a board and limiting work in progress.</li>
          <li><strong>Lean:</strong> A methodology focused on delivering value to customers by eliminating waste and improving processes.</li>
        </ul>
        <p>Example: Implementing Scrum</p>
        <ol>
          <li>Create a Scrum team consisting of a Product Owner, Scrum Master, and Development Team.</li>
          <li>Define a product backlog with user stories and prioritize them.</li>
          <li>Plan sprints (usually 2-4 weeks) where the team commits to completing a set of tasks from the backlog.</li>
          <li>Hold daily stand-up meetings to discuss progress and obstacles.</li>
          <li>Conduct sprint reviews and retrospectives to gather feedback and improve the process.</li>
        </ol>

        <h3>Assignment 1</h3>
        <p>Write a series of steps to set up a Trello board for a software development project, including creating lists for different stages of the workflow and adding tasks.</p>
        <pre><code>
# Step 1: Create a Trello account at trello.com
# Step 2: Create a new board for your project
# Step 3: Add lists for different stages (To Do, In Progress, Done)
# Step 4: Add cards to represent tasks and move them between lists as work progresses
        </code></pre>

        <h3>Assignment 2</h3>
        <p>Write a GitHub Actions workflow file to automate testing for a Python project, including steps for checking out the code, setting up Python, installing dependencies, and running tests.</p>
        <pre><code>
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    - name: Run tests
      run: |
        pytest
        </code></pre>

        <h3>Assignment 3</h3>
        <p>Write a series of steps to implement Scrum for a software development project, including defining roles, creating a product backlog, planning sprints, and conducting daily stand-up meetings.</p>
        <pre><code>
# Step 1: Create a Scrum team (Product Owner, Scrum Master, Development Team)
# Step 2: Define a product backlog with user stories and prioritize them
# Step 3: Plan sprints (2-4 weeks) with tasks from the backlog
# Step 4: Hold daily stand-up meetings to discuss progress and obstacles
# Step 5: Conduct sprint reviews and retrospectives to gather feedback and improve the process
        </code></pre>
      </section>`
    },
    {
      id:'application-deployment', title:'Application Deployment', content: `<section id="application-deployment">
      <h2>Application Deployment</h2>
      <p>Deploying an application is the process of making it available for use in a production environment. This involves transferring the application from a local development environment to a live server where users can access it. In this section, we will cover the key concepts and tools involved in deploying Python applications.</p>

      <h3>What You Will Learn</h3>
      <p>In this section, we will cover:</p>
      <ul>
        <li>Introduction to Deployment</li>
        <li>Web Hosting Platforms</li>
        <li>Setting Up a Virtual Private Server (VPS)</li>
        <li>Deploying with Docker</li>
        <li>Deploying to Cloud Services</li>
        <li>Continuous Deployment</li>
      </ul>

      <h3>Introduction to Deployment</h3>
      <p>Deployment involves several steps, including preparing the application, setting up the server environment, transferring the application to the server, configuring the server, and ensuring the application runs smoothly in the production environment.</p>
      <p>Some common deployment strategies include:</p>
      <ul>
        <li>Manual Deployment: Manually transferring files and configuring the server.</li>
        <li>Automated Deployment: Using scripts and tools to automate the deployment process.</li>
        <li>Containerized Deployment: Using containerization tools like Docker to package the application and its dependencies for easy deployment.</li>
      </ul>

      <h3>Web Hosting Platforms</h3>
      <p>There are several web hosting platforms where you can deploy your Python applications. Some popular options include:</p>
      <ul>
        <li><strong>Heroku:</strong> A platform-as-a-service (PaaS) that supports several programming languages, including Python. It offers easy deployment and scaling of applications.</li>
        <li><strong>PythonAnywhere:</strong> A cloud-based Python development and hosting environment. It allows you to run, develop, and deploy Python applications easily.</li>
        <li><strong>DigitalOcean:</strong> A cloud infrastructure provider that offers virtual private servers (VPS) for deploying applications.</li>
      </ul>
      <p>Example: Deploying to Heroku</p>
      <pre><code>
# Step 1: Install the Heroku CLI
# Follow the instructions at https://devcenter.heroku.com/articles/heroku-cli

# Step 2: Log in to Heroku
heroku login

# Step 3: Create a new Heroku app
heroku create my-app-name

# Step 4: Add a Procfile to your project
# Procfile
web: gunicorn app:app

# Step 5: Push your code to Heroku
git add .
git commit -m "Deploy to Heroku"
git push heroku main

# Step 6: Open your app in the browser
heroku open
      </code></pre>

      <h3>Setting Up a Virtual Private Server (VPS)</h3>
      <p>Setting up a VPS gives you more control over the server environment. Here are the basic steps for deploying an application on a VPS:</p>
      <ol>
        <li>Choose a VPS provider (e.g., DigitalOcean, Linode, AWS EC2).</li>
        <li>Create a new VPS instance and log in via SSH.</li>
        <li>Install the necessary software (e.g., Python, pip, web server, database).</li>
        <li>Transfer your application files to the VPS using SCP or Git.</li>
        <li>Set up a virtual environment and install dependencies.</li>
        <li>Configure the web server (e.g., Nginx, Apache) to serve your application.</li>
        <li>Start the application and ensure it runs smoothly.</li>
      </ol>
      <p>Example: Setting Up a VPS on DigitalOcean</p>
      <pre><code>
# Step 1: Create a new Droplet on DigitalOcean
# Follow the instructions at https://www.digitalocean.com/docs/droplets/how-to/create/

# Step 2: Log in to the Droplet via SSH
ssh root@your_droplet_ip

# Step 3: Update the package list and install Python
apt update
apt install python3-pip python3-venv

# Step 4: Transfer your application files to the Droplet
scp -r your_project_directory root@your_droplet_ip:/path/to/destination

# Step 5: Set up a virtual environment and install dependencies
cd /path/to/destination
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Step 6: Configure Nginx to serve your application
# /etc/nginx/sites-available/your_app
server {
  listen 80;
  server_name your_domain_or_ip;

  location / {
      proxy_pass http://127.0.0.1:8000;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
  }
}

# Enable the configuration and restart Nginx
ln -s /etc/nginx/sites-available/your_app /etc/nginx/sites-enabled
systemctl restart nginx

# Step 7: Start your application
gunicorn --bind 0.0.0.0:8000 app:app
      </code></pre>

      <h3>Deploying with Docker</h3>
      <p>Docker is a tool that allows you to package your application and its dependencies into a container, making it easy to deploy and run consistently across different environments.</p>
      <pre><code>
# Step 1: Install Docker
# Follow the instructions at https://docs.docker.com/get-docker/

# Step 2: Create a Dockerfile in your project directory
# Dockerfile
FROM python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]

# Step 3: Build the Docker image
docker build -t my-app .

# Step 4: Run the Docker container
docker run -d -p 8000:8000 my-app
      </code></pre>

      <h3>Deploying to Cloud Services</h3>
      <p>Cloud services like AWS, Google Cloud, and Azure provide comprehensive platforms for deploying and managing applications. Here are some common services for deploying Python applications:</p>
      <ul>
        <li><strong>AWS Elastic Beanstalk:</strong> An easy-to-use service for deploying and scaling web applications and services.</li>
        <li><strong>Google App Engine:</strong> A fully managed serverless platform for developing and hosting web applications.</li>
        <li><strong>Microsoft Azure App Service:</strong> A platform for building, deploying, and scaling web apps.</li>
      </ul>
      <p>Example: Deploying to AWS Elastic Beanstalk</p>
      <pre><code>
# Step 1: Install the Elastic Beanstalk CLI
pip install awsebcli

# Step 2: Initialize your Elastic Beanstalk application
eb init -p python-3.8 my-app --region us-west-2

# Step 3: Create an Elastic Beanstalk environment and deploy your application
eb create my-app-env
eb deploy

# Step 4: Open your application in the browser
eb open
      </code></pre>

      <h3>Continuous Deployment</h3>
      <p>Continuous Deployment (CD) is a practice where code changes are automatically deployed to production after passing automated tests. CD ensures that new features and fixes are delivered to users quickly and reliably.</p>
      <p>Example: Setting Up Continuous Deployment with GitHub Actions</p>
      <pre><code>
# .github/workflows/deploy.yml
name: Deploy

on:
push:
  branches:
    - main

jobs:
deploy:
  runs-on: ubuntu-latest

  steps:
  - uses: actions/checkout@v2
  - name: Set up Python
    uses: actions/setup-python@v2
    with:
      python-version: '3.x'
  - name: Install dependencies
    run: |
      python -m pip install --upgrade pip
      pip install -r requirements.txt
  - name: Deploy to Heroku
    env:
      HEROKU_API_KEY: #insert your HEROKU_API_KEY;
    run: |
      heroku git:remote -a my-app-name
      echo "machine api.heroku.com login <b>HEROKU_EMAIL</b> password <b>HEROKU_API_KEY</b>" > ~/.netrc
      echo "machine git.heroku.com login   <b>HEROKU_EMAIL</b> password <b>HEROKU_API_KEY</b>" >> ~/.netrc
      git push heroku main
      </code></pre>

      <h3>Assignment 1</h3>
      <p>Write a series of steps to deploy a Python web application to Heroku, including installing the Heroku CLI, creating a new app, adding a Procfile, and pushing your code.</p>
      <pre><code>
# Step 1: Install the Heroku CLI
# Follow the instructions at https://devcenter.heroku.com/articles/heroku-cli

# Step 2: Log in to Heroku
heroku login

# Step 3: Create a new Heroku app
heroku create my-app-name

# Step 4: Add a Procfile to your project
# Procfile
web: gunicorn app:app

# Step 5: Push your code to Heroku
git add .
git commit -m "Deploy to Heroku"
git push heroku main

# Step 6: Open your app in the browser
heroku open
      </code></pre>

      <h3>Assignment 2</h3>
      <p>Write a Dockerfile for a Python web application and provide the steps to build and run the Docker container.</p>
      <pre><code>
# Dockerfile
FROM python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "app:app"]

# Steps to build and run the Docker container
# Step 1: Build the Docker image
docker build -t my-app .

# Step 2: Run the Docker container
docker run -d -p 8000:8000 my-app
      </code></pre>

      <h3>Assignment 3</h3>
      <p>Write a GitHub Actions workflow file for continuous deployment of a Python web application to Heroku.</p>
      <pre><code>
# .github/workflows/deploy.yml
name: Deploy

on:
push:
  branches:
    - main

jobs:
deploy:
  runs-on: ubuntu-latest

  steps:
  - uses: actions/checkout@v2
  - name: Set up Python
    uses: actions/setup-python@v2
    with:
      python-version: '3.x'
  - name: Install dependencies
    run: |
      python -m pip install --upgrade pip
      pip install -r requirements.txt
  - name: Deploy to Heroku
    env:
      HEROKU_API_KEY: #insert your HEROKU_API_KEY;
    run: |
      heroku git:remote -a my-app-name
      echo "machine api.heroku.com login <b>HEROKU_EMAIL</b> password <b>HEROKU-API_KEY</b>" > ~/.netrc
      echo "machine git.heroku.com login  <b>HEROKU_EMAIL</b> password <b>HEROKU-API_KEY</b>" >> ~/.netrc
      git push heroku main
      </code></pre>
        
      </section>`
    },
    {
      id:'security-best-practises', title:'Security Best Practises', content: `<section id="security-best-practises">
      <h2>Security Best Practices</h2>
        <p>Ensuring the security of your applications is critical to protect sensitive data and maintain user trust. This section covers essential security practices that you should follow when developing Python applications.</p>

        <h3>What You Will Learn</h3>
        <p>In this section, we will cover:</p>
        <ul>
          <li>Introduction to Security</li>
          <li>Input Validation and Sanitization</li>
          <li>Authentication and Authorization</li>
          <li>Data Encryption</li>
          <li>Securely Storing Secrets</li>
          <li>Secure Coding Practices</li>
          <li>Security Testing and Auditing</li>
        </ul>

        <h3>Introduction to Security</h3>
        <p>Security involves protecting applications from threats and vulnerabilities. It encompasses various practices and techniques to ensure the confidentiality, integrity, and availability of data and services.</p>
        <p>Some common security threats include:</p>
        <ul>
          <li><strong>SQL Injection:</strong> Malicious code injection into SQL queries.</li>
          <li><strong>Cross-Site Scripting (XSS):</strong> Injection of malicious scripts into web pages viewed by other users.</li>
          <li><strong>Cross-Site Request Forgery (CSRF):</strong> Unauthorized actions performed on behalf of authenticated users.</li>
          <li><strong>Man-in-the-Middle (MITM):</strong> Interception and manipulation of data exchanged between parties.</li>
        </ul>

        <h3>Input Validation and Sanitization</h3>
        <p>Validating and sanitizing user input is crucial to prevent security vulnerabilities such as SQL injection and XSS attacks.</p>
        <pre><code>
# Example: Validating and sanitizing user input in Python
import re

def is_valid_username(username):
    return re.match("^[a-zA-Z0-9_]{3,20}$", username) is not None

username = input("Enter a username: ")
if is_valid_username(username):
    print("Valid username")
else:
    print("Invalid username")
        </code></pre>
        <p><strong>Explanation:</strong> The code above validates that the username contains only alphanumeric characters and underscores, and is between 3 and 20 characters long.</p>

        <h3>Authentication and Authorization</h3>
        <p>Authentication verifies the identity of users, while authorization determines what actions users are allowed to perform. Implementing strong authentication and authorization mechanisms is vital for application security.</p>
        <pre><code>
# Example: Implementing authentication using Flask
from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
users = {}

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = generate_password_hash(data['password'])
    users[username] = password
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    if username in users and check_password_hash(users[username], password):
        return jsonify({'message': 'Login successful'}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)
        </code></pre>
        <p><strong>Explanation:</strong> The code above implements user registration and login endpoints using Flask, with password hashing for secure storage.</p>

        <h3>Data Encryption</h3>
        <p>Encrypting sensitive data helps protect it from unauthorized access. Python provides libraries such as <code>cryptography</code> and <code>PyCryptodome</code> for implementing encryption.</p>
        <pre><code>
# Example: Encrypting and decrypting data using cryptography
from cryptography.fernet import Fernet

# Generate a key
key = Fernet.generate_key()
cipher_suite = Fernet(key)

# Encrypt data
data = b"Sensitive information"
encrypted_data = cipher_suite.encrypt(data)
print("Encrypted:", encrypted_data)

# Decrypt data
decrypted_data = cipher_suite.decrypt(encrypted_data)
print("Decrypted:", decrypted_data.decode())
        </code></pre>
        <p><strong>Explanation:</strong> The code above demonstrates how to generate a key, encrypt data, and decrypt data using the <code>cryptography</code> library.</p>

        <h3>Securely Storing Secrets</h3>
        <p>Storing secrets such as API keys, database credentials, and other sensitive information securely is essential to prevent unauthorized access.</p>
        <p>Here are some best practices for securely storing secrets:</p>
        <ul>
          <li>Use environment variables to store sensitive information.</li>
          <li>Use secret management services like AWS Secrets Manager or Azure Key Vault.</li>
          <li>Ensure that secrets are not hardcoded in the source code or configuration files.</li>
        </ul>

        <h3>Secure Coding Practices</h3>
        <p>Following secure coding practices helps prevent security vulnerabilities. Some common practices include:</p>
        <ul>
          <li>Use parameterized queries to prevent SQL injection.</li>
          <li>Sanitize and validate all user inputs.</li>
          <li>Implement proper error handling and logging.</li>
          <li>Use secure libraries and frameworks.</li>
          <li>Keep dependencies and software up to date.</li>
        </ul>

        <h3>Security Testing and Auditing</h3>
        <p>Regular security testing and auditing help identify and fix vulnerabilities in your application. Some common security testing methods include:</p>
        <ul>
          <li><strong>Static Analysis:</strong> Analyzing source code for potential vulnerabilities.</li>
          <li><strong>Dynamic Analysis:</strong> Testing the application while it is running to identify security issues.</li>
          <li><strong>Penetration Testing:</strong> Simulating attacks on the application to identify weaknesses.</li>
          <li><strong>Security Audits:</strong> Reviewing security policies, practices, and configurations.</li>
        </ul>
        <p>Example: Using Bandit for Static Analysis</p>
        <pre><code>
# Install Bandit
pip install bandit

# Run Bandit on your project
bandit -r path/to/your/project
        </code></pre>
        <p><strong>Explanation:</strong> Bandit is a tool designed to find common security issues in Python code. The command above runs Bandit on the specified project directory.</p>

        <h3>Assignment 1</h3>
        <p>Write a Python function that validates an email address using regular expressions and returns whether it is valid or not.</p>
        <pre><code>
import re

def is_valid_email(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"
    return re.match(pattern, email) is not None

# Test the function
print(is_valid_email("test@example.com"))  # Output: True
print(is_valid_email("invalid-email"))     # Output: False
        </code></pre>

        <h3>Assignment 2</h3>
        <p>Write a Python script that encrypts and decrypts a given text using the <code>cryptography</code> library.</p>
        <pre><code>
from cryptography.fernet import Fernet

# Generate a key
key = Fernet.generate_key()
cipher_suite = Fernet(key)

# Encrypt data
def encrypt_data(data):
    return cipher_suite.encrypt(data.encode())

# Decrypt data
def decrypt_data(encrypted_data):
    return cipher_suite.decrypt(encrypted_data).decode()

# Test the script
encrypted = encrypt_data("Sensitive information")
print("Encrypted:", encrypted)

decrypted = decrypt_data(encrypted)
print("Decrypted:", decrypted)
        </code></pre>

        <h3>Assignment 3</h3>
        <p>Write a Python script that uses environment variables to securely store and retrieve a database connection string.</p>
        <pre><code>
import os

# Set an environment variable (this would typically be done outside the script, e.g., in a .env file or the system environment)
os.environ['DATABASE_URL'] = 'postgresql://user:password@localhost:5432/mydatabase'

# Retrieve the environment variable
database_url = os.getenv('DATABASE_URL')

# Print the database URL
print("Database URL:", database_url)
        </code></pre>
      </section>`
    },
    {
      id:'api-web-services', title:'APIs and Web Services', content: `<section id="api-web-services">
      <h2>API and Web Services</h2>
        <p>APIs (Application Programming Interfaces) and web services allow different software applications to communicate with each other over the internet. They enable the integration of various systems and services, making it possible to access and manipulate data from different sources. In this section, we will cover the basics of APIs, RESTful web services, and how to create and consume APIs using Python.</p>

        <h3>What You Will Learn</h3>
        <p>In this section, we will cover:</p>
        <ul>
          <li>Introduction to APIs and Web Services</li>
          <li>Understanding RESTful APIs</li>
          <li>Creating RESTful APIs with Flask</li>
          <li>Consuming APIs with Requests</li>
          <li>Using FastAPI for Building APIs</li>
        </ul>

        <h3>Introduction to APIs and Web Services</h3>
        <p>APIs provide a set of rules and protocols for building and interacting with software applications. They define the methods and data structures that developers can use to communicate with an application or service. Web services are a type of API that use standard web protocols such as HTTP to interact with other applications.</p>

        <h3>Understanding RESTful APIs</h3>
        <p>REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs follow REST principles, providing a simple and scalable way to interact with web services. Key characteristics of RESTful APIs include:</p>
        <ul>
          <li><strong>Stateless:</strong> Each request from a client to a server must contain all the information needed to understand and process the request.</li>
          <li><strong>Resource-based:</strong> Data and functionality are accessed as resources using URIs (Uniform Resource Identifiers).</li>
          <li><strong>HTTP Methods:</strong> Use standard HTTP methods such as GET, POST, PUT, DELETE to perform operations on resources.</li>
          <li><strong>Representation:</strong> Resources can be represented in various formats, such as JSON, XML, or HTML.</li>
        </ul>

        <h3>Creating RESTful APIs with Flask</h3>
        <p>Flask is a lightweight web framework for Python that makes it easy to create RESTful APIs. Below is an example of how to create a simple RESTful API using Flask:</p>
        <pre><code>
from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample data
books = [
    {'id': 1, 'title': '1984', 'author': 'George Orwell'},
    {'id': 2, 'title': 'To Kill a Mockingbird', 'author': 'Harper Lee'},
]

@app.route('/api/books', methods=['GET'])
def get_books():
    return jsonify({'books': books})

@app.route('/api/books/<int:book_id>', methods=['GET'])
def get_book(book_id):
    book = next((book for book in books if book['id'] == book_id), None)
    if book is None:
        return jsonify({'message': 'Book not found'}), 404
    return jsonify(book)

@app.route('/api/books', methods=['POST'])
def add_book():
    new_book = request.get_json()
    books.append(new_book)
    return jsonify(new_book), 201

@app.route('/api/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    book = next((book for book in books if book['id'] == book_id), None)
    if book is None:
        return jsonify({'message': 'Book not found'}), 404
    updated_data = request.get_json()
    book.update(updated_data)
    return jsonify(book)

@app.route('/api/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    global books
    books = [book for book in books if book['id'] != book_id]
    return jsonify({'message': 'Book deleted'})

if __name__ == '__main__':
    app.run(debug=True)
        </code></pre>
        <p><strong>Explanation:</strong> The code above creates a simple RESTful API with Flask to manage a list of books. It includes endpoints to get all books, get a specific book by ID, add a new book, update a book, and delete a book.</p>

        <h3>Consuming APIs with Requests</h3>
        <p>The <code>requests</code> library in Python makes it easy to send HTTP requests and interact with APIs. Below is an example of how to consume an API using the <code>requests</code> library:</p>
        <pre><code>
import requests

# Sending a GET request
response = requests.get('https://jsonplaceholder.typicode.com/posts')
if response.status_code == 200:
    posts = response.json()
    for post in posts:
        print(f"{post['id']}: {post['title']}")

# Sending a POST request
new_post = {'title': 'foo', 'body': 'bar', 'userId': 1}
response = requests.post('https://jsonplaceholder.typicode.com/posts', json=new_post)
if response.status_code == 201:
    created_post = response.json()
    print(f"Created post ID: {created_post['id']}")
        </code></pre>
        <p><strong>Explanation:</strong> The code above sends a GET request to retrieve a list of posts and a POST request to create a new post using the <code>requests</code> library.</p>

        <h3>Using FastAPI for Building APIs</h3>
        <p>FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. Below is an example of how to create a simple API using FastAPI:</p>
        <pre><code>
from fastapi import FastAPI

app = FastAPI()

# Sample data
books = [
    {'id': 1, 'title': '1984', 'author': 'George Orwell'},
    {'id': 2, 'title': 'To Kill a Mockingbird', 'author': 'Harper Lee'},
]

@app.get('/api/books')
def get_books():
    return {'books': books}

@app.get('/api/books/{book_id}')
def get_book(book_id: int):
    book = next((book for book in books if book['id'] == book_id), None)
    if book is None:
        return {'message': 'Book not found'}, 404
    return book

@app.post('/api/books')
def add_book(book: dict):
    books.append(book)
    return book

@app.put('/api/books/{book_id}')
def update_book(book_id: int, updated_data: dict):
    book = next((book for book in books if book['id'] == book_id), None)
    if book is None:
        return {'message': 'Book not found'}, 404
    book.update(updated_data)
    return book

@app.delete('/api/books/{book_id}')
def delete_book(book_id: int):
    global books
    books = [book for book in books if book['id'] != book_id]
    return {'message': 'Book deleted'}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='127.0.0.1', port=8000)
        </code></pre>
        <p><strong>Explanation:</strong> The code above creates a simple RESTful API with FastAPI to manage a list of books. It includes endpoints to get all books, get a specific book by ID, add a new book, update a book, and delete a book.</p>

        <h3>Assignment 1</h3>
        <p>Write a Python script using Flask to create an API with endpoints to manage a list of users (create, read, update, delete).</p>
        <pre><code>
from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample data
users = [
    {'id': 1, 'name': 'Alice', 'email': 'alice@example.com'},
    {'id': 2, 'name': 'Bob', 'email': 'bob@example.com'},
]

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify({'users': users})

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((user for user in users if user['id'] == user_id), None)
    if user is None:
        return jsonify({'message': 'User not found'}), 404
    return jsonify(user)

@app.route('/api/users', methods=['POST'])
def add_user():
    new_user = request.get_json()
    users.append(new_user)
    return jsonify(new_user), 201

@app.route('/api/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = next((user for user in users if user['id'] == user_id), None)
    if user is None:
        return jsonify({'message': 'User not found'}), 404
    updated_data = request.get_json()
    user.update(updated_data)
    return jsonify(user)

@app.route('/api/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global users
    users = [user for user in users if user['id'] != user_id]
    return jsonify({'message': 'User deleted'})

if __name__ == '__main__':
    app.run(debug=True)
        </code></pre>

        <h3>Assignment 2</h3>
        <p>Write a Python script using the <code>requests</code> library to consume an API that provides weather information. Fetch the current weather for a given city and display the results.</p>
        <pre><code>
import requests

# Replace with your actual API key
api_key = 'your_api_key'
city = 'London'

# Sending a GET request
response = requests.get(f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}')
if response.status_code == 200:
    weather_data = response.json()
    print(f"City: {weather_data['name']}")
    print(f"Temperature: {weather_data['main']['temp']}K")
    print(f"Weather: {weather_data['weather'][0]['description']}")
else:
    print("Failed to fetch weather data")
        </code></pre>

        <h3>Assignment 3</h3>
        <p>Write a Python script using FastAPI to create an API with endpoints to manage a list of products (create, read, update, delete).</p>
        <pre><code>
from fastapi import FastAPI

app = FastAPI()

# Sample data
products = [
    {'id': 1, 'name': 'Laptop', 'price': 1000.0},
    {'id': 2, 'name': 'Smartphone', 'price': 500.0},
]

@app.get('/api/products')
def get_products():
    return {'products': products}

@app.get('/api/products/{product_id}')
def get_product(product_id: int):
    product = next((product for product in products if product['id'] == product_id), None)
    if product is None:
        return {'message': 'Product not found'}, 404
    return product

@app.post('/api/products')
def add_product(product: dict):
    products.append(product)
    return product

@app.put('/api/products/{product_id}')
def update_product(product_id: int, updated_data: dict):
    product = next((product for product in products if product['id'] == product_id), None)
    if product is None:
        return {'message': 'Product not found'}, 404
    product.update(updated_data)
    return product

@app.delete('/api/products/{product_id}')
def delete_product(product_id: int):
    global products
    products = [product for product in products if product['id'] != product_id]
    return {'message': 'Product deleted'}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='127.0.0.1', port=8000)
        </code></pre>
      </section>`
    },
];
const PythonReadingMaterials = () => {
  const [activeSection, setActiveSection] = useState('introduction');

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

  return (
    <HelmetProvider>
    <div className="python-reading-page">
        <Helmet>
        <title>Master Python Programming - From Basics to Advanced Applications | U-Learn Tech</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Learn Python from fundamentals to advanced concepts. Develop versatile skills for data science, web development, AI, and more with our comprehensive Python course at U-Learn Tech." />
      <meta name="keywords" content="Python, Programming, Data Science, Web Development, Machine Learning, AI, Django, Flask, NumPy, Pandas, U-Learn Tech" />
      <meta name="author" content="U-Learn Tech" />
      
      

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.u-learntech.com/courses/python-programming" />
      <meta name="twitter:title" content="Master Python Programming - From Basics to Advanced Applications | U-Learn Tech" />
      <meta name="twitter:description" content="Learn Python from fundamentals to advanced concepts. Develop versatile skills for data science, web development, AI, and more with our comprehensive Python course at U-Learn Tech." />
      <meta name="twitter:image" content="https://www.u-learntech.com/images/python-course-twitter.jpg" />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Course",
          "name": "Master Python Programming - From Basics to Advanced Applications",
          "description": "Learn Python from fundamentals to advanced concepts. Develop versatile skills for data science, web development, AI, and more with our comprehensive Python course.",
          "provider": {
            "@type": "Organization",
            "name": "U-Learn Tech",
            "sameAs": "https://www.u-learntech.com"
          },
          "url": "https://www.u-learntech.com/courses/python-programming",
          "courseCode": "PY101",
          "educationalLevel": "Beginner to Advanced",
          "programmingLanguage": "Python",
          "teaches": [
            "Python Fundamentals",
            "Object-Oriented Programming in Python",
            "Data Structures and Algorithms",
            "Web Development with Django and Flask",
            "Data Science with NumPy and Pandas",
            "Machine Learning with Scikit-learn",
            "AI and Deep Learning Basics with TensorFlow",
            "Python for Automation and Scripting",
            "Database Interaction with Python",
            "Python Best Practices and Clean Code"
          ],
          "occupationalCategory": "Software Developer, Data Scientist, Web Developer, AI Engineer"
        })}
      </script>
        </Helmet>
      <Header />
      <div className="content-container">
        <nav className="sidebar">
          <h2>Contents</h2>
          <ul>
            {sections.map(section => (
              <li key={section.id}>
                <button onClick={() => setActiveSection(section.id)}>{section.title}</button>
                {section.subSections && (
                  <ul>
                    {section.subSections.map(subSection => (
                      <li key={subSection.id}>
                        <button onClick={() => setActiveSection(subSection.id)}>{subSection.title}</button>
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
    </div>
    </HelmetProvider>
  );
};


export default PythonReadingMaterials;
