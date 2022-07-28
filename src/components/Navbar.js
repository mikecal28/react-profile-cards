import "../styles/main.scss";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <p>Descriptive Logo</p>
      </div>
      <div className="nav-buttons">
        <button>Nav Button</button>
        <button>Nav Button</button>
        <button>Nav Button</button>
        <button>Nav Button</button>
      </div>
      <div className="user-name" onClick={() => props.handleClick()}>
        <p>{props.userName}</p>
      </div>
    </div>
  );
}

export default Navbar;
