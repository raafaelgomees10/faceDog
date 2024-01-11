import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FeedModal from "./components/feedModal/";
import FeedPhotos from "./components/feedPhotos";

const Feed = ({ user }) => {
  const [pages, setPages] = useState([1]);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [infinite, setInfinite] = useState(true);
  //estado que define se deve continuar ou não fazedo o scroll
  useEffect(() => {
    let wait = false;

    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY; //total de scroll rolado na pagina
        const height = document.body.offsetHeight - window.innerHeight; //tamanho total da pagina

        // quando scroll for maior que 75% da pagina ativa a função
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
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
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setInfinite={setInfinite}
          setModalPhoto={setModalPhoto}
        />
      ))}
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
