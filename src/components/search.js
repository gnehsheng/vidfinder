import React from 'react'

export default function Search(){
    return(
        <div class='search'>
            <input
                type="text"
                // onChange={handleChange}
                required
                placeholder="Enter URL Here"
            />
        </div>
    )
}