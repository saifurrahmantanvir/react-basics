import React, { Component } from 'react';

class HoverCounterTwo extends Component {

   render() {
      const { count, incrementCount } = this.props;
      return (
         <div>
            <h3 onMouseOver={incrementCount}>Hovered {count} times</h3>
         </div>
      )
   }
}

export default HoverCounterTwo;
