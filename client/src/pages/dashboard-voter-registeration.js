import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard-voter-registeration.css";

const DashboardVoterRegisteration = () => {
  const navigate = useNavigate();

  const onLogoutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onInfoContainerClick = useCallback(() => {
    navigate("/dashboard-voter-info");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
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
    <div className="dashboard-voter-registeration">
      <div className="dashboard-voter-registeration-child" />
      <div className="logout16" onClick={onLogoutContainerClick}>
        <div className="logout-child5" />
        <div className="logout17">Logout</div>
        <img className="vector-icon91" alt="" src="../vector4.svg" />
      </div>
      <div className="candidates19">
        <div className="candidates-child11" />
        <div className="candidates20">Candidates</div>
        <img className="vector-icon92" alt="" src="../vector92.svg" />
      </div>
      <div className="info11" onClick={onInfoContainerClick}>
        <div className="info-child9" />
        <div className="information8">Information</div>
        <img className="vector-icon93" alt="" src="../vector5.svg" />
        <img className="vector-icon94" alt="" src="../vector6.svg" />
      </div>
      <div className="voting10">
        <div className="candidates-child11" />
        <img className="voting-child14" alt="" src="../group-56.svg" />
        <div className="voting-area6">Voting Area</div>
      </div>
      <div className="voter-registration6">
        <div className="candidates21">
          <div className="candidates-child12" />
          <div className="voter-registration7">Voter Registration</div>
        </div>
        <img className="select-icon3" alt="" src="../select3.svg" />
      </div>
      <div className="dashboard-voter-registeration-item" />
      <div className="we-have-send-a-verification-co">
        We have send a verification code on your email
      </div>
      <div className="please-enter-the-code-here">
        Please enter the code here
      </div>
      <div className="dashboard-voter-registeration-inner" />
      <div
        className="dashboard-voter-registeration-child1"
        onClick={onRectangle6Click}
      />
      <div className="submit18">Submit</div>
      <div className="dashboard-voter-registeration-child2" />
      <a
        className="rectangle-parent15"
        onClick={onGroupLinkClick}
        data-animate-on-scroll
      >
        <div className="group-child34" />
        <img
          className="group-child35"
          alt=""
          src="../ellipse-9@2x.jpg"
          onClick={onEllipseImageClick}
        />
      </a>
    </div>
  );
};

export default DashboardVoterRegisteration;
