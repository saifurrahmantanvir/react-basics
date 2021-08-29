import React from 'react';
import './myStyles.css';

const inlineStyles = {
    fontSize: '30px',
    color: 'teal'
}

function StyleSheets(props) {
    const className = props.aStyle ? 'primary' : '';

    return (
        <div>
            <h2 style={inlineStyles}>InlineStyles</h2>
            <h2 className={`${className} font-xl`}>StyleSheets</h2>
        </div>
    )
}

export default StyleSheets;
