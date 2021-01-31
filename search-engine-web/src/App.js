import React, { Component } from "react";
import { Layout, Navigation, Header, Drawer, Content, Footer } from "react-mdl";
import "./App.css";
import AboutMeComponent from "../src/component/AboutMeComponent";
import SearchComponent from "./component/SearchComponent";
import ContactComponent from "../src/component/ContactComponent";
import MainComponent from "../src/component/MainComponent";
import HistoryComponent from "../src/component/HistoryComponent"
import { Route, Switch } from "react-router-dom";
import NotFound from "./component/NotFound";
import {Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="appJs">
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content" id="navBar">
          <Layout >
            <Header title={<Link style={{textDecoration:"none", color:"white"}}to="/">Capture the Image</Link>} scroll>
              <Navigation>
                <Link to="/Search-Image">Search</Link>
                <Link to="/History">History of Photograpy</Link>
                
              </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration:"none",color:"grey" }}to="/">Capture the Image</Link>}>
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
              <Route exact path='/' render={ props=>(
              
                  <MainComponent   {...props}/>
              )
              
              }/>
              <Route exact path='/AboutDeveloper' component={AboutMeComponent}/>
              <Route exact path='/Search-Image' component={SearchComponent}/>
              <Route exact path='/Contact' component={ContactComponent}/>     
              <Route exact path='/History' component={HistoryComponent}/>             
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
