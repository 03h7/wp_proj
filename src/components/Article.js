import {useEffect, useState} from "react";
import axios from "axios";
import '../styles/Page.css'
import ReactModal from 'react-modal';

const customStyles = {
    overlay: {}
};

export const Article = ({articleNumber}) => {
    const [article, setArticle] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
        console.log(showModal)

    }

    const handleCloseModal = () => {
        setShowModal(false);
        console.log(showModal)
    }

    useEffect(() => {
        if (articleNumber) {
            axios.get(`http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/posts/${articleNumber}?acf_format=standard`).then((response) => {
                setArticle(response.data)
            })
        }
    }, [])
    if (!article) return null;


    return (
      <div className={"ArticleContainer"}>
        <img
          className={"ImageContainer"}
          src={article.acf.image[0]}
          height={189}
          width={261}
          alt="Cool"
        />
        <div className={"TextContainer"}>
          <h2 className={"ArticleTitle"}>{article.acf.titre}</h2>
          <div
            className={"ArticleDescriptionText"}
            dangerouslySetInnerHTML={{ __html: article.acf.description }}
          ></div>

          <p className={"MoreButton"} onClick={handleOpenModal}>
            En savoir plus
          </p>

          <ReactModal
            isOpen={showModal}
            onRequestClose={handleCloseModal}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond noir transparent avec une opacité de 50%
              },
              content: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                right: "40px",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                width: "80%",
                height: "80%",
                padding: "0",
              },
            }}
            contentLabel="Article"
          >
            <div className={"ModalContainer"}>
              <div
                style={{ backgroundImage: `url(${article.acf.image[0]})` }}
                className="BackgroundHeader"
              >
                <header className="HeaderModalArticle">
                  <h1 className={"ModalTitleText"}>{article.acf.titre}</h1>
                </header>
              </div>
              <div className="HeaderBody">
                <div
                  dangerouslySetInnerHTML={{ __html: article.acf.description }}
                ></div>
                <div
                  dangerouslySetInnerHTML={{ __html: article.acf.corps }}
                ></div>
                <div className="ContainerButton">
                  <button className={"ButtonModal"} onClick={handleCloseModal}>
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </ReactModal>
        </div>
      </div>
    );
}
