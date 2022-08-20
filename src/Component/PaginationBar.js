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
        nextLabel="التالي >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< السابق"
        renderOnZeroPageCount={null}
        containerClassName={"pagination d-flex justify-content-center align-items-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link ms-2"}
        nextLinkClassName={"page-link me-2"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        forcePage={paginatedPage - 1}
      />
    </>
  );
};
export default PaginationBar;
