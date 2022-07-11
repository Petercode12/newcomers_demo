import React from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import '../Style/ProjectScreen.css';

class ProjectScreen extends React.Component {
    render() {
        return (
            <div>
                <h2 style={{marginTop:"1em"}}>New Project</h2>
                <hr/>
                <Form className="wholeForm">
                    <Form.Group as={Row} className="mb-3" controlId="formProjectNumber">
                        <Form.Label column sm="2" className="required">Project Number</Form.Label>
                        <Col sm="3">
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formProjectName">
                        <Form.Label column sm="2" className="required">Project Name</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formCustomer">
                        <Form.Label column sm="2" className="required">Customer</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formGroup">
                        <Form.Label column sm="2" className="required">Group</Form.Label>
                        <Col sm="3">
                            <Form.Control type="text" as="select">
                                <option>New</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formMembers">
                        <Form.Label column sm="2">Members</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formStatus">
                        <Form.Label column sm="2" className="required">Status</Form.Label>
                        <Col sm="3">
                            <Form.Control type="text" as="select">
                                <option>New</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formDate">
                        <Form.Label column sm="2" className="required">Start date</Form.Label>
                        <Col sm="3">
                        <Form.Control type="date"/>
                        </Col>
                        <Form.Label column sm="2">End date</Form.Label>
                        <Col sm="3">
                        <Form.Control type="date"/>
                        </Col>
                    </Form.Group>
                </Form>
                <hr/>
                <Button as="input" variant="primary" type="submit" value="Create Project" />
                <Button as="input" variant="secondary" type="submit" value="Cancel" />
            </div>
        )
    }
}

export default ProjectScreen;