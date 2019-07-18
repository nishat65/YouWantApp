import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import config from "../../config";
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

const image_information = [{ url: "image1", city: "Manchester" }, { url: "image2", city: "New York"}, { url: "image3", city: "Melbourne" }, { url: "image1", city: "Melbourne" }, { url: "image1", city: "Manchester" }, { url: "image1", city: "melbourne"}];

const YourCity = props => {
	const settings = {
		arrows: true,
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<section className="your-city back-color-style mb-4">
			<Container>
				<Row>
					<Col className="text-center mb-5">
						<h2 className="sub-tilte">
							Explore Ads By  <span className="color-red">Your City</span>
						</h2>
					</Col>
					<Col md={12} className="slider-side">
						<div className="slider-custom">
							<Slider {...settings}>
								{ image_information.map((item,index)=>{
									 return <div className="crousel-item text-center">
										<div className="zoom-efftect">
											<img src={`${config.PUBLIC_URL}/assets/images/${item.url}.png`} className="city-image" />
											<div class="middle">
												<div class="text">
													 <h3>{item.city}</h3>
													<img src={`${config.PUBLIC_URL}/assets/images/eye.png`} className="eyes-img" />
												</div>
											</div>
										</div>
									</div>
								}
							)
							}
							</Slider>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default YourCity;
