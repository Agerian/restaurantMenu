import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import MenuItem from '../MenuItem';
import ImageGrid from '../../components/ImageGrid';
import './MenuPage.css';

const GET_ALL_MENU_ITEMS = gql`
  query GetAllMenuItems {
    getAllMenuItems {
      _id
      name
      description
      price
      category {
        _id
        name
      }
      vineyard
      region
      tastingNotes
    }
  }
`;

const categorySubcategories = {
  "Breakfast": [
    "Breakfast - Breakfast",
    "Breakfast - Egg Omelettes or Tofu Scrambles", 
    "Breakfast - I ♥ Potatoes", 
    "Breakfast - Pozole", 
    "Breakfast - Sides"
  ],
  "Cafe": [
    "Cafe - Burgers", 
    "Cafe - Salads", 
    "Cafe - Sandwiches", 
    "Cafe - Sides"
  ],
  "Specialties": [
    "Specialties - Specialties",
    "Specialties - I ♥ Seafood", 
    "Specialties - On the Side"
  ],
  "Beverages": [
    "Beverages - Cold", 
    "Beverages - Hot or Iced", 
    "Beverages - To Go"
  ],
  "Desserts": [],
  "Wine": [
    "Wine - White - Bottle", 
    "Wine - Sparkling - Bottle", 
    "Wine - Red - Bottle", 
    "Wine - Rosé - Bottle", 
    "Wine - Skin-Contact - Bottle", 
    "Wine - White - By The Glass", 
    "Wine - Sparkling - By The Glass", 
    "Wine - Red - By The Glass", 
    "Wine - Rosé - By The Glass", 
    "Wine - House White - By The Glass", 
    "Wine - House Red - By The Glass", 
    "Wine - House Sparkling - By The Glass"
  ],
  "Beer": [
    "Beer - Stout & Porter", 
    "Beer - Sour", 
    "Beer - IPA", 
    "Beer - Lager", 
    "Beer - Ale", 
    "Beer - Cider", 
    "Beer - Pilsner", 
    "Beer - Draft"
  ],
  "Spirits": [
    "Spirits - Vodka", 
    "Spirits - Gin & Genever", 
    "Spirits - Tequila", 
    "Spirits - Mezcal", 
    "Spirits - Sotol", 
    "Spirits - Brandy", 
    "Spirits - Absinthe", 
    "Spirits - Aperitif & Digestif", 
    "Spirits - Whiskey", 
    "Spirits - Rye", 
    "Spirits - Scotch", 
    "Spirits - Rum"
  ],
  "Cocktails": [
    "Cocktails - Cocktails",
    "Cocktails - Classics", 
    "Cocktails - Boozy Coffee", 
    "Cocktails - N/A"
  ],
  // Add any additional categories or subcategories here
};

const MenuPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_MENU_ITEMS);
  const [categorizedItems, setCategorizedItems] = useState({});
  const [activeSubcategories, setActiveSubcategories] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    if (data) {
      const tempCategorizedItems = {};

      // Initialize categories and subcategories
      Object.entries(categorySubcategories).forEach(([mainCategory, subcategories]) => {
        tempCategorizedItems[mainCategory] = []; // Initialize main category
        subcategories.forEach(subcategory => {
          tempCategorizedItems[subcategory] = []; // Initialize subcategories
        });
      });

      data.getAllMenuItems.forEach(item => {
        const { name } = item.category;
        // Assign item to its direct category or subcategory
        if (tempCategorizedItems.hasOwnProperty(name)) {
          tempCategorizedItems[name].push(item);
        }
      });

      setCategorizedItems(tempCategorizedItems);
    }
  }, [data]);

  useEffect(() => {
    const adjustBodyScroll = () => {
      const menuContent = document.querySelector('.menu-content');
      if (!menuContent) return;

      // Check if the menu content's height is greater than the viewport height
      const shouldDisableScroll = menuContent.scrollHeight > window.innerHeight;

      // Toggle the 'body-no-scroll' class based on the condition
      document.body.classList.toggle('body-no-scroll', shouldDisableScroll);
    };

    // Call when categories/subcategories change
    adjustBodyScroll();

    // Call adjustBodyScroll when the window is resized
    window.addEventListener('resize', adjustBodyScroll);

    // Cleanup - remove event listener
    return () => window.removeEventListener('resize', adjustBodyScroll);
  }, [expandedCategory, activeSubcategories]); // Dependencies

  // Handling subcategory change...
  const handleSubcategoryChange = (mainCategory, subcategory) => {
    setActiveSubcategories((prev) => ({ ...prev, [mainCategory]: subcategory }));
  };

  // Toggling category...
  const toggleCategory = (category) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading menu items.</p>;

  const images = [
    /*
    { src: "/images/MenuPage/Cocktail.jpg", alt: "Spicy cocktail", className: "grid-item large" },
    { src: "/images/MenuPage/Wine (22).jpg", alt: "Wine & flowers", className: "grid-item large" },
    { src: "/images/MenuPage/Coffee.jpg", alt: "Coffee Art", className: "grid-item large" },
    { src: "/images/MenuPage/Cocktail (20).jpg", alt: "Cocktail", className: "grid-item large" }, 
    { src: "/images/MenuPage/Wine (29).jpg", alt: "Restaurant ambiance", className: "grid-item large" },
  
    { src: "/images/MenuPage/ArugalaBlueCheeseSalad.jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/BangBangBroccoli.jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Burger (4).jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Chihuamelette (2).jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/CitrusSalmon.jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Dessert (6).jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/FalafelWrap.jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/GreenPozole.jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/FarmerOmelette.jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/ImpossibleCheesesteak.jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/KimchiFriedRiceTofu.jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/MatchaPancakes.jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Migas.jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Moroccan Toast.jpg", alt: "Cocktail ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Nachos.jpg", alt: "Brunch dishes", className: "grid-item" },
    { src: "/images/MenuPage/PozoleRed.jpg", alt: "Outdoor dining tables", className: "grid-item" },
    { src: "/images/MenuPage/SaffronRisotto.jpg", alt: "Wine bottles", className: "grid-item" },
    { src: "/images/MenuPage/Salad.jpg", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/SalmonGreens.jpg", alt: "Bread basket", className: "grid-item" },
    { src: "/images/MenuPage/ShishitoPeppers.jpg", alt: "Coffee cup", className: "grid-item" },
    */
    { src: "/images/MenuPage/Cocktail.webp", alt: "Spicy cocktail", className: "grid-item large" },
    { src: "/images/MenuPage/Wine (22).webp", alt: "Wine & flowers", className: "grid-item large" },
    { src: "/images/MenuPage/Coffee.webp", alt: "Coffee Art", className: "grid-item large" },
    { src: "/images/MenuPage/Cocktail (20).webp", alt: "Cocktail", className: "grid-item large" }, 
    { src: "/images/MenuPage/Wine (29).webp", alt: "Restaurant ambiance", className: "grid-item large" },
  
    { src: "/images/MenuPage/ArugalaBlueCheeseSalad.webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/BangBangBroccoli.webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Burger (4).webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Chihuamelette (2).webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/CitrusSalmon.webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Dessert (6).webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/FalafelWrap.webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/GreenPozole.webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/FarmerOmelette.webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/ImpossibleCheesesteak.webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/KimchiFriedRiceTofu.webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/MatchaPancakes.webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Migas.webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Moroccan Toast.webp", alt: "Cocktail ambiance", className: "grid-item" },
    { src: "/images/MenuPage/Nachos.webp", alt: "Brunch dishes", className: "grid-item" },
    { src: "/images/MenuPage/PozoleRed.webp", alt: "Outdoor dining tables", className: "grid-item" },
    { src: "/images/MenuPage/SaffronRisotto.webp", alt: "Wine bottles", className: "grid-item" },
    { src: "/images/MenuPage/Salad.webp", alt: "Restaurant ambiance", className: "grid-item" },
    { src: "/images/MenuPage/SalmonGreens.webp", alt: "Bread basket", className: "grid-item" },
    { src: "/images/MenuPage/ShishitoPeppers.webp", alt: "Coffee cup", className: "grid-item" },
  ]

  return (
    <div className="menu-page-container">
      <ImageGrid images={images} />
      <div className="menu-content">
        {Object.keys(categorySubcategories).map(mainCategory => (
          <div key={mainCategory} className="menu-category">
            <h2 onClick={() => toggleCategory(mainCategory)}>{mainCategory}</h2>
            {expandedCategory === mainCategory && (
              <>
                <div className="subcategory-tabs">
                  {categorySubcategories[mainCategory].map(subcategory => (
                    <button
                      key={subcategory}
                      onClick={() => handleSubcategoryChange(mainCategory, subcategory)}
                      className={activeSubcategories[mainCategory] === subcategory ? 'active' : ''}
                    >
                      {subcategory.replace(mainCategory + ' - ', '')}
                    </button>
                  ))}
                </div>
                <div className="menu-items">
                  {categorizedItems[activeSubcategories[mainCategory] || mainCategory]?.map(item => (
                    <MenuItem key={item._id} item={item} />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;