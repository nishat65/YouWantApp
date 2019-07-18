import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { InputField, ErrorToolTip } from "../../../components";
import actions from "../../../actions";
import { isTryStatement } from "@babel/types";
import { toast } from "react-toastify";

class DetailsForm extends Component{

    state = {
       makeInformation : ""
    }

    componentDidMount = () => {
        actions.getMakeParams().then(res => {
            let allMakeValues = res.info.data;
            this.setState({ makeInformation: allMakeValues });
        }).catch(error => {
            toast.error(error.response && error.response.data && error.response.data.message || "Internal Sever Error", {
                className: "toast-danger"
            }); 
        })
    }

    findMakeValue = () => {
        const { carInformation = {} } = this.props;
        const { ads = [] } = carInformation;
        let ad = ads.length && ads[0] || {};
        let { makeInformation } = this.state;
        let makeDefaultValue;
        makeInformation.map((item, index) => {
            console.log(ad.brand, item.value);
            if (item.value === ad.brand) {
                makeDefaultValue = item.id;
                return;
            }
        }); 
        return true;
    }

    render() {
        const { information, handleChange, errors = {}, carInformation = {} } = this.props;
        const { ads = [] } = carInformation;
        let ad = ads.length && ads[0] || {};
        // let result = Object.keys(ad).length ? this.findMakeValue : this.findMakeValue;  
        return (
            <Row>
                <Col lg={12} className="sell-tool" >
                    <InputField
                        type="text"
                        placeholder={"Please Enter Title"}
                        name="title"
                        id="title"
                        label="Title"
                        value={ad.title || ""}
                        onChange={e => handleChange(e)}
                        labelid={"ltitle"}
                    />
                    {errors.title ? (
                        <ErrorToolTip error={errors.title}>
                        </ErrorToolTip>
                    ) : null}
                </Col>
                <Col lg={12} >
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Make</Form.Label>
                        <Form.Control
                            as="select"
                            readOnly
                            disabled
                        >
                            <option>{ad.brand || ""}</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col lg={12} >
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Model</Form.Label>
                        <Form.Control
                            as="select"
                        >

                            {
                                information.model && information.model.length ?
                                    information.model.map((item, index) => {
                                        return <option>{item || "No Option"}</option>
                                    }) : <option>No Option</option>
                            }

                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col lg={12} >
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Year</Form.Label>
                        <Form.Control
                            as="select"
                        >

                            {
                                information.year && information.year.length ?
                                    information.year.map((item, index) => {
                                        return <option>{item || "No Option"}</option>
                                    }) : <option>No Option</option>
                            }

            
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col lg={12} >
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Series</Form.Label>
                        <Form.Control
                            as="select"
                        >
                            {
                                information.series && information.series.length ?
                                information.series.map((item, index) => {
                                    return <option>{item || "No Option"}</option>
                                }) : <option>No Option</option>
                            }
                            
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col lg={12} >
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Engine</Form.Label>
                        <Form.Control
                            as="select"
                        >
                            {
                                information.engine && information.engine.length ?
                                    information.engine.map((item, index) => {
                                        return <option>{item || "No Option"}</option>
                                    }) : <option>No Option</option>
                            }

                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col lg={12} >
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Transmission</Form.Label>
                        <Form.Control
                            as="select"
                        >
                            {
                                information.transmission && information.transmission.length ?
                                    information.transmission.map((item, index) => {
                                        return <option>{item || "No Option"}</option>
                                    }) : <option>No Option</option>
                            }

                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col lg={12} >
                    <Row>
                        <Col lg={12} className="sell-tool">
                            <InputField
                                type="text"
                                placeholder={"Please Enter Price"}
                                name="price"
                                id="price"
                                label={"Price"}
                                value={information.price}
                                onChange={e => handleChange(e)}
                            />

                            {errors.price ? (
                                <ErrorToolTip error={errors.price}>
                                </ErrorToolTip>
                            ) : null}

                        </Col>
                        <Col lg={12} className="sell-tool">
                            <InputField
                                type="text"
                                placeholder={"Please Enter Mileage"}
                                name="mileage"
                                id="mileage"
                                label={"Mileage"}
                                value={information.mileage}
                                onChange={e => handleChange(e)}
                            />

                            {errors.mileage ? (
                                <ErrorToolTip error={errors.mileage}>
                                </ErrorToolTip>
                            ) : null}

                        </Col>
                    </Row>
                </Col>
                <Col lg={12} className="sell-tool" >
                    <Row>
                        <Col lg={12}>
                            <InputField
                                type="text"
                                placeholder={"Please Enter Car Color"}
                                name="color"
                                id="color"
                                label={"Color"}
                                value={information.color}
                                onChange={e => handleChange(e)}
                            />

                            {errors.color ? (
                                <ErrorToolTip error={errors.color}>
                                </ErrorToolTip>
                            ) : null}

                        </Col>
                        <Col lg={12} className="sell-tool">
                            <InputField
                                type="text"
                                placeholder={"Please Enter Registration Number"}
                                name="registration"
                                id="registration"
                                label="Registration"
                                value={information.registration}
                                onChange={e => handleChange(e)}
                            />

                            {errors.registration ? (
                                <ErrorToolTip error={errors.registration}>
                                </ErrorToolTip>
                            ) : null}

                        </Col>
                    </Row>
                    </Col>
            </Row>
        )
    }
}

export default DetailsForm;