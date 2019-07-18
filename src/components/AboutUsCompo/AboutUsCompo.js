import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import config from "../../config";
import Slider from "react-slick";
import ReactStars from 'react-stars'

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

const Features = ["Transmission", "Steering", "Engine", "Tires", "Lightning", "Interior", "Suspension", "Exterior", "Brakes", "Air Conditioning", " Engine Diagnostics","Wheel Alignment"];

const slick_info = [
    {
    head: "Awesome ! Loving It",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam quis notru.",
    name: "Emily Cooper",
        profile: "CTO",
        image_url:"http://demos.ths.agency/youwant/wp-content/uploads/2017/06/1-14-1-90x90.jpg"
    },
    {
        head: "Awesome ! Loving It",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam quis notru.",
        name: "Emily Cooper",
        profile: "CTO",
        image_url: "http://demos.ths.agency/youwant/wp-content/uploads/2017/06/1-14-1-90x90.jpg"
    },
    {
        head: "Awesome ! Loving It",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam quis notru.",
        name: "Emily Cooper",
        profile: "CTO",
        image_url: "http://demos.ths.agency/youwant/wp-content/uploads/2017/06/1-14-1-90x90.jpg"
    },
    {
        head: "Awesome ! Loving It",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam quis notru.",
        name: "Emily Cooper",
        profile: "CTO",
        image_url: "http://demos.ths.agency/youwant/wp-content/uploads/2017/06/1-14-1-90x90.jpg"
    }
]

class AboutUsCompo extends Component {
    render() {
        const settings = {
            arrows: true,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };

        const brandsSetting = {
            arrows: true,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        }

        return (
            <div className="about">
            <Container>
                <Row>
                    <Col sm={5} className="pt-5">
                        <div className="abt-tit" >
                            <ul className="abt-tit-ulnk">
                                <div className="under-border" />
                                <div className="under-border-2div pt-2 mb-3" />
                                <li>
                                    <i class="fas fa-arrow-right"></i>
                                    Extend the life of your car
                                </li>
                                <li>
                                    <i class="fas fa-arrow-right"></i>
                                    Extend the life of your car
                                </li>
                                <li>
                                    <i class="fas fa-arrow-right"></i>
                                    Keep Your Engine Cool
                                </li>
                                <li>
                                    <i class="fas fa-arrow-right"></i>
                                    Extend the life of your car
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={7} className="pt-5">
                        <div className="abt-rts">
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit Perfer repudiandae nostrum alias quibusdam</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisic.Min commodi enim nemo illum repellendus accusantium
                                maiores itu delectus doloribus alias ea quisquam cum nullavolupta delectu.</p>
                            <p>nobis eius, deleniti dicta molestiae atque. Exercitationem odit dolor cumque facilis natus recusandae
                                id, dolorum modi ducimus minus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue justo scelerisque mattis iaculis.
                                 Maecenas vestibulum faucibus enim scelerisque egestas. Praesent aliquet id hendrerit id, hendrerit ac odio.
                                  In dui mauris, auctor vel vestibulum vitae, tincidunt id mi.</p>

                        </div>
                    </Col>
                </Row>
                

                    <Row className="mt-4 center">
                    <Col sm={12} className="md-part">
                        <Row>
                            <Col sm={3}>
                                <div>
                                    <i class="glyph-icon flaticon-wheel"></i>
                                </div>
                                <div className="number">
                                    <span className="num">1780</span>
                                </div>
                                <h4>Total&nbsp; <span className="text-danger">Cars</span></h4>
                            </Col>
                            <Col sm={3}>
                                <div>
                                    <i class="glyph-icon flaticon-shield"></i>
                                </div>
                                <div className="number">
                                    <span className="num">820</span>
                                </div>
                                <h4>Verified&nbsp; <span className="text-danger">Dealers</span></h4>
                            </Col>
                            <Col sm={3}>
                                <div>
                                    <i class="glyph-icon flaticon-heart"></i>
                                </div>
                                <div className="number">
                                    <span className="num">750</span>
                                </div>
                                <h4>Active&nbsp; <span className="text-danger">Users</span></h4>
                            </Col>
                            <Col sm={3}>
                                <div>
                                    <i class="glyph-icon flaticon-idea"></i>
                                </div>
                                <div className="number">
                                    <span className="num">55</span>
                                </div>
                                <h4>Features&nbsp; <span className="text-danger">Ads</span></h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="md-ca">
                    <Col xs={4} className="no-padding mid-card">
                        <div className="why-us border-box text-center">
                            <h5>Why Choose Us</h5>
                            <p>Mauris eros tortor, tristique cursus porttitor et, luctus sed urna. Quisque id libero risus.
                                Aliquam accumsan erat id sem placerat tempus.</p>
                        </div>

                    </Col>
                    <Col xs={4} className="no-padding mid-card">
                        <div className="why-us border-box text-center">
                            <h5>Our Mission</h5>
                            <p>Mauris eros tortor, tristique cursus porttitor et, luctus sed urna. Quisque id libero risus.
                                Aliquam accumsan erat id sem placerat tempus.</p>
                        </div>
                    </Col>
                    <Col xs={4} className="no-padding mid-card">
                        <div className="why-us border-box text-center">
                            <h5>Only Creative Solutions</h5>
                            <p>Mauris eros tortor, tristique cursus porttitor et, luctus sed urna. Quisque id libero risus.
                                Aliquam accumsan erat id sem placerat tempus.</p>
                        </div>
                    </Col>
                </Row>
                </Container>
                    <section className="engine-diagnostic-list">
                    <Container>
                        <Row className=""> 
                            <Col sm={4} className="engine-development">
                            </Col>
                            <Col sm={8} className="engine-development-cards">
                                <Row>
                                    <Col sm={6} className="pt-5 pl-5">
                                            <h3>01</h3>
                                            <p className="pt-3">
                                            <span>Engine Diagnostic</span>
                                               <i class="glyph-icon flaticon-conveyor"></i>
                                            </p>
                                            <p className="pt-1">We have the right caring, experience and dedicated professional for you.</p>
                                    </Col>
                                    <Col sm={6} className="pt-5 pl-5">
                                        <h3>02</h3>
                                        <p className="pt-3">
                                            <span>Wheel Alignment</span>
                                            <i class="glyph-icon flaticon-wheel"></i>
                                        </p>
                                        <p className="pt-1">We have the right caring, experience and dedicated professional for you.</p>
                                    </Col>
                                    <Col sm={6} className="pt-5 pl-5">
                                        <h3>03</h3>
                                        <p className="pt-3">
                                            <span>Oil Changing</span>
                                            <i class="glyph-icon flaticon-model"></i>
                                        </p>
                                        <p className="pt-1">We have the right caring, experience and dedicated professional for you.</p>
                                    </Col>
                                    <Col sm={6} className="pt-5 pl-5">
                                        <h3>04</h3>
                                        <p className="pt-3">
                                            <span>Steering & Suspension</span>
                                            <i class="glyph-icon flaticon-car-1"></i>
                                        </p>
                                        <p className="pt-1">We have the right caring, experience and dedicated professional for you.</p>
                                    </Col>
                               </Row>
                            </Col>
                        </Row>
                    </Container>
                    </section>
                <Container>   
                    <Row>
                        <section className="your-city mb-4 pt-0">
                            <h2 className="sub-tilte text-center mb-4">
                                <span className="color-red">Testimonial</span>
                            </h2>
                        <Slider {...settings}>
                            {slick_info.map((item, index) => {
                             return <div className="crousel-item">
                                         <div className="slider-testimonial">
                                            <div class="single_testimonial">
                                                <div class="textimonial-content">
                                                    <h4>{item.head}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                                <div class="testimonial-meta-box">
                                                    <img src={item.image_url} className="city-image" />
                                                    <div class="testimonial-meta">
                                                        <h3>{item.name}</h3>
                                                        <p>{item.profile}</p>
                                                        <ReactStars
                                                            count={5}
                                                            // onChange={()=>ratingChanged}
                                                            value={5}
                                                            size={24}
                                                            color2={'#ffd700'} />
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            })}                           
                        </Slider>
                    </section>
                </Row>
                <Row className="mb-4">
                        <Col md={12} className="mb-4">
                            <h2 className="sub-tilte text-center mb-4">
                                Top <span className="color-red">Brands</span>
                            </h2>
                        <Slider {...brandsSetting}>
                            <div>
                                <img src={`${config.PUBLIC_URL}/assets/images/client_4-1.png`} class="img-responsive" alt="clients"></img>
                            </div>
                             <div>
                                <img src={`${config.PUBLIC_URL}/assets/images/client_1-1-1.png`} class="img-responsive" alt="clients"></img>
                            </div>
                             <div>
                                <img src={`${config.PUBLIC_URL}/assets/images/client_2-1.png`} class="img-responsive" alt="clients"></img>
                            </div>
                             <div>
                                <img src={`${config.PUBLIC_URL}/assets/images/client_3-1.png`} class="img-responsive" alt="clients"></img>
                            </div>
                             <div>
                                <img src={`${config.PUBLIC_URL}/assets/images/client_4-1.png`} class="img-responsive" alt="clients"></img>
                            </div>
                        </Slider>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12}>
                            <h2 className="sub-tilte text-center mb-4">
                                <span className="color-red mb-4">Features</span>
                            </h2>
                        <ul className="features-list">
                            {
                                Features.map((item, index) => {
                                    return <li className="col-sm-4">
                                        <i class="fas fa-check mr-2" style={{ color:"#0ebf00"}}></i>  
                                        {item}
                                        </li>
                                })
                            }
                        </ul>
                    </Col>
                </Row>
                </Container> 
            </div>
        )
    }
}

export default AboutUsCompo;