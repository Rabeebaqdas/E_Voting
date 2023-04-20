// import { useCallback, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./dashboard-voter-vice-president.css";

// const DashboardVoterVicePresident = () => {
//   const navigate = useNavigate();

//   const onEllipseImage1Click = useCallback(() => {
//     navigate("/voter-profile-information");
//   }, [navigate]);

//   const onGroupLinkClick = useCallback(() => {
//     navigate("/voter-profile-information");
//   }, [navigate]);

//   useEffect(() => {
//     const scrollAnimElements = document.querySelectorAll(
//       "[data-animate-on-scroll]"
//     );
//     const observer = new IntersectionObserver(
//       (entries) => {
//         for (const entry of entries) {
//           if (entry.isIntersecting || entry.intersectionRatio > 0) {
//             const targetElement = entry.target;
//             targetElement.classList.add("animate");
//             observer.unobserve(targetElement);
//           }
//         }
//       },
//       {
//         threshold: 0.15,
//       }
//     );

//     for (let i = 0; i < scrollAnimElements.length; i++) {
//       observer.observe(scrollAnimElements[i]);
//     }

//     return () => {
//       for (let i = 0; i < scrollAnimElements.length; i++) {
//         observer.unobserve(scrollAnimElements[i]);
//       }
//     };
//   }, []);

//   return (
//     <div className="dashboard-voter-vice-president">
//       <div className="dashboard-voter-vice-president-child" />
//       <div className="vice-president11">
//         <div className="vice-president-inner" />
//         <div className="vice-president12">Vice President</div>
//       </div>
//       <div className="president12">
//         <div className="president-inner" />
//         <div className="president13">President</div>
//       </div>
//       <div className="chairman10">
//         <div className="president-inner" />
//         <div className="chairman11">Chairman</div>
//       </div>
//       <div className="dashboard-voter-vice-president-item" />
//       <img
//         className="dashboard-voter-vice-president-inner"
//         alt=""
//         src="../rectangle-15.svg"
//       />
//       <img
//         className="austin-distel-7uommzpd2ja-unsp-icon16"
//         alt=""
//         src="../austindistel7uommzpd2jaunsplash.svg"
//       />
//       <img
//         className="dashboard-voter-vice-president-child1"
//         alt=""
//         src="../rectangle-15.svg"
//       />
//       <img
//         className="dashboard-voter-vice-president-child2"
//         alt=""
//         src="../rectangle-15.svg"
//       />
//       <img
//         className="austin-distel-7uommzpd2ja-unsp-icon17"
//         alt=""
//         src="../austindistel7uommzpd2jaunsplash.svg"
//       />
//       <img
//         className="austin-distel-7uommzpd2ja-unsp-icon18"
//         alt=""
//         src="../austindistel7uommzpd2jaunsplash.svg"
//       />
//       <div className="back7">
//         <div className="submit-inner" />
//         <div className="go-back7">Go Back</div>
//       </div>
//       <div className="name-parent15">
//         <div className="name26">Name</div>
//         <div className="designation18">Designation</div>
//       </div>
//       <div className="name-parent16">
//         <div className="name26">Name</div>
//         <div className="designation18">Designation</div>
//       </div>
//       <div className="name-parent17">
//         <div className="name26">Name</div>
//         <div className="designation18">Designation</div>
//       </div>
//       <img
//         className="dashboard-voter-vice-president-child3"
//         alt=""
//         src="../ellipse-6.svg"
//       />
//       <img
//         className="dashboard-voter-vice-president-child4"
//         alt=""
//         src="../ellipse-7.svg"
//       />
//       <img
//         className="dashboard-voter-vice-president-child5"
//         alt=""
//         src="../ellipse-7.svg"
//       />
//       <div className="abstain9">
//         <div className="submit-inner" />
//         <div className="abstain10">Abstain</div>
//       </div>
//       <div className="submit8">
//         <div className="submit-inner" />
//         <div className="submit9">Submit</div>
//       </div>
//       <img className="vector-icon46" alt="" src="../vector2.svg" />
//       <img
//         className="dashboard-voter-vice-president-child6"
//         alt=""
//         src="../group-4.svg"
//       />
//       <div className="confirm5">
//         <div className="do-you-confirm-your-votes1">
//           Do You Confirm Your Votes
//         </div>
//         <img className="confirm-item" alt="" src="../ellipse-911@2x.png" />
//         <div className="name29">M. Sameer Javeed</div>
//       </div>
//       <a
//         className="rectangle-parent7"
//         onClick={onGroupLinkClick}
//         data-animate-on-scroll
//       >
//         <div className="group-child18" />
//         <img
//           className="group-child19"
//           alt=""
//           src="../ellipse-9@2x.jpg"
//           onClick={onEllipseImage1Click}
//         />
//       </a>
//     </div>
//   );
// };

// export default DashboardVoterVicePresident;
