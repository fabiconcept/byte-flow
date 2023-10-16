import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { lowlight } from 'lowlight';

const detectLanguage = (code, options = {}) => {
  const { subsetLanguages, relevanceBoost } = options;

  const language = lowlight.highlightAuto(code, subsetLanguages, relevanceBoost).data.language;
  return language;
};


const Code = ({ contentHtml }) => {
  const options = {
    subsetLanguages: ['bash', "php", "python", "html", "css", "ruby", "java"], // Limit detection to JavaScript and Java
    relevanceBoost: 0, // Boost relevance for specific languages
  };

  const detectedLanguage = detectLanguage(contentHtml, options) || "bash";

  return (
    <section className='flex flex-col w-full'>
      <div className='dark:bg-light-themeBackground/50 bg-dark-themeBackground/50 text-white flex justify-between items-center w-full p-2 rounded-t'>
        <span className='text-xs'>{detectedLanguage}</span>
      </div>
      <SyntaxHighlighter language={detectedLanguage} style={dracula} showLineNumbers wrapLines wrapLongLines  customStyle={{marginTop: 0}}>
        {contentHtml}
      </SyntaxHighlighter>
    </section>
  );
};

export default Code;