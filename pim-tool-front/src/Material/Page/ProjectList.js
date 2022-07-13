import React, {useState, useEffect} from 'react';
import '../Style/ProjectList.css';
import 'react-pagination-bar/dist/index.css'
import {Button, Col, Form, FormCheck, Nav, Row, Table} from "react-bootstrap";
import axios from "axios";

function ProjectList() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/projects/search')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(posts);
    const [currentPage, setCurrentPage] = useState(1);
    const pagePostsLimit = 3;
    
    const handleFilter = () => {
        const filtered = posts.filter((post) => post.status === document.getElementById('filterByStatus').value);
        setPosts(filtered);
    };

    return (
        <div>
            <h2 style={{marginTop:"1em"}}>Project List</h2>
            <hr/>
            <div>
                <Form className="filterForm">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm="3">
                            <Form.Control type="text" id="filterByName"/>
                        </Col>
                        <Col sm="3">
                            <Form.Control type="text" as="select" id="filterByStatus">
                                <option value="NEW">New</option>
                                <option value="FIN">Finished</option>
                                <option value="INP">In progress</option>
                                <option value="PLA">Planned</option>
                            </Form.Control>
                        </Col>
                        <Button as="input" variant="primary" value="Search Project" onClick={ handleFilter } />
                        <Button as="input" variant="secondary" value="Reset Search" />
                    </Form.Group>
                </Form>
            </div>
            <Table responsive>
                <thead>
                <tr>
                    <th> </th>
                    <th>Number</th>
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
                        (currentPage - 1) * pagePostsLimit,
                        (currentPage - 1) * pagePostsLimit + pagePostsLimit
                    )
                    .map((post) => {
                        return (
                            <tr key={post.id}>
                                <td>
                                    <Form><FormCheck/></Form>
                                </td>
                                <td>
                                    <Nav.Link href="/editProject">
                                        {post.id}
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
                                    <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div className="paginationBtn">
                <button onClick={() =>  currentPage > 1 ? setCurrentPage(() => currentPage - 1) : setCurrentPage(currentPage)}>Left</button>
                <button onClick={() =>  currentPage < Math.ceil(posts.length/pagePostsLimit) ? setCurrentPage(() => currentPage + 1) : setCurrentPage(currentPage)}>Right</button>
            </div>
        </div>
    );
}

export default ProjectList;