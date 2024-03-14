import React, { useEffect } from "react";
import * as S from "./styles.js";
import Error from "../../../helper/error.js";
import Loading from "../../../helper/loading.js";
import { useDispatch, useSelector } from "react-redux";
import PhotoContent from "../../../photo/components/PhotoContent";
import { closeModal } from "../../../../store/ui.js";

const FeedModal = () => {
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };
  if (!modal) {
    return null;
  }

  return (
    <S.Container onClick={handleCloseModal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </S.Container>
  );
};

export default FeedModal;
