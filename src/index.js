import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';






constructor(props) {
  super(props);
  this.state = {
    posts: [],
    comments: []
  };
}









componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}












// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
