import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";

class CarFeatures extends Component{
    render() {

        const { selectedOption, information } = this.props;

        return (
            <Row className="features-row">
                <Col lg={12}>
                    <strong className="" >Features </strong>
                    <Form.Group controlId="formBasicChecbox col-md-4" className="Features mt-3">
                        <ul>
                            {information.features.length ?
                                information.features.map((item, index) => {
                                    return <li id={`Features${index}`}>
                                        <Form.Check
                                            type="checkbox"
                                            label={`${item.key}`}
                                            checked={item.value }
                                            onClick={e => selectedOption(item, index)}
                                            id={`Features-check-${index}`}
                                        />
                                    </li>
                                })
                                : null
                            }
                        </ul>
                    </Form.Group>
                </Col>
            </Row>
        )
    }
}

export default CarFeatures;