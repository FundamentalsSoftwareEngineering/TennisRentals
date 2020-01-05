import React from 'react';

const GalleryItemImage = ({ imageUrl }) => {
    return (
        <a href="/" className="mb-3">
            <img src={ imageUrl.toLowerCase() } alt="" className="col-md-12" />
        </a>
    )
};

export default GalleryItemImage;