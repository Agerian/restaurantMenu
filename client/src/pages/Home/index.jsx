import React from 'react';
import ImageGrid from '../../components/ImageGrid';

const homeImages = [
  /*
  { src: "/images/Home/PiedmontFront (12).jpg", alt: "Restaurant exterior", className: "grid-item large" },
  { src: "/images/Home/PiedmontFront.jpg", alt: "Restaurant exterior", className: "grid-item large" },
  { src: "/images/Home/Tables (12).jpg", alt: "Elegant dining tables", className: "grid-item large" },
  { src: "/images/Home/Tables4.jpg", alt: "Outdoor dining tables", className: "grid-item large" }, 
  { src: "/images/Home/PiedmontFront (8).jpg", alt: "Restaurant exterior", className: "grid-item large" },

  { src: "/images/Home/Ambiance (23).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (13).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (19).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (32).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (37).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (38).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (36).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (34).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (27).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/PiedmontFrontPatio.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (14).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (18).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/CocktailAmbiance.jpg", alt: "Cocktail ambiance", className: "grid-item" },
  { src: "/images/Home/BrunchMulti.jpg", alt: "Brunch dishes", className: "grid-item" },
  { src: "/images/Home/Tables (14).jpg", alt: "Outdoor dining tables", className: "grid-item" },
  { src: "/images/Home/Wine (27).jpg", alt: "Wine bottles", className: "grid-item" },
  { src: "/images/Home/TablesAmbiance.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/BeerCocktail.jpg", alt: "Bread basket", className: "grid-item" },
  { src: "/images/Home/Coffee (8).jpg", alt: "Coffee cup", className: "grid-item" },
  */
  { src: "/images/Home/PiedmontFront (12).webp", alt: "Restaurant exterior", className: "grid-item large" },
  { src: "/images/Home/PiedmontFront.webp", alt: "Restaurant exterior", className: "grid-item large" },
  { src: "/images/Home/Tables (12).webp", alt: "Elegant dining tables", className: "grid-item large" },
  { src: "/images/Home/Tables4.webp", alt: "Outdoor dining tables", className: "grid-item large" }, 
  { src: "/images/Home/PiedmontFront (8).webp", alt: "Restaurant exterior", className: "grid-item large" },

  { src: "/images/Home/Ambiance (23).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (13).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance.webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (19).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (32).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (37).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (38).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (36).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (34).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (27).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/PiedmontFrontPatio.webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (14).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/Ambiance (18).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/CocktailAmbiance.webp", alt: "Cocktail ambiance", className: "grid-item" },
  { src: "/images/Home/BrunchMulti.webp", alt: "Brunch dishes", className: "grid-item" },
  { src: "/images/Home/Tables (14).webp", alt: "Outdoor dining tables", className: "grid-item" },
  { src: "/images/Home/Wine (27).webp", alt: "Wine bottles", className: "grid-item" },
  { src: "/images/Home/TablesAmbiance.webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/Home/BeerCocktail.webp", alt: "Bread basket", className: "grid-item" },
  { src: "/images/Home/Coffee (8).webp", alt: "Coffee cup", className: "grid-item" },
];

const Home = () => {
  return (
    <div>
      <ImageGrid images={homeImages} />
    </div>
  );
};

export default Home;
