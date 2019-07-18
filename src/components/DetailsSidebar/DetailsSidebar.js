import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import config from "../../config";
import { Link } from "react-router-dom";

class DetailsSidebar extends Component{

    state = {
        showNumber : false
    }

    showNumber = () => {
        this.setState({ showNumber: !this.state.showNumber });
    }

    render() {
        const { showNumber } = this.state;
        return (
            <div className="sidebar">
                <div className="heading-area">
                    <h1>sample</h1>
                    <div className="short-history">
                        <ul>
                            <li>
                                10,June 2019
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="white-bg user-contact-info">
                    <div className="user-info-card">
                        <Row>
                            <Link to={"/author"}>
                                <Col xs={4} onClick={(() => this.props.history.push('/author'))}>
                                    <img src="http://demos.ths.agency/youwant/wp-content/uploads/2018/09/user_default1.png"/>
                                </Col>
                            </Link>
                            <Col xs={8} className="user-information">
                                <span className="user-name">
                                    Prashant
                                </span>
                                <div className="item-date">
                                    <span className="ad-pub">Logged in at: 4 days Ago</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="category-list-icon green-color">
                    <div className="category-list-title">
                        <ul>
                            <li>
                                <i
                                    class="glyph-icon flaticon-mail"
                                    style={{paddingRight : "15px"}}
                                ></i>
                            </li>
                        </ul>
                 
                        <h5>Message To Seller</h5>
                    </div>
                </div>
                <div className="category-list-icon voilet-color">
                    <div className="category-list-title">
                        <ul>
                            <li>
                                <i
                                    class="glyph-icon flaticon-smartphone"
                                    style={{ paddingRight: "15px" }}
                                >       
                                </i>
                            </li>
                        </ul>
                        <h5 onClick={this.showNumber}>{showNumber ? "+918708475963" : "Click To View Details"}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsSidebar;