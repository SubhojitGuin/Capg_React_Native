import React, { Component } from 'react'

export default class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <input type="text" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value})} />
      </div>
    )
  }
}
