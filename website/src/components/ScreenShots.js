import React from 'react';
import sd from '../img/sd.png'
import profile from '../img/profile.png'
import feed from '../img/feed.png'
import explore from '../img/explore.png'
import collection from '../img/collection.png'

export default class ScreenShots extends React.Component{
  render() {
    return(
      <div className="pt-4">
        <div className="container">
          <h1 className="">Solution</h1>
          <p className="">Tunite attempts to provide musicians with a tool that promotes new collaborations as well as highlight collaborations that are done well. By using Tunite, artists can share new music that has the potential to influence, motivate, or inspire the next, biggest hit. Music posted on this platform become open to the public for collaboration and the best collaborations become celebrated by the community.</p>
          <p className="">Collaborations are created by taking an existing song and sampling it, mixing it, or adding to it. New collaborations are easy to seek using the explore feature. When an artists posts a song, they can select a fifteen second snippet that advertises their version of a song. Then all collaborations from an original song become explorable by sifting through each songs’ snippet. Intriguing songs can be saved to listen to later.</p>
        </div>
        <div className= "">
          <div className="container">
            <div className='py-5' width='100%'>
              <div className="d-flex flex-row">
                <img className="mx-4" width="15%" height="15%" src={feed} alt="pie chart"/>
                <img className="mx-4" width="15%" height="15%" src={sd} alt="pie chart"/>
                <img className="mx-4" width="15%" height="15%" src={profile} alt="pie chart"/>
                <img className="mx-4" width="15%" height="15%" src={explore} alt="pie chart"/>
                <img className="mx-4" width="15%" height="15%" src={collection} alt="pie chart"/>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="">Benefit</h1>
          <p className="">This tool eliminates one of the barriers of entry into the music marketplace: barrier to creating meaningful connections. By using this app, musicians will be able to create new connections simply by becoming inspired to create music from what they have listened to on the platform.</p>
          <p className=" mb-0 pb-5">With this tool, no one will need to rely on word-of-mouth to create meaningful connections.  All you need is the passion to pursue music.</p>
        </div>
      </div>
    )
  }
}
