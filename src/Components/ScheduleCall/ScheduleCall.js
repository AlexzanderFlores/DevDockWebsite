import React from 'react';

import Phone from '../../media/schedule-call.png';
import BlueBar from '../BlueBar';
import './ScheduleCall.css';

export default () => {
  return (
    <div id="schedule-call" className="section-item">
      <BlueBar />

      <section>
        <div>
          <div className="section-title">Schedule a Call</div>

          <div id="call-cta-content">
            <p>
              Give us a call to discuss what you're looking for in your new
              website.
            </p>

            <a
              href="https://calendly.com/alexzanderflores/website-functionality"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Schedule now</button>
            </a>
          </div>
        </div>

        <div className="image-container">
          <div id="offset-image-border" />
          <img src={Phone} alt="Schedule a Call with Dev Dock" />
        </div>
      </section>
    </div>
  );
};
