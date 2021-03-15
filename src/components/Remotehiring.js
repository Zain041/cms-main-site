import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
export default class Remotehiring extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="text-center">
            <Col>
              <h1>How to remote hire</h1>
              <h5>It’s a difficult time but we’re here to help.</h5>
            </Col>
            <Col>
            <h5>
              Our services have always been configured to make remote recruiting
              easier. Now, more than ever, we are utilising tech-focused
              solutions to support your hiring in 3 simple steps…
            </h5>
            </Col>
          </Row>
          <Row className="text-center" >
              <Col>
            <iframe
              width="582"
              height="320"
              src="https://www.youtube.com/embed/rgZpFB5NJFM"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            </Col>
          </Row>
          <Row className="text-center">
              <Col>
              <h1 className="text-center">Interactive Job Specs</h1>
            <iframe
              width="582"
              height="320"
              src="https://www.youtube.com/embed/B-UGcx2jc7E"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
