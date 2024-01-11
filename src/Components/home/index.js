import React from "react";
import * as S from "./styles.js";
import Feed from "../feed/index.js";
import Head from "../helper/head.js";

const Home = () => {
  return (
    <S.Section className="container mainContainer">
      <Head title="Fotos" description="Home do site dogs, com feed de fotos." />
      <Feed />
    </S.Section>
  );
};

export default Home;
