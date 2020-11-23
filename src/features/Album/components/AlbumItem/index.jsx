import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired,
};

AlbumItem.defaultProps = {
    album: {},
};

function AlbumItem({ album }) {
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={album.imageUrl} alt={album.title} />
            </div>
            <p className="album__title">{album.title}</p>
        </div>
    );
}

export default AlbumItem;
