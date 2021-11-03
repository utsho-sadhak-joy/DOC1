render() {
    // No need to wrap list items in an extra element!
    return [
      // Don't forget the keys :)
      <li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>,
    ];
  }

  function Item(props) {
    return <li>{props.message}</li>;
  }
  
  function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
      <ul>
        {todos.map((message) => <Item key={message} message={message} />)}
      </ul>
    );
  }


  // Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }
  
  function ListOfTenThings() {
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    );
  }


  const TerserPlugin = require('terser-webpack-plugin');

  module.exports = {
    mode: 'production',
    optimization: {
      minimizer: [new TerserPlugin({ /* additional options here */ })],
    },
  };

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }


  class CounterButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      if (this.props.color !== nextProps.color) {
        return true;
      }
      if (this.state.count !== nextState.count) {
        return true;
      }
      return false;
    }
  
    render() {
      return (
        <button
          color={this.props.color}
          onClick={() => this.setState(state => ({count: state.count + 1}))}>
          Count: {this.state.count}
        </button>
      );
    }
  }


  class CounterButton extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }
  
    render() {
      return (
        <button
          color={this.props.color}
          onClick={() => this.setState(state => ({count: state.count + 1}))}>
          Count: {this.state.count}
        </button>
      );
    }
  }


  class ListOfWords extends React.PureComponent {
    render() {
      return <div>{this.props.words.join(',')}</div>;
    }
  }
  
  class WordAdder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        words: ['marklar']
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      // This section is bad style and causes a bug
      const words = this.state.words;
      words.push('marklar');
      this.setState({words: words});
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleClick} />
          <ListOfWords words={this.state.words} />
        </div>
      );
    }
  }

  handleClick() {
    this.setState(state => ({
      words: state.words.concat(['marklar'])
    }));
  }
  handleClick() {
    this.setState(state => ({
      words: state.words.concat(['marklar'])
    }));
  }