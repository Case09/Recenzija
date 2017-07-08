import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect  } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { login } from '../actions/login';

export class Login extends Component {

    static contextTypes = {
      router: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
    }

    render() {
        return (
            this.state.submitted ? <Redirect to="/home" /> : <button className="btn btn-primary" onClick={this.login.bind(this)}>Login</button>
        )
    }

    login() {
        this.props.login(true);
        this.setState({submitted: true});
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        login: bindActionCreators(login, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Login);
