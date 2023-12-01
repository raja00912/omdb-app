import React from 'react'

function Search() {

    const Movies = () => {
        console.log("x");
    }
    return (
        <div>
            <input type='text' placeholder='Search movie' />
            <button onClick={Movies}>Search</button>
        </div>
    )
}

export default Search