import React, { useEffect } from "react";
import * as S from "./styles.js";
import Error from "../../../helper/error.js";
import { PHOTO_GET } from "../../../../api.js";
import Loading from "../../../helper/loading.js";
import useFetch from "../../../../Hooks/useFetch.js";
import PhotoContent from "../../../photo/components/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);

    request(url, options);
  }, [photo, request]);

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  };

  return (
    <S.Container onClick={handleCloseModal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </S.Container>
  );
};

export default FeedModal;
