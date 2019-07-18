import React from "react";
import { RiseLoader } from "react-spinners";

const PostSubmitLoader = props => {
	return (
		<div className="overlay-div">
			<div>
				<RiseLoader loading={props.loading} color="red" />
			</div>
		</div>
	);
};

export default PostSubmitLoader;
