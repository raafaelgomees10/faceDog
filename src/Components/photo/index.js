import React, { useEffect } from "react";
import Head from "../helper/head";
import Error from "../helper/error";
import { PHOTO_GET } from "../../api";
import Loading from "../helper/loading";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import PhotoContent from "./components/PhotoContent";

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

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

        <PhotoContent single={true} data={data} />
      </section>
    );
  } else {
    return null;
  }
};

export default Photo;
