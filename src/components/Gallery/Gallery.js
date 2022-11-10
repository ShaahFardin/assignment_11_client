import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Gallery = ({image, size}) => {
    return (
        <PhotoProvider>
            <PhotoView src={image}>
                <img className={size} src={image} alt=''/>
            </PhotoView>
        </PhotoProvider>
    );
};

export default Gallery;