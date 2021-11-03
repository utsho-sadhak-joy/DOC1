class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }
  
  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }
  
  class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <Mouse render={mouse => (
            <Cat mouse={mouse} />
          )}/>
        </div>
      );
    }
  }

  / If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => (
          <Component {...this.props} mouse={mouse} />
        )}/>
      );
    }
  }
}



<Mouse>
  {mouse => (
    <p>The mouse position is {mouse.x}, {mouse.y}</p>
  )}
</Mouse>

class Mouse extends React.PureComponent {
    // Same implementation as above...
  }
  
  class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
  
          {/*
            This is bad! The value of the `render` prop will
            be different on each render.
          */}
          <Mouse render={mouse => (
            <Cat mouse={mouse} />
          )}/>
        </div>
      );
    }
  }

  class MouseTracker extends React.Component {
    // Defined as an instance method, `this.renderTheCat` always
    // refers to *same* function when we use it in render
    renderTheCat(mouse) {
      return <Cat mouse={mouse} />;
    }
  
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <Mouse render={this.renderTheCat} />
        </div>
      );
    }
  }