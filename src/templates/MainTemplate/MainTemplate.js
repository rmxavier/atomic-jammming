import React from 'react';
import { FooterA, LogoA } from '../../components'
import './MainTemplate.css';

export default function MainTemplate({ children }) {
  return (
    <>
      <LogoA />
      { children }
      <FooterA />
    </>
  );
}