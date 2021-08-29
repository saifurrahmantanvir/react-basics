import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const overlay = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(3px)'
}

const modal = {
    display: 'inline-block',
    padding: 20,
    background: '#fff',
    borderRadius: '2px',
    minHeight: '300px',
    margin: '1rem',
    position: 'relative',
    minWidth: '300px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    justifySelf: 'center',
}

class Modal extends Component {
    render() {
        return ReactDOM.createPortal(
            <div style={overlay} onClick={this.props.onClose}>
                <div style={modal}>
                    {this.props.children}
                    <hr />
                    <button className='button' onClick={this.props.onClose}>
                        Close
                    </button>
                </div>
            </div>,
            document.getElementById('portal-root')
        )
    }
}

export default Modal;