import "./header.css";

const Header = ({ leftText, centerText, rightText }) => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerLeft">
          <span>{leftText}</span>
        </div>
        <div className="headerCenter">
          <span>{centerText}</span>
        </div>
        <div className="headerRight">
          <span>{rightText}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
