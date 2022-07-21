import React from 'react';
import {Button, Col, Form, Nav, Row} from 'react-bootstrap';
import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from "axios";
import Select from "react-select";

function updateProject(project, memberOps) {
    /*eslint-disable */
    const projectId = project.id
    const projectNumber = document.getElementById('formProjectNumber').value;
    const projectName = document.getElementById('formProjectName').value;
    const customer = document.getElementById('formCustomer').value;
    const group = document.getElementById('formGroup').value;
    const status = document.getElementById('formStatus').value;
<<<<<<< Updated upstream
    const startDate = document.getElementById('formDate').value;
    const bodyFormData = {"id": projectId, "projectNumber": projectNumber,"name": projectName, "customer": customer, "startDate": startDate,"status": status};
    axios.put('http://localhost:8080/projects/update', bodyFormData)
        .then(res => res.data)
        .catch(err => console.error("Wasn't able to update property.", err));
    alert("Successfully save");
=======
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const bodyFormData = {"id": projectId,"projectNumber": projectNumber,"name": projectName, "customer": customer, "groupId": group, "finishingDate": endDate,"startDate": startDate,"status": status, "memberVisa": memberOps};
    axios.put('http://localhost:8080/projects/update', [bodyFormData, project])
        .then(res => res.data)
        .catch(err => {
            console.error("Wasn't able to update property.", err);
            alert("Cannot update! The project was changed by another thread")
        });
    alert("Are you sure to save changes?");
}

function required() {
    const projectName = document.getElementById('formProjectName').value;
    const customer = document.getElementById('formCustomer').value;
    const group = document.getElementById('formGroup').value;
    const status = document.getElementById('formStatus').value;
    const startDate = document.getElementById('startDate').value;

    if (projectName === "" || customer === "" || group === "" || status === "" || startDate === ""){
        if (projectName === "") {
            const inputField = document.getElementById("formProjectName");
            inputField.style.border = "1px solid #fd7676";
        }
        if (customer === "") {
            const inputField = document.getElementById("formCustomer");
            inputField.style.border = "1px solid #fd7676";
        }
        if (group === "") {
            const inputField = document.getElementById("formGroup");
            inputField.style.border = "1px solid #fd7676";
        }
        if (startDate === "") {
            const inputField = document.getElementById("startDate");
            inputField.style.border = "1px solid #fd7676";
        }

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
        return false;
    }
    return true;
}

function cancelAlert() {
    const element2 = document.getElementById("closeBtn");
    element2.remove();
    const element = document.getElementById("alertChild");
    element.remove();
>>>>>>> Stashed changes
}

function EditProject() {
    const [post, setPost] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/users/search')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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

    const memberOptions = [];
    for (const user of users){
        if (user.visa !== null) {
            memberOptions.push({value: user.id, label: user.visa.concat(": " + user.username.toString())});
        }
    }

    let memberOps = null;
    const onChange = (ops) => {
        console.log(ops);
        if (ops !== null) {
            let s = "";
            for (const op of ops) {
                s += op.label.split(":")[0].concat(", ");
            }
            memberOps = s.slice(0, -2);
        }
        else {
            memberOps = null;
        }
    }

    return (
            <div>
                <Nav.Link href="/" className="back">
                    <p className="text-semi-bold first-element">
                        <i className="fa fa-angle-left"></i> Back
                    </p>
                </Nav.Link>
                <h2 style={{marginTop:"0.5em"}}>Edit Project information</h2>
                <hr/>
<<<<<<< Updated upstream
                <Form className="wholeForm">
                    <Form.Group as={Row} className="mb-3" controlId="formProjectNumber">
                        <Form.Label column sm="2">Project Number</Form.Label>
                        <Col sm="3">
                            <Form.Control disabled="disabled" type="text" defaultValue={post.projectNumber}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formProjectName">
                        <Form.Label column sm="2">Project Name</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue={post.name}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formCustomer">
                        <Form.Label column sm="2">Customer</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" defaultValue={post.customer}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formStatus">
                        <Form.Label column sm="2">Status</Form.Label>
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
                        <Form.Label column sm="2">Start date</Form.Label>
                        <Col sm="3">
                            <Form.Control type="date" defaultValue={post.startDate}/>
                        </Col>

                    </Form.Group>
                </Form>
=======
                <div id="alert">
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

                        <Form.Group as={Row} className="mb-3" controlId="formGroup">
                            <Form.Label column sm="2" className="required">Group</Form.Label>
                            <Col sm="3">
                                <Form.Control type="text" as="select">
                                    <option value="">Select group</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formMembers">
                            <Form.Label column sm="2">Members</Form.Label>
                            <Col sm="10">
                                <Select
                                    isMulti
                                    name="colors"
                                    options={memberOptions}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange = {onChange}
                                />
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
                                <Form.Control id="startDate" type="date" defaultValue={post.startDate}/>
                            </Col>
                            <Form.Label column sm="2" style={{left: "5em"}}>End date</Form.Label>
                            <Col sm="3">
                                <Form.Control id="endDate" type="date"/>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
>>>>>>> Stashed changes
                <hr/>
                <Button as="input" variant="primary" type="submit" value="Save" onClick={() => {
                    if(required()) {
                        updateProject(post, memberOps);

                    }
                }}/>
            </div>
        )
}

export default EditProject;