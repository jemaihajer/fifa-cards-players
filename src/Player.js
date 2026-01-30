import React from "react";
import { Card } from "react-bootstrap";
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  // Creative card styling with gradient border effect and hover animations
  const cardStyle = {
    width: "20rem",
    margin: "20px",
    background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
    boxShadow:
      "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.2)",
    borderRadius: "20px",
    border: "3px solid transparent",
    backgroundImage:
      "linear-gradient(white, white), linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  };

  // Enhanced image styling with overlay effect
  const imageStyle = {
    height: "320px",
    objectFit: "cover",
    borderTopLeftRadius: "17px",
    borderTopRightRadius: "17px",
    transition: "transform 0.4s ease",
    filter: "brightness(0.95) contrast(1.1)",
  };

  // Creative title with gradient text effect
  const titleStyle = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: "900",
    fontSize: "1.8rem",
    marginBottom: "15px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
    letterSpacing: "1px",
  };

  // Enhanced text styling with icons-like effect
  const textStyle = {
    color: "#2d3748",
    marginBottom: "10px",
    fontSize: "0.95rem",
    padding: "8px 12px",
    background: "rgba(102, 126, 234, 0.08)",
    borderRadius: "8px",
    borderLeft: "4px solid #667eea",
    transition: "all 0.3s ease",
  };

  // Jersey number badge styling
  const jerseyBadgeStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "white",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1.3rem",
    boxShadow: "0 4px 15px rgba(245, 87, 108, 0.4)",
    zIndex: 10,
  };

  return (
    <Card
      style={cardStyle}
      className="player-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-15px) scale(1.05)";
        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.4)";
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.2)";
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "scale(1)";
      }}
    >
      {/* Jersey number badge overlay */}
      <div style={jerseyBadgeStyle}>{jerseyNumber}</div>

      {/* Player image at the top of the card */}
      <Card.Img variant="top" src={imageUrl} alt={name} style={imageStyle} />

      <Card.Body>
        {/* Player name as card title with gradient effect */}
        <Card.Title style={titleStyle}>{name}</Card.Title>

        {/* Player details displayed with creative styling */}
        <Card.Text
          style={textStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(102, 126, 234, 0.15)";
            e.currentTarget.style.transform = "translateX(5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(102, 126, 234, 0.08)";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          <strong>⚽ Team:</strong> {team}
        </Card.Text>

        <Card.Text
          style={textStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(102, 126, 234, 0.15)";
            e.currentTarget.style.transform = "translateX(5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(102, 126, 234, 0.08)";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          <strong>🌍 Nationality:</strong> {nationality}
        </Card.Text>

        <Card.Text
          style={textStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(102, 126, 234, 0.15)";
            e.currentTarget.style.transform = "translateX(5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(102, 126, 234, 0.08)";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          <strong>🎯 Age:</strong> {age} years
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/300x300?text=No+Image",
};

export default Player;
