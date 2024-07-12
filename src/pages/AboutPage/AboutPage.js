import React from 'react';
import './AboutPage.css';
import { NavLink } from 'react-router-dom';
import { MainTemplate } from '../../templates';

function AboutPage() {
  return (
    <MainTemplate>
      <div className="about">
        <NavLink to="/login">Login</NavLink>
      </div>
    </MainTemplate>
  );
}

export default AboutPage;