import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./abstain1.css";

const Abstain1 = () => {
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
    <div className="abstain-1" data-animate-on-scroll>
      <div className="abstain-1-child" />
      <div className="candidates1">
        <div className="candidates-item" />
        <div className="vice-president1">Vice President</div>
      </div>
      <div className="info1">
        <div className="info-item" />
        <div className="president1">President</div>
      </div>
      {/* <div className="voting1">
        <div className="candidates-item" />
        <div className="chairman1">Chairman</div>
      </div> */}
      <div className="abstain-1-item" />
      <img className="abstain-1-inner" alt="" src="../rectangle-15.svg" />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon3"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img className="abstain-1-child1" alt="" src="../rectangle-15.svg" />
      <img className="abstain-1-child2" alt="" src="../rectangle-15.svg" />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon4"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon5"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <div className="abstain-1-child3" />
      <div className="go-back1">Go Back</div>
      <div className="group-div">
        <div className="name3">Name</div>
        <div className="designation3">Designation</div>
      </div>
      <div className="name-parent1">
        <div className="name3">Name</div>
        <div className="designation3">Designation</div>
      </div>
      <div className="name-parent2">
        <div className="name3">Name</div>
        <div className="designation3">Designation</div>
      </div>
      <img className="abstain-1-child4" alt="" src="../ellipse-6.svg" />
      <img className="abstain-1-child5" alt="" src="../ellipse-7.svg" />
      <img className="abstain-1-child6" alt="" src="../ellipse-7.svg" />
      <div className="abstain-1-child7" />
      <div className="abstain-1-child8" />
      <div className="abstain1">Abstain</div>
      <div className="submit1">Submit</div>
      <img className="vector-icon1" alt="" src="../vector.svg" />
      <div className="confirm1">
        <div className="your-vote-is-successfully-abst">
          Your vote is successfully abstain!
        </div>
      </div>
      <Link className="back2" to="/dashboard-voter-candidate" data-animate-on-scroll>
        <div className="back-inner" />
        <div className="logout1">{`Go Back `}</div>
      </Link>
      <a
        className="rectangle-group"
        onClick={onGroupLinkClick}
        data-animate-on-scroll
      >
        <div className="group-inner" />
        <img
          className="group-child1"
          alt=""
          src="../ellipse-9@2x.jpg"
          onClick={onEllipseImageClick}
        />
      </a>
    </div>
  );
};

export default Abstain1;
