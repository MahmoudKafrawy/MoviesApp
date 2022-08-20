import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar } from "./Component/NavBar";
import MovieList from "./Component/MovieList";
import MovieDetails from "./Component/MovieDetails";
import axios from "axios";
import Footer from "./Component/Footer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(0);
  const [query, setQuery] = useState("");
  const [paginatedPage, setPaginatedPage] = useState(0);

  // Get All Movies
  const getAllMovies = async (pageNum = 1) => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ee47fe6c51d197ad03cd0ddbaedeab3e&language=ar&page=${pageNum}`
      )
      .then((response) => {
        setMovies(response.data.results);
        setPagesNumber(500);
        setPaginatedPage(response.data.page);
      });
  };

  // Search All Movies
  const search = async (query, pageNum = 1) => {
    if (query === "") {
      getAllMovies();
    }
    setQuery(query);
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ee47fe6c51d197ad03cd0ddbaedeab3e&language=ar&page=${pageNum}&include_adult=false&query=${query}`
      )
      .then((response) => {
        setMovies(response.data.results);
        setPagesNumber(response.data.total_pages);
        setPaginatedPage(response.data.page);
      });
  };

  useEffect(() => {
    getAllMovies();
    console.error("%c why are you here ? 🤪  ", "background: #000000; color: ##ff0000;font-size: 35px");
  }, []);

  return (
    <div className="parent">
      <Navbar search={search} paginatedPage={paginatedPage} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MovieList
                  movies={movies}
                  pagesNumber={pagesNumber}
                  getAllMovies={getAllMovies}
                  query={query}
                  search={search}
                  paginatedPage={paginatedPage}
                />
              }
            />
            <Route path="/Movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
