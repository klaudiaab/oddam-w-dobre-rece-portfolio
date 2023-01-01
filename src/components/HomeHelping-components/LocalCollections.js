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
  if (paginate === "local_collections") {
    return (
      <>
        <div
          className="local_collections companies"
          localcollections={localcollections}
        >
          {localcollections
            .slice(pageVisited, pageVisited + userPerPage)
            .map((user) => {
              return <li key={user.id}>{user.local_collection}</li>;
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

export default LocalCollections;
