import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SaveButton extends Component {

  render() {
    return (
      <Link to="/" onClick={this.props.save}>Save</Link>
    );
  }
}

export default SaveButton;


