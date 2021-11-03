import React from 'react'

function HogTile({hog, setSelectedHog}){
    return (
        <div className='ui card' style={{marginTop:'3%'}}>
           <div className= 'ui image'>
               <img src={hog.image} style={{maxHeight: '145px'}}/>
            </div> 
            <div style= {{padding: '1rem'}} onClick={()=>{
                setSelectedHog(hog)
            }}>
                <h4 >{hog.name}</h4>
            </div>
            
        </div>
    )
}

export default HogTile
