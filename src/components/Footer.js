import React, { Component } from 'react'
import { Container , Row , Col, Button } from 'reactstrap'
import "../aessts/CSS/footer.css"
export default class Footer extends Component {
    render() {
        return (
            <div className="black">
                <Container >
                    <Row>
                        <Col lg="6">
                       <h2> © Hanover Recruitment 2020</h2>
                      <h3>  info@hanrec.com</h3>  

 +44 (0)203 145 1266
 <h4 className="white">
 Agreement for finding work services
 </h4>
 <h4>
 Privacy Notice
 </h4>
 <h4>
 Terms of Business
 </h4>
                        </Col>
                        <Col lg="6" className="mt-5">
                        <Button>
                            LinkdIn
                        </Button>
                        <Button>
                            LinkdIn
                        </Button>
                        <Button>
                            LinkdIn
                        </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
