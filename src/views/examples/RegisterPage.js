import React from "react";
import { useState } from "react";
import axios from "axios";
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";

function RegisterPage() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const Register = ()=>{
      let emailRule =
        /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if (Email !== "" || Password !== "" || Email.search(emailRule) !== -1) {
        axios.post("")
      } else if (Email === "") {
        alert("Email不可為空");
      } else if (Email.search(emailRule) === -1) {
        alert("Email格式錯誤!");
      }else if(Password===""){
        alert("密碼不可為空")
      }
    }
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <Form className="register-form">
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="text"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    onClick={Register}
                  >
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            Today is {new Date().getFullYear()}, {new Date().getMonth()},
            {new Date().getDay()}
            <i className="fa fa-heart heart" />
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
