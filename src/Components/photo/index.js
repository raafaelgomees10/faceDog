import React, { useEffect } from "react";
import Head from "../helper/head";
import Error from "../helper/error";
import Loading from "../helper/loading";
import { useParams } from "react-router-dom";
import { fetchPhoto } from "../../store/photo";
import PhotoContent from "./components/PhotoContent";
import { useDispatch, useSelector } from "react-redux";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [dispatch, id]);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />

        <PhotoContent single={true} />
      </section>
    );
  } else {
    return null;
  }
};

export default Photo;
