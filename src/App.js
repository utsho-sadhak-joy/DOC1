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

render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}