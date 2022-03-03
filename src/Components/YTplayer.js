import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => {
  if (!embedId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        YT PLAYER HERE FOR NOW
      </p>
    );
  }
  return (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  )
  };

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;