import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowUp, Menu, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Button from '../components/ui/button';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Code } from 'lucide-react';
import './science.css';

const sections = [
    {
        id:'introduction',
        title:'Introduction',
        content:`<section id="introduction">
        </section>`
    },
    {
        id: 'datatypes',
        title: 'Data Types',
        content: `
          <section id="datatypes">
            <h2>Data Types in Data Science</h2>
      
            <h3>Introduction</h3>
            <p>In data science, data types refer to the classification of data items. Understanding data types is crucial because it helps in selecting the appropriate statistical and machine learning methods for analysis. Data types can be broadly categorized into numerical, categorical, and time series data.</p>
      
            <h3>Numerical Data</h3>
            <p>Numerical data represents quantitative values and can be further divided into two types:</p>
            <ul>
              <li><strong>Integer:</strong> Whole numbers without a fractional part. Example: 1, 42, -7.</li>
              <li><strong>Float:</strong> Numbers with a fractional part. Example: 3.14, -0.001, 2.71828.</li>
            </ul>
            <pre><code class="language-python">
      import pandas as pd
      
      # Example of numerical data
      data = {
          'age': [23, 45, 36, 50],
          'salary': [50000.0, 80000.5, 60000.75, 90000.0]
      }
      
      df = pd.DataFrame(data)
      print(df)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Integer:</strong> The 'age' column contains integer data.</li>
              <li><strong>Float:</strong> The 'salary' column contains float data.</li>
            </ul>
      
            <h3>Categorical Data</h3>
            <p>Categorical data represents qualitative values and can be divided into two types:</p>
            <ul>
              <li><strong>Nominal:</strong> Categories without a specific order. Example: colors (red, blue, green).</li>
              <li><strong>Ordinal:</strong> Categories with a specific order. Example: ratings (low, medium, high).</li>
            </ul>
            <pre><code class="language-python">
      import pandas as pd
      
      # Example of categorical data
      data = {
          'color': ['red', 'blue', 'green', 'blue'],
          'rating': ['low', 'high', 'medium', 'medium']
      }
      
      df = pd.DataFrame(data)
      print(df)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Nominal:</strong> The 'color' column contains nominal data.</li>
              <li><strong>Ordinal:</strong> The 'rating' column contains ordinal data.</li>
            </ul>
      
            <h3>Time Series Data</h3>
            <p>Time series data represents data points collected or recorded at specific time intervals. Example: stock prices, temperature readings.</p>
            <pre><code class="language-python">
      import pandas as pd
      import numpy as np
      
      # Example of time series data
      dates = pd.date_range('20230101', periods=6)
      data = {
          'temperature': [30.5, 32.0, 31.0, 29.5, 28.0, 30.0]
      }
      
      df = pd.DataFrame(data, index=dates)
      print(df)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Index:</strong> The DataFrame index contains date values, making it a time series.</li>
              <li><strong>Temperature:</strong> The 'temperature' column contains the recorded values at each date.</li>
            </ul>
      
            <h3>Assignment 1: Identifying Data Types</h3>
            <p>Create a DataFrame with the following columns: 'product_id' (integer), 'product_name' (string), 'price' (float), 'in_stock' (boolean), and 'category' (nominal). Identify the data type of each column.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import pandas as pd
      
      # Create DataFrame
      data = {
          'product_id': [101, 102, 103, 104],
          'product_name': ['Laptop', 'Mouse', 'Keyboard', 'Monitor'],
          'price': [999.99, 25.5, 45.75, 150.0],
          'in_stock': [True, True, False, True],
          'category': ['Electronics', 'Accessories', 'Accessories', 'Electronics']
      }
      
      df = pd.DataFrame(data)
      print(df)
      
      # Data types
      print(df.dtypes)
            </code></pre>
      
            <h3>Assignment 2: Time Series Analysis</h3>
            <p>Create a time series DataFrame with columns 'date' and 'sales'. The 'date' column should contain dates for one week, and the 'sales' column should contain random sales values. Plot the time series data using matplotlib.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import pandas as pd
      import numpy as np
      import matplotlib.pyplot as plt
      
      # Create time series DataFrame
      dates = pd.date_range('20230101', periods=7)
      sales = np.random.randint(100, 500, size=7)
      
      df = pd.DataFrame({'sales': sales}, index=dates)
      print(df)
      
      # Plot the time series data
      plt.figure(figsize=(10, 5))
      plt.plot(df.index, df['sales'], marker='o')
      plt.title('Sales Over One Week')
      plt.xlabel('Date')
      plt.ylabel('Sales')
      plt.grid(True)
      plt.show()
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Understanding data types is fundamental in data science as it influences the choice of analytical methods and tools. Identifying and correctly classifying data types ensures accurate data analysis and modeling. Practice working with different data types to strengthen your data science skills.</p>
          </section>
        `
      },
      
      {
        id: 'structures',
        title: 'Data Structures',
        content: `
          <section id="structures">
            <h2>Data Structures in Data Science</h2>
      
            <h3>Introduction</h3>
            <p>Data structures are fundamental components in computer science that are used to organize, manage, and store data efficiently. In data science, choosing the right data structure can significantly impact the performance and efficiency of data processing and analysis tasks.</p>
      
            <h3>Common Data Structures</h3>
            <ul>
              <li><strong>Arrays:</strong> Fixed-size data structures that store elements of the same type in contiguous memory locations.</li>
              <li><strong>Lists:</strong> Dynamic data structures that can store elements of different types and can grow or shrink in size.</li>
              <li><strong>Stacks:</strong> Linear data structures that follow the Last In, First Out (LIFO) principle.</li>
              <li><strong>Queues:</strong> Linear data structures that follow the First In, First Out (FIFO) principle.</li>
              <li><strong>Hash Tables:</strong> Data structures that store key-value pairs for efficient data retrieval.</li>
              <li><strong>Trees:</strong> Hierarchical data structures with a root node and child nodes, used to represent hierarchical relationships.</li>
              <li><strong>Graphs:</strong> Data structures used to represent networks of connected nodes.</li>
            </ul>
      
            <h3>Arrays</h3>
            <p>Arrays are fixed-size data structures that store elements of the same type in contiguous memory locations. They provide constant-time access to elements using an index.</p>
            <pre><code class="language-python">
      import numpy as np
      
      # Create a numpy array
      arr = np.array([1, 2, 3, 4, 5])
      print(arr)
      
      # Accessing elements
      print(arr[0])  # Output: 1
      print(arr[2])  # Output: 3
      
      # Modifying elements
      arr[1] = 10
      print(arr)  # Output: [ 1 10  3  4  5]
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>np.array</strong>: Creates a numpy array.</li>
              <li><strong>arr[0]</strong>: Accesses the first element of the array.</li>
              <li><strong>arr[1] = 10</strong>: Modifies the second element of the array.</li>
            </ul>
      
            <h3>Lists</h3>
            <p>Lists are dynamic data structures that can store elements of different types and can grow or shrink in size. They provide flexible operations for adding, removing, and accessing elements.</p>
            <pre><code class="language-python">
      # Create a list
      lst = [1, 'hello', 3.14, True]
      print(lst)
      
      # Accessing elements
      print(lst[1])  # Output: hello
      
      # Adding elements
      lst.append('world')
      print(lst)  # Output: [1, 'hello', 3.14, True, 'world']
      
      # Removing elements
      lst.remove(3.14)
      print(lst)  # Output: [1, 'hello', True, 'world']
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>lst</strong>: Creates a list with different types of elements.</li>
              <li><strong>lst.append</strong>: Adds an element to the end of the list.</li>
              <li><strong>lst.remove</strong>: Removes the specified element from the list.</li>
            </ul>
      
            <h3>Stacks</h3>
            <p>Stacks are linear data structures that follow the Last In, First Out (LIFO) principle. Elements are added and removed from the top of the stack.</p>
            <pre><code class="language-python">
      # Create a stack
      stack = []
      
      # Pushing elements onto the stack
      stack.append(1)
      stack.append(2)
      stack.append(3)
      print(stack)  # Output: [1, 2, 3]
      
      # Popping elements from the stack
      print(stack.pop())  # Output: 3
      print(stack)  # Output: [1, 2]
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>stack.append</strong>: Adds an element to the top of the stack.</li>
              <li><strong>stack.pop</strong>: Removes and returns the top element of the stack.</li>
            </ul>
      
            <h3>Queues</h3>
            <p>Queues are linear data structures that follow the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue.</p>
            <pre><code class="language-python">
      from collections import deque
      
      # Create a queue
      queue = deque()
      
      # Enqueue elements
      queue.append(1)
      queue.append(2)
      queue.append(3)
      print(queue)  # Output: deque([1, 2, 3])
      
      # Dequeue elements
      print(queue.popleft())  # Output: 1
      print(queue)  # Output: deque([2, 3])
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>queue.append</strong>: Adds an element to the rear of the queue.</li>
              <li><strong>queue.popleft</strong>: Removes and returns the front element of the queue.</li>
            </ul>
      
            <h3>Hash Tables</h3>
            <p>Hash tables store key-value pairs for efficient data retrieval. They use a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.</p>
            <pre><code class="language-python">
      # Create a hash table (dictionary in Python)
      hash_table = {}
      
      # Adding key-value pairs
      hash_table['name'] = 'Alice'
      hash_table['age'] = 25
      print(hash_table)  # Output: {'name': 'Alice', 'age': 25}
      
      # Accessing values by key
      print(hash_table['name'])  # Output: Alice
      
      # Removing key-value pairs
      del hash_table['age']
      print(hash_table)  # Output: {'name': 'Alice'}
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>hash_table</strong>: Creates a dictionary to act as a hash table.</li>
              <li><strong>hash_table['name']</strong>: Accesses the value associated with the key 'name'.</li>
              <li><strong>del hash_table['age']</strong>: Removes the key-value pair associated with the key 'age'.</li>
            </ul>
      
            <h3>Trees</h3>
            <p>Trees are hierarchical data structures with a root node and child nodes. They are used to represent hierarchical relationships.</p>
            <pre><code class="language-python">
      class Node:
          def __init__(self, value):
              self.value = value
              self.left = None
              self.right = None
      
      # Create tree nodes
      root = Node(1)
      root.left = Node(2)
      root.right = Node(3)
      root.left.left = Node(4)
      root.left.right = Node(5)
      
      # Traversing the tree
      def inorder_traversal(node):
          if node:
              inorder_traversal(node.left)
              print(node.value, end=' ')
              inorder_traversal(node.right)
      
      inorder_traversal(root)  # Output: 4 2 5 1 3
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Node</strong>: Defines a node in the tree.</li>
              <li><strong>root</strong>: Creates the root node of the tree.</li>
              <li><strong>inorder_traversal</strong>: Function to traverse the tree in-order.</li>
            </ul>
      
            <h3>Graphs</h3>
            <p>Graphs are data structures used to represent networks of connected nodes. They consist of vertices (nodes) and edges (connections).</p>
            <pre><code class="language-python">
      # Create a graph using an adjacency list
      graph = {
          'A': ['B', 'C'],
          'B': ['A', 'D', 'E'],
          'C': ['A', 'F'],
          'D': ['B'],
          'E': ['B', 'F'],
          'F': ['C', 'E']
      }
      
      # Depth-First Search (DFS)
      def dfs(graph, start, visited=None):
          if visited is None:
              visited = set()
          visited.add(start)
          print(start, end=' ')
          for neighbor in graph[start]:
              if neighbor not in visited:
                  dfs(graph, neighbor, visited)
      
      dfs(graph, 'A')  # Output: A B D E F C
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>graph</strong>: Creates a graph using an adjacency list.</li>
              <li><strong>dfs</strong>: Function to perform Depth-First Search on the graph.</li>
            </ul>
      
            <h3>Assignment 1: Implementing a Stack</h3>
            <p>Implement a stack class in Python with methods to push, pop, and check if the stack is empty. Demonstrate its usage with an example.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      class Stack:
          def __init__(self):
              self.items = []
      
          def push(self, item):
              self.items.append(item)
      
          def pop(self):
              if not self.is_empty():
                  return self.items.pop()
              return None
      
          def is_empty(self):
              return len(self.items) == 0
      
      # Demonstrate usage
      stack = Stack()
      stack.push(1)
      stack.push(2)
      stack.push(3)
      print(stack.pop())  # Output: 3
      print(stack.pop())  # Output: 2
      print(stack.is_empty())  # Output: False
      print(stack.pop())  # Output: 1
      print(stack.is_empty())  # Output: True
            </code></pre>
      
            <h3>Assignment 2: Graph Traversal</h3>
            <p>Create a graph and implement Breadth-First Search (BFS) to traverse the graph. Demonstrate its usage with an example.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      from collections import deque
      
      # Create a graph using an adjacency list
      graph = {
          'A': ['B', 'C'],
          'B': ['A', 'D', 'E'],
          'C': ['A', 'F'],
          'D': ['B'],
          'E': ['B', 'F'],
          'F': ['C', 'E']
      }
      
      # Breadth-First Search (BFS)
      def bfs(graph, start):
          visited = set()
          queue = deque([start])
          visited.add(start)
      
          while queue:
              vertex = queue.popleft()
              print(vertex, end=' ')
              for neighbor in graph[vertex]:
                  if neighbor not in visited:
                      visited.add(neighbor)
                      queue.append(neighbor)
      
      bfs(graph, 'A')  # Output: A B C D E F
            </code></pre>
      
            <h3>Conclusion</h3>
            <p>Data structures are essential for efficiently organizing, managing, and storing data. Understanding different data structures and their use cases helps in selecting the most appropriate one for various data science tasks. Practice implementing and using different data structures to enhance your data science skills.</p>
          </section>
        `
      },
      
      {
        id: 'wrangling',
        title: 'Data Wrangling',
        content: `
          <section id="wrangling">
            <h2>Data Wrangling</h2>
      
            <h3>Introduction</h3>
            <p>Data wrangling, also known as data munging, is the process of transforming and preparing raw data for analysis. It involves cleaning, structuring, and enriching data to make it more suitable for analytical tasks. Effective data wrangling is crucial for accurate and meaningful data analysis.</p>
      
            <h3>Steps in Data Wrangling</h3>
            <ul>
              <li><strong>Data Collection:</strong> Gathering raw data from various sources such as databases, APIs, and files.</li>
              <li><strong>Data Cleaning:</strong> Removing or correcting errors, handling missing values, and filtering out irrelevant data.</li>
              <li><strong>Data Transformation:</strong> Converting data into a desired format or structure, including normalization and aggregation.</li>
              <li><strong>Data Enrichment:</strong> Enhancing data by adding relevant information from external sources.</li>
              <li><strong>Data Validation:</strong> Ensuring data quality and consistency through checks and validation rules.</li>
            </ul>
      
            <h3>Data Wrangling with Pandas</h3>
            <p>Pandas is a powerful Python library for data manipulation and analysis. It provides data structures and functions needed to manipulate structured data seamlessly. Here's how you can perform various data wrangling tasks using Pandas:</p>
      
            <h4>Data Collection</h4>
            <pre><code class="language-python">
      import pandas as pd
      
      # Load data from a CSV file
      df = pd.read_csv('data.csv')
      print(df.head())
      
      # Load data from an Excel file
      df = pd.read_excel('data.xlsx', sheet_name='Sheet1')
      print(df.head())
      
      # Load data from a JSON file
      df = pd.read_json('data.json')
      print(df.head())
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>pd.read_csv('data.csv')</strong>: Loads data from a CSV file into a DataFrame.</li>
              <li><strong>pd.read_excel('data.xlsx', sheet_name='Sheet1')</strong>: Loads data from an Excel file, specifying the sheet name, into a DataFrame.</li>
              <li><strong>pd.read_json('data.json')</strong>: Loads data from a JSON file into a DataFrame.</li>
              <li><strong>df.head()</strong>: Displays the first few rows of the DataFrame to get an initial look at the data.</li>
            </ul>
      
            <h4>Data Cleaning</h4>
            <pre><code class="language-python">
      # Handling missing values
      df = pd.DataFrame({
          'name': ['Alice', 'Bob', 'Charlie', None],
          'age': [25, None, 30, 35],
          'salary': [50000, 60000, None, 80000]
      })
      print(df)
      
      # Drop rows with any missing values
      df_dropped = df.dropna()
      print(df_dropped)
      
      # Fill missing values with a specific value
      df_filled = df.fillna({'name': 'Unknown', 'age': df['age'].mean(), 'salary': df['salary'].median()})
      print(df_filled)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>df.dropna()</strong>: Removes rows with any missing values from the DataFrame.</li>
              <li><strong>df.fillna({'name': 'Unknown', 'age': df['age'].mean(), 'salary': df['salary'].median()})</strong>: Fills missing values with specific values: 'Unknown' for names, mean of the 'age' column, and median of the 'salary' column.</li>
            </ul>
      
            <h4>Data Transformation</h4>
            <pre><code class="language-python">
      # Normalizing data
      df = pd.DataFrame({
          'score': [56, 78, 45, 90, 82]
      })
      df['normalized_score'] = (df['score'] - df['score'].min()) / (df['score'].max() - df['score'].min())
      print(df)
      
      # Aggregating data
      data = {
          'department': ['HR', 'HR', 'IT', 'IT', 'Finance', 'Finance'],
          'salary': [50000, 60000, 70000, 80000, 75000, 85000]
      }
      df = pd.DataFrame(data)
      df_aggregated = df.groupby('department')['salary'].mean().reset_index()
      print(df_aggregated)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Normalization:</strong> The formula <code>(df['score'] - df['score'].min()) / (df['score'].max() - df['score'].min())</code> scales the 'score' values between 0 and 1.</li>
              <li><strong>Aggregation:</strong> <code>df.groupby('department')['salary'].mean().reset_index()</code> groups the data by 'department' and calculates the mean 'salary' for each department.</li>
            </ul>
      
            <h4>Data Enrichment</h4>
            <pre><code class="language-python">
      # Adding new columns based on existing data
      df = pd.DataFrame({
          'first_name': ['John', 'Jane'],
          'last_name': ['Doe', 'Smith']
      })
      df['full_name'] = df['first_name'] + ' ' + df['last_name']
      print(df)
      
      # Merging data from another DataFrame
      df_additional = pd.DataFrame({
          'full_name': ['John Doe', 'Jane Smith'],
          'age': [28, 34]
      })
      df_merged = pd.merge(df, df_additional, on='full_name')
      print(df_merged)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Adding new columns:</strong> <code>df['full_name'] = df['first_name'] + ' ' + df['last_name']</code> creates a new column 'full_name' by concatenating 'first_name' and 'last_name'.</li>
              <li><strong>Merging data:</strong> <code>pd.merge(df, df_additional, on='full_name')</code> merges two DataFrames on the 'full_name' column, adding the 'age' information to the original DataFrame.</li>
            </ul>
      
            <h4>Data Validation</h4>
            <pre><code class="language-python">
      # Checking for duplicate rows
      df = pd.DataFrame({
          'name': ['Alice', 'Bob', 'Charlie', 'Alice'],
          'age': [25, 30, 35, 25]
      })
      duplicates = df.duplicated()
      print(duplicates)
      
      # Removing duplicate rows
      df_no_duplicates = df.drop_duplicates()
      print(df_no_duplicates)
      
      # Ensuring data types are correct
      df = pd.DataFrame({
          'age': ['25', '30', '35']
      })
      df['age'] = df['age'].astype(int)
      print(df)
      print(df.dtypes)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Checking duplicates:</strong> <code>df.duplicated()</code> checks for duplicate rows in the DataFrame.</li>
              <li><strong>Removing duplicates:</strong> <code>df.drop_duplicates()</code> removes duplicate rows from the DataFrame.</li>
              <li><strong>Ensuring data types:</strong> <code>df['age'].astype(int)</code> converts the 'age' column to integers, ensuring the correct data type.</li>
            </ul>
      
            <h3>Assignment 1: Data Cleaning</h3>
            <p>Load a dataset with missing values, drop rows with missing values, and fill missing values with the mean of the column. Demonstrate the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import pandas as pd
      
      # Example dataset
      data = {
          'name': ['Alice', 'Bob', 'Charlie', None],
          'age': [25, None, 30, 35],
          'salary': [50000, 60000, None, 80000]
      }
      df = pd.DataFrame(data)
      print("Original DataFrame:")
      print(df)
      
      # Drop rows with any missing values
      df_dropped = df.dropna()
      print("\\nDataFrame after dropping rows with missing values:")
      print(df_dropped)
      
      # Fill missing values with the mean of the column
      df_filled = df.fillna(df.mean(numeric_only=True))
      print("\\nDataFrame after filling missing values with mean:")
      print(df_filled)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Original DataFrame:</strong> Displays the initial dataset with missing values.</li>
              <li><strong>df.dropna():</strong> Drops rows where any values are missing.</li>
              <li><strong>df.fillna(df.mean(numeric_only=True)):</strong> Fills missing numerical values with the mean of the respective columns.</li>
            </ul>
      
            <h3>Assignment 2: Data Transformation and Aggregation</h3>
            <p>Create a DataFrame, normalize a numeric column, and aggregate another column by a categorical variable. Demonstrate the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import pandas as pd
      
      # Example dataset
      data = {
          'department': ['HR', 'HR', 'IT', 'IT', 'Finance', 'Finance'],
          'score': [56, 78, 45, 90, 82, 75]
      }
      df = pd.DataFrame(data)
      print("Original DataFrame:")
      print(df)
      
      # Normalize the 'score' column
      df['normalized_score'] = (df['score'] - df['score'].min()) / (df['score'].max() - df['score'].min())
      print("\\nDataFrame after normalizing 'score' column:")
      print(df)
      
      # Aggregate 'score' by 'department'
      df_aggregated = df.groupby('department')['score'].mean().reset_index()
      print("\\nDataFrame after aggregating 'score' by 'department':")
      print(df_aggregated)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Original DataFrame:</strong> Displays the initial dataset.</li>
              <li><strong>Normalization:</strong> Applies min-max normalization to the 'score' column to scale values between 0 and 1.</li>
              <li><strong>Aggregation:</strong> Groups the data by 'department' and calculates the mean 'score' for each department.</li>
            </ul>
      
            <h3>Conclusion</h3>
            <p>Data wrangling is a crucial step in the data science workflow. It involves transforming raw data into a clean and structured format suitable for analysis. Mastering data wrangling techniques ensures accurate and meaningful data analysis. Practice these techniques to improve your data manipulation skills.</p>
          </section>
        `
      },
      
      {
        id: 'analysis',
        title: 'Exploratory Data Analysis (EDA)',
        content: `
          <section id="analysis">
            <h2>Exploratory Data Analysis (EDA)</h2>
      
            <h3>Introduction</h3>
            <p>Exploratory Data Analysis (EDA) is an approach to analyzing datasets to summarize their main characteristics, often with visual methods.</p>
            <p> EDA is used to understand the data, uncover patterns, spot anomalies, test hypotheses, and check assumptions. It is a crucial step in the data science process.</p>
      
            <h3>Steps in Exploratory Data Analysis</h3>
            <ul>
              <li><strong>Data Collection:</strong> Gathering data from various sources.</li>
              <li><strong>Data Cleaning:</strong> Handling missing values, outliers, and data inconsistencies.</li>
              <li><strong>Data Visualization:</strong> Creating visual representations of the data to uncover patterns and insights.</li>
              <li><strong>Summary Statistics:</strong> Calculating measures such as mean, median, mode, standard deviation, etc.</li>
              <li><strong>Data Transformation:</strong> Normalizing, aggregating, and encoding data for analysis.</li>
            </ul>
      
            <h3>Loading and Understanding the Data</h3>
            <pre><code class="language-python">
      import pandas as pd
      
      # Load the dataset
      df = pd.read_csv('data.csv')
      
      # Display the first few rows of the dataset
      print(df.head())
      
      # Display basic information about the dataset
      print(df.info())
      
      # Display summary statistics
      print(df.describe())
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>pd.read_csv('data.csv')</strong>: Loads data from a CSV file into a DataFrame.</li>
              <li><strong>df.head()</strong>: Displays the first few rows of the DataFrame to get an initial look at the data.</li>
              <li><strong>df.info()</strong>: Provides a concise summary of the DataFrame, including the data types and non-null values.</li>
              <li><strong>df.describe()</strong>: Generates summary statistics for numerical columns.</li>
            </ul>
      
            <h3>Data Cleaning</h3>
            <pre><code class="language-python">
      # Handling missing values
      df = df.dropna(subset=['column_name'])  # Drop rows with missing values in 'column_name'
      df['column_name'] = df['column_name'].fillna(df['column_name'].mean())  # Fill missing values with mean
      
      # Handling outliers
      import numpy as np
      
      # Remove outliers based on Z-score
      df = df[(np.abs(df['column_name'] - df['column_name'].mean()) / df['column_name'].std()) < 3]
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>df.dropna(subset=['column_name'])</strong>: Drops rows where 'column_name' has missing values.</li>
              <li><strong>df['column_name'].fillna(df['column_name'].mean())</strong>: Fills missing values in 'column_name' with the mean of the column.</li>
              <li><strong>df[(np.abs(df['column_name'] - df['column_name'].mean()) / df['column_name'].std()) < 3]</strong>: Removes outliers based on the Z-score,</li>
              <p> keeping values within 3 standard deviations from the mean.</p>
            </ul>
      
            <h3>Data Visualization</h3>
            <pre><code class="language-python">
      import matplotlib.pyplot as plt
      import seaborn as sns
      
      # Histogram
      plt.figure(figsize=(10, 5))
      sns.histplot(df['column_name'], bins=30, kde=True)
      plt.title('Histogram of Column Name')
      plt.show()
      
      # Box plot
      plt.figure(figsize=(10, 5))
      sns.boxplot(x='categorical_column', y='numerical_column', data=df)
      plt.title('Box Plot of Numerical Column by Categorical Column')
      plt.show()
      
      # Scatter plot
      plt.figure(figsize=(10, 5))
      sns.scatterplot(x='numerical_column_1', y='numerical_column_2', data=df)
      plt.title('Scatter Plot between Numerical Column 1 and Numerical Column 2')
      plt.show()
      
      # Correlation matrix
      plt.figure(figsize=(12, 8))
      sns.heatmap(df.corr(), annot=True, cmap='coolwarm', fmt='.2f')
      plt.title('Correlation Matrix')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>sns.histplot(df['column_name'], bins=30, kde=True)</strong>: </li>
              <p>Creates a histogram with a kernel density estimate (KDE) for 'column_name'.</p>
              <li><strong>sns.boxplot(x='categorical_column', y='numerical_column', data=df)</strong>:</li>
              <p> Creates a box plot showing the distribution of 'numerical_column' for each </p>
              <p>category in 'categorical_column'.</p>
              <li><strong>sns.scatterplot(x='numerical_column_1', y='numerical_column_2', data=df)</strong>:</li> 
              <p>Creates a scatter plot to visualize the relationship </p>
              <p>between 'numerical_column_1' and 'numerical_column_2'.</p>
              <li><strong>sns.heatmap(df.corr(), annot=True, cmap='coolwarm', fmt='.2f')</strong>: Creates a heatmap of the correlation matrix, showing the correlations </li>
              <p>between numerical columns.</p>
            </ul>
      
            <h3>Summary Statistics</h3>
            <pre><code class="language-python">
      # Calculate mean, median, mode
      mean_value = df['column_name'].mean()
      median_value = df['column_name'].median()
      mode_value = df['column_name'].mode()[0]
      
      print(f"Mean: {mean_value}, Median: {median_value}, Mode: {mode_value}")
      
      # Calculate standard deviation and variance
      std_dev = df['column_name'].std()
      variance = df['column_name'].var()
      
      print(f"Standard Deviation: {std_dev}, Variance: {variance}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>df['column_name'].mean()</strong>: Calculates the mean of 'column_name'.</li>
              <li><strong>df['column_name'].median()</strong>: Calculates the median of 'column_name'.</li>
              <li><strong>df['column_name'].mode()[0]</strong>: Calculates the mode of 'column_name'.</li>
              <li><strong>df['column_name'].std()</strong>: Calculates the standard deviation of 'column_name'.</li>
              <li><strong>df['column_name'].var()</strong>: Calculates the variance of 'column_name'.</li>
            </ul>
      
            <h3>Data Transformation</h3>
            <pre><code class="language-python">
      # Normalization
      df['normalized_column'] = (df['column_name'] - df['column_name'].min()) / (df['column_name'].max() 
      - df['column_name'].min())
      
      # Aggregation
      aggregated_data = df.groupby('categorical_column')['numerical_column'].mean().reset_index()
      
      # Encoding categorical variables
      df['encoded_column'] = df['categorical_column'].astype('category').cat.codes
      
      print(df.head())
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Normalization:</strong> The formula <code>(df['column_name'] - df['column_name'].min()) / (df['column_name'].max()</li> 
              <p>- df['column_name'].min())</code> scales 'column_name' values between 0 and 1.</p>
              <li><strong>Aggregation:</strong></li>
               <p><code>df.groupby('categorical_column')['numerical_column'].mean().reset_index()</code></p> 
               <p>groups data by 'categorical_column' and calculates the mean of 'numerical_column'.</p>
              <li><strong>Encoding:</strong> </li>
              <P><code>df['categorical_column'].astype('category').cat.codes</code> </p>
              <p>converts categorical values to numerical codes.</p>
            </ul>
      
            <h3>Assignment 1: EDA on a Dataset</h3>
            <p>Load a dataset, clean the data, visualize the distribution of a numerical column, and calculate summary statistics. Demonstrate the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import pandas as pd
      import matplotlib.pyplot as plt
      import seaborn as sns
      
      # Load the dataset
      df = pd.read_csv('data.csv')
      
      # Data cleaning
      df = df.dropna(subset=['age'])
      df['salary'] = df['salary'].fillna(df['salary'].mean())
      
      # Visualization
      plt.figure(figsize=(10, 5))
      sns.histplot(df['age'], bins=30, kde=True)
      plt.title('Histogram of Age')
      plt.show()
      
      # Summary statistics
      mean_age = df['age'].mean()
      median_age = df['age'].median()
      std_dev_age = df['age'].std()
      
      print(f"Mean Age: {mean_age}, Median Age: {median_age}, Standard Deviation of Age: {std_dev_age}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Data Cleaning:</strong> Drops rows with missing 'age' values and fills missing 'salary' values with the column mean.</li>
              <li><strong>Visualization:</strong> Creates a histogram with a KDE for the 'age' column.</li>
              <li><strong>Summary Statistics:</strong> Calculates the mean, median, and standard deviation for the 'age' column.</li>
            </ul>
      
            <h3>Assignment 2: Data Transformation and Visualization</h3>
            <p>Load a dataset, normalize a numerical column, encode a categorical column, and visualize the relationships between variables using scatter plots and correlation matrices. Demonstrate the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import pandas as pd
      import matplotlib.pyplot as plt
      import seaborn as sns
      
      # Load the dataset
      df = pd.read_csv('data.csv')
      
      # Data transformation
      df['normalized_salary'] = (df['salary'] - df['salary'].min()) / (df['salary'].max() - df['salary'].min())
      df['encoded_gender'] = df['gender'].astype('category').cat.codes
      
      # Visualization
      plt.figure(figsize=(10, 5))
      sns.scatterplot(x='normalized_salary', y='age', hue='encoded_gender', data=df)
      plt.title('Scatter Plot between Normalized Salary and Age by Gender')
      plt.show()
      
      plt.figure(figsize=(12, 8))
      sns.heatmap(df.corr(), annot=True, cmap='coolwarm', fmt='.2f')
      plt.title('Correlation Matrix')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Normalization:</strong> Normalizes the 'salary' column to a range of 0 to 1.</li>
              <li><strong>Encoding:</strong> Encodes the 'gender' column to numerical codes.</li>
              <li><strong>Scatter Plot:</strong> Visualizes the relationship between 'normalized_salary' and 'age' by 'encoded_gender'.</li>
              <li><strong>Correlation Matrix:</strong> Shows the correlations between numerical columns in the DataFrame.</li>
            </ul>
      
            <h3>Conclusion</h3>
            <p>Exploratory Data Analysis is a vital step in the data science process. It helps to understand the data, uncover patterns, and prepare for further analysis or modeling. By mastering EDA techniques, you can gain valuable insights and make informed decisions based on your data. Practice EDA on various datasets to enhance your data analysis skills.</p>
          </section>
        `
      },
      
      {
        id: 'machine',
        title: 'Machine Learning Algorithms',
        content: `
          <section id="machine">
            <h2>Machine Learning Algorithms</h2>
      
            <h3>Introduction</h3>
            <p>Machine Learning (ML) is a branch of artificial intelligence that focuses on building systems that can learn from data, identify patterns, and make decisions with minimal human intervention. Machine Learning algorithms are the core of this process, enabling computers to learn from and make predictions or decisions based on data.</p>
      
            <h3>Types of Machine Learning Algorithms</h3>
            <ul>
              <li><strong>Supervised Learning:</strong> Algorithms that are trained on labeled data. Examples include Linear Regression, Logistic Regression, Decision Trees, and Support Vector Machines.</li>
              <li><strong>Unsupervised Learning:</strong> Algorithms that are used on unlabeled data to find hidden patterns. Examples include K-Means Clustering, Principal Component Analysis (PCA), and Hierarchical Clustering.</li>
              <li><strong>Reinforcement Learning:</strong> Algorithms that learn optimal actions through rewards and punishments. Examples include Q-Learning and Deep Q-Networks (DQNs).</li>
            </ul>
      
            <h3>Supervised Learning Algorithms</h3>
      
            <h4>Linear Regression</h4>
            <p>Linear Regression is a simple algorithm used for predictive analysis. It assumes a linear relationship between the input variables (X) and the single output variable (y). The equation of a linear regression model is:</p>
            <pre><code class="language-python">
      import numpy as np
      import matplotlib.pyplot as plt
      from sklearn.linear_model import LinearRegression
      
      # Example data
      X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
      y = np.array([1, 3, 2, 5, 4])
      
      # Create and train the model
      model = LinearRegression()
      model.fit(X, y)
      
      # Make predictions
      predictions = model.predict(X)
      
      # Plot the results
      plt.scatter(X, y, color='blue')
      plt.plot(X, predictions, color='red')
      plt.title('Linear Regression Example')
      plt.xlabel('X')
      plt.ylabel('y')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>np.array()</strong>: Creates arrays for the input variable X and the output variable y.</li>
              <li><strong>LinearRegression()</strong>: Initializes the linear regression model.</li>
              <li><strong>model.fit(X, y)</strong>: Trains the model on the provided data.</li>
              <li><strong>model.predict(X)</strong>: Makes predictions using the trained model.</li>
              <li><strong>plt.scatter()</strong>: Plots the original data points.</li>
              <li><strong>plt.plot()</strong>: Plots the regression line.</li>
            </ul>
      
            <h4>Logistic Regression</h4>
            <p>Logistic Regression is used for binary classification problems. It models the probability that a given input point belongs to a certain class. The output of logistic regression is between 0 and 1.</p>
            <pre><code class="language-python">
      import numpy as np
      import matplotlib.pyplot as plt
      from sklearn.linear_model import LogisticRegression
      
      # Example data
      X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
      y = np.array([0, 0, 0, 1, 1])
      
      # Create and train the model
      model = LogisticRegression()
      model.fit(X, y)
      
      # Make predictions
      predictions = model.predict(X)
      probabilities = model.predict_proba(X)[:, 1]
      
      # Plot the results
      plt.scatter(X, y, color='blue')
      plt.plot(X, probabilities, color='red')
      plt.title('Logistic Regression Example')
      plt.xlabel('X')
      plt.ylabel('Probability')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>LogisticRegression()</strong>: Initializes the logistic regression model.</li>
              <li><strong>model.fit(X, y)</strong>: Trains the model on the provided data.</li>
              <li><strong>model.predict(X)</strong>: Makes predictions using the trained model.</li>
              <li><strong>model.predict_proba(X)[:, 1]</strong>: Returns the probabilities of the positive class.</li>
            </ul>
      
            <h3>Unsupervised Learning Algorithms</h3>
      
            <h4>K-Means Clustering</h4>
            <p>K-Means Clustering is an algorithm used to group data points into k clusters. It aims to minimize the variance within each cluster.</p>
            <pre><code class="language-python">
      import numpy as np
      import matplotlib.pyplot as plt
      from sklearn.cluster import KMeans
      
      # Example data
      X = np.array([[1, 2], [1, 4], [1, 0],
                    [4, 2], [4, 4], [4, 0]])
      
      # Create and train the model
      kmeans = KMeans(n_clusters=2)
      kmeans.fit(X)
      
      # Get cluster labels
      labels = kmeans.labels_
      
      # Plot the results
      plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
      plt.title('K-Means Clustering Example')
      plt.xlabel('X1')
      plt.ylabel('X2')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>KMeans(n_clusters=2)</strong>: Initializes the K-Means model with 2 clusters.</li>
              <li><strong>kmeans.fit(X)</strong>: Trains the model on the provided data.</li>
              <li><strong>kmeans.labels_</strong>: Retrieves the cluster labels for each data point.</li>
              <li><strong>plt.scatter()</strong>: Plots the data points colored by cluster labels.</li>
            </ul>
      
            <h4>Principal Component Analysis (PCA)</h4>
            <p>PCA is a dimensionality reduction technique that transforms the data into a new coordinate system where the greatest variances come to lie on the first coordinates, the second greatest variances on the second coordinates, and so on.</p>
            <pre><code class="language-python">
      import numpy as np
      import matplotlib.pyplot as plt
      from sklearn.decomposition import PCA
      
      # Example data
      X = np.array([[1, 2], [1, 4], [1, 0],
                    [4, 2], [4, 4], [4, 0]])
      
      # Create and train the model
      pca = PCA(n_components=2)
      pca.fit(X)
      
      # Transform the data
      X_pca = pca.transform(X)
      
      # Plot the results
      plt.scatter(X_pca[:, 0], X_pca[:, 1])
      plt.title('PCA Example')
      plt.xlabel('Principal Component 1')
      plt.ylabel('Principal Component 2')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>PCA(n_components=2)</strong>: Initializes the PCA model to reduce the data to 2 components.</li>
              <li><strong>pca.fit(X)</strong>: Trains the model on the provided data.</li>
              <li><strong>pca.transform(X)</strong>: Transforms the original data into the principal components.</li>
              <li><strong>plt.scatter()</strong>: Plots the data points in the new PCA coordinate system.</li>
            </ul>
      
            <h3>Reinforcement Learning Algorithms</h3>
      
            <h4>Q-Learning</h4>
            <p>Q-Learning is a reinforcement learning algorithm that aims to learn the quality of actions, telling an agent what action to take under what circumstances.</p>
            <pre><code class="language-python">
      import numpy as np
      
      # Define the environment
      states = ['A', 'B', 'C', 'D']
      actions = ['left', 'right']
      Q = np.zeros((len(states), len(actions)))
      
      # Parameters
      alpha = 0.1  # Learning rate
      gamma = 0.6  # Discount factor
      epsilon = 0.1  # Exploration factor
      
      # Example Q-Learning update
      current_state = 0  # State 'A'
      action = 1  # Action 'right'
      reward = 1  # Reward received
      next_state = 1  # Next state 'B'
      
      # Q-Learning update
      Q[current_state, action] = Q[current_state, action] + alpha * (reward + gamma * np.max(Q[next_state, :]) 
      - Q[current_state, action])
      print(Q)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>states</strong>: Defines the set of states in the environment.</li>
              <li><strong>actions</strong>: Defines the set of possible actions.</li>
              <li><strong>Q</strong>: Initializes the Q-table with zeros.</li>
              <li><strong>alpha, gamma, epsilon</strong>: Define the learning rate, discount factor, and exploration factor, respectively.</li>
              <li><strong>Q-Learning update</strong>: Updates the Q-value for the current state-action pair based on the received reward and the maximum Q-value of the next state.</li>
            </ul>
      
            <h3>Assignment 1: Implementing Linear Regression</h3>
            <p>Create a simple linear regression model using scikit-learn with a provided dataset. Train the model, make predictions, and plot the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import numpy as np
      import matplotlib.pyplot as plt
      from sklearn.linear_model import LinearRegression
      import pandas as pd
      
      # Load the dataset
      data = pd.read_csv('data.csv')
      X = data['feature_column'].values.reshape(-1, 1)
      y = data['target_column'].values
      
      # Create and train the model
      model = LinearRegression()
      model.fit(X, y)
      
      # Make predictions
      predictions = model.predict(X)
      
      # Plot the results
      plt.scatter(X, y, color='blue')
      plt.plot(X, predictions, color='red')
      plt.title('Linear Regression Assignment')
      plt.xlabel('Feature')
      plt.ylabel('Target')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Loads the dataset and separates it into feature (X) and target (y) variables.</li>
              <li><strong>Create and train the model:</strong> Initializes and trains the linear regression model using the feature and target variables.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the feature variable.</li>
              <li><strong>Plot the results:</strong> Plots the original data points and the regression line.</li>
            </ul>
      
            <h3>Assignment 2: Implementing K-Means Clustering</h3>
            <p>Create a K-Means clustering model using scikit-learn with a provided dataset. Train the model, assign cluster labels, and plot the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import numpy as np
      import matplotlib.pyplot as plt
      from sklearn.cluster import KMeans
      import pandas as pd
      
      # Load the dataset
      data = pd.read_csv('data.csv')
      X = data[['feature_column_1', 'feature_column_2']].values
      
      # Create and train the model
      kmeans = KMeans(n_clusters=3)
      kmeans.fit(X)
      
      # Get cluster labels
      labels = kmeans.labels_
      
      # Plot the results
      plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
      plt.title('K-Means Clustering Assignment')
      plt.xlabel('Feature 1')
      plt.ylabel('Feature 2')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Loads the dataset and selects the feature columns for clustering.</li>
              <li><strong>Create and train the model:</strong> Initializes and trains the K-Means clustering model with the specified number of clusters.</li>
              <li><strong>Get cluster labels:</strong> Retrieves the cluster labels for each data point.</li>
              <li><strong>Plot the results:</strong> Plots the data points colored by their cluster labels.</li>
            </ul>
      
            <h3>Conclusion</h3>
            <p>Understanding and implementing various machine learning algorithms is fundamental for any data scientist. By mastering these algorithms, you can apply them to real-world problems and make informed decisions based on data. Practice implementing these algorithms to enhance your machine learning skills.</p>
          </section>
        `
      },
      
      {
        id: 'data',
        title: 'Data Visualization',
        content: `
          <section id="data">
            <h2>Data Visualization</h2>
      
            <h3>Introduction</h3>
            <p>Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data. It is an essential part of data analysis and communication.</p>
      
            <h3>Types of Data Visualizations</h3>
            <ul>
              <li><strong>Bar Charts:</strong> Used to compare different categories.</li>
              <li><strong>Line Charts:</strong> Used to show trends over time.</li>
              <li><strong>Scatter Plots:</strong> Used to show relationships between two variables.</li>
              <li><strong>Histograms:</strong> Used to show the distribution of a dataset.</li>
              <li><strong>Pie Charts:</strong> Used to show proportions of a whole.</li>
              <li><strong>Heatmaps:</strong> Used to show data density and relationships between variables.</li>
            </ul>
      
            <h3>Data Visualization with Matplotlib and Seaborn</h3>
            <p>Matplotlib and Seaborn are two powerful Python libraries for data visualization. Matplotlib provides a low-level interface for creating visualizations, while Seaborn offers a higher-level interface for creating more complex and attractive visualizations.</p>
      
            <h4>Bar Charts</h4>
            <pre><code class="language-python">
      import matplotlib.pyplot as plt
      
      # Example data
      categories = ['A', 'B', 'C', 'D']
      values = [10, 24, 36, 40]
      
      # Create a bar chart
      plt.figure(figsize=(10, 5))
      plt.bar(categories, values)
      plt.title('Bar Chart Example')
      plt.xlabel('Categories')
      plt.ylabel('Values')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>plt.bar()</strong>: Creates a bar chart with the provided categories and values.</li>
              <li><strong>plt.title(), plt.xlabel(), plt.ylabel()</strong>: Adds a title and labels to the chart.</li>
            </ul>
      
            <h4>Line Charts</h4>
            <pre><code class="language-python">
      import matplotlib.pyplot as plt
      
      # Example data
      x = [1, 2, 3, 4, 5]
      y = [10, 24, 36, 48, 60]
      
      # Create a line chart
      plt.figure(figsize=(10, 5))
      plt.plot(x, y, marker='o')
      plt.title('Line Chart Example')
      plt.xlabel('X-axis')
      plt.ylabel('Y-axis')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>plt.plot()</strong>: Creates a line chart with the provided x and y values.</li>
              <li><strong>marker='o'</strong>: Adds markers at each data point on the line.</li>
            </ul>
      
            <h4>Scatter Plots</h4>
            <pre><code class="language-python">
      import matplotlib.pyplot as plt
      
      # Example data
      x = [1, 2, 3, 4, 5]
      y = [10, 24, 36, 48, 60]
      
      # Create a scatter plot
      plt.figure(figsize=(10, 5))
      plt.scatter(x, y, color='red')
      plt.title('Scatter Plot Example')
      plt.xlabel('X-axis')
      plt.ylabel('Y-axis')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>plt.scatter()</strong>: Creates a scatter plot with the provided x and y values.</li>
              <li><strong>color='red'</strong>: Colors the data points red.</li>
            </ul>
      
            <h4>Histograms</h4>
            <pre><code class="language-python">
      import matplotlib.pyplot as plt
      import numpy as np
      
      # Example data
      data = np.random.randn(1000)
      
      # Create a histogram
      plt.figure(figsize=(10, 5))
      plt.hist(data, bins=30, edgecolor='black')
      plt.title('Histogram Example')
      plt.xlabel('Value')
      plt.ylabel('Frequency')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>np.random.randn(1000)</strong>: Generates 1000 random numbers from a standard normal distribution.</li>
              <li><strong>plt.hist()</strong>: Creates a histogram with the provided data.</li>
              <li><strong>bins=30</strong>: Specifies the number of bins (intervals) for the histogram.</li>
              <li><strong>edgecolor='black'</strong>: Adds black edges to the bins for better visual distinction.</li>
            </ul>
      
            <h4>Pie Charts</h4>
            <pre><code class="language-python">
      import matplotlib.pyplot as plt
      
      # Example data
      labels = ['A', 'B', 'C', 'D']
      sizes = [10, 20, 30, 40]
      
      # Create a pie chart
      plt.figure(figsize=(8, 8))
      plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=140)
      plt.title('Pie Chart Example')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>plt.pie()</strong>: Creates a pie chart with the provided sizes and labels.</li>
              <li><strong>autopct='%1.1f%%'</strong>: Adds percentage labels to the slices of the pie chart.</li>
              <li><strong>startangle=140</strong>: Rotates the start of the pie chart by 140 degrees.</li>
            </ul>
      
            <h4>Heatmaps</h4>
            <pre><code class="language-python">
      import seaborn as sns
      import numpy as np
      
      # Example data
      data = np.random.rand(10, 12)
      
      # Create a heatmap
      plt.figure(figsize=(12, 8))
      sns.heatmap(data, annot=True, cmap='viridis')
      plt.title('Heatmap Example')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>np.random.rand(10, 12)</strong>: Generates a 10x12 array of random numbers between 0 and 1.</li>
              <li><strong>sns.heatmap()</strong>: Creates a heatmap with the provided data.</li>
              <li><strong>annot=True</strong>: Adds numerical annotations to the cells of the heatmap.</li>
              <li><strong>cmap='viridis'</strong>: Sets the color map for the heatmap to 'viridis'.</li>
            </ul>
      
            <h3>Assignment 1: Creating Visualizations</h3>
            <p>Create a bar chart, line chart, and scatter plot using a provided dataset. Demonstrate the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import pandas as pd
      import matplotlib.pyplot as plt
      
      # Load the dataset
      data = pd.read_csv('data.csv')
      
      # Bar chart
      plt.figure(figsize=(10, 5))
      plt.bar(data['category'], data['value'])
      plt.title('Bar Chart Assignment')
      plt.xlabel('Category')
      plt.ylabel('Value')
      plt.show()
      
      # Line chart
      plt.figure(figsize=(10, 5))
      plt.plot(data['date'], data['value'], marker='o')
      plt.title('Line Chart Assignment')
      plt.xlabel('Date')
      plt.ylabel('Value')
      plt.show()
      
      # Scatter plot
      plt.figure(figsize=(10, 5))
      plt.scatter(data['feature1'], data['feature2'], color='red')
      plt.title('Scatter Plot Assignment')
      plt.xlabel('Feature 1')
      plt.ylabel('Feature 2')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Loads the dataset and extracts the necessary columns for visualization.</li>
              <li><strong>Bar chart:</strong> Creates a bar chart to visualize the 'category' and 'value' columns.</li>
              <li><strong>Line chart:</strong> Creates a line chart to visualize the 'date' and 'value' columns with markers.</li>
              <li><strong>Scatter plot:</strong> Creates a scatter plot to visualize the relationship between 'feature1' and 'feature2'.</li>
            </ul>
      
            <h3>Assignment 2: Advanced Visualizations</h3>
            <p>Create a histogram, pie chart, and heatmap using a provided dataset. Demonstrate the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import pandas as pd
      import matplotlib.pyplot as plt
      import seaborn as sns
      import numpy as np
      
      # Load the dataset
      data = pd.read_csv('data.csv')
      
      # Histogram
      plt.figure(figsize=(10, 5))
      plt.hist(data['value'], bins=30, edgecolor='black')
      plt.title('Histogram Assignment')
      plt.xlabel('Value')
      plt.ylabel('Frequency')
      plt.show()
      
      # Pie chart
      sizes = data['value'].value_counts()
      labels = sizes.index
      
      plt.figure(figsize=(8, 8))
      plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=140)
      plt.title('Pie Chart Assignment')
      plt.show()
      
      # Heatmap
      heatmap_data = np.random.rand(10, 12)
      plt.figure(figsize=(12, 8))
      sns.heatmap(heatmap_data, annot=True, cmap='viridis')
      plt.title('Heatmap Assignment')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Loads the dataset and extracts the necessary columns for visualization.</li>
              <li><strong>Histogram:</strong> Creates a histogram to visualize the distribution of the 'value' column.</li>
              <li><strong>Pie chart:</strong> Creates a pie chart to visualize the proportions of different categories in the 'value' column.</li>
              <li><strong>Heatmap:</strong> Creates a heatmap with random data to demonstrate the visualization technique.</li>
            </ul>
      
            <h3>Conclusion</h3>
            <p>Data visualization is a powerful tool for understanding and communicating data. By mastering various visualization techniques, you can uncover insights and effectively convey your findings. Practice creating different types of visualizations to enhance your data analysis skills.</p>
          </section>
        `
      },
      
      {
        id: 'statics',
        title: 'Statistical Analysis',
        content: `
          <section id="statics">
            <h2>Statistical Analysis</h2>
      
            <h3>Introduction</h3>
            <p>Statistical analysis involves collecting, exploring, and presenting large amounts of data to discover underlying patterns and trends. It is a critical tool in data science, helping to make informed decisions based on data.</p>
      
            <h3>Types of Statistical Analysis</h3>
            <ul>
              <li><strong>Descriptive Statistics:</strong> Summarizes and describes the features of a dataset.</li>
              <li><strong>Inferential Statistics:</strong> Makes inferences and predictions about a population based on a sample of data.</li>
              <li><strong>Predictive Analytics:</strong> Uses statistical models to predict future outcomes based on historical data.</li>
              <li><strong>Prescriptive Analytics:</strong> Suggests actions based on the analysis of data.</li>
            </ul>
      
            <h3>Descriptive Statistics</h3>
            <p>Descriptive statistics are used to summarize and describe the main features of a dataset. Common measures include mean, median, mode, standard deviation, and variance.</p>
            <pre><code class="language-python">
      import pandas as pd
      
      # Example data
      data = {
          'age': [23, 25, 31, 35, 40],
          'salary': [50000, 60000, 65000, 70000, 80000]
      }
      
      df = pd.DataFrame(data)
      
      # Calculate mean, median, mode
      mean_age = df['age'].mean()
      median_age = df['age'].median()
      mode_age = df['age'].mode()[0]
      
      print(f"Mean Age: {mean_age}, Median Age: {median_age}, Mode Age: {mode_age}")
      
      # Calculate standard deviation and variance
      std_dev_salary = df['salary'].std()
      variance_salary = df['salary'].var()
      
      print(f"Standard Deviation of Salary: {std_dev_salary}, Variance of Salary: {variance_salary}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>df['age'].mean()</strong>: Calculates the mean of the 'age' column.</li>
              <li><strong>df['age'].median()</strong>: Calculates the median of the 'age' column.</li>
              <li><strong>df['age'].mode()[0]</strong>: Calculates the mode of the 'age' column.</li>
              <li><strong>df['salary'].std()</strong>: Calculates the standard deviation of the 'salary' column.</li>
              <li><strong>df['salary'].var()</strong>: Calculates the variance of the 'salary' column.</li>
            </ul>
      
            <h3>Inferential Statistics</h3>
            <p>Inferential statistics involve making predictions or inferences about a population based on a sample of data. Common techniques include hypothesis testing, confidence intervals, and regression analysis.</p>
            <pre><code class="language-python">
      import numpy as np
      from scipy import stats
      
      # Example data
      data = np.array([23, 25, 31, 35, 40])
      
      # Perform a t-test
      t_statistic, p_value = stats.ttest_1samp(data, 30)
      
      print(f"T-statistic: {t_statistic}, P-value: {p_value}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>np.array()</strong>: Creates an array of sample data.</li>
              <li><strong>stats.ttest_1samp()</strong>: Performs a one-sample t-test comparing the sample data to a population mean of 30.</li>
              <li><strong>t_statistic</strong>: The calculated t-statistic value.</li>
              <li><strong>p_value</strong>: The p-value indicating the probability of obtaining the observed results under the null hypothesis.</li>
            </ul>
      
            <h3>Predictive Analytics</h3>
            <p>Predictive analytics uses statistical models and machine learning techniques to predict future outcomes based on historical data. A common method is linear regression.</p>
            <pre><code class="language-python">
      import numpy as np
      import pandas as pd
      from sklearn.linear_model import LinearRegression
      
      # Example data
      data = {
          'years_experience': [1, 2, 3, 4, 5],
          'salary': [40000, 45000, 50000, 55000, 60000]
      }
      
      df = pd.DataFrame(data)
      
      # Prepare data for the model
      X = df['years_experience'].values.reshape(-1, 1)
      y = df['salary'].values
      
      # Create and train the model
      model = LinearRegression()
      model.fit(X, y)
      
      # Make predictions
      predictions = model.predict(X)
      
      # Display predictions
      df['predicted_salary'] = predictions
      print(df)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>LinearRegression()</strong>: Initializes the linear regression model.</li>
              <li><strong>model.fit(X, y)</strong>: Trains the model on the provided data.</li>
              <li><strong>model.predict(X)</strong>: Makes predictions using the trained model.</li>
              <li><strong>df['predicted_salary']</strong>: Adds the predicted salaries to the DataFrame.</li>
            </ul>
      
            <h3>Prescriptive Analytics</h3>
            <p>Prescriptive analytics suggests actions based on data analysis. It combines predictive models with optimization and simulation techniques to recommend actions that can lead to desired outcomes.</p>
            <pre><code class="language-python">
      import pandas as pd
      import numpy as np
      from scipy.optimize import linprog
      
      # Example data
      c = [-20, -12, -40, -25]  # Coefficients for the objective function
      A = [
          [1, 1, 1, 1],
          [3, 2, 1, 0],
          [0, 1, 2, 3]
      ]
      b = [50, 100, 90]  # Constraints for the inequalities
      
      # Perform linear programming optimization
      result = linprog(c, A_ub=A, b_ub=b, bounds=(0, None))
      
      print(f"Optimal value: {-result.fun}, Optimal solution: {result.x}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>linprog()</strong>: Solves a linear programming problem to maximize or minimize an objective function subject to constraints.</li>
              <li><strong>c</strong>: Coefficients for the objective function (negative for maximization).</li>
              <li><strong>A</strong>: Coefficients for the inequality constraints.</li>
              <li><strong>b</strong>: Upper bounds for the inequality constraints.</li>
              <li><strong>result.fun</strong>: The optimal value of the objective function.</li>
              <li><strong>result.x</strong>: The optimal solution (values of the variables).</li>
            </ul>
      
            <h3>Assignment 1: Descriptive Statistics</h3>
            <p>Load a dataset and calculate the mean, median, mode, standard deviation, and variance for a numerical column. Demonstrate the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import pandas as pd
      
      # Load the dataset
      data = pd.read_csv('data.csv')
      
      # Calculate descriptive statistics
      mean_value = data['column'].mean()
      median_value = data['column'].median()
      mode_value = data['column'].mode()[0]
      std_dev_value = data['column'].std()
      variance_value = data['column'].var()
      
      print(f"Mean: {mean_value}, Median: {median_value}, Mode: {mode_value}, 
      Standard Deviation: {std_dev_value}, Variance: {variance_value}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Loads the dataset and extracts the numerical column for analysis.</li>
              <li><strong>Calculate descriptive statistics:</strong> Calculates the mean, median, mode, standard deviation, and variance for the numerical column.</li>
            </ul>
      
            <h3>Assignment 2: Inferential Statistics</h3>
            <p>Perform a hypothesis test on a dataset to compare the mean of a sample to a known population mean. Demonstrate the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import numpy as np
      from scipy import stats
      
      # Example data
      data = np.array([20, 22, 23, 25, 27, 30])
      
      # Perform a t-test
      t_statistic, p_value = stats.ttest_1samp(data, 24)
      
      print(f"T-statistic: {t_statistic}, P-value: {p_value}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>np.array()</strong>: Creates an array of sample data.</li>
              <li><strong>stats.ttest_1samp()</strong>: Performs a one-sample t-test comparing the sample data to a population mean of 24.</li>
              <li><strong>t_statistic</strong>: The calculated t-statistic value.</li>
              <li><strong>p_value</strong>: The p-value indicating the probability of obtaining the observed results under the null hypothesis.</li>
            </ul>
      
            <h3>Conclusion</h3>
            <p>Statistical analysis is a fundamental aspect of data science. It helps in understanding data, making predictions, and guiding decision-making processes. By mastering statistical techniques, you can draw meaningful insights from data and make informed decisions. Practice these techniques to enhance your data analysis skills.</p>
          </section>
        `
      },
      
      {
        id: 'big',
        title: 'Big Data Technologies',
        content: `
          <section id="big">
            <h2>Big Data Technologies</h2>
      
            <h3>Introduction</h3>
            <p>Big Data technologies refer to tools, techniques, and frameworks designed to process, store, and analyze vast amounts of data. These technologies are essential for handling data that is too large or complex for traditional data-processing software. Big Data technologies enable businesses and organizations to gain insights, make better decisions, and drive innovation.</p>
      
            <h3>Key Big Data Technologies</h3>
            <ul>
              <li><strong>Hadoop:</strong> An open-source framework for storing and processing large datasets using a distributed computing model.</li>
              <li><strong>Spark:</strong> An open-source unified analytics engine for large-scale data processing, known for its speed and ease of use.</li>
              <li><strong>Kafka:</strong> A distributed streaming platform capable of handling real-time data feeds.</li>
              <li><strong>Hive:</strong> A data warehousing tool built on top of Hadoop for querying and analyzing large datasets using SQL-like queries.</li>
              <li><strong>Cassandra:</strong> A highly scalable NoSQL database designed to handle large amounts of data across many commodity servers.</li>
              <li><strong>Elasticsearch:</strong> A distributed, RESTful search and analytics engine capable of real-time search and analysis of large datasets.</li>
            </ul>
      
            <h3>Hadoop</h3>
            <p>Hadoop is an open-source framework that allows for the distributed processing of large datasets across clusters of computers using simple programming models. It is designed to scale up from single servers to thousands of machines, each offering local computation and storage.</p>
            <pre><code class="language-python">
      # Install Hadoop
      wget https://downloads.apache.org/hadoop/common/hadoop-3.3.1/hadoop-3.3.1.tar.gz
      tar -xzvf hadoop-3.3.1.tar.gz
      mv hadoop-3.3.1 /usr/local/hadoop
      
      # Configure Hadoop
      export HADOOP_HOME=/usr/local/hadoop
      export HADOOP_CONF_DIR=$HADOOP_HOME/etc/hadoop
      export PATH=$PATH:$HADOOP_HOME/bin
      
      # Format the Hadoop filesystem
      hdfs namenode -format
      
      # Start Hadoop
      start-dfs.sh
      start-yarn.sh
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Install Hadoop:</strong> Downloads and extracts Hadoop to the local system.</li>
              <li><strong>Configure Hadoop:</strong> Sets environment variables for Hadoop configuration.</li>
              <li><strong>Format the Hadoop filesystem:</strong> Prepares the Hadoop Distributed File System (HDFS) for use.</li>
              <li><strong>Start Hadoop:</strong> Starts the Hadoop Distributed File System (DFS) and Yet Another Resource Negotiator (YARN).</li>
            </ul>
      
            <h3>Spark</h3>
            <p>Apache Spark is an open-source unified analytics engine for large-scale data processing. It provides high-level APIs in Java, Scala, Python, and R, and an optimized engine that supports general execution graphs. Spark also includes modules for SQL, streaming, machine learning, and graph processing.</p>
            <pre><code class="language-python">
      from pyspark.sql import SparkSession
      
      # Initialize Spark session
      spark = SparkSession.builder.appName("BigDataExample").getOrCreate()
      
      # Create DataFrame
      data = [("Alice", 34), ("Bob", 45), ("Cathy", 29)]
      columns = ["Name", "Age"]
      df = spark.createDataFrame(data, columns)
      
      # Show DataFrame
      df.show()
      
      # Perform a simple transformation
      df_filtered = df.filter(df.Age > 30)
      df_filtered.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Initialize Spark session:</strong> Creates a Spark session to work with data.</li>
              <li><strong>Create DataFrame:</strong> Creates a DataFrame from a list of tuples.</li>
              <li><strong>Show DataFrame:</strong> Displays the contents of the DataFrame.</li>
              <li><strong>Perform a simple transformation:</strong> Filters the DataFrame to include only rows where the 'Age' is greater than 30.</li>
            </ul>
      
            <h3>Kafka</h3>
            <p>Apache Kafka is a distributed streaming platform that can publish, subscribe to, store, and process streams of records in real time. Kafka is designed to handle data streams from multiple sources and deliver them to multiple consumers in a fault-tolerant manner.</p>
            <pre><code class="language-python">
      # Start Zookeeper
      bin/zookeeper-server-start.sh config/zookeeper.properties
      
      # Start Kafka server
      bin/kafka-server-start.sh config/server.properties
      
      # Create a topic
      bin/kafka-topics.sh --create --topic test-topic --bootstrap-server localhost:9092 
      --replication-factor 1 --partitions 1
      
      # List topics
      bin/kafka-topics.sh --list --bootstrap-server localhost:9092
      
      # Produce messages
      bin/kafka-console-producer.sh --topic test-topic --bootstrap-server localhost:9092
      
      # Consume messages
      bin/kafka-console-consumer.sh --topic test-topic --from-beginning --bootstrap-server localhost:9092
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Start Zookeeper:</strong> Starts the Zookeeper service, which Kafka relies on for distributed coordination.</li>
              <li><strong>Start Kafka server:</strong> Starts the Kafka server.</li>
              <li><strong>Create a topic:</strong> Creates a new topic named 'test-topic' in Kafka.</li>
              <li><strong>List topics:</strong> Lists all the topics available in Kafka.</li>
              <li><strong>Produce messages:</strong> Starts a console producer to send messages to the 'test-topic'.</li>
              <li><strong>Consume messages:</strong> Starts a console consumer to read messages from the 'test-topic'.</li>
            </ul>
      
            <h3>Hive</h3>
            <p>Apache Hive is a data warehouse software built on top of Hadoop for providing data query and analysis. Hive gives an SQL-like interface to query data stored in various databases and file systems that integrate with Hadoop.</p>
            <pre><code class="language-python">
      -- Create a database
      CREATE DATABASE mydatabase;
      
      -- Create a table
      CREATE TABLE mytable (
          id INT,
          name STRING,
          age INT
      ) ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' STORED AS TEXTFILE;
      
      -- Load data into the table
      LOAD DATA INPATH '/path/to/data.csv' INTO TABLE mytable;
      
      -- Query the data
      SELECT * FROM mytable WHERE age > 30;
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>CREATE DATABASE:</strong> Creates a new database named 'mydatabase'.</li>
              <li><strong>CREATE TABLE:</strong> Creates a new table named 'mytable' with specified columns and data types.</li>
              <li><strong>LOAD DATA INPATH:</strong> Loads data from a specified path into the 'mytable'.</li>
              <li><strong>SELECT * FROM mytable WHERE age > 30:</strong> Queries the table to select rows where the 'age' column is greater than 30.</li>
            </ul>
      
            <h3>Cassandra</h3>
            <p>Apache Cassandra is a highly scalable, high-performance distributed NoSQL database designed to handle large amounts of data across many commodity servers with no single point of failure. It provides high availability with no single point of failure.</p>
            <pre><code class="language-python">
      # Start Cassandra
      cassandra -f
      
      # Connect to Cassandra
      cqlsh
      
      # Create a keyspace
      CREATE KEYSPACE mykeyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
      
      # Use the keyspace
      USE mykeyspace;
      
      # Create a table
      CREATE TABLE users (
          user_id UUID PRIMARY KEY,
          name TEXT,
          age INT
      );
      
      # Insert data into the table
      INSERT INTO users (user_id, name, age) VALUES (uuid(), 'Alice', 30);
      
      # Query the data
      SELECT * FROM users WHERE age > 25;
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>CREATE KEYSPACE:</strong> Creates a new keyspace named 'mykeyspace' with a simple replication strategy.</li>
              <li><strong>USE mykeyspace:</strong> Sets the context to the 'mykeyspace' keyspace.</li>
              <li><strong>CREATE TABLE:</strong> Creates a new table named 'users' with specified columns and data types.</li>
              <li><strong>INSERT INTO users:</strong> Inserts a new row into the 'users' table.</li>
              <li><strong>SELECT * FROM users WHERE age > 25:</strong> Queries the table to select rows where the 'age' column is greater than 25.</li>
            </ul>
      
            <h3>Elasticsearch</h3>
            <p>Elasticsearch is a distributed, RESTful search and analytics engine capable of solving a growing number of use cases. As the heart of the Elastic Stack, it centrally stores your data so you can discover the expected and uncover the unexpected.</p>
            <pre><code class="language-python">
      # Start Elasticsearch
      ./bin/elasticsearch
      
      # Index a document
      curl -X POST "localhost:9200/myindex/_doc/1" -H 'Content-Type: application/json' -d'
      {
        "name": "Alice",
        "age": 30
      }'
      
      # Search for a document
      curl -X GET "localhost:9200/myindex/_search" -H 'Content-Type: application/json' -d'
      {
        "query": {
          "match": {
            "name": "Alice"
          }
        }
      }'
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Start Elasticsearch:</strong> Starts the Elasticsearch service.</li>
              <li><strong>Index a document:</strong> Adds a document to the 'myindex' index.</li>
              <li><strong>Search for a document:</strong> Searches for documents in the 'myindex' index that match the query criteria.</li>
            </ul>
      
            <h3>Assignment 1: Working with Hadoop</h3>
            <p>Set up Hadoop on your local machine, create a new HDFS directory, and upload a file to it. Demonstrate the steps and results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      # Set up Hadoop (Assuming Hadoop is already installed and configured)
      hdfs dfs -mkdir /user/myuser/mydir
      
      # Upload a file to HDFS
      hdfs dfs -put /path/to/localfile.txt /user/myuser/mydir/
      
      # List files in HDFS directory
      hdfs dfs -ls /user/myuser/mydir/
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>hdfs dfs -mkdir:</strong> Creates a new directory in HDFS.</li>
              <li><strong>hdfs dfs -put:</strong> Uploads a local file to the specified HDFS directory.</li>
              <li><strong>hdfs dfs -ls:</strong> Lists files in the specified HDFS directory.</li>
            </ul>
      
            <h3>Assignment 2: Using Spark for Data Processing</h3>
            <p>Create a Spark application that reads a CSV file, performs some transformations, and writes the result to a new CSV file. Demonstrate the steps and results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      from pyspark.sql import SparkSession
      
      # Initialize Spark session
      spark = SparkSession.builder.appName("Assignment").getOrCreate()
      
      # Read CSV file
      df = spark.read.csv('data.csv', header=True, inferSchema=True)
      
      # Perform transformations
      df_filtered = df.filter(df['age'] > 30)
      df_transformed = df_filtered.withColumn('age_plus_ten', df['age'] + 10)
      
      # Write result to new CSV file
      df_transformed.write.csv('output.csv', header=True)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Read CSV file:</strong> Reads a CSV file into a DataFrame.</li>
              <li><strong>Perform transformations:</strong> Filters the DataFrame to include only rows where 'age' is greater than 30 and adds a new column 'age_plus_ten'.</li>
              <li><strong>Write result to new CSV file:</strong> Writes the transformed DataFrame to a new CSV file.</li>
            </ul>
      
            <h3>Conclusion</h3>
            <p>Big Data technologies are essential for processing, storing, and analyzing vast amounts of data. Understanding and working with these technologies enables businesses and organizations to gain insights, make better decisions, and drive innovation. Practice using these technologies to enhance your data processing and analysis skills.</p>
          </section>
        `
      },
      
      {
        id: 'science',
        title: 'Data Science Projects',
        content: `
          <section id="science">
            <h2>Data Science Projects</h2>
      
            <h3>Introduction</h3>
            <p>Data science projects involve applying data analysis, machine learning, and other data-driven techniques to solve real-world problems. These projects help to demonstrate your skills and knowledge in data science, and they can be used to build a portfolio that showcases your abilities.</p>
      
            <h3>Key Components of Data Science Projects</h3>
            <ul>
              <li><strong>Problem Definition:</strong> Clearly define the problem you are trying to solve.</li>
              <li><strong>Data Collection:</strong> Gather data from various sources that are relevant to the problem.</li>
              <li><strong>Data Cleaning:</strong> Clean and preprocess the data to prepare it for analysis.</li>
              <li><strong>Exploratory Data Analysis (EDA):</strong> Analyze the data to discover patterns, correlations, and insights.</li>
              <li><strong>Model Building:</strong> Develop and train machine learning models to solve the problem.</li>
              <li><strong>Model Evaluation:</strong> Evaluate the performance of the models using appropriate metrics.</li>
              <li><strong>Deployment:</strong> Deploy the models to a production environment if necessary.</li>
              <li><strong>Documentation:</strong> Document your process, findings, and conclusions.</li>
            </ul>
      
            <h3>Example Data Science Projects</h3>
      
            <h4>Project 1: Predicting House Prices</h4>
            <p>This project involves building a model to predict house prices based on various features such as location, size, and amenities.</p>
            <pre><code class="language-python">
      import pandas as pd
      import matplotlib.pyplot as plt
      import seaborn as sns
      from sklearn.model_selection import train_test_split
      from sklearn.linear_model import LinearRegression
      from sklearn.metrics import mean_squared_error, r2_score
      
      # Load the dataset
      df = pd.read_csv('house_prices.csv')
      
      # Data cleaning
      df = df.dropna()
      
      # Exploratory Data Analysis
      sns.pairplot(df)
      plt.show()
      
      # Define features and target variable
      X = df[['location', 'size', 'amenities']]
      y = df['price']
      
      # Split the data into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      
      # Build the model
      model = LinearRegression()
      model.fit(X_train, y_train)
      
      # Make predictions
      y_pred = model.predict(X_test)
      
      # Evaluate the model
      mse = mean_squared_error(y_test, y_pred)
      r2 = r2_score(y_test, y_pred)
      
      print(f"Mean Squared Error: {mse}")
      print(f"R-squared: {r2}")
      
      # Plot predictions vs actual values
      plt.scatter(y_test, y_pred)
      plt.xlabel('Actual Prices')
      plt.ylabel('Predicted Prices')
      plt.title('Actual Prices vs Predicted Prices')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Reads the dataset from a CSV file.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Exploratory Data Analysis:</strong> Uses pairplot to visualize relationships between features.</li>
              <li><strong>Define features and target variable:</strong> Selects relevant features and the target variable for the model.</li>
              <li><strong>Split the data:</strong> Splits the data into training and testing sets.</li>
              <li><strong>Build the model:</strong> Trains a linear regression model on the training data.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the test data.</li>
              <li><strong>Evaluate the model:</strong> Calculates the mean squared error and R-squared value to evaluate the model's performance.</li>
              <li><strong>Plot predictions vs actual values:</strong> Visualizes the model's predictions against the actual values.</li>
            </ul>
      
            <h4>Project 2: Customer Segmentation</h4>
            <p>This project involves segmenting customers based on their purchasing behavior using clustering techniques.</p>
            <pre><code class="language-python">
      import pandas as pd
      import matplotlib.pyplot as plt
      from sklearn.preprocessing import StandardScaler
      from sklearn.cluster import KMeans
      from sklearn.decomposition import PCA
      
      # Load the dataset
      df = pd.read_csv('customer_data.csv')
      
      # Data cleaning
      df = df.dropna()
      
      # Standardize the data
      scaler = StandardScaler()
      df_scaled = scaler.fit_transform(df[['purchase_amount', 'frequency', 'recency']])
      
      # Apply PCA for dimensionality reduction
      pca = PCA(n_components=2)
      df_pca = pca.fit_transform(df_scaled)
      
      # Apply K-Means clustering
      kmeans = KMeans(n_clusters=3)
      df['cluster'] = kmeans.fit_predict(df_pca)
      
      # Visualize the clusters
      plt.scatter(df_pca[:, 0], df_pca[:, 1], c=df['cluster'], cmap='viridis')
      plt.xlabel('Principal Component 1')
      plt.ylabel('Principal Component 2')
      plt.title('Customer Segmentation')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Reads the dataset from a CSV file.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Standardize the data:</strong> Standardizes the features using StandardScaler.</li>
              <li><strong>Apply PCA:</strong> Reduces the dimensionality of the data using Principal Component Analysis.</li>
              <li><strong>Apply K-Means clustering:</strong> Clusters the data into 3 segments using K-Means.</li>
              <li><strong>Visualize the clusters:</strong> Plots the clusters on a 2D plane using the first two principal components.</li>
            </ul>
      
            <h4>Project 3: Sentiment Analysis</h4>
            <p>This project involves analyzing the sentiment of customer reviews using natural language processing techniques.</p>
            <pre><code class="language-python">
      import pandas as pd
      from sklearn.model_selection import train_test_split
      from sklearn.feature_extraction.text import CountVectorizer
      from sklearn.naive_bayes import MultinomialNB
      from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
      
      # Load the dataset
      df = pd.read_csv('reviews.csv')
      
      # Data cleaning
      df = df.dropna()
      
      # Define features and target variable
      X = df['review']
      y = df['sentiment']
      
      # Split the data into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      
      # Vectorize the text data
      vectorizer = CountVectorizer()
      X_train_vec = vectorizer.fit_transform(X_train)
      X_test_vec = vectorizer.transform(X_test)
      
      # Build the model
      model = MultinomialNB()
      model.fit(X_train_vec, y_train)
      
      # Make predictions
      y_pred = model.predict(X_test_vec)
      
      # Evaluate the model
      accuracy = accuracy_score(y_test, y_pred)
      conf_matrix = confusion_matrix(y_test, y_pred)
      class_report = classification_report(y_test, y_pred)
      
      print(f"Accuracy: {accuracy}")
      print(f"Confusion Matrix:\\n{conf_matrix}")
      print(f"Classification Report:\\n{class_report}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Reads the dataset from a CSV file.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Define features and target variable:</strong> Selects the 'review' column as the feature and the 'sentiment' column as the target variable.</li>
              <li><strong>Split the data:</strong> Splits the data into training and testing sets.</li>
              <li><strong>Vectorize the text data:</strong> Converts the text data into numerical features using CountVectorizer.</li>
              <li><strong>Build the model:</strong> Trains a Multinomial Naive Bayes model on the training data.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the test data.</li>
              <li><strong>Evaluate the model:</strong> Calculates the accuracy, confusion matrix, and classification report to evaluate the model's performance.</li>
            </ul>
      
            <h3>Assignment 1: Predicting Stock Prices</h3>
            <p>Build a model to predict stock prices using historical data. Perform data cleaning, exploratory data analysis, model building, and evaluation. Demonstrate the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import pandas as pd
      import numpy as np
      from sklearn.model_selection import train_test_split
      from sklearn.linear_model import LinearRegression
      from sklearn.metrics import mean_squared_error
      
      # Load the dataset
      df = pd.read_csv('stock_prices.csv')
      
      # Data cleaning
      df = df.dropna()
      
      # Exploratory Data Analysis
      import matplotlib.pyplot as plt
      plt.plot(df['Date'], df['Close'])
      plt.xlabel('Date')
      plt.ylabel('Close Price')
      plt.title('Stock Prices Over Time')
      plt.show()
      
      # Define features and target variable
      X = df[['Open', 'High', 'Low', 'Volume']]
      y = df['Close']
      
      # Split the data into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      
      # Build the model
      model = LinearRegression()
      model.fit(X_train, y_train)
      
      # Make predictions
      y_pred = model.predict(X_test)
      
      # Evaluate the model
      mse = mean_squared_error(y_test, y_pred)
      print(f"Mean Squared Error: {mse}")
      
      # Plot predictions vs actual values
      plt.scatter(y_test, y_pred)
      plt.xlabel('Actual Prices')
      plt.ylabel('Predicted Prices')
      plt.title('Actual Prices vs Predicted Prices')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Reads the dataset from a CSV file.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Exploratory Data Analysis:</strong> Plots the stock prices over time.</li>
              <li><strong>Define features and target variable:</strong> Selects relevant features and the target variable for the model.</li>
              <li><strong>Split the data:</strong> Splits the data into training and testing sets.</li>
              <li><strong>Build the model:</strong> Trains a linear regression model on the training data.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the test data.</li>
              <li><strong>Evaluate the model:</strong> Calculates the mean squared error to evaluate the model's performance.</li>
              <li><strong>Plot predictions vs actual values:</strong> Visualizes the model's predictions against the actual values.</li>
            </ul>
      
            <h3>Assignment 2: Building a Recommendation System</h3>
            <p>Create a recommendation system using collaborative filtering techniques. Perform data cleaning, model building, and evaluation. Demonstrate the results.</p>
            <h4>Solution:</h4>
            <pre><code class="language-python">
      import pandas as pd
      from sklearn.model_selection import train_test_split
      from surprise import Dataset, Reader, SVD
      from surprise.model_selection import cross_validate
      
      # Load the dataset
      df = pd.read_csv('ratings.csv')
      
      # Data cleaning
      df = df.dropna()
      
      # Prepare the data for Surprise
      reader = Reader(rating_scale=(1, 5))
      data = Dataset.load_from_df(df[['userId', 'movieId', 'rating']], reader)
      
      # Split the data into training and testing sets
      trainset, testset = train_test_split(data, test_size=0.2, random_state=42)
      
      # Build the model
      model = SVD()
      model.fit(trainset)
      
      # Evaluate the model
      cross_validate(model, data, measures=['RMSE', 'MAE'], cv=5, verbose=True)
      
      # Make predictions
      predictions = model.test(testset)
      
      # Display a few predictions
      for prediction in predictions[:5]:
          print(prediction)
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Reads the dataset from a CSV file.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Prepare the data for Surprise:</strong> Prepares the dataset for use with the Surprise library.</li>
              <li><strong>Split the data:</strong> Splits the data into training and testing sets.</li>
              <li><strong>Build the model:</strong> Trains a Singular Value Decomposition (SVD) model on the training data.</li>
              <li><strong>Evaluate the model:</strong> Uses cross-validation to evaluate the model's performance.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the test data.</li>
              <li><strong>Display predictions:</strong> Prints a few sample predictions.</li>
            </ul>
      
            <h3>Conclusion</h3>
            <p>Data science projects are an excellent way to demonstrate your skills and knowledge in data science. By working on these projects, you can gain hands-on experience with data analysis, machine learning, and other data-driven techniques. Practice working on various projects to build a strong portfolio and enhance your data science skills.</p>
          </section>
        `
      },
      
      {
        id: 'case',
        title: 'Case Studies',
        content: `
          <section id="case">
            <h2>Case Studies</h2>
      
            <h3>Introduction</h3>
            <p>Case studies are in-depth analyses of specific projects, events, or organizations, providing insights into how data science techniques are applied to real-world problems. They help to understand the practical applications, challenges, and solutions in various domains.</p>
      
            <h3>Key Elements of a Case Study</h3>
            <ul>
              <li><strong>Background:</strong> Information about the organization, project, or problem being studied.</li>
              <li><strong>Objectives:</strong> The goals or questions the study aims to address.</li>
              <li><strong>Methodology:</strong> The data collection, cleaning, analysis, and modeling techniques used.</li>
              <li><strong>Results:</strong> The findings and outcomes of the study.</li>
              <li><strong>Conclusion:</strong> The implications, recommendations, and potential for future work.</li>
            </ul>
      
            <h3>Example Case Studies</h3>
      
            <h4>Case Study 1: Predicting Customer Churn</h4>
            <p>This case study focuses on a telecommunications company looking to predict customer churn to improve retention strategies.</p>
            <pre><code class="language-python">
      import pandas as pd
      from sklearn.model_selection import train_test_split
      from sklearn.ensemble import RandomForestClassifier
      from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
      
      # Background
      # The telecommunications company has noticed a high rate of customer churn and wants
      # to identify the factors that contribute to churn and predict which customers are at risk of leaving.
      
      
      # Load the dataset
      df = pd.read_csv('customer_churn.csv')
      
      # Objectives
      # The goal is to build a model to predict customer churn based on various features such as customer 
      #demographics, account information, and usage patterns.
      
      
      # Data cleaning
      df = df.dropna()
      
      # Methodology
      # Define features and target variable
      X = df.drop('churn', axis=1)
      y = df['churn']
      
      # Split the data into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      
      # Build the model
      model = RandomForestClassifier()
      model.fit(X_train, y_train)
      
      # Make predictions
      y_pred = model.predict(X_test)
      
      # Results
      accuracy = accuracy_score(y_test, y_pred)
      conf_matrix = confusion_matrix(y_test, y_pred)
      class_report = classification_report(y_test, y_pred)
      
      print(f"Accuracy: {accuracy}")
      print(f"Confusion Matrix:\\n{conf_matrix}")
      print(f"Classification Report:\\n{class_report}")
      
      # Conclusion
      # The model achieved an accuracy of {accuracy}, and the confusion matrix and 
      #classification report provide further insightsinto the model's performance.
      # Based on these results, the company can identify high-risk customers and implement 
      #targeted retention strategies.
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Background:</strong> Provides context about the problem being addressed.</li>
              <li><strong>Objectives:</strong> States the goals of the study.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Methodology:</strong> Details the steps for data preparation, model building, and evaluation.</li>
              <li><strong>Results:</strong> Displays the accuracy, confusion matrix, and classification report.</li>
              <li><strong>Conclusion:</strong> Summarizes the findings and implications for the company.</li>
            </ul>
      
            <h4>Case Study 2: Enhancing Marketing Campaigns</h4>
            <p>This case study focuses on an e-commerce company aiming to enhance its marketing campaigns by understanding customer behavior.</p>
            <pre><code class="language-python">
      import pandas as pd
      import matplotlib.pyplot as plt
      from sklearn.cluster import KMeans
      
      # Background
      # The e-commerce company wants to segment its customers to tailor marketing campaigns more effectively.
      
      # Load the dataset
      df = pd.read_csv('customer_data.csv')
      
      # Objectives
      # The goal is to segment customers based on their purchasing behavior and demographic information.
      
      # Data cleaning
      df = df.dropna()
      
      # Methodology
      # Define features for clustering
      X = df[['age', 'annual_income', 'spending_score']]
      
      # Apply K-Means clustering
      kmeans = KMeans(n_clusters=3)
      df['cluster'] = kmeans.fit_predict(X)
      
      # Results
      plt.scatter(df['annual_income'], df['spending_score'], c=df['cluster'], cmap='viridis')
      plt.xlabel('Annual Income')
      plt.ylabel('Spending Score')
      plt.title('Customer Segmentation')
      plt.show()
      
      # Conclusion
      # The clustering analysis revealed distinct customer segments that the company can target with
      # tailored marketing strategies.
      # For example, high-income, high-spending customers can be targeted with premium products and services.
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Background:</strong> Provides context about the problem being addressed.</li>
              <li><strong>Objectives:</strong> States the goals of the study.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Methodology:</strong> Details the steps for data preparation and clustering analysis.</li>
              <li><strong>Results:</strong> Visualizes the customer segments using a scatter plot.</li>
              <li><strong>Conclusion:</strong> Summarizes the findings and implications for the company.</li>
            </ul>
      
            <h4>Case Study 3: Optimizing Supply Chain Operations</h4>
            <p>This case study focuses on a manufacturing company looking to optimize its supply chain operations to reduce costs and improve efficiency.</p>
            <pre><code class="language-python">
      import pandas as pd
      import numpy as np
      from scipy.optimize import linprog
      
      # Background
      # The manufacturing company wants to minimize supply chain costs while meeting demand.
      
      # Load the dataset
      df = pd.read_csv('supply_chain_data.csv')
      
      # Objectives
      # The goal is to optimize the supply chain operations to reduce costs.
      
      # Data cleaning
      df = df.dropna()
      
      # Methodology
      # Define the cost coefficients
      c = df['cost'].values
      
      # Define the constraints
      A = df[['supply', 'demand']].values
      b = df['capacity'].values
      
      # Apply linear programming optimization
      result = linprog(c, A_ub=A, b_ub=b, bounds=(0, None))
      
      # Results
      print(f"Optimal cost: {result.fun}")
      print(f"Optimal solution: {result.x}")
      
      # Conclusion
      # The optimization analysis provided a solution that minimizes costs while meeting supply 
      #and demand constraints.
      # This allows the company to improve efficiency and reduce operational expenses.
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Background:</strong> Provides context about the problem being addressed.</li>
              <li><strong>Objectives:</strong> States the goals of the study.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Methodology:</strong> Details the steps for data preparation and linear programming optimization.</li>
              <li><strong>Results:</strong> Displays the optimal cost and solution for the supply chain problem.</li>
              <li><strong>Conclusion:</strong> Summarizes the findings and implications for the company.</li>
            </ul>
      
            <h3>Assignment 1: Case Study Analysis</h3>
            <p>Analyze a case study of your choice by following the key elements outlined above. Provide a detailed report of your findings and conclusions.</p>
            <h4>Solution:</h4>
            <p>Choose a real-world problem or dataset and apply the case study methodology. Document each step, from background and objectives to methodology, results, and conclusion. Use data visualization and statistical analysis to support your findings.</p>
      
            <h3>Conclusion</h3>
            <p>Case studies provide valuable insights into the practical applications of data science techniques. By studying real-world examples, you can learn how to approach complex problems, apply appropriate methodologies, and draw meaningful conclusions. Practice analyzing case studies to enhance your data science skills and knowledge.</p>
          </section>
        `
      },
      
      {
        id: 'industry',
        title: 'Industry Applications',
        content: `
          <section id="industry">
            <h2>Industry Applications</h2>
      
            <h3>Introduction</h3>
            <p>Data science and big data technologies are transforming various industries by providing valuable insights, improving decision-making processes, and driving innovation. This section explores how different industries are leveraging these technologies to solve problems and enhance operations.</p>
      
            <h3>Key Industry Applications</h3>
            <ul>
              <li><strong>Healthcare:</strong> Enhancing patient care, optimizing operations, and advancing medical research.</li>
              <li><strong>Finance:</strong> Fraud detection, risk management, and personalized financial services.</li>
              <li><strong>Retail:</strong> Customer segmentation, inventory management, and personalized marketing.</li>
              <li><strong>Manufacturing:</strong> Predictive maintenance, supply chain optimization, and quality control.</li>
              <li><strong>Telecommunications:</strong> Network optimization, customer churn prediction, and targeted marketing.</li>
              <li><strong>Transportation:</strong> Route optimization, demand forecasting, and autonomous vehicles.</li>
              <li><strong>Energy:</strong> Smart grid management, predictive maintenance, and energy consumption optimization.</li>
            </ul>
      
            <h3>Healthcare</h3>
            <p>In the healthcare industry, data science is used to enhance patient care, optimize hospital operations, and advance medical research.</p>
            <pre><code class="language-python">
      import pandas as pd
      from sklearn.model_selection import train_test_split
      from sklearn.ensemble import RandomForestClassifier
      from sklearn.metrics import accuracy_score, classification_report
      
      # Example: Predicting patient readmission
      # Load the dataset
      df = pd.read_csv('patient_data.csv')
      
      # Data cleaning
      df = df.dropna()
      
      # Define features and target variable
      X = df.drop('readmitted', axis=1)
      y = df['readmitted']
      
      # Split the data into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      
      # Build the model
      model = RandomForestClassifier()
      model.fit(X_train, y_train)
      
      # Make predictions
      y_pred = model.predict(X_test)
      
      # Evaluate the model
      accuracy = accuracy_score(y_test, y_pred)
      class_report = classification_report(y_test, y_pred)
      
      print(f"Accuracy: {accuracy}")
      print(f"Classification Report:\\n{class_report}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Reads the dataset from a CSV file.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Define features and target variable:</strong> Selects relevant features and the target variable for the model.</li>
              <li><strong>Split the data:</strong> Splits the data into training and testing sets.</li>
              <li><strong>Build the model:</strong> Trains a RandomForestClassifier model on the training data.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the test data.</li>
              <li><strong>Evaluate the model:</strong> Calculates the accuracy and classification report to evaluate the model's performance.</li>
            </ul>
      
            <h3>Finance</h3>
            <p>In the finance industry, data science is used for fraud detection, risk management, and personalized financial services.</p>
            <pre><code class="language-python">
      import pandas as pd
      from sklearn.model_selection import train_test_split
      from sklearn.linear_model import LogisticRegression
      from sklearn.metrics import accuracy_score, classification_report
      
      # Example: Fraud detection
      # Load the dataset
      df = pd.read_csv('transaction_data.csv')
      
      # Data cleaning
      df = df.dropna()
      
      # Define features and target variable
      X = df.drop('fraud', axis=1)
      y = df['fraud']
      
      # Split the data into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      
      # Build the model
      model = LogisticRegression()
      model.fit(X_train, y_train)
      
      # Make predictions
      y_pred = model.predict(X_test)
      
      # Evaluate the model
      accuracy = accuracy_score(y_test, y_pred)
      class_report = classification_report(y_test, y_pred)
      
      print(f"Accuracy: {accuracy}")
      print(f"Classification Report:\\n{class_report}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Reads the dataset from a CSV file.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Define features and target variable:</strong> Selects relevant features and the target variable for the model.</li>
              <li><strong>Split the data:</strong> Splits the data into training and testing sets.</li>
              <li><strong>Build the model:</strong> Trains a LogisticRegression model on the training data.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the test data.</li>
              <li><strong>Evaluate the model:</strong> Calculates the accuracy and classification report to evaluate the model's performance.</li>
            </ul>
      
            <h3>Retail</h3>
            <p>In the retail industry, data science is used for customer segmentation, inventory management, and personalized marketing.</p>
            <pre><code class="language-python">
      import pandas as pd
      from sklearn.cluster import KMeans
      import matplotlib.pyplot as plt
      
      # Example: Customer segmentation
      # Load the dataset
      df = pd.read_csv('customer_data.csv')
      
      # Data cleaning
      df = df.dropna()
      
      # Define features for clustering
      X = df[['annual_income', 'spending_score']]
      
      # Apply K-Means clustering
      kmeans = KMeans(n_clusters=3)
      df['cluster'] = kmeans.fit_predict(X)
      
      # Visualize the clusters
      plt.scatter(df['annual_income'], df['spending_score'], c=df['cluster'], cmap='viridis')
      plt.xlabel('Annual Income')
      plt.ylabel('Spending Score')
      plt.title('Customer Segmentation')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Reads the dataset from a CSV file.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Define features for clustering:</strong> Selects relevant features for clustering analysis.</li>
              <li><strong>Apply K-Means clustering:</strong> Clusters the data into 3 segments using K-Means.</li>
              <li><strong>Visualize the clusters:</strong> Plots the clusters on a scatter plot using the selected features.</li>
            </ul>
      
            <h3>Manufacturing</h3>
            <p>In the manufacturing industry, data science is used for predictive maintenance, supply chain optimization, and quality control.</p>
            <pre><code class="language-python">
      import pandas as pd
      import numpy as np
      from scipy.optimize import linprog
      
      # Example: Supply chain optimization
      # Load the dataset
      df = pd.read_csv('supply_chain_data.csv')
      
      # Data cleaning
      df = df.dropna()
      
      # Define the cost coefficients
      c = df['cost'].values
      
      # Define the constraints
      A = df[['supply', 'demand']].values
      b = df['capacity'].values
      
      # Apply linear programming optimization
      result = linprog(c, A_ub=A, b_ub=b, bounds=(0, None))
      
      # Results
      print(f"Optimal cost: {result.fun}")
      print(f"Optimal solution: {result.x}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Reads the dataset from a CSV file.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Define the cost coefficients:</strong> Selects the cost column for optimization.</li>
              <li><strong>Define the constraints:</strong> Selects relevant constraints for the optimization problem.</li>
              <li><strong>Apply linear programming optimization:</strong> Uses linear programming to optimize the supply chain costs.</li>
              <li><strong>Results:</strong> Displays the optimal cost and solution for the supply chain problem.</li>
            </ul>
      
            <h3>Telecommunications</h3>
            <p>In the telecommunications industry, data science is used for network optimization, customer churn prediction, and targeted marketing.</p>
            <pre><code class="language-python">
      import pandas as pd
      from sklearn.model_selection import train_test_split
      from sklearn.ensemble import GradientBoostingClassifier
      from sklearn.metrics import accuracy_score, classification_report
      
      # Example: Customer churn prediction
      # Load the dataset
      df = pd.read_csv('telco_customer_data.csv')
      
      # Data cleaning
      df = df.dropna()
      
      # Define features and target variable
      X = df.drop('churn', axis=1)
      y = df['churn']
      
      # Split the data into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      
      # Build the model
      model = GradientBoostingClassifier()
      model.fit(X_train, y_train)
      
      # Make predictions
      y_pred = model.predict(X_test)
      
      # Evaluate the model
      accuracy = accuracy_score(y_test, y_pred)
      class_report = classification_report(y_test, y_pred)
      
      print(f"Accuracy: {accuracy}")
      print(f"Classification Report:\\n{class_report}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the dataset:</strong> Reads the dataset from a CSV file.</li>
              <li><strong>Data cleaning:</strong> Drops rows with missing values.</li>
              <li><strong>Define features and target variable:</strong> Selects relevant features and the target variable for the model.</li>
              <li><strong>Split the data:</strong> Splits the data into training and testing sets.</li>
              <li><strong>Build the model:</strong> Trains a GradientBoostingClassifier model on the training data.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the test data.</li>
              <li><strong>Evaluate the model:</strong> Calculates the accuracy and classification report to evaluate the model's performance.</li>
            </ul>
      
            <h3>Assignment 1: Applying Data Science in an Industry</h3>
            <p>Choose an industry and identify a problem that can be solved using data science techniques. Collect data, clean and preprocess it, build and evaluate a model, and present your findings.</p>
            <h4>Solution:</h4>
            <p>Choose an industry of interest and follow the steps outlined in the key industry applications. Document each step, from data collection and cleaning to model building and evaluation. Use data visualization and statistical analysis to support your findings.</p>
      
            <h3>Conclusion</h3>
            <p>Data science and big data technologies have a profound impact on various industries. By understanding and applying these technologies, businesses can gain valuable insights, improve decision-making processes, and drive innovation. Practice working on industry-specific problems to enhance your data science skills and knowledge.</p>
          </section>
        `
      },
      
      {
        id: 'world',
        title: 'Real-World Data Sets',
        content: `
          <section id="world">
            <h2>Real-World Data Sets</h2>
      
            <h3>Introduction</h3>
            <p>Real-world data sets are essential for practicing data science skills and understanding how to apply various techniques to solve real-life problems. This section explores a variety of publicly available data sets that can be used for analysis, modeling, and visualization.</p>
      
            <h3>Popular Data Sets</h3>
            <ul>
              <li><strong>Iris Flower Data Set:</strong> A classic data set for machine learning, containing measurements of iris flowers.</li>
              <li><strong>Titanic Data Set:</strong> Contains information about the passengers of the Titanic, used for survival prediction.</li>
              <li><strong>MNIST Handwritten Digits Data Set:</strong> A large data set of handwritten digits used for image classification.</li>
              <li><strong>Housing Prices Data Set:</strong> Contains information about house prices and features, used for regression analysis.</li>
              <li><strong>COVID-19 Data Set:</strong> Contains information about COVID-19 cases, deaths, and recoveries worldwide.</li>
              <li><strong>MovieLens Data Set:</strong> Contains ratings and metadata about movies, used for recommendation systems.</li>
              <li><strong>Financial Data Sets:</strong> Includes stock prices, financial statements, and other financial data for analysis.</li>
              <li><strong>Social Media Data Sets:</strong> Includes data from platforms like Twitter, Facebook, and Reddit for sentiment analysis and social network analysis.</li>
            </ul>
      
            <h3>Example Data Sets</h3>
      
            <h4>Iris Flower Data Set</h4>
            <p>The Iris Flower data set is a classic data set in machine learning, containing 150 samples of iris flowers with measurements of their sepals and petals. It is commonly used for classification tasks.</p>
            <pre><code class="language-python">
      import pandas as pd
      from sklearn.model_selection import train_test_split
      from sklearn.ensemble import RandomForestClassifier
      from sklearn.metrics import accuracy_score, classification_report
      
      # Load the data set
      url = "https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data"
      columns = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width', 'class']
      df = pd.read_csv(url, header=None, names=columns)
      
      # Define features and target variable
      X = df.drop('class', axis=1)
      y = df['class']
      
      # Split the data into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      
      # Build the model
      model = RandomForestClassifier()
      model.fit(X_train, y_train)
      
      # Make predictions
      y_pred = model.predict(X_test)
      
      # Evaluate the model
      accuracy = accuracy_score(y_test, y_pred)
      class_report = classification_report(y_test, y_pred)
      
      print(f"Accuracy: {accuracy}")
      print(f"Classification Report:\\n{class_report}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the data set:</strong> Reads the Iris Flower data set from a URL.</li>
              <li><strong>Define features and target variable:</strong> Selects relevant features and the target variable for the model.</li>
              <li><strong>Split the data:</strong> Splits the data into training and testing sets.</li>
              <li><strong>Build the model:</strong> Trains a RandomForestClassifier model on the training data.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the test data.</li>
              <li><strong>Evaluate the model:</strong> Calculates the accuracy and classification report to evaluate the model's performance.</li>
            </ul>
      
            <h4>Titanic Data Set</h4>
            <p>The Titanic data set contains information about the passengers of the Titanic, including their age, sex, class, and whether they survived the disaster. It is commonly used for binary classification tasks.</p>
            <pre><code class="language-python">
      import pandas as pd
      from sklearn.model_selection import train_test_split
      from sklearn.linear_model import LogisticRegression
      from sklearn.metrics import accuracy_score, classification_report
      
      # Load the data set
      url = "https://web.stanford.edu/class/archive/cs/cs109/cs109.1166/stuff/titanic.csv"
      df = pd.read_csv(url)
      
      # Data cleaning
      df = df.dropna(subset=['Age', 'Fare', 'Embarked'])
      df['Sex'] = df['Sex'].map({'male': 0, 'female': 1})
      df['Embarked'] = df['Embarked'].map({'C': 0, 'Q': 1, 'S': 2})
      
      # Define features and target variable
      X = df[['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked']]
      y = df['Survived']
      
      # Split the data into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      
      # Build the model
      model = LogisticRegression(max_iter=1000)
      model.fit(X_train, y_train)
      
      # Make predictions
      y_pred = model.predict(X_test)
      
      # Evaluate the model
      accuracy = accuracy_score(y_test, y_pred)
      class_report = classification_report(y_test, y_pred)
      
      print(f"Accuracy: {accuracy}")
      print(f"Classification Report:\\n{class_report}")
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the data set:</strong> Reads the Titanic data set from a URL.</li>
              <li><strong>Data cleaning:</strong> Cleans the data by dropping rows with missing values and encoding categorical variables.</li>
              <li><strong>Define features and target variable:</strong> Selects relevant features and the target variable for the model.</li>
              <li><strong>Split the data:</strong> Splits the data into training and testing sets.</li>
              <li><strong>Build the model:</strong> Trains a LogisticRegression model on the training data.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the test data.</li>
              <li><strong>Evaluate the model:</strong> Calculates the accuracy and classification report to evaluate the model's performance.</li>
            </ul>
      
            <h4>MNIST Handwritten Digits Data Set</h4>
            <p>The MNIST Handwritten Digits data set contains 70,000 images of handwritten digits, each labeled with the correct digit. It is commonly used for image classification tasks.</p>
            <pre><code class="language-python">
      import tensorflow as tf
      from tensorflow.keras import layers, models
      import matplotlib.pyplot as plt
      
      # Load the data set
      (X_train, y_train), (X_test, y_test) = tf.keras.datasets.mnist.load_data()
      
      # Normalize the data
      X_train, X_test = X_train / 255.0, X_test / 255.0
      
      # Build the model
      model = models.Sequential([
          layers.Flatten(input_shape=(28, 28)),
          layers.Dense(128, activation='relu'),
          layers.Dropout(0.2),
          layers.Dense(10, activation='softmax')
      ])
      
      model.compile(optimizer='adam',
                    loss='sparse_categorical_crossentropy',
                    metrics=['accuracy'])
      
      # Train the model
      model.fit(X_train, y_train, epochs=5)
      
      # Evaluate the model
      test_loss, test_acc = model.evaluate(X_test, y_test, verbose=2)
      
      print(f"Test accuracy: {test_acc}")
      
      # Make predictions
      predictions = model.predict(X_test)
      
      # Plot the first few test images and their predicted labels
      for i in range(5):
          plt.imshow(X_test[i], cmap=plt.cm.binary)
          plt.xlabel(f"Actual: {y_test[i]}, Predicted: {tf.argmax(predictions[i]).numpy()}")
          plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the data set:</strong> Loads the MNIST data set using TensorFlow.</li>
              <li><strong>Normalize the data:</strong> Normalizes the pixel values to a range of 0 to 1.</li>
              <li><strong>Build the model:</strong> Defines a neural network with input, hidden, and output layers.</li>
              <li><strong>Compile the model:</strong> Configures the model for training with an optimizer, loss function, and metrics.</li>
              <li><strong>Train the model:</strong> Trains the model on the training data for a specified number of epochs.</li>
              <li><strong>Evaluate the model:</strong> Evaluates the model's performance on the test data.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the test data.</li>
              <li><strong>Plot the results:</strong> Plots the first few test images and their predicted labels.</li>
            </ul>
      
            <h4>Housing Prices Data Set</h4>
            <p>The Housing Prices data set contains information about house prices and features in Boston, used for regression analysis to predict house prices.</p>
            <pre><code class="language-python">
      import pandas as pd
      from sklearn.model_selection import train_test_split
      from sklearn.linear_model import LinearRegression
      from sklearn.metrics import mean_squared_error
      
      # Load the data set
      url = "https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv"
      df = pd.read_csv(url)
      
      # Define features and target variable
      X = df.drop('medv', axis=1)
      y = df['medv']
      
      # Split the data into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      
      # Build the model
      model = LinearRegression()
      model.fit(X_train, y_train)
      
      # Make predictions
      y_pred = model.predict(X_test)
      
      # Evaluate the model
      mse = mean_squared_error(y_test, y_pred)
      
      print(f"Mean Squared Error: {mse}")
      
      # Plot predictions vs actual values
      import matplotlib.pyplot as plt
      plt.scatter(y_test, y_pred)
      plt.xlabel('Actual Prices')
      plt.ylabel('Predicted Prices')
      plt.title('Actual Prices vs Predicted Prices')
      plt.show()
            </code></pre>
            <p>Explanation:</p>
            <ul>
              <li><strong>Load the data set:</strong> Reads the Housing Prices data set from a URL.</li>
              <li><strong>Define features and target variable:</strong> Selects relevant features and the target variable for the model.</li>
              <li><strong>Split the data:</strong> Splits the data into training and testing sets.</li>
              <li><strong>Build the model:</strong> Trains a LinearRegression model on the training data.</li>
              <li><strong>Make predictions:</strong> Uses the trained model to make predictions on the test data.</li>
              <li><strong>Evaluate the model:</strong> Calculates the mean squared error to evaluate the model's performance.</li>
              <li><strong>Plot predictions vs actual values:</strong> Visualizes the model's predictions against the actual values.</li>
            </ul>
      
            <h3>Assignment 1: Analyzing a Real-World Data Set</h3>
            <p>Choose a publicly available data set, perform data cleaning, exploratory data analysis, model building, and evaluation. Document your process and present your findings.</p>
            <h4>Solution:</h4>
            <p>Select a data set from a platform like Kaggle, UCI Machine Learning Repository, or a government open data portal. Follow the steps outlined in the example data sets to analyze the data, build a model, and evaluate its performance. Use data visualization to support your findings.</p>
      
            <h3>Conclusion</h3>
            <p>Working with real-world data sets is crucial for developing practical data science skills. By analyzing these data sets, you can gain experience in data cleaning, exploratory data analysis, model building, and evaluation. Practice using various data sets to enhance your data science capabilities and build a strong portfolio.</p>
          </section>
        `
      },
      
];

const DatascienceCourse = () => {
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
        const contentParts = section.content.split(/(<pre><code class="language-python">[\s\S]*?<\/code><\/pre>)/g);
  
        return (
          <div key={section.id}>
            {contentParts.map((part, index) => {
              if (part.startsWith('<pre><code class="language-python">')) {
                const codeContent = part.match(/<code class="language-python">([\s\S]*?)<\/code>/)[1];
                return (
                  <SyntaxHighlighter key={index} language="python" style={darcula}>
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
              {subSection.content.split(/(<pre><code class="language-python">[\s\S]*?<\/code><\/pre>)/g).map((part, index) => {
                if (part.startsWith('<pre><code class="language-python">')) {
                  const codeContent = part.match(/<code class="language-python">([\s\S]*?)<\/code>/)[1];
                  return (
                    <SyntaxHighlighter key={index} language="python" style={darcula}>
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
        <div className="datascience-introduction">
          <h2 className="text-3xl font-bold mb-6">Introduction to Data Science</h2>
          <p className="mb-4">Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data. It combines expertise from various fields including statistics, mathematics, and computer science.</p>
          
          <h3 className="text-2xl font-semibold mb-4">Key Components of Data Science:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Statistical analysis and mathematics</li>
            <li>Machine learning and artificial intelligence</li>
            <li>Data visualization and interpretation</li>
            <li>Big data processing and analytics</li>
            <li>Programming (often in Python or R)</li>
            <li>Domain expertise and business acumen</li>
          </ul>
  
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="setup">Environment Setup</TabsTrigger>
              <TabsTrigger value="tools">Essential Tools</TabsTrigger>
              <TabsTrigger value="hello-world">First Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="setup">
              <h3 className="text-2xl font-semibold mb-4">Setting Up Your Data Science Environment</h3>
              <p className="mb-4">To start with Data Science, you'll need to set up a Python environment and install necessary libraries. Here are the steps:</p>
              
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>Install Python from the <a href="https://www.python.org/downloads/" className="text-blue-600 hover:underline">official Python website</a>.</li>
                <li>Install Anaconda, a popular data science platform that includes Python and many useful libraries.</li>
                <li>Verify the installation by opening a command prompt and typing: <code>python --version</code></li>
                <li>Install additional libraries using pip or conda (e.g., <code>pip install numpy pandas matplotlib scikit-learn</code>)</li>
              </ol>
            </TabsContent>
            
            <TabsContent value="tools">
              <h3 className="text-2xl font-semibold mb-4">Essential Tools for Data Science</h3>
              <p className="mb-4">Data Scientists use a variety of tools and libraries. Here are some essential ones:</p>
              
              <h4 className="text-xl font-semibold mt-4">Python Libraries:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                <li>NumPy: For numerical computing</li>
                <li>Pandas: For data manipulation and analysis</li>
                <li>Matplotlib and Seaborn: For data visualization</li>
                <li>Scikit-learn: For machine learning</li>
              </ul>
  
              <h4 className="text-xl font-semibold mt-4">Development Environments:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Jupyter Notebook: Interactive computing environment</li>
                <li>PyCharm or VS Code: Full-featured IDEs for Python</li>
                <li>Google Colab: Cloud-based Jupyter notebook environment</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="hello-world">
              <h3 className="text-2xl font-semibold mb-4">Your First Data Analysis: Hello, Data!</h3>
              <p className="mb-4">Let's perform a simple data analysis using Python and Pandas:</p>
              
              <Button 
                onClick={() => setShowCode(!showCode)}
                className="mb-4"
              >
                <Code className="mr-2 h-4 w-4" /> {showCode ? "Hide" : "Show"} Code
              </Button>
              
              {showCode && (
                <SyntaxHighlighter language="python" style={darcula}>
                  {`import pandas as pd
  import matplotlib.pyplot as plt
  
  # Create a simple dataset
  data = {'Year': [2010, 2011, 2012, 2013, 2014],
          'Sales': [100, 130, 120, 150, 160]}
  df = pd.DataFrame(data)
  
  # Display the data
  print(df)
  
  # Create a line plot
  plt.figure(figsize=(10,6))
  plt.plot(df['Year'], df['Sales'], marker='o')
  plt.title('Sales Trend')
  plt.xlabel('Year')
  plt.ylabel('Sales')
  plt.show()`}
                </SyntaxHighlighter>
              )}
              
              <h4 className="text-xl font-semibold mt-6">Understanding the Code:</h4>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><code>import pandas as pd</code>: Imports the Pandas library for data manipulation.</li>
                <li><code>import matplotlib.pyplot as plt</code>: Imports Matplotlib for plotting.</li>
                <li><code>pd.DataFrame(data)</code>: Creates a DataFrame from our data.</li>
                <li><code>plt.plot()</code>: Creates a line plot of our data.</li>
              </ul>
              
              <p className="mt-4">This simple analysis demonstrates several key aspects of Data Science:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Data is often structured in tables (DataFrames in Pandas).</li>
                <li>Visualization is crucial for understanding data trends.</li>
                <li>Python libraries make complex operations (like plotting) simple.</li>
                <li>Data Science combines coding, statistics, and domain knowledge.</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      );
    };
  
    return (
      <HelmetProvider>
      <div className="datascience-course">
        <Helmet>
          <title>Learn Data Science - Comprehensive Guide</title>
          <meta name="description" content="Learn Data Science with our comprehensive guide. From basics to advanced topics, become proficient in data analysis, machine learning, and more with practical projects and real-world applications." />
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "Course",
                "name": "Learn Data Science",
                "description": "Comprehensive guide to Data Science with practical projects.",
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
    </HelmetProvider>  
    );
  };
  
  export default DatascienceCourse;