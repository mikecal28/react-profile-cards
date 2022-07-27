import { Component } from "react";

import "../styles/main.scss";
import Navbar from "./Navbar";
import NavFooter from "./NavFooter";
import ProfileCard from "./ProfileCard";
import { ProfileData } from "../util/mockProfileData";
import { UserData } from "../util/mockUserData";

export default class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  renderProfileCards() {
    return ProfileData.map((card) => {
      return <ProfileCard card={card} />;
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="header-offset"></div>
        <div className="profile-card-container">
          {this.renderProfileCards()}
        </div>
        <div className="footer-offset"></div>
        <NavFooter />
      </div>
    );
  }
}
