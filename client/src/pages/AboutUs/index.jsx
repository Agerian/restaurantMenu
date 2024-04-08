import React from 'react';
import ImageGrid from '../../components/ImageGrid';

const aboutImages = [
  /*
  { src: "/images/AboutUs/PiedmontFamilySolo (14).jpg", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/AboutUs/PiedmontFamily.png", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/AboutUs/PiedmontFamilySolo5.jpg", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/AboutUs/PiedmontFamilySolo (13).jpg", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/AboutUs/PiedmontFamily (5).jpg", alt: "Restaurant ambiance", className: "grid-item large" },
 
  { src: "/images/AboutUs/PiedmontFamily (8).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily (7).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily (6).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily (4).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily (3).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily (2).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (15).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (12).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (11).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (10).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (9).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (8).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (7).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySoloWine.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (6).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo3.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (16).png", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (3).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (2).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  */
  { src: "/images/AboutUs/PiedmontFamilySolo (14).webp", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/AboutUs/PiedmontFamily (1).webp", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/AboutUs/PiedmontFamilySolo5.webp", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/AboutUs/PiedmontFamilySolo (13).webp", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/AboutUs/PiedmontFamily (5).webp", alt: "Restaurant ambiance", className: "grid-item large" },
 
  { src: "/images/AboutUs/PiedmontFamily (8).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily (7).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily (6).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily (4).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily (3).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily (2).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamily.webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (15).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (12).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (11).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (10).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (9).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (8).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (7).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySoloWine.webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (6).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo3.webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (16).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (3).webp", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/AboutUs/PiedmontFamilySolo (2).webp", alt: "Restaurant ambiance", className: "grid-item" },
];

const AboutUs = () => {
  return (
    <div>

      <section>
        <h2>Our Philosophy</h2>
        <p>The spirit of the Franklin Mountains whispers through our kitchen. We believe, like the landscapes that surround us, food should be vibrant and a little wild. We honor the bounty of El Paso and the heritage of the Southwest, but we let curiosity and the changing seasons guide our hands.  Expect vibrant flavors, familiar dishes with a playful twist, and a deep respect for our ingredients.</p>
      </section>

      <section>
        <h2>Our History</h2>
        <p>Piedmont began as a dream – a place where food told stories. Five years ago, nestled at the base of the mountains, we opened our doors.  Like the resilient desert blooms, Piedmont has found its footing. It has become a place where flavors unfurl, where the community gathers. Our journey, much like our food, is ever-evolving.</p>
      </section>

      <section>
        <h2>Meet Our Team</h2>
        <p>Our kitchen hums with a blend of artistry and dedication. At its helm is our chef, a culinary visionary who transforms each dish into a vibrant masterpiece. He leads a talented crew - from seasoned sous chef to passionate baker, each memeber plays a part in creating the magic of Piedmont.
        <br />
        Out front, warmth radiates.  A welcoming committee ensures every guest feels at home, offering smiles and spirited conversation. Together, we are the heart and soul of Piedmont – a mix of seasoned veterans and bright-eyed dreamers, all bound by the love of good food and the joy of sharing it.</p>
      </section>
      
      <ImageGrid images={aboutImages} />
    </div>
  );
};

export default AboutUs;
