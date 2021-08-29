import React from 'react';
import Modal from './modal';

const viewport = {
    height: '100%',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
}

const content = {
    maxWidth: 400,
    position: 'relative',
}

class PortalDemo extends React.Component {
    state = {
        showModal: false
    }

    handleShowMessageClick = () => {
        this.setState({
            showModal: true
        })
    }

    handleCloseModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div style={viewport} >
                <div style={content}>
                    <h1>My App</h1>
                    <p>
                        This is an example of how you might use React.createPortal. I think
                        it is a pretty neat API that is yet another awesome escape hatch
                        that React provides for practical reasons. Sometimes you just need
                        to render something completely outside the React Tree.
                    </p>
                    <button className='button' onClick={this.handleShowMessageClick}>
                        Show Secret Modal
                    </button>
                    {this.state.showModal ? (
                        <Modal onClose={this.handleCloseModal}>
                            This is the secret modal message!
                        </Modal>
                    ) : null}
                </div>
            </div>
        )
    }
}

export default PortalDemo;