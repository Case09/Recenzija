import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { login } from '../actions/login';

export class Login extends Component {

    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
        this.props.login(true);
    }

    render() {
        return (
            <span></span>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(login, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Login);
