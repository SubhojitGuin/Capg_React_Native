function getHOC(Component, status, color) {
  return function EnhancedComponent(props) {
    return (
      <div className="enhanced-component" style={{backgroundColor: color}}>
        <h1>Enhanced Component</h1>
        <p>Status: {status}</p>
        <p>Last Updated: Today</p>
        <Component {...props} />
      </div>
    );
  }
}

export default getHOC;