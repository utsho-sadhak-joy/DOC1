import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// const name = 'Sadia';
// const joy = <h1>I love you {200*2 } </h1>;






function utsho (roy) {
  return roy.I + ' ' + roy.love + ' ' + roy.you
};




const roy = {
  I: 'Ami',
  love: 'taa maa-ke ',
  you: 'valobashi',
};

const main = (
  <h1>{utsho(roy)}</h1>
);


ReactDOM.render(
  main,
  document.getElementById('root')
);


// function defination(para){
//   return para.love + '' + para.sexy;
// }



// const para = {
//   love : 'Sadia',
//   sexy : 'kiss',

// };


// const waw = (
//   <h1>{defination(para)}</h1>
// );





// ReactDOM.render(
//   waw,
//   document.getElementById('root')
// );












// function makingName(user){
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Sadia',
//   lastName: 'Rahman',
// };


// const element = (
//   <div>
//       {makingName(user)}
//   </div>
//   );







// ReactDOM.render(
//   <h1>{element}</h1>,
//   document.getElementById('root')

// );






































// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
