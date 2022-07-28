import "../styles/main.scss";

function NavFooter(props) {
  return (
    <div className="nav-footer">
      <div className="nav-buttons">
        <button>Nav Button</button>
        <button>Nav Button</button>
        <button>Nav Button</button>
        <button>Nav Button</button>
      </div>
      <div className="copyright">
        <p>Copyright Info:</p>
        <p>
          {props.copyrightInfo === null
            ? "-Please log in to see info-"
            : props.copyrightInfo}
        </p>
      </div>
    </div>
  );
}

export default NavFooter;
