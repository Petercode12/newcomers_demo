import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../Style/ProjectList.css';
import { Pagination } from "react-pagination-bar"
import 'react-pagination-bar/dist/index.css'
import {Form, FormCheck, Table} from "react-bootstrap";
// const posts = [
//     {id: 1, name: 'EFV', finishingDate: '2020-04-20'},
//     {id: 2, name: 'CXTRANET', finishingDate: '2020-04-25'},
//     {id: 3, name: 'CRYSTAL BALL', finishingDate: '2020-04-28'},
//     {id: 4, name: 'IOC CLIENT EXTRANET', finishingDate: '2020-06-07'},
//     {id: 5, name: 'TRADEECO', finishingDate: '2020-06-08'}
// ];
function DataTables() {
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

    return (
        <div>
            <h2 style={{marginTop:"1em"}}>Project List</h2>
            <hr/>
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
                                {post.id}
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
                <Pagination
                    style={{float: "left"}}
                    initialPage={currentPage}
                    itemsPerPage={pagePostsLimit}
                    onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
                    totalItems={posts.length}
                    pageNeighbours={2}/>
        </div>
    );
}

export default DataTables;