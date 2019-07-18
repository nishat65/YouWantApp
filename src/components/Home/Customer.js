import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import config from "../../config";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
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
const Customer = props => {
	const settings = {
		arrows: true,
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<section className="customer section-bottom mt-5">
			<Container>
				<Row>
					<Col md={12} lg={6}>
						<h2 className="sub-tilte mb-3">
							What our<span className="color-red"> customer </span>say
						</h2>

						<p className="customer-text">Browse below reviews, feedback and discover more about the effectiveness of our approch
						and our result.</p>
						<p>
							Browse below reviews, feedback and discover more about the effectiveness of our
							approch and our result. Browse below reviews, feedback and discover more about the
						</p>

					</Col>
					<Col md={12} lg={6} className="slider-side">
						<div className="slider-custom">
							<Slider {...settings}>
								<div className="crousel-item text-center">
									<img src={`${config.PUBLIC_URL}/assets/images/client.png`} />
									<p>
										"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
						     	</p>
									<span className="color-red"> John Doe </span>
								</div>
								<div className="crousel-item text-center">
									<img src={`${config.PUBLIC_URL}/assets/images/client.png`} />
									<p>
										"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
						     	</p>
									<span className="color-red"> John Doe </span>
								</div>
								<div className="crousel-item text-center">
									<img src={`${config.PUBLIC_URL}/assets/images/client.png`} />
									<p>
										"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
						     	</p>
									<span className="color-red"> John Doe </span>
								</div>
							</Slider>
						</div>

					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default Customer;
