import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {

    console.log(props.images);

    const images = props.images.map((image, i) => {
        return (
            <ImageCard key={i} image={image} />
        );
    });

    return <div className="image-list">{images}</div>;
}

export default ImageList;