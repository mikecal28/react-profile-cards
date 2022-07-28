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
      <div className="individual-card-container">
        <div className="profile-card-wrapper">
          <div className="profile-card">
            <div className="image-border">
              <div className="image-wrapper">
                <img src={this.state.photo} alt={this.state.alt}></img>
              </div>
            </div>
            <h3>{this.state.name}</h3>
            <div className="description">
              <p>{this.state.description}</p>
            </div>
          </div>
          <button
            onClick={() => {
              console.log(this.state.name);
              alert(this.state.name);
            }}
          >
            Action
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
