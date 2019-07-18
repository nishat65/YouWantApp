import React, { Component } from "react";
import { Confirmation } from "../../components";
import { Row } from "react-bootstrap";

class ConfirmContainer extends Component{

    componentDidMount() {
        const { token = "" } = this.props.match.params;
        const passwordVerification = this.props.match.path.includes('/confirm_user');
        if (passwordVerification && token) {
            // actions.verifyEmail(token)
            //     .then((res) => {
            //         toast.success(res.message), {
            //             position: toast.POSITION.TOP_RIGHT
            //         }
            //     })
        }
    }

    render() {
        return (
            <Row>
                <Confirmation />
            </Row>
        )
    }
}

export default ConfirmContainer;