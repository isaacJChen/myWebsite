import React from 'react';

import Bio from './Bio'
import Skills from './Skills'

export default class MainPageContent extends React.Component{
  render() {
    return(
      <div>
        <Bio/>
        <Skills/>
      </div>
    )
  }
}
