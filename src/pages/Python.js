import React, {useEffect,useRef} from 'react';
import Slider from 'react-slick';
import Header from '../components/Header';
import { FaCode, FaLaptopCode, FaChartLine, FaHandsHelping, FaChalkboardTeacher } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Python.css';
import { Link } from 'react-router-dom';
import ReadOnlyCodeSnippet from '../components/ReadOnlyCodeSnippet';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Python = () => {
  
  
    const whyUlearnTechRef = useRef(null);
    const reasonItemsRef = useRef([]);
    const projectsRef = useRef(null);
  
    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
  
      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
  
      const reasonItemsElements = reasonItemsRef.current;
      const projectsElement = projectsRef.current;
      const whyUlearnTechElement = whyUlearnTechRef.current;
  
      reasonItemsElements.forEach(item => {
        if (item) observer.observe(item);
      });
  
      if (projectsElement) {
        observer.observe(projectsElement);
      }
  
      if (whyUlearnTechElement) {
        observer.observe(whyUlearnTechElement);
      }
  
      return () => {
        reasonItemsElements.forEach(item => {
          if (item) observer.unobserve(item);
        });
        if (projectsElement) {
          observer.unobserve(projectsElement);
        }
        if (whyUlearnTechElement) {
          observer.unobserve(whyUlearnTechElement);
        }
      };
  
    }, []); 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const machineLearningModel = `# Import necessary libraries
  import numpy as np
  import pandas as pd
  from sklearn.model_selection import train_test_split
  from sklearn.linear_model import LinearRegression
  from sklearn.metrics import mean_squared_error, r2_score
  
  # Load dataset (For this example, we use the California housing dataset from sklearn)
  from sklearn.datasets import fetch_california_housing
  data = fetch_california_housing()
  df = pd.DataFrame(data.data, columns=data.feature_names)
  df['MedHouseVal'] = data.target
  
  # Display the first few rows of the dataset
  print(df.head())
  
  # Define features and target variable
  X = df.drop('MedHouseVal', axis=1)
  y = df['MedHouseVal']
  
  # Split the data into training and testing sets
  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
  
  # Initialize the model
  model = LinearRegression()
  
  # Train the model
  model.fit(X_train, y_train)
  
  # Make predictions
  y_pred = model.predict(X_test)
  
  # Evaluate the model
  mse = mean_squared_error(y_test, y_pred)
  r2 = r2_score(y_test, y_pred)
  
  print(f"Mean Squared Error: {mse}")
  print(f"R^2 Score: {r2}")
  
  # Display coefficients
  coefficients = pd.DataFrame(model.coef_, X.columns, columns=['Coefficient'])
  print(coefficients)
  `;
  const automatedsuite = `
# calculator.py with basic functions to be tested
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero!")
    return a / b

# test_calculator.py contains automated tests for the fucntions defined in calculator.py
import unittest
from calculator import add, subtract, multiply, divide

class TestCalculator(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(-1, -1), -2)

    def test_subtract(self):
        self.assertEqual(subtract(10, 5), 5)
        self.assertEqual(subtract(-1, 1), -2)
        self.assertEqual(subtract(-1, -1), 0)

    def test_multiply(self):
        self.assertEqual(multiply(3, 7), 21)
        self.assertEqual(multiply(-1, 1), -1)
        self.assertEqual(multiply(-1, -1), 1)

    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)
        self.assertEqual(divide(-1, 1), -1)
        self.assertEqual(divide(-1, -1), 1)
        with self.assertRaises(ValueError):
            divide(10, 0)

if __name__ == '__main__':
    unittest.main()
   `;
  const dataanalysis =`import pandas as pd

   # Sample data
   data = {
       'Date': pd.date_range(start='1/1/2022', periods=10, freq='D'),
       'Sales': [150, 200, 250, 300, 350, 400, 450, 500, 550, 600]
   }
   df = pd.DataFrame(data)
   df.to_csv('sales_data.csv', index=False)
   
   import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import pandas as pd
import plotly.express as px

# Load data
df = pd.read_csv('sales_data.csv')

# Initialize the Dash app
app = dash.Dash(__name__)

# App layout
app.layout = html.Div(children=[
    html.H1(children='Sales Data Analysis Dashboard'),

    dcc.Dropdown(
        id='x-axis-dropdown',
        options=[
            {'label': 'Date', 'value': 'Date'},
            {'label': 'Sales', 'value': 'Sales'}
        ],
        value='Date'
    ),

    dcc.Graph(
        id='line-chart'
    )
])

# Callback to update the graph
@app.callback(
    Output('line-chart', 'figure'),
    Input('x-axis-dropdown', 'value')
)
def update_graph(x_axis_column_name):
    fig = px.line(df, x=x_axis_column_name, y='Sales', title='Sales Over Time')
    return fig

# Run the app
if __name__ == '__main__':
    app.run_server(debug=True)
`;
const webscrapping=`import requests
from bs4 import BeautifulSoup
import pandas as pd

def fetch_page(url):
    """
    Fetch the content of the page at the specified URL.
    """
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        raise Exception(f"Failed to fetch page. Status code: {response.status_code}")

def parse_html(html_content):
    """
    Parse the HTML content and extract the desired data.
    """
    soup = BeautifulSoup(html_content, 'html.parser')
    # Assuming we want to extract all the titles from a blog page
    titles = soup.find_all('h2', class_='post-title')
    data = []
    for title in titles:
        text = title.get_text(strip=True)
        link = title.find('a')['href']
        data.append({'Title': text, 'Link': link})
    return data

def save_to_csv(data, filename):
    """
    Save the extracted data to a CSV file.
    """
    df = pd.DataFrame(data)
    df.to_csv(filename, index=False)

def main():
    url = 'https://example-blog-website.com'  # Replace with the actual URL
    html_content = fetch_page(url)
    data = parse_html(html_content)
    save_to_csv(data, 'extracted_data.csv')
    print("Data has been saved to extracted_data.csv")

if __name__ == '__main__':
    main()
`;
  return (
    <HelmetProvider>
    <div className="python-page">
      <Helmet>
      <title>Master Python Programming - From Basics to Advanced Applications | U-Learn Tech</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Learn Python from fundamentals to advanced concepts. Develop versatile skills for data science, web development, AI, and more with our comprehensive Python course at U-Learn Tech." />
      <meta name="keywords" content="Python, Programming, Data Science, Web Development, Machine Learning, AI, Django, Flask, NumPy, Pandas, U-Learn Tech" />
      <meta name="author" content="U-Learn Tech" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ulearntech.com/courses/python-programming" />
      <meta property="og:title" content="Master Python Programming - From Basics to Advanced Applications | U-Learn Tech" />
      <meta property="og:description" content="Learn Python from fundamentals to advanced concepts. Develop versatile skills for data science, web development, AI, and more with our comprehensive Python course at U-Learn Tech." />
      <meta property="og:image" content="https://www.ulearntech.com/images/python-course-og.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.ulearntech.com/courses/python-programming" />
      <meta name="twitter:title" content="Master Python Programming - From Basics to Advanced Applications | U-Learn Tech" />
      <meta name="twitter:description" content="Learn Python from fundamentals to advanced concepts. Develop versatile skills for data science, web development, AI, and more with our comprehensive Python course at U-Learn Tech." />
      <meta name="twitter:image" content="https://www.ulearntech.com/images/python-course-twitter.jpg" />

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
      <div className="hero-section">
        <h1>Master Python Programming</h1>
        <p>Become a Python developer by completing a variety of projects!</p>
        <Link to="/PythonReadingMaterials" className="cta-button">Get Started</Link>
      </div>

                <section className="why-python">
                <h2>Why Learn Python</h2>
                <div className="reasons-grid">
                    {[
                        { icon: <FaCode />, title: "Easy to Learn", description: "Python has a simple and easy-to-read syntax, making it a great choice for beginners."  },
                        { icon: <FaLaptopCode />, title: "Versatile Applications", description: "Python is used in web development, data analysis, artificial intelligence, scientific computing, and more." },
                        { icon: <FaChartLine />, title: "High Demand", description: "Python developers are in high demand, with excellent career opportunities across various industries."  }
                    ].map((reason, index) => (
                        <div 
                            key={index}
                            className="reason-item"
                            ref={el => reasonItemsRef.current[index] = el}
                        >
                            {reason.icon}
                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </section>

      <section className="course-content">
        <h2>Course Content</h2>
        <div className="content-modules">
          <div className="module">
            <h3>Module 1: Python Basics</h3>
            <ul>
              <li>Introduction to Python</li>
              <li>Variables and Data Types</li>
              <li>Control Structures (if statements, loops)</li>
              <li>Functions and Modules</li>
            </ul>
          </div>
          <div className="module">
            <h3>Module 2: Data Structures</h3>
            <ul>
              <li>Lists, Tuples, and Sets</li>
              <li>Dictionaries</li>
              <li>List Comprehensions</li>
              <li>Working with Files</li>
            </ul>
          </div>
          <div className="module">
            <h3>Module 3: Object-Oriented Programming</h3>
            <ul>
              <li>Classes and Objects</li>
              <li>Inheritance and Polymorphism</li>
              <li>Encapsulation and Abstraction</li>
              <li>Magic Methods</li>
            </ul>
          </div>
          <div className="module">
            <h3>Module 4: Advanced Topics</h3>
            <ul>
              <li>Decorators and Generators</li>
              <li>Error Handling</li>
              <li>Regular Expressions</li>
              <li>Working with APIs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Hands-on Projects</h2>
        <Slider {...sliderSettings}>
          <div>
            <h3>Web Scraping Tool</h3>
            <p>Build a web scraper to extract data from websites.</p>
            <ReadOnlyCodeSnippet code={webscrapping} />
          </div>
          <div>
            <h3>Data Analysis Dashboard</h3>
            <p>Create a dashboard to visualize and analyze data using Python libraries.</p>
            <ReadOnlyCodeSnippet code={dataanalysis} />
          </div>
          <div>
            <h3>Automated Testing Suite</h3>
            <p>Develop an automated testing system for a web application.</p>
            <ReadOnlyCodeSnippet code={automatedsuite} />
          </div>
          <div>
            <h3>Machine Learning Model</h3>
            <p>Implement a machine learning model to solve a real-world problem.</p>
            <ReadOnlyCodeSnippet code={machineLearningModel} />
          </div>
        </Slider>
      </section>

      <section className="testimonials">
  <h2>What Our Students Say</h2>
  <Slider {...sliderSettings}>
    <div>
      <p>"This course transformed my career. I'm now a full-time Python developer!"</p>
      <h4>- Sarah J.</h4>
    </div>
    <div>
      <p>"The projects in this course gave me practical experience that impressed my employers."</p>
      <h4>- Michael T.</h4>
    </div>
    <div>
      <p>"I started as a complete beginner, and now I'm confident in my Python skills."</p>
      <h4>- Emily R.</h4>
    </div>
    <div>
      <p>"The instructors were very knowledgeable and always available to help."</p>
      <h4>- John D.</h4>
    </div>
    <div>
      <p>"I loved the hands-on approach of this course. The projects were challenging but rewarding."</p>
      <h4>- Alice W.</h4>
    </div>
    <div>
      <p>"The course content is very well structured and easy to follow."</p>
      <h4>- David K.</h4>
    </div>
    <div>
      <p>"I feel much more confident in my coding skills after completing this course."</p>
      <h4>- Maria S.</h4>
    </div>
    <div>
      <p>"The community support and networking opportunities were fantastic."</p>
      <h4>- James L.</h4>
    </div>
    <div>
      <p>"This course helped me land my first job as a developer. Highly recommend it!"</p>
      <h4>- Linda P.</h4>
    </div>
  </Slider>
</section>

     
<section className="why-ulearntech">
  <h2>Why Study at U-Learn Tech?</h2>
  <div className="reasons-container">
    
    <div className="reason-card">
      <FaChalkboardTeacher className="reason-icon" />
      <h3>Comprehensive Curriculum</h3>
      <p>Our courses cover the latest technologies and best practices, ensuring you stay ahead of the curve.</p>
    </div>
    <div className="reason-card">
      <FaHandsHelping className="reason-icon" />
      <h3>Hands-On Learning</h3>
      <p>Engage in practical projects that give you the skills and confidence to succeed in your career.</p>
    </div>
    
    <div className="reason-card">
      <FaLaptopCode className="reason-icon" />
      <h3>Flexible Learning</h3>
      <p>Study at your own pace with flexible schedules that fit your lifestyle.</p>
    </div>
  </div>
</section>


      <section className="enroll-section">
        <h2>Ready to Start Your Python Journey?</h2>
        <p>Enroll now and take the first step towards becoming a Python expert!</p>
        <Link to="/PythonReadingMaterials" className="cta-button">Get Started</Link>
      </section>

    </div>
  </HelmetProvider>
  );
};

export default Python;
