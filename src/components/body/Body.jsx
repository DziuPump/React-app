import "./body.css";

const body = ({ content, content2, content3, content4 }) => {
  return (
    <div className="bodyWrapper">
      <div className="bodyElement">
        <div className="bodyText">{content}</div>
      </div>
      <div className="bodyElement">
        <div className="bodyText">{content2}</div>
      </div>
      <div className="bodyElement">
        <div className="bodyText">{content3}</div>
      </div>
      <div className="bodyElement">
        <div className="bodyText">{content4}</div>
      </div>
    </div>
  );
};

export default body;
