import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard-admin-voting-result.css";

const DashboardVoterVotingArea = () => {
  const navigate = useNavigate();

  const onPresidentClick = useCallback(() => {
    navigate("/dashboard-voter-president");
  }, [navigate]);

  const onVicePresidentClick = useCallback(() => {
    navigate("/dashboard-voter-vice-president");
  }, [navigate]);

  const onChairmanClick = useCallback(() => {
    navigate("/dashboard-voter-chairman");
  }, [navigate]);

  const onLogoutClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  const onCandidatesClick = useCallback(() => {
    navigate("/dashboard-voter-candidate");
  }, [navigate]);

  const onInfoClick = useCallback(() => {
    navigate("/dashboard-voter-info");
  }, [navigate]);

  const onVoterRegistrationClick = useCallback(() => {
    navigate("/dashboard-voter-registeration");
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
    <div className="dashboard-admin-voting-area" data-animate-on-scroll>
      {/* <div
        className="frame-child"
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <h3 style={{ margin: "auto", textAlign: "center" }}>
          Welcome To Votify
        </h3>{" "}
      </div> */}
      <div className="president4" onClick={onPresidentClick}>
        <img className="vector-icon7" alt="" src="../vector7.svg" />
        <div className="president5">President</div>
        <img className="vector-icon8" alt="" src="../vector8.svg" />
      </div>
      <div className="dashboard-admin-voting-area-child" />
      <div className="vice-president4" onClick={onVicePresidentClick}>
        <div className="vector-parent">
          <img className="vector-icon7" alt="" src="../vector7.svg" />
          <div className="vice-president5">Vice President</div>
          <img className="vector-icon8" alt="" src="../vector10.svg" />
        </div>
      </div>
      {/* <div className="chairman4" onClick={onChairmanClick}>
        <img className="vector-icon7" alt="" src="../vector7.svg" />
        <div className="president5">Chairman</div>
        <img className="vector-icon8" alt="" src="../vector8.svg" />
      </div> */}
      <div className="dashboard-admin-voting-area-item" />
      <a className="logout4" onClick={onLogoutClick}>
        <div className="logout-item" />
        <div className="logout5">Logout</div>
        <img className="vector-icon13" alt="" src="../vector4.svg" />
      </a>
      <a className="candidates4" onClick={onCandidatesClick}>
        <div className="candidates-child2" />
        <div className="candidates5">Candidates</div>
        <img className="vector-icon14" alt="" src="../vector14.svg" />
      </a>
      <div className="voting4">
        <div className="voting-child2" />
        <img className="group-icon" alt="" src="../group-5.svg" />
        <div className="voting-area">Voting Area</div>
      </div>
      <div className="dashboard-voter-voting-area-child2" />
      <a className="info5" onClick={onInfoClick}>
        <div className="info-child3" />
        <div className="information2">Information</div>
        <img className="vector-icon15" alt="" src="../vector5.svg" />
        <img className="vector-icon16" alt="" src="../vector6.svg" />
      </a>
      <a className="voter-registration" onClick={onVoterRegistrationClick}>
        <div className="candidates6">
          <div className="logout-item" />
          <div className="voter-registration1">Voter Registration</div>
        </div>
        <img className="select-icon" alt="" src="../select.svg" />
      </a>
    </div>
  );
};

export default DashboardVoterVotingArea;
