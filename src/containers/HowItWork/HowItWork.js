import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BreadCrumb, Works } from "../../components";

class HowItWork extends Component {
    render() {
        const breadCrumbs = [
            {
                url: '/',
                title: 'Home'
            },
            {
                title: 'How it works'
            }
        ]
        return (
            <React.Fragment>
                <div className="breadcrumb-sec">
                    <BreadCrumb
                        breadCrumbs={breadCrumbs}
                    />
                </div>
                <Works />
            </React.Fragment>
        )
    }
}
export default HowItWork;