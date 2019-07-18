import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
function SampleNextArrow(props) {
	const { className, style, onClick } = props;

	return (
		<IoIosArrowForward
			className={className}
			size={90}
			fill=""
			style={{ ...style, display: "block", width: "auto" }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<IoIosArrowBack
			className={className}
			fill=""
			style={{ ...style, display: "block" }}
			onClick={onClick}
		/>
	);
}

const ExploreAd = props => {
	const settings = {
		arrows: true,
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	};
	return (
		<section className="explore-ads">
			<div className="header">
				<h2 className="section-title">
					Explore Ads By Your City <span className="color-red">Your City</span>
				</h2>
				<h4 className="sub-heading">Connecting you to right experts,first time and every time</h4>
			</div>
			<div>
				<Slider {...settings}>
					<div className="crousel-item">
						<h3>1</h3>
					</div>
					<div className="crousel-item">
						<h3>2</h3>
					</div>
					<div className="crousel-item">
						<h3>3</h3>
					</div>
					<div className="crousel-item">
						<h3>4</h3>
					</div>
					<div className="crousel-item">
						<h3>5</h3>
					</div>
					<div>
						<h3>6</h3>
					</div>
					<div>
						<h3>7</h3>
					</div>
					<div>
						<h3>8</h3>
					</div>
					<div>
						<h3>9</h3>
					</div>
				</Slider>
			</div>
		</section>
	);
};
export default ExploreAd;
