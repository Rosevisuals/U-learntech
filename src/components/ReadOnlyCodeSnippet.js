// src/components/ReadOnlyCodeSnippet.js
import React from 'react';
import AceEditor from 'react-ace';

// Import the themes and modes you need
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';

const ReadOnlyCodeSnippet = ({ code }) => {
  return (
    <AceEditor
      mode="python"
      theme="monokai"
      name="code-editor"
      editorProps={{ $blockScrolling: true }}
      fontSize={16}
      width="100%"
      height="300px"
      value={code}
      readOnly
    />
  );
};

export default ReadOnlyCodeSnippet;
