import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import config from "../../config";

class CarInformation extends Component{
    render(){
        return (
            <React.Fragment>
                <Row className="key-features view-ads">
                    <Col xs={4} className="cus-mt-mb"> 
                        <div className="boxicon">
                            <div  className="car-information-left">
                                <i class="glyph-icon flaticon-car"></i>
                            </div>
                            <div className="car-information-right">
                                <h5>
                                    MAKE OF CAR
                                </h5>
                                <h6>
                                    ABARTH
                                </h6>
                            </div>
                         </div>
                    </Col>
                    <Col xs={4} className="cus-mt-mb">
                        <div className="boxicon">
                            <div className="car-information-left">
                                <i class="glyph-icon flaticon-model" />
                            </div>
                            <div className="car-information-right">
                                <h5>
                                    CAR MODEL
                                </h5>
                                <h6>
                                    500
                                </h6>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} className="cus-mt-mb">
                        <div className="boxicon">
                            <div className="car-information-left">
                                <i class="glyph-icon flaticon-calendar"></i>
                            </div>
                            <div className="car-information-right">
                                <h5>
                                    CAR YEAR
                                </h5>
                                <h6>
                                    2012
                                </h6>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} className="cus-mt-mb">
                        <div className="boxicon">
                            <div className="car-information-left">
                                <i class="glyph-icon flaticon-car-1"></i>
                            </div>
                            <div className="car-information-right">
                                <h5>
                                    CAR SERIES
                                </h5>
                                <h6>
                                    2D CONVERTIBLE ESSEESSE
                                </h6>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} className="cus-mt-mb">
                       <div className="boxicon">
                            <div className="car-information-left">
                                <i class="glyph-icon flaticon-motor"></i>
                            </div>
                            <div className="car-information-right">
                                <h5>
                                    CAR ENGINE
                                </h5>
                                <h6>
                                    1.4L TURBO MPFI
                                </h6>
                            </div>
                        </div>  
                    </Col>
                    <Col xs={4} className="cus-mt-mb">
                        <div className="boxicon">
                            <div className="car-information-left">
                                <i class="glyph-icon flaticon-conveyor"></i>
                            </div>
                            <div className="car-information-right">
                                <h5>
                                    CAR TRANSMISSION
                                </h5>
                                <h6>
                                    5SP AUTOMATED MANUAL
                                </h6>
                            </div>
                        </div>  
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default CarInformation;