import React,{useState} from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections

import MainMint from "views/index-sections/MainMint.js";



function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  
  const [accounts,setAccounts]=useState([])


  return (
    <>
      <IndexNavbar accounts={accounts} setAccounts={setAccounts} />
      <IndexHeader />
      <div className="main">
        <MainMint accounts={accounts} setAccounts={setAccounts}  />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
