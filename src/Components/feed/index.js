import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Error from "../helper/error";
import Loading from "../helper/loading";
import FeedModal from "./components/feedModal/";
import FeedPhotos from "./components/feedPhotos";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos, resetFeedState } from "../../store/feed";

const Feed = ({ user }) => {
  // const [pages, setPages] = useState([1]);
  // const [infinite, setInfinite] = useState(true);  //estado que define se deve continuar ou não fazedo o scroll
  const [modalPhoto, setModalPhoto] = useState(null);

  const { infinite, loading, list, error } = useSelector((state) => state.feed);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFeedState());
    dispatch(loadNewPhotos({ user, total: 6 }));
  }, [dispatch, user]);

  useEffect(() => {
    let wait = false;

    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY; //total de scroll rolado na pagina
        const height = document.body.offsetHeight - window.innerHeight; //tamanho total da pagina

        // quando scroll for maior que 75% da pagina ativa a função
        if (scroll > height * 0.75 && !wait) {
          dispatch(loadNewPhotos({ user, total: 6 }));

          // setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          //para função não ficar ativando o tempo todo criamos o wait
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll ", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll ", infiniteScroll);
    };
  }, [dispatch, infinite, user]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      {list.length > 0 && <FeedPhotos setModalPhoto={setModalPhoto} />}
      {loading && <Loading />}
      {error && <Error error={error} />}

      {/* antes sem redux
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setInfinite={setInfinite}
          setModalPhoto={setModalPhoto}
        />
      ))} */}

      {!infinite && !user && (
        <p
          style={{
            textAlign: "center",
            padding: "2rem 0 4rem 0",
            color: "#888",
          }}
        >
          Não existem mais postagens.
        </p>
      )}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
