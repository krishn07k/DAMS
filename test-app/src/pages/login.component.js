import React, { Component } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import { CardDeck, Container } from "reactstrap";
import "./login.component.css";

export default class Login extends Component {
  render() {
    return (
      <div align="center">
        <h3>Sign In</h3>
        <CardDeck align="center">
          <div class="row">
            <div class="col">
              <a href="#" class="text-decoration-none " mx-auto>
                <Card
                  text="black"
                  className="login2"
                  style={{ height: "13rem" }}
                >
                  <Card.Body>
                    <Card.Text>
                      <br />
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-md"
                        role="img"
                        width="60"
                        height="60"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="svg-inline--fa fa-user-md fa-w-14 fa-fw fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"
                          class=""
                        ></path>
                      </svg>
                    </Card.Text>
                  </Card.Body>
                  <Card.Header>Dentist</Card.Header>
                </Card>
                <br />
              </a>
            </div>
            <div class="col">
              <a href="#" class="text-decoration-none " mx-auto>
                <Card
                  text="black"
                  className="login3"
                  style={{ height: "13rem" }}
                >
                  <Card.Body>
                    <Card.Text>
                      <br />

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        fill="currentColor"
                        class="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </Card.Text>
                  </Card.Body>
                  <Card.Header>General User</Card.Header>
                </Card>
                <br />
              </a>
            </div>
          </div>
        </CardDeck>
        <div className="no-account-yet">Don't have an account yet?</div>
        <a
          href="#"
          class="text-decoration-none "
          mx-auto
          className="no-account-yet2"
        >
          <div>Sign-up here</div>
        </a>
      </div>
    );
  }
}
