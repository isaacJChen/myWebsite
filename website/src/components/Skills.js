import React from 'react';

export default class Skills extends React.Component{
  render() {
    return(
      <div className="p-5 projects">
        <div id="row" className="m-0 row">
          <div id="col" className="text-white col-sm-4 my-4">
            <div>
              <h3>“Accessing the right resources is difficult but word of mouth is the way to go.”</h3>
            </div>
          </div>
          <div id="col" className="text-white col-sm-4 my-4">
            <div>
              <h3>“I am always looking for new collabs to grow my fanbase.”</h3>
            </div>
          </div>
          <div id="col" className="text-white col-sm-4 my-4">
            <div>
              <h3>“I want to see more collabs from my favorite artists.”</h3>
            </div>
          </div>
        </div>
        <div>
          <center><h3 className="text-white">Through our research it was revealed that the best way to build a meaningful connection between artists was for artists to work together. It was also apparent that new collaborations are something desirably by musicians as well as fans.</h3></center>
        </div>
      </div>
    )
  }
}
