import React, { Component } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { BreadCrumb, InputField, DetailsForm, CarFeatures, TextEditor, CustomModal } from "../../components";
import Dropzone from "react-dropzone";
import LoadingButton from "react-bootstrap-button-loader";
import { EditorState } from 'draft-js';
import { tsConstructSignatureDeclaration, isVariableDeclaration } from "@babel/types";
import actions from "../../actions";
import sellCarValidation from "../../utilities/validations/SellCar";
import { toast } from "react-toastify";

const carinfo = {
    title: "",
    make: "",
    series: [],
    model: [],
    year: [],
    engine: [],
    transmission: [],
    price: "",
    milaege: "",
    color: "",
    registration: "",
    features: [{ key: "ABS", value: 0 }, { key: "Air Bags", value: 0 }, { key: "Air Conditioning", value: 0 },
    { key: "Alloy Rims", value: 0 }, { key: "AM/FM Radio", value: 0 }, { key: "Cassette Player", value: 0 }, { key: "CD Player", value: 0 },
    { key: "Cool Box", value: 0 }, { key: "Cruise Control", value: 0 }, { key: "DVD Player", value: 0 }, { key: "Immobilizer Key", value: 0 },
    { key: "Navigation System", value: 0 }, { key: "Power Locks", value: 0 }, { key: "Power Mirrors", value: 0 }, { key: "Power Steering", value: 0 },
    { key: "Power Windows", value: 0 }, { key: "Reversing Camera", value: 0 }
    ],
    images: [],
    description: "",
    selectedFeatures  : []
}

class SellCar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            information: { ...carinfo },
            loading: false,
            errors: {},
            del_loading: false,
            carInformation : {}
        };
    }

    componentDidMount = () =>{
        let id = this.props.match.params.id;

        actions.getSellCarInformation(id).then(res => {
            this.setState({ carInformation: res });
        }).catch(err => {
            
        })
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        });
    };


    handleChange = (e) => {
        const { name, value } = e.target;
        let { information } = this.state;
        const reg = /^\d*$/;
        
        if ((name === ("price" || "milaege" || "registration")) && !reg.test(value)) {
            return;
        }

        information[name] = value;
        this.setState({ information });
    }

    selectedOption = (option, index) => {
        let { information } = this.state;
        let { features,selectedFeatures } = information;
        if (!option.value) 
            selectedFeatures.push(option);
        else
            for (let i = 0; i < selectedFeatures.length; i++){
                if (option.key === selectedFeatures[i].key) {
                    selectedFeatures.splice(i , 1);
                    break;
                }
            }
        features[index] = { ...features[index], value: !features[index].value }
        option = { ...option, value: !option.value }
        this.setState({ information, selectedFeatures });
    }

    onDrop = (acceptedFiles, rejectedFiles) => {
        let { information } = this.state;
        let { images } = information;
        if (acceptedFiles.length > 0) 
                var imagesUploaded = acceptedFiles.map(file => {
                return Object.assign(file, { preview: URL.createObjectURL(file) });
            });
        images.push(imagesUploaded);

        this.setState({ information });
    }

    cancelImageDropzone = (index) => {
        let { information } = this.state;
        let { images } = information;

        images.splice(index, 1);
        this.setState({ images });
    }

    isValid = (data) => {
        let { errors, isValid } = { ...sellCarValidation(data) };
        this.setState({ errors });
        return isValid;
    }

    savedChanges = () => {
        if(this.isValid(this.state.information)){
            this.setState({ loading: true });
            actions.saveChanges().then(res => {
                this.setState({ loading: false });
            }).catch(err => {
                this.setState({ loading: false });
            })
        }
    }

    deleteAdModalOpen = () => {
        this.deleteModalRef.open();
        return;
    }

    onDeleteTrigger = () => {

        let id = this.props.match && this.props.match.params && this.props.match.params.id || "";
        this.setState({ del_loading: true });
        this.deleteModalRef.close();
        actions
            .deleteAd({ id })
            .then(res => {
                toast.success(res && res.message);
                // actions.getMyCars({ id: 0 });
                this.setState({ del_loading: false });
            })
            .catch(error => {
                toast.error(error.response && error.response.data && error.response.data.message, {
                    className: "toast-danger"
                });
                this.setState({ del_loading: false });
            });
        this.props.history.goBack();
    }

    onDeleteCancel = () => {
        this.deleteModalRef.close();
    }
    
    render() {

        const { editorState, information, loading, errors, del_loading,carInformation } = this.state;
        const { images } = information;
        const breadCrumbs = [
            {
                url: '/',
                title: 'Home'
            },
            {
                url: '/search',
                title: 'Search'
            },
            {
                title: 'Sell Your Car'
            }
        ]
        return (
                <React.Fragment>
                    <div className="breadcrumb-sec">
                        <BreadCrumb
                            breadCrumbs={breadCrumbs}
                        />
                    </div>
                <Container>
                    <div className="sellyourcar">
                    <DetailsForm
                        information={information}
                        handleChange={this.handleChange}
                        errors={errors}
                        carInformation={carInformation || {}}
                        />
                        <CarFeatures
                            information={information}
                            selectedOption = {this.selectedOption}
                        />
                        <Row style={{margin : "24px 0px 24px 0px"}}>
                            <p>
                                <span className="bold-heading">Photos for your ad   </span>
                                <span className="bold-heading-right">Only allowed jpg, png and jpeg and max file will not more than 800kb</span>
                            </p>
                            <p  className="sellcar-dropzone">
                                <Dropzone
                                    accept="image/*"
                                    onDrop={this.onDrop}
                                    disablePreview={false}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <p>Drag 'n' drop some files here, or click to select files</p>
                                            </div>
                                            <div className="drop-zone-image">
                                                {images.map((file, index) => {
                                                    return <React.Fragment>
                                                        <img key={index} src={file[0].preview || ""} />
                                                        <div className="button-close">
                                                            <Button
                                                                variant="outline-dark"
                                                                onClick={e => this.cancelImageDropzone(index)}
                                                            >Cancel</Button>
                                                        </div>
                                                    </React.Fragment>
                                                } )}
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </p>
                    </Row>
                    <Row>
                        <TextEditor
                            editorState={editorState}
                            onEditorStateChange={this.onEditorStateChange}
                        />
                    </Row>
                                <Row className="mt-3">
                                    <Col lg={6} className="sellcar-delete">
                                        <LoadingButton
                                    className="rect-button  custom-button"
                                            onClick={this.deleteAdModalOpen}
                                            loading={del_loading}
                                        >Delete Ad</LoadingButton>
                                    </Col>
                                    <Col lg={6} className="sellcar-delete edit-sellcar">
                                        <div style={{float:"right"}}>
                                            <LoadingButton
                                        className="rect-button  custom-button"
                                                onClick={this.savedChanges}
                                                loading={loading}
                                            >Saved Ad</LoadingButton>
                                        </div>
                                    </Col>
                                </Row>
                    <CustomModal onRef={ref => (this.deleteModalRef = ref)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Post</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p className="text-center">Are you sure you want to Delete the Ad?</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button
                                variant="success"
                                onClick={this.onDeleteCancel}
                                variant="outline-primary"
                                className="modal-next"
                            >
                                Close
						</Button>
                            <Button
                                variant="danger"
                                onClick={this.onDeleteTrigger}
                                className="modal-next"
                            >
                                Yes
						</Button>
                        </Modal.Footer>
                        </CustomModal>
                    </div>
                        </Container>
            </React.Fragment>
        )
    }
}

export default SellCar;