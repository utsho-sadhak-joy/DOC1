// import React, {useState} from 'react'
// // import Seed
// const Child = () => {
//     const [value, setValue] = useState(1);
//     return (
//         <div>
//             <p>{value}</p>
//             <button onClick={()=>setValue(value+1)}>click here</button>
//         </div>
         
//     )
// }

// export default Child


function Clock(props) {
    return (
      <div>
        <h1s>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000); 
  





