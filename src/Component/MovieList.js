import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationBar from "./PaginationBar";

export const MovieList = ({ movies, pagesNumber, getAllMovies, query, search, paginatedPage }) => {
  return (
    <>
      <Row className="mt-2">
        {movies.map((movies) => (
          <CardMovie mov={movies} key={movies.id} />
        ))}
      </Row>

      <Col className="d-flex justify-content-center align-items-center mt-4 mb-4">
        <div className="col-12">
          <PaginationBar
            pagesNumber={pagesNumber}
            getAllMovies={getAllMovies}
            query={query}
            search={search}
            paginatedPage={paginatedPage}
          />
        </div>
      </Col>
    </>
  );
};

export default MovieList;
