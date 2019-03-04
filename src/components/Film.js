import React, {Component} from "react";



class Film extends Component {
  render() {
    return (
      <div className ="film">
<a href={this.props.href}>
<li>{this.props.children}</li></a>
      // <h4>{this.props.children}</h4>
      // <p>{this.props.href}</p>
      </div>
    )
  }
}

export default Film;
