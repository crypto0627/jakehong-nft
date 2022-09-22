import React, { useState } from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

//Web3Modal connect wallet
const providerOptions = {
  /* See Provider Options Section */
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "JakeHongNFT APP",
      alchemy:
        "https://eth-goerli.g.alchemy.com/v2/hR5uamq-K43YZYAJldc7lpxZ2MOv0Qbk",
    },
  },
};

const IndexNavbar = ({ accounts, setAccounts }) => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  /*
  //ethereum js
  //display Wallet Address
  const [walletAddress, setWalletAddress] = useState("");
  //connect Metamask wallet
  const isConnected = Boolean(accounts[0]);
  async function RequestAccount() {
    console.log("Requesting Metamask account...");
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setAccounts(accounts);
      } catch (error) {
        console.log("Error connecting...", error);
      }
    } else {
      console.log("Meta Mask not detected");
    }
  }
  */
  //web3Modal js
  //display web3Provider
  const [web3Provider, setWeb3Provider] = useState(null);
  //web3Modal connect wallet
  async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        catcheProvider: false,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );
      if (web3ModalProvider) {
        setWeb3Provider(web3ModalProvider);
      }
      setAccounts(
        await window.ethereum.request({
          method: "eth_requestAccounts",
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        {/* left side - Title*/}
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            JakeHong NFT
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>

        {/* Right side - Social media icons */}
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/LaiHongKuo"
                target="_blank"
                title="Follow my on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/klhong_0627"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/jake0627a1"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as="a"
                data-placement="bottom"
                href="mailto:F111110111@nkust.edu.tw"
                target="_blank"
                title="Send Email to us"
              >
                <i className="fa fa-envelope-o" />
                <p className="d-lg-none">Email</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as="a"
                data-placement="bottom"
                href="https://goerli.etherscan.io/address/0x88d7d7e740f355d959513dc10febb61aae7e75dc"
                target="_blank"
                title="View Contract"
              >
                <i className="fa fa-etsy" aria-hidden="true"></i>
                <p className="d-lg-none">Etherscan</p>
              </NavLink>
            </NavItem>
            {/* Connect */}
            {web3Provider == null ? (
              <NavItem>
                <Button
                  className="btn-round"
                  color="secondary"
                  target="_blank"
                  onClick={connectWallet}
                >
                  <i className="nc-icon nc-favourite-28" /> Connect
                </Button>
              </NavItem>
            ) : (
              <NavItem>
                <p id="walletaddress" style={{ color: "Chartreuse" }}>
                  Connected!
                  <br /> Wallet Address:
                  <br />
                  {web3Provider.provider.selectedAddress}
                </p>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default IndexNavbar;
