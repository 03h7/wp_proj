import {useEffect, useState} from "react";
import axios from "axios";
import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";

export const Quiz = () => {
    const [dataQuiz, setDataQuiz] = useState()

    const [checkedItem, setCheckedItem] = useState();
    const {id} = useParams();
    let url = useLocation();
    const navigate = useNavigate();
    const handleCheckboxChange = (event) => {
        setCheckedItem(parseInt(event.target.value));
    };

    useEffect(() => {
        axios.get(`http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/quiz/${id}`).then((response) => {
            setDataQuiz(response.data)

        })
    }, [url])

    if (!dataQuiz) return null;

    return (
        <div>

            <div> {dataQuiz.acf.question}</div>


            {dataQuiz.acf.reponses.map(item => (
                <label key={item.reponse}>
                    <input
                        type="checkbox"
                        name={item.id}
                        value={item.id}
                        checked={checkedItem === item.id}
                        onChange={handleCheckboxChange}
                    />
                    {item.reponse}
                </label>)
            )}

            {
                !dataQuiz.acf.numeropage ? (<NavLink to={`/pages/`}>Fin de quiz</NavLink>
                ) : (<NavLink to={`/quiz/${dataQuiz.acf.numeropage}`} onClick={() => setCheckedItem(null)}>Quiz
                    Suivant</NavLink>)
            }


        </div>


    )
}

