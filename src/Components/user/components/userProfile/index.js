import React from "react";
import Feed from "../../../feed";
import Head from "../../../helper/head";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="container mainContainer">
      <Head title={user} />

      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
