import React, { useState } from 'react';
import cityData from './cityData.json';
import Header from './Header';
import CategoryFilter from './CategoryFilter';
import RatingFilter from './RatingFilter';
import PlaceCard from './PlaceCard';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from './Footer';

const App = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minRating, setMinRating] = useState(0);

  const filteredPlaces = cityData.filter((place) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(place.category);
    const matchesRating = place.rating >= minRating;
    return matchesCategory && matchesRating;
  });

  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4">
          <CategoryFilter selected={selectedCategories} setSelected={setSelectedCategories} />
          <RatingFilter minRating={minRating} setMinRating={setMinRating} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;