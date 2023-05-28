import React from "react";
import "./value.css";
import add from "../../assets/add.png";

interface valueProps {
  icon: string;
  text: string;
  message: React.ReactNode;
}

const Value = ({ icon, text, message }: valueProps) => {
  const [clicked, setClicked] = React.useState(false);

  const handleContainerClick = () => setClicked(!clicked);
  // console.log(clicked);
  return (
    <div className="value__container">
      <div className="value__container-header" onClick={handleContainerClick}>
        <div className="value__left-content">
          <img src={icon} />
          <p>{text}</p>
        </div>
        <img
          src={add}
          style={{
            height: 18,
            transform: `rotate(${clicked ? 45 : 0}deg)`,
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </div>
      <div
        className={
          clicked
            ? "value__container-content__show"
            : "value__container-content__hiddent"
        }
      >
        {clicked && <div>{message}</div>}
      </div>
    </div>
  );
};

export default Value;
