import React, { Component } from 'react'
import ComponentC from './ComponentC'
import userContext from './userContext'

class ComponentB extends Component {

   static contextType = userContext;

   render() {
      return (
         <div>
            <h3>Component B, {this.context} using Context</h3>
            <ComponentC />
         </div>
      )
   }
}

/* ComponentB.contextType = userContext; */

export default ComponentB
