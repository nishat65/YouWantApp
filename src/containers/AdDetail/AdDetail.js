import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ImagePreview, DetailsSidebar, CarInformation, Description, BreadCrumb } from "../../components";
import actions from "../../actions";

class AdDetail extends Component {

    componentDidMount() {
        let id = this.props.match && this.props.match.params && this.props.match.params.id || "";
        
        actions.getCardDetails(id).then(res => {
            
        }).catch (err => {
            
        });
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
                title : 'Car Information'
            }
        ]

        return (
            <React.Fragment>
                <div className="breadcrumb-sec">
                    <BreadCrumb
                        breadCrumbs={breadCrumbs}
                    />
                </div>
                <Container>
                        <Row>
                            <Col xs={8}>
                                <ImagePreview />
                            </Col>
                            <Col xs={4}>
                            <DetailsSidebar  {...this.props}/>
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col xs={12}>
                                FoR BElow Images
                            </Col>
                        </Row> */}
                        <Row>
                            <Col xs={12}>
                                <div>
                                    <CarInformation />
                                </div>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} className="">
                                <Description />
                            </Col>
                        </Row>
                 </Container>
            </React.Fragment>
       )
   }
}

export default AdDetail;