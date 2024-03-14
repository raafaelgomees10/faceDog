import React from "react";
import * as S from "./styles.js";
import { useSelector } from "react-redux";
import FeedPhotosItem from "../feedPhotosItem";

const FeedPhotos = ({ setModalPhoto }) => {
  // const { data, loading, error, request } = useFetch();

  // // useEffect(() => {
  // //   const fetchPhotos = async () => {
  // //     const total = 6;
  // //     const { url, options } = PHOTOS_GET({
  // //       page: page,
  // //       total: total,
  // //       user: user,
  // //     });

  // //     const { response, json } = await request(url, options);

  // //     if (response && response.ok && json.length < total) {
  // //       setInfinite(false);
  // //     }
  // //   };

  // //   fetchPhotos();
  // // }, [request, user, page, setInfinite]);

  const { list } = useSelector((state) => state.feed);

  return (
    <S.Ul className="animeLeft">
      {list.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </S.Ul>
  );
};

export default FeedPhotos;
