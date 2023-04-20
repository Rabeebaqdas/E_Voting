import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard-voter-registeration1.css";
import { useContext } from "react";
import { Store } from "../context/VotingProvider";

const DashboardVoterRegisteration1 = () => {
  const navigate = useNavigate();
  const {currentAccount, state,loading,setAge,age,addVoter} = useContext(Store)
  const onLogoutClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  const onCandidatesClick = useCallback(() => {
    navigate("/dashboard-voter-candidate");
  }, [navigate]);

  const onInfoClick = useCallback(() => {
    navigate("/dashboard-voter-info");
  }, [navigate]);

  const onVotingClick = useCallback(() => {
    navigate("/dashboard-voter-voting-area");
  }, [navigate]);

  const onRectangleLinkClick = useCallback(() => {
    navigate("/dashboard-voter-info");
  }, [navigate]);

  const onEllipseImageClick = useCallback(() => {
    navigate("/voter-profile-information");
  }, [navigate]);

  const onGroupLinkClick = useCallback(() => {
    navigate("/voter-profile-information");
  }, [navigate]);

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

  return (
    <div className="dashboard-voter-registeration1" data-animate-on-scroll>
      <div className="dashboard-voter-registeration-child31" />
      <a className="logout18" onClick={onLogoutClick}>
        <div className="logout-child6" />
        <div className="logout19">Logout</div>
        <img className="vector-icon95" alt="" src="../vector4.svg" />
      </a>
      <a className="candidates22" onClick={onCandidatesClick}>
        <div className="candidates-child13" />
        <div className="candidates23">Candidates</div>
        <img className="vector-icon96" alt="" src="../vector96.svg" />
      </a>
      <a className="info12" onClick={onInfoClick}>
        <div className="info-child10" />
        <div className="information9">Information</div>
        <img className="vector-icon97" alt="" src="../vector5.svg" />
        <img className="vector-icon98" alt="" src="../vector6.svg" />
      </a>
      <a className="voting11" onClick={onVotingClick}>
        <div className="candidates-child13" />
        <img className="voting-child16" alt="" src="../group-57.svg" />
        <div className="voting-area7">Voting Area</div>
      </a>
      <div className="dashboard-voter-registeration-child41" />
      <div className="dashboard-voter-registeration-child5" />
      <div className="registration-for-voter">Registration For Voter</div>
      <div className="voter-registration8">
        <div className="candidates24">
          <div className="candidates-child14" />
          <div className="voter-registration9">Voter Registration</div>
        </div>
        <img className="select-icon4" alt="" src="../select4.svg" />
      </div>
      {state == 0 ?  <div className="enter-your-address">Registration not started yet!</div>  :
      state == 1 ? 
      <>
      
      <div className="line-div" />
      <div className="dashboard-voter-registeration-child6" />

      <input
        className="enter-your-id"
        type="number"
        placeholder="Enter Your Age"
        onChange={(e)=>setAge(e.target.value)}
        value={age}
        required
      />
        <input
        className="enter-your-address"
        type="text"
        disabled
        placeholder="Enter Your Hash Code"
        value={currentAccount}
      />

      <button
        className="dashboard-voter-registeration-child7 register1"
        // onClick={onRectangleLinkClick}
        onClick={addVoter}
        disabled = {loading || !currentAccount}
      >
        Register
      </button>
      </>
      :
       <div className="enter-your-address">Registration has been closed!</div> 
       
      }
    </div>
  );
};

export default DashboardVoterRegisteration1;
