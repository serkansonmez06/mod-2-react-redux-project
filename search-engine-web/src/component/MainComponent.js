import React, { Component } from "react";
import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";
import AboutMeComponent from "./AboutMeComponent";
import SearchComponent from "./SearchComponent";
import ContactComponent from "./ContactComponent";
import HistoryComponent from "./HistoryComponent";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
import UserComment from "./UserComment";

class MainComponent extends Component {
  render() {
    return (
      <div className="appJs">
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content" id="navBar">
          <Layout>
            <Header
              title={
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Capture the Image
                </Link>
              }
              scroll
            >
              <Navigation>
                <Link to="/Contact">Contact</Link>
                <Link to="/History">History of Photograpy</Link>
                <Link to="/UserComment">Users Comment</Link>
              </Navigation>
            </Header>
            <Drawer
              title={
                <Link style={{ textDecoration: "none", color: "grey" }} to="/">
                  Capture the Image
                </Link>
              }
            >
              <Navigation>
                <Link to="/Search-Image">Search</Link>
                <Link to="/History">History of Photograpy</Link>
                <Link to="/AboutDeveloper">Developer</Link>
                <Link to="/Contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
            </Content>
          </Layout>
        </div>

        <div className="displayMain">
          <div className="innerDisplayMainLeft"></div>
          <div className="innerDisplayMainRight">
            <Switch>
              <Route
                exact
                path="/"
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
