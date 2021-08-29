import React, { Component } from 'react';

class UserGreetings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return this.state.isLoggedIn ? <h2>Welcome Tanvir</h2>
            : <h2>Welcome Guest</h2>

        /* return this.state.isLoggedIn && <h2>Welcome Tanvir</h2> */
    }
}

export default UserGreetings;
