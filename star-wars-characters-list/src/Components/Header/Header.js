import React from 'react';
import './Header.css';

import ligthPower from '../../assets/luke-sword.png';



export default function Header() {
  return (
    <div className="header-container">
      <h1>Employees list</h1>
      <img src={ligthPower} alt="Luke's sword"></img>
    </div>
  )
}
