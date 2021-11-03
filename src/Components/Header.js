class Chosen extends React.Component {
    componentDidMount() {
      this.$el = $(this.el);
      this.$el.chosen();
  
      this.handleChange = this.handleChange.bind(this);
      this.$el.on('change', this.handleChange);
    }
    
    componentDidUpdate(prevProps) {
      if (prevProps.children !== this.props.children) {
        this.$el.trigger("chosen:updated");
      }
    }
  
    componentWillUnmount() {
      this.$el.off('change', this.handleChange);
      this.$el.chosen('destroy');
    }
    
    handleChange(e) {
      this.props.onChange(e.target.value);
    }
  
    render() {
      return (
        <div>
          <select className="Chosen-select" ref={el => this.el = el}>
            {this.props.children}
          </select>
        </div>
      );
    }
  }


  $('#container').html('<button id="btn">Say Hello</button>');
$('#btn').click(function() {
  alert('Hello!');
});

function Button() {
    return <button id="btn">Say Hello</button>;
  }
  
  ReactDOM.render(
    <Button />,
    document.getElementById('container'),
    function() {
      $('#btn').click(function() {
        alert('Hello!');
      });
    }
  );


  function Button(props) {
    return <button onClick={props.onClick}>Say Hello</button>;
  }
  
  function HelloButton() {
    function handleClick() {
      alert('Hello!');
    }
    return <Button onClick={handleClick} />;
  }
  
  ReactDOM.render(
    <HelloButton />,
    document.getElementById('container')
  );


  function Paragraph(props) {
    return <p>{props.text}</p>;
  }
  
  const ParagraphView = Backbone.View.extend({
    render() {
      const text = this.model.get('text');
      ReactDOM.render(<Paragraph text={text} />, this.el);
      return this;
    },
    remove() {
      ReactDOM.unmountComponentAtNode(this.el);
      Backbone.View.prototype.remove.call(this);
    }
  });

  class Item extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange() {
      this.forceUpdate();
    }
  
    componentDidMount() {
      this.props.model.on('change', this.handleChange);
    }
  
    componentWillUnmount() {
      this.props.model.off('change', this.handleChange);
    }
  
    render() {
      return <li>{this.props.model.get('text')}</li>;
    }
  }
  
  class List extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange() {
      this.forceUpdate();
    }
  
    componentDidMount() {
      this.props.collection.on('add', 'remove', this.handleChange);
    }
  
    componentWillUnmount() {
      this.props.collection.off('add', 'remove', this.handleChange);
    }
  
    render() {
      return (
        <ul>
          {this.props.collection.map(model => (
            <Item key={model.cid} model={model} />
          ))}
        </ul>
      );
    }
  }




  function connectToBackboneModel(WrappedComponent) {
    return class BackboneComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = Object.assign({}, props.model.attributes);
        this.handleChange = this.handleChange.bind(this);
      }
  
      componentDidMount() {
        this.props.model.on('change', this.handleChange);
      }
  
      componentWillReceiveProps(nextProps) {
        this.setState(Object.assign({}, nextProps.model.attributes));
        if (nextProps.model !== this.props.model) {
          this.props.model.off('change', this.handleChange);
          nextProps.model.on('change', this.handleChange);
        }
      }
  
      componentWillUnmount() {
        this.props.model.off('change', this.handleChange);
      }
  
      handleChange(model) {
        this.setState(model.changedAttributes());
      }
  
      render() {
        const propsExceptModel = Object.assign({}, this.props);
        delete propsExceptModel.model;
        return <WrappedComponent {...propsExceptModel} {...this.state} />;
      }
    }
  }

  function NameInput(props) {
    return (
      <p>
        <input value={props.firstName} onChange={props.handleChange} />
        <br />
        My name is {props.firstName}.
      </p>
    );
  }
  
  const BackboneNameInput = connectToBackboneModel(NameInput);
  
  function Example(props) {
    function handleChange(e) {
      props.model.set('firstName', e.target.value);
    }
  
    return (
      <BackboneNameInput
        model={props.model}
        handleChange={handleChange}
      />
  
    );
  }
  
  const model = new Backbone.Model({ firstName: 'Frodo' });
  ReactDOM.render(
    <Example model={model} />,
    document.getElementById('root')
  );

  import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

import React from 'react';

// Wrong! This is a component and should have been capitalized:
function hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
  return <hello toWhat="World" />;
}

import React from 'react';

// Correct! This is a component and should be capitalized:
function Hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Correct! React knows <Hello /> is a component because it's capitalized.
  return <Hello toWhat="World" />;
}