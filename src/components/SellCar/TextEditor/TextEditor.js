import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class TextEditor extends Component{
    render() {
        const { editorState, onEditorStateChange } = this.props;
        return (
                <Col lg={12} className="add-description">
                    <strong className="mt-3" >Ad Description </strong>
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                    />
                </Col>
        )
    }
}

export default TextEditor;