import {Article} from "./Article";
import {useEffect, useState} from "react";
import axios from "axios";

export const Page = () => {

    const [page, setPage] = useState()
    useEffect(() => {
        axios.get(`http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/pages/51`).then((response) => {
            setPage(response.data.acf)
        })
    }, [])

    if (!page) return null;
    return (
        <div>
            {
                page.articles.map((article) => <div key={article.lienarticle}><Article
                    articleNumber={article.lienarticle}></Article>
                </div>)
            }

        </div>
    )
}
