import { Component } from "react";

class ProfileCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.card.name,
      photo: props.card.photo,
      alt: props.card.alt,
      description: props.card.description,
    };
  }
  render() {
    return (
      <div className="profile-card-wrapper">
        <div className="profile-card">
          <div className="image-wrapper">
            <img src={this.state.photo} alt={this.state.alt}></img>
          </div>
          <h3>{this.state.name}</h3>
          <p>{this.state.description}</p>
        </div>
        <button>Action</button>
      </div>
    );
  }
}

export default ProfileCard;
