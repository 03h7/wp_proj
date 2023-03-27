import {NavLink, useParams} from "react-router-dom";
import {useEffect} from "react";
import "../styles/Quiz.css";
import feuArtifesse from "../assets/feu.jpg";


export const QuizResults = () => {

    const {nbGoodAnswers} = useParams();

    useEffect(() =>
        console.log(nbGoodAnswers))
    return (
      <div className="Wouhou" style={{ background: `url(${feuArtifesse})` }}>
        <div className="CardWouhouContainer">
          <h1>WOUHOUUUUU LE QUIZZ EST FIN</h1>
          <h2>Vous avez {nbGoodAnswers} bonnes réponses !!!</h2>
          <h1 style={{ color: "white!important" }}>
            <NavLink to="/">Accueil </NavLink>
          </h1>
        </div>
      </div>
    );
}

