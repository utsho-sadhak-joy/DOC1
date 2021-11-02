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


  React’s diffing algorithm (called Reconciliation) uses component identity to determine whether it should update the existing subtree or throw it away and mount a new one. If the component returned from render is identical (===) to the component from the previous render, React recursively updates the subtree by diffing it with the new one. If they’re not equal, the previous subtree is unmounted completely.