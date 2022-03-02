import React from "react";
import PropTypes from "prop-types";

const VimeoEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      src={`https://player.vimeo.com/video/${embedId}`}
      frameBorder="0"
      allowFullScreen
      title="Embedded Vimeo"
    />
  </div>
);

VimeoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default VimeoEmbed;