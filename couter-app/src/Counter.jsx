import React from 'react'

function Counter({title,...obj}) {
    //const {title,count} = props
    return (
        <div>
            <h1> {title} : {obj.count} </h1>
        </div>
    )
}

export default Counter
