// import { useCallback, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./dashboard-voter-vice-president1.css";

// const DashboardVoterVicePresident1 = () => {
//   const navigate = useNavigate();

//   const onRectangle9Click = useCallback(() => {
//     navigate("/dashboard-voter-vice-president-confirmation");
//   }, [navigate]);

//   const onEllipseImageClick = useCallback(() => {
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
//     <div className="dashboard-voter-vice-president1">
//       <div className="dashboard-voter-vice-president-child7" />
//       <div className="vice-president13">
//         <div className="vice-president-child1" />
//         <div className="vice-president14">Vice President</div>
//       </div>
//       <div className="president14">
//         <div className="president-child1" />
//         <div className="president15">President</div>
//       </div>
//       <div className="chairman12">
//         <div className="president-child1" />
//         <div className="chairman13">Chairman</div>
//       </div>
//       <div className="dashboard-voter-vice-president-child8" />
//       <img
//         className="dashboard-voter-vice-president-child9"
//         alt=""
//         src="../rectangle-156.svg"
//       />
//       <img
//         className="austin-distel-7uommzpd2ja-unsp-icon19"
//         alt=""
//         src="../austindistel7uommzpd2jaunsplash19.svg"
//       />
//       <img
//         className="dashboard-voter-vice-president-child10"
//         alt=""
//         src="../rectangle-156.svg"
//       />
//       <img
//         className="dashboard-voter-vice-president-child11"
//         alt=""
//         src="../rectangle-156.svg"
//       />
//       <img
//         className="austin-distel-7uommzpd2ja-unsp-icon20"
//         alt=""
//         src="../austindistel7uommzpd2jaunsplash20.svg"
//       />
//       <img
//         className="austin-distel-7uommzpd2ja-unsp-icon21"
//         alt=""
//         src="../austindistel7uommzpd2jaunsplash21.svg"
//       />
//       <div className="back8">
//         <div className="back-child6" />
//         <div className="go-back8">Go Back</div>
//       </div>
//       <div className="name-parent18">
//         <div className="name30">M. Sameer Javeed</div>
//         <div className="designation21">Designation</div>
//       </div>
//       <div className="name-parent19">
//         <div className="name31">M. Hassan Ejaz</div>
//         <div className="designation21">Designation</div>
//       </div>
//       <div className="name-parent20">
//         <div className="name32">M. Bassam Jamal</div>
//         <div className="designation21">Designation</div>
//       </div>
//       <img
//         className="dashboard-voter-vice-president-child12"
//         alt=""
//         src="../ellipse-66.svg"
//       />
//       <img
//         className="dashboard-voter-vice-president-child13"
//         alt=""
//         src="../ellipse-76.svg"
//       />
//       <img
//         className="dashboard-voter-vice-president-child14"
//         alt=""
//         src="../ellipse-76.svg"
//       />
//       <div className="abstain11">
//         <div className="back-child6" />
//         <div className="abstain12">Abstain</div>
//       </div>
//       <div className="submit10">
//         <div className="submit-child1" onClick={onRectangle9Click} />
//         <div className="submit11">Submit</div>
//       </div>
//       <a
//         className="rectangle-parent8"
//         onClick={onGroupLinkClick}
//         data-animate-on-scroll
//       >
//         <div className="group-child20" />
//         <img
//           className="group-child21"
//           alt=""
//           src="../ellipse-9@2x.jpg"
//           onClick={onEllipseImageClick}
//         />
//       </a>
//     </div>
//   );
// };

// export default DashboardVoterVicePresident1;
