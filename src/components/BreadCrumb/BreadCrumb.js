import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";

class BreadCrumb extends Component {
    render() {
        return (
            <Container>
                <ul className="bar-breadcrumbs">
                    {this.props.breadCrumbs.map((item, key) => <li key={key} className="breadCrumb-list">
                        {item.url ? <Link to={item.url} title={item.title}> {key !== 0 ? '' : null}{key != 0 ? <span style={{ paddingRight: "10px" }}><i class="fas fa-chevron-right"></i></span> : null}{item.title} </Link> :
                            <span>{key != 0 ? <span style={{ paddingRight: "10px" }}><i class="fas fa-chevron-right"></i></span> : null}{item.title}</span>
                        }
                    </li>)}
                </ul>
            </Container>
        );
    }
}

export default BreadCrumb;