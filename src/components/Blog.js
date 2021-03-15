import React, { Component } from 'react'
import {  Col, Container, Row } from 'reactstrap'
import {Link} from "react-router-dom"
import Header from "../components/Header"
import p from "../aessts/p/p.png"
import { connect } from "react-redux";
import {
  addPost,
  fetchPosts, 
  deletePost,
  editPost,
} from "../store/actions/actions";
import  "../aessts/CSS/blog.css"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Footer from './Footer'
 class Blog extends Component {
   constructor(props){
     super(props)
     this.state={
       amount:""
     }
   }

   componentDidMount=()=>{
     this.props.fetchPosts()
   }
    render() {
      console.log(this.props.posts)
        return (
           

            <div>
                 <Header/>
             
                <Container>
                    <Row>
                        
                          {
                            this.props.posts.map((item,index)=>{
                              return(
                                <Col lg="4">
                                <Card key={index}>
                                <CardImg top width="100%" src={item.blog_image}/>
                                <CardBody>
                                  <CardTitle tag="h5">{item.blog_title}</CardTitle>
                                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                                   <h5 classNam="B"> <b> {item.blog_subtitle}</b>  </h5>
                                                         </CardSubtitle>
                                  <CardText> <h5 classNam="B">{item.blog_text}</h5></CardText>
                                <Link to="/bbb  ">
                                <Button>Button</Button>
                                </Link>  
                                </CardBody>
                              </Card>
                              </Col>               
                              )
                            })
                          }
                     
          </Row>
                </Container>
                <br/>
                <br/>
                <Footer/>
               
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts.posts,
    userid: state.userid,
  };
};  
export default connect(mapStateToProps, {
  fetchPosts,
  
})(Blog);