render() {
    // Filter out extra props that are specific to this HOC and shouldn't be
    // passed through
    const { extraProp, ...passThroughProps } = this.props;
  
    // Inject props into the wrapped component. These are usually state values or
    // instance methods.
    const injectedProp = someStateOrInstanceMethod;
  
    // Pass props to wrapped component
    return (
      <WrappedComponent
        injectedProp={injectedProp}
        {...passThroughProps}
      />
    );
  }


  
// connect is a function that returns another function
const enhance = connect(commentListSelector, commentListActions);
// The returned function is a HOC, which returns a component that is connected
// to the Redux store
const ConnectedComment = enhance(CommentList);