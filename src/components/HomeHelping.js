import React, { useEffect, useState } from "react";
import Decoration from "../assets/icons/Decoration.svg";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import classNames from "classnames";
import ReactPaginate from "react-paginate";
import { SizeOnlySource } from "webpack-sources";

function HomeHelping() {
  const [foundations, setFoundations] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [localCollections, setLocalCollections] = useState([]);
  const foundationsCollectionRef = collection(db, "foundations");
  const organizationsCollectionRef = collection(db, "organizations");
  const locallColectionRef = collection(db, "local_collections");
  const [pagination, setPagination] = useState("");
  const [text, setText] = useState(
    "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
  );

  //pagination

  const [pageNumber, setPageNumber] = useState(1);
  const userPerPage = 3;
  const pageVisited = pageNumber * userPerPage;
  // const pageCountorg = Math.ceil(org.length / userPerPage);
  const usePagination = () => {
    if (pagination === "foundations") {
      return Math.ceil(foundations.length / userPerPage);
    }
    if (pagination === "organizations") {
      return Math.ceil(organizations.length / userPerPage);
    }
    if (pagination === "local_collections") {
      return Math.ceil(localCollections.length / userPerPage);
    }
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //toogle border
  const [useToogleBorder, setUseToogleBorder] = useState(
    "toogle_border_foundations"
  );
  const [isToogleBorder, setIsToogleBorder] = useState(true);

  //show foundations

  const chooseFoundations = (e) => {
    e.preventDefault();
    setUseToogleBorder("toogle_border_foundations");
    const getFoundationsList = async () => {
      const data = await getDocs(foundationsCollectionRef);
      setFoundations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    setText(
      "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
    );
    setIsToogleBorder((prevState) => {
      return prevState;
    });
    setPageNumber(0);
    setPagination("foundations");
    setOrganizations([]);
    setLocalCollections([]);
    getFoundationsList();
  };

  //show organizations

  const nonGovernmentalOrganizations = (e) => {
    e.preventDefault();
    setUseToogleBorder("toogle_border_organizations");
    const getOrganizationList = async () => {
      const data = await getDocs(organizationsCollectionRef);
      setOrganizations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    setText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    );
    setIsToogleBorder((prevState) => {
      return prevState;
    });
    setPageNumber(0);
    setPagination("organizations");
    setFoundations([]);
    setLocalCollections([]);
    getOrganizationList();
  };

  //show collections

  const localCollection = (e) => {
    e.preventDefault();
    setUseToogleBorder("toogle_border_localCollection");
    const getLocalCollectionList = async () => {
      const data = await getDocs(locallColectionRef);
      setLocalCollections(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    setText(
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sit."
    );
    setIsToogleBorder((prevState) => {
      return prevState;
    });
    setPageNumber(0);
    setPagination("local_collections");
    setFoundations([]);
    setOrganizations([]);
    getLocalCollectionList();
  };

  return (
    <section className="home_helping">
      <header className="header_helping">Komu pomagamy?</header>
      <img alt="decoration" src={Decoration} />
      <div className="helping_organizations">
        <div
          className={classNames({
            toogle_border_foundations:
              useToogleBorder === "toogle_border_foundations",
          })}
          id="organizations"
          onClick={chooseFoundations}
        >
          Fundacjom
        </div>
        <div
          className={classNames({
            toogle_border_organizations:
              useToogleBorder === "toogle_border_organizations",
          })}
          id="organizations"
          onClick={nonGovernmentalOrganizations}
        >
          Organizacjom pozarządowym
        </div>
        <div
          className={classNames({
            toogle_border_localCollection:
              useToogleBorder === "toogle_border_localCollection",
          })}
          id="organizations"
          onClick={localCollection}
        >
          Lokalnym zbiórkom
        </div>
      </div>
      <p className="organizations_details">{text}</p>
      <div>
        {foundations
          .slice(pageVisited, pageVisited + userPerPage)
          .map((user) => {
            return (
              <li key={user.id}>
                {user.foundation}
                <br></br>
                {user.mission}
              </li>
            );
          })}
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
        {localCollections
          .slice(pageVisited, pageVisited + userPerPage)
          .map((user) => {
            return <li key={user.id}>{user.local_collection}</li>;
          })}
      </div>
      <div>
        <ReactPaginate
          previouslabel={"Previous"}
          nextLabel={"Next"}
          pageCount={usePagination()}
          onPageChange={changePage}
        ></ReactPaginate>
      </div>
    </section>
  );
}

export default HomeHelping;
