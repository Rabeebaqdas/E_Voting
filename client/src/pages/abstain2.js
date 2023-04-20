import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./abstain2.css";

const Abstain2 = () => {
  const navigate = useNavigate();

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
    <div className="abstain-2">
      <div className="abstain-2-child" />
      <div className="candidates">
        <div className="candidates-child" />
        <div className="vice-president">Vice President</div>
      </div>
      <div className="info">
        <div className="info-child" />
        <div className="president">President</div>
      </div>
      {/* <div className="voting">
        <div className="candidates-child" />
        <div className="chairman">Chairman</div>
      </div> */}
      <div className="abstain-2-item" />
      <img className="abstain-2-inner" alt="" src="../rectangle-15.svg" />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img className="rectangle-icon" alt="" src="../rectangle-15.svg" />
      <img className="abstain-2-child1" alt="" src="../rectangle-15.svg" />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon1"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon2"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <div className="rectangle-div" />
      <div className="go-back">Go Back</div>
      <div className="name-parent">
        <div className="name">Name</div>
        <div className="designation">Designation</div>
      </div>
      <div className="name-group">
        <div className="name">Name</div>
        <div className="designation">Designation</div>
      </div>
      <div className="name-container">
        <div className="name">Name</div>
        <div className="designation">Designation</div>
      </div>
      <img className="ellipse-icon" alt="" src="../ellipse-6.svg" />
      <img className="abstain-2-child2" alt="" src="../ellipse-7.svg" />
      <img className="abstain-2-child3" alt="" src="../ellipse-7.svg" />
      <div className="abstain-2-child4" />
      <div className="abstain-2-child5" />
      <div className="abstain">Abstain</div>
      <div className="submit">Submit</div>
      <img className="vector-icon" alt="" src="../vector.svg" />
      <div className="confirm">
        <div className="your-vote-is-successfully-cast">
          Your vote is successfully casted!
        </div>
      </div>
      <div className="back">
        <div className="back-child" />
        <div className="logout">{`Logout `}</div>
      </div>
      <div className="back1">
        <div className="back-child" />
        <div className="recipt">Recipt</div>
      </div>
      <a
        className="rectangle-parent"
        onClick={onGroupLinkClick}
        data-animate-on-scroll
      >
        <div className="group-child" />
        <img
          className="group-item"
          alt=""
          src="../ellipse-9@2x.jpg"
          onClick={onEllipseImageClick}
        />
      </a>
    </div>
  );
};

export default Abstain2;
