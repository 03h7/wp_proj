import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Article} from "./Article";
import "../styles/Page.css"

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
        <h1 className={"PageTitleText"}>{
            page.acf.titre
        }</h1>
        
        <p>
            {page.acf.description}
        </p>
        <p>
            {page.acf.corps}
        </p>

        <div className={"ArticlesPageContainer"}>
            {
                page.acf.articles.map((article) => <Article articleNumber={article.lienarticle}/>)
            }
        </div>


        </body>
    )
}
