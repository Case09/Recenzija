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
        const { authenticated } = this.props;
        return (
            <div className={styles.dropdown}>
                <div className="dropdown" style={{display: "inline-block"}}>
                    <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        Dropdown
                        <span style={{marginLeft: "5px"}} className="caret"></span>
                    </button>
                    {
                        authenticated ?
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            <li>Avatar</li>
                            <li>Logout</li>
                            <li><Link to="/userSettings" /></li>
                        </ul> :
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            <li><a onClick={this.login.bind(this)}>Login</a></li>
                        </ul>
                    }
                </div>
            </div>
        );
    }

    login() {
        if (this.props.authenticated) {
            this.props.authenticate(false);
            return;
        }
        this.props.authenticate(true);
        return;
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.authenticated
    };
}

export default connect(mapStateToProps, actions)(UserDropdown);
