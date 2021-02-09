import React, { Component } from "react";
import AboutMeComponent from "./AboutMeComponent";
import SearchComponent from "./SearchComponent";
import ContactComponent from "./ContactComponent";
import HistoryComponent from "./HistoryComponent";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import UserComment from "./UserComment";
import Navi from "./Navi"
class MainComponent extends Component {
  render() {
    return (
      <div className="appJs">
        {/* Uses a header that scrolls with the text, instead staying locked at the top */}
       
       <Navi/>  
       {/* Navi component display in main */}
        <div className="displayMain">
          <div className="innerDisplayMainLeft"> {/* display fixed image*/}
            <img
              src="http://2.bp.blogspot.com/-2eqNNzBYLgM/UEW5Uy6CyGI/AAAAAAAAER8/8XQYlGYkHGM/s1600/photographer+smile+...+animated+gif+photo+with+flash+...+graphic+art+bw+images+pics+animated+gifs+background+mobile+screensaver+free+download+photographer+3D+HD+1.gif"
              height="530px"
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
