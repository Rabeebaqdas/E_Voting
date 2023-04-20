import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard-admin-candidate.css";
import { Store } from "../context/VotingProvider";
import Presidents from "./Presidents";

const DashboardAdminCandidate = () => {
  const navigate = useNavigate();
  const { presidents, vicePresidents } = useContext(Store);
  const onInfoClick = useCallback(() => {
    navigate("/dashboard-admin-info");
  }, [navigate]);

  const onVoterRegistrationClick = useCallback(() => {
    navigate("/dashboard-candidate-registeration");
  }, [navigate]);

  const onLogoutClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  const onVotingClick = useCallback(() => {
    navigate("/dashboard-admin-voting-result");
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
    <div className="dashboard-admin-candidate" data-animate-on-scroll>
      <div className="dashboard-admin-candidate-child" />
      <div className="candidates-parent">
        <div className="candidates7">
          <div className="candidates-child4" />
          <div className="candidates8">Candidates</div>
          <img className="vector-icon17" alt="" src="../vector17.svg" />
        </div>
        <a className="info6" onClick={onInfoClick}>
          <div className="info-child4" />
          <div className="information3">Information</div>
          <img className="vector-icon18" alt="" src="../vector5.svg" />
          <img className="vector-icon19" alt="" src="../vector6.svg" />
        </a>

        <div
          className="frame-child"
          style={{ display: "flex", alignItems: "center", width: "100%" }}
        >
          <h3 style={{ margin: "auto", textAlign: "center" }}>
            Welcome To Votify Admin Portal
          </h3>{" "}
        </div>
        <a className="voter-registration2" onClick={onVoterRegistrationClick}>
          <div className="candidates9">
            <div className="logout-inner" />
            <div className="voter-registration3">Candidate Reg</div>
          </div>
          <img className="select-icon1" alt="" src="../select1.svg" />
        </a>
        <a className="logout6" onClick={onLogoutClick}>
          <div className="logout-inner" />
          <div className="logout7">Logout</div>
          <img className="vector-icon20" alt="" src="../vector4.svg" />
        </a>
        <a className="voting5" onClick={onVotingClick}>
          <div className="voting-child3" />
          <img className="voting-child4" alt="" src="../group-51.svg" />
          <div className="voting-area1">Result</div>
        </a>
      </div>

      <div className="p1-parent">
          <Presidents />
      </div>
    </div>
  );
};

export default DashboardAdminCandidate;
