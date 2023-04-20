import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./voter-profile-information.css";

const VoterProfileInformation = () => {
  const navigate = useNavigate();

  const onLogoutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCancelClick = useCallback(() => {
    navigate("/dashboard-voter-info");
  }, [navigate]);

  const onVoterProfileInformationClick = useCallback(() => {
    navigate("/dashboard-voter-candidate");
  }, [navigate]);

  return (
    <div
      className="voter-profile-information"
      onClick={onVoterProfileInformationClick}
    >
      <div className="voter-profile-information-child" />
      <div className="logout2" onClick={onLogoutContainerClick}>
        <div className="logout-child" />
        <div className="logout3">Logout</div>
        <img className="vector-icon4" alt="" src="../vector4.svg" />
      </div>
      <div className="info4">
        <div className="info-child2" />
        <div className="information">Information</div>
        <img className="vector-icon5" alt="" src="../vector5.svg" />
        <img className="vector-icon6" alt="" src="../vector6.svg" />
      </div>
      <div className="rectangle-parent1">
        <div className="group-child6" />
        <div className="group-child7" />
        <div className="rules-for-voting-criteria">
          Rules For Voting Criteria
        </div>
        <div className="welcome-to-e-voting-system-the">
          <p className="these-are-the-some-rules-for-v">
            <span>Welcome To E-Voting System</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span>{`These are the some rules for voting criteria because it is a BlockChain based `}</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span>decenterlized Voting Technology</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span className="span">.</span>
            <span>{` Login Yourself with the given id & password`}</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span className="span">.</span>
            <span> Now your Face Verification step</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span className="span">.</span>
            <span>{` After Face verification otp code will automatically send to your email put it in the `}</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span>box</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span className="span">.</span>
            <span> Now read this guidelines</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span className="span">.</span>
            <span> View the Candidates Information in the candidate page</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span className="span">.</span>
            <span>{` Now going to Voting area and select the right candidate or if you don’t vote to any `}</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span>candidate you abstain your vote</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span className="span">.</span>
            <span>{` If you click the vote button it’s verify your vote `}</span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span className="span">.</span>
            <span>
              {" "}
              if you press Yes then move forward else You can change your vote
            </span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span className="span">.</span>
            <span>
              {" "}
              but if you click to Yes the vote is done. No one can change it or
              remove it.
            </span>
          </p>
          <p className="these-are-the-some-rules-for-v">
            <span className="span">.</span>
            <span> After casting all the votes you can logout your id</span>
          </p>
        </div>
      </div>
      <a className="voter-profile-information-item" />
      <div className="voter-profile-information-inner" />
      <div className="voter-profile-information-child1" />
      <div className="information1">Information</div>
      <div className="name12">Name</div>
      <div className="burhan-al-haq-siddiqui">Burhan Al Haq Siddiqui</div>
      <div className="id">Id</div>
      <div className="b-001-cs">19B-001-CS</div>
      <div className="gender">Gender</div>
      <div className="male">Male</div>
      <div className="email">Email</div>
      <div className="basiddiquistudentsuitedu">
        basiddiqui@students.uit.edu
      </div>
      <div className="city">City</div>
      <div className="karachi">Karachi</div>
      <img
        className="cancel-icon"
        alt=""
        src="../cancel.svg"
        onClick={onCancelClick}
      />
      <div className="voter-profile-information-child2" />
      <img
        className="voter-profile-information-child3"
        alt=""
        src="../ellipse-94@2x.png"
      />
    </div>
  );
};

export default VoterProfileInformation;
