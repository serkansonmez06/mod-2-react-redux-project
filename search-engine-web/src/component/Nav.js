import React from "react";

import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";

import { Link } from "react-router-dom";

function Nav() {
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
              <Link to="/Search-Image">Search</Link>
              <Link to="/History">History of Photograpy</Link>
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
    </div>
  );
}

export default Nav;
