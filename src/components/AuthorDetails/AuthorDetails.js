import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { BreadCrumb } from "../../components";
import config from "../../config";

class AuthorDetails extends Component{

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        const breadCrumbs = [
            {
                url: '/',
                title: 'Home'
            },
            {
                url: '/search',
                title: 'Search'
            },
            {
                title: 'Author'
            }
        ]

        return (
            <React.Fragment>
                <div className="breadcrumb-sec">
                    <BreadCrumb
                        breadCrumbs={breadCrumbs}
                    />
                </div>
                <Row className="author">
                    <Col xs={12}>
                        <Row>
                            <Col xs={3} className={"left-img"}>
                                <img src="http://demos.ths.agency/youwant/wp-content/uploads/2018/09/user_default1.png"/>
                            </Col>
                            <Col xs={5} className="author-info pt-4">
                                <h4>Prashant</h4>
                                <p className="pt-2">Logged in at: 6 days Ago</p>
                            </Col>
                            <Col xs={4} className="pt-4">
                                <div className="card-black">
                                    <h2 className="pt-4 pl-4">1</h2>
                                    <div className="pl-4 pb-4">Ad Sold</div>
                                </div>
                                <div className="card-blue ml-4">
                                    <h2 className="pt-4 pl-4">1</h2>
                                    <div className="pl-4 pb-4">Ad Sold</div>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row className="mt-5 author-bottom">
                    <Col xs={12} className="author-bottom-col pl-0">
                        <Row>
                            <Col xs={3}>
                                <img src="http://demos.ths.agency/youwant/wp-content/uploads/2019/06/Car1-7.jpeg" />
                            </Col>
                            <Col xs={7} className="pl-4">
                                <p><strong>BMW</strong></p>
                                <p><i className="fa fa-clock-o"></i> June,27 2019</p>
                                <p>Abcd</p>
                                <div>
                                    <ul className="card-list-unstyled">
                                        <li>
                                            <img src={`${config.PUBLIC_URL}/assets/images/motor.png`} alt="" />  <span>{ "Not Describe"}</span>
                                        </li>
                                        <li>
                                            <img src={`${config.PUBLIC_URL}/assets/images/metre.png`} alt="" />  <span>33 Km</span>
                                        </li>
                                        <li>
                                            <img src={`${config.PUBLIC_URL}/assets/images/wheel.png`} alt="" />  <span>{ "Not Describe"}</span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={2}>
                                <div className="price-details pl-2 mt-3">
                                    <p><strong>visit:</strong>12</p>
                                    <h2>$829</h2>
                                    <Button
                                        className=" custom-button btn-bg-red mt-3 "
                                        onClick={this.goBack}
                                    >
                                        View Ad
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default AuthorDetails;