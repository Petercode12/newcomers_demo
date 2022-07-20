import React from 'react';
import {Button, Col, Form, Nav, Row} from 'react-bootstrap';
import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from "axios";

function updateProject(project) {
    const projectId = project.id
    const projectNumber = document.getElementById('formProjectNumber').value;
    const projectName = document.getElementById('formProjectName').value;
    const customer = document.getElementById('formCustomer').value;
    const status = document.getElementById('formStatus').value;
    const startDate = document.getElementById('formDate').value;
    const bodyFormData = [{"id": projectId, "projectNumber": projectNumber,"name": projectName, "customer": customer, "startDate": startDate,"status": status}, project];
    axios.put('http://localhost:8080/projects/update', bodyFormData)
        .then(res => res.data)
        .catch(err => {
            console.error("Wasn't able to update property.", err);
            alert("Cannot update! The project was changed by another thread")
        });
    alert("Successfully save");
}

function EditProject() {
    const [post, setPost] = useState([])
    const params = useParams();
    console.log(post)
    useEffect(() => {
        axios.get('http://localhost:8080/projects/search')
            .then(res => {
                console.log(res)
                setPost(res.data.filter((post) => post.id === parseInt(params.id))[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
                        <Form.Label column sm="2" className="required">Project Number</Form.Label>
                        <Col sm="3">
                            <Form.Control disabled="disabled" type="text" defaultValue={post.projectNumber}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formProjectName">
                        <Form.Label column sm="2" className="required">Project Name</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue={post.name}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formCustomer">
                        <Form.Label column sm="2" className="required">Customer</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue={post.customer}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formStatus">
                        <Form.Label column sm="2" className="required">Status</Form.Label>
                        <Col sm="3">
                            <Form.Control type="text" as="select">
                                <option value="0">New</option>
                                <option value="1">Planned</option>
                                <option value="2">In progress</option>
                                <option value="3">Finished</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formDate">
                        <Form.Label column sm="2" className="required">Start date</Form.Label>
                        <Col sm="3">
                            <Form.Control type="date" defaultValue={post.startDate}/>
                        </Col>

                    </Form.Group>
                </Form>
                <hr/>
                <Button as="input" variant="primary" type="submit" value="Save" onClick={() => {updateProject(post)}}/>
            </div>
        )
}

export default EditProject;