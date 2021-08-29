import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('Class Button Clicked');
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.clickHandler}>Class Button</button>
            </div>
        )
    }
}

export default ClassClick;