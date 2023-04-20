import { useCallback, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard-admin-info.css";
import { Store } from "../context/VotingProvider";

const DashboardAdminInfo = () => {
  const navigate = useNavigate();
  const {changeState,currentAccount,loading,state,admin} = useContext(Store)
  const onEllipseImageClick = useCallback(() => {
    navigate("/voter-profile-information");
  }, [navigate]);

  const onVoterRegistrationClick = useCallback(() => {
    navigate("/dashboard-candidate-registeration");
  }, [navigate]);

  const onGroupLinkClick = useCallback(() => {
    navigate("/voter-profile-information");
  }, [navigate]);

  const onDashboardAdminInfoClick = useCallback(() => {
    navigate("/dashboard-admin-candidate");
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
      <div className="dashboard-admin-info-child" />
      <Link className="logout8" to="/admin-login">
        <div className="logout-child1" />
        <div className="logout9">Logout</div>
        <img className="vector-icon33" alt="" src="../vector4.svg" />
      </Link>
      <Link
        className="candidates10"
        to="/dashboard-admin-candidate"
        data-animate-on-scroll
      >
        <div className="candidates-child6" />
        <div className="candidates11">Candidates</div>
        <img className="vector-icon34" alt="" src="../vector17.svg" />
      </Link>
      <link
        className="voter-registration2"
        to="/dashboard-candidate-registration"
      ></link>

      <div className="info7">
        <div className="info-child5" />
        <div className="information4">Information</div>
        <img className="vector-icon35" alt="" src="../vector5.svg" />
        <img className="vector-icon36" alt="" src="../vector6.svg" />
      </div>
      <Link className="voting6" to="/dashboard-admin-voting-result">
        <div className="candidates-child6" />
        <img className="voting-child6" alt="" src="../group-51.svg" />
        <div className="voting-area2">Result</div>
      </Link>
      <div className="dashboard-admin-info-item" />
      <div className="dashboard-admin-info-inner" />
      <div className="rules-for-voting-criteria1">
        Rules For Voting Criteria
      </div>
      <div className="welcome-to-e-voting-system-the1">
        <p>
          The admin portal allows the admin to manage the election phases. The
          admin can change the{" "}
        </p>
        <p>
          phases as needed. To register candidates, the admin can click on the
          registration phase button{" "}
        </p>
        <p>
          and proceed to the candidate registration page. The admin can initiate
          the voting process by{" "}
        </p>
        <p>
          clicking on the voting phase button and can stop voting process
          whenever necessary. Finally,{" "}
        </p>
        <p>
          the admin can generate the election results by clicking on the
          generate result button.
        </p>
        <div className="center1">
          <div className="card1">
            <div className="card-header1">Change Phase</div>
            <div className="card-body1">
              <p>
                Change the phases of election by clicking on the buttons below;
              </p>
              {
                state == 0 ? 
                <div>
                <button className="voting-button" onClick={changeState} disabled={!currentAccount ||loading || currentAccount?.toLowerCase().toString() !== admin?.toLowerCase().toString()}>
                 Start Registration Phase
                </button>
              </div>
              :
              state == 1 ?

              <div>
                <button className="voting-button" onClick={changeState} disabled={!currentAccount ||loading || currentAccount?.toLowerCase().toString() !== admin?.toLowerCase().toString() }>
                 Start Voting Phase
                </button>
              </div>
              :
              state == 2 ? 
              <div>
                <button className="voting-button" onClick={changeState} disabled={!currentAccount ||loading || currentAccount?.toLowerCase().toString() !== admin?.toLowerCase().toString()}>
                  Result Phase
                </button>
              </div>
              :
              ""
              }


            </div>
          </div>
        </div>
      </div>
      <Link
        className="voter-registration4"
        to="/dashboard-candidate-registeration"
      >
        <div className="candidates12" onClick={onVoterRegistrationClick}>
          <div className="logout-child1" />
          <div className="voter-registration5">Candidates Reg</div>
        </div>
        <img className="select-icon2" alt="" src="../select1.svg" />
      </Link>
      {/* <div
        className="frame-child"
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <h3 style={{ margin: "auto", textAlign: "center" }}>
          Welcome To Votify Admin Portal
        </h3>{" "}
      </div> */}
    </div>
  );
};

export default DashboardAdminInfo;
