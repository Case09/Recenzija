import React, { Component } from 'react';
import styles from "./styles/userDropdown.scss";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

export class UserDropdown extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { isLoggedIn } = this.props;
        return (
            <div className={styles.dropdown}>
                <div className="dropdown" style={{display: "inline-block"}}>
                    <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        Dropdown
                        <span style={{marginLeft: "5px"}} className="caret"></span>
                    </button>
                    {
                        isLoggedIn ?
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            <li>Avatar</li>
                            <li>Logout</li>
                            <li><Link to="/userSettings" /></li>
                        </ul> :
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            <li><a>Login</a></li>
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.authenticated
    };
}

export default connect(mapStateToProps, actions)(UserDropdown);
