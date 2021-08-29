import React, { Component } from 'react';
import '../App.css';

const styles = {
    height: '10px'
}

const inherit = {
    fontFamily: 'inherit',
    fontSize: '20px',
    padding: '5px'
}

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUsernameChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleCommentsChange = e => {
        this.setState({
            comments: e.target.value
        })
    }

    handleTopicChange = e => {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    }

    render() {
        const { username, comments, topic } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div style={styles}></div>

                <label htmlFor="name">Username</label>
                <input type="text" name="name" value={username} onChange={this.handleUsernameChange} style={inherit} />

                <div style={styles}></div>

                <label htmlFor="comments">Comment</label>
                <textarea name="comments" value={comments} onChange={this.handleCommentsChange} style={inherit} />

                <div style={styles}></div>

                <select value={topic} onChange={this.handleTopicChange} style={inherit}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>

                <div style={styles}></div>

                <button type='submit' className='button'>Submit</button>
            </form>
        )
    }
}

export default Form;