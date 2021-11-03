import React from 'react'

function Filter({filterGreased, setFilterGreased}) {
    return (
        <div>
            <button onClick={()=>{
                setFilterGreased((filterGreased)=> !filterGreased)
            }}>{filterGreased ? 'Show All':'Only Show Greased'} </button>
        </div>
    )
}

export default Filter
