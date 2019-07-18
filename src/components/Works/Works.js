import React ,{Component, Fragment} from "react";
import { Row, Col, Container } from "react-bootstrap";
import config from "../../config";
import { Brands } from "../../components";
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const slide_info = [{
    heading: "What our Clients saying",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Johanson",
    profession : "CTO",

},{
    heading: "What our Clients saying",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    name: "Johanson",
    profession : "CTO",

    }, {
        heading: "What our Clients saying",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        name: "Johanson",
        profession: "CTO",

    }]

class Works extends Component{

    render() {
        return (
            <Fragment>
            <section className="how-it-works pt-5">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h2 className="sub-tilte">
                                How <span className="color-red">Youwant</span> Works
						</h2>
                            <h5 className="sub-heading my-4">
                                Connecting you to right experts,first time and every time
						</h5>
                        </Col>
                    </Row>
                        <Row className="servic-box-text service-box-works-page mt-5 section-bottom">
                        <Col lg={4} md={4} sm={4} xs={12} className="service-box text-center ">
                                <div className="how-it-work how-page-1 img-1">
                                <div className="how-page-img-div"> 
                                        <img src={`${config.PUBLIC_URL}/assets/images/tab_icon1.png`} />
                                </div>
                                <h5>Tell us which car you want to sell</h5>
                                <p>
                                    Make a free account on Youwant and upload your Ad to tell everybody which car you
								want to sell{" "}
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={12} className="service-box text-center curved-line ">
                                <div className="how-it-work how-page-2">
                                    <div className="how-page-img-div img-2"> 
                                        <img src={`${config.PUBLIC_URL}/assets/images/tab_icon2.png`} />
                                    </div>
                                <h5>Tell us which car you want to sell</h5>
                                <p>Seller can search what he want to sell and can contact the respective buyer.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={12} className="service-box text-center ">
                                <div className="how-it-work how-page-3">
                                    <div className="how-page-img-div img-3"> 
                                        <img src={`${config.PUBLIC_URL}/assets/images/tab_icon3.png`} />
                                    </div>
                                <h5>Win Win <br /> Situation</h5>
                                <p>
                                    Seller can find trusted buyers here and buyers can find the quick sellers as per
                                    their budget.
							</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="testimonial-slider-how-it-work mb-5">
                <Container fluid className="whose-image"    >
                        <Row className="whose-image">
                            <Col className="text-center">
                                <h2 className="sub-tilte pt-5">
                                    Who is using <span className="color-red">Youwant?</span> Works
						</h2>
                                <p className="sub-contant my-4">
                                  Browse below reviews, feedback and discover more about the effectiveness of our approach and our result
						</p>
                            </Col>
                        </Row>
                        <Row className="work-slider-outer-div">                   
                                <section className="your-city mb-4">
                                <Slider {...settings}>
                                    {slide_info.map((item, index) => {
                                        return <div>
                                                    <h2 className="pt-5 pb-5">{item.heading}</h2>
                                                    <p className="text-center">{item.description}</p>
                                                    <div className="work-sector-slider-image">
                                                        <img src={`${config.PUBLIC_URL}/assets/images/img4-1.jpg`} />
                                                        <p className="work-sector-slider-image-name mb-1">{item.name}</p>
                                                        <p className="work-sector-slider-image-position">{item.profession}</p>
                                                    </div>
                                                </div>  
                                    })
                                    }
                                    </Slider>
                                </section>
                        </Row>
                </Container>
                </section>
                <section>
                    <Container>
                        <Brands />
                    </Container>
                </section>
            
            </Fragment>
        )
    }
}

export default Works;