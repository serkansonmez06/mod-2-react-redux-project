import React, { Component } from "react";
import { connect } from "react-redux";
import { developerName } from "../redux/actions/actionCategories";
class AboutMeComponent extends Component {
  componentDidMount() {
    this.props.dispatch(developerName());
  }
  render() {
    return (
      <div>
        <p className="history">
          {this.props.devName} {this.props.devLast} is a full-stack developer
          with excellent technical expertise ( HTML5, CSS3, JS - ES6, REACT )
          with the ability to analyze and solve problems. Write, analyze,
          review, and rewrite programs, using workflow chart and diagram, and
          applying knowledge of computer capabilities, subject matter, and
          symbolic logic. Adaptable and transformational managerial skills with
          an ability to work independently and collaboratively.
        </p>
        <p className="history">
          If you would like ask a question please feel free to send me message.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.devloperNameReducer)
  return {
    devName: state.name,
    devLast: state.lastName,
  }; //we just want to display counterReducer
  //state value cames from counterReducer
}

export default connect(mapStateToProps)(AboutMeComponent);
