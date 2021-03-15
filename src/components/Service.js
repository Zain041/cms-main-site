import React, { Component } from 'react'
import { Col, Row, Container, Button } from "reactstrap";
import "../aessts/CSS/service.css"
export default class Service extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="text-center">
                        <Col>
                        <h1>
                        1. Engage Candidates
                        </h1>
                        <h3 className="fn">
                        How do you communicate your culture and create engagement without meeting face to face?
                        </h3>
                        <ol>
                            <li>
                                <h3>
                                Targeted job role advertising
                                </h3>
                                <h3>
                                Targeted job role advertising
                                </h3>
                                <h3>
                                Targeted job role advertising
                                </h3>
                                <h3>
                                Targeted job role advertising
                                </h3>
                            </li>
                        </ol>
                         {/* <ol type="1">
                             <li>
                            <h1> </h1>
                              
                             </li>
                         </ol> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
