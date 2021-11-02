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

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}