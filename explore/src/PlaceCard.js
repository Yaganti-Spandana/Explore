import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';

const PlaceCard = ({ place }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border rounded shadow p-4">
      <h2 className="text-lg font-bold mb-2">{place.name}</h2>
      <ImageCarousel images={place.images} />
      <p className="text-sm text-gray-600">Rating: {place.rating}</p>
      {expanded && <p className="mt-2 text-sm">{place.description}</p>}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-blue-500 hover:underline"
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default PlaceCard;