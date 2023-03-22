import {useEffect, useState} from "react";
import axios from "axios";

export const Article = ({articleNumber}) => {

    const [article, setArticle] = useState(null);

    useEffect(() => {
        if (articleNumber) {
            axios.get(`http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/posts/${articleNumber}`).then((response) => {
                setArticle(response.data.acf)
            })
        }
    }, [])
    if (!article) return null;

    return (
        <div>
            {article.titre}

        </div>
    )
}
