import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <h3 onMouseOver={incrementCount}>
                    Hovered {count} times
                </h3>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10);
