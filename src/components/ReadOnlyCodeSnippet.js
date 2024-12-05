import React from 'react';

const ReadOnlyCodeSnippet = ({ code }) => {
  const snippetContainerStyle = {
    backgroundColor: '#2d2d2d', // Dark background color
    color: '#f8f8f2', // Light text color
    padding: '16px',
    borderRadius: '8px',
    overflowX: 'auto', // Horizontal scroll for long lines
    overflowY: 'auto', // Vertical scroll for tall content
    fontFamily: "'Courier New', Courier, monospace", // Monospace font
    fontSize: '14px',
    whiteSpace: 'pre', // No wrapping, preserves formatting
    width: '100%', // Takes full width of the container
    maxHeight: '400px', // Sets a max height, scrolls if content exceeds this height
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Subtle shadow
    margin: '16px 0', // Space around the snippet
  };

  return (
    <div style={snippetContainerStyle}>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default ReadOnlyCodeSnippet;
