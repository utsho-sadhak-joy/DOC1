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

  render() {
    // React mounts a new div and renders the children into it
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
  render() {
    // React does *not* create a new div. It renders the children into `domNode`.
    // `domNode` is any valid DOM node, regardless of its location in the DOM.
    return ReactDOM.createPortal(
      this.props.children,
      domNode
    );
  }

// These two containers are siblings in the DOM
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

ReactDOM.render(<Parent />, appRoot);