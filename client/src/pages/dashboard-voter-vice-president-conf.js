import { useCallback, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./dashboard-voter-president-conf.css";
import { Store } from "../context/VotingProvider";

const DashboardVoterVicePresidentConf = () => {
  const {Vote} = useContext(Store)
  const navigate = useNavigate();
  const {state} = useLocation()
  // console.log(JSON.stringify(state.data))
  console.log(state.data)
  let info = state?.data?.split(",")
  console.log(info)
  const onCancelClick = useCallback(() => {
    navigate("/dashboard-voter-vice-president");
  }, [navigate]);

  const onSelectClick = useCallback(() => {
    navigate("/dashboard-vote-casted-success");
  }, [navigate]);

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
    <div className="dashboard-voter-president-conf">
      <div className="dashboard-voter-president-conf-child" />
      <div className="vice-president17">
        <div className="vice-president-child3" />
        <div className="vice-president18">Vice President</div>
      </div>
      <div className="president18">
        <div className="president-child3" />
        <div className="president19">President</div>
      </div>
      {/* <div className="chairman16">
        <div className="vice-president-child3" />
        <div className="chairman17">Chairman</div>
      </div> */}
      <div className="dashboard-voter-president-conf-item" />
      <img
        className="dashboard-voter-president-conf-inner"
        alt=""
        src="../rectangle-15.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon24"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img
        className="dashboard-voter-president-conf-child1"
        alt=""
        src="../rectangle-15.svg"
      />
      <img
        className="dashboard-voter-president-conf-child2"
        alt=""
        src="../rectangle-15.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon25"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <img
        className="austin-distel-7uommzpd2ja-unsp-icon26"
        alt=""
        src="../austindistel7uommzpd2jaunsplash.svg"
      />
      <div className="back10">
        <div className="back-child8" />
        <div className="go-back10">Go Back</div>
      </div>
      <div className="name-parent24">
        <div className="name36">Name</div>
        <div className="designation27">Designation</div>
      </div>
      <div className="name-parent25">
        <div className="name36">Name</div>
        <div className="designation27">Designation</div>
      </div>
      <div className="name-parent26">
        <div className="name36">Name</div>
        <div className="designation27">Designation</div>
      </div>
      <img
        className="dashboard-voter-president-conf-child3"
        alt=""
        src="../ellipse-6.svg"
      />
      <img
        className="dashboard-voter-president-conf-child4"
        alt=""
        src="../ellipse-7.svg"
      />
      <img
        className="dashboard-voter-president-conf-child5"
        alt=""
        src="../ellipse-7.svg"
      />
      
      <div className="abstain15">
        <div className="abstain-child14" />
        <div className="abstain16">Abstain</div>
      </div>
      <div className="submit14">
        <div className="abstain-child14" />
        <div className="submit15">Submit</div>
      </div>
      <img className="vector-icon54" alt="" src="../vector2.svg" />
      <div className="cancel-group">
        <button className="cancel1" onClick={onCancelClick} data-animate-on-scroll>
          {/* <img className="cancel-item" alt="" src="../ellipse-12.svg" /> */}
          <img className="path-12-icon1" alt="" src="../path-13.svg" />
        </button>
        <button className="select1" onClick={()=>Vote(info[0],info[3])} data-animate-on-scroll>
          {/* <img className="cancel-item" alt="" src="../ellipse-13.svg" /> */}
          <img className="path-12-icon1" alt="" src="../path-12.svg" />
        </button>
      </div>
      <div className="confirm6">
        <div className="do-you-confirm-your-votes2">
          Do You Confirm Your Votes
        </div>
        <img className="confirm-inner" alt="" src={info[7]} />
        <div className="name39">{info[5]}</div>
      </div>
      <a
        className="rectangle-parent10"
        onClick={onGroupLinkClick}
        data-animate-on-scroll
      >
        <div className="group-child24" />
        <img
          className="group-child25"
          alt=""
          src={"../ellipse-9@2x.jpg"}
          onClick={onEllipseImage1Click}
        />
      </a>
    </div>
  );
};

export default DashboardVoterVicePresidentConf;
