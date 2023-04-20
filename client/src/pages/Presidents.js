import React, { useContext, useState } from "react";
import "./presidents.css";
import { Store } from "../context/VotingProvider";
const Presidents = () => {
    const [img,setImg] = useState('')
    const {presidents,vicePresidents} = useContext(Store)
    
   return (
    <>
        <div className="president">
      <h1>President</h1>
      <div className="president-main">
        {presidents.map((e)=>(
        <div className="president-box">
        <div className="box">
          <div className="user-profile">
            <img className="img" alt="" src={e.imgURL} />
            <div className="detail">
              <h3 className="user-name">{e.CandidateName}</h3>
              <span className="address">Karachi, Pakistan</span>
            </div>
          </div>
          <hr />
          <ul className="user-detail">
            <li className="detail2">
              <span>Designation </span>
              <span> : </span>
              <p>{e.CandidateDesignation == 1 ? "President" : "Vice President"}</p>
            </li>
            <li className="detail2">
              <span>Wallet Address </span>
              <span> : </span>
              <p>{`${e.addr.slice(0,4)}...${e.addr.slice(e.addr.length - 4)}`}</p>
            </li>
            <li className="detail2">
              <span>Education </span>
              <span> : </span>
              <p>{e.CandidateEducation}</p>
            </li>
            <li className="detail2">
              <span>Age </span>
              <span> : </span>
              <p>{e.CandidateAge.toString()}</p>
            </li>
            {/* <li className="detail2"> 
              <span>Vote Count </span>
              <span> : </span>
              <p>{e.CountVote.toString()}</p>
            </li> */}
          </ul>
        </div>
      </div>
        ))     
        }

      </div>
      <h1>Vice President</h1>
      <div className="president-main">
        {vicePresidents.map((e)=>(
        <div className="president-box">
        <div className="box">
          <div className="user-profile">
            <img className="img" alt="" src={e.imgURL} />
            <div className="detail">
              <h3 className="user-name">{e.CandidateName}</h3>
              <span className="address">Karachi, Pakistan</span>
            </div>
          </div>
          <ul className="user-detail">
            <li className="detail2">
              <span>Designation </span>
              <span> : </span>
              <p>{e.CandidateDesignation == 1 ? "President" : "Vice President"}</p>
            </li>
            <li className="detail2">
              <span>Wallet Address </span>
              <span> : </span>
              <p>{`${e.addr.slice(0,4)}...${e.addr.slice(e.addr.length - 4)}`}</p>
            </li>
            <li className="detail2">
              <span>Education </span>
              <span> : </span>
              <p>{e.CandidateEducation}</p>
            </li>
            <li className="detail2">
              <span>Age </span>
              <span> : </span>
              <p>{e.CandidateAge.toString()}</p>
            </li>
            {/* <li className="detail2"> 
              <span>Vote Count </span>
              <span> : </span>
              <p>{e.CountVote.toString()}</p>
            </li> */}
          </ul>
        </div>
      </div>
        ))     
        }

      </div>
    </div>
    
    </>

  );
};

export default Presidents;
