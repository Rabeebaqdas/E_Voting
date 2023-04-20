import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard-voter-chairmen-confi.css";

const DashboardVoterChairmenConfi = () => {
  const navigate = useNavigate();

  const onEllipseImage1Click = useCallback(() => {
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
    <div className="dashboard-voter-chairmen-confi">
      <div className="dashboard-voter-chairmen-confi-child" />
      <div className="vice-president7">
        <div className="vice-president-child" />
        <div className="vice-president8">Vice President</div>
      </div>
      <div className="president8">
        <div className="vice-president-child" />
        <div className="president9">President</div>
      </div>
      {/* <div className="chairman6">
        <div className="chairman-child" />
        <div className="chairman7">Chairman</div>
      </div> */}
      <div className="dashboard-voter-chairmen-confi-item" />
      <img
        className="dashboard-voter-chairmen-confi-inner"
        alt=""
        src="../rectangle-15.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon12"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img
        className="dashboard-voter-chairmen-confi-child1"
        alt=""
        src="../rectangle-15.svg"
      />
      <img
        className="dashboard-voter-chairmen-confi-child2"
        alt=""
        src="../rectangle-15.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon13"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon14"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <div className="back5">
        <div className="submit-child" />
        <div className="go-back5">Go Back</div>
      </div>
      <div className="name-parent9">
        <div className="name19">Name</div>
        <div className="designation12">Designation</div>
      </div>
      <div className="name-parent10">
        <div className="name19">Name</div>
        <div className="designation12">Designation</div>
      </div>
      <div className="name-parent11">
        <div className="name19">Name</div>
        <div className="designation12">Designation</div>
      </div>
      <img
        className="dashboard-voter-chairmen-confi-child3"
        alt=""
        src="../ellipse-6.svg"
      />
      <img
        className="dashboard-voter-chairmen-confi-child4"
        alt=""
        src="../ellipse-7.svg"
      />
      <img
        className="dashboard-voter-chairmen-confi-child5"
        alt=""
        src="../ellipse-7.svg"
      />
      <div className="abstain5">
        <div className="submit-child" />
        <div className="abstain6">Abstain</div>
      </div>
      <div className="submit4">
        <div className="submit-child" />
        <div className="submit5">Submit</div>
      </div>
      <img className="vector-icon37" alt="" src="../vector2.svg" />
      <img
        className="dashboard-voter-chairmen-confi-child6"
        alt=""
        src="../group-4.svg"
      />
      <div className="confirm4">
        <div className="do-you-confirm-your-votes">
          Do You Confirm Your Votes
        </div>
        <img className="confirm-child" alt="" src="../ellipse-98@2x.png" />
        <div className="name22">Faris Shah</div>
      </div>
      <a
        className="rectangle-parent5"
        onClick={onGroupLinkClick}
        data-animate-on-scroll
      >
        <div className="group-child14" />
        <img
          className="group-child15"
          alt=""
          src="../ellipse-9@2x.jpg"
          onClick={onEllipseImage1Click}
        />
      </a>
    </div>
  );
};

export default DashboardVoterChairmenConfi;
