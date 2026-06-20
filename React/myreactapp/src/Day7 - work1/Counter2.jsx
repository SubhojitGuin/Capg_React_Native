import React, { Component } from 'react'
 
export default class Counter2 extends Component {
    constructor(props){
        super(props);
        console.log("This is a constructor..",props.initialvalue)
        this.state={
            count:props.initialvalue || 0,
            title:'Counter2',
            Error:'there is some error'
        }
    }
    componentDidMount() {
        console.log("This is componentDidMount..")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("This is componentDidUpdate..")
        // console.log("Previous Props:", prevProps);
        // console.log("Previous State:", prevState);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("This is shouldComponentUpdate..")
    //     console.log("Next Props:", nextProps);
    //     console.log("Next State:", nextState);
    //     return true;
    // }
    componentWillUnmount() {
        console.log("This is componentWillUnmount..")
    }
  render() {
    console.log("This is a render..")
    return (
      <div style={{backgroundColor:'lightgreen', padding:'20px',border:'2px solid black', width:'300px', margin:'20px auto'}}>
        <h1>{this.state.title}</h1>
        <button onClick={()=>this.setState({count: this.state.count + 1})}> + </button>
        <h2>Count is {this.state.count}</h2>
        <br />
        <button onClick={()=>this.setState({count: this.state.count - 1})}> - </button>
      </div>
    )
  }
}