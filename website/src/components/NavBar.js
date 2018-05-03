import React from 'react';

export default class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      openNav: "row d-md-block d-none",
      openState: false,
      hoverState: ""
    }
  }

  openNav() {
    if (this.state.openState) {
      this.setState({openNav: "row d-md-block d-none", openState: false});
    } else {
      this.setState({openNav: "row", openState: true});
    }

  }

  handleMouseOver(val) {
    this.setState({hoverState: val});
  }

  handleMouseLeave() {
    this.setState({hoverState: ""});
  }

  render() {

    let liStyle = {
      float: "left"
    }

    let hoverStyle = {
      float: "left",
      backgroundColor: "rgb(30,10,50)"
    }

    let currentPageStyle = {
      float: "left",
      backgroundColor: "rgb(0,0,0)"
    }

    let liaStyle = {
      display: "block",
      padding: "1rem 1rem",
      textDecoration: "none"
    }

    let tabs = {
      home: "home",
      resume: "resume",
      portfolio: "portfolio",
      contact: "contact"
    }

    //TODO usersettings page needs to be linked here
    return(
      <div id="navBar" className="fixed-top">
        <div onClick={() => this.openNav()} className="d-block d-md-none text-white p-2">
          {this.state.openState ? "▲ Close Menu" : "▼ Open Menu"}
        </div>
        <ul id="navBar" className={this.state.openNav}>
          <li onMouseOver={() => this.handleMouseOver(tabs.home)} onMouseLeave={() => this.handleMouseLeave()} style={this.state.hoverState === tabs.home ? hoverStyle : this.props.currentPage === tabs.home ? currentPageStyle : liStyle}><div className="text-center text-light" style={liaStyle}>Home</div></li>
          <li onMouseOver={() => this.handleMouseOver(tabs.resume)} onMouseLeave={() => this.handleMouseLeave()} style={this.state.hoverState === tabs.resume ? hoverStyle : this.props.currentPage === tabs.resume ? currentPageStyle : liStyle}><div className="text-center text-light" style={liaStyle}>Resume</div></li>
          <li onMouseOver={() => this.handleMouseOver(tabs.portfolio)} onMouseLeave={() => this.handleMouseLeave()} style={this.state.hoverState === tabs.portfolio ? hoverStyle : this.props.currentPage === tabs.portfolio ? currentPageStyle : liStyle}><div className="text-center text-light" style={liaStyle}>Portfolio</div></li>
          <li onMouseOver={() => this.handleMouseOver(tabs.contact)} onMouseLeave={() => this.handleMouseLeave()} style={this.state.hoverState === tabs.contact ? hoverStyle : this.props.currentPage === tabs.contact ? currentPageStyle : liStyle}><div className="text-center text-light" style={liaStyle}>Contact</div></li>
        </ul>
      </div>

    )
  }
}
