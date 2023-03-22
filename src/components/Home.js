import {useEffect, useState} from "react";
import axios from 'axios';

export const Home = () => {
    const [dataPages, setDataPages] = useState();

    useEffect(() => {
        axios.get('http://g4.esiee-it.o3creative.fr/wp-json/wp/v2/pages/11?acf_format=standard').then((response) => {
            setDataPages(response.data);
        })
    }, [])

    if (!dataPages) return null;
    return (
        <div className="App">
            <header className="">
                <h1>Title : {dataPages.title.rendered}</h1>
            </header>

            <p>Description : {dataPages.acf.description}</p>

            <p>Corps : {dataPages.acf.corps}</p>

            {dataPages.acf.image.map((item, index) => (
                <img className={`img_${index}`} key={index} src={item} alt="img"></img>
            ))}

        </div>
    )
}
