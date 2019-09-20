import React from "react";
import propTypes from "prop-types";

const Pagination = ({
  articlesPerPage,
  totalArticles,
  paginate,
  previous,
  next,
  currentPage
}) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i += 1) {
    pageNums.push(i);
  }

  return (
    <>
      <div className="pagination-wrapper">
        {pageNums.length === 0 ? null : (
          <div className="pagination">
            <a
              onClick={currentPage === pageNums[0] ? null : previous}
              href="#!"
            >
              &laquo;
            </a>
            {pageNums.map(num => (
              <a onClick={() => paginate(num)} key={num} href="#!">
                {num}
              </a>
            ))}
            <a
              onClick={
                currentPage === pageNums[pageNums.length - 1] ? null : next
              }
              href="#!"
            >
              &raquo;
            </a>
          </div>
        )}
      </div>
    </>
  );
};

Pagination.propTypes = {
  articlesPerPage: propTypes.number,
  totalArticles: propTypes.number,
  paginate: propTypes.func,
  next: propTypes.func,
  previous: propTypes.func,
  currentPage: propTypes.number
};

export default Pagination;
