import React, { Component } from 'react';
import styles from "./styles/userDropdown.scss";

export default class UserDropdown extends Component {
    render() {
        return (
            <div className={styles.dropdown}>
                <div className="dropdown" style={{display: "inline-block"}}>
                    <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        Dropdown
                        <span style={{marginLeft: "5px"}} className="caret"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">User Settings</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
