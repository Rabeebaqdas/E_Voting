import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./first-screen.css";

const FirstScreen = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/user-login");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/admin-login");
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
    
    <div className="first-screen" data-animate-on-scroll>
      <img className="voting-1-icon" alt="" src="../voting-1@2x.png" />
      <div className="welcome-to-e-voting-system">
        WELCOME TO E-VOTING SYSTEM
      </div>
      <div className="cast-your-vote-with-confident">
        Cast your vote with confident
      </div>
      <Link className="login-user" to="/user-login" data-animate-on-scroll>
        <div className="login-user-child" onClick={onRectangleClick} />
        <div className="user-login">User Login</div>
      </Link>
      <Link className="admin-login" to="/admin-login" data-animate-on-scroll>
        <div className="login-user-child" onClick={onRectangle1Click} />
        <div className="admin-login1">Admin Login</div>
      </Link>
      <img className="first-screen-child" alt="" src="../ellipse-1.svg" />
      <img className="first-screen-item" alt="" src="../ellipse-11.svg" />
    </div>
  );
};

export default FirstScreen;
