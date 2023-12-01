import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Search() {
    let name = useRef(null);
    let navigate = useNavigate();
    const Movie = async () => {
        localStorage.setItem("name", name.current.value);
        navigate("/movie");
    }
    return (
        <div id='userDiv'>
            <input type='text' placeholder='Search movie' ref={name} />
            <button onClick={Movie}>Search</button>
        </div>
    )
}

export default Search