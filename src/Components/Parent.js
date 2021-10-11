// import React from 'react'


// const Parent = () => {
//     return (
//         <div>
//             <h1>Utsho Sadhak Joy</h1>
//         </div>
//     )
// }

// export default Parent





import React, { Fragment } from 'react';

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}

export default Glossary