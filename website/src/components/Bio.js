import React from 'react'
import pie from '../img/pie.png'
import bar from '../img/bar.png'

export default class Bio extends React.Component{
  render() {
    return(
      <div className="pt-4">
        <div className="container">
          <h1>Problem</h1>
          <h3>How can we help indie artists lacking resources to break into the industry and gain recognition?</h3>
          <p>
            Today’s world is terribly difficult for musicians, performers, and starving artists. Finding work, building a fanbase and a network, financially supporting your art - these are all barriers to entry into the music industry. Music is a superstar economy and the top 1% dominate 77% of the market. There is a monopoly on sound! For independent artists, the biggest struggles causing barrier of entry into the marketplace are lack of resources, fanbase, and connections.
          </p>
          <h1 className="pt-3">Research</h1>
          <p>
            In a Seattle survey of 14 indie artists, 78% of musicians said they relied on word-of-mouth to start building connections for their careers in music. The next biggest influences on building connections relied on the use of social media platforms for connecting with fans and streaming music to gain attraction.
          </p>
          <p>
            We interviewed seven of these Seattle musicians in person to understand what they thought about the music marketplace.
          </p>
          <div className="d-flex flex-row align-items-center">
            <img className="" width="40%" src={pie} alt="pie chart"/>
            <img className="" width="60%" src={bar} alt="bar chart"/>
          </div>
        </div>
        <div className="projects">
          <div className="container">
            <div id="row" className="m-0 row">
              <div id="col" className="text-white col-sm-4 my-4">
                <div>
                  <h3>“Accessing the right resources is difficult, word of mouth is the way to go.”</h3>
                </div>
              </div>
              <div id="col" className="text-white col-sm-4 my-4">
                <div>
                  <h3>“I am always looking for new collabs to meet others and grow my fanbase.”</h3>
                </div>
              </div>
              <div id="col" className="text-white col-sm-4 my-4">
                <div>
                  <h3>“[As a fan] I want to see more collabs from my favorite artists.”</h3>
                </div>
              </div>
            </div>
            <div>
              <center>
                <h3 className="pt-4 pb-4 mb-0 text-white">Through our research, it was revealed that the best way to build a meaningful connection between artists was for artists to work together. It was also apparent that new collaborations are something desirable by musicians as well as fans.</h3>
              </center>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
