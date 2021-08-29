import React from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {

    class WithCounter extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState((prevState) => {
                return { count: prevState.count + incrementNumber }
            })
        }

        render() {
            return (
                <div>
                    <WrappedComponent incrementCount={this.incrementCount} count={this.state.count} {...this.props} />
                </div>
            );
        }
    }

    return WithCounter;
}

export default withCounter;