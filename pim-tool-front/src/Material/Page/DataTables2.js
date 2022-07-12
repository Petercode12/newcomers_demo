import React, {useEffect, useState} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import axios from "axios";

export default function DataTables2() {
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
    console.log(posts)
    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'Number',
                field: 'id',
                width: 150,
            },
            {
                label: 'Name',
                field: 'name',
                width: 270,
            },
            {
                label: 'Finishing Date',
                field: 'finishingDate',
                width: 200,
            },
        ],
        rows: posts,
    });
    useEffect(() => {setDatatable({
        columns: [
            {
                label: 'Number',
                field: 'id',
                width: 150,
            },
            {
                label: 'Name',
                field: 'name',
                width: 270,
            },
            {
                label: 'Finishing Date',
                field: 'finishingDate',
                width: 200,
            },
        ],
        rows: posts,
    })}, [posts])

    return (
        <>
            <MDBDataTableV5
                hover
                entriesOptions={[5, 20, 25]}
                entries={5}
                pagesAmount={4}
                data={datatable}
                fullPagination
            />
        </>
    );
}