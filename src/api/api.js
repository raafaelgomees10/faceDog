import React from "react";
import UserPost from "./endpoints/userPost";
import TokenPost from "./endpoints/tokenPost";
import PhotoPost from "./endpoints/photoPost";
import PhotoGet from "./endpoints/photoGet";

const Api = () => {
  return (
    <div>
      <h2>UserPost</h2>
      <UserPost />
      <h2>TokenPost</h2>
      <TokenPost />
      <h2>PhotoPost</h2>
      <PhotoPost />
      <h2>PhotoGet</h2>
      <PhotoGet />
    </div>
  );
};

export default Api;
