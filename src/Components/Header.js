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