import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard-admin-voting-result.css";
import { Store } from "../context/VotingProvider";

const DashboardAdminVotingResult = () => {
  const navigate = useNavigate();
  const { state, winnerVicePresident, winnerPresident } = useContext(Store);
  // console.log('Rabeeb',winnerPresident.imgURL)
  // const onPresidentClick = useCallback(() => {
  //   navigate("/dashboard-voter-president");
  // }, [navigate]);

  // const onVicePresidentClick = useCallback(() => {
  //   navigate("/dashboard-voter-vice-president");
  // }, [navigate]);

  // const onChairmanClick = useCallback(() => {
  //   navigate("/dashboard-voter-chairman");
  // }, [navigate]);

  const onLogoutClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  const onCandidatesClick = useCallback(() => {
    navigate("/dashboard-admin-candidate");
  }, [navigate]);

  const onInfoClick = useCallback(() => {
    navigate("/dashboard-admin-info");
  }, [navigate]);

  const onVoterRegistrationClick = useCallback(() => {
    navigate("/dashboard-candidate-registeration");
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
      {/* <div className="president4" onClick={onPresidentClick}>
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
      <div className="chairman4" onClick={onChairmanClick}>
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
        <div className="voting-area">Result</div>
      </div>
      <div className="dashboard-admin-voting-area-inner" />
      <a className="info5" onClick={onInfoClick}>
        <div className="info-child3" />
        <div className="information2">Information</div>
        <img className="vector-icon15" alt="" src="../vector5.svg" />
        <img className="vector-icon16" alt="" src="../vector6.svg" />
      </a>
      <a className="voter-registration" onClick={onVoterRegistrationClick}>
        <div className="candidates6">
          <div className="logout-item" />
          <div className="voter-registration1">Candidate Reg</div>
        </div>
        <img className="select-icon" alt="" src="../select.svg" />
      </a>
      <a
        className="rectangle-parent2"
        onClick={onGroupLinkClick}
        data-animate-on-scroll
      >
        <div className="group-child8" />
        <img
          className="group-child9"
          alt=""
          src="../ellipse-9@2x.jpg"
          onClick={onEllipseImageClick}
        />
      </a>
      {/* <div
        className="frame-child"
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <h3 style={{ margin: "auto", textAlign: "center" }}>
          Welcome To Votify Admin Portal
        </h3>{" "}
      </div> */}

      <div className="center2">
        <div className="card2">
          <div className="card-header2">Voting Result</div>
          <div className="card-body2">
            {
              winnerPresident || winnerPresident ? (
                <div className="president-main">
                <div className="president-box" style={{ width: "50%" }}>
                  <div className="center-text">
                    <h3>New President</h3>
                  </div>
                  <div className="box">
                    <div className="user-profile">
                      <img className="img" alt="" src={winnerPresident?.imgURL} />
                      <div className="detail">
                        <h3 className="user-name">
                          {winnerPresident?.CandidateName}
                        </h3>
                        <span className="address">Karachi, Pakistan</span>
                      </div>
                    </div>
                    <hr />
                    <ul className="user-detail">
                      <li className="detail2">
                        <span>Designation </span>
                        <span> : </span>
                        <p>
                          {winnerPresident?.CandidateDesignation == 1
                            ? "President"
                            : "Vice President"}
                        </p>
                      </li>
                      <li className="detail2">
                        <span>Wallet Address </span>
                        <span> : </span>
                        <p>{`${winnerPresident?.addr.slice(
                          0,
                          4
                        )}...${winnerPresident?.addr.slice(
                          winnerPresident?.addr.length - 4
                        )}`}</p>
                      </li>
                      <li className="detail2">
                        <span>Education </span>
                        <span> : </span>
                        <p>{winnerPresident?.CandidateEducation}</p>
                      </li>
                      <li className="detail2">
                        <span>Age </span>
                        <span> : </span>
                        <p>{winnerPresident?.CandidateAge.toString()}</p>
                      </li>
                      <li className="detail2">
                        <span>Vote Count </span>
                        <span> : </span>
                        <p>{winnerPresident?.CountVote.toString()}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="president-box" style={{ width: "50%" }}>
                  <div className="center-text">
                    <h3>New Vice President</h3>
                  </div>
                  <div className="box">
                    <div className="user-profile">
                      <img className="img" alt="" src={winnerVicePresident?.imgURL} />
                      <div className="detail">
                        <h3 className="user-name">
                          {winnerVicePresident?.CandidateName}
                        </h3>
                        <span className="address">Karachi, Pakistan</span>
                      </div>
                    </div>
                    <hr />
                    <ul className="user-detail">
                      <li className="detail2">
                        <span>Designation </span>
                        <span> : </span>
                        <p>
                          {winnerVicePresident?.CandidateDesignation == 1
                            ? "President"
                            : "Vice President"}
                        </p>
                      </li>
                      <li className="detail2">
                        <span>Wallet Address </span>
                        <span> : </span>
                        <p>{`${winnerVicePresident?.addr.slice(
                          0,
                          4
                        )}...${winnerVicePresident?.addr.slice(
                          winnerVicePresident?.addr.length - 4
                        )}`}</p>
                      </li>
                      <li className="detail2">
                        <span>Education </span>
                        <span> : </span>
                        <p>{winnerVicePresident?.CandidateEducation}</p>
                      </li>
                      <li className="detail2">
                        <span>Age </span>
                        <span> : </span>
                        <p>{winnerVicePresident?.CandidateAge.toString()}</p>
                      </li>
                      <li className="detail2">
                        <span>Vote Count </span>
                        <span> : </span>
                        <p>{winnerVicePresident?.CountVote.toString()}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              )
              :
<p>This page contains the result of voting</p>
            }
            {/*  */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminVotingResult;
