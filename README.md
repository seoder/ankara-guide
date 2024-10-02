# Ankara Guide

Ankara Guide is a web application developed using Next.js 14 to provide a comprehensive guide for exploring the capital city of Turkey, Ankara. The application offers detailed information about various attractions, restaurants, historical sites, and cultural experiences in the city.

## Features

- Interactive map of Ankara with highlighted points of interest.
- Filterable list of attractions (museums, parks, restaurants, etc.).
- Detailed information for each point of interest, including photos and descriptions.
- Responsive design for desktop and mobile devices.
- Easy navigation between different categories of places.
- Light and dark mode support.

## Tech Stack

- **Next.js 14** - React-based framework for server-side rendering and static site generation.
- **React** - Frontend library for building user interfaces.
- **CSS Modules** - For styling components in isolation.
- **Mapbox** - Interactive maps integrated for displaying locations.
- **API Integration** - Data is fetched from an external API to provide up-to-date information on locations.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ankara-guide.git
    ```

2. Navigate to the project directory:
    ```bash
    cd ankara-guide
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env.local` file in the root directory and add your Mapbox API key:
    ```bash
    NEXT_PUBLIC_MAPBOX_API_KEY=your_mapbox_api_key
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


