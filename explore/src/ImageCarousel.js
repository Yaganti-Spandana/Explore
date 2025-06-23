import React from 'react';

const ImageCarousel = ({ images }) => {
  return (
    <div className="flex overflow-x-auto gap-2 mb-2">
      {images.map((src, index) => (
        <img key={index} src={src} alt="Place" className="h-32 rounded" />
      ))}
    </div>
  );
};

export default ImageCarousel;