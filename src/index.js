import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';




// function sum(2, 3){
//   return 2+3;
// }




// function Adri(props){
//   return <h1>My name is {props.name}</h1>
// };


// function Tandra(){
//   return (
//     <div>
//       <Adri name="puja"/>
//       <Adri name="cosmos"/>
//       <Adri name="nila"/>
//       <Adri name="Tithi"/>
//     </div>
//   )
// };



// ReactDOM.render(
//   <Tandra />,
//   document.getElementById('root')
// )








// function Waw(props){
//   return <h1>Hi {props.name}</h1>
// }


// function Balaka(){
//   return(
//     <div>
//       <Waw name="Puja"/>
//       <Waw name="Sadia"/>
//       <Waw name="Tandra"/>
//       <Waw name="Oisharjo"/>
//     </div>
//   )
// }


// ReactDOM.render(
//   <Balaka />,
//   document.getElementById('root')
// );





















// class Welcome extends React.Component{
//   render() {
//     return <h1>Hi {this.props.name}</h1>
//   }
// }


// const element = <Welcome name="Sharmistah"/>;


// ReactDOM.render(
//   element, document.getElementById('root')
// );

// 11111111111111111111111111111111111111111111111111111111111111111111111111111111111

// function Welcomes ( props) {
//   return <h1>Hi {props.name}</h1>
// }
 
// const elements = <Welcomes name="Mou Biswas"/>;


// ReactDOM.render(
//   elements, document.getElementById('root')
// );



// function raju(props){
//   return <h1>{props.space}</h1>;
// }


// const props = {
//   space: 'sakib',
// }

// const title = (
//   <h1>Hi {raju(props)}</h1>
// );


// ReactDOM.render(
//   title, document.getElementById('root')
// );




// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);





// function tick(){
//   const element = (
//     <div> 
//       <h1>Hello World!</h1>
//       <p>It is  {new Date().toLocaleTimeString()} </p>
//     </div>
//   );
//   ReactDOM.render(element,document.getElementById('root'),);
// };

// setInterval(tick,100)




// const name = <h1>Sadia Rahaman</h1>
// ReactDOM.render(name, document.getElementById('root'));




const name = 'Sadia';
const joy = <h1>I love you {200*2 } </h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);





// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }











// function sadhak(title){
//   return title.fname + ' ' + title.lname
// };

// const title = {
//   fname:'Sharmistha',
//   lname:'Mittra',
// };




// const fullName = (
//   <h1>{sadhak(title)}</h1>
// );




// ReactDOM.render(
//   fullName,
//   document.getElementById('root')
// );














// function utsho (roy) {
//   return roy.I + ' ' + roy.love + ' ' + roy.you
// };

// const roy = {
//   I: 'Ami',
//   love: 'taa maa-ke ',
//   you: 'valobashi',
// };

// const main = (
//   <h1>{utsho(roy)}</h1>
// );


// ReactDOM.render(
//   main,
//   document.getElementById('root')
// );


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
