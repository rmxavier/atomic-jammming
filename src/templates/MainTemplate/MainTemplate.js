import React from 'react';
import { Footer, Logo } from '../../components'
import './MainTemplate.css';

export default function MainTemplate({ children }) {
  return (
    <>
      <Logo />
      { children }
      <Footer />
    </>
  );
}