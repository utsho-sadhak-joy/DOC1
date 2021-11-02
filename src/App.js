import React from 'react'
import "./Components/App.css"
function App() {
  return (
    <div className="App">
      <div className="yes"> joy </div>
    </div>
  );
}

export default App;

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}


a higher-order component is a function 
that takes a component and returns a new component.