import React, { useState } from "react";
import * as S from "./styles.js";
import FeedPhotos from "./components/feedPhotos";
import FeedModal from "./components/feedModal/";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
