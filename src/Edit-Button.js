import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditButton extends Component {

  render() {
    return (
      <Link to="/edit" style={{ textDecoration: 'none' }}>Edit</Link>
    );
  }
}

export default EditButton;


