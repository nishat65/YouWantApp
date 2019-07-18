import React,{Component} from "react";
import { Container } from "react-bootstrap";
import { AuthorDetails } from "../../components";

class Author extends Component{
    render() {
        return (
            <Container>
                <AuthorDetails {...this.props}/>
            </Container>
        )
    }
}

export default Author;  