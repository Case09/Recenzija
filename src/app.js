import React, { Component } from 'react';
import Bank from './components/Bank';

export default class BankAppContainer extends Component {
  render() {
    return (
     <div>
        <Bank />
        {this.props.children}
     </div>
    );
  }
}