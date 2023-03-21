import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Quiz = () => {
    const [dataQuiz, setDataQuiz] = useState()
    let navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/quiz/23`).then((response) => {
            setDataQuiz(response.data)
        })
    }, [])
    //faire pages avec articles, rubtriques

    if (!dataQuiz) return null;

    return (
        <div>

            <div> {dataQuiz.acf.question}</div>
            {dataQuiz.acf.reponses.map((value) => <button
                key={value.reponse} value={value.reponse}>{value.reponse}</button>)}


            <button onClick={() => navigate(Quiz)}>Suivant</button>

        </div>


    )
}
