import React from 'react';
import './Header.css';

const Header = () => (
<div class="topnav">
  <a class="active" href='/'>Home</a>
  <a href='/roster'>Roster</a>
  <a href='/schedule'>Schedule</a>
  <a href='/units'>Unit</a>
  <a href='/todayslesson'>Today's Lesson</a>
</div>
);

export default Header;