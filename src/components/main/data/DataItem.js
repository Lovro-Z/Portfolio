import React, {Component} from "react";
import './data.css';
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";

class DataItem extends Component {
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };


    render() {
        const formattedDate = new Date(this.props.dataItem.released).toDateString();
        return (
            <ListGroup className="data-item">
                <ListGroup.Item action variant="primary" onClick={this.showModal}>{ this.props.dataItem.name }</ListGroup.Item>

                <Modal show={this.state.show} onHide={this.hideModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{ this.props.dataItem.name }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Author: <b>{ this.props.dataItem.authors }</b></p>
                        <p>Number of pages: <b>{ this.props.dataItem.numberOfPages }</b></p>
                        <p>Release date: <b>{ formattedDate }</b></p>
                    </Modal.Body>
                </Modal>

            </ListGroup>
        );
    }
}

export default DataItem;
