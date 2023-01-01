import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function Foundations({ foundations, paginate, pagenumber, setpagenumber }) {
  const userPerPage = 3;
  const pageVisited = pagenumber * userPerPage;
  const pageCount = Math.ceil(foundations.length / userPerPage);

  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };

  if (paginate === "foundations") {
    return (
      <>
        <div
          className="foundations"
          foundations={foundations}
          paginate={paginate}
        >
          {foundations
            .slice(pageVisited, pageVisited + userPerPage)
            .map((user) => {
              return <li key={user.id}>{user.foundation}</li>;
            })}
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          pageVisited={pageVisited}
          userPerPage={userPerPage}
          containerClassName={"paginationBttnS"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        ></ReactPaginate>
      </>
    );
  }
}

export default Foundations;
