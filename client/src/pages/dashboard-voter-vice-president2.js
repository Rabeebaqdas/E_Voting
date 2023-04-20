import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard-voter-vice-president2.css";
import { Store } from "../context/VotingProvider";
import VotingArea2 from "./VotingArea2";

const DashboardVoterVicePresident2 = () => {
  const navigate = useNavigate();
  const {state} = useContext(Store)
  const onPresidentClick = useCallback(() => {
    navigate("/dashboard-voter-president");
  }, [navigate]);

  const onChairmanClick = useCallback(() => {
    navigate("/dashboard-voter-chairman");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/dashboard-voter-voting-area");
  }, [navigate]);

  const onAbstainClick = useCallback(() => {
    navigate("/abstain");
  }, [navigate]);

  const onSubmitClick = useCallback(() => {
    // Please sync "dashboard voter president selection" to the project
  }, []);

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
    <div className="dashboard-voter-vice-president2" data-animate-on-scroll>
      <div className="dashboard-voter-vice-president-child15" />
      <div className="vice-president15">
        <div className="vice-president-child2" />
        <div className="vice-president16">Vice President</div>
      </div>
      <a
        className="president16"
        onClick={onPresidentClick}
        data-animate-on-scroll
      >
        <div className="president-child2" />
        <div className="president17">President</div>
      </a>
      <div className="dashboard-voter-president-child1">
      {state == 2 ?   <VotingArea2 /> : state == 3 ? <div className="vector-msg">Voting has been Completed!</div> : <div className="vector-msg">Voting not Started Yet!</div>} 
      {/* <VotingArea2 /> */}
      </div>
      {/* <img
        className="austin-distel-7uommzpd2ja-unsp-icon22"
        alt=""
        src="../austindistel7uommzpd2jaunsplash22.svg"
      /> */}
      {/* <div className="vector-parent3">
        <img className="vector-icon55" alt="" src="../vector7.svg" />
        <img className="vector-icon77" alt="" src="../vector8.svg" />
      </div>
      <div className="vector-parent4">
        <img className="vector-icon55" alt="" src="../vector7.svg" />
        <img className="vector-icon77" alt="" src="../vector8.svg" />
      </div> */}
      {/* <img
        className="austin-distel-7uommzpd2ja-unsp-icon23"
        alt=""
        src="../austindistel7uommzpd2jaunsplash23@2x.png"
      /> */}
      {/* <div className="austin-distel-7uommzpd2ja-unsp2">
        <img className="vector-icon53" alt="" src="../vector53@2x.png" />
      </div> */}
      {/* <div className="name-parent21">
        <div className="name33">M. Sameer Javeed</div>
        <div className="designation24">Designation</div>
      </div>
      <div className="name-parent22">
        <div className="name34">M. Hassan Ejaz</div>
        <div className="designation24">Designation</div>
      </div>
      <div className="name-parent23">
        <div className="name35">M. Bassam Jamal</div>
        <div className="designation24">Designation</div>
      </div>
      <input
        className="dashboard-voter-vice-president-child17"
        type="radio"
        required
      />
      <input
        className="dashboard-voter-vice-president-child18"
        type="radio"
        required
      /> */}
      {/* <input
        className="dashboard-voter-vice-president-child19"
        type="radio"
        required
      /> */}
      {/* <a
        className="chairman14"
        onClick={onChairmanClick}
        data-animate-on-scroll
      >
        <div className="president-child2" />
        <div className="chairman15">Chairman</div>
      </a> */}
      <a className="back9" onClick={onBackClick} data-animate-on-scroll>
        <div className="back-child7" />
        <div className="go-back9">Go Back</div>
      </a>
      {/* <a className="abstain13" onClick={onAbstainClick} data-animate-on-scroll>
        <div className="back-child7" />
        <div className="abstain14">Abstain</div>
      </a>
      <a className="submit12" onClick={onSubmitClick} data-animate-on-scroll>
        <div className="back-child7" />
        <div className="submit13">Submit</div>
      </a> */}
      {/* <a
        className="rectangle-parent9"
        onClick={onGroupLinkClick}
        data-animate-on-scroll
      >
        <div className="group-child22" />
        <img
          className="group-child23"
          alt=""
          src="../ellipse-9@2x.jpg"
          onClick={onEllipseImageClick}
        />
      </a> */}
    </div>
  );
};

export default DashboardVoterVicePresident2;
