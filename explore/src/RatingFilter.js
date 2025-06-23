import React from 'react';

const RatingFilter = ({ minRating, setMinRating }) => {
  return (
    <select
      value={minRating}
      onChange={(e) => setMinRating(Number(e.target.value))}
      className="px-4 py-2 border rounded"
    >
      <option value={0}>All Ratings</option>
      <option value={4}>4.0+</option>
      <option value={4.5}>4.5+</option>
    </select>
  );
};

export default RatingFilter;