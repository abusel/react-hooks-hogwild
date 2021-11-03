import React, {useState} from 'react'
import HogTile from './HogTile'

function HogContainer({hogs, filterGreased, sortBy, displayedHogs, setDisplayedHogs}) {
    const [selectedHog, setSelectedHog] = useState(hogs[0])
    console.log(displayedHogs)
    return (
        <>
        <div className='ui grid container'>
            {displayedHogs.map((hog)=>{
                if (filterGreased){
                    if (hog.greased){
                        return <HogTile hog= {hog} setSelectedHog={setSelectedHog} setDisplayedHogs={setDisplayedHogs} displayedHogs={displayedHogs}/>
                    }
                }
                else{
                    return <HogTile hog= {hog} setSelectedHog={setSelectedHog} setDisplayedHogs={setDisplayedHogs} displayedHogs={displayedHogs}/>
                }
            })}
        </div>
        <div style={{padding: '2rem'}}>
            <h5>{selectedHog.name}</h5>
            <h5>{selectedHog.specialty}</h5>
            <h5>{selectedHog.weight}</h5>
            <h5>{selectedHog.greased}</h5>
            <h5>{selectedHog['highest medal achieved']}</h5>

        </div>
        </>
    )
}

export default HogContainer
