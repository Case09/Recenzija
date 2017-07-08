import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.loggedIn) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {;
      if (!this.props.loggedIn) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      loggedIn: state.loggedIn
    }
  }

  return withRouter(connect(mapStateToProps)(Authentication));
}
