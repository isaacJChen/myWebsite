import React from 'react';

import MainPageHeader from './MainPageHeader';
import MainPageContent from './MainPageContent';
import NavBar from './NavBar';


export default class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      windowWidth: window.screen.width,
      windowHeight: window.screen.height
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return(
      <div>
        <MainPageHeader/>
        <div className="container-fluid p-0">
          <MainPageContent/>
        </div>
      </div>
    )
  }
}
