import { useCallback, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./dashboard-voter-chairman.css";

const DashboardVoterChairman = () => {
  const navigate = useNavigate();

  const onPresidentClick = useCallback(() => {
    navigate("/dashboard-voter-president");
  }, [navigate]);

  const onEllipseRadioClick = useCallback(() => {
    // Please sync "dashboard voter chairmen selection" to the project
  }, []);

  const onVicePresidentClick = useCallback(() => {
    navigate("/dashboard-voter-vice-president");
  }, [navigate]);

  const onAbstainClick = useCallback(() => {
    navigate("/abstain");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/dashboard-voter-voting-area");
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
    <div className="dashboard-voter-chairman" data-animate-on-scroll>
      <div className="dashboard-voter-chairman-child" />
      <a
        className="president10"
        onClick={onPresidentClick}
        data-animate-on-scroll
      >
        <div className="president-item" />
        <div className="president11">President</div>
      </a>
      {/* <div className="chairman8">
        <div className="chairman-item" />
        <div className="chairman9">Chairman</div>
      </div> */}
      <div className="dashboard-voter-chairman-item" />
      <div className="vector-group">
        <img className="vector-icon55" alt="" src="../vector7.svg" />
        <img className="vector-icon77" alt="" src="../vector8.svg" />
      </div>
      {/* <img
        className="austin-distel-7uommzpd2ja-unsp-icon15"
        alt=""
        src="../austindistel7uommzpd2jaunsplash15.svg"
      /> */}
      <div className="vector-container">
        <img className="vector-icon55" alt="" src="../vector7.svg" />
        <img className="vector-icon77" alt="" src="../vector8.svg" />
      </div>
      <div className="vector-parent1">
        <img className="vector-icon55" alt="" src="../vector7.svg" />
        <img className="vector-icon77" alt="" src="../vector8.svg" />
      </div>
      {/* <div className="austin-distel-7uommzpd2ja-unsp">
        <img className="vector-icon44" alt="" src="../vector44@2x.png" />
      </div>
      <div className="austin-distel-7uommzpd2ja-unsp1">
        <img className="vector-icon44" alt="" src="../vector45@2x.png" />
      </div> */}
      <a className="back9" onClick={onBackClick} data-animate-on-scroll>
        <div className="back-child7" />
        <div className="go-back9">Go Back</div>
      </a>
      <div className="name-parent12">
        <div className="name23">Faris Shah</div>
        <div className="designation15">Designation</div>
      </div>
      <div className="name-parent13">
        <div className="name23">Ali Arham</div>
        <div className="designation15">Designation</div>
      </div>
      <div className="name-parent14">
        <div className="name23">M. Huzaifa</div>
        <div className="designation15">Designation</div>
      </div>
      <input
        className="dashboard-voter-chairman-inner"
        type="radio"
        required
        onClick={onEllipseRadioClick}
      />
      <input className="ellipse-input" type="radio" required />
      <input
        className="dashboard-voter-chairman-child1"
        type="radio"
        required
      />
      <a
        className="vice-president9"
        onClick={onVicePresidentClick}
        data-animate-on-scroll
      >
        <div className="president-item" />
        <div className="vice-president10">Vice President</div>
      </a>
      <a className="abstain7" onClick={onAbstainClick} data-animate-on-scroll>
        <div className="submit-item" />
        <div className="abstain8">Abstain</div>
      </a>
      {/* <a
        className="rectangle-parent6"
        onClick={onGroupLinkClick}
        data-animate-on-scroll
      >
        <div className="group-child16" />
        <img
          className="group-child17"
          alt=""
          src="../ellipse-9@2x.jpg"
          onClick={onEllipseImageClick}
        />
      </a> */}
      <Link
        className="submit6"
        to="/dashboard-voter-president-confirmation"
        data-animate-on-scroll
      >
        <div className="submit-item" />
        <div className="submit7">Submit</div>
      </Link>
    </div>
  );
};

export default DashboardVoterChairman;
