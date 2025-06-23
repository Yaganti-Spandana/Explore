import React from 'react';

const categories = ['Food', 'Heritage', 'Nature'];

const CategoryFilter = ({ selected, setSelected }) => {
  const toggleCategory = (cat) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="flex gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => toggleCategory(cat)}
          className="px-4 py-2 rounded ${selected.includes(cat) ? 'bg-blue-500 text-white' : 'bg-gray-200'}"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;