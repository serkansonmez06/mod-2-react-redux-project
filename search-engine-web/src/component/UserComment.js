import React, { Component } from "react";
import { connect } from "react-redux";
class UserComment extends Component {
  render() {
    return (
      <div>
        <span className="messageTitle"> What people think about us!</span>
        {this.props.note.map((message, index) => {
          return (
            <div key={index}>
              <h1>
                <ol>
                  <span className="messageName">* {message.name} :</span>
                  <span className="messageStyle">"{message.message}"</span>
                </ol>
              </h1>
            </div>
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    note: state.messages,
  };
}
export default connect(mapStateToProps)(UserComment);
