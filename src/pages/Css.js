import React, { useState } from 'react';
import Header from '../components/Header';
import './Css.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `
      <section id="introduction">
        <h2>Introduction to HTML & CSS</h2>
        <p>Welcome to the comprehensive guide on HTML and CSS. This guide will take you from a beginner level to advanced proficiency in web development.</p>
        <h3>What You Need to Start Learning HTML & CSS</h3>
        <p>To start learning HTML and CSS, you'll need a few basic tools:</p>
        <ul>
          <li><strong>Text Editor:</strong> A text editor is a program where you write your code. Popular choices include Visual Studio Code, Sublime Text, and Atom.</li>
          <li><strong>Web Browser:</strong> A web browser is used to view your HTML pages. Popular choices include Google Chrome, Mozilla Firefox, and Microsoft Edge.</li>
        </ul>
        <h3>Basic Syntax</h3>
        <p>HTML documents are structured with tags, which are surrounded by angle brackets (<code>&lt;&gt;</code>). For example:</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;This is a Heading&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
    &lt;div&gt;This is a division.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Choosing and Installing a Text Editor</h3>
        <p>Follow these steps to download and install a text editor:</p>
        <ul>
          <li><strong>Visual Studio Code:</strong> Go to the <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code website</a>, download the installer, and follow the installation instructions.</li>
          <li><strong>Sublime Text:</strong> Go to the <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">Sublime Text website</a>, download the installer, and follow the installation instructions.</li>
          <li><strong>Atom:</strong> Go to the <a href="https://atom.io/" target="_blank" rel="noopener noreferrer">Atom website</a>, download the installer, and follow the installation instructions.</li>
        </ul>
        <h3>Running Your Code</h3>
        <p>To run your HTML code, save your file with a <code>.html</code> extension, open it in your web browser by double-clicking the file or dragging it into the browser window.</p>
      </section>`
  },
  {
    id: 'elements-structures',
    title: 'HTML Elements and Structures',
    content: `
      <section id="elements-structures">
        <h2>HTML Elements and Structures</h2>
        <p>HTML elements are the building blocks of HTML pages. They are represented by tags such as &lt;div&gt;, &lt;h1&gt;, &lt;p&gt;, and so on.</p>
        <h3>Syntax and Example</h3>
        <p>HTML elements are defined by a start tag, some content, and an end tag:</p>
        <pre><code>&lt;element&gt;Content&lt;/element&gt;</code></pre>
        <p>Example:</p>
        <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>
        <p>Explanation: The &lt;p&gt; tag defines a paragraph.</p>
        <h3>Real-Life Example</h3>
        <p>Consider a webpage as a document. You might use different elements like headings for titles, paragraphs for text, and divs for sections. For example:</p>
        <pre><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Webpage&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Webpage&lt;/h1&gt;
    &lt;p&gt;This is an introductory paragraph.&lt;/p&gt;
    &lt;div&gt;This is a section of content.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment: Create a Simple Webpage</h3>
        <p>Create a simple webpage that includes a heading, a paragraph, and a division. Use the basic structure provided above.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Simple Webpage&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Webpage&lt;/h1&gt;
    &lt;p&gt;This is a simple paragraph explaining what my webpage is about.&lt;/p&gt;
    &lt;div&gt;This is a division.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'attributes-headings',
    title: 'Attributes and Headings',
    content: `
      <section id="attributes-headings">
        <h2>Attributes and Headings</h2>
        <p>HTML attributes provide additional information about elements. Attributes are always included in the opening tag, and they usually come in name/value pairs like <code>name="value"</code>.</p>
        <h3>Syntax and Example</h3>
        <p>For example, the <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to:</p>
        <pre><code>&lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;</code></pre>
        <p>Explanation: The <code>href</code> attribute in the &lt;a&gt; tag specifies the destination URL of the link.</p>
        <p>Headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags:</p>
        <pre><code>&lt;h1&gt;This is a Heading 1&lt;/h1&gt;
&lt;h2&gt;This is a Heading 2&lt;/h2&gt;
&lt;h3&gt;This is a Heading 3&lt;/h3&gt;
&lt;h4&gt;This is a Heading 4&lt;/h4&gt;
&lt;h5&gt;This is a Heading 5&lt;/h5&gt;
&lt;h6&gt;This is a Heading 6&lt;/h6&gt;
        </code></pre>
        <p>Explanation: The &lt;h1&gt; to &lt;h6&gt; tags define headings, with &lt;h1&gt; being the highest level and &lt;h6&gt; the lowest.</p>
        <h3>Real-Life Example</h3>
        <p>Use &lt;h1&gt; for the main title of a webpage, and &lt;h2&gt; to &lt;h6&gt; for subheadings and section titles:</p>
        <pre><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Blog&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Blog&lt;/h1&gt;
    &lt;h2&gt;Latest Post&lt;/h2&gt;
    &lt;p&gt;This is the latest post on my blog.&lt;/p&gt;
    &lt;h3&gt;Introduction&lt;/h3&gt;
    &lt;p&gt;This section introduces the topic of the post.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment: Use Attributes and Headings</h3>
        <p>Create a webpage with a main heading, subheadings, and a link. Use attributes to add additional information to the elements.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Blog&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Blog&lt;/h1&gt;
    &lt;h2&gt;Latest Post&lt;/h2&gt;
    &lt;p&gt;This is the latest post on my blog.&lt;/p&gt;
    &lt;a href="https://www.example.com" target="_blank"&gt;Read more&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'links-images',
    title: 'Links and Images',
    content: `
      <section id="links-images">
        <h2>Links and Images</h2>
        <p>Links are created using the <code>&lt;a&gt;</code> tag. The most important attribute of the <code>&lt;a&gt;</code> element is the <code>href</code> attribute, which indicates the link's destination.</p>
        <h3>Syntax and Example</h3>
        <p>For example:</p>
        <pre><code>&lt;a href="https://www.google.com"&gt;Go to Google&lt;/a&gt;</code></pre>
        <p>Explanation: The &lt;a&gt; tag creates a hyperlink that navigates to Google when clicked.</p>
        <p>Images are embedded using the <code>&lt;img&gt;</code> tag. The <code>src</code> attribute specifies the path to the image to be displayed:</p>
        <pre><code>&lt;img src="image.jpg" alt="Description of Image"&gt;</code></pre>
        <p>Explanation: The &lt;img&gt; tag embeds an image in the document, with the <code>src</code> attribute specifying the image file and the <code>alt</code> attribute providing alternative text.</p>
        <h3>Real-Life Example</h3>
        <p>Use links to navigate between pages on your website, and use images to visually enhance the content of your pages:</p>
        <pre><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Gallery&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Gallery&lt;/h1&gt;
    &lt;a href="https://www.example.com" target="_blank"&gt;Visit Example.com&lt;/a&gt;
    &lt;br&gt;
    &lt;img src="image.jpg" alt="Beautiful Scenery"&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment: Add Links and Images</h3>
        <p>Create a webpage that includes a heading, a link, and an image. Ensure the link opens in a new tab and the image has descriptive alternative text.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Gallery&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Gallery&lt;/h1&gt;
    &lt;a href="https://www.example.com" target="_blank"&gt;Visit Example.com&lt;/a&gt;
    &lt;br&gt;
    &lt;img src="image.jpg" alt="Beautiful Scenery"&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'lists-tables',
    title: 'Lists and Tables',
    content: `
      <section id="lists-tables">
        <h2>Lists and Tables</h2>
        <p>HTML supports ordered lists (<code>&lt;ol&gt;</code>) and unordered lists (<code>&lt;ul&gt;</code>). List items are defined with the <code>&lt;li&gt;</code> tag:</p>
        <h3>Syntax and Example</h3>
        <p>Example of an unordered list:</p>
        <pre><code>&lt;ul&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
    &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;
        </code></pre>
        <p>Example of an ordered list:</p>
        <pre><code>&lt;ol&gt;
    &lt;li&gt;First item&lt;/li&gt;
    &lt;li&gt;Second item&lt;/li&gt;
    &lt;li&gt;Third item&lt;/li&gt;
&lt;/ol&gt;
        </code></pre>
        <p>Explanation: Unordered lists use bullet points, while ordered lists use numbers.</p>
        <p>Tables are defined with the <code>&lt;table&gt;</code> tag. A table is divided into rows (<code>&lt;tr&gt;</code>), and each row is divided into data cells (<code>&lt;td&gt;</code>):</p>
        <pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Cell 1&lt;/td&gt;
        &lt;td&gt;Cell 2&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Cell 3&lt;/td&gt;
        &lt;td&gt;Cell 4&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
        </code></pre>
        <p>Explanation: The &lt;table&gt; tag defines the table structure, with rows and cells.</p>
        <h3>Real-Life Example</h3>
        <p>Use lists to group related items, such as a navigation menu, and use tables to display data in a structured format:</p>
        <pre><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
    &lt;h2&gt;Navigation Menu&lt;/h2&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;h2&gt;Data Table&lt;/h2&gt;
    &lt;table&gt;
        &lt;tr&gt;
            &lt;th&gt;Name&lt;/th&gt;
            &lt;th&gt;Age&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;John&lt;/td&gt;
            &lt;td&gt;30&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Jane&lt;/td&gt;
            &lt;td&gt;25&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment: Create Lists and Tables</h3>
        <p>Create a webpage with a navigation menu using an unordered list and a data table displaying information about a few items.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
    &lt;h2&gt;Navigation Menu&lt;/h2&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;h2&gt;Data Table&lt;/h2&gt;
    &lt;table&gt;
        &lt;tr&gt;
            &lt;th&gt;Name&lt;/th&gt;
            &lt;th&gt;Age&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;John&lt;/td&gt;
            &lt;td&gt;30&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Jane&lt;/td&gt;
            &lt;td&gt;25&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'css-basics',
    title: 'CSS Basics',
    content: `
      <section id="css-basics">
        <h2>CSS Basics</h2>
        <p>CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.</p>
        <h3>Syntax and Example</h3>
        <p>CSS rules are made up of selectors and declaration blocks. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.</p>
        <pre><code>selector {
    property: value;
}
        </code></pre>
        <p>Example:</p>
        <pre><code>p {
    color: blue;
    font-size: 20px;
}
        </code></pre>
        <p>Explanation: This CSS rule sets the text color of all &lt;p&gt; elements to blue and the font size to 20 pixels.</p>
        <h3>Real-Life Example</h3>
        <p>Use CSS to style the text on your webpage, change colors, adjust layouts, and more:</p>
        <pre><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Styled Webpage&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
        }
        h1 {
            color: darkblue;
        }
        p {
            color: grey;
            font-size: 18px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Styled Webpage&lt;/h1&gt;
    &lt;p&gt;This paragraph is styled with CSS.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment: Apply Basic CSS Styles</h3>
        <p>Create a webpage and apply CSS styles to change the font family, text color, and font size of different elements.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Styled Webpage&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
        }
        h1 {
            color: darkblue;
        }
        p {
            color: grey;
            font-size: 18px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Styled Webpage&lt;/h1&gt;
    &lt;p&gt;This paragraph is styled with CSS.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'selectors-properties',
    title: 'Selectors and Properties',
    content: `
      <section id="selectors-properties">
        <h2>Selectors and Properties</h2>
        <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
        <h3>Syntax and Example</h3>
        <p>Types of selectors:</p>
        <ul>
          <li><strong>Element Selector:</strong> Selects HTML elements based on the element name.</li>
          <li><strong>Class Selector:</strong> Selects HTML elements with a specific class attribute.</li>
          <li><strong>ID Selector:</strong> Selects an element based on the id attribute.</li>
        </ul>
        <pre><code>/* Element Selector */
p {
    color: blue;
}

/* Class Selector */
.example {
    color: red;
}

/* ID Selector */
#unique {
    color: green;
}
        </code></pre>
        <p>Explanation: The element selector targets all &lt;p&gt; elements, the class selector targets elements with the class "example", and the ID selector targets the element with the ID "unique".</p>
        <h3>Real-Life Example</h3>
        <p>Use different selectors to style various parts of your webpage:</p>
        <pre><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Selectors Example&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
        }
        .important {
            color: red;
            font-weight: bold;
        }
        #main-title {
            color: darkgreen;
            font-size: 24px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1 id="main-title"&gt;Main Title&lt;/h1&gt;
    &lt;p class="important"&gt;This is an important paragraph.&lt;/p&gt;
    &lt;p&gt;This is a normal paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment: Use Different Selectors</h3>
        <p>Create a webpage and use element, class, and ID selectors to style different elements with various properties.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Selectors Example&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
        }
        .important {
            color: red;
            font-weight: bold;
        }
        #main-title {
            color: darkgreen;
            font-size: 24px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1 id="main-title"&gt;Main Title&lt;/h1&gt;
    &lt;p class="important"&gt;This is an important paragraph.&lt;/p&gt;
    &lt;p&gt;This is a normal paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'box-model',
    title: 'Box Model',
    content: `
      <section id="box-model">
        <h2>Box Model</h2>
        <p>All HTML elements can be considered as boxes. The CSS box model is essentially a box that wraps around HTML elements, and it consists of: margins, borders, padding, and the actual content.</p>
        <h3>Syntax and Example</h3>
        <p>The CSS box model is composed of:</p>
        <ul>
          <li><strong>Content:</strong> The actual content of the box, where text and images appear.</li>
          <li><strong>Padding:</strong> Clears an area around the content. The padding is transparent.</li>
          <li><strong>Border:</strong> A border that goes around the padding and content.</li>
          <li><strong>Margin:</strong> Clears an area outside the border. The margin is transparent.</li>
        </ul>
        <pre><code>div {
    margin: 20px;
    border: 5px solid black;
    padding: 10px;
    width: 200px;
}
        </code></pre>
        <p>Explanation: This CSS rule applies margin, border, and padding to a &lt;div&gt; element.</p>
        <h3>Real-Life Example</h3>
        <p>Use the box model to control the layout and spacing of elements on your webpage:</p>
        <pre><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Box Model Example&lt;/title&gt;
    &lt;style&gt;
        .box {
            margin: 20px;
            border: 5px solid black;
            padding: 10px;
            width: 200px;
            background-color: lightgrey;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="box"&gt;This is a box with margin, border, and padding.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment: Apply Box Model Properties</h3>
        <p>Create a webpage and use the box model properties to style a &lt;div&gt; element with margin, border, padding, and content.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Box Model Example&lt;/title&gt;
    &lt;style&gt;
        .box {
            margin: 20px;
            border: 5px solid black;
            padding: 10px;
            width: 200px;
            background-color: lightgrey;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="box"&gt;This is a box with margin, border, and padding.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'flexbox-grid',
    title: 'Flexbox and Grid',
    content: `
      <section id="flexbox-grid">
        <h2>Flexbox and Grid</h2>
        <p>Flexbox and Grid are powerful layout modules in CSS.</p>
        <h3>Syntax and Example</h3>
        <p>Flexbox example:</p>
        <pre><code>.container {
    display: flex;
}
.item {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
}
        </code></pre>
        <p>Explanation: The <code>display: flex;</code> property makes the container a flex container, and the <code>flex: 1;</code> property distributes space evenly among flex items.</p>
        <p>Grid example:</p>
        <pre><code>.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
}
.grid-item {
    padding: 20px;
    border: 1px solid #ccc;
}
        </code></pre>
        <p>Explanation: The <code>display: grid;</code> property makes the container a grid container, and <code>grid-template-columns</code> defines the columns layout.</p>
        <h3>Real-Life Example</h3>
        <p>Use Flexbox and Grid to create responsive layouts:</p>
        <pre><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Flexbox and Grid Example&lt;/title&gt;
    &lt;style&gt;
        .flex-container {
            display: flex;
        }
        .flex-item {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
        }
        .grid-container {
            display: grid;
            grid-template-columns: auto auto auto;
            gap: 10px;
            margin-top: 20px;
        }
        .grid-item {
            padding: 20px;
            border: 1px solid #ccc;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="flex-container"&gt;
        &lt;div class="flex-item"&gt;Flex Item 1&lt;/div&gt;
        &lt;div class="flex-item"&gt;Flex Item 2&lt;/div&gt;
        &lt;div class="flex-item"&gt;Flex Item 3&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="grid-container"&gt;
        &lt;div class="grid-item"&gt;Grid Item 1&lt;/div&gt;
        &lt;div class="grid-item"&gt;Grid Item 2&lt;/div&gt;
        &lt;div class="grid-item"&gt;Grid Item 3&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment: Use Flexbox and Grid</h3>
        <p>Create a webpage and use Flexbox and Grid to create responsive layouts with multiple items.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Flexbox and Grid Example&lt;/title&gt;
    &lt;style&gt;
        .flex-container {
            display: flex;
        }
        .flex-item {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
        }
        .grid-container {
            display: grid;
            grid-template-columns: auto auto auto;
            gap: 10px;
            margin-top: 20px;
        }
        .grid-item {
            padding: 20px;
            border: 1px solid #ccc;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="flex-container"&gt;
        &lt;div class="flex-item"&gt;Flex Item 1&lt;/div&gt;
        &lt;div class="flex-item"&gt;Flex Item 2&lt;/div&gt;
        &lt;div class="flex-item"&gt;Flex Item 3&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="grid-container"&gt;
        &lt;div class="grid-item"&gt;Grid Item 1&lt;/div&gt;
        &lt;div class="grid-item"&gt;Grid Item 2&lt;/div&gt;
        &lt;div class="grid-item"&gt;Grid Item 3&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    content: `
      <section id="responsive-design">
        <h2>Responsive Design</h2>
        <p>Responsive web design makes web pages render well on a variety of devices and window or screen sizes.</p>
        <h3>Syntax and Example</h3>
        <p>Media queries allow you to apply CSS styles based on device characteristics:</p>
        <pre><code>@media screen and (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}
        </code></pre>
        <p>Explanation: This media query applies styles to screens with a width of 600px or less, changing the flex direction to column.</p>
        <h3>Real-Life Example</h3>
        <p>Use media queries to create a responsive layout that adjusts to different screen sizes:</p>
        <pre><code>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Responsive Design Example&lt;/title&gt;
    &lt;style&gt;
        .container {
            display: flex;
            flex-wrap: wrap;
        }
        .item {
            flex: 1 1 200px;
            padding: 10px;
            border: 1px solid #ccc;
            margin: 10px;
        }
        @media screen and (max-width: 600px) {
            .container {
                flex-direction: column;
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;div class="item"&gt;Item 1&lt;/div&gt;
        &lt;div class="item"&gt;Item 2&lt;/div&gt;
        &lt;div class="item"&gt;Item 3&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <h3>Assignment: Create a Responsive Layout</h3>
        <p>Create a webpage that uses media queries to create a responsive layout that adjusts to different screen sizes.</p>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Responsive Design Example&lt;/title&gt;
    &lt;style&gt;
        .container {
            display: flex;
            flex-wrap: wrap;
        }
        .item {
            flex: 1 1 200px;
            padding: 10px;
            border: 1px solid #ccc;
            margin: 10px;
        }
        @media screen and (max-width: 600px) {
            .container {
                flex-direction: column;
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;div class="item"&gt;Item 1&lt;/div&gt;
        &lt;div class="item"&gt;Item 2&lt;/div&gt;
        &lt;div class="item"&gt;Item 3&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
      </section>`
  },
  {id:'projects', title:'Projects', content:`<h2>Projects</h2>
  <p>In this section, you will find a variety of projects that you can work on to apply and solidify your HTML and CSS skills. These projects range from beginner to advanced levels, and they will help you build a portfolio of your work.</p>
  
  <h3>How to Prepare for Your Projects</h3>
  <p>Before you start working on any project, it's important to prepare properly. Here are some steps to help you get started:</p>
  <ul>
    <li><strong>Understand the Requirements:</strong> Clearly define what you want to achieve with your project. Write down the features and functionalities you want to include.</li>
    <li><strong>Gather Resources:</strong> Collect all the materials and resources you will need, such as images, content, and references.</li>
    <li><strong>Set Up Your Workspace:</strong> Ensure your development environment is ready. Install necessary text editors and tools.</li>
  </ul>
  
  <h3>Planning Your Projects</h3>
  <p>Planning is crucial for the success of any project. Follow these steps to plan your project effectively:</p>
  <ul>
    <li><strong>Create a Project Plan:</strong> Outline the steps you will take to complete the project. Break down the project into smaller tasks and set deadlines for each task.</li>
    <li><strong>Sketch Your Ideas:</strong> Draw rough sketches of your project layout. This will help you visualize the final product and make necessary adjustments before you start coding.</li>
    <li><strong>Wireframe Your Project:</strong> Create a wireframe to map out the structure of your project. Use tools like Figma, Adobe XD, or even paper and pencil.</li>
  </ul>
  
  <h3>List of Projects</h3>
  <p>Here are some projects you can work on to practice your HTML and CSS skills:</p>
  <ol>
    <li><strong>Personal Portfolio Website:</strong> Showcase your projects and skills. Include sections like About Me, Projects, Skills, and Contact.</li>
    <li><strong>Responsive Blog:</strong> Build a responsive blog that looks good on all devices. Include features like blog post lists, individual post pages, and a comment section.</li>
    <li><strong>E-commerce Product Page:</strong> Design a product page for an e-commerce website. Include product images, descriptions, prices, and an Add to Cart button.</li>
    <li><strong>Landing Page:</strong> Create a landing page for a product or service. Include a headline, a call-to-action button, and a section for features and benefits.</li>
    <li><strong>Photo Gallery:</strong> Build a photo gallery with thumbnails that open full-size images in a lightbox when clicked.</li>
    <li><strong>Contact Form:</strong> Create a contact form with fields for name, email, subject, and message. Include validation and a submission button.</li>
    <li><strong>Weather App:</strong> Build a weather application that fetches and displays weather information based on the user's location or a searched city.</li>
  </ol>`,
  subSections: [
    { id: 'personal-portfolio', title: 'Personal Portfolio Website', content:`<section id="personal-portfolio"><p>Create a personal portfolio website to showcase your projects and skills. Include sections like About Me, Projects, Skills, and Contact.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My Portfolio&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
      &lt;h1&gt;My Portfolio&lt;/h1&gt;
      &lt;nav&gt;
          &lt;ul&gt;
              &lt;li&gt;&lt;a href="#about"&gt;About Me&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a href="#projects"&gt;Projects&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a href="#skills"&gt;Skills&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
      &lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;
      &lt;section id="about"&gt;
          &lt;h2&gt;About Me&lt;/h2&gt;
          &lt;p&gt;This is the about me section. Include a brief introduction about yourself.&lt;/p&gt;
      &lt;/section&gt;
      &lt;section id="projects"&gt;
          &lt;h2&gt;Projects&lt;/h2&gt;
          &lt;div class="project"&gt;
              &lt;h3&gt;Project 1&lt;/h3&gt;
              &lt;p&gt;Description of the project.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div class="project"&gt;
              &lt;h3&gt;Project 2&lt;/h3&gt;
              &lt;p&gt;Description of the project.&lt;/p&gt;
          &lt;/div&gt;
      &lt;/section&gt;
      &lt;section id="skills"&gt;
          &lt;h2&gt;Skills&lt;/h2&gt;
          &lt;ul&gt;
              &lt;li&gt;HTML&lt;/li&gt;
              &lt;li&gt;CSS&lt;/li&gt;
              &lt;li&gt;JavaScript&lt;/li&gt;
              &lt;li&gt;React&lt;/li&gt;
          &lt;/ul&gt;
      &lt;/section&gt;
      &lt;section id="contact"&gt;
          &lt;h2&gt;Contact&lt;/h2&gt;
          &lt;form&gt;
              &lt;label for="name"&gt;Name&lt;/label&gt;
              &lt;input type="text" id="name" name="name" required&gt;
              &lt;label for="email"&gt;Email&lt;/label&gt;
              &lt;input type="email" id="email" name="email" required&gt;
              &lt;label for="message"&gt;Message&lt;/label&gt;
              &lt;textarea id="message" name="message" required&gt;&lt;/textarea&gt;
              &lt;button type="submit"&gt;Submit&lt;/button&gt;
          &lt;/form&gt;
      &lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;
      &lt;p&gt;© 2024 My Portfolio. All Rights Reserved.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre></section>`},
    { id: 'responsive-blog', title: 'Responsive Blog', content:`<section id="responsive-blog"><p>Build a blog that is responsive and looks good on all devices. Include features like a blog post list, individual post pages, and a comment section.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My Blog&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
      &lt;h1&gt;My Blog&lt;/h1&gt;
      &lt;nav&gt;
          &lt;ul&gt;
              &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
      &lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;
      &lt;section id="blog-posts"&gt;
          &lt;h2&gt;Blog Posts&lt;/h2&gt;
          &lt;article&gt;
              &lt;h3&gt;Post Title&lt;/h3&gt;
              &lt;p&gt;This is a blog post. Write a short summary of the post here.&lt;/p&gt;
              &lt;a href="#read-more"&gt;Read More&lt;/a&gt;
          &lt;/article&gt;
          &lt;article&gt;
              &lt;h3&gt;Post Title&lt;/h3&gt;
              &lt;p&gt;This is a blog post. Write a short summary of the post here.&lt;/p&gt;
              &lt;a href="#read-more"&gt;Read More&lt;/a&gt;
          &lt;/article&gt;
      &lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;
      &lt;p&gt;© 2024 My Blog. All Rights Reserved.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    </section>`},
    { id: 'ecommerce', title: 'E-commerce Product Page', content:`<section id="ecommerce"><p>Design a product page for an e-commerce website. Include product images, descriptions, prices, and an Add to Cart button.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Product Page&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
      &lt;h1&gt;Product Name&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
      &lt;section id="product"&gt;
          &lt;img src="product.jpg" alt="Product Image"&gt;
          &lt;h2&gt;Product Name&lt;/h2&gt;
          &lt;p&gt;This is the product description. Include details about the product here.&lt;/p&gt;
          &lt;span&gt;Price: $99.99&lt;/span&gt;
          &lt;button&gt;Add to Cart&lt;/button&gt;
      &lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;
      &lt;p&gt;© 2024 E-commerce Site. All Rights Reserved.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    </section>`},
    { id: 'landing-page', title:'Landing Page', content:`<section id="landing-page"><p>Create a landing page for a product or service. Include a headline, a call-to-action button, and a section for features and benefits.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Landing Page&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
      &lt;h1&gt;Landing Page&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
      &lt;section id="hero"&gt;
          &lt;h2&gt;Welcome to Our Service&lt;/h2&gt;
          &lt;p&gt;This is a brief description of what we offer.&lt;/p&gt;
          &lt;button&gt;Get Started&lt;/button&gt;
      &lt;/section&gt;
      &lt;section id="features"&gt;
          &lt;h3&gt;Features&lt;/h3&gt;
          &lt;p&gt;Feature 1: Description&lt;/p&gt;
          &lt;p&gt;Feature 2: Description&lt;/p&gt;
          &lt;p&gt;Feature 3: Description&lt;/p&gt;
      &lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;
      &lt;p&gt;© 2024 Our Company. All Rights Reserved.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre></section>`},
    { id: 'photo-gallery', title:'Photo Gallery', content:`<section id="photo-gallery"><h3>5. Photo Gallery</h3>
    <p>Build a photo gallery with thumbnails that open full-size images in a lightbox when clicked.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Photo Gallery&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
      &lt;h1&gt;Photo Gallery&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
      &lt;section id="gallery"&gt;
          &lt;div class="thumbnail"&gt;
              &lt;img src="thumbnail1.jpg" alt="Image 1" onclick="openLightbox('fullsize1.jpg')"&gt;
          &lt;/div&gt;
          &lt;div class="thumbnail"&gt;
              &lt;img src="thumbnail2.jpg" alt="Image 2" onclick="openLightbox('fullsize2.jpg')"&gt;
          &lt;/div&gt;
          &lt;div class="thumbnail"&gt;
              &lt;img src="thumbnail3.jpg" alt="Image 3" onclick="openLightbox('fullsize3.jpg')"&gt;
          &lt;/div&gt;
      &lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;
      &lt;p&gt;© 2024 Photo Gallery. All Rights Reserved.&lt;/p&gt;
  &lt;/footer&gt;
  &lt;script&gt;
      function openLightbox(imageSrc) {
          // Code to open lightbox with the full-size image
          alert('Open image: ' + imageSrc);
      }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre>
    </section>`},
    { id: 'contact-form ', title:'Contact Form', content:`<section id="contact-form"><p>Create a contact form with fields for name, email, subject, and message. Include validation and a submission button.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Contact Form&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
      &lt;h1&gt;Contact Us&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
      &lt;section id="contact-form"&gt;
          &lt;form&gt;
              &lt;label for="name"&gt;Name&lt;/label&gt;
              &lt;input type="text" id="name" name="name" required&gt;
              &lt;label for="email"&gt;Email&lt;/label&gt;
              &lt;input type="email" id="email" name="email" required&gt;
              &lt;label for="subject"&gt;Subject&lt;/label&gt;
              &lt;input type="text" id="subject" name="subject" required&gt;
              &lt;label for="message"&gt;Message&lt;/label&gt;
              &lt;textarea id="message" name="message" required&gt;&lt;/textarea&gt;
              &lt;button type="submit"&gt;Submit&lt;/button&gt;
          &lt;/form&gt;
      &lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;
      &lt;p&gt;© 2024 Contact Form. All Rights Reserved.&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre></section>`},
    { id: 'weather', title:'Weather App', content:`<section id="weather"><p>Build a weather application that fetches and displays weather information based on the user's location or a searched city.</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Weather App&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
      &lt;h1&gt;Weather App&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
      &lt;section id="weather"&gt;
          &lt;input type="text" id="city" placeholder="Enter city name"&gt;
          &lt;button onclick="getWeather()"&gt;Get Weather&lt;/button&gt;
          &lt;p id="weather-result"&gt;&lt;/p&gt;
      &lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;
      &lt;p&gt;© 2024 Weather App. All Rights Reserved.&lt;/p&gt;
  &lt;/footer&gt;
  &lt;script&gt;
      async function getWeather() {
          const city = document.getElementById('city').value;
          const apiKey = 'your_api_key';
          const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=metric\`);
          const data = await response.json();
          document.getElementById('weather-result').textContent = \`Temperature in \${city}: \${data.main.temp}°C\`;
      }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
    </code></pre></section>`}
  ]
  },
];

const Css = () => {
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
    <div className="css-reading-page">
        <Helmet>
        <title>Master HTML and CSS - Web Development Fundamentals | U-Learn Tech</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Learn HTML and CSS from scratch. Build responsive, beautiful websites with our comprehensive web development course at U-Learn Tech." />
      <meta name="keywords" content="HTML, CSS, Web Development, Responsive Design, Frontend, U-Learn Tech" />
      <meta name="author" content="U-Learn Tech" />
      
      

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.u-learntech.com/courses/html-css-fundamentals" />
      <meta name="twitter:title" content="Master HTML and CSS - Web Development Fundamentals | U-Learn Tech" />
      <meta name="twitter:description" content="Learn HTML and CSS from scratch. Build responsive, beautiful websites with our comprehensive web development course at U-Learn Tech." />
      <meta name="twitter:image" content="https://www.u-learntech.com/images/html-css-course-twitter.jpg" />

      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Course",
          "name": "Master HTML and CSS - Web Development Fundamentals",
          "description": "Learn HTML and CSS from scratch. Build responsive, beautiful websites with our comprehensive web development course.",
          "provider": {
            "@type": "Organization",
            "name": "U-Learn Tech",
            "sameAs": "https://www.u-learntech.com"
          },
          "url": "https://www.u-learntech.com/courses/html-css-fundamentals",
          "courseCode": "WEB101",
          "educationalLevel": "Beginner to Intermediate",
          "teaches": ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid", "Web Accessibility"],
          "occupationalCategory": "Web Developer"
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

export default Css;
