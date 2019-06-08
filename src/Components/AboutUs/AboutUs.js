import React from 'react';

import Alexzander from '../../media/alex.png';
import Evan from '../../media/evan.png';
import BlueBar from '../BlueBar';
import './AboutUs.css';

const getTeamMember = (img, name, title, bio) => {
  return (
    <div className="team-member section-item">
      <div className="member-image">
        <img className="image-border" src={img} alt={name} />
      </div>
      <div className="member-name">{name}</div>
      <div className="member-title">{title}</div>
      <p>{bio}</p>
    </div>
  );
};

export default () => {
  return (
    <div id="about-us">
      <BlueBar />
      <div className="section-title">About Us</div>

      <section>
        {getTeamMember(
          Alexzander,
          'Alexzander Flores',
          'Founder, Developer',
          "Software developer with 11 years of experience, passionate about working on projects that impact people's lives."
        )}

        {getTeamMember(Evan, 'Evan D.', 'Designer', 'Placeholder text')}
      </section>
    </div>
  );
};
