import React from 'react';

export default class MainPageHeader extends React.Component{
  render() {
    return(
      <div className="mainHeader m-0 row justified align-items: center" align-items="center">
        <h1 id="headerText" className="col display-3 text-light m-0">Tunite</h1>
        <h3 id="headerText" className="col text-light m-0">Evolve the Worlds Music</h3>
      </div>
    )
  }
}
