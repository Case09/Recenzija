import React, { Component } from 'react';
import styles from "./styles/userDropdown.scss";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/login';

export class UserDropdown extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const authenticated = this.props.authenticated;
        const style = { pointer: "cursor" };
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
                            <li style={style}><a href="">Avatar</a></li>
                            <li style={style}><Link to="/userSettings" >User Settings</Link></li>
                            <li style={style}><Link to="/logout">Logout</Link></li>
                        </ul> :
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                            <li><Link to="/login">Login</Link></li>
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

export default connect(mapStateToProps)(UserDropdown);
