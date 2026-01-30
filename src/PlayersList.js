import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  // Creative animated gradient background
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    minHeight: "100vh",
    position: "relative",
  };

  // Creative title with 3D effect and glow
  const titleStyle = {
    width: "100%",
    textAlign: "center",
    background: "linear-gradient(135deg, #fff 0%, #f0f0f0 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "3.5rem",
    fontWeight: "900",
    marginBottom: "50px",
    textTransform: "uppercase",
    letterSpacing: "5px",
    textShadow:
      "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
    animation: "pulse 2s ease-in-out infinite",
  };

  return (
    <div style={containerStyle}>
      {/* Title for the players list */}
      <h1 style={titleStyle}>FIFA Player Cards</h1>

      {/* Map through the players array and render a Player component for each player */}
      {/* Using the spread operator to pass all player properties as props */}
      {players.map((player, index) => (
        <Player
          key={index}
          {...player} // Spread operator to pass all player attributes as props
        />
      ))}
    </div>
  );
};

export default PlayersList;
