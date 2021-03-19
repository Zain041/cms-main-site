import React, { Component } from "react";
import { Button, Card, CardImg, Col, Container, Input, Row , Form, Label } from "reactstrap";
import Header from "../components/Header";
import p from "../aessts/p/p.png";
import {fetchJobs} from '../store/actions/actions'
import {connect} from 'react-redux'
import Footer from "./Footer";
 class Job extends Component {
   componentDidMount=()=>{
     this.props.fetchJobs()
   }
  render() {
    return (
      <div>
        <Header />
        <hr />
        <br />
        <br />
        <Container>
        <h1>Featured Jobs</h1>
          <Row className="ml-5 mr-5">
           
            {this.props.jobs.map((item,index)=>{
            return(

           <>
            <Col lg="6" className="text-right">
              <Card>
                <CardImg style={{height:'250px'}} src={item.job_image} />
              </Card>
            </Col>
            <Col lg="6">
              <h5>{item.job_title}</h5>
              <h5>{item.job_jobPrice}</h5>
              <p>
               {item.job_description}
              </p>
              <Button>Find out more</Button>
            </Col>
            </>
            )
          })}
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
const mapStateToProps = (state) => {
  console.log(state);
  return {
    jobs: state.posts.jobs,
    userid: state.userid,
  };
};  
export default connect(mapStateToProps, {
  fetchJobs,
  
})(Job);
