import { useCallback, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./dashboard-voter-president.css";
import VotingArea from "./VotingArea";
import { Store } from "../context/VotingProvider";
const DashboardVoterPresident = () => {
  const navigate = useNavigate();
const {state} = useContext(Store)
  const onTapAreaClick = useCallback(() => {
    navigate("/dashboard-voter-vice-president");
  }, [navigate]);

  const onTapArea1Click = useCallback(() => {
    navigate("/dashboard-voter-vice-president");
  }, [navigate]);

  const onTapArea2Click = useCallback(() => {
    navigate("/dashboard-voter-vice-president");
  }, [navigate]);

  const onRectangleLinkClick = useCallback(() => {
    navigate("/dashboard-voter-vice-president");
  }, [navigate]);

  const onRectangleLink1Click = useCallback(() => {
    navigate("/dashboard-voter-vice-president");
  }, [navigate]);

  const onVicePresidentClick = useCallback(() => {
    navigate("/dashboard-voter-vice-president");
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
    <div className="dashboard-voter-president" data-animate-on-scroll>
      <a className="tap-area" onClick={onTapAreaClick} data-animate-on-scroll />
      <a
        className="tap-area1"
        onClick={onTapArea1Click}
        data-animate-on-scroll
      />
      <a
        className="tap-area2"
        onClick={onTapArea2Click}
        data-animate-on-scroll
      />
      <a
        className="dashboard-voter-president-child"
        onClick={onRectangleLinkClick}
        data-animate-on-scroll
      />
      <a
        className="tap-area"
        onClick={onRectangleLink1Click}
        data-animate-on-scroll
      />
      <div className="dashboard-voter-president-inner" />
      <a
        className="vice-president19"
        onClick={onVicePresidentClick}
        data-animate-on-scroll
      >
        <div className="vice-president-child4" />
        <div className="vice-president20">Vice President</div>
      </a>
      <div className="president20">
        <div className="president-child4" />
        <div className="president21">President</div>
      </div>
      {/* <a
        className="chairman18"
        onClick={onChairmanClick}
        data-animate-on-scroll
      >
        <div className="vice-president-child4" />
        <div className="chairman19">Chairman</div>
      </a> */}
      <div className="dashboard-voter-president-child1">
      {state == 2 ? <VotingArea /> : state == 3 ? <div className="vector-msg">Voting has been Completed!</div> : <div className="vector-msg">Voting not Started Yet!</div>} 
      {/* <VotingArea />  */}
      </div>

      {/* <div className="vector-parent5">

        <img className="vector-icon55" alt="" src="../vector7.svg" />
        <img className="vector-icon77" alt="" src="../vector8.svg" />
      </div> */}
      {/* <img
        className="austin-distel-7uommzpd2ja-unsp-icon27"
        alt=""
        src="../austindistel7uommzpd2jaunsplash27.svg"
      /> */}
      {/* <div className="vector-parent6">
        <img className="vector-icon55" alt="" src="../vector7.svg" />
        <img className="vector-icon77" alt="" src="../vector8.svg" />
      </div> */}
      {/* <div className="vector-parent7">
        <img className="vector-icon55" alt="" src="../vector7.svg" />
        <img className="vector-icon77" alt="" src="../vector8.svg" />
      </div> */}

      {/* <div className="name-parent27">
        <div className="name40">Hammad</div>
        <div className="designation30">Designation</div>
      </div>
      <div className="name-parent28">
        <div className="name41">M. Sami Zuberi</div>
        <div className="designation30">Designation</div>
      </div>
      <div className="name-parent29">
        <div className="name41">Dabeer Ahmed</div>
        <div className="designation30">Designation</div>
      </div>
      <input
        className="dashboard-voter-president-child2"
        type="radio"
        required
        data-animate-on-scroll
      />
      <input
        className="dashboard-voter-president-child3"
        type="radio"
        required
      />
      <input
        className="dashboard-voter-president-child4"
        type="radio"
        required
      /> */}

      <a className="back11" onClick={onBackClick} data-animate-on-scroll>
        <div className="back-child9" />
        <div className="go-back11">Go Back</div>
      </a>
      {/* <a className="abstain17" onClick={onAbstainClick} data-animate-on-scroll>
        <div className="back-child9" />
        <div className="abstain18">Abstain</div>
      </a> */}
      {/* <Link
        className="submit16"
        to="/dashboard-voter-president-confirmation"
        data-animate-on-scroll
      >
        <div className="back-child9" />
        <div className="submit17">Submit</div>
      </Link> */}
    </div>
  );
};

export default DashboardVoterPresident;
