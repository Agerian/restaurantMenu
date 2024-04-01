import React from 'react';
import ImageGrid from '../../components/ImageGrid';

const homeImages = [
  { src: "/images/PiedmontFront (12).jpg", alt: "Restaurant exterior", className: "grid-item large" },
  { src: "/images/PiedmontFront.jpg", alt: "Restaurant exterior", className: "grid-item large" },
  { src: "/images/Tables (12).jpg", alt: "Elegant dining tables", className: "grid-item large" },
  { src: "/images/Tables4.jpg", alt: "Outdoor dining tables", className: "grid-item large" }, 
  { src: "/images/PiedmontFront (8).jpg", alt: "Restaurant exterior", className: "grid-item large" },

  { src: "/images/Ambiance (23).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Ambiance (13).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Ambiance.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Ambiance (19).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Ambiance (32).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Ambiance (37).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Ambiance (38).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Ambiance (36).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Ambiance (34).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Ambiance (27).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFrontPatio.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Ambiance (14).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Ambiance (18).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/CocktailAmbiance.jpg", alt: "Cocktail ambiance", className: "grid-item" },
  { src: "/images/BrunchMulti.jpg", alt: "Brunch dishes", className: "grid-item" },
  { src: "/images/Tables (14).jpg", alt: "Outdoor dining tables", className: "grid-item" },
  { src: "/images/Wine (27).jpg", alt: "Wine bottles", className: "grid-item" },
  { src: "/images/TablesAmbiance.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/BeerCocktail.jpg", alt: "Bread basket", className: "grid-item" },
  { src: "/images/Coffee (8).jpg", alt: "Coffee cup", className: "grid-item" },

];

const Home = () => {
  return (
    <div>
      <ImageGrid images={homeImages} />
    </div>
  );
};

export default Home;
