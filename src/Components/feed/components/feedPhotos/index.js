import React, { useEffect } from "react";
import * as S from "./styles.js";
import Error from "../../../helper/error.js";
import FeedPhotosItem from "../feedPhotosItem";
import { PHOTOS_GET } from "../../../../api.js";
import Loading from "../../../helper/loading.js";
import useFetch from "../../../../Hooks/useFetch.js";

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    };

    fetchPhotos();
  }, [request]);

  if (error) {
    return <Error error={error} />;
  }
  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <S.Ul className="animeLeft">
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </S.Ul>
    );
  }
};

export default FeedPhotos;
