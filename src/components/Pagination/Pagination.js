import React from "react";

import { getPages } from "./utils";

export const Pagination = ({ currentPage, setCurrentPage, pages }) => (
  <div className="pagination">
    {getPages([...Array(pages).keys()], currentPage).map((number, index) => (
      <p
        className={number === currentPage ? "active" : ""}
        onClick={() => setCurrentPage(number)}
        key={index}
      >
        {number + 1}
      </p>
    ))}
  </div>
);
