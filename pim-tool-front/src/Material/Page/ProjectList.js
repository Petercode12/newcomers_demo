import React from 'react';
import {Form, Table} from "react-bootstrap";
import '../Style/ProjectList.css';


class ProjectList extends React.Component {
    render() {
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
                    <tr>
                        <td>
                            <Form><Form.Check /></Form>
                        </td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td>
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form><Form.Check /></Form>
                        </td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td>
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form><Form.Check /></Form>
                        </td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td>
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form><Form.Check /></Form>
                        </td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td>
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form><Form.Check /></Form>
                        </td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td>
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form><Form.Check /></Form>
                        </td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td>
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form><Form.Check /></Form>
                        </td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td>
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form><Form.Check /></Form>
                        </td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td>
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form><Form.Check /></Form>
                        </td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td>
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form><Form.Check /></Form>
                        </td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td>
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form><Form.Check /></Form>
                        </td>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td>
                            <i className="fa fa-trash" aria-hidden="true" style={{color: "red"}}></i>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>

        )
    }
}

export default ProjectList;