import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DepositList extends Component {

  render() {
    const { deposit } = this.props;
    return (
      <div>
        <ul>
          <li style={{listStyle: "none", marginTop: "20px"}}>{deposit}</li>
        </ul>
      </div>
    );
  }
}

DepositList.propTypes = {
  deposit: PropTypes.number
}