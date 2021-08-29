import React, { Component } from 'react';
import Input from './Input';

class FocusInput extends Component {
    constructor(props) {
        super(props);

        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        this.componentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button className='button' onClick={this.clickHandler}>Input Focus</button>
            </div>
        )
    }
}

export default FocusInput;
