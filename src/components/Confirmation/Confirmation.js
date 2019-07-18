import React, { Component } from "react";
import { Col } from "react-bootstrap";

class CheckoutComponent extends Component{
    render() {
        return (
            <Col xs={12} className="Checkout-outer-div">
                Welcome to <strong>YouWant.</strong>
            </Col>
        )
    }
}

export default CheckoutComponent;