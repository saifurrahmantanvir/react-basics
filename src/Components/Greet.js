import React from 'react';


const Greet = (props) => {
    const { name } = props;

    return (
        <div>
            <h1>Greetings, {name}</h1>
        </div>
    );
}

export default Greet;