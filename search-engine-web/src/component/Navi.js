import React from "react";
import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <div >
      {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
      <div className="demo-big-content">
        <Layout>
          <Header
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/"> {/*this will link to main search page/ main*/}
                Shutter Up
              </Link>
            }
          >
            <Navigation>
              <Link to="/Search-Image">Search</Link>
              <Link to="/History">History of Photograpy</Link>
              <Link to="/UserComment">Users Comment</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "grey" }} to="/">
                Shutter Up
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
        
        </Layout>
      </div>
    </div>
  );
}

export default Navi;
