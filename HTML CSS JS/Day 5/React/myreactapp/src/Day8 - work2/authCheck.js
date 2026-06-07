function authCheck(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        {props.isLoggedIn ?
        <div style={{ border: '2px solid green', padding: '10px', backgroundColor: '#16b216cd' }}>
            <WrappedComponent {...props} />
        </div> : 
        <h1>Invalid User</h1>}
      </div>
    )
  }
}

export default authCheck;