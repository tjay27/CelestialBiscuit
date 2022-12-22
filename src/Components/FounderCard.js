import React from "react";

export default function FounderCard(props) {
  const style = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 33.82%, rgba(0, 0, 0, 0.74) 100%), url(${props.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return (
    <div
      style={style}
      className="founder-card"
    >
      <div className="founder-name">
        <p
          style={{
            color: "#ECB440",
            fontFamily: "Montserrat",
            marginBottom: "2%",
          }}
        >
          <strong>{props.name}</strong>
        </p>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
