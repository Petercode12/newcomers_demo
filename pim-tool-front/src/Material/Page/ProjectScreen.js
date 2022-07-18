import React from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import '../Style/ProjectScreen.css';
import axios from "axios";

function addProject() {
    const projectNumber = document.getElementById('formProjectNumber').value;
    const projectName = document.getElementById('formProjectName').value;
    const status = document.getElementById('formStatus').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const bodyFormData = {"projectNumber": projectNumber,"name": projectName,"finishingDate": endDate,"startDate": startDate,"status": status};
    axios.put('http://localhost:8080/projects/update', bodyFormData)
        .then(res => res.data)
        .catch(err => console.error("Wasn't able to update property.", err));
    console.log(bodyFormData)
}

function required() {
    const projectNumber = document.getElementById('formProjectNumber').value;
    const projectName = document.getElementById('formProjectName').value;
    const customer = document.getElementById('formCustomer').value;
    const group = document.getElementById('formGroup').value;
    const status = document.getElementById('formStatus').value;
    const startDate = document.getElementById('startDate').value;

    if (projectNumber === "" || projectName === "" || customer === "" || group === "" || status === "" || startDate === ""){
        let para = document.createElement("div");
        para.className = "alert alert-danger";
        para.id = "alertChild";
        const node = document.createTextNode("Please enter all the mandatory fields (*)");
        para.appendChild(node);

        let para2 = document.createElement("a");
        para2.href = "#";
        para2.className = "close";
        para2.id = "closeBtn";
        para2.onclick = cancelAlert;
        para2.innerHTML = "&times;";

        const element = document.getElementById("alert");
        para.appendChild(para2);
        element.appendChild(para);

    }
}

function cancelAlert() {
    const element2 = document.getElementById("closeBtn");
    element2.remove();
    const element = document.getElementById("alertChild");
    element.remove();
}
function ProjectScreen() {
    return (
            <div>
                <h2 style={{marginTop:"1em"}}>New Project</h2>
                <hr/>
                <div id="alert"></div>
                <Form className="wholeForm">
                    <Form.Group as={Row} className="mb-3" controlId="formProjectNumber">
                        <Form.Label column sm="2" className="required">Project Number</Form.Label>
                        <Col sm="3">
                            <Form.Control type="text"/>
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
                                <option value="0">New</option>
                                <option value="1">Planned</option>
                                <option value="2">In progress</option>
                                <option value="3">Finished</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" className="required">Start date</Form.Label>
                        <Col sm="3">
                        <Form.Control id="startDate" type="date"/>
                        </Col>
                        <Form.Label column sm="2">End date</Form.Label>
                        <Col sm="3">
                        <Form.Control id="endDate" type="date"/>
                        </Col>
                    </Form.Group>
                </Form>
                <hr/>
                <Button as="input" variant="primary" type="submit" value="Create Project" onClick={() => {required(); addProject()}} />
                <Button as="input" variant="secondary" type="submit" value="Cancel" onClick={() => {window.location.reload();}}/>
            </div>
        )
}

export default ProjectScreen;