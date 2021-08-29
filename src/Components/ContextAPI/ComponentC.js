import React, { Component } from 'react'
import { Comsumer } from './userContext'

class ComponentC extends Component {
   render() {
      return (
         <Comsumer>
            {(value) => {
               return <h3>Component C, {value}</h3>
            }}
         </Comsumer>
      )
   }
}

export default ComponentC
