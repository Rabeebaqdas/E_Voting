import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard-voter-info.css";

const DashboardVoterInfo = () => {
  const navigate = useNavigate();

  const onEllipseImageClick = useCallback(() => {
    navigate("/voter-profile-information");
  }, [navigate]);

  const onGroupLinkClick = useCallback(() => {
    navigate("/voter-profile-information");
  }, [navigate]);

  const onDashboardAdminInfoClick = useCallback(() => {
    navigate("/dashboard-voter-candidate");
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
    <div
      className="dashboard-admin-info"
      // onClick={onDashboardAdminInfoClick}
      data-animate-on-scroll
    >
      {/* <div
        className="frame-child"
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <h3 style={{ margin: "auto", textAlign: "center" }}>
          Welcome To Votify
        </h3>{" "}
      </div> */}
      <div className="dashboard-admin-info-child" />
      <Link className="logout8" to="/user-login">
        <div className="logout-child1" />
        <div className="logout9">Logout</div>
        <img className="vector-icon33" alt="" src="../vector4.svg" />
      </Link>
      <Link
        className="candidates10"
        to="/dashboard-voter-candidate"
        data-animate-on-scroll
      >
        <div className="candidates-child6" />
        <div className="candidates11">Candidates</div>
        <img className="vector-icon34" alt="" src="../vector17.svg" />
      </Link>
      <link
        className="voter-registration2"
        to="/dashboard-voter-registration"
      ></link>
      <div className="info7">
        <div className="info-child5" />
        <div className="information4">Information</div>
        <img className="vector-icon35" alt="" src="../vector5.svg" />
        <img className="vector-icon36" alt="" src="../vector6.svg" />
      </div>
      <Link className="voting6" to="/dashboard-voter-voting-area">
        <div className="candidates-child6" />
        <img className="voting-child6" alt="" src="../group-51.svg" />
        <div className="voting-area2">Voting Area</div>
      </Link>
      <div className="dashboard-admin-info-item" />
      <div className="dashboard-admin-info-inner" />
      <div className="rules-for-voting-criteria1">
        Rules For Voting Criteria
      </div>
      <div className="welcome-to-e-voting-system-the1">
        <p>1. Login with your email and password</p>
        <p>
          2. Click the login button after right credentials Email verification
          step
        </p>
        <p>3. Enter right code and enter to the voitng website.</p>
        <p>4. Read steps clearfully.</p>
        <p>
          5. Now go to the registration page and register yourself for vote
          because it is a <p>BlockChain Based Voting System.</p>
        </p>
        <p>
          6. After Registration see the candidates that are elected for election
        </p>
        <p>
          7. Go to the Voting Area page and cast the vote for selecting right
          candidate.
        </p>
        <p>
          8. After casting the vote successfully you logout by preesing the
          logout button.
        </p>
        <p>Thanks for reading.</p>
      </div>
      <Link className="voter-registration4" to="/dashboard-voter-registeration">
        <div className="candidates12">
          <div className="logout-child1" />
          <div className="voter-registration5">Voter Registration</div>
        </div>
        <img className="select-icon2" alt="" src="../select1.svg" />
      </Link>

      <a
        className="rectangle-parent4"
        onClick={onGroupLinkClick}
        data-animate-on-scroll
      ></a>
    </div>
  );
};

export default DashboardVoterInfo;
