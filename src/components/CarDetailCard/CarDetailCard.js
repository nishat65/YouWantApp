import React, { Component } from "react";
import config from "../../config";
import { Col, Card } from "react-bootstrap";
import actions from "../../actions";
import { ImageLoader } from "../../components";
import { toast } from "react-toastify";

class CarDetailCard extends Component {

    state = {
        favourite : false
    }

    viewDetailsPage = (imageId) => {
        this.props.history.push(`/search/ad_info/:${imageId}`)
    }

    addToFavourite = (data) => {
        actions.addToFavourite({ data }).then(res => {
            toast.success(res && res.message);
            this.setState({ favourite: true });
        }).catch(error => {
            toast.error(error.response && error.response.data && error.response.data.message || "Internal Sever Error", {
                className: "toast-danger"
            });
        });
    }

    render() {
        let { data = {} } = this.props;
        let { favourite } = this.state;
        return (
            <React.Fragment>
                <div className="CarDetailsContainer">
                    <Card>
                        {/* <Card.Img variant="top" src={`${data.image}`} alt="No Image Found"className="CarDetailsCard" /> */}
                        <ImageLoader src={data.image}/>
                        <Card.Body style={{height : "161px"}}>
                            <Card.Title className="mt-3">
                                <div className="Heading-ads">
                                    <h3>{data.title || "Not Describe"}</h3>
                                </div>
                                <div className="Price">
                                    <span>$60</span>
                                </div>
                            </Card.Title>
                            <div>
                                <ul className="card-list-unstyled">
                                    <li>
                                        <img src={`${config.PUBLIC_URL}/assets/images/motor.png`} alt="" />  <span>{data.engine || "Not Describe"}</span>
                                    </li>
                                    <li>
                                        <img src={`${config.PUBLIC_URL}/assets/images/metre.png`} alt="" />  <span>33 Km</span>
                                    </li>
                                    <li>
                                        <img src={`${config.PUBLIC_URL}/assets/images/wheel.png`} alt="" />  <span>{data.transmission || "Not Describe"}</span>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                        <Card.Body className="Card-Bottom">
                            <div>
                                <p className="">

                                    <i className="far fa-calendar-alt"></i>   <span className=""> {data.year || "Not Describe"} </span>
                                </p>
                                <ul className="Card-Bottom-Right">
                                    <li>
                                        <a>
                                            <span
                                                onClick={() => this.addToFavourite(data)}
                                            >
                                                <i className={`far fa-heart ${favourite ? "color-red" : ""}`}></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li>                                   
                                        <a>
                                            <span className="Heart" onClick={() => this.viewDetailsPage(data._id)}>
                                                <i className="far fa-envelope-open"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

export default CarDetailCard;