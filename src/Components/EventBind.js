import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello Ropi'
        }

        /* this.clickHandler = this.clickHandler.bind(this); */
    }

    /* ------
    clickHandler() {
        this.setState({
            message: 'You are one of the most precious thing I have'
        })

        console.log(this);
    }
    ------ */

    clickHandler = () => {
        this.setState({
            message: 'You are one of the most precious thing I have'
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* <button className="button" onClick={this.clickHandler.bind(this)}>Know inner feelings</button> */}
                {/* <button className="button" onClick={() => this.clickHandler()}>Know inner feelings</button> */}
                <button className="button" onClick={this.clickHandler}>Know inner feelings</button>
            </div>
        )
    }
}

export default EventBind;
