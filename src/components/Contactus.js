import React, { Component } from 'react'
import { Container, Row , Col , Input, Button } from 'reactstrap'

export default class contactus extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                       
                          <h3>Contact us</h3>

                          <h3>Speak to one of our friendly consultants about your needs</h3>
                         
                          <Col lg="6">
                          <Input type="text" placeholder="name" />
                          <br/>
                        <Input type="email" placeholder="email" />
                        <br/>

                        <Input type="phone" placeholder="phone" />
                        <br/>
                        <Input type="textarea" placeholder="Add a message" />
                        <Button type="submit">Submitt</Button>
                        </Col>
                        <Col lg="6">
                            <h4>Office</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                       
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
