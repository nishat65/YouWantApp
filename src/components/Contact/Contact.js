import React, { Component } from "react";
import { InputGroup, Row, Col, Container, FormControl, Form, Button, FormGroup } from "react-bootstrap";
import { BreadCrumb } from "../../components";

class Contact extends Component{
    render() {
        const breadCrumbs = [
            {
                url: '/',
                title: 'Home'
            },
            {
                title: 'Contact Us'
            }
        ]
         
        return (
            <React.Fragment>
                <div className="breadcrumb-sec">
                    <BreadCrumb
                        breadCrumbs={breadCrumbs}
                    />
                </div>
                <Container>
                    <Row>
                        <Col lg={4} md={12}>
                            <FormGroup>
                                <FormControl
                                    value={""}
                                    onChange={this.onInputChange}
                                    name="email"
                                    placeholder="Name"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    className={`input-auth-text `}
                                />
                                
                               
                            </FormGroup>
                            <FormGroup>
                                <FormControl
                                    className={`input-auth-text `}
                                    value={''}
                                    onChange={this.onInputChange}
                                    name="email"
                                    maxLength={200}
                                    placeholder="Email"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                               

                            </FormGroup>
                            <FormGroup>
                            <FormControl
                                value={''}
                                onChange={this.onInputChange}
                                name="email"
                                placeholder="Subject"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                className={`input-auth-text `}
                            />
                            </FormGroup>
                        </Col>
                        <Col lg={4} md={12}>
                            <FormGroup>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="8"
                                />
                                </FormGroup>
                        </Col>
                        <Col lg={4} md={12}>

                        <ul className="contact_info">
                        <li className="address">
                                <i class="fas fa-map-marker-alt"></i>
                                Model Town Link Road Lahore, 60 Street. Pakistan 54770
                            </li>   
                            <li class="calling-details">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                    <a href="tel:+00123456789" > +00123 45679 </a>  Office <br /> <a href="tel:+00 12345 67890" > +00 12345 67890 </a> - Mobile
                            </li>
                            <li>
                                    <i class="fas fa-envelope"></i>
                                    <a href="mailto:contact@youwant.com">contact@youwant.com </a> <br />
                                    <a href="mailto:youwant@gmail.com">youwant@gmail.com </a>
                                    
                            </li>
                            
                            </ul>
                        </Col>
                        <Col lg={12} md={12} className="p-0  mb-5">
                            <Button className="custom-button btn-bg-red" > Submit </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3403.1210477019627!2d74.31372431511082!3d31.465856181387615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sModel+Town+Link+Road+Lahore%2C+60+Street.+Pakistan+54770!5e0!3m2!1sen!2sin!4v1562218175445!5m2!1sen!2sin"
                                width="100%"
                                height="310"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen
                            >
                            </iframe>
                        </Col>
                        </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Contact;