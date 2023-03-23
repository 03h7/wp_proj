import {useEffect, useState} from "react";
import axios from "axios";
import ArticleStyles from '../styles/Article.css';

const Modal = (props) => {
    function handleCloseModal() {
        props.onClose();
    }

    return (
        <div>
            <div className="modal-background" onClick={handleCloseModal}/>
            <div className="modal">
                {/* Contenu de la modale */}
                {props.children}
                <button onClick={handleCloseModal}>Fermer la modale</button>
            </div>
        </div>
    );

};

export const Article = ({articleNumber}) => {
    const [article, setArticle] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    function handleOpenModal() {
        setModalOpen(true);
    }

    function handleCloseModal() {
        setModalOpen(false);
    }

    useEffect(() => {
        if (articleNumber) {
            axios.get(`http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/posts/${articleNumber}`).then((response) => {
                setArticle(response.data)
            })
        }
    }, [])
    if (!article) return null;


    return (
        <div onClick={handleOpenModal} className={ArticleStyles.ArticleContainer}>
            <h2>{article.acf.titre}</h2>
            {modalOpen && (
                <Modal onClose={handleCloseModal}>
                    <div>dvbrfbfbf</div>
                </Modal>
            )}
        </div>

    )
}
