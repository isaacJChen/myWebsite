import React from 'react';
import tile from '../img/tile.png'

export default class MainPageHeader extends React.Component{
  render() {
    return(
      <div className="mainHeader m-0 justified">

          <img width="200px" height="200px" src={tile} alt="logo"/>
          <h3 id="headerText" className="text-light m-0 p-0">Evolve the Worlds Music</h3>
          <div className="d-flex flex-row justify-content-center">
            <h5 className="text-light m-5 p-0">Isaac Chen</h5>
            <h5 className="text-light m-5 p-0">Jared Praino</h5>
            <h5 className="text-light m-5 p-0">Jason Xu</h5>
            <h5 className="text-light m-5 p-0">Yuxing Wu</h5>
          </div>

      </div>
    )
  }
}
