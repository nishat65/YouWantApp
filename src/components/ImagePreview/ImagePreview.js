import React, { Component } from "react";
import Slider from "react-slick";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

let images = ["http://demos.ths.agency/youwant/wp-content/uploads/2019/06/green.png"];

class ImagePreview extends Component{

    state = {
        isOpen: false,
        photoIndex: 0
    }

    openImageViewer = () => {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen }, () => {
        });
    }

    render() {
        let { isOpen, photoIndex } = this.state;
        return (
            <React.Fragment>
                <Slider
                    {...settings}
                >
                    <img
                        src="http://demos.ths.agency/youwant/wp-content/uploads/2019/06/green.png"
                        style={{ width: "100%" }}
                        className="small-image"
                        onClick={() => this.openImageViewer()}
                    />
                </Slider>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}


            </React.Fragment>
        )
    }
}

export default ImagePreview;