# 🌆 Destination Explorer - City Guide App

A responsive single-page tourism app to help users explore landmarks, dining spots, and local attractions in a city. Built with React and Bootstrap, it showcases a curated guide for travelers.

## 🚀 Features

- 🧭 *Category Filters*: Easily filter places by categories like Food, Heritage, and Nature.
- 🌟 *Rating Filter*: Sort and view places based on user ratings.
- 📇 *Expandable Cards*: Click to expand cards and view more details about each location.
- 🖼️ *Image Carousels*: Swipe through images of top-rated destinations.
- 📌 *Sticky Header*: Navigation always stays visible at the top of the page.
- ⬆️ *Scroll-to-Top Button*: Smooth scroll to the top with one click.
- 📱 *Responsive Design*: Works well on mobile, tablet, and desktop.
- 🌐 *Live Deployment: Deployed with [Vercel/Netlify/GitHub Pages] *(update with your live link).

---

## 📁 Project Structure

src/ ├── assets/              
# Images and icons ├── components/          
# Reusable components 
│   ├── Header.jsx 
│   ├── FilterBar.jsx 
│   ├── PlaceCard.jsx 
│   ├── PlaceDetails.jsx 
│   ├── ImageCarousel.jsx 
│   ├── ScrollToTop.jsx 
│   └── CategoryTabs.jsx 
├── data/                
# JSON mock data │   └── places.json ├── App.jsx              
# Main app logic and layout ├── index.js             
# Entry point └── styles/              
# CSS or SCSS styles

---

## 🔧 Tech Stack

- *React* (with Hooks)
- *Bootstrap* (or React-Bootstrap)
- *JSON* for mock city data
- *Vite / Create React App* (choose one)
- *React Router* (optional if adding routing later)

---
# OUTPUT SCREEN SHOTS:
![Screenshot 2025-06-25 100920](https://github.com/user-attachments/assets/1a0e8065-46be-42ca-a939-5bd668acecd7)
![Screenshot 2025-06-25 100941](https://github.com/user-attachments/assets/a4022fec-6881-4e5a-8591-2e9db65b9544)
![Screenshot 2025-06-25 100956](https://github.com/user-attachments/assets/2634410e-8e3e-4e5f-8992-ef4c66ad5fe6)

## 📦 Installation

```bash
git clone https://github.com/yourusername/destination-explorer.git
cd destination-explorer
npm install
npm run dev  # or npm start for CRA


---

📊 Sample Mock Data (places.json)

[
  {
    "id": 1,
    "name": "Lotus Temple",
    "category": "Heritage",
    "rating": 4.6,
    "description": "A beautiful architectural marvel in Delhi.",
    "images": ["/assets/lotus1.jpg", "/assets/lotus2.jpg"]
  },
  {
    "id": 2,
    "name": "The Spice Kitchen",
    "category": "Food",
    "rating": 4.8,
    "description": "Fine Indian dining experience.",
    "images": ["/assets/restaurant1.jpg"]
  }
]


---

🧩 Components Breakdown

At least 7-8 components are used:

1. Header – sticky navigation bar


2. FilterBar – for category and rating filters


3. CategoryTabs – switches between Food, Heritage, Nature, etc.


4. PlaceCard – compact preview of each location


5. PlaceDetails – expandable section for more info


6. ImageCarousel – rotates images for top places


7. ScrollToTop – floating button for easy navigation


8. Footer – optional, for links and credits




---

📲 Responsive Design

Designed mobile-first using Bootstrap grid and utility classes. Cards, carousels, and tabs adapt to different screen sizes.


---

🧪 Future Improvements

Integrate with real APIs (Google Places, TripAdvisor)

Add map view (using Leaflet or Google Maps)

User login & favorites feature



---

📍 Live Demo

👉 View Live App
