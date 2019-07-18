import React, { Component } from "react";
import { connect } from "react-redux";
import config from "../../config";

class ImageLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    imageLoaded = ()=> {
        this.setState({
            loading: false
        });
    }

    render() {

        const { loading } = this.state;
        const { style={}, src='', className="" } = this.props;
    
        return (
            <div className={`loading-image-grid ${className}`}>
                <img className="View-Details-Images"
                    src={src[0] || `${config.PUBLIC_URL}/assets/images/no-image.png`}
                    alt={"NO_IMAGE_FOUND"}
                    style={{display: loading ? 'none' : 'block', ...style }}
                    onLoad={this.imageLoaded}
                    onError={this.imageLoaded}
                />
                {loading ? <img className="img-loader" src = {require('../../assets/images/loader50.gif')} width = "20"></img> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    translation: state.translation
  };
};

export default connect(mapStateToProps)(ImageLoader);