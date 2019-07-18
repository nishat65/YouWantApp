import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class Description extends Component{
    render() {
        return (
            <React.Fragment>
                <div className="ad-details-description">
                    <div className="heading">
                        <h3 className="main-title text-left">Description</h3>
                    </div>
                    <Row className="low-desc">
                        <Col xs={4} className="info-description">
                            <span><strong>Date</strong>  :  10 June,2019 </span>
                        </Col>
                        <Col xs={4} className="info-description">
                            <span><strong>Registration</strong>  :  10 June,2019 </span>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default Description;