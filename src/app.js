import React, { Component } from 'react';
import Main from './components/Main';
import styles from "./app.scss"


export default class App extends Component {
  render() {
    return (
     <div>
        <Main />
        {this.props.children}
     </div>
    );
  }
}