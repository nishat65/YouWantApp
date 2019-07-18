import React from "react";
import ContentLoader, { BulletList } from "react-content-loader";
const QuotesLoader = props => {
	return [...Array(parseInt(props.no))].map((value, index) => {
		return (
			<div key={index} className="custom-bullet">
				<ContentLoader height={25}>
					<circle cx="10" cy="20" r="5" />
					<rect x="25" y="15" rx="5" ry="5" width="360" height="10" />
				</ContentLoader>
			</div>
		);
	});
};
export default QuotesLoader;
 