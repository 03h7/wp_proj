import {useEffect, useState} from "react";
import axios from "axios";

export const Quiz = (navigation) => {
    const [dataQuiz, setDataQuiz] = useState()

    useEffect(() => {
        axios.get(`http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/quiz/23`).then((response) => {
            setDataQuiz(response.data)
        })
    }, [])

    if (!dataQuiz) return null;

    return (
        <div>

            <div> {dataQuiz.acf.question}</div>
            {dataQuiz.acf.reponses.map((value) => <button
                key={value.reponse} value={value.reponse}>{value.reponse}</button>)}


            <button onClick={() => navigation.navigate(Quiz, {number: 14})}>Suivant</button>

        </div>

    )
}
