import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import  { Fragment } from 'react';

// function ListItem({ item }) {
//   return (
//     <Fragment>
//       <dt>{item.term}</dt>
//       <dd>{item.description}</dd>
//     </Fragment>
//   );
// }

<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name"/>





ReactDOM.render(
  <React.StrictMode>
    <App />
    <ListItem />
  </React.StrictMode>,
  document.getElementById('root')
);
