import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default class CustomNavBar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" expand="exx-lg" style={{height:"60px"}}>
        <Navbar.Brand href="/">Online Tutor Finder</Navbar.Brand>

      </Navbar>
    );
  }
}
