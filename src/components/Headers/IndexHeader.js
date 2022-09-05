
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/Planet-sky-mountains-clouds_1920x1080_wallpaper.jpg") +
            ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Welcome Jake NFT</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Connect ERC-721 to create your NFT on OpenSea!
            </h2>
          </Container>
        </div>

        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />

        <div className="category category-absolute">
          <Button className="btn-round" href="/" target="_blank" outline>
            <i className="fa fa-cloud-upload " />
            Connect
          </Button>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
