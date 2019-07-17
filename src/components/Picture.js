import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Picture = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get ('https://api.nasa.gov/planetary/apod?api_key=Yrp5SUzrZP3vwgceBfbRyCuiWHWan9BF5eAwjM62')
        .then(response => {
            setData(response.data)
            console.log('response: ', response.data.date)
        })
        .catch(error => {
            return 'error', error
        })
    }, [])

    console.log(data)

    return (    
        <h1>Hello</h1>
    )
}

export default Picture;