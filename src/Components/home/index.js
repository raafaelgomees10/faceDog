import React from "react";
import * as S from "./styles.js";
import Feed from "../feed/index.js";

const Home = () => {
  return (
    <S.Section className="container mainContainer">
      <Feed />
    </S.Section>
  );
};

export default Home;
