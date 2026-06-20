import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log("constructor() called");
  }

  componentDidMount() {
    console.log("componentDidMount() called");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.status !== nextProps.status) {
      console.log("shouldComponentUpdate() called - status updated");
      return true;
    }

    if (this.props.priority !== nextProps.priority) {
      console.log("shouldComponentUpdate() called - priority updated");
      return true;
    }

    const diff = Math.abs(this.props.eta - nextProps.eta);
    if (diff >= 5) {
      console.log("shouldComponentUpdate() called - eta updated");
      return true;
    }

    console.log("shouldComponentUpdate() called - no change");
    return false;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() called");
  }

  render() {
    console.log("render() called")
    return (
      <div className="child-card">
        <h2>Order ID: {this.props.orderId}</h2>
        <h3>Customer: {this.props.customer}</h3>
        <h4>Status: {this.props.status}</h4>
        <h4>ETA: {this.props.eta} mins</h4>
        <h4>Priority: <span className={this.props.priority}>{this.props.priority}</span></h4>
      </div>
    )
  }
}
