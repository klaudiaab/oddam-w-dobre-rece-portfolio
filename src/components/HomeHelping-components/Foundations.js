import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function Foundations({ foundations, paginate, pagenumber, setpagenumber }) {
  const userPerPage = 3;
  const pageVisited = pagenumber * userPerPage;
  const pageCount = Math.ceil(foundations.length / userPerPage);

  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  const displayPagination = () => {
    if (foundations.length > 3) {
      return (
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
      );
    }
  };
  if (paginate === "foundations") {
    return (
      <>
        <div
          className="foundations company_styles"
          foundations={foundations}
          paginate={paginate}
        >
          {foundations
            .slice(pageVisited, pageVisited + userPerPage)
            .map((user) => {
              if (foundations.length <= 3) {
                return (
                  <li
                    key={user.id}
                    className="all_companies"
                    id="display_none_pagination"
                  >
                    {user.foundation}
                    <p className="necessary_things"> {user.necessary_things}</p>
                    <p className="mission">Cel i misja: {user.mission}</p>
                    <hr></hr>
                  </li>
                );
              }
              if (foundations.length > 3) {
                return (
                  <li
                    key={user.id}
                    className="all_companies"
                    id="display_pagination"
                  >
                    {user.foundation}
                    <p className="necessary_things"> {user.necessary_things}</p>
                    <p className="mission">Cel i misja: {user.mission}</p>
                    <hr></hr>
                  </li>
                );
              }
            })}
          {displayPagination()}
        </div>
      </>
    );
  }
}

export default Foundations;
