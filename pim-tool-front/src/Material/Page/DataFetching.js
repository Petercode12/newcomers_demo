import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/users/USER1')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <ul>
                <li key={posts.id}>{posts.username}</li>
            </ul>
        </div>
    )
}

export default DataFetching;