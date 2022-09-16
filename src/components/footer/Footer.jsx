import "./footer.css";

const Footer = ({ leftText, centerText, address }) => {
  return (
    <div className="footer">
      <div className="topRow">
        <div className="footerLeft">{leftText}</div>
        <div className="footerCenter">{centerText}</div>
      </div>
      <div className="bottomRow">
        <div className="footerRight">{address}</div>
      </div>
    </div>
  );
};

export default Footer;
