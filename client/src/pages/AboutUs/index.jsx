import React from 'react';
import ImageGrid from '../../components/ImageGrid';

const aboutImages = [
  { src: "/images/PiedmontFamilySolo (14).jpg", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/PiedmontFamily.png", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/PiedmontFamilySolo5.jpg", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/PiedmontFamilySolo (13).jpg", alt: "Restaurant ambiance", className: "grid-item large" },
  { src: "/images/PiedmontFamily (5).jpg", alt: "Restaurant ambiance", className: "grid-item large" },
 
  { src: "/images/PiedmontFamily (8).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamily (7).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamily (6).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamily (4).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamily (3).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamily (2).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamily.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo (15).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo (12).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo (11).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo (10).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo (9).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo (8).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo (7).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySoloWine.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo (6).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo3.jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo (16).png", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo (3).jpg", alt: "Restaurant ambiance", className: "grid-item" },
  { src: "/images/PiedmontFamilySolo (2).jpg", alt: "Restaurant ambiance", className: "grid-item" },
];

const AboutUs = () => {
  return (
    <div>

      <section>
        <h2>Our Philosophy</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget.</p>
      </section>

      <section>
        <h2>Our History</h2>
        <p>Aliquam erat volutpat. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam.</p>
      </section>

      <section>
        <h2>Meet Our Team</h2>
        <ul>
          <li>Chef John Doe - A visionary in the kitchen.</li>
          <li>Jane Smith - Dedicated manager with a passion for service.</li>
        </ul>
      </section>
      
      <ImageGrid images={aboutImages} />
    </div>
  );
};

export default AboutUs;
