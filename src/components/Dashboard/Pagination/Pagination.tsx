import "./Pagination.scss";
import React, { useEffect, useState } from "react";

type PaginationProps = {
  offset: number;
  handleNext: any;
  handlePrev: any;
};

const Pagination: React.FunctionComponent<PaginationProps> = (props) => (
  <div className="app__pagination">
    <button onClick={props.handlePrev} className="app__button">
      Next page
    </button>

    <button onClick={props.handleNext} className="app__button">
      Next page
    </button>
  </div>
);

export default Pagination;