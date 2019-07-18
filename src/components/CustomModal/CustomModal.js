import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import config from "../../config";
import { withRouter } from "react-router-dom";
class CustomModal extends Component {
	state = {
		openModal: false
	};

	componentDidMount() {
		if (this.props.onRef) {
			this.props.onRef(this);
		}
	}
	open = () => {
		this.setState({ openModal: true });
	};
	close = () => {
		this.setState({ openModal: false });
	};

	render() {
		let { openModal } = this.state;
		return (
			<Modal show={openModal} size="mini" onHide={this.close} centered>
				{this.props.children}
			</Modal>
		);
	}
}
export default CustomModal;
