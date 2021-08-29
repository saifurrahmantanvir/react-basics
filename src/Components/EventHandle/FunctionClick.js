import React from 'react';
import '../App.css';

function FunctionClick() {
    function clickHandler() {
        console.log('Function Button Clicked');
    }

    return (
        <div>
            <h1>Anything I want to render</h1>
            <button className="button" onClick={clickHandler}>Function Button</button>
        </div>
    )
}

export default FunctionClick;
