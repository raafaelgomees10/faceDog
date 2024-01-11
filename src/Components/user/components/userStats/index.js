import React, { Suspense, lazy, useEffect } from "react";
import Head from "../../../helper/head";
import Error from "../../../helper/error";
import { STATS_GET } from "../../../../api";
import Loading from "../../../helper/loading";
import useFetch from "../../../../Hooks/useFetch";

const Graphs = lazy(() => import("./Graphs"));
const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (data) {
    return (
      <Suspense fallback={<></>}>
        <Head title="Estatísticas" />
        <Graphs data={data} />
      </Suspense>
    );
  } else {
    return null;
  }
};

export default UserStats;
