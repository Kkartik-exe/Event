import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import { TOP_SECTION } from "../../Module/General";

function Btn(props) {
  return (
    <div
      className="apply-button"
      data-hackathon-slug="NURO-NOVA"
      data-button-theme="light"
      style={{ height: "44px", width: "312px" }}
    ></div>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}



function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <br />
      <p className="shortjoin"> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <br /><br />
      {/*      <a
        href="#devfolio"  
        // rel="noreferrer"
        class="linkclass"
        target="_blank"
      >
*/}{/*        <button class="dev-button">
          <svg
            class="dev-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 115.46 123.46"
            style={{height: "24px", width: "24px", "margin-right": "8px"}}
          >
            <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"></path>
            <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"></path>
          </svg>
          Apply With Devfolio
        </button>
</a>
      */}

      <div
        class="apply-button"
        data-hackathon-slug="NURO-NOVA"
        data-button-theme="light"
      // style="height: 44px; width: 312px"
      ></div>
      &nbsp;&nbsp;
      <a
        href="https://chat.whatsapp.com/JilfTvOnqsCI8Wnu0pVAal"
        rel="noreferrer"
        target="_blank"
      >
        <button class="dis-button">
        <svg className="svgbtn" xmlns="http://www.w3.org/2000/svg" style={{ height: "24px", width: "24px", color: "white" }} fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 1.26.375 2.44 1.007 3.417L0 16l4.437-1.007C5.56 15.625 6.728 16 8 16c4.42 0 8-3.58 8-8s-3.58-8-8-8zm0 14.5c-1.169 0-2.283-.31-3.22-.843L8 13.27l2.707-2.707a1 1 0 0 0 0-1.415l-1.528-1.528a1 1 0 0 0-1.415 0L8 9.276 5.293 7.569a1 1 0 0 0-1.415 0l-1.528 1.528a1 1 0 0 0 0 1.415L5.48 13.16C4.533 12.69 3.419 12.5 2.25 12.5c-1.319 0-2.582-.272-3.715-.773a1 1 0 0 0-.793 1.852C.761 13.729 1.82 14.5 2.25 14.5c3.87 0 7 3.13 7 7s3.13 7 7 7c1.64 0 3.161-.428 4.492-1.135a1 1 0 0 0-.793-1.852C13.582 14.228 11.82 14.5 8 14.5z"></path>
        </svg>
        </button>
      </a>


      <br /><br /><br />
      <a href="https://thelifenavigator.com/neuronova-2k25-tech-thought-transformationneuro-nova-brain-and-explosion-of-ideas/" target="_blank"><button>Register With The Life Navigator</button></a>
    </div>


  );
}

export { Btn, Myinfo };
