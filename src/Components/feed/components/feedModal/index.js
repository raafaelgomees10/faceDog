import React, { useEffect } from "react";
import * as S from "./styles.js";
import Error from "../../../helper/error.js";
import Loading from "../../../helper/loading.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../../../store/photo.js";
import PhotoContent from "../../../photo/components/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [dispatch, photo.id]);

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  };

  return (
    <S.Container onClick={handleCloseModal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </S.Container>
  );
};

export default FeedModal;
