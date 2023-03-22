import {useEffect, useState} from "react";
import axios from 'axios';

export const Home = () => {

    const [data, setData] = useState()
    useEffect(() => {
        axios.get('http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/pages').then((response) => {
            console.log(data)
            setData(response.data[0])

        })
    }, [])

    if (!data) return null;
    return (

        <div className="App">
            <header className="">

                <title>{data.title.rendered}</title>
                <p>{data.title.rendered}
                </p>
                <a
                    className="App-link"
                    href={data.guid.rendered}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Page 1
                </a>
            </header>

            <body>
            <p>{data.content.rendered}</p>
            </body>

        </div>

    )
}
