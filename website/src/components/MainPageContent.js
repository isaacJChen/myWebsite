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
        <div>
          <center>
            <img width="100%" height="100%" src={pie} alt="pie chart"/>
            <img width="100%" height="100%" src={bar} alt="bar chart"/>
          </center>
        </div>
        <ScreenShots/>
      </div>
    )
  }
}
