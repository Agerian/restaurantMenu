import React from 'react';
import './ImageGrid.css';

const ImageGrid = ({ images }) => {
  // Separate images into large and small based on their className
  const largeImages = images.filter(image => image.className.includes('large'));
  const smallImages = images.filter(image => !image.className.includes('large'));

  // Shuffle small images only (large images are strategically placed)
  const shuffleArray = (array) => array.sort(() => 0.5 - Math.random());
  const shuffledSmallImages = shuffleArray([...smallImages]);

  // Specific slots for large images (e.g., first, middle, last in the grid)
  const gridSlots = Array(35).fill(null); // Placeholder for 35 slots
  gridSlots[0] = largeImages[0]; // Place first large image in the first slot
  gridSlots[5] = largeImages[1]; // Place the second large in the middle
  gridSlots[10] = largeImages[2]; // Place the third large in the last slot
  gridSlots[19] = largeImages[3];
  gridSlots[20] = largeImages[4];

  // Fill in the remaining slots with small images
  let smallImgIndex = 0;
  for (let i = 0; i < gridSlots.length; i++) {
    if (gridSlots[i] === null) {
      gridSlots[i] = shuffledSmallImages[smallImgIndex++];
    }
  }

  return (
    <div className="image-grid">
      {gridSlots.map((image, index) => (
        <img key={index} src={image?.src} alt={image?.alt} className={image?.className} />
      ))}
    </div>
  );
};

export default ImageGrid;
