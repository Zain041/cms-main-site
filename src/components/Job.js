import React, { Component } from "react";
import { Button, Card, CardImg, Col, Container, Input, Row , Form, Label } from "reactstrap";
import Header from "../components/Header";
import p from "../aessts/p/p.png";
import Footer from "./Footer";
export default class Job extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <br />
        <br />
        <Container>
          <Row className="ml-5 mr-5">
            <h1>Featured Jobs</h1>
            <Col lg="6" className="text-right">
              <Card>
                <CardImg src={p} />
              </Card>
            </Col>
            <Col lg="6">
              <h5>Senior Product Manager</h5>
              <h5>Lodon</h5>
              <p>
                Senior Commercial Product Manager with experience of working on
                Enterprise SaaS products sought by this Decisioning Software
                business within a FTSE 100. You will be responsible for product
                vision, roadmap, Agile product planning, and driving
                go-to-market activities
              </p>
              <Button>Find out more</Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="text-center">
            <h1>Looking for New job ?</h1>
            <p>
              If you don't see a job here that suits your experience, send us a
              copy of your CV.{" "}
            </p>
            <p>
              Please note: We have seen a big increase in candidate applications
              due to the impact of covid19 on the global jobs market, so
              unfortunately we're time-limited to only contacting candidates who
              we can match to current/open job roles.
            </p>
            <p>
              If we can't match you to anything suitable straight away and you
              are happy for us to do so, we'll add your details to our system
              and update you as and when new roles come in. Just tick the 'Keep
              me updated with new jobs' box below.
            </p>
            <Col></Col>
          </Row>
          <Row className="text-center">
              <h1>
                  Send Your CV
              </h1>
              <Col lg="5" className="text-center">
                  <Form>
                  <Input  type="text" placeholder="Name"  />
                  <Input typ="email" placeholder="email" />
                  <Input type="text" placeholder="Desire Role"/>
                  <Input type="text" placeholder="Desire Sallry"/>
                  
                    <Label>Select Option</Label>
                    <br/>
                    <Input className="text-left" type="radio"/>
                    <Label>Permanent Role</Label>
                    <Input className="text-left" type="radio"/>
                    <Label>Contract Role</Label>
                    <Input type="file" name="fileToUpload" id="fileToUpload" />
                  </Form>
             
              </Col>
             
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}
