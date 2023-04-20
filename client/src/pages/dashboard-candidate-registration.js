import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard-candidate-registration.css";
import { Store } from "../context/VotingProvider";

const DashboardCandidateRegisteration = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const {loading, setInfo, addCandidate, admin,currentAccount,info,state} = useContext(Store)
  const handleSelectOption = (e) => {
    setSelectedOption(e.target.value);
    setInfo({...info, designation : e.target.value})
  };

  const register = (e) => {
    e.preventDefault()
    addCandidate(info)
  }
  const onLogoutClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  const onCandidatesClick = useCallback(() => {
    navigate("/dashboard-admin-candidate");
  }, [navigate]);

  const onInfoClick = useCallback(() => {
    navigate("/dashboard-admin-info");
  }, [navigate]);

  const onVotingClick = useCallback(() => {
    navigate("/dashboard-admin-voting-result");
  }, [navigate]);

  const onRectangleLinkClick = useCallback(() => {
    navigate("/dashboard-admin-candidate");
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
      <div className={state ? "dashboard-voter-registeration-child3" : "dashboard-voter-registeration-child31"} />
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
        <div className="voting-area7">Result</div>
      </a>
      <div className={state ? "dashboard-voter-registeration-child4" : "dashboard-voter-registeration-child41" } />
      <div className="dashboard-voter-registeration-child5" />
      <div className="registration-for-voter">Registration For Candidate</div>
      <div className="voter-registration8">
        <div className="candidates24">
          <div className="candidates-child14" />
          <div className="voter-registration9">Candidate Reg</div>
        </div>
        <img className="select-icon4" alt="" src="../select4.svg" />
      </div>
      {/* <div className="line-div" />
      <div className="dashboard-voter-registeration-child6" />
      <input
        className="enter-your-id"
        type="text"
        placeholder="Enter Candidate Name"
        required
      />
      <input
        className="enter-your-address"
        type="text"
        placeholder="Enter Your Address"
        required
      />
      
      <button
        className="dashboard-voter-registeration-child7 register"
        onClick={onRectangleLinkClick}
      >
        Register
      </button>
      <div className="line-div"  /> */}
      {
       state == 0 ?  <div className="enter-your-address">Registration not started yet!</div> :
       state == 1 ? 
       <form onSubmit={register}>
       <input
         className="enter-your-id"
         type="text"
         placeholder="Enter Candidate Name"
         value={info.name}
         onChange={(e)=>setInfo({...info, name : e.target.value})}
         required
       />
        <div className="line-div"  />
        {/* <input
         className="enter-your-address"
         type="text"
         placeholder="Enter Candidate Designation"
         required
       /> */}
        <select value={info.designation} onChange={handleSelectOption} className="enter-your-address"  required>
         <option value="" disabled>Enter Candidate Designation</option>
         <option value="0">Vice President</option>
         <option value="1">President</option>
       </select>
        <div className="line-div1" />
        <input
         className="enter-your-address1"
         type="number"
         placeholder="Enter Candidate Age"
         value={info.age}
         onChange={(e)=>setInfo({...info, age : e.target.value})}
         required
       /> 
        <div className="line-div2" />
        <input
         className="enter-your-address2"
         type="text"
         placeholder="Enter Candidate Education"
         value={info.education}
         onChange={(e)=>setInfo({...info, education : e.target.value})}
         required
       /> 
        <div className="line-div3" />
        <input
         className="enter-your-address3"
         type="text"
         placeholder="Enter Candidate Wallet Address"
         value={info.walletAddress}
         onChange={(e)=>setInfo({...info, walletAddress : e.target.value})}
         required
       /> 
        <div className="line-div4" />
        <input
         className="enter-your-address4"
         type="text"
         placeholder="Enter Candidate Image URL"
         value={info.imgUrl}
         onChange={(e)=>setInfo({...info, imgUrl : e.target.value})}
         required
       /> 
        <div className="line-div5" />
        <input 
         className="dashboard-voter-registeration-child7 register"
         type="submit"
         value="Register"
         disabled={!currentAccount ||loading || currentAccount?.toLowerCase().toString() !== admin?.toLowerCase().toString()}
       />
         
 
       </form>
       :
       <div className="enter-your-address">Registration has been closed!</div> 
      }
 
      <div className="frame-child"
       style={{display: 'flex', alignItems: 'center', width: '100%'}} >
       <h3 style={{margin: 'auto',textAlign: 'center'}}>Welcome To Votify Admin Portal</h3> </div>
    </div>
  );
};

export default DashboardCandidateRegisteration;
