import React, { Component } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "./deleteAccount.component.css";

export default class Login extends Component {
  render() {
    return (
      <form>
        <div align="center">
          <h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            </svg>
            <span className="delete-account">Delete my account</span>
          </h3>

          <div className="form-group">
            <div className="settings_text">
              <p>
                We would hate to see you go, but if you are completely sure,
                Enter your password and we will close your account and delete
                your details. Remember, there is no going back .
              </p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="settings_text">
            <p>Why are you leaving?</p>
            <div>
              <div>
                <input type="radio" value="benefits" name="gender" /> I don't
                see the benefits
              </div>
              <div>
                <input type="radio" value="noUse" name="gender" /> I'm not using
                it anymore
              </div>
              <div>
                <input type="radio" value="Other" name="gender" /> Other
              </div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Reason(Optional)"
                  rows={3}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-key-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                  </svg>
                  <span className="password">Password</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="danger">Delete my account</Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
