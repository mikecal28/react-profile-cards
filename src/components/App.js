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

    this.state = {
      copyrightInfo: null,
      profileData: null,
      userData: null,
    };
  }

  handleUserSession() {
    if (UserData.length === 1) {
      this.setState(
        {
          copyrightInfo: UserData[0].copyrightInfo,
          profileData: ProfileData,
          userData: UserData[0],
        },
        () => console.log(this.state.userData.userName)
      );
    }
  }

  handleClick() {
    this.handleUserSession();
  }

  renderProfileCards() {
    return this.state.profileData.map((card) => {
      return <ProfileCard key={card.id} card={card} />;
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar
          handleClick={() => this.handleClick()}
          userName={
            this.state.userData !== null
              ? this.state.userData.userName
              : "Log In"
          }
        />
        <div className="header-offset"></div>
        <div className="profile-card-container">
          {this.state.profileData === null ? (
            <h1
              style={{
                fontSize: "50px",
                color: "red",
                marginTop: "20vh",
              }}
            >
              Please Log In
            </h1>
          ) : (
            this.renderProfileCards()
          )}
        </div>
        <div className="footer-offset"></div>
        <NavFooter copyrightInfo={this.state.copyrightInfo} />
      </div>
    );
  }
}
