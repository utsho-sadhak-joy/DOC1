import React, {useState} from 'react'
// import Seed
const Child = () => {
    const [value, setValue] = useState(1);
    return (
        <div>
            <p>{value}</p>
            <button onClick={()=>setValue(value+1)}>click here</button>
        </div>
         
    )
}

export default Child
