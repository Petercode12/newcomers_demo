import React from 'react';
import {Button, Col, Form, Nav, Row} from 'react-bootstrap';

class EditProject extends React.Component {
    render() {
        return (
            <div>
                <Nav.Link href="/" className="back">
                    <p className="text-semi-bold first-element">
                        <i className="fa fa-angle-left"></i> Back
                    </p>
                </Nav.Link>
                <h2 style={{marginTop:"0.5em"}}>Edit Project information</h2>
                <hr/>
                <Form className="wholeForm">
                    <Form.Group as={Row} className="mb-3" controlId="formProjectNumber">
                        <Form.Label column sm="2">Project Number</Form.Label>
                        <Col sm="3">
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formProjectName">
                        <Form.Label column sm="2">Project Name</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formCustomer">
                        <Form.Label column sm="2">Customer</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formStatus">
                        <Form.Label column sm="2">Status</Form.Label>
                        <Col sm="3">
                            <Form.Control type="text" as="select">
                                <option>New</option>
                                <option>Finished</option>
                                <option>In progress</option>
                                <option>Planned</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formDate">
                        <Form.Label column sm="2">Start date</Form.Label>
                        <Col sm="3">
                            <Form.Control type="date"/>
                        </Col>

                    </Form.Group>
                </Form>
                <hr/>
                <Button as="input" variant="primary" type="submit" value="Save" />
            </div>
        )
    }
}

export default EditProject;