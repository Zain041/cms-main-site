import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import "../aessts/CSS/Home.css";
import Footer from "../components/Footer"
import image from "./../aessts/image/image.png";
import Header from "./Header";
import Remotehiring from "./Remotehiring"
import Service from "./Service"
import Contactus from "./Contactus"
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <br/>
        <br/>
        <Container>
          <Row>
            <Col> 
            <Container>
                    <Row className="text-center">
                      <Col className="hh mt-4">
              <header class="v-header container mt-10">
                <div class="fullscreen-video-wrap">
                  <img src={image} />
                </div>

                <div class="header-content">
               
                        <h1>
                          Specialist Recruiters in Digital & Tech
                          <hr className="hr" />
                          Remote hiring solutions
                        </h1>
                  
                </div>
              </header>
            </Col>
                    </Row>
                  </Container> 
             </Col>
          </Row>
        </Container> 
        <Remotehiring/>
        <Service/>
        <Contactus/> 
        <Footer/>
      
      </div>
    );
  }
}
