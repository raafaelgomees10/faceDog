import React, { useEffect } from "react";
import * as S from "./styles.js";
import Error from "../../../helper/error.js";
import FeedPhotosItem from "../feedPhotosItem";
import { PHOTOS_GET } from "../../../../api.js";
import Loading from "../../../helper/loading.js";
import useFetch from "../../../../Hooks/useFetch.js";

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6;
      const { url, options } = PHOTOS_GET({
        page: page,
        total: total,
        user: user,
      });

      const { response, json } = await request(url, options);

      if (response && response.ok && json.lenght < total) {
        setInfinite(false);
      }
    };

    fetchPhotos();
  }, [request, user, page, setInfinite]);

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
