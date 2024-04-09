# Piedmont Restaurant Website

**Live URL:** [Visit the Piedmont Restaurant Website](https://piedmont-qlgh.onrender.com/)

## Overview

The Piedmont Restaurant Website is a modern, user-friendly web application designed to enhance the online presence of the Piedmont restaurant. This project aims to provide an intuitive platform for customers to access the restaurant's menu, learn about its history, and contact the establishment easily. Additionally, it features a "Staff Only" section for menu management, allowing the restaurant staff to add, edit, and delete menu items without direct code modifications.

## Features

- Responsive design for an optimal viewing experience across various devices (desktops, tablets, phones)
- Dynamic menu display categorized into Breakfast, Lunch & Dinner, Beverages, Beer, Wine, Liquor
- About Us section detailing the restaurant's history and unique offerings
- Contact section with embedded Google Map, address, phone number, and business hours
- Secure "Staff Only" section for menu management (add, edit, delete items)
- Optimized images for fast loading times

## Technical Stack

- **Frontend:** React.js, Vite, Apollo Client, CSS for responsive design
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, GraphQL
- **Authentication:** JWT for secure access to the "Staff Only" section
- **Deployment:** Render

## Project Structure

```plaintext
.
├── client                      # Frontend application
│   ├── public                  # Public assets
│   │   └── images              # Images for the website
│   └── src                     # Source files
│       ├── components          # React components
│       ├── pages               # Page components
│       └── utils               # Utility functions
├── server                      # Backend application
│   ├── config                  # Configuration files
│   ├── models                  # Database models
│   ├── schemas                 # GraphQL schemas
│   └── utils                   # Utility functions
├── package.json                # Project metadata and dependencies
└── package-lock.json           # Locked versions of dependencies
```
## Getting Started

Prerequisites
- Node.js
- npm or yarn
- MongoDB instance (local or remote)

## Installation

1. Clone the repository: <git clone https://github.com/Agerian/restaurantMenu.git>
2. Navigate to the project directory: <cd restaurantMenu>
3. Install dependencies: <npm install>
4. Set up environment variables:
   - Create a `.env` file in the `server` directory
   - Define the following variables:
     - `MONGODB_URI`: MongoDB connection string
5. Start the development server: <npm run develop>
   - The frontend application will be available at `http://localhost:3000`

## Deployment
This project is deployed on Render. For detailed instructions on deploying to Render, refer to their official documentation.

## License
[![MIT License License](https://img.shields.io/badge/license-MIT%20License-green)](https://opensource.org/licenses/MIT%20License)

## Acknowledgments
Special thanks to the Piedmont restaurant staff for their cooperation and support during this project.
This project was developed as part of a web development course, fulfilling all specified course requirements.
   
## Contact

AdrianO 
 - Github: [@Agerian](https://github.com/Agerian)
 - Email: ezereading@gmail.com

JoshD
 - Github: [@JoshD](https://github.com/spatiallyabsent)
  - Email: Joshuapdow@gmail.com

