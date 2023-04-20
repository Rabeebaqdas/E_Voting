import React, { useContext, useEffect, useCallback, useState } from "react";
import "./voting.css";
import { Store } from "../context/VotingProvider";
import { Link, useNavigate } from "react-router-dom";
const VotingArea = () => {
    const {presidents} = useContext(Store)
    const navigate = useNavigate();
    const [option,setOption] = useState()
    // const onAbstainClick = useCallback(() => {
    //     navigate("/abstain",  state={{data:option}});
    //   }, [navigate]);

    useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
          "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                const targetElement = entry.target;
                targetElement.classList.add("animate");
                observer.unobserve(targetElement);
              }
            }
          },
          {
            threshold: 0.15,
          }
        );
    
        for (let i = 0; i < scrollAnimElements.length; i++) {
          observer.observe(scrollAnimElements[i]);
        }
    
        return () => {
          for (let i = 0; i < scrollAnimElements.length; i++) {
            observer.unobserve(scrollAnimElements[i]);
          }
        };
      }, []);

      console.log(option)
  return (
    <>
      <div className="voting-area-wrapper">
          <article class="flex-container">
{
    presidents.map((e)=>(
        <>
        <img src={e.imgURL} className="imgSize" alt="Picture of a person"></img>
  
      <div class="flex-item">
        <h2>{e.CandidateName}</h2>
        <p>{e.CandidateDesignation == 1 ? "President" : "Vice President"}</p>
      </div>
      <div class="flex-item text-end">
        <input
          type="radio"
          id="subscribe"
          name="newsletter"
          className="radiobtn"
          value={e}
          onChange={(e)=>setOption(e.target.value)}
        ></input>
      </div>
      
</>
    ))
}
{
  option !== undefined ? 
  <>
  <Link
          className="abstainbtn"
          to="/abstain"
          data-animate-on-scroll
          state={{data:option}}
  >

  
<a className="abstainbtn"  data-animate-on-scroll>
        <div className="back-child9" />
        <div className="abstain18">Abstain</div>
      </a>
      </Link>
      <Link
        className="abstainbtn"
        to="/dashboard-voter-president-confirmation"
        data-animate-on-scroll
        state={{data:option}}
      >
        <div className="back-child9" />
        <div className="submit17">Submit</div>
      </Link>
      
      </>
  :
  ""
}

    </article>

      </div>
    </>
  );
};

export default VotingArea;
