import React, { Component, Fragment } from "react";
import { Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaRegCopyright } from "react-icons/fa";
import config from "../../config";
import {Link} from "react-router-dom";

class Footer extends Component {
	render() {
		return (
			<section className="cus-footer">
			
				<div className="footer-logo">
				<Link to="/">
						<img src={`${config.PUBLIC_URL}/assets/images/logo.png`} />
				</Link>
				</div>
			
					<p className="text-grey">An amazing platform to connect with genuine seller.</p>
				
				<div className="footer-social">
					<ul>
						<li className="footer-icon-container">
							<a href=""><FaFacebookF /></a>
						</li>
						<li className="footer-icon-container">
							<a href=""><FaInstagram /></a>
						</li>
						<li className="footer-icon-container">
							<a href=""><FaTwitter /></a>
						</li>
						<li className="footer-icon-container">
							<a href=""><FaPinterestP /></a>
						</li>
					</ul>
				</div>
				<div className="footer-links">
					<ul>
						<Link to="/">
						<li className="footer-link">
							   Home
							</li>
						</Link>
						<Link to="howitwork">
							<li className="footer-link">
								How it works
							</li>
						</Link>
						<Link to="/about_us">
								<li className="footer-link">
									About Us
								</li>
						</Link>
						<Link to="/contact_us">
							<li className="footer-link">
								Contact Us
							</li>
						</Link>

					</ul>
				</div>
				<div className="copy-right">

				
	
					<span className="text-grey">© 2019 YouWant Pvt Ltd. All Rights Reserved</span>
				</div>
			</section>
		);
	}
}

export default Footer;
