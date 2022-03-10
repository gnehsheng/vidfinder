import React from "react";
import PropTypes from "prop-types";

const DmEmbed = ({ embedId }) => {
    return (
        <div style={{display: embedId ? '' : 'none'}} className="video-responsive">
            <iframe
                src={`https://geo.dailymotion.com/player/x7zur.html?video=${embedId}`}
                allowfullscreen
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Embedded DailyMotion"
            />
        </div>
    )

}


DmEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default DmEmbed;