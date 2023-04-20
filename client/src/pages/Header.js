import React, { useContext, useEffect } from "react";
import "./header.css";
import { Store } from "../context/VotingProvider";
const Header = () => {

    const {changeNetwork,loading , currentAccount} = useContext(Store)

  return (
    <div
      className="frame-child"
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        zIndex: "9999",
      }}
      data-animate-on-scroll
    >
      <h3 style={{ marginLeft: "760px"}}>Welcome To Votify</h3>{" "}
      <button style={{ margin: "auto", textAlign: "center", backgroundColor:"#8399FF", color:"black", padding:"20px", cursor:"pointer", fontSize:"26px", borderRadius:"10px", border:"none",fontFamily:"inter" }} onClick={changeNetwork} disabled={loading || currentAccount}>
        {currentAccount ? `${currentAccount.slice(0,5)}...${currentAccount.slice(currentAccount.length - 4)}` : "Connect Wallet"
}      </button>
    </div>
  );
};

export default Header;
