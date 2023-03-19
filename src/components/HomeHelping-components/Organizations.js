import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Organizations({ organizations, paginate, pagenumber, setpagenumber }) {
  const userPerPage = 3;
  const pageVisited = pagenumber * userPerPage;
  const pageCount = Math.ceil(organizations.length / userPerPage);

  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  const displayPagination = () => {
    if (organizations.length > 3) {
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
  if (paginate === "organizations") {
    return (
      <>
        <div
          className="organizations company_styles"
          organizations={organizations}
          paginate={paginate}
        >
          {organizations
            .slice(pageVisited, pageVisited + userPerPage)
            .map((user) => {
              if (organizations.length <= 3) {
                return (
                  <li
                    key={user.id}
                    className="all_companies"
                    id="display_none_pagination"
                  >
                    {user.organization}{" "}
                    <p className="necessary_things">{user.necessary_things}</p>
                    <p className="mission">Cel i misja: {user.mission}</p>
                    <hr></hr>
                  </li>
                );
              }
              if (organizations.length > 3) {
                return (
                  <li
                    key={user.id}
                    id="display_pagination"
                    className="all_companies"
                  >
                    {user.organization}{" "}
                    <p className="necessary_things">{user.necessary_things}</p>
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

export default Organizations;
