import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Organizations({ organizations, paginate, pagenumber, setpagenumber }) {
  const userPerPage = 3;
  const pageVisited = pagenumber * userPerPage;
  const pageCount = Math.ceil(organizations.length / userPerPage);

  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };
  if (paginate === "organizations") {
    return (
      <>
        <div className="organizations companies" organizations={organizations}>
          {organizations
            .slice(pageVisited, pageVisited + userPerPage)
            .map((user) => {
              return (
                <li key={user.id}>
                  {user.organization}
                  <br></br>
                </li>
              );
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

export default Organizations;
