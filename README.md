# 🎬 Movie Search App

A React-based Movie Search Application that allows users to search movies using the OMDb API and view detailed information such as poster, year, genre, runtime, director, actors, plot, and ratings.

## 🚀 Features

- Search movies by title
- Fetch data from OMDb API
- Display movie posters and movie details
- View complete movie information on a separate page
- Dynamic Routing using React Router DOM
- Responsive UI
- Error handling

## 🛠 Technologies Used

- React JS
- Vite
- Axios
- React Router DOM
- OMDb API
- CSS

## 📋 Development Steps

### 1. Create React Project

npm create vite@latest moviesearch
cd moviesearch
npm install

### 2. Install Required Packages

npm install axios react-router-dom

### 3. Setup Routing

Created routes in App.jsx:

- Home Page (/)
- Movie Details Page (/movie/:id)

### 4. Create Search Functionality

In Home.jsx:

- Created search state using useState()
- Added input field
- Added search button
- Stored movie results in state

### 5. Fetch Movies from OMDb API

Used Axios to fetch movie data:

https://www.omdbapi.com/

Movie results are stored in React state and rendered dynamically.

### 6. Create MovieCard Component

MovieCard.jsx displays:

- Poster
- Title
- Year
- Type

Each card links to the Movie Details page.

### 7. Create Movie Details Page

MovieDetails.jsx:

- Uses useParams()
- Uses useEffect()
- Fetches complete movie details

Displays:

- Poster
- Title
- Genre
- Runtime
- Director
- Actors
- Plot
- Ratings

### 8. Handle Errors

Implemented error handling using try-catch blocks for:

- Network errors
- Invalid searches
- Empty responses

### 9. Styling

Applied CSS for:

- Movie grid layout
- Card design
- Hover effects
- Responsive design
- Details page styling

### 10. Run Project

npm run dev

Open:

https://abelshaji3-boop.github.io/movie_search/

## 🎯 What I Learned

✅ API Integration using Axios

✅ React State Management (useState)

✅ Side Effects using useEffect

✅ Dynamic Routing using React Router DOM

✅ URL Parameters using useParams

✅ Component-Based Architecture

✅ Error Handling

✅ API Data Rendering

This project helped me understand how modern web applications fetch, manage, and display data from external APIs using React and reusable components.
