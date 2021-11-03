componentDidMount() {
    this.$el = $(this.el);
    this.$el.chosen();
  }
  
  componentWillUnmount() {
    this.$el.chosen('destroy');
  }