import { useCallback, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./abstain.css";
import { Store } from "../context/VotingProvider";

const Abstain = () => {
  const navigate = useNavigate();
  const {Abstain,loading} = useContext(Store)
  const {state} = useLocation();
  console.log(state?.data)
  let info = state?.data?.split(",")
  console.log("Hwello",info);
  const onCancelClick = useCallback(() => {
    navigate("/dashboard-voter-voting-area");
  }, [navigate]);

  const onSelectClick = useCallback(() => {
    navigate("/abstain-1");
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
    <div className="abstain2" data-animate-on-scroll>
      <div className="abstain-child" />
      <div className="candidates2">
        <div className="candidates-inner" />
        <div className="vice-president2">Vice President</div>
      </div>
      <div className="info2">
        <div className="info-inner" />
        <div className="president2">President</div>
      </div>
      {/* <div className="voting2">
        <div className="candidates-inner" />
        <div className="chairman2">Chairman</div>
      </div> */}
      <div className="abstain-item" />
      <img className="abstain-inner" alt="" src="../rectangle-15.svg" />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon6"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img className="abstain-child1" alt="" src="../rectangle-15.svg" />
      <img className="abstain-child2" alt="" src="../rectangle-15.svg" />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon7"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon8"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <div className="abstain-child3" />
      <div className="go-back2">Go Back</div>
      <div className="name-parent3">
        <div className="name6">Name</div>
        <div className="designation6">Designation</div>
      </div>
      <div className="name-parent4">
        <div className="name6">Name</div>
        <div className="designation6">Designation</div>
      </div>
      <div className="name-parent5">
        <div className="name6">Name</div>
        <div className="designation6">Designation</div>
      </div>
      <img className="abstain-child4" alt="" src="../ellipse-6.svg" />
      <img className="abstain-child5" alt="" src="../ellipse-7.svg" />
      <img className="abstain-child6" alt="" src="../ellipse-7.svg" />
      <div className="abstain-child7" />
      <div className="abstain-child8" />
      <div className="abstain3">Abstain</div>
      <div className="submit2">Submit</div>
      <img className="vector-icon2" alt="" src="../vector2.svg" />
      <div className="confirm2">
        <div className="do-you-want-to-abstain-your-vo">
          Do you want to abstain your vote?
        </div>
      </div>
      <div className="cancel-parent">
      <button className="cancel1" onClick={onCancelClick} data-animate-on-scroll disabled={loading}>
          {/* <img className="cancel-item" alt="" src="../ellipse-12.svg" /> */}
          <img className="path-12-icon1" alt="" src="../path-13.svg" />
        </button>
        <button className="select1" onClick={()=>Abstain(info[3])} data-animate-on-scroll disabled={loading}>
          {/* <img className="cancel-item" alt="" src="../ellipse-13.svg" /> */}
          <img className="path-12-icon1" alt="" src="../path-12.svg" />
        </button>
      </div>
      <a
        className="rectangle-container"
        onClick={onGroupLinkClick}
        data-animate-on-scroll
      >
        <div className="group-child2" />
        <img
          className="group-child3"
          alt=""
          src="../ellipse-9@2x.jpg"
          onClick={onEllipseImageClick}
        />
      </a>
    </div>
  );
};

export default Abstain;
