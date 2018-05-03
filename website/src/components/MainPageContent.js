import React from 'react';

import Bio from './Bio'
import ScreenShots from './ScreenShots'
import Skills from './Skills'
import pie from '../img/pie.png'
import bar from '../img/bar.png'

export default class MainPageContent extends React.Component{
  render() {
    return(
      <div>
        <Bio/>
        <Skills/>
        <center>
          <img src={pie} alt="pie chart"/>
          <img src={bar} alt="bar chart"/>
        </center>
        <ScreenShots/>
      </div>
    )
  }
}
