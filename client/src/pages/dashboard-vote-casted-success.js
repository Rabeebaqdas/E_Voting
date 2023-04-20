import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard-vote-casted-success.css";

const DashboardVoteCastedSuccess = () => {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate("/dashboard-voter-candidate");
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
    <div className="dashboard-vote-casted-success" data-animate-on-scroll>
      <div className="dashboard-vote-casted-success-child" />
      <div className="candidates3">
        <div className="candidates-child1" />
        <div className="vice-president3">Vice President</div>
      </div>
      <div className="info3">
        <div className="info-child1" />
        <div className="president3">President</div>
      </div>
      {/* <div className="voting3">
        <div className="candidates-child1" />
        <div className="chairman3">Chairman</div>
      </div> */}
      <div className="dashboard-vote-casted-success-item" />
      <img
        className="dashboard-vote-casted-success-inner"
        alt=""
        src="../rectangle-15.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon9"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img
        className="dashboard-vote-casted-success-child1"
        alt=""
        src="../rectangle-15.svg"
      />
      <img
        className="dashboard-vote-casted-success-child2"
        alt=""
        src="../rectangle-15.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon10"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon11"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <div className="dashboard-vote-casted-success-child3" />
      <div className="go-back3">Go Back</div>
      <div className="name-parent6">
        <div className="name9">Name</div>
        <div className="designation9">Designation</div>
      </div>
      <div className="name-parent7">
        <div className="name9">Name</div>
        <div className="designation9">Designation</div>
      </div>
      <div className="name-parent8">
        <div className="name9">Name</div>
        <div className="designation9">Designation</div>
      </div>
      <img
        className="dashboard-vote-casted-success-child4"
        alt=""
        src="../ellipse-6.svg"
      />
      <img
        className="dashboard-vote-casted-success-child5"
        alt=""
        src="../ellipse-7.svg"
      />
      <img
        className="dashboard-vote-casted-success-child6"
        alt=""
        src="../ellipse-7.svg"
      />
      <div className="dashboard-vote-casted-success-child7" />
      <div className="dashboard-vote-casted-success-child8" />
      <div className="abstain4">Abstain</div>
      <div className="submit3">Submit</div>
      <img className="vector-icon3" alt="" src="../vector3.svg" />
      <div className="confirm3">
        <div className="your-vote-is-successfully-cast1">
          Your Vote is successfully cast
        </div>
      </div>
      <a className="back3" onClick={onBackClick} data-animate-on-scroll>
        <div className="back-child1" />
        <div className="go-back4">Go Back</div>
      </a>
      {/* <a className="back4">
        <div className="back-child1" />
        <div className="recipt1">Recipt</div>
      </a> */}
      <a className="group-a" onClick={onGroupLinkClick} data-animate-on-scroll>
        <div className="group-child4" />
        <img
          className="group-child5"
          alt=""
          src="../ellipse-9@2x.jpg"
          onClick={onEllipseImageClick}
        />
      </a>
    </div>
  );
};

export default DashboardVoteCastedSuccess;
