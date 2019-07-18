import React, { Component, Fragment } from "react";
import Dropzone from "react-dropzone";
import { Button, Tooltip } from "react-bootstrap";

class Step2 extends Component {
	render() {
		const { cancelImageDropzone, onDrop, imagePreview, toolTipMessage, toolTipShow } = this.props;
		return (
			<div>
				<h5>Please Upload Image</h5>
				{toolTipShow ? (
					<Tooltip
						placement="bottom"
						target="TooltipHeading"
						className="tooltip_error dropzone_toolTip_error"
					// id="tooltip-right"
					>
						<span>{toolTipMessage}</span>
					</Tooltip>
				) : null}
				<Dropzone
					onDrop={onDrop}
					accept="image/*"
					disablePreview={false}
					multiple={true}
					style={{
						background: "#00000008",
						minHeight: "25rem",
						border: "10px dotted #c2c2c2",
						borderRadius: 3,
						marginTop: "5%",
						// marginBottom:160,
						marginRight: "10%",
						marginLeft: "10%",
						padding: 20,
						paddingTop: "0%",
						cursor: "pointer"
					}}>
					{({ getRootProps, getInputProps }) => (
						<section className="drag-drop">
							<div {...getRootProps()} className="drag-drop-inner">
								<input {...getInputProps()} />
								<p>Drag 'n' drop some files here, or click to select files</p>
							</div>
							<div className="drop-zone-image">
								{imagePreview.map((file, index) => {
									return <React.Fragment>
										<img key={index} src={file.preview || ""} />
										<div className="button-close">
											<Button
												variant="outline-dark"
												onClick={cancelImageDropzone}
											>Cancel</Button>
										</div>
									</React.Fragment>
								})}
							</div>

						</section>
					)}
				</Dropzone>
			</div>
		);
	}
}

export default Step2;
