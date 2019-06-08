import React from 'react';

import Navigation from '../Navigation/Navigation';
import Solutions from '../Solutions/Solutions';
import AboutUs from '../AboutUs/AboutUs';
import ScheduleCall from '../ScheduleCall/ScheduleCall';
import EmailUs from '../EmailUs/EmailUs';
import Footer from '../Footer/Footer';
import './Home.css';

export default () => {
  return (
    <>
      <Navigation />
      <div id="home">
        <Solutions />
        <AboutUs />
        <ScheduleCall />
        <EmailUs />
      </div>
      <Footer />
    </>
  );
};
