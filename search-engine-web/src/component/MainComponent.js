import React, { Component } from "react";
import AboutMeComponent from "./AboutMeComponent";
import SearchComponent from "./SearchComponent";
import ContactComponent from "./ContactComponent";
import HistoryComponent from "./HistoryComponent";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import UserComment from "./UserComment";
import Navi from "./Navi";
class MainComponent extends Component {
  render() {
    return (
      <div className="appJs">
        {/* Uses a header that scrolls with the text, instead staying locked at the top */}

        <Navi />
        {/* Navi component display in main */}
        <div className="displayMain">
          <div className="innerDisplayMainLeft">
            {" "}
            {/* display fixed image*/}
            <img
              className="leftImage"
              src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1238&q=80"
              height="700px"
              width="260px"
            ></img>
          </div>

          <div className="innerDisplayMainRight">
            <Switch>
              <Route
                exact //when we have similar path name
                path="/" // renders help to pass all props in SearchComponent. this page display when page refresh
                render={(props) => <SearchComponent {...props} />}
              />
              <Route
                exact
                path="/AboutDeveloper"
                component={AboutMeComponent}
              />
              <Route exact path="/Search-Image" component={SearchComponent} />
              <Route exact path="/Contact" component={ContactComponent} />
              <Route exact path="/History" component={HistoryComponent} />
              <Route exact path="/UserComment" component={UserComment} />
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
export default MainComponent;
