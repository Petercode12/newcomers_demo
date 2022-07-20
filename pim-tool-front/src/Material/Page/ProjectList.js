import React, {useState, useEffect} from 'react';
import '../Style/ProjectList.css';
import 'react-pagination-bar/dist/index.css'
import {Button, Col, Form, FormCheck, Nav, Row, Table} from "react-bootstrap";
import axios from "axios";
import ReactPaginate from "react-paginate";

function deleteProject(project) {
    console.log(project)
    axios.post('http://localhost:8080/projects/remove', project)
        .then(res => res.data)
        .catch(err => { console.error("Wasn't able to delete property.", err); alert("Cannot delete! The project does not exist")});
}

function ProjectList() {
    const [posts, setPosts] = useState([])
    const [tempPosts, setTempPosts] = useState([])
    const [postsDel, setPostsDel] = useState([])
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/projects/search')
            .then(res => {
                console.log(res)
                setPosts(res.data)
                setTempPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(posts);
    const pagePostsLimit = 8;

    const handleFilter = () => {
        if (document.getElementById('filterByStatus').value !== "select status") {
            const filtered = posts.filter((post) => post.status === document.getElementById('filterByStatus').value);
            setPosts(filtered);
        }
    };
    const removeElementById = (id) => {
        const postsAfterRemove = posts.filter((post) => post.id !== id);
        setPosts(postsAfterRemove);
    }
    const removeElementsById = (ids) => {
        const postsAfterRemove = posts.filter((post) => !ids.includes(post.id));
        setPosts(postsAfterRemove);
    }
    const deleteBtn = (post) => {
        if(post.status === "NEW") {
            return <button className="fa fa-trash" style={{
                color: "red",
                backgroundColor: "white",
                border: 0
            }} onClick={() => {
                alert("You want to delete this project?");
                deleteProject(post);
                removeElementById(post.id)
            }}></button>;
        }
    }

    const searchProjectByName = () => {
        const name = document.getElementById("filterByName").value;
        if (name !== '') {
            const filteredProjects = posts.filter((post) => post.name.toLowerCase().includes(name) || post.name.toUpperCase().includes(name));
            setPosts(filteredProjects);
        }
    }

    const checkedBoxCount = (post) => {
        const box = document.querySelectorAll(".project".concat(post.id.toString()).concat(" .form-check-input"))[0]
        console.log(box)
        console.log(box.checked)
        if (box.checked) {
            setPostsDel([...postsDel, post])
        }
        else {
            setPostsDel(postsDel.filter((p) => p.id !== post.id))
        }
    }

    const handlePageClick = (event) => {
        const newOffset = event.selected * pagePostsLimit % posts.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    const switchArrow = () => {
        const arrow = document.getElementById('arrow');
        if (arrow.className === "fa fa-angle-up") {
            arrow.className = "fa fa-angle-down";
        }
        else {
            arrow.className = "fa fa-angle-up";
        }
        setPosts([...posts.sort(function(a, b){
            if (arrow.className === "fa fa-angle-up") {
                return a.projectNumber-b.projectNumber;
            }
            else {
                return b.projectNumber-a.projectNumber;
            }
        })])
    }
    return (
        <div>
            <h2 style={{marginTop:"1em"}}>Project List</h2>
            <hr/>
            <div>
                <Form className="filterForm">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm="3">
                            <Form.Control type="text" id="filterByName" placeholder="Project number, name, customer name"/>
                        </Col>
                        <Col sm="3">
                            <Form.Control type="text" as="select" id="filterByStatus" defaultValue="select status">
                                <option value="select status">Project Status</option>
                                <option value="NEW">New</option>
                                <option value="FIN">Finished</option>
                                <option value="INP">In progress</option>
                                <option value="PLA">Planned</option>
                            </Form.Control>
                        </Col>
                        <Button as="input" variant="primary" type="button" value="Search Project" onClick={ () => {searchProjectByName(); handleFilter()} }></Button>
                        <Button as="input" variant="secondary" type="button" value="Reset Search" onClick={ () => {window.location.reload(); setPosts(tempPosts)}}></Button>
                    </Form.Group>
                </Form>
            </div>
            <div style={{minHeight: "509px"}}>
                <Table responsive>
                    <thead>
                    <tr>
                        <th> </th>
                        <th>Number <button className="fa fa-angle-up" id="arrow" style={{backgroundColor: "white", border:"0"}} onClick={switchArrow}></button></th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Customer</th>
                        <th>Start Date</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody id="tableBody">
                    {posts
                        .slice(
                            itemOffset,
                            itemOffset + pagePostsLimit
                        )
                        .map((post) => {
                            return (
                                <tr key={post.id}>
                                    <td>
                                        <Form><FormCheck className={"project".concat(post.id)} id={post.id} onClick={() => {checkedBoxCount(post)}} disabled={ post.status === "NEW" ? "" : "disabled" }/></Form>
                                    </td>
                                    <td>
                                        <Nav.Link href={ `\\editProject\\${post.id}`}>
                                            {post.projectNumber}
                                        </Nav.Link>
                                    </td>
                                    <td>
                                        {post.name}
                                    </td>
                                    <td>
                                        {post.status}
                                    </td>
                                    <td>
                                        {post.customer}
                                    </td>
                                    <td>
                                        {post.startDate}
                                    </td>
                                    <td>
                                        {
                                            deleteBtn(post)
                                        }
                                    </td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td colSpan="3" style={{textAlign: "left", color: "blue"}} id="numOfSelected">{postsDel.length} items selected</td>
                            <td colSpan="4" style={{textAlign: "right", color: "red"}}>
                                <button  style={{
                                    color: "red",
                                    backgroundColor: "white",
                                    border: 0
                                }} onClick={ () => {
                                    let ids = [];
                                    alert("You want to delete these projects?");
                                    for (const project of postsDel) {
                                        ids.push(project.id)
                                        deleteProject(project);
                                    }
                                    removeElementsById(ids);
                                } }>delete selected items <i className="fa fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div style={{float: "right", marginRight: "18px", marginBottom: "19px"}}>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={Math.ceil(posts.length / pagePostsLimit)}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
}

export default ProjectList;