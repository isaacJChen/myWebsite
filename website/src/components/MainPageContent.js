import React from 'react';

import Bio from './Bio'
import ScreenShots from './ScreenShots'
import Skills from './Skills'

export default class MainPageContent extends React.Component{
  render() {
    return(
      <div>
        <Bio/>
        <ScreenShots/>
      </div>
    )
  }
}
