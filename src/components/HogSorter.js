import React from 'react'

function HogSorter({setSortBy, setDisplayedHogs, displayedHogs}) {
    function handleWeightSort(){
        let toSort = [...displayedHogs]
        let sortedHogs = toSort.sort((a, b) => (a.weight < b.weight) ? 1 : -1)
        setDisplayedHogs([...sortedHogs])
    }
    function handleNameSort(){
        let toSort = [...displayedHogs]
        let sortedHogs = toSort.sort((a,b)=> (a.name > b.name) ? 1: -1)
        setDisplayedHogs([...sortedHogs])
    }
    return (
        <div>
            <button onClick={handleWeightSort}>Sort by Weight</button>
            <button onClick={handleNameSort}>Sort by Name</button>
        </div>
    )
}

export default HogSorter
