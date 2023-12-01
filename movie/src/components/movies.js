import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './movie.css'
function Movies() {
    let [data, setData] = useState([]);

    const getData = async () => {
        let name = localStorage.getItem("name");
        let res = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=18fd74f3`)
        let value = await res.json();
        console.log(value)
        setData(value.Search);
    }

    useEffect(() => {
        getData();

    }, [])


    return (
        <div id='movies'>
            {data.map((elem, ind) => {
                return <div key={ind + 1}>
                    <img src={elem.Poster} />
                    <h3>{elem.Title}</h3>
                </div>
            })}
        </div>
    )
}

export default Movies