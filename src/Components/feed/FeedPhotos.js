import React from "react";
import * as S from "./styles.js";
import { useEffect } from "react";
import Error from "../helper/error";
import { PHOTOS_GET } from "../../api";
import Loading from "../helper/loading";
import useFetch from "../../Hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    };

    fetchPhotos();
  }, [request]);

  if (error) {
    <Error error={error} />;
  }
  if (loading) {
    <Loading />;
  }
  if (data) {
    return (
      <S.Ul className="animeLeft">
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </S.Ul>
    );
  }
};

export default FeedPhotos;
