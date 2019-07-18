import React, { Component } from "react";
import { Tooltip } from "react-bootstrap";

class ErrorToolTip extends Component{
    render() {
        const { error } = this.props; 
        return (
            <React.Fragment>
                <Tooltip
                    placement="bottom"
                    target="TooltipHeading"
                    className="tooltip_error"
                >
                    <span>{error}</span>
                </Tooltip>
            </React.Fragment>
        )
    }
}

export default ErrorToolTip;
