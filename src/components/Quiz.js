import {useEffect, useState} from "react";
import axios from "axios";
import {NavLink, useLocation, useParams} from "react-router-dom";
import '../styles/Quiz.css'
import pho from '../assets/pho.jpg'
import Countdown from "./Countdown";
import '../styles/Quiz.css'
import food from '../assets/pho.jpg'


export const Quiz = () => {
    const [dataQuiz, setDataQuiz] = useState();
    const [nbGoodAnswers, setNbGoodAnswers] = useState([])
    const [checkedItem, setCheckedItem] = useState({});
    const {id} = useParams();
    let url = useLocation();

    function addItem() {
        if (checkedItem.answer == "true")
            setNbGoodAnswers(nbGoodAnswers.concat(checkedItem.answer))
    }

    const handleCheckboxChange = (event) => {

        setCheckedItem({
            id: parseInt(event.target.name), answer: (event.target.value)
        });

    };

    useEffect(() => {
        axios.get(`http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/quiz/${id}`).then((response) => {
            setDataQuiz(response.data);
        })
    }, [url])

    if (!dataQuiz) return null;

    return (
        <div className="container">
            {/* <img className="img" src={pho}></img> */}
            <h1>Question {dataQuiz.acf.numquestionpage}</h1>

        <div className="currQuest">
            <p className="question"> {dataQuiz.acf.question}</p>
            <Countdown />

            <div className="allAnswers">
            {dataQuiz.acf.reponses.map(item => (
                <label key={item.reponse}>
                    <input
                        className="answer"
                        type="checkbox"
                        name={item.id}
                        value={item.id}
                        checked={checkedItem === item.id}
                        onChange={handleCheckboxChange}
                    />
                    <span className="labelText">{item.reponse}</span>
                    <br></br>
                </label>)
            )}
            </div>
            <div className="nextButton">
                {
                    !dataQuiz.acf.numeropage ? (
                        <NavLink to={`/result/${nbGoodAnswers.length + 1}`}>Résultats</NavLink>) : (
                        <NavLink to={`/quiz/${dataQuiz.acf.numeropage}`}
                                 onClick={() => addItem()}>Question
                            suivante</NavLink>)
                }
            </div>
            </div>
        </div>
    )
}

