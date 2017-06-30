import React, { Component } from 'react';
import UserDropdown from './UserDropdown';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
              <div className="well">
                <UserDropdown />
              </div>
            </div>
        );
    }
}
