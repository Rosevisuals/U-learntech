// src/customSyntaxTheme.js
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const customTheme = {
  ...tomorrow,
  'code[class*="language-"]': {
    ...tomorrow['code[class*="language-"]'],
    color: '#ffffff', // Change the default text color to white
  },
  'pre[class*="language-"]': {
    ...tomorrow['pre[class*="language-"]'],
    background: '#111111 ', // Change the background color to navy blue
  },
  'code[class*="language-"]::selection, code[class*="language-"] *::selection': {
    background: '#111111 ', // Change the selection color to a lighter blue
  },
  'code[class*="language-"], pre[class*="language-"]': {
    border: '1px solid #0074D9', // Add a border to the code block
  },
  'token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#8a8a8a', // Light gray for comments
  },
  'token.punctuation': {
    color: '#ffffff', // White for punctuation
  },
  'token.property, .token.tag, .token.constant, .token.symbol, .token.deleted': {
    color: '#ff4136', // Light red for keywords
  },
  'token.boolean, .token.number': {
    color: '#2ecc40', // Light green for numbers and booleans
  },
  'token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
    color: '#ffdc00', // Yellow for strings and attributes
  },
  'token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string': {
    color: '#ffffff', // White for operators and URLs
  },
  'token.atrule, .token.attr-value, .token.keyword': {
    color: '#0074D9', // Light blue for keywords
  },
  'token.function, .token.class-name': {
    color: '#7fdbff', // Cyan for functions and class names
  },
  'token.regex, .token.important, .token.variable': {
    color: '#ff851b', // Orange for regex and important variables
  },
  'token.important, .token.bold': {
    fontWeight: 'bold',
  },
  'token.italic': {
    fontStyle: 'italic',
  },
};

export default customTheme;
