import React, { Component, Fragment } from "react";
import { Card, Col, Modal, Button, Dropdown } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import CustomModal from "../CustomModal/CustomModal";
import action from "../../actions";
import config from "../../config";
import { PostSubmitLoader } from "../../components";
import ContentLoader, { BulletList } from "react-content-loader";

class InactiveAds extends Component{
    state = {
        deletePostId: "",
        loader_mr: false,
        res_message: "",
        update_loader: false,
        toogleMenuItem: "Active"
    };
    componentDidMount() {
        this.setState({ update_loader: true });
    }

    shouldComponentUpdate() {
        return true;
    }

    deleteModalOpen = (e) => {
        e.stopPropagation();
        this.deleteModalRef.open();
        return;
    };

    onDeleteCancel = () => {
        this.deleteModalRef.close();
    };

    onDeleteTrigger = e => {
        let { deletePostId } = this.state;
        this.props.deleteAd(deletePostId);
        this.deleteModalRef.close();
    };

    shouldComponentUpdate() {
        return true;
    }

    loadMoreAds = e => {
        let { inactiveAds } = this.props;

        this.setState({ loader_mr: true });
        action.getMyCars({ id: inactiveAds.length }).then(res => {
            let res_message = res.ads.length ? "" : "No More Record Found"
            this.setState({ loader_mr: false, res_message });
        })
    };

    render() {
        let { loader_mr, res_message, update_loader, toogleMenuItem } = this.state;
        const { inactiveAds, adEdit, loader } = this.props;
        
        return (
            <Fragment>
                {/* {inactiveAds.length ? <Fragment>
                    {inactiveAds.map((data, index) => {
                        return <Col key={index} lg={4} className="CarDetailsContainer">
                            <Card>
                                <Card.Img variant="top" src={`${data.image}`} className="CarDetailsCard" />
                                <Card.Body>
                                    <Card.Title>
                                        <div className="Heading-ads">
                                            <h3
                                                class="profile-car-title"
                                            >
                                                {data.title || "Not Describe"}
                                            </h3>
                                        </div>
                                        <div>
                                            <Dropdown className="dropdown-variants-Secondary">
                                                <Dropdown.Toggle variant="drop-down-simple" id="dropdown-basic">
                                                    {toogleMenuItem}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >Expire</Dropdown.Item>
                                                    <Dropdown.Item >Sold</Dropdown.Item>
                                                    <Dropdown.Item >Active</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Card.Title>
                                    <div>
                                        <ul class="card-list-unstyled">
                                            {
                                                data.engine ?
                                                    <li>
                                                        <img src={`${config.PUBLIC_URL}/assets/images/motor.png`} alt="" />  <span>{data.engine}</span>
                                                    </li> :
                                                    null
                                            }
                                            {
                                                <li>
                                                    <img src={`${config.PUBLIC_URL}/assets/images/metre.png`} alt="" />  <span>33 Km</span>
                                                </li>

                                            }
                                            {
                                                data.transmission ?
                                                    <li>
                                                        <img src={`${config.PUBLIC_URL}/assets/images/wheel.png`} alt="" />  <span>{data.transmission}</span>
                                                    </li>
                                                    :
                                                    null
                                            }
                                        </ul>
                                    </div>
                                </Card.Body>
                                <Card.Body className="Card-Bottom">
                                    <div>
                                        <p class="">

                                            <i className="far fa-calendar-alt"></i>   <span className=""> {data.year} </span>
                                        </p>
                                        <ul className="Card-Bottom-Right">
                                            <li>
                                                <a>
                                                    <span>
                                                        <i class="fas fa-pencil-alt"></i>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <span
                                                        className="delete-icon"
                                                    >
                                                        <FaTrash />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>

                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    }
                    )}
                    <div>
                        {loader_mr ?
                            <PostSubmitLoader />
                            :
                            res_message ? <div className="No_Record text_center" >{res_message}</div>
                                :
                                <span class="Search_Page_Load">
                                    <Button
                                        id='image_row'
                                        variant="outline-primary"
                                        onClick={this.loadMoreAds}
                                        className='Load_More'
                                    >
                                        LoadMore
								</Button>
                                </span>
                        }
                    </div>

                </Fragment> :

                    <div className="No_Record text_center" >No Data Found</div>
                }

                <CustomModal onRef={ref => (this.deleteModalRef = ref)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Post</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure you want to Delete the Ad?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            variant="success"
                            onClick={this.onDeleteCancel}
                            variant="outline-primary"
                            className="modal-next"
                        >
                            Close
						</Button>
                        <Button
                            variant="danger"
                            onClick={this.onDeleteTrigger}
                            className="modal-next"
                        >
                            Yes
						</Button>
                    </Modal.Footer>
                </CustomModal> */}
                <div className="notfound">
                    <img src={`${config.PUBLIC_URL}/assets/images/nothingfound.png`} />
                    <h3>Coming Soon </h3>
                </div>
            </Fragment>
        )
    }
}

export default InactiveAds;