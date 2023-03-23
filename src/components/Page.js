import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Article} from "./Article";

export const Page = () => {
    const {id} = useParams();
    const [page, setPage] = useState()
    useEffect(() => {
        axios.get(`http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/pages/${id}`).then((response) => {
            setPage(response.data)
        })
    }, [])

    if (!page) return null;
    return (
        <body>
        <h1>Mon titre principal</h1>
        <img src="" alt="Image de page BEAN"/>
        {
            page.acf.articles.map((article) => <Article articleNumber={article.lienarticle}/>)
        }


        </body>
    )
}
