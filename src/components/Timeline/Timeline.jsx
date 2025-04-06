import React from 'react'
import "./Timeline.css";

function TimeLine() {
    return (

<div>
<div class="wrap">
    <div class="center-line">
      <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="title">Start Registrations</span>
          <span>10 APRIL 2025</span>
        </div>
        {/*<p className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
        */}
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-star"></i>
        <div class="details">
          <span class="title">End Registrations</span>
          <span>05 May 2025</span>
        </div>
        {/*<p  className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
       */}
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title">Event Opening Ceremony</span>
          <span>08 May 2025</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Update Soon</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Online Event Starts</span>
          <span>08 May 2025</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Update Soon</p>
       
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Online Event Details </span>
          <span>08 May 2025</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Update Soon</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Offline Event Start</span>
          <span>09 May 2025</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Update soon</p>
        
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Offline Event Technical</span>
          <span>09 May 2025</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Update Soon</p>
        
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Offline Event NON-Technical</span>
          <span>10 May 2025</span>
        </div>
        <p className="timeline_text" style={{fontSize: "14px"}}>Update Soon</p>
        
      </section>
    </div>
  </div>
         </div>
    );
  }
  
  export default TimeLine;