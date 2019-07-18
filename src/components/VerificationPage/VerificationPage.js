import React, { Component } from "react";
import { Col } from "react-bootstrap";

class VerificationPage extends Component{
    render() {
        return (
            <Col xs={12} className="verification-outer-div">
                <strong>
                    Please Verify Your Account.
                    We have send a verification mail to you.
                </strong>
            </Col>
        )
    }
}

export default VerificationPage;