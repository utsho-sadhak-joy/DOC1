// import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';







import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }


  componentDidMount() {
    this.timerId = setInterval(() =>this.tick(), 1000);

  };

  componentWillUnmount() {
      clearInterval(this.timerId);
  };


  tick () {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


ReactDOM.render(<Clock />, document.getElementById('root'))












// const element = <h1>waw</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')

// );






































// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
