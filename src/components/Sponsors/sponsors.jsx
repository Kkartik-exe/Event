import React from "react";
import "./sponsors.scss";
// import {Btn} from "../Top-division-components/Top-division-components.jsx";
// import {SOCIALS} from "../../Module/General";

function SponsorsHead() {
  return (
    <div>
      <h1 className="shead">Non-Technial Event</h1>
      {/* <h2>Meet Our Supporters</h2> */}
    </div>
  );
}

function Sponsor(props) {
  return (
    <div className="Sponsor">
    {/*<h3>coming Soon</h3>*/}
     <a href={props.link} rel="noreferrer" target="_blank"> <img src={props.srcx} alt="NURO-NOVA"></img></a>
    </div>
  );
}

// function SponsorUS() {
//   return (
//     <div className="joinT sponsorUS">
//       <h3>Interested in Sponsoring </h3>
//       <a href={SOCIALS.email}>
//         <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
//       </a>{" "}
//     </div>
//   );
// }

export {SponsorsHead, Sponsor};
// export {SponsorsHead, Sponsor, SponsorUS};
