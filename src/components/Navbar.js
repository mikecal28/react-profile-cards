import "../styles/main.scss";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <p>Descriptive Logo</p>
      </div>
      <div className="nav-buttons">
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
      <div className="user-name">
        <p>User Name</p>
      </div>
    </div>
  );
}

export default Navbar;
