import React, { PureComponent, Fragment } from 'react';
import { scrollIntoView } from "../../utils";

export default class ScrollRestoration extends PureComponent {
    componentDidMount() {
          scrollIntoView('root');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.pathname != this.props.location.pathname) {
            scrollIntoView('root');
        }
    }

    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}