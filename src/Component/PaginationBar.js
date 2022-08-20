import React from "react";
import ReactPaginate from "react-paginate";

export const PaginationBar = ({ pagesNumber, getAllMovies, query, search, paginatedPage }) => {
  const handlePageClick = (data) => {
    const pageNum = data.selected + 1;
    if (query == "") {
      getAllMovies(pageNum);
    } else {
      search(query, pageNum);
    }
  };

  // Can Use pageCount = PagesNumber But Free API Limits to 500 Pages
  const pageCount = pagesNumber;
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={"pagination d-flex justify-content-center align-items-center p-0"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        forcePage={paginatedPage - 1}
      />
    </>
  );
};
export default PaginationBar;
