import React, { Component } from 'react';
/* ------
import RegComp from './RegComp';
import PureComp from './PureComp';
------ */
import MemoComp from './MemoComp';

/* Change it to PureComponent and do the same for both of the child component(RegComp, PureComp) */
class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: 'Tanvir'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                user: 'Tanvir'
            })
        }, 2000)
    }

    render() {
        console.log('>>----> Parent Component <----<<')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.user} />
                {/* <RegComp name={this.state.user} /> */}
                {/* <PureComp name={this.state.user} /> */}
            </div>
        )
    }
}

export default ParentComp;
