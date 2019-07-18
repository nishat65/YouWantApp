import React, { Component } from "react";
import config from "../../config";
import { Row, Col, Button , Container } from "react-bootstrap";
import Slider from "react-slick";

const settings = {
	arrows: false,
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const image_url = ["logo1", "logo2", "logo3", "logo4", "logo5", "logo6"];

const Brands = props => (
	<section className="section-bottom">
	<Container>
      <h2 className="sub-tilte text-center">
			Top <span className="color-red">Brands</span>
	</h2>
		<div className="mb-5">
			<Slider {...settings}>
			
					<ul className="brand-logo-img">
						{image_url.map((item, index) => {
							return <li className="brand-logo">
								<img src={`${config.PUBLIC_URL}/assets/images/${item}.png`} />
							</li>
						})}
					</ul>
					<ul className="brand-logo-img">
						{image_url.map((item, index) => {
							return <li className="brand-logo">
								<img src={`${config.PUBLIC_URL}/assets/images/${item}.png`} />
							</li>
						})}
					</ul>
				
			</Slider>
		</div>
		</Container>
	</section>
);

export default Brands;
