import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <button className="button" onClick={() => props.greetHandler('Child')}>Hello Parent</button>
        </div>
    )
}

export default ChildComponent;
