import React from 'react';
import './Header.css';

const Header = () => (
<div class="topnav">
  <a class="active" href='/'>Home</a>
  <a href='/units'>Units</a>
  <a href='/todayslesson'>Today's Lesson</a>
  <a href='/exercises'>Exercises</a>
</div>
);

export default Header;