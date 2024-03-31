import React from 'react';

const Contact = () => {
  return (
    <div>
      <section>
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> 4172 N Mesa St. El Paso, Texas</p>
        <p><strong>Phone:</strong> 915-249-6965</p>
        <h3>Business Hours</h3>
        <p><strong>Sunday - Tuesday:</strong> 11:00 AM - 3:00 PM</p>
        <p><strong>Wednesday - Saturday:</strong> 11:00 AM - 10:00 PM</p>
      </section>

      <section>
        <h2>Find Us</h2>
        <iframe
          title="Piedmont Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.926684578015!2d-106.51030868487023!3d31.79417498129928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e758a4e4c7c7e9%3A0x4f3b3e3b0c8b5f7a!2s4172%20N%20Mesa%20St%2C%20El%20Paso%2C%20TX%2079904!5e0!3m2!1sen!2sus!4v1623266971080!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
    </div>
  );
};

export default Contact;