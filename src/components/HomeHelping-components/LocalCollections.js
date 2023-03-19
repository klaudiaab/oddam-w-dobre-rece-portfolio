import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function LocalCollections({
  localcollections,
  paginate,
  pagenumber,
  setpagenumber,
}) {
  const userPerPage = 3;
  const pageVisited = pagenumber * userPerPage;
  const pageCount = Math.ceil(localcollections.length / userPerPage);

  const changePage = ({ selected }) => {
    setpagenumber(selected);
  };

  const displayPagination = () => {
    if (localcollections.length > 3) {
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
  return (
    <>
      <div
        className="local_collections company_styles"
        localcollections={localcollections}
        paginate={paginate}
      >
        {localcollections
          .slice(pageVisited, pageVisited + userPerPage)
          .map((user) => {
            if (localcollections.length <= 3) {
              return (
                <li
                  key={user.id}
                  className="all_companies"
                  id="display_none_pagination"
                >
                  {user.local_collection}
                  <p className="necessary_things">{user.necessary_things}</p>
                  <p className="mission">{user.mission}</p>

                  <hr></hr>
                </li>
              );
            }
            if (localcollections.length > 3)
              return (
                <li
                  key={user.id}
                  id="display_pagination"
                  className="all_companies"
                >
                  {user.local_collection}
                  <p className="necessary_things">{user.necessary_things}</p>
                  <p className="mission">{user.mission}</p>

                  <hr></hr>
                </li>
              );
          })}
        {displayPagination()}
      </div>
    </>
  );
}

export default LocalCollections;
