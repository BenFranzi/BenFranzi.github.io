import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = (source) => {
    return (
        <div>
            <ReactMarkdown source={source} />
        </div>
    );
}

export default Markdown;