import React, { Component } from 'react';


class RefsDemo extends Component {
    constructor(props) {
        super(props);

        /* this.inputRef = React.createRef(); */

        this.callBackRef = null;
        this.setCallBackRef = element => {
            this.callBackRef = element;
        }
    }

    componentDidMount() {
        /* -----
        this.inputRef.current.focus();
        console.log(this.inputRef);
        ----- */

        if (this.callBackRef)
            this.callBackRef.focus();
    }

    clickHandler = () => {
        /* console.log(this.inputRef.current.value); */

        console.log(this.callBackRef.value);
    }

    render() {
        return (
            <div>
                {/* <input className='input-style' type="text" ref={this.inputRef} /> */}
                <input className='input-style' type="text" ref={this.setCallBackRef} />
                <button className='button' onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo;