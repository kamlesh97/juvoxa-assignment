import React from "react";

const pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <div className="page">
        {pageNumber.map((number) => (
          <span className="page-no">
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default pagination;
