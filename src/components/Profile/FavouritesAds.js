import React, { Component, Fragment } from "react";
import { Card, Col, Modal, Button, Dropdown } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import CustomModal from "../CustomModal/CustomModal";
import action from "../../actions";
import config from "../../config";
import { PostSubmitLoader, ImageLoader } from "../../components";
import ContentLoader, { BulletList } from "react-content-loader";
import types from "../../types";
import store from '../../store';
import { toast } from "react-toastify";

const { dispatch } = store;

class FavouritesAds extends Component{

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

	deleteModalOpen = (id,e) => {
		// e.stopPropagation();
		this.setState({ deletePostId: id });
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

	shouldComponentUpdate(){
		return true;
	}

	loadMoreAds = e => {
		let { myAds } = this.props;
		this.setState({ loader_mr: true });
		action.getMyCars({ id: myAds.length }).then(res => {
			let res_message = res.ads.length ? "" : "No More Record Found"
			this.setState({ loader_mr: false, res_message });
		})
	};

	changeCarStatus = (status, id) => {
        this.setState({ toogleMenuItem: status, loader_mr: true });	
		dispatch({
			type: types.CHANGE_CAR_STATUS_FAVOURITESADS,
			payload: {status ,id }
        });
        action.changeAdStatus({ filter: status, id: id }).then(res => {
            toast.success("Status updated successfully!", {
                position: toast.POSITION.TOP_RIGHT
            });
            this.setState({ loader_mr: false });
        }).catch((error) => {
            toast.error(error.response && error.response.data && error.response.data.message || "Internal Sever Error", {
                className: "toast-danger"
            });
            this.setState({ loader_mr: false });
        })
    }
    
    render() {
        let { FavouritesAds = [], adEdit } = this.props;
        let { loader_mr, res_message, update_loader, toogleMenuItem } = this.state;
        return (
            <Fragment>
                {FavouritesAds.map((data, index) => {
                    return (
                        <Col key={index} lg={4} className="CarDetailsContainer">
                            {loader_mr ?
                                <PostSubmitLoader /> : null}
                        <Card>
                            {/* <Card.Img variant="top" src={`${data.image}`} className="CarDetailsCard" /> */}
                            <ImageLoader src={data.image} />
                            <Card.Body className="card-top">
                                <Card.Title className="mt-3">
                                    <div className="Heading-ads">
                                        <h3
                                            class="profile-car-title"
                                            onClick={adEdit(data._id)}
                                        >
                                            {data.title || "Not Describe"}
                                        </h3>
                                    </div>
                                    {/* <div className="Price">
														<span>$60</span>
													</div> */}
                                    <div>
                                        <Dropdown className="dropdown-variants-Secondary">
                                            <Dropdown.Toggle variant="drop-down-simple" id="dropdown-basic">
                                                {data.status || "Active"}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={e => this.changeCarStatus("Expire", data._id)}>Expire</Dropdown.Item>
                                                <Dropdown.Item onClick={e => this.changeCarStatus("Sold", data._id)}>Sold</Dropdown.Item>
                                                <Dropdown.Item onClick={e => this.changeCarStatus("Active", data._id)}>Active</Dropdown.Item>
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
                                                <span
                                                    onClick={() => this.props.history.push(`/sellyourcar/${data._id}`)}
                                                >
                                                    <i class="fas fa-pencil-alt"></i>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <span
                                                    onClick={(e) => this.deleteModalOpen(data._id, e)}
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
                    )
                })}
                <CustomModal onRef={ref => (this.deleteModalRef = ref)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Post</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p className="text-center">Are you sure you want to Delete the Ad?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            className=" custom-button "
                            onClick={this.onDeleteCancel}
                        >
                            Close
						</Button>
                        <Button
                            // variant="danger"
                            onClick={this.onDeleteTrigger}
                            className="custom-button btn-bg-red"
                        >
                            Yes
						</Button>
                    </Modal.Footer>

                </CustomModal>
            </Fragment>
        )
    }
}

export default FavouritesAds;