import React from "react";
import HomeHeaders from "./HomeHeaders";
import HomeThreeColumns from "./HomeThreeColums";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeHelping from "./HomeHelping";
import HomeFooter from "./HomeFooter";

function Home() {
  return (
    <>
      <HomeHeaders></HomeHeaders>
      <HomeThreeColumns></HomeThreeColumns>
      <HomeFourSteps></HomeFourSteps>
      <HomeAboutUs></HomeAboutUs>
      <HomeHelping></HomeHelping>
      <HomeFooter></HomeFooter>
    </>
  );
}
export default Home;
