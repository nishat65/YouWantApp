import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { AboutUsCompo, BreadCrumb } from "../../components";

class AboutUs extends Component{
    render() {
        const breadCrumbs = [
            {
                url: '/',
                title: 'Home'
            },
            {
                title: 'About Us'
            }
        ]
        return (
            <React.Fragment>
                <div className="breadcrumb-sec">
                    <BreadCrumb
                        breadCrumbs={breadCrumbs}
                    />
                </div>
                <AboutUsCompo/>
            </React.Fragment>
        )
    }
}

export default AboutUs;