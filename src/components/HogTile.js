import React from 'react'

function HogTile({hog, setSelectedHog, setDisplayedHogs, displayedHogs}){
    function handleHide(hogHidden){
        let newHogs = displayedHogs.filter((hog)=>{
            return hog.name !== hogHidden.name
        })
        setDisplayedHogs(newHogs)
    }
    return (
        <div className='ui card' style={{marginTop:'3%'}}>
           <div className= 'ui image'>
               <img src={hog.image} style={{maxHeight: '145px'}}/>
            </div> 
            <div style= {{padding: '1rem'}} onClick={()=>{
                setSelectedHog(hog)
            }}>
                <h4 >{hog.name}</h4>
                <button onClick= {()=>{
                    handleHide(hog)
                }}>Hide</button>
            </div>
            
        </div>
    )
}

export default HogTile
