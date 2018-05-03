import React from 'react';

import NavBar from './NavBar';

export default class ResumePage extends React.Component{
  render() {
    return(
      <div>
        <NavBar currentPage="resume"/>
        <h1>Work In Progress</h1>
      </div>
    )
  }
}
