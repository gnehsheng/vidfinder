import React from "react";
import PropTypes from "prop-types";

const VimeoEmbed = ({ embedId }) => {
    return (
      <div style={{display: embedId ? '' : 'none'}} className="video-responsive">
        <iframe
          src={embedId}
          frameBorder="0"
          allowFullScreen
          title="Embedded Vimeo"
        />
      </div>
    );
}

VimeoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default VimeoEmbed;